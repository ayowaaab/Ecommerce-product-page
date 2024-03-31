import { useState } from "react";
import styles from "./product.module.css";
import ShowProduct from "./showProduct";

interface Props {
  product: string[];
  thumbnail: string[];
  updateQte: (x: number) => void;
  addToCard: (x: boolean) => void;
}

const Product = ({ product, thumbnail, updateQte, addToCard }: Props) => {
  const [qte, setQte] = useState(0);
  const [show, setShow] = useState(false);
  const showUpdate = (x: boolean) => {
    setShow(x);
  };
  const plus = () => {
    setQte(qte + 1);
    updateQte(qte + 1);
  };
  const minus = () => {
    qte <= 0 ? setQte(0) : setQte(qte - 1);
    qte <= 0 ? updateQte(0) : updateQte(qte - 1);
    qte <= 1 ? addToCard(false) : null;
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.allImages}>
          <img className={styles.arrows} src="icon-next.svg" alt="" />
          <img className={styles.arrows} src="icon-previous.svg" alt="" />
          <img
            onClick={() => setShow(true)}
            src={product[0]}
            alt="mainProduct"
            className={styles.product}
          />
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
              <button onClick={minus}>
                <img src="icon-minus.svg" alt="minus" />
              </button>
              <span>{qte}</span>
              <button onClick={plus}>
                <img src="icon-plus.svg" alt="plus" />
              </button>
            </div>
            <button
              onClick={() => addToCard(true)}
              disabled={qte === 0}
              className={styles.addToCardBtn}
            >
              <img id={styles.shopCard} src="icon-cart.svg" />
              Add to card
            </button>
          </div>
        </div>
      </div>
      <ShowProduct show={show} updateShow={showUpdate} />
    </>
  );
};

export default Product;
