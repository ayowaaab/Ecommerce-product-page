import { useState } from "react";
import Shop from "../Shop";
import styles from "./Nav.module.css";
interface Props {
  quantity: number;
  added: boolean;
}
function Nav({ quantity, added }: Props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <ul id={styles.ul}>
          <div className={styles.burgLogo}>
            <img src="icon-menu.svg" alt="burger" id={styles.burguer} />
            <img src="icon-close.svg" alt="close" id={styles.close} />
            <img src="logo.svg" alt="logo-icon" id={styles.logo} />
          </div>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
        <ul>
          <div style={{ position: "relative" }}>
            <img
              onClick={() => setShow(!show)}
              src="icon-cart.svg"
              alt="Shop-icon"
            />
            {added && <span className={styles.notif}>1</span>}
          </div>
          <img
            id={styles.profileIcon}
            src="image-avatar.png"
            alt="Profile-icon"
          />
        </ul>
        <Shop addToCard={added} appearance={show} quantity={quantity} />
      </nav>
      <hr />
      <br />
    </>
  );
}

export default Nav;
