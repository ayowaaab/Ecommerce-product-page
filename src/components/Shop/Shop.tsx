import styles from "./Shop.module.css";
interface Props {
  quantity: number;
  appearance: boolean;
  addToCard: boolean;
}
function Shop({ quantity, appearance, addToCard }: Props) {
  if (appearance)
    return (
      <>
        <div className={styles.shopBox}>
          <h3>Cart</h3>
          <br />
          <hr />
          <br />
          {addToCard && (
            <div>
              <div className={styles.content}>
                <img id={styles.img} src="image-product-1-thumbnail.jpg" />
                <div>
                  <div className={styles.detail}>
                    <p>Fall limited edition sneakers</p>
                    <p>
                      $125.00 x {quantity}
                      <span>
                        <b>${125 * quantity}.00</b>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <button>Checkout</button>
            </div>
          )}
          {!addToCard && <p>Your Cart is Empty </p>}
        </div>
      </>
    );
  return;
}

export default Shop;
