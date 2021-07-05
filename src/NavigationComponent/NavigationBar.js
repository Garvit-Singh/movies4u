import React, {useContext, useState } from 'react'
import {PageContext} from '../App'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css'

function NavigationBar() {

  const {setPageState, setSearchState} = useContext(PageContext)
  const [value, setValue] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setSearchState(value)
    setValue('')
    const boton = document.getElementById('toggleButton')
    boton.click()
  }

  return (
    <React.Fragment>
      <Navbar id="nav-bar" bg="dark" variant="dark" expand="lg" fixed="top" className="border-bottom border-warning">
        <Navbar.Brand href="#home"onClick={()=> setPageState(0)}>Movies4U</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggleButton" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        <Form inline onSubmit={submitHandler}>
          <FormControl type="text" placeholder="Search" 
                      className="mr-sm-2"
                      value={value}
                      onChange={e => setValue(e.target.value)}
          />
          <Button variant="outline-warning" onClick={submitHandler}>Search</Button>
        </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default NavigationBar
