import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import ShopComponent from "../../components/ShopComponent/ShopComponent";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import Videos from "../../components/Videos/Videos";
import Review from "../../components/Review/Review";
import DeliveryInfo from "../../components/DeliveryInfo/DeliveryInfo";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <ShopComponent />
      <ProductComponent />
      <Videos />
      <Review />
      <DeliveryInfo />
    </div>
  );
};

export default Home;
