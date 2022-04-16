import { useContext } from 'react';
import { ProductContext } from '../context/Contexts';
import { ProductImageProps } from '../interfaces/interfaces';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imageToShow: string;

  if (img) {
    imageToShow = img;
  } else if (product.img) {
    imageToShow = product.img;
  } else {
    imageToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imageToShow}
      alt="Product img"
    />
  );
};
