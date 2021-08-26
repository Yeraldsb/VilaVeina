import * as React from "react";
import logoAgenda from "../img/LogoAgenda.png";
import logoAjuntament from "../img/LogoAjuntament.gif";
import logoFoment from "../img/LogoFoment.png";
import "./footer.css";


export const Footer = () => (
          <footer>
            <div className="line"> </div>
            <div className="contenedorLogos">
            <div><img className="imgAju" src={logoAjuntament} alt="logo ajuntament"/></div>
            <div><img className="imgAgenda" src={logoAgenda} alt="logo agenda"/></div>
            <div> <img className="imgFoment" src={logoFoment} alt="logo foment"/></div>
            </div>

        </footer>
);



