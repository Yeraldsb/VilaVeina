import React, { useState} from "react";
import './tablaEncuestadores.css'
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Alert, AlertTitle} from "@material-ui/lab";

function TablaEncuestadores() {
    const dataEncuestadores = [
        {id: 1, nombre: "Yealdin", cognom: "Salazar", vila: "Sant Andreu"},
        {id: 2, nombre: "Yealdin", cognom: "Salazar", vila: "Sant Andreu"},
        {id: 3, nombre: "Yealdin", cognom: "Salazar", vila: "Sant Andreu"},
        {id: 4, nombre: "Yealdin", cognom: "Salazar", vila: "Sant Andreu"},
    ];

    const [data, setData] = useState(dataEncuestadores);
    const [modalEditar, setModalEditar]= useState(false);

    const [modalEliminar, setModalEliminar]= useState(false)

    const [nombreSeleccionado, setNombreSeleccionado]= useState({
        id: '',
        nombre: '',
        cognom: '',
        vila: ''
    });

    const seleccionarNombre=(elemento, caso)=>{
setNombreSeleccionado(elemento);
        (caso==='Editar')?setModalEditar(true): setModalEliminar(true)
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setNombreSeleccionado(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const editar=()=>{
        const dataNueva=data;
        dataNueva.map(nombree=>{
            if(nombree.id===nombreSeleccionado.id){
                nombree.cognom=nombreSeleccionado.cognom;
                nombree.nombre=nombreSeleccionado.nombre;
                nombree.vila= nombreSeleccionado.vila;

            }
        })
        setData(dataNueva);
        setModalEditar(false)
    };

    const eliminar =()=>{
        setData(data.filter(nombre=> nombre.id !== nombreSeleccionado.id))
        setModalEliminar(false);
    }


    return (
        <div className="Tabla">
            <h1 align="center" className="registro">Registre enquestadors</h1>
            <TableContainer component={Paper} >
                <Table className="contenedorTabla">
                    <TableHead>
                        <TableRow className="tcolor">
                            <TableCell>Id</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Cognom</TableCell>
                            <TableCell>Vila</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(elemento => (
                            <TableRow key={elemento.id}>
                                <TableCell>{elemento.id}</TableCell>
                                <TableCell align="left">{elemento.nombre}</TableCell>
                                <TableCell align="left">{elemento.cognom}</TableCell>
                                <TableCell align="left">{elemento.vila}</TableCell>
                                <TableCell align="left">
                                    <Button color="primary" onClick={()=>seleccionarNombre(elemento, 'Editar')}>Editar</Button>{" "}
                                    <Delete  onClick={()=> seleccionarNombre(elemento, "Eliminar")} />
                                    {}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="modalContainer">
                <Modal className="primerModal" isOpen={modalEditar} >
                    <ModalHeader>
                        <div>
                            <h3>Editar Informacion</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>ID</label>
                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                name="id"
                                value={nombreSeleccionado && nombreSeleccionado.id}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Nom</label>
                            <input
                                className="form-control"
                                type="text"
                                name="nombre"
                                value={nombreSeleccionado && nombreSeleccionado.nombre}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Cognom</label>
                            <input
                                className="form-control"
                                type="text"
                                name="cognom"
                                value={nombreSeleccionado && nombreSeleccionado.cognom}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Vila</label>
                            <input
                                className="form-control"
                                type="text"
                                name="vila"
                                value={nombreSeleccionado && nombreSeleccionado.vila}
                                onChange={handleChange}
                            />
                            <br/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outlined" color="primary"
                                onClick={()=> editar()}>
                            Actualizar
                        </Button><br/>
                        <Button variant="outlined" color="secondary" onClick={()=>setModalEditar(false)}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>

            </div>


            <Modal isOpen={modalEliminar}>
                <ModalBody>
                    Esta Seguro que desea eliminar el usuario {nombreSeleccionado && nombreSeleccionado.nombre}
                </ModalBody>
                <ModalFooter>
                    <button className=" btn btn-danger" onClick={()=>eliminar()}>
                        Si
                    </button>
                    <button className=" btn btn-secondary"
                    onClick={()=> setModalEliminar(false)}>
                            No
                    </button>
                </ModalFooter>
            </Modal>

            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
            </Alert>

            {/*
              <button className="botonTablaEncuestadores " type="submit" >
                NUEVO REGISTRO
            </button>
            */}


        </div>
    )
}

export default TablaEncuestadores;


{/*
export default function TablaEncuestadores() {
    const rows = [
        {
            id: 1,
            name: "Yeraldin ",
            Cognom: "Salazar",
            vila: "Sant Andreu",
            usuari: "YeraldSb",
            contrasenya: 5487,
            action: "action"
        },
        {
            id: 2,
            name: "Matias ",
            Cognom: "Alfaro",
            vila: "Barceloneta",
            usuari: "Mathi00",
            contrasenya: 2284,
            action: "action"
        },
        {
            id: 3,
            name: "Maria ",
            Cognom: "Guzman",
            vila: "Hospitalet",
            usuari: "Maria22G",
            contrasenya: 3020,
            action: "action"
        },
        {
            id: 4,
            name: "Helmer ",
            Cognom: "Martinez",
            vila: "Joanic",
            usuari: "GgMartinez",
            contrasenya: 1824,
            action: "action"
        },
        {
            id: 5,
            name: "Helmer ",
            Cognom: "Martinez",
            vila: "Joanic",
            usuari: "GgMartinez",
            contrasenya: 1824,
            action: "action"
        },
    ]


    const [data, setData] = useState(rows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        {field: 'id', id: 'ID', width: 90},
        {field: 'user', user: 'Nom', width: 200},
        {field: 'cognoml', cognom: 'Cognom', width: 200},
        {field: 'vila', vila: 'Vila Veina', width: 120,},
        {field: 'usuari', usuari: 'Usuari', width: 160,},
        {field: "contrasenya", contrasenya: "Contrasenya", width: 150,},
        {
            field: "action", action: "Accion",
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"./user/" + params.data.id}>
                            <TableEditButton className="userListEdit"/>
                        </Link>
                        <button className="userListDelete" onClick={() => handleDelete(params.data.id)}>Delete</button>

                    </>

                )
            }
        }
    ];


    return (
        <div className="tablaContenedor">
            <h1 className="registro">Register enquestadors</h1>
            <TableContainer component={Paper} className="contenedorTabla">
                <Table className="tabla">
                    <TableHead>
                        <TableRow className="tcolor">
                            {columns.map((colum) => (
                                <TableCell key={columns.id}>
                                    {colum.id}
                                    {colum.user}
                                    {colum.cognom}
                                    {colum.vila}
                                    {colum.usuari}
                                    {colum.contrasenya}
                                    {colum.action}
                                </TableCell>

                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.Cognom}</TableCell>
                                <TableCell align="left">{row.vila}</TableCell>
                                <TableCell align="left">{row.usuari}</TableCell>
                                <TableCell align="left">{row.contrasenya}</TableCell>
                                {
                                    columns.map((colum) => (
                                        <TableCell align="right">{colum.params}</TableCell>
                                    ))}

                                }


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>

    )
}*/
}