import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import Validator from 'validator'
import { Alert } from 'react-bootstrap'

import { addProduct, editProduct, getAllProducts } from '../../redux/productos/action'

function ModalProducto(props) {
    const [state, setState] = useState({
        nombre: props.nombre || '',
        costo: props.costo || '',
        departamento: props.departamento || '',
        categoria: props.categoria || ''
    })
    const [errors, setErrors] = useState({})
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()

    const handleChange = e => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
        /* esto lo hago para filtrar por departamento cuando se muestre el modal para adicionar */
        if (name === 'departamento') {
            filterCategories(value)
        }
    }

    const filterCategories = (departamento) => {
        const { categorias } = props
        const categories_filter = categorias.filter(c => c.departamento === departamento)
        setCategories(categories_filter)

    }

    /* esto lo hago para filtrar por departamento cuando se muestre el modal para editar */
    useEffect(() => {
        filterCategories(state.departamento)
    }, [dispatch])

    const submit = async (producto) => {
        const { product_id, onClose, notify } = props
        if (!product_id) {
            await dispatch(addProduct(producto))
            setState({
                nombre: '',
                costo: '',
                departamento: '',
                categoria: ''
            })
            notify('creado')
            console.log("Creando")
        } else {
            producto.id = product_id
            await dispatch(editProduct(producto))
            onClose()
            notify('actualizado')
            console.log("Actualizando")
        }
        dispatch(getAllProducts())
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { nombre, costo, departamento, categoria } = state
        const producto = {
            nombre,
            costo,
            departamento,
            categoria
        }
        const errors = validate(producto)
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
            submit(producto)
        }
    }

    const validate = producto => {
        const errors = {}
        if (Validator.isEmpty(producto.nombre)) errors.nombre = 'El campo nombre es obligatorio'
        if (!producto.costo) errors.costo = 'El campo costo es obligatorio'
        if (Validator.isEmpty(producto.departamento)) errors.departamento = 'El campo departamento es obligatorio'
        if (Validator.isEmpty(producto.categoria)) errors.categoria = 'El campo categoria es obligatorio'
        return errors
    }

    const { nombre, costo, departamento, categoria } = state
    const { title, submitText, onClose, departamentos } = props

    return ReactDOM.createPortal(
        <div className="modalContainer">
            <div className="modalBox">
                <form onSubmit={handleSubmit}>
                    <div className="card mt-5">
                        <div className="card-header bg-dark">
                            <h3 className="card-tittle text-white text-center ">
                                {title}
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="nombre"> Nombre </label>
                                <input onChange={handleChange} type="text" name="nombre" value={nombre} className="form-control" />
                            </div>
                            {errors && errors.nombre && <Alert variant="danger"> {errors.nombre} </Alert>}
                            <div className="form-group">
                                <label htmlFor="costo"> Costo </label>
                                <input onChange={handleChange} type="text" name="costo" value={costo} className="form-control" />
                            </div>
                            {errors && errors.costo && !errors.nombre && <Alert variant="danger"> {errors.costo} </Alert>}
                            <div className="form-group">
                                <label htmlFor="departamento"> Departamento </label>
                                <select onChange={handleChange} name="departamento" value={departamento} className="form-control">
                                    <option> *** Seleccione un Departamento *** </option>
                                    {departamentos.map(depa => (
                                        <option key={depa.id} value={depa.nombre}> {depa.nombre}  </option>
                                    ))
                                    }
                                </select>
                            </div>
                            {errors && errors.departamento && !errors.departamento && <Alert variant="danger"> {errors.departamento} </Alert>}
                            <div className="form-group">
                                <label htmlFor="categoria"> Categoria </label>
                                <select onChange={handleChange} name="categoria" value={categoria} className="form-control">
                                    <option> *** Seleccione una categoria ***</option>
                                    {categories.map(categoria => (
                                        <option key={categoria.id} value={categoria.nombre}> {categoria.nombre} </option>
                                    ))
                                    }
                                </select>
                            </div>
                            {errors && errors.categoria && !errors.departamento && <Alert variant="danger"> {errors.categoria} </Alert>}
                            <div className="modal-footer">
                                <button className="btn btn-dark" type="submit">
                                    {submitText}
                                </button>
                                <button onClick={onClose} className="btn btn-outline-dark" type="submit" >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>, document.getElementById('modal'));
}

export default ModalProducto
