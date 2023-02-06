import React from "react";
import CardsContainer from "./Card";
import Sidebar from "./Sidebar";

const MainContainer = () => {

   let check= localStorage.getItem('login');
   console.log("check",check)
 
  return (
    <>
      <div className="home">
        Dashboard
      </div>

      <Sidebar />
    <CardsContainer />
    </>
  );
};
export default MainContainer;
