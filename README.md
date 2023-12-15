# FG-product-card-lib

Prueba de despliegue de npm

## FG

## Ejemplo

```
<ProductCard
            key={product.id}
            product={product}
            initialValues={{
              count: 3,
              /* maxCount: 10, */
            }}
          >
            {
              ({
                count,
                isMaxCountReached,
                maxCount,
                increaseBy,
                reset,
              }) => (
                <>
                  <ProductCard.Image />
                  <ProductCard.Title />
                  <ProductCard.Buttons />
                </>
              )
            }
          </ProductCard>
```
