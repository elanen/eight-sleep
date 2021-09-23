import styles from "../styles/Home.module.css";

interface BarProps {
  width: string;
  bgColor: string;
  title: string;
}

const Bar: React.FC<BarProps> = (props) => (
  <div className={styles.barContainer}>
    <div
      className={styles.bar}
      style={{
        width: props.width,
        backgroundColor: props.bgColor,
      }}
    />
    <p
      style={
        props.title.includes("0h 0m")
          ? { marginLeft: 0, color: "#EA6E5F" }
          : { marginLeft: 12 }
      }
    >
      {props.title}
    </p>
  </div>
);

export default Bar;
