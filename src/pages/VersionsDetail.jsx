import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import StatisticBoard from './StatisticBoard'
import './../assets/style/VersionDetail.css'

function VersionsDetail() {
  return (
   <section className='vrsnDetails'>
       <Container className='d-flex justify-content-between align-items-center w-75 col-sm-12 goth-med versions'>
            <div className='optContainer col-sm-3 d-flex justify-content-center'>
                <Button>FULL ILLUSTRATIONS</Button>
            </div>
            <div className='optContainer col-sm-3 d-flex justify-content-center'>
                <Button>TRADE HISTORY</Button>
            </div>
            <div className='optContainer col-sm-3 d-flex justify-content-center' >
                <Button>CARD FOR SALE</Button>
            </div>
            <div className='optContainer col-sm-3 d-flex justify-content-center'>
                <Button>STATS</Button>
            </div>
       </Container>
       <StatisticBoard/>
   </section>
  )
}

export default VersionsDetail