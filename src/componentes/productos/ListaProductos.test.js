import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import storeFn from '../../redux/store'
import hook from './useProductos'
import ListaProductos from './ListaProductos'
import Spinner from '../Spinner'
import { mockProductos } from './mocks/mockProductos'

const store = storeFn()

describe('<ListaProductos/>', () => {
    it('Se renderiza el componente Spinner', () => {
        hook.useProductos = jest.fn().mockReturnValue({
            isLoading: true,
            productos: [],
            error: null
        })
        hook.useProductos()
        render(
            <Provider store={store}>
                <ListaProductos />
            </Provider>)
        expect(<Spinner />).toBeTruthy()
    })
    it('Se renderiza el componente Error', () => {
        hook.useProductos = jest.fn().mockReturnValue({
            isLoading: false,
            productos: [],
            error: { message: 'Error' }
        })
        hook.useProductos()
        render(
            <Provider store={store}>
                <ListaProductos />
            </Provider>)
        expect(screen.getByText('Error')).toBeInTheDocument()
    })
    it('Se renderiza que no hay resultados que mostrar', () => {
        hook.useProductos = jest.fn().mockReturnValue({
            isLoading: false,
            productos: [],
            error: null
        })
        hook.useProductos()
        render(
            <Provider store={store}>
                <ListaProductos />
            </Provider>)
        expect(screen.getByText('No hay productos que mostrar')).toBeInTheDocument()
    })
    it('Se renderiza la lista de productos', () => {
        hook.useProductos = jest.fn().mockReturnValue({
            isLoading: false,
            productos: mockProductos,
            error: null
        })
        const { productos } = hook.useProductos()
        const { container } = render(
            <Provider store={store}>
                <ListaProductos />
            </Provider>)
        productos.forEach(producto => {
            expect(container).toHaveTextContent(producto.nombre)
        })
    })
})