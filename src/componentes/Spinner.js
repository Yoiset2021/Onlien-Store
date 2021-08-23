import React from 'react'
import { Spinner } from 'react-bootstrap'

function Spiner() {
    return (
        <div className="d-flex justify-content-center py-3">
            <Spinner animation="border" role="status">
                <span className="visually-hidden"> Loading... </span>
            </Spinner>
        </div>
    )
}

export default Spiner
