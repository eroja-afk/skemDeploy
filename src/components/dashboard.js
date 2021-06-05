import { Container, Col, Row, Card, Button, Form, Navbar, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Axios from '../axios';

function Dashboard() {
  const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <div>
    <Navbar bg="light">
      <Navbar.Brand>PC Builder</Navbar.Brand>
      <Link to="/">
      <Button variant="danger" onClick={handleShow}>Logout</Button>
      </Link>
  </Navbar>
       <Container>
       <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  <Axios />
    <tr>
      <td>
      <Button variant="success" onClick={handleShow}>Edit</Button>
      <Button variant="danger" onClick={handleShow}>Delete</Button>
      </td>
    </tr>
  </tbody>
</Table>
</Container>
    </div>
  );
}


export default Dashboard;
