import React from 'react'
import 'bulma/css/bulma.min.css'
import { Navbar } from 'react-bulma-components';

const Header = (props) => {


  return (
    <header>
      <Navbar color={"dark"}>
        <Navbar.Brand>
          <Navbar.Item href="/">
            Dan Bennett
          </Navbar.Item>
        </Navbar.Brand>
        <Navbar.Container align='right'>
          <Navbar.Item href='/'>
          HOME
          </Navbar.Item>
        <Navbar.Item href='/about'>
          ABOUT
        </Navbar.Item>
        <Navbar.Item href='/projects'>
          PROJECTS
        </Navbar.Item>
        </Navbar.Container>
      </Navbar>
    </header>
  )
}

export default Header