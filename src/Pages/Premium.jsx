import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Premium() {
    const navigate = useNavigate()
    const handleLogin = () =>{
        navigate('/login')
    }
  return (
    <>
    <h1  className="text-center mb-5 fw-bold">Premium Homes</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg" />
      <Card.Body>
        <Card.Title>Apartments</Card.Title>
        <Card.Text>
          2BHK / near infopark
        </Card.Text>
        <Button onClick={handleLogin}  variant="primary">Know More</Button>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default Premium