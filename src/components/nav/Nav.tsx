import Shop from "../Shop";
import styles from "./Nav.module.css";

function Nav() {
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
            <img src="icon-cart.svg" alt="Shop-icon" />
            <span className={styles.notif}>1</span>
            <Shop />
          </div>
          <img
            id={styles.profileIcon}
            src="image-avatar.png"
            alt="Profile-icon"
          />
        </ul>
      </nav>
      <hr />
      <br />
    </>
  );
}

export default Nav;
