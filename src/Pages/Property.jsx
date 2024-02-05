import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Property() {
    const navigate = useNavigate()
    const handleLogin = () =>{
        navigate('/login')
    }
  return (
    <>

<div className='d-flex '>
        <div className='mx-5 p-5'>
             <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/236x/29/bc/64/29bc64f291347e32551be8832cebf225.jpg" />
              <Card.Body>
                <Card.Title>Residential Home</Card.Title>
                <Card.Text >
                  3BHK/3km away from <br />edappally metro station
                </Card.Text>
                <Button onClick={handleLogin} variant="primary">Know More</Button>
              </Card.Body>
            </Card>
        </div>
       <div className='mx-5 p-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/236x/29/bc/64/29bc64f291347e32551be8832cebf225.jpg" />
              <Card.Body>
                <Card.Title>Residential Home</Card.Title>
                <Card.Text >
                  3BHK/3km away from <br />edappally metro station
                </Card.Text>
                <Button onClick={handleLogin} variant="primary">Know More</Button>
              </Card.Body>
            </Card>
       </div>
      <div className='mx-5 p-5'>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/236x/29/bc/64/29bc64f291347e32551be8832cebf225.jpg" />
              <Card.Body>
                <Card.Title>Residential Home</Card.Title>
                <Card.Text >
                  3BHK/3km away from <br />edappally metro station
                </Card.Text>
                <Button onClick={handleLogin} variant="primary">Know More</Button>
              </Card.Body>
            </Card>
      </div>
</div>
    

    
    </>
  )
}

export default Property