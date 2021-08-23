import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import storeFn from './redux/store'

import Layout from './componentes/Layout'
import Home from './componentes/Home'
import ListaProductos from './componentes/productos/ListaProductos'

const store = storeFn()

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/productos" component={ListaProductos} />
                        <Route axact path="/" component={Home} />
                    </Switch>
                </ Layout>
            </BrowserRouter>
        </Provider>
    )
}

export default App