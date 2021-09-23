import styles from "../styles/Home.module.css";
import moment from "moment";
import { Line } from "react-chartjs-2";

interface ChartCardProps {
  title: string;
  bedtime: string;
  wakeupTime: moment.Moment | null;
  data: (string | number)[][];
  fill: boolean;
}

const ChartCard: React.FC<ChartCardProps> = (props) => (
  <div className={styles.chartCard}>
    <h1>{props.title}</h1>
    <div className={styles.chart}>
      <Line
        data={{
          labels: [...props.data.map((d) => moment(d[0]).format("hA"))],
          datasets: [
            {
              label: props.title,
              // @ts-ignore
              data: props.data.map((d) => d[1]),
              fill: props.fill,
              backgroundColor: "#85C9FA20",
              borderColor: "#85C9FA",
              pointBackgroundColor: "#FFFFFF",
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
          },
        }}
      />
    </div>
  </div>
);

export default ChartCard;
