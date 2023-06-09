import React from 'react'
import footerImg from './../assets/images/footerImg.png'

import logo from './../assets/images/layer-650-footer.png'
import mobLogo from './../assets/images/layer-650.png'

import twitter from './../assets/images/twitter.png'
import telegram from './../assets/images/telegram.png'
import insta from './../assets/images/insta.png'
import facebook from './../assets/images/facebook.png'
import './../assets/style/Footer.scss'
import { useEffect } from 'react'
import { useState } from 'react'

export function DeskFooter() {
  return (
    <footer className="page-footer font-small px-5 ">
  <div className="container-fluid text-center text-md-left">

    <div className="d-flex col-sm-12 goth">

      <div className="subfootersection col-sm-4 mt-md-0 mt-3 d-flex flex-column justify-content-end">
        <div className='link-container d-flex d-flex justify-content-between goth'  style={{width:"85%"}}>
            <a href='#'>HOME</a>
            <a href='#'>MARKET</a>
            <a href='#'>CARDS</a>
            <a href='#'>BATTLE</a>
            <a href='#'>EVENTS</a>
            <a href='#'>FAQ'S</a>
        </div>
        <div className="footer-copyright pt-2 pb-3">©2020 Enter-the-sphere.com, All rights Reserved.</div>
      </div>
      <div className="subfootersection col-sm-4 mt-md-0 mt-3 d-flex flex-column justify-content-end align-items-center">
        <img src={logo} alt="S P H E R E" style={{height:"5rem"}}/>
        <img src={footerImg} alt="S P H E R E" style={{width:"30vw"}} />
      </div>
      <div className="subfootersection col-sm-4 mt-md-0 mt-3 d-flex flex-column justify-content-end align-items-end">
      <div className='link-container d-flex justify-content-between align-items-center' style={{width:"57%"}}>
            <a href='#'>Terms & Conditions</a>
            |
            <a href='#'>Privacy Policy</a>
        </div>
        <div className='social-icons d-flex justify-content-evenly pb-3' style={{width:"57%"}}>
            <a href='#'>
                <img src={facebook} alt="facebook"/>
            </a>
            <a href='#'>
                <img src={twitter} alt="twitter"/>
            </a>
            <a href='#'>
                <img src={telegram} alt="telegram"/>
            </a>
            <a href='#'>
                <img src={insta} alt="insta"/>
            </a>
        </div>
      </div>
      </div>
      </div>
      </footer>
  )
}

export function MobFooter(){
  return(
    <footer className="page-footerfont-small pt-4 px-2 mobFooter">
    <div className="container-fluid text-center text-md-left">
      <div className=" d-flex flex-column jutify-content-center align-items-center col-sm-12">
  
      <div className="subfootersection col-sm-4 mt-md-0 mt-3 d-flex flex-column justify-content-end">
        <div>
        <div className='link-container d-flex d-flex justify-content-between' >
            <a href='#'>HOME</a>
            <a href='#'>MARKET</a>
            <a href='#'>CARDS</a>
            <a href='#'>BATTLE</a>
            <a href='#'>EVENTS</a>
            <a href='#'>FAQ'S</a>
        </div>
        <div className="footer-copyright pt-2 pb-3">©2020 Enter-the-sphere.com, All rights Reserved.</div>
      
        </div>
        <div>
        <div className='link-container d-flex justify-content-between align-items-center text-align-center' style={{width:'72%',margin:"auto"}}>
            <a href='#'>Terms & Conditions</a>
            |
            <a href='#'>Privacy Policy</a>
        </div>
        <div className='social-icons d-flex justify-content-evenly pb-3 mt-2'>
            <a href='#'>
                <img src={facebook} alt="facebook"/>
            </a>
            <a href='#'>
                <img src={twitter} alt="twitter"/>
            </a>
            <a href='#'>
                <img src={telegram} alt="telegram"/>
            </a>
            <a href='#'>
                <img src={insta} alt="insta"/>
            </a>
        </div>
      </div>
        </div>
        <div className="subfootersection col-sm-4 mt-md-0 mt-3 d-flex flex-column justify-content-end align-items-center">
        <img src={mobLogo} alt="S P H E R E" style={{height:"auto"}}/>
        <img src={footerImg} alt="S P H E R E" style={{width:"50vw"}} />
        </div>
       
        </div>
      </div>
    </footer>
  )
}


export default function Footer(){
  const [desk, setDesk] = useState(false)

  useEffect(()=>{
    function handleResize(){
    if(window.innerWidth>1085){
      setDesk(true)
    }else{
      setDesk(false)
    }
  }
  
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[desk])

  return(
   <>
   {desk?<DeskFooter/>:<MobFooter/>}
   </>
  );
}

