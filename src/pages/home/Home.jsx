import Banner from "@/components/banner/Banner";
import HomeTop from "./HomeTop";
import Category from "./Category";
import {Brand} from "@/components/brand";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeTop />
      <Category />
      <Brand />
      <Products />
    </div>
  );
};

export default Home;
