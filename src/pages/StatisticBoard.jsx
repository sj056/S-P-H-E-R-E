import React from 'react'
import Table from 'react-bootstrap/Table';
import redHeart from './../assets/images/redHeart2.png'
import blueShield from './../assets/images/blueShield2.png'
import goldenShield from './../assets/images/goldenShield2.png'
function StatisticBoard() {

    const statsData=[
        {0:"1",1:"1",2:"1",3:"4",4:"5",5:""},
        {0:"2",1:"1",2:"2",3:"4",4:"5",5:""},
        {0:"1",1:"1",2:"1",3:"4",4:"5",5:""},
        {0:"2",1:"1",2:"2",3:"4",4:"5",5:""},
        {0:"1",1:"1",2:"1",3:"4",4:"5",5:""},
        {0:"2",1:"1",2:"2",3:"4",4:"5",5:""},
        {0:"1",1:"1",2:"1",3:"4",4:"5",5:""},
        {0:"2",1:"1",2:"2",3:"4",4:"5",5:""},
        {0:"1",1:"1",2:"1",3:"4",4:"5",5:""},
        {0:"2",1:"1",2:"2",3:"4",4:"5",5:""},
        {0:"1",1:"1",2:"1",3:"4",4:"5",5:""},
    ]


  return (
    <section className='tbl-container'>
 <Table striped hover className='tbl-version' variant='dark'>
    <thead>
      <tr className='goth-med'>
        <th>Lvl</th>
        <th>Cards</th>
        <th><img src={goldenShield} alt="Stats"/></th>
        <th><img src={blueShield} alt="Stats"/></th>
        <th><img src={redHeart} alt="Stats"/></th>
        <th>Abilities</th>
      </tr>
    </thead>
    <tbody>
        {statsData.map((val,index)=>{
            return(
                <tr className='goth-light'>
                <td>{val[0]}</td>
                <td>{val[1]}</td>
                <td>{val[2]}</td>
                <td>{val[3]}</td>
                <td>{val[4]}</td>
                <td>{val[5]}</td>
              </tr>
            )
        })}
    </tbody>
  </Table>
    </section>
   
  )
}

export default StatisticBoard