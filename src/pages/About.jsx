import React from 'react'
import VersionCard from '../components/VersionCard'
import './../assets/style/MainContent.scss'
import Button from 'react-bootstrap/Button'

import versionImg from './../assets/images/version.png'
import goldenCircle from './../assets/images/goldenCircle.png'
import blueStar from './../assets/images/blueStar.png'
import FormerVersions from './FormerVersions';
import VersionsDetail from './VersionsDetail'

function About() {
  return (
    <section className='main-content'>
        <section className='header d-flex'>
        <div className='left'>
        <VersionCard 
        image={versionImg}
        amount="$10.56"
        name="Frog Plate"
        description="Lorem ipsum dolor sit amet, consect eturseodo incididunt ut labore et dolgna aliqua. Ut enim ad minim veniam. Quis nostruo mod tempor incidiount utabeyercitation" />
        <div className='btn-container d-flex justify-content-between pt-3'>
        <Button className='btn-buy'>Buy</Button>
        <Button className='btn-sell'>Sell</Button>

        </div>
        <p className='txt-white goth-med'>Last Trade Price: $11.26</p>
        
        </div>
        <div className='right d-flex flex-column justify-content-between pb-4'>
            <div className='txt-content'>
            <h5 className='txt-white goth-med mb-3'>Lore</h5>
            <p className='txt-grey goth'>The full frog plate is armor bestowed by the Kingdom of Frog on those who become Frog Warriors. It is an ornate piece of high tech engineering
            that takes a year for Frog forge masters to create. Each piece of frog plate is capable of projecting a full frog energy field (FEF). These fields are not
            only defensive, and can be used offensive to slice and batter enemies. Unlike human forcefield technology, FEF can be activated for long periods of
            time and will only shut after they are overloaded. The imposing frog plate covers an already formidable muscular foe. <br/><br/> The plate armor adds considerable weight to a Frog, making them less nimble, but far more destructive and well protected. Frog plate uses a
            unknown alloy that has been unable to be reversed engineered by human technology. Combined with FEF technology, the plate armor can only be
            penetrated with the most powerful weaponry, or sustained fire from multiple opponents.</p>


            </div>
          
            <section className='bottom-container d-flex col-sm-12'>
                <div className='d-flex flex-column col-sm-3'>
                    <h5 className='txt-white goth-med m-0'>Rarity:</h5>
                    <div className='d-flex  align-items-center pt-1'>
                        <img src={goldenCircle} alt='rarity'/>
                        <h6 className='txt-white m-0 goth-light'><span className='txt-yellow'>Legendary</span> 1/4000</h6>
                    </div>
                </div>
                <div className='d-flex flex-column col-sm-3'>
                    <h5 className='txt-white goth-med m-0'>Card Type:</h5>
                    <div className='d-flex  align-items-center pt-1'>
                        <img src={blueStar} alt='card type'/>
                        <h6 className='txt-white goth-light m-0'><span className='txt-blue'>Summon</span></h6>
                    </div>
                </div>
                <div className='d-flex flex-column col-sm-3'>
                    <h5 className='txt-white goth-med m-0'>Cards in Circulation:</h5>
                    <div className='d-flex justify-content-center align-items-center pt-1'>
                        <h6 className='txt-white goth-light m-0'>4000</h6>
                    </div>
                </div>
                <div className='d-flex flex-column col-sm-3'>
                    <h5 className='txt-white goth-med m-0'>Total Supply Cap:</h5>
                    <div className='d-flex justify-content-center align-items-center pt-1'>
                        <h6 className='txt-white goth-light m-0'>10,000</h6>
                    </div>
                </div>
            </section>
        </div>
        
        </section>
        <VersionsDetail/>
        <FormerVersions/>

     </section>
  )
}

export default About