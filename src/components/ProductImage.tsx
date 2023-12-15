import React from 'react';
import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImg from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}
export const ProductImage = ({ img = '', className, style }: Props) => {
    const { product: { img: productImage } } = useContext(ProductContext);
    return(
    <img style={style} className={`${styles.productImg} ${className}`} src={img ? img : productImage || noImg} alt='product'></img>
)}