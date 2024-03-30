import styles from "./Shop.module.css";

function Shop() {
  return (
    <>
      <div className={styles.shopBox}>
        <h3>Cart</h3>
        <br />
        <hr />
        <br />
        <p>Your Cart is Empty </p>
      </div>
    </>
  );
}

export default Shop;
