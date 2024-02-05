import React from 'react'
import { Navbar , Container , Button} from 'react-bootstrap'
import Property from './Property'
import { useNavigate } from 'react-router-dom'
import Premium from './Premium'



function Home() {
    const navigate = useNavigate()
  const handlePropertytPage = ()=>{
    navigate('/property')
   
    
  }
  const handleLogin = ()=>{
    navigate('/login')
  }
  return (
    <>
     <Navbar  bg="dark" data-bs-theme="dark"  fixed="top" >
        <Container>
          <Navbar.Brand className='fw-bolder '>Oaks
          <img
              src="src\assets\images\map-pin-home-156927179-removebg-preview.png"
              width="40"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Bricks

           
          </Navbar.Brand>

        </Container>
      </Navbar>

      <div className='container-fluid d-flex bg-dark mt-5'  style={{height:'100vh', fontSize:'90px'}}>
<div className='fw-bolder mx-auto' data-aos="fade-down">
    <p style={{color:'white'}}>
    Discover <br /> 
    <span> Most suitable</span> <br /> Properties
    </p>
    <Button variant="success" size="lg">
   Search by Location
        </Button>{' '}
        
</div>
<div className='mx-auto mt-5 '>
<div className='p-3 m-3'>
    <Button onClick={handleLogin} variant="success" size="lg" className='fw-bolder'>
       Get Started
            </Button>{' '}
</div>

    <img className='rounded-5' style={{height:'50vh'}} src="https://www.interiorzine.com/wp-content/uploads/2014/07/main-living-dining-areas-housed-ground-level.jpg" alt="" />
</div>
      </div>

      <div className="projects mt-5">
        <h1 className="text-center mb-5">Explore Our Properties</h1>
        <marquee>
          <div className="d-flex justify-content-between">
            <div className="me-5">
              < Property/>

            </div>

           

          </div>
        </marquee>
        <div className="text-center">
          <button  onClick={handlePropertytPage}  className='btn btn-link'>View More Projects</button>
        </div>

      </div>

      <div className="projects mt-5">
        <h1 className="text-center mb-5">Premium Homes</h1>
        <marquee>
          <div className="d-flex justify-content-between">
            <div className="me-5">
              < Premium/>

            </div>

           

          </div>
        </marquee>
        <div className="text-center">
          <button  onClick={handlePropertytPage}  className='btn btn-link'>View More Projects</button>
        </div>

      </div>

 
    </>
  )
}

export default Home