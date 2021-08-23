import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Button, Container } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'

import ModalProducto from './ModalProducto'
import { deleteProduct, getAllProducts } from '../../redux/productos/action'

function Producto(props) {

    const [editOpen, SetEditOpen] = useState(false)

    const dispatch = useDispatch()

    const handleDelete = product => {
        const { notify } = props
        dispatch(deleteProduct(product))
        notify('eliminado')
        dispatch(getAllProducts())
    }

    const handleModalEdit = () => {
        SetEditOpen(!editOpen);
    }

    const submitText = editOpen && "Actualizar";
    const title = editOpen && "Actualizar Producto";

    const {
        producto,
        departamentos,
        categorias,
        notify,
    } = props

    return (
        <>
            <Card className="mt-3 mx-2">
                <Card.Header>
                    <Card.Title className="fst-italic">{producto.nombre}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Precio: ${producto.costo}</Card.Subtitle>
                    <Card.Text className="text-muted"> Departamento: {producto.departamento} </Card.Text>
                    <Card.Text className="text-muted"> Categoria: {producto.categoria} </Card.Text>
                    <Container>
                        <div className="d-flex justify-content-end">
                            <Button
                                variant="primary"
                                className="mr-2 rounded-circle border-dark"
                                onClick={handleModalEdit}
                                data-tip="Editar"
                            >
                                <img src="/svg/pencil-square.svg" alt="edit" width="16" height="16" />
                            </Button>
                            <ReactTooltip />
                            <Button
                                variant="danger"
                                className="rounded-circle border-dark"
                                onClick={() => handleDelete(producto)}
                                data-tip="Eliminar"
                            >
                                <img src="/svg/x-square.svg" alt="edit" width="16" height="16" />
                            </Button>
                            <ReactTooltip />
                        </div>
                    </Container>
                </Card.Body>
            </Card>

            {editOpen &&
                <ModalProducto
                    onClose={handleModalEdit}
                    nombre={producto.nombre}
                    costo={producto.costo}
                    categoria={producto.categoria}
                    departamento={producto.departamento}
                    product_id={producto.id}
                    departamentos={departamentos}
                    categorias={categorias}
                    submitText={submitText}
                    title={title}
                    notify={notify}
                />
            }
        </>
    )
}

export default Producto
