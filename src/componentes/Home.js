import React from 'react'
import { Container, Card } from 'react-bootstrap'


function Home() {
    return (
        <Container>
            <Card>
                <Card.Body className="bg-secondary text-white">
                    <h1 className="d-flex justify-content-center"> Bienvenidos a Store Online  </h1>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Home
