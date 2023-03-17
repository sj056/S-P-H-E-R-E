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
      <section className='d-flex justify-content-around w-100'>
        <Navbar.Brand href="#home">
            <img src={logo} alt="S P H E R E"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto h-100 w-100 justify-content-center">
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
      </section>
    </Navbar>
  );
}

export default NavBar;