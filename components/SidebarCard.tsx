import styles from "../styles/Home.module.css";

interface SidebarCardProps {
  index: number;
  selectedUser: number;
  onClick: Function;
}

const SidebarCard: React.FC<SidebarCardProps> = (props) => (
  <div
    onClick={() => props.onClick()}
    className={styles.sidebarCard}
    style={
      props.selectedUser === props.index
        ? { backgroundColor: "rgba(255,255,255,0.4)" }
        : {}
    }
  >
    <h3>{`Client ${props.index + 1}`}</h3>
  </div>
);

export default SidebarCard;
