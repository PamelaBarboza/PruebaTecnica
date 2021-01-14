import React from 'react';
import "../main/main.css"
import ImgHead from "../../img/head-bg-mb@2x.jpg"
import ImgHeadDesk from "../../img/head-desk-@2x.jpg";




const Main = () => {
  return (
    <div className="container">
      <div className="containerImgHead">
        <img src={ImgHead} alt="header" />
      </div>
      <div className="containerImgHeadDesk">
        <img src={ImgHeadDesk} alt="header" />
      </div>
    </div>
  );
}

export default Main;
