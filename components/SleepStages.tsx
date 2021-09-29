import styles from "../styles/Home.module.css";
import moment from "moment";
import { Stage } from "../types/intervals";
import { useEffect, useState } from "react";

interface SleepStageProps {
  bedtime: string;
  wakeupTime: moment.Moment | null;
  stages: Stage[];
}

const SleepStages: React.FC<SleepStageProps> = (props) => {
  const [times, setTimes] = useState<string[]>([]);

  const calculatePercentOfTotal = (index: number) => {
    const stageTime = Number(props.stages[index].duration);
    const totalTime = props.stages
      .map((s) => Number(s.duration))
      .reduce((a, b) => a + b, 0);
    return (stageTime / totalTime) * 100;
  };

  useEffect(() => {
    let t = [];
    let bedtime = moment(props.bedtime);
    while (bedtime.isSameOrBefore(props.wakeupTime)) {
      t.push(bedtime.format("hA"));
      bedtime.add(1, "hour");
    }
    setTimes(t);
  }, [props.bedtime, props.wakeupTime]);

  return (
    <>
      <div className={styles.sleepStageBarContainer}>
        {props.stages.map((stage, index) => (
          <div
            key={index}
            style={{
              width: `${calculatePercentOfTotal(index)}%`,
            }}
          >
            <div
              className={styles.sleepStageBar}
              style={{
                backgroundColor:
                  stage.stage === "out" ? "#FFFFFF50" : "#FFFFFF00",
              }}
            />
            <div
              className={styles.sleepStageBar}
              style={{
                backgroundColor:
                  stage.stage === "awake" ? "#FFFFFF" : "#FFFFFF00",
              }}
            />
            <div
              className={styles.sleepStageBar}
              style={{
                backgroundColor:
                  stage.stage === "light" ? "#85C9FA" : "#85C9FA00",
              }}
            />
            <div
              className={styles.sleepStageBar}
              style={{
                backgroundColor:
                  stage.stage === "deep" ? "#2C4677" : "#2C467700",
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.sleepStageBarTimeContainer}>
        {times.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </>
  );
};

export default SleepStages;
