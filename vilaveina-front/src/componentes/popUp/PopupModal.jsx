import * as React from "react";
import './popupmodal.css'


function PopupModal(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                {props.children}
            </div>
        </div>
    ) : "" ;
}

export default PopupModal