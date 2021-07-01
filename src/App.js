import React, {useState, useEffect} from "react";
import Sitebar from './home/Navbar'
import Auth from "./auth/Auth";
import WorkoutIndex from "./workouts/WorkoutIndex";
import 'bootstrap/dist/css/bootstrap.css';
import '../src/App.css'
import Header from "./Header";
import {Container, Col, Row} from 'reactstrap'
import logo from './assets/piano.jpg'


function App() {
  const [sessionToken, setSessionToken] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear()
    setSessionToken('')
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token = {sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }

  return (
    <div className='appPage'>
        <Sitebar clickLogout={clearToken}/>
        <Header />
      <Container fluid={true} >
      <Row>
        <Col xs="5">
        <img className='appPagePhoto' src={logo}/>
        </Col>
        <Col xs="6">
        {protectedViews()}
        </Col>
      </Row>

      </Container>
    </div>
  )
}

export default App
