import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getRequest } from "../apis/apis";

const Login = () => {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email,password);
        getRequest();
    }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Login</h2>
      <Form onSubmit={handleSubmit}> 
        <Form.Group controlId="formEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required/>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3" >
          Submit
        </Button>
      </Form>
    </Container>
    )
}

export default Login;