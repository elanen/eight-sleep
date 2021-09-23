import moment from "moment";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Interval } from "../types/intervals";
import Bar from "./Bar";
import Card from "./Card";
import ChartCard from "./ChartCard";
import SleepStages from "./SleepStages";

interface ClientProps {
  interval: Interval | undefined;
  selectedDate: number;
  selectedUser: number;
}

const Client: React.FC<ClientProps> = (props) => {
  const [lowestHR, setLowestHR] = useState<number | null>(null);
  const [totalSleep, setTotalSleep] = useState<string | null | undefined>(null);
  const [timeInBed, setTimeInBed] = useState<string | null | undefined>(null);
  const [wakeupTime, setWakeupTime] = useState<moment.Moment | null>(null);

  const findLowestHR = () => {
    const heartRates = props.interval?.timeseries.heartRate
      .map((a) => a.filter((i) => typeof i === "number"))
      .flat();
    // @ts-ignore
    const hr = Math.min(...heartRates);
    setLowestHR(Math.round(hr));
  };

  const convertSecondsToUserFriendlyString = (numbers: number[]) => {
    const secondsAsleep = numbers?.reduce((a, b) => a + b, 0);
    const hoursAsleep = secondsAsleep ? Math.floor(secondsAsleep / 60 / 60) : 0;
    const minutesAsleep = secondsAsleep
      ? Math.floor(secondsAsleep / 60) - hoursAsleep * 60
      : 0;
    return `${hoursAsleep}h ${minutesAsleep}m`;
  };

  const calculateStagePercent = (stage: string) => {
    const timeInBed = props.interval?.stages
      .filter((s) => s.stage === stage)
      .map((s) => Number(s.duration))
      .reduce((a, b) => a + b, 0);
    const timeInStage = props.interval?.stages
      .map((s) => Number(s.duration))
      .reduce((a, b) => a + b, 0);
    if (timeInBed && timeInStage) {
      return (timeInBed / timeInStage) * 100;
    }
    return 0;
  };

  const calculateStageLength = (stage: string) => {
    const stageLength = props.interval?.stages
      .filter((s) => s.stage === stage)
      .map((s) => Number(s.duration));
    return stageLength && convertSecondsToUserFriendlyString(stageLength);
  };

  const calculateTotalSleep = () => {
    const stagesAsleep = props.interval?.stages
      .filter((s) => s.stage !== "awake")
      .filter((s) => s.stage !== "out")
      .map((s) => Number(s.duration));
    const ts = stagesAsleep && convertSecondsToUserFriendlyString(stagesAsleep);
    setTotalSleep(ts);
  };

  const calculateTimeInBed = () => {
    const ts =
      props.interval &&
      convertSecondsToUserFriendlyString(
        props.interval?.stages.map((s) => Number(s.duration))
      );
    setTimeInBed(ts);
  };

  const calculateWakeupTime = () => {
    const toAdd = props.interval?.stages
      .map((s) => Number(s.duration))
      .reduce((a, b) => a + b, 0);
    const wut = moment(props.interval?.ts).add(toAdd, "seconds");
    setWakeupTime(wut);
  };

  useEffect(() => {
    findLowestHR();
    calculateTimeInBed();
    calculateTotalSleep();
    calculateWakeupTime();
  }, [props.selectedDate, props.selectedUser]); // eslint-disable-line

  return (
    <>
      {props.interval && (
        <>
          <div className={styles.grid}>
            <div className={styles.cardRow}>
              <Card title="Sleep Score" score={props.interval?.score} />
              <Card title="Lowest HR" score={lowestHR} />
            </div>
            <div className={styles.cardRow}>
              <Card title="Total Sleep" score={totalSleep} />
              <Card title="Time in Bed" score={timeInBed} />
            </div>
          </div>

          <div className={styles.barGroup}>
            <div className={styles.chartCard}>
              <h1>Sleep Stages</h1>
              <SleepStages
                bedtime={props.interval.ts}
                wakeupTime={wakeupTime}
                stages={props.interval.stages}
              />
              <div className={styles.bars}>
                <Bar
                  title={`Out ${calculateStageLength("out")}`}
                  width={`calc(${calculateStagePercent("out")}%)`}
                  bgColor="#FFFFFF50"
                />
                <Bar
                  title={`Awake ${calculateStageLength("awake")}`}
                  width={`calc(${calculateStagePercent("awake")}%)`}
                  bgColor="#FFFFFF"
                />
                <Bar
                  title={`Light ${calculateStageLength("light")}`}
                  width={`calc(${calculateStagePercent("light")}%)`}
                  bgColor="#85C9FA"
                />
                <Bar
                  title={`REM ${calculateStageLength("rem")}`}
                  width={`calc(${calculateStagePercent("rem")}%)`}
                  bgColor="#568BBD"
                />
                <Bar
                  title={`Deep ${calculateStageLength("deep")}`}
                  width={`calc(${calculateStagePercent("deep")}%)`}
                  bgColor="#2C4677"
                />
              </div>
            </div>
          </div>

          <ChartCard
            fill
            title="Resting Heart Rate"
            bedtime={props.interval.ts}
            wakeupTime={wakeupTime}
            data={props.interval.timeseries.heartRate}
          />
          <ChartCard
            fill
            title="Respiratory Rate"
            bedtime={props.interval.ts}
            wakeupTime={wakeupTime}
            data={props.interval.timeseries.respiratoryRate}
          />
          <ChartCard
            fill
            title="Room Temperature"
            bedtime={props.interval.ts}
            wakeupTime={wakeupTime}
            data={props.interval.timeseries.tempRoomC}
          />
          <ChartCard
            fill
            title="Bed Temperature"
            bedtime={props.interval.ts}
            wakeupTime={wakeupTime}
            data={props.interval.timeseries.tempBedC}
          />
        </>
      )}
    </>
  );
};

export default Client;
