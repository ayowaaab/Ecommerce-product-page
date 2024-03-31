import { useRef, useState } from "react";
import Shop from "../Shop";
import styles from "./Nav.module.css";
interface Props {
  quantity: number;
  added: boolean;
}
function Nav({ quantity, added }: Props) {
  const [show, setShow] = useState(false);
  const menuList = useRef<HTMLDivElement | null>(null);

  const menuAction = (x: HTMLDivElement | null) => {
    if (x) x.style.transform = "translateX(0%)";
  };
  const closeAction = (x: HTMLDivElement | null) => {
    if (x) x.style.transform = "translateX(-100%)";
  };
  return (
    <>
      <nav className={styles.desktopNav}>
        <ul>
          <img src="logo.svg" alt="logo-icon" id={styles.logo} />
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
      <nav className={styles.mobileNav}>
        <div className={styles.leftNav}>
          <img
            src="icon-menu.svg"
            alt="logo-icon"
            onClick={() => menuAction(menuList.current)}
            id={styles.menu}
          />
          <img src="logo.svg" alt="logo-icon" id={styles.logo} />
        </div>
        <div className={styles.rightNav}>
          <div style={{ position: "relative" }}>
            <img
              style={{ cursor: "pointer" }}
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
          <Shop addToCard={added} appearance={show} quantity={quantity} />
        </div>
        <div ref={menuList} className={styles.mobilNavList}>
          <img
            onClick={() => closeAction(menuList.current)}
            src="icon-close.svg"
            alt="close"
            id={styles.close}
          />
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
