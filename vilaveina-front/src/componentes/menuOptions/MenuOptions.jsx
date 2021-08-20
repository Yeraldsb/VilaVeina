import * as React from "react";
import imgLogoVeina from "../img/LogoVila.png";
import logoAgenda from "../img/LogoAgenda.jpg";
import logoAjuntament from "../img/LogoAjuntament.gif";
import logoFoment from "../img/LogoFoment.png";
import "./menuOptions.css";



export const MenuOptions = () => (
    <div>
        <div className="LogoVilaMenuPage">
            <img src={imgLogoVeina} alt="logo veina" className="LogoVilaMenuPage"/>
        </div>
        <div className="buttonsmenu">
        <button className="leftbutton">
            <img src={imgLogoVeina} alt="logo veina" className="iconoEncuesta"/>
        </button>
            <h1 className="titulosBotones"> Encuesta </h1>
        <button className="rightbutton">
            <img src={imgLogoVeina} alt="logo veina" className="iconoEstadistica"/>
        </button>
            <h1 className="titulosBotones"> Estadisticas </h1>

        </div>

        <footer>
            <div className="line"> </div>
            <img src={logoAgenda} alt="logo agenda"/>
            <img src={logoAjuntament} alt="logo ajuntament"/>
            <img src={logoFoment} alt="logo foment"/>

        </footer>

    </div>


);



