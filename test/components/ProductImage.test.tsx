import renderer  from "react-test-renderer";
import React from "react";
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from "../data/products";
import { ProductCard } from "../../src/components/ProductCard";

describe('ProductImage', () => {
  it.skip('renders correctly with custom image', () => {
    const wrapper = renderer.create(<ProductImage img="https://test.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly the product image', () => {
    const wrapper = renderer.create(
        <ProductCard product={product2}>
            {
                () => <ProductImage />
            }
        </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
