import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactTooltip from 'react-tooltip'
import Zoom from 'react-reveal/Zoom'

import Error from '../Error'
import Spinner from '../Spinner'
import Producto from './Producto'
import ModalProducto from './ModalProducto'
import customHook from './useProductos'

function ListaProductos() {

    const {
        productos,
        categorias,
        departamentos,
        isLoading,
        submitText,
        title,
        error,
        handleModalOpen,
        handleModalClose,
        isOpen,
        setProductoId,
        notify
    } = customHook.useProductos()

    return (
        <>
            <ToastContainer />
            <div className="container">
                <h1 className="text-center my-3 border-bottom border-3"> Productos </h1>
                {isLoading ? <Spinner /> :
                    error ? <Error error={error.message} /> :
                        <>
                            <Button
                                onClick={handleModalOpen}
                                variant="primary"
                                size="sm"
                                className="rounded-circle border-dark mt-3 mr-auto"
                                data-tip="Adicionar"
                            >
                                <ReactTooltip />
                                <img src="/svg/plus.svg" alt="Bootstrap" width="32" height="32" />
                            </Button>
                            <Zoom>
                                {productos.length ?
                                    <Row>
                                        {productos.map(producto => {
                                            return (
                                                <Col sm={12} md={6} xl={4} key={producto.id}>
                                                    <Producto
                                                        producto={producto}
                                                        setProductoId={setProductoId}
                                                        notify={notify}
                                                        departamentos={departamentos}
                                                        categorias={categorias}
                                                    />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                    :
                                    <div className="bg-secondary mt-4 mb-2 shadow-lg">
                                        <h4 className="p-4 text-center text-white"> No hay productos que mostrar </h4>
                                    </div>
                                }
                            </Zoom>
                        </>
                }

                {isOpen &&
                    <ModalProducto
                        onClose={handleModalClose}
                        submitText={submitText}
                        title={title}
                        departamentos={departamentos}
                        categorias={categorias}
                        notify={notify}
                    />
                }
            </div>
        </>
    )
}

export default ListaProductos