import Footer from './Footer.jsx'
import Header from "./Header.jsx";
import { Outlet, Link } from "react-router-dom";

export default function Layout () {

  return (
    <>
      <nav class="w3-top">
        <div
          class="w3-sidebar w3-black w3-text-orange w3-padding w3-card w3-hover-text-white"
          style={{ letterSpacing: "3px", width: 150, height: 290}}
        >
          <Link class="w3-bar-item w3-button" to="/">
            Home
          </Link>
          <Link class="w3-bar-item w3-button" to="/tablon">
            Anuncios
          </Link>
          <Link class="w3-bar-item w3-button" to="/orders">
            Orders
          </Link>
          <Link class="w3-bar-item w3-button" to="/menus">
            Músicos
          </Link>
          <Link class="w3-bar-item w3-button" to="/tables">
            Grupos
          </Link>
          <Link class="w3-bar-item w3-button" to="/fakeData">
            Fake Data
          </Link>
          <Link class="w3-bar-item w3-button" to="/about">
            About
          </Link>
        </div>
      </nav>

      <div>
        <Header class="w3-container" />
      </div>

      <div class="w3-content w3-black" style={{ width: "80%" }}>
        <Outlet />
      </div>

      <div class="w3-bar">
        <Footer />
      </div>
    </>
  );
};

