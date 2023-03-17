import React from 'react'
import footerImg from './../assets/images/footerImg.png'
import logo from './../assets/images/layer-650-footer.png'
import twitter from './../assets/images/twitter.png'
import telegram from './../assets/images/telegram.png'
import insta from './../assets/images/insta.png'
import facebook from './../assets/images/facebook.png'
import './../assets/style/Footer.css'
function Footer() {
  return (
    <footer class="page-footer font-small pt-4 px-5">
  <div class="container-fluid text-center text-md-left">

    <div class="d-flex col-sm-12">

      <div class="subFooterSection col-sm-4 mt-md-0 mt-3 d-flex flex-column justify-content-end">
        <div className='linkContainer d-flex d-flex justify-content-between'  style={{width:"85%"}}>
            <a href='#'>HOME</a>
            <a href='#'>MARKET</a>
            <a href='#'>CARDS</a>
            <a href='#'>BATTLE</a>
            <a href='#'>EVENTS</a>
            <a href='#'>FAQ'S</a>
        </div>
        <div class="footerCopyright pt-2 pb-3">©2020 Enter-the-sphere.com, All rights Reserved.</div>
      </div>
      <div class="subFooterSection col-sm-4 mt-md-0 mt-3 d-flex flex-column justify-content-end align-items-center">
        <img src={logo} alt="S P H E R E" style={{height:"5rem"}}/>
        <img src={footerImg} alt="S P H E R E" style={{width:"30vw"}} />
      </div>
      <div class="subFooterSection col-sm-4 mt-md-0 mt-3 d-flex flex-column justify-content-end align-items-end">
      <div className='linkContainer d-flex justify-content-between align-items-center' style={{width:"57%"}}>
            <a href='#'>Terms & Conditions</a>
            |
            <a href='#'>Privacy Policy</a>
        </div>
        <div className='socialIcons d-flex justify-content-evenly pb-3' style={{width:"57%"}}>
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

export default Footer