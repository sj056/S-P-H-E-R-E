import Container from 'react-bootstrap/Container';

function NavItem({image,text}) {
  return (
     <Container className='nav-card h-100 d-flex flex-column align-items-center justify-content-evenly'>
         <img src={image} alt={text}/>
         <h6 className='goth-med'>{text}</h6>
     </Container>
  )
}

export default NavItem