import Navbar from "../navbar/Navbar";
import CatalogMenu from "./CatalogMenu";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <Navbar />
      <CatalogMenu />
    </header>
  );
};

export default Header;
