import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'


function Auth({insideRegister}) {
    const navigate = useNavigate()
    const handleHome = () =>{
        navigate('/home')
    }
    const handleRegister = () =>{
        navigate('/login')
    }
  return (
    <div style={{width:'100%' ,height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <Link to={'/'}><i className="fa-solid fa-arrow-left me-1"></i>Back to Home</Link>
        <div className="card shadow p-5 " style={{backgroundImage:'url("https://hips.hearstapps.com/hmg-prod/images/priors-crescent-living-room-haus-interiors-show-home-1602462623.jpg?crop=0.668xw:1.00xh;0.0731xw,0&resize=2048:*")' , backgroundRepeat:'no-repeat'}}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="https://design-milk.com/images/2011/11/House-On-Bluffs-Taylor-Smyth-6.jpg" alt="login" />

            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 className='fw-bolder text-light mt-2' >  Oaks
          <img
              src="src\assets\images\map-pin-home-156927179-removebg-preview.png"
              width="40"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Bricks
 </h1>
                <h5 className='fw-bolder text-light mt-2 pb-3'>
                  {insideRegister?'Sign up to your Account':'Sign in to your Account'}
                </h5>

                <Form className='w-100'>
                 {
                  insideRegister&& <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter Username" />
       
      </Form.Group>

                 } 
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {
        insideRegister?
        <div>
          <button onClick={handleRegister} className='btn btn-light mb-3 fw-bolder'>Register</button>
          <p  className='fw-bolder'>Already have an Account? Click here to <Link to={'/login'}>Login</Link> </p>

        </div>:
        <div>
        <button onClick={handleHome} className='btn btn-light mb-3 fw-bolder'>Login</button>
        <p className='fw-bolder'>New User? Click here to <Link to={'/register'} >Register</Link> </p>
      </div>
      }
     
     
    </Form>

              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Auth