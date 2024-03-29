import "./product.css";
import { FiShoppingCart } from "react-icons/fi";

const Product = () => {
  return (
    <>
      <div className="container">
        <div className="all-images">
          <img
            src="image-product-1.jpg"
            alt="mainProduct"
            className="product"
          />
          <div className="thumbnails">
            <img src="image-product-2-thumbnail.jpg" alt="detail" />
            <img src="image-product-2-thumbnail.jpg" alt="detail" />
            <img src="image-product-2-thumbnail.jpg" alt="detail" />
            <img src="image-product-2-thumbnail.jpg" alt="detail" />
          </div>
        </div>

        <div className="details">
          <h2 className="title">Sneaker company</h2>
          <h1 className="title">Fall limited edition sneakers</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            voluptas dolore, maiores dolorum corrupti voluptatem.
          </p>
          <h4 className="price">
            $125.00<mark>50%</mark>
          </h4>
          <span className="promo">$250.00</span>
          <div className="shopSection">
            <div className="quantity">
              <button>-</button>
              <span style={{ padding: ".3rem 1rem" }}>0</span>
              <button>+</button>
            </div>
            <button className="addToCardBtn">
              <FiShoppingCart />
              Add to card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
