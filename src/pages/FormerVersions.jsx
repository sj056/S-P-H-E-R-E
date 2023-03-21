import React, { useEffect, useState } from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import versionImg from './../assets/images/version.png'
import VersionCard from '../components/VersionCard';
function FormerVersions() {
     const [show, setShow] = useState(4)

     useEffect(()=>{
          function handleResize(){
       if(window.innerWidth>1440){
          setShow(4)
       }else if(window.innerWidth>=1080 && window.innerWidth<=1440){
         setShow(3)
       } else if(window.innerWidth>=768 && window.innerWidth<=1080){
         setShow(2)
       }
       else{
          setShow(1)
       }
     }
     handleResize()
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
     },[show])

  return (
      <section className='version-container d-flex flex-column'>
          <h6 className='font-weight-bold txt-white m-0 goth-med'>Former Versions</h6>
          <p className='txt-grey font-weight-light goth'>Keeping track of card changes throughout history</p>
 <Carousel show={show} slide={1} responsive={true} swiping={true} infinite={true} useArrowKeys={false}>
   <div className='card-container d-flex justify-content-center align-items-center flex-column goth'>
   <VersionCard 
        image={versionImg}
        amount="$10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
        <div className='btm-content d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txt-white m-0'>Version 6</h6>
            <p className='txt-grey'>Replaced September 4,2022</p>
        </div>
   </div>
   <div className='card-container d-flex justify-content-center align-items-center flex-column'>
   <VersionCard 
        image={versionImg}
        amount="$10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
         <div className='btm-content d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txt-white m-0'>Version 6</h6>
            <p className='txt-grey'>Replaced September 4,2022</p>
        </div>
   </div>
   <div className='card-container d-flex justify-content-center align-items-center flex-column'>
   <VersionCard 
        image={versionImg}
        amount="$10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
         <div className='btm-content d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txt-white m-0'>Version 6</h6>
            <p className='txt-grey'>Replaced September 4,2022</p>
        </div>
   </div>
   <div className='card-container d-flex justify-content-center align-items-center flex-column'>
   <VersionCard 
        image={versionImg}
        amount="$10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
         <div className='btm-content d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txt-white m-0'>Version 6</h6>
            <p className='txt-grey'>Replaced September 4,2022</p>
        </div>
   </div>
   <div className='card-container d-flex justify-content-center align-items-center flex-column'>
   <VersionCard 
        image={versionImg}
        amount="$10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
         <div className='btm-content d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txt-white m-0'>Version 6</h6>
            <p className='txt-grey'>Replaced September 4,2022</p>
        </div>
   </div>
</Carousel>
      </section>
   
  )
}

export default FormerVersions