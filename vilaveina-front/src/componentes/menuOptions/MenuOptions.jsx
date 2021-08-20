import * as React from "react";
import imgLogoVeina from "../img/LogoVila.png";
import logoAgenda from "../img/LogoAgenda.jpg";
import logoAjuntament from "../img/LogoAjuntament.gif";
import logoFoment from "../img/LogoFoment.png";
import listaVerde from "../img/listaVerde.png"
import estadisticaNaranja from "../img/estadisticaNaranja.png"
import "./menuOptions.css";



export const MenuOptions = () => (
    <div>
        <div className="LogoVilaMenuPage">
            <img src={imgLogoVeina} alt="logo veina" className="LogoVilaMenuPage"/>
        </div>

        <div className="buttonsmenu">
        <button className="button">
            <img src={listaVerde} alt="logo veina" className="iconoEncuesta"/>
        </button>
            <h1 className="titulosBotones"> Encuesta </h1>
        <button className="button">
            <img src={estadisticaNaranja} alt="logo veina" className="iconoEncuesta"/>
        </button>
            <h1 className="titulosBotones"> Estadisticas </h1>

        </div>

        <div className="line"> </div>
        <footer>
            <img src={logoAgenda} alt="logo agenda"/>
            <img src={logoAjuntament} alt="logo ajuntament"/>
            <img src={logoFoment} alt="logo foment"/>

        </footer>

    </div>


);



