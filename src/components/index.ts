import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductButtons } from "./ProductButton";
import { ProductCard as ProductCardHoc } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButton";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHoc, {
    Buttons: ProductButtons,
    Image: ProductImage,
    Title: ProductTitle,
})

export default ProductCard