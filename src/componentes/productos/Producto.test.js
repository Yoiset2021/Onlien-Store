import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import storeFn from '../../redux/store'

import Producto from './Producto'
import { mockProductos } from './mocks/mockProductos'

const store = storeFn()

describe('<Producto/>', () => {
    it('Renderiza el componente producto', () => {
        const producto = mockProductos[0]
        const componente = render(
            <Provider store={store}>
                <Producto producto={producto} />)
            </Provider>)
        componente.getByText(producto.nombre)
    })
})