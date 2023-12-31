import React from 'react';
import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css'
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount
    }}>
        <div className={`${styles.productCard} ${className}`} style={style}>
            {children({
              count: counter,
              isMaxCountReached,
              maxCount: initialValues?.count,
              product,
              increaseBy,
              reset,
            })}
        </div>
    </Provider>
  )
}
