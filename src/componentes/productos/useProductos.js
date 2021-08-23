import axios from 'axios';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'

import { getAllProducts } from '../../redux/productos/action'

function useProductos() {

    const [departamentos, setDepartamentos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()

    const productos = useSelector(state => state.producto.data)

    const isLoading = useSelector(state => state.producto.isLoading)
    const error = useSelector(state => state.producto.error)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    useEffect(() => {
        async function fetchDepartamentos() {
            const response = await axios.get('http://localhost:4000/departamentos')
            setDepartamentos(response.data)
        }
        fetchDepartamentos()
    }, [dispatch])

    useEffect(() => {
        async function fetchCategorias() {
            const response = await axios.get('http://localhost:4000/categorias')
            setCategorias(response.data)
        }
        fetchCategorias()
    }, [dispatch])



    const handleModalOpen = () => {
        setIsOpen(true);
    };

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const notify = text => {
        toast.success(`Se ha ${text} el producto correctamente`, {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: true
        })
    }

    const submitText = isOpen && "Crear";
    const title = isOpen && "Crear Producto";

    return {
        productos,
        categorias,
        departamentos,
        isLoading,
        error,
        submitText,
        title,
        isOpen,
        handleModalOpen,
        handleModalClose,
        notify
    }
}
const exportFunction = {
    useProductos
};

export default exportFunction;