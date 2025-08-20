import styles from "./styles/AnimatedLink.module.css";

interface AnimatedLinkProps {
  label: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({  label }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" className={styles.link}>
      {label}
    </a>
  );
};

export default AnimatedLink;
