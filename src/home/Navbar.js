import React, {useState} from 'react'
import logo from '../assets/whiteMusicNote.png'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    Jumbotron,
    Container
} from 'reactstrap'

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        let newIsOpen = !isOpen
        setIsOpen(newIsOpen)
    }

    return(
        <div>
            <Navbar expand='md' className='sitebar'>
                <img className='musicNote' src={logo}/>
                <NavbarBrand href='/' className='sitebar'>Rehearsal Log</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <Button className='loginSignupButton' onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            {/* <Jumbotron fluid>
                <Container fluid>

                    <h1 className="display-3">Practice Journal</h1>
                    <p className="lead">"Practice with your fingers and you need all day. Practice with your mind and you will do as much in 1 1/2 hours" </p>
                    <p className="lead quoteName">-Leopold Auer </p>
                    <hr className="my-2" />
                </Container>
            </Jumbotron> */}
        </div>
    )
}

export default Sitebar