import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

function Header() {
    return (
        <Jumbotron fluid>
            <Container fluid className='headerApp'>

                <h1 className="display-3">Practice Journal</h1>
                <p className="lead">"Practice with your fingers and you need all day. Practice with your mind and you will do as much in 1 1/2 hours" </p>
                <p className="lead quoteName">-Leopold Auer </p>
                <hr className="my-2" />
            </Container>
        </Jumbotron>
    )
}

export default Header