import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './tablaEncuestadores.css'

function createData(id, name, Cognom, vila, user,  password) {
    return {id,  name, Cognom, vila, user,  password};
}

const rows = [
    createData(1,'Yeraldin', "Salazar", "Sant Andreu", "Yeraldsb9412", 1234),
    createData(2,'Matias', "Guzman", "Barceloneta", "Mathi00", 2284),

];


export default function TablaEncuestadores() {

    return (
        <TableContainer component={Paper} className="contenedorTabla">
            <Table className="tabla" >
                <TableHead>
                    <TableRow className="tcolor">
                        <TableCell>Id</TableCell>
                        <TableCell align="left">Nom</TableCell>
                        <TableCell align="right">Cognom</TableCell>
                        <TableCell align="right">Vila Veina</TableCell>
                        <TableCell align="right">User</TableCell>
                        <TableCell align="right">Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell  >{row.id}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="right">{row.Cognom}</TableCell>
                            <TableCell align="right">{row.vila}</TableCell>
                            <TableCell align="right">{row.user}</TableCell>
                            <TableCell align="right">{row.password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}