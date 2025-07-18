import styles from './styles/ImgIcon.module.css';

export default function ImgIcon({ imgSrc = '/git.webp', width=70, height=70 }) {
  return (
    <div className={styles.imgIcon_container}>
      <img src={imgSrc} width={width} height={height} alt="icon" />
    </div>
  );
}
