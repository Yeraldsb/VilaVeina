import React from "react";
import imgLogoVeina from "../img/LogoVila.png";
import logoAgenda from "../img/LogoAgenda.jpg";
import logoAjuntament from "../img/LogoAjuntament.gif";
import logoFoment from "../img/LogoFoment.png";


export function PaginaHome() {
    return (
        <div>
            <div className="containerLogoVila">
                <img src={imgLogoVeina} alt="logo veina"/>
            </div>

            <button className="containerEntrar"> Entrar </button>

            <div> footer
                <img src={logoAgenda} alt="logo agenda"/>
                <img src={logoAjuntament} alt="logo ajuntament"/>
                <img src={logoFoment} alt="logo foment"/>

            </div>

        </div>
    )
}