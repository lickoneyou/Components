import { Iproducts, products } from '../data/products'

interface ProductsProps {
  products: Iproducts
}

export function Cart({ products }: ProductsProps) {
  return (
    <div className="productItem">
      <h2 className="productsTitle">{products.title}</h2>
      <img className="productsImg" src={products.image} />
      <div className="productsPlace">
        <div className="productDescription">{products.description}</div>
        <div className="categoryWrapper">
          <div className="category">
            <b>{products.category}</b>
          </div>
          <div className="rateCount">
            <p>
              <span>RATE:</span> <b>{products.rating.rate}</b>
            </p>
            <p>
              <span>COUNT:</span> <b>{products.rating.count}</b>
            </p>
          </div>
        </div>
      </div>
      <p className="price">
        <span>PRICE:</span> <b>{products.price}</b>
      </p>
    </div>
  )
}
