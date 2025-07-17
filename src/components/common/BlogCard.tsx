import styles from './styles/BlogCard.module.css';

interface BlogCardProps {
  title: string;
  content: string;
  link: string;
  imageUrl: string;
}

export default function BlogCard({ title, content, link, imageUrl }: BlogCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.square}>
        <img src={imageUrl} alt="Blog visual" className={styles.mask} />
        <div className={styles.h1}>{title}</div>
        <p>{content}</p>
          </div>
    </div>
  );
}
