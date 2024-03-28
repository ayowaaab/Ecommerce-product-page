import "./product.css";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia amet
            tempore corrupti nulla iure, unde dolor eligendi molestiae
            quibusdam, sequi ipsum nesciunt? Non nulla sunt provident aperiam?
            Aperiam, iure aspernatur?
          </p>
          <h4 className="price">
            $125.00<mark>50%</mark>
          </h4>
          <span className="promo">*250.00$</span>
          <div className="quantity">
            <button>-</button>
            <button>0</button>
            <button>+</button>
          </div>
          <button className="addToCardBtn">
            <i></i>Add To Card
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
