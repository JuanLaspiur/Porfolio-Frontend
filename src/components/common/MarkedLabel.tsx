import React from 'react';
import styles from './styles/MarkedLabel.module.css';

interface MarkedLabelProps {
  text: string;
  fontSize?: string;
  rotation?: string; 
}

const MarkedLabel: React.FC<MarkedLabelProps> = ({
  text,
  fontSize = '2.75rem',
  rotation = '-5deg',
}) => {
  return (
    <span
      className={styles.badge}
      style={{ fontSize, transform: `rotate(${rotation})` }}
    >
      {text}
    </span>
  );
};

export default MarkedLabel;
