import "./product.css";
import { FiShoppingCart } from "react-icons/fi";

const Product = () => {
  const thumbnail = [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
  ];
  const product = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];
  return (
    <>
      <div className="container">
        <div className="all-images">
          <img className="arrows" src="icon-next.svg" alt="" />
          <img className="arrows" src="icon-previous.svg" alt="" />
          <img
            src="image-product-1.jpg"
            alt="mainProduct"
            className="product"
          />
          <div className="thumbnails">
            {thumbnail.map((el) => (
              <img src={el} alt="detail" />
            ))}
          </div>
        </div>

        <div className="details">
          <h2 className="title">Sneaker company</h2>
          <h1 className="title">Fall limited edition sneakers</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            voluptas dolore, maiores dolorum corrupti voluptatem.
          </p>
          <div className="all-price">
            <h4 className="price">
              $125.00<mark>50%</mark>
            </h4>
            <span className="promo">$250.00</span>
          </div>
          <div className="shopSection">
            <div className="quantity">
              <button>
                <img src="icon-minus.svg" alt="" />
              </button>
              <span style={{ padding: ".3rem 1rem" }}>0</span>
              <button>
                <img src="icon-plus.svg" alt="" />
              </button>
            </div>
            <button className="addToCardBtn">
              <img id="shop-card" src="icon-cart.svg" />
              Add to card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
