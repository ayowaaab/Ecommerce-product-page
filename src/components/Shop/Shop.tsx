import styles from "./Shop.module.css";
import {} from "react-icons";
function Shop() {
  return (
    <>
      <div className={styles.shopBox}>
        <h3>Cart</h3>
        <br />
        <hr />
        <br />
        {/* <p>Your Cart is Empty </p> */}
        <div className={styles.content}>
          <img id={styles.img} src="image-product-1-thumbnail.jpg" />
          <div>
            <div className={styles.detail}>
              <p>Fall limited edition sneakers</p>
              <p>
                $125.00 x 3
                <span>
                  <b>$375.00</b>
                </span>
              </p>
            </div>
          </div>
        </div>
        <button>Checkout</button>
      </div>
    </>
  );
}

export default Shop;
