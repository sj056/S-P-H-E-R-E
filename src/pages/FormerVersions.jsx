import React from 'react'
import Slider from 'react-slick';
import versionImg from './../assets/images/version.png'
import VersionCard from '../components/VersionCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function FormerVersions() {

     const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false,
      responsive: [
         {
           breakpoint: 1440,
           settings: {
             slidesToShow: 3,
           }
         },
         {
           breakpoint: 1080,
           settings: {
             slidesToShow: 2,
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 1,
           }
         }
      ]
    };

  return (
      <section className='version-container d-flex flex-column'>
          <h6 className='font-weight-bold txt-white m-0 goth-med'>Former Versions</h6>
          <p className='txt-grey font-weight-light goth'>Keeping track of card changes throughout history</p>
          <Slider {...settings}>
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
         </Slider>
      </section>
   
  )
}

export default FormerVersions