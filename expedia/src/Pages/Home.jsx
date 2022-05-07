import React from "react";
import BasicTabs from "../Components/BasicTabs";
import ExpediaParent from "../Components/ExpediaParent";
import { Footer } from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <div> <BasicTabs/></div>       
        <ExpediaParent />
      </div>
        <Footer />
    </div>
  );
};

export default Home;
