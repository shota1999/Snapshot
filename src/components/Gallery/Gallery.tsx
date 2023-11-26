import React from 'react';
import styles from './Gallery.module.scss';

type GalleryProps = {
  res: any[]; 
};

export const Gallery = ({ res }: GalleryProps) => {
  return (
    <div className={styles.container}>
      {res.map((item, index) => (
        <div key={index} className={styles.imageContainer}>
          <img className={styles.img} src={item.urls.small} alt={item.alt_description || 'Image'} />
        </div>
      ))}
    </div>
  );
};
