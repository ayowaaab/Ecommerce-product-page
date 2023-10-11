// import Shop from "../Shop/Shop";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <div className="burg-logo">
            <img src="src/icon-menu.svg" alt="burger" id="burguer" />
            <img src="src/logo.svg" alt="logo-icon" id="logo" />
          </div>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
        <ul>
          <div className="shop-area">
            <img src="src/icon-cart.svg" alt="Shop-icon" />
            {/* <Shop /> */}
          </div>
          <img id="profileIcon" src="src/image-avatar.png" alt="Profile-icon" />
        </ul>
      </nav>
      <hr />
    </>
  );
}

export default Nav;
