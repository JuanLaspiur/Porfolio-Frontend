import styles from './styles/SecurityCard.module.css';

interface SecurityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  size?: 'sm' | 'md' | 'lg';
    onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SecurityCard = ({ icon, title, description, size = 'md', onMouseEnter, onMouseLeave }: SecurityCardProps) => {
  const sizeClass = styles[`size_${size}`] || '';

  return (
    <div className={`${styles.superBox} ${sizeClass}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.icon_bg}></div>
        </div>

        {icon && (
          <img src={icon} className={styles.icon}/>
        
        )}
      </div>

      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default SecurityCard;
