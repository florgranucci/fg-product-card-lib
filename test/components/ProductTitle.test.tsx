import renderer  from "react-test-renderer";
import React from "react";
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from "../data/products";
import { ProductCard } from "../../src/components/ProductCard";

describe('ProductTitle', () => {
  it('renders correctly with custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom title" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly the product title', () => {
    const wrapper = renderer.create(
        <ProductCard product={product1}>
            {
                () => <ProductTitle title={product1.title} />
            }
        </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
