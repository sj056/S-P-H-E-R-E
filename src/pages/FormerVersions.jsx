import React, { useEffect, useState } from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import versionImg from './../assets/images/version.png'
import VersionCard from '../components/VersionCard';
function FormerVersions() {
     const [show, setShow] = useState(4)
     useEffect(()=>{
       if(window.innerWidth>768){
          setShow(4)
       }else{
          setShow(1)
       }
     
     },[])

  return (
      <section className='versionContainer d-flex flex-column py-5'>
          <h6 className='font-weight-bold txtWhite m-0 goth-med'>Former Versions</h6>
          <p className='txtGrey font-weight-light goth'>Keeping track of card changes throughout history</p>
 <Carousel show={show} slide={1} transition={0.5} responsive={true} swiping={true}>
   <div className='cardContainer d-flex justify-content-center align-items-center flex-column'>
   <VersionCard 
        image={versionImg}
        amount="10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
        <div className='btmContent d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txtWhite m-0'>Version 6</h6>
            <p className='txtGrey'>Replaced September 4,2022</p>
        </div>
   </div>
   <div className='cardContainer d-flex justify-content-center align-items-center flex-column'>
   <VersionCard 
        image={versionImg}
        amount="10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
         <div className='btmContent d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txtWhite m-0'>Version 6</h6>
            <p className='txtGrey'>Replaced September 4,2022</p>
        </div>
   </div>
   <div className='cardContainer d-flex justify-content-center align-items-center flex-column'>
   <VersionCard 
        image={versionImg}
        amount="10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
         <div className='btmContent d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txtWhite m-0'>Version 6</h6>
            <p className='txtGrey'>Replaced September 4,2022</p>
        </div>
   </div>
   <div className='cardContainer d-flex justify-content-center align-items-center flex-column'>
   <VersionCard 
        image={versionImg}
        amount="10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
         <div className='btmContent d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txtWhite m-0'>Version 6</h6>
            <p className='txtGrey'>Replaced September 4,2022</p>
        </div>
   </div>
   <div className='cardContainer d-flex justify-content-center align-items-center flex-column'>
   <VersionCard 
        image={versionImg}
        amount="10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. 
        Quis nostruo mod tempor incidiount utabeyercitation" />
         <div className='btmContent d-flex justify-content-center align-items-center flex-column'>
            <h6 className='txtWhite m-0'>Version 6</h6>
            <p className='txtGrey'>Replaced September 4,2022</p>
        </div>
   </div>
</Carousel>
      </section>
   
  )
}

export default FormerVersions