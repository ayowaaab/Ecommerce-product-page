import { thumbnail } from "../../db";
import styles from "./show.module.css";
interface details {
  updateShow: (x: boolean) => void;
  show: boolean;
}

const ShowProduct = ({ show, updateShow }: details) => {
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
            <img id={styles.mainPicture} src="image-product-1.jpg" alt="img" />
            <div className={styles.arrows}>
              <img src="icon-previous.svg" alt="img" />
              <img src="icon-next.svg" alt="img" />
            </div>
          </div>
          <div className={styles.thumbnails}>
            {thumbnail.map((el) => (
              <img key={el} className={styles.thumb} src={el} alt="img" />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ShowProduct;
