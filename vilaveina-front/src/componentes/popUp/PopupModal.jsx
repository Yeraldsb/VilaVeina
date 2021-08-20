import * as React from "react";
import './popupmodal.css'


function PopupModal(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                {props.children}
                <form>
                <div className="form">
                <div className="form-element">
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" id="usuario" name="usuario" placeholder="Enter Usuario"/>
                </div>
                <div className="form-element">
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="text" id="contraseña" name="contraseña" placeholder="Enter Contraseña"/>

                </div>
                    <input type="submit" value="login" />


                </div>
                </form>
            </div>
        </div>
    ) : "" ;
}

export default PopupModal