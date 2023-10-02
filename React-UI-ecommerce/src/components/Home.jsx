import SideBar from "./SideBar";
import ShippingDetail from "./ShippingDetail";
import CardComponent from "./Card";
import Banner from "./Banner";
import BrandName from "./BrandName";

//Import CSS Files
import "../cssFiles/sideBar.css";
import "../cssFiles/shippingDetail.css";
import "../cssFiles/card.css";

const Home = () => {
  return (
    <>
      <SideBar />
      <ShippingDetail />
      <Banner />   
      <CardComponent />
      <BrandName/>
    </>
  );
};

export default Home;
