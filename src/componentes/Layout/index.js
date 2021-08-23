import React from 'react'

import Navigation from '../partials/Navigation'
import Footer from '../partials/Footer'

function index(props) {
    return (
        <div className="container">
            <div className="p-4">
                <Navigation />
            </div>
            <div className="p-4">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default index