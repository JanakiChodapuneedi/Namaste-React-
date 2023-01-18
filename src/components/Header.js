import { IMG_CDN_URL } from "../constants";

const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        className="logo"
        src= {IMG_CDN_URL}
      />
    </a>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
