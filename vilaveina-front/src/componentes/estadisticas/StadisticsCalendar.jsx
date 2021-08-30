import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputMask from "react-input-mask";
import {Button} from "react-bootstrap";


const StadisticsCalendar = (props) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return (
        <>
            <DatePicker
                className="form-control"
                customInput={<InputMask type="text" mask="99/99/9999"/>}
                renderCustomHeader={({
                                         date,
                                         changeYear,
                                         changeMonth,
                                         decreaseMonth,
                                         increaseMonth,
                                         prevMonthButtonDisabled,
                                         nextMonthButtonDisabled
                                     }) => (
                    <div className="input-group input-group-sm input-group-calender">
                        <div className="input-group-prepend">
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    decreaseMonth();
                                }}
                                disabled={prevMonthButtonDisabled}
                                className="btn btn-outline-secondary"
                                type="button"
                            >
                                {"<"}
                            </Button>
                        </div>

                        <input
                            type="number"
                            onChange={({target: {value}}) => changeYear(value)}
                            value={date.getFullYear()}
                            className="form-control"
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-addon1"
                        />
                        <select
                            className="form-control"
                            value={months[date.getMonth()]}
                            onChange={({target: {value}}) =>
                                changeMonth(months.indexOf(value))
                            }
                        >
                            {months.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className="input-group-append">
                            <Button className="btn btn-outline-secondary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        increaseMonth();
                                    }}
                                    disabled={nextMonthButtonDisabled}
                            >
                                {">"}
                            </Button>
                        </div>
                    </div>
                )}
                wrapperClassName={props.wrapperClassName}
                className="form-control"
                dateFormat="dd/MM/yyyy"
                minDate={false}
                selected={props.selected}
                onChange={props.onChange}
            />
        </>
    )
}


export default StadisticsCalendar;