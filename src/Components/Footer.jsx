import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className="d-flex justify-content align-items-center flex-column  text-light mt-5" style={{width:"100% " , height:"400px", backgroundColor:'#90ee90'}}>
        <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap mt-5">
            <div style={{width:'400px'}} className="website">
                <h4 className='mb-5 fw-bolder' style={{height:'30px'}}>
                     Oaks <img
              src="src\assets\images\map-pin-home-156927179-removebg-preview.png"
              width="40"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Bricks
                </h4>
                <h6 className='justify-content-evenly fw-3' style={{lineHeight:
                1.5}}>
                    Oaks $ Bricks is an exclusive real estate portal for India. It caters to residential, commercial, industrial and agricultural properties within the state.  Get in touch with us for your feedback and suggestions.
                </h6>
                <p>Code licensed Alisha, docs CC BY 3.0.</p>
                <p>Currently v1.0.0</p>
            </div>

            <div className="links d-flex flex-column" style={{lineHeight:'2'}}>
                <h4 >Links</h4>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
                <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>Login</Link>
                <Link to={'/register'} style={{textDecoration:'none', color:'white'}}>Register</Link>

            </div>

            <div className="guides d-flex flex-column" style={{lineHeight:'2'}}>
                <h4>Guides</h4>
                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none', color:'white'}}>React</Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
                <Link to={'https://www.npmjs.com/package/react-router-dom'} style={{textDecoration:'none', color:'white'}}>Routing</Link>

            </div>


            <div className="links d-flex flex-column flex-wrap">
                <h4>Contact Us</h4>
                <div className="d-flex mt-4">
                    <input className="form-control" placeholder="Enter your Email" />
                    <button className="btn btn-warning ms-3"><i class="fa-solid fa-arrow-right fa-beat"></i></button>

                </div>
                <div className="icons mt-3 d-flex justify-content-between fs-5">
                    <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none' ,color:'white'}}> <i class="fa-brands fa-linkedin-in"></i></Link> 
                    <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-twitter"></i></Link> 
                   
                   <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none' ,color:'white'}}><i class="fa-brands fa-facebook-f"></i></Link> 
                    <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none' ,color:'white'}}> <i class="fa-solid fa-envelope"></i></Link> 
                    <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none' ,color:'white'}}> <i class="fa-brands fa-tiktok"></i></Link> 
                    <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none' ,color:'white'}}> <i class="fa-brands fa-github"></i></Link> 

                </div>

            </div>

        </div>
        <p>Copyright 2024 Project Fair. Built with React.</p>

    </div>
  )
}

export default Footer