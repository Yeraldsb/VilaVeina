import * as React from "react";
import Form from 'react-bootstrap/Form';
import CustomDatePicker from "./customdatepicker";
import {useState} from "react";
import "./FormEnquestas.css";



export const FormEnquestas = () => {
    const [datepick, setDatePick] = useState(new Date());


    return (
        <div className={"formularienquestadiv"}>
            <Form className={"formularienquesta"}>
                <Form.Group>
                    <Form.Label> Data : </Form.Label>
                </Form.Group>
                <Form.Group>
                    <CustomDatePicker
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                        selected={datepick}
                        onChange={(date) => setDatePick(date)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Vila Veïna : </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Gènere </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Canal d'atenció </Form.Label>
                </Form.Group>

                <div className={"formedatinaixement"}>
                <Form.Group>
                    <Form.Label> Edat </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label className={"llocdenaixement"}> Lloc de naixement </Form.Label>
                </Form.Group>
                </div>

            </Form>
        </div>
    )


}