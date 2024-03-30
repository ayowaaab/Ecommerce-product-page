import styles from "./product.module.css";

interface Props {
  product: string[];
  thumbnail: string[];
}

const Product = ({ product, thumbnail }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.allImages}>
          <img className={styles.arrows} src="icon-next.svg" alt="" />
          <img className={styles.arrows} src="icon-previous.svg" alt="" />
          <img src={product[0]} alt="mainProduct" className={styles.product} />
          <div className={styles.thumbnails}>
            {thumbnail.map((el) => (
              <img key={el} src={el} alt="detail" />
            ))}
          </div>
        </div>

        <div className={styles.details}>
          <h2 className={styles.title}>Sneaker company</h2>
          <h1 className={styles.title}>Fall limited edition sneakers</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            voluptas dolore, maiores dolorum corrupti voluptatem.
          </p>
          <div className={styles.allPrice}>
            <h4 className={styles.price}>
              $125.00<mark>50%</mark>
            </h4>
            <span className={styles.promo}>$250.00</span>
          </div>
          <div className={styles.shopSection}>
            <div className={styles.quantity}>
              <button>
                <img src="icon-minus.svg" alt="minus" />
              </button>
              <span>0</span>
              <button>
                <img src="icon-plus.svg" alt="plus" />
              </button>
            </div>
            <button className={styles.addToCardBtn}>
              <img id={styles.shopCard} src="icon-cart.svg" />
              Add to card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
