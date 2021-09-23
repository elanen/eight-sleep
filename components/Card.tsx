import styles from "../styles/Home.module.css";

interface CardProps {
  score: string | number | undefined | null;
  title: string;
}

const Card: React.FC<CardProps> = (props) => (
  <div className={styles.card}>
    <div className={styles.display}>
      <h1>{props.score}</h1>
      <p>{props.title}</p>
    </div>
  </div>
);

export default Card;
