import React from "react";
import imgLogoVeina from "../img/LogoVila.png";
import logoAgenda from "../img/LogoAgenda.png";
import logoAjuntament from "../img/LogoAjuntament.gif";
import logoFoment from "../img/LogoFoment.png";
import PopupModal from "../popUp/PopupModal";
import {useState} from "react";
import "./paginahome.css"


export function PaginaHome() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="containerHome">
            <div className="containerLogoVila">
                <img src={imgLogoVeina} alt="logo veina"/>
            </div>

            <button className="containerEntrar" onClick={() => setButtonPopup(true)}> Entrar</button>
            <div className="containerFooter">
                <img className="imgAgenda" src={logoAgenda} alt="logo agenda"/>
                <img className="imgAyuntament" src={logoAjuntament} alt="logo ajuntament"/>
                <img className="imgFoment" src={logoFoment} alt="logo foment"/>

            </div>
            <PopupModal trigger={buttonPopup} setTrigger={setButtonPopup}>

            </PopupModal>




        </div>
    )
}