import { useState } from "react";
import { product, thumbnail } from "../../db";
import styles from "./show.module.css";
interface details {
  updateShow: (x: boolean) => void;
  show: boolean;
}

const ShowProduct = ({ show, updateShow }: details) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      {show && (
        <div className={styles.container}>
          <div className={styles.product}>
            <img
              onClick={() => {
                updateShow(false);
              }}
              id={styles.close}
              src="icon-close.svg"
              alt="closeIcon"
            />
            <img id={styles.mainPicture} src={product[index]} alt="img" />
            <div className={styles.arrows}>
              <img
                onClick={() => (index <= 0 ? setIndex(3) : setIndex(index - 1))}
                src="icon-previous.svg"
                alt="img"
              />
              <img
                onClick={() => (index >= 3 ? setIndex(0) : setIndex(index + 1))}
                src="icon-next.svg"
                alt="img"
              />
            </div>
          </div>
          <div className={styles.thumbnails}>
            {thumbnail.map((el, i) => (
              <img
                onClick={() => setIndex(i)}
                key={el}
                className={
                  i === index
                    ? [styles.thumb, styles.active].join(" ")
                    : styles.thumb
                }
                src={el}
                alt="img"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ShowProduct;
