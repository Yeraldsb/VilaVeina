import React from "react";
import imgLogoVeina from "../img/LogoVila.png";
import logoAgenda from "../img/LogoAgenda.jpg";
import logoAjuntament from "../img/LogoAjuntament.gif";
import logoFoment from "../img/LogoFoment.png";
import PopupModal from "../popUp/PopupModal";
import {useState} from "react";


export function PaginaHome() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <div className="containerLogoVila">
                <img src={imgLogoVeina} alt="logo veina"/>
            </div>

            <button className="containerEntrar" onClick={ () => setButtonPopup(true)} > Entrar </button>

            <PopupModal trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h1> TEST</h1>
                <p>holiholilhohhlhihlhi</p>
            </PopupModal>




            <div> footer
                <img src={logoAgenda} alt="logo agenda"/>
                <img src={logoAjuntament} alt="logo ajuntament"/>
                <img src={logoFoment} alt="logo foment"/>

            </div>

        </div>
    )
}