import * as React from "react";
import imgLogoVeina from "../img/LogoVila.png";
import logoAgenda from "../img/LogoAgenda.jpg";
import logoAjuntament from "../img/LogoAjuntament.gif";
import logoFoment from "../img/LogoFoment.png";



export const MenuOptions = () => (
    <div>
        <div className="LogoVilaMenuPage">
            <img src={imgLogoVeina} alt="logo veina" className="LogoVilaMenuPage"/>
        </div>
        <div className="buttonsmenu">
        <button className="leftbutton"> Encuesta </button>
        <button className="rightbutton"> Estadística </button>

        </div>

        <div> footer
            <img src={logoAgenda} alt="logo agenda"/>
            <img src={logoAjuntament} alt="logo ajuntament"/>
            <img src={logoFoment} alt="logo foment"/>

        </div>

    </div>


);



