import styles from "./styles/Btn82.module.css";

function Btn82({ text, onClick }) {
  return (
    <button
      className={styles.button_82_pushable}
      role="button"
      onClick={onClick}
    >
      <span className={styles.button_82_shadow}></span>
      <span className={styles.button_82_edge}></span>
      <span className={styles.button_82_front}>{text}</span>
    </button>
  );
}

export default Btn82;
