import styles from './styles/SecurityCard.module.css'

interface SecurityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SecurityCard = ({ icon, title, description }: SecurityCardProps) => {
  return (
    <div className={styles.superBox}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.icon_bg}></div>
        </div>

        <div className={styles.icon}>{icon}</div>
      </div>

      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default SecurityCard;
