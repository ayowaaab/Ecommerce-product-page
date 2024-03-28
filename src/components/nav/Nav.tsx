import "./Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <div className="burg-logo">
            <img src="icon-menu.svg" alt="burger" id="burguer" />
            <img src="logo.svg" alt="logo-icon" id="logo" />
          </div>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
        <ul>
          <div className="shop-area">
            <img src="icon-cart.svg" alt="Shop-icon" />
          </div>
          <img id="profileIcon" src="image-avatar.png" alt="Profile-icon" />
        </ul>
      </nav>
      <hr />
      <br />
    </>
  );
}

export default Nav;
