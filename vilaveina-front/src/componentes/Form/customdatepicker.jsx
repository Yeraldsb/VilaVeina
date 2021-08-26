import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CustomDatePicker = (props) => {

    return (
        <>
            <DatePicker
                className="datepickerbox"
                dateFormat="dd/MM/yyyy"
                selected={props.selected}
                disabled={"disabled"}

            />
        </>
    )
}


export default CustomDatePicker