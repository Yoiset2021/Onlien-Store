import React from 'react'
import { Card } from 'react-bootstrap'

function Error({ error }) {
    return (
        <div className="d-flex justify-content-center py-3">
            <Card>
                <Card.Header>
                    <Card.Title>
                        <h3> {error} </h3>
                    </Card.Title>
                </Card.Header>
            </Card>
        </div>
    )
}

export default Error
