import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from './../assets/images/layer-650.png'
import './../assets/style/Nav.css'
import market from './../assets/images/market.png'
import card from './../assets/images/card.png'
import battle from './../assets/images/battle.png'
import events from './../assets/images/events.png'
import faqs from './../assets/images/faqs.png'
import NavItem from '../components/NavItem';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
function NavBar() {
  const [active, setActive] = useState(1)
    const NavData=[
        {image:market,text:"Market"},
        {image:card,text:"Card"},
        {image:battle,text:"Battle"},
        {image:events,text:"Events"},
        {image:faqs,text:"Faq's"},

    ]

    const handleNavClick=(i)=>{
      setActive(i);
    }

  return (

    <Navbar expand="lg" className='py-0 px-4'>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="S P H E R E"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex">
             { NavData.map((val,index)=>{
                 var cls= active===index?"mx-3 active":"mx-3"
                 return( <Nav.Link href="#home" className={cls} onClick={e=>handleNavClick(index)}>
                     <NavItem image={val.image} text={val.text}/>
                 </Nav.Link>)

              })
              }

          </Nav>
          <Button className="btnLogin">login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;