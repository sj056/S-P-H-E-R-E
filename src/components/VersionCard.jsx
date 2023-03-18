import React from 'react'
import Card from 'react-bootstrap/Card';
import Rank from './../assets/images/rank.png';
import RedHeart from './../assets/images/redHeart.png';
import blueShield from './../assets/images/blueShield.png';
import goldenShield from './../assets/images/goldenShield.png';

function VersionCard({image,amount,name,description}) {
  return (
    <div className='dark-bg'>
    <Card style={{ width: '18rem' }}>
    <Card.Header className='d-flex justify-content-end py-0 m-0 pt-2'>
    <div className='stickyBtn goth-med mt-0 d-flex justify-content-center align-items-center pt-3'><p className='m-0'>{amount}</p></div>
    <Card.Img variant="top" src={image} />
     <div className='rank'><img src={Rank} alt="rank"/></div>
    </Card.Header>
    <Card.Body className='pt-4 pb-0'>
      <section className='summary'>
       
        <div className='imgContainer px-1'>
            <img src={goldenShield} alt="summary"/>
        </div>
        <div className='imgContainer px-1'>
            <img src={blueShield} alt="summary"/>
        </div>
        <div className='imgContainer px-1'>
            <img src={RedHeart} alt="summary"/>
        </div>
      </section>
      <Card.Title className='txtWhite goth-med'>{name}</Card.Title>
      <Card.Text className='txtGrey goth description'>
        {description}
      </Card.Text>
      <div className='stickyBtn goth-light'><p>Equipment</p></div>
    </Card.Body>
  </Card>
  </div>
  )
}

export default VersionCard