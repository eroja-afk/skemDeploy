import { Container, Col, Row, Card, Button, Form, Navbar, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Index() {
  const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <div>
    <Navbar bg="light">
      <Navbar.Brand>PC Builder</Navbar.Brand>
      <Button variant="primary" onClick={handleShow}>Login</Button>
  </Navbar>
       <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Login</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Link to="/dashboard">
    <Button variant="primary" type="submit">Submit</Button>
        </Link>
</Form>
         </Modal.Body>
       </Modal>
       <Container>
       <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
</Container>
    </div>
  );
}


export default Index;
