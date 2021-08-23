import * as React from "react";
import imgLogoVeina from "../img/LogoVila.png";
import logoAgenda from "../img/LogoAgenda.png";
import logoAjuntament from "../img/LogoAjuntament.gif";
import logoFoment from "../img/LogoFoment.png";
import listaVerde from "../img/listaVerde.png"
import estadisticaNaranja from "../img/estadisticaNaranja.png"
import "./menuOptions.css";


export const MenuOptions = () => (
    <div className="container">
        <div className="LogoVilaMenuPage">
            <img src={imgLogoVeina} alt="logo veina" className="LogoVilaMenuPage"/>
        </div>
        <div className="contenedorBotones">
            <div className="buttonsmenu">
             <button className="button">
                <img src={listaVerde} alt="logo veina" className="iconoEncuesta"/>
             </button>

             <button className="button">
                <img src={estadisticaNaranja} alt="logo veina" className="iconoEncuesta"/>
             </button>
         </div>
            <div className="titulosBotones1">
             <h1 className="titulosBotones"> Encuesta </h1>
             <h1 className="titulosBotones"> Estadísticas </h1>
            </div>
        </div>


        <footer>
            <div className="line"> </div>
            <div className="contenedorLogos">
            <div><img className="imgAju" src={logoAjuntament} alt="logo ajuntament"/></div>
            <div><img className="imgAgenda" src={logoAgenda} alt="logo agenda"/></div>
            <div> <img className="imgFoment" src={logoFoment} alt="logo foment"/></div>
            </div>

        </footer>

    </div>


);



