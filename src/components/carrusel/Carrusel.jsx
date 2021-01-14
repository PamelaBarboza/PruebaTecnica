import React from "react";
import { Slide } from "react-slideshow-image";
import "../carrusel/carrusel.css";
import img1 from "../../img/productos carrusel/scooter-prodcutos-1-mb@2x.jpg";
import img2 from "../../img/productos carrusel/scooter-prodcutos-2-mb@2x.jpg";
import img3 from "../../img/productos carrusel/scooter-prodcutos-3-mb@2x.jpg";
import img4 from "../../img/productos carrusel/scooter-prodcutos-4-mb@2x.jpg";
// import img5 from "../../img/productos carrusel/scooter-producto-1-desk@2x.jpg";
// import img6 from "../../img/productos carrusel/scooter-producto-2-desk@2x.jpg";
// import img7 from "../../img/productos carrusel/scooter-producto-3-desk@2x.jpg";
// import img8 from "../../img/productos carrusel/scooter-producto-4-desk@2x.jpg";

const Carrusel = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <img className="mobile" src={img1} alt="" />
          <div>
            <span> SCOOTER ELÉCTRICO 10´ ZEECLO FENIX</span>
            <span className="violeta">$599.000</span>
            <br />
            <span className="btn-violeta">VER PRODUCTOS</span>
          </div>
        </div>

        <div className="each-slide">
          <img className="mobile" src={img2} alt="" />
          <div>
            <span> SCOOTER ELÉCTRICO 10´ ZEECLO FENIX</span>
            <span className="violeta">$599.000</span>
            <br />
            <span className="btn-violeta">VER PRODUCTOS</span>
          </div>
        </div>
        <div className="each-slide">
          <img className="mobile" src={img3} alt="" />
          <div>
            <span> SCOOTER ELÉCTRICO 10´ ZEECLO FENIX</span>
            <span className="violeta">$599.000</span>
            <br />
            <span className="btn-violeta">VER PRODUCTOS</span>
          </div>
        </div>
        <div className="each-slide">
          <img className="mobile" src={img4} alt="" />
          <div>
            <span> SCOOTER ELÉCTRICO 10´ ZEECLO FENIX</span>
            <span className="violeta">$599.000</span>
            <br />
            <span className="btn-violeta">VER PRODUCTOS</span>
          </div>
        </div>
        {/* <div className="each-slide">
          <img  className="desktop" src={img5} alt="" />
        </div>
        <div className="each-slide">
          <img  className="desktop" src={img6} alt="" />
        </div>
        <div className="each-slide">
          <img  className="desktop" src={img7} alt="" />
        </div>
        <div className="each-slide">
          <img className="desktop"  src={img8} alt="" />
        </div> */}
      </Slide>
      <br />
      <br />
      <br />

    </div>
  );
};

export default Carrusel;
