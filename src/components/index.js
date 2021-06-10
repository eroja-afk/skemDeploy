import { Container, Col, Row, Card, Button, Form, Navbar, Modal, Table, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function Index() {
  const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   useEffect(() => {
    getAllTargets();
}, []);


const [data, setData] = useState([]);
var datas =[]
var targets =[]
//const [targets, setTarget] = useState([]);

const [status, setStatus] = useState("");

const Login = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    console.log("Datas - " + data.get('username') ," - " + data.get('password'));
    console.log("wTF dasdadad")
    axios({
        method: 'post',
        url: 'https://skem-api.vercel.app/api/loginAccount',
        data: {
          username: data.get("username"),
          password: data.get("password")
        },
        responseType: 'json'
      })
        .then(function (res) {
          console.log(res);
          // let details = [];

          //   for (var i = 0; i < Object.keys(res.data.message).length; i++) {
          //       details.push({ name: i, value: res.data.message[i] })
          //   }
          //   console.log("fjhdhfjdhfj" + i);
          //   console.log(datas);
          //   //setDatas(details);
          //   setData(details)
        });
  }

  const getAllTargets = () => {
    console.log("wTF dasdadad")
    axios({
        method: 'get',
        url: 'https://skem-api.vercel.app/api/getAllTargets',
        responseType: 'json'
      })
        .then(function (res) { 
          console.log(res);
          let details = [];

            for (var i = 0; i < Object.keys(res.data.message).length; i++) {
                details.push({ name: i, value: res.data.message[i] })
            }
            console.log("This is get All targets # of datas - " + i);
            //setDatas(details);
            setData(details)
        });
        
  }

  return (
    <div className="App">
    <Navbar className="bg-light justify-content-between">
      <Navbar.Brand>PC Builder</Navbar.Brand>
        <Button variant="primary" onClick={handleShow}>Login</Button>
    </Navbar>
    <br />
       <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title style={{margin: '0px 0px 0px 80px'}}>Login | PC Builder Admin</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <Form onSubmit={Login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" name="username"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" name="password"/>
          </Form.Group>
          <br />
          {/* <Link to="/dashboard"> */}
            <Button variant="primary" type="submit" size="md" block>Submit</Button>
          {/* </Link> */}
        </Form>
         </Modal.Body>
       </Modal>
       <Container>
       <Card className="List">
        <Card.Header>Image QR List</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <Table striped bordered hover className="text-center">
              <thead>
              <tr>
                  <th>Target ID</th>
                  <th>Author</th>
                  <th>Date Modified</th>
                  {/* <th>Image</th> */}
                  <th>Image Name</th>
              </tr>
              </thead>
              <tbody>
              <Spinner animation="border" />
                  {data.map(data1 => 
                  <tr>
                  <td>{data1.value.Target_ID}</td>
                  <td>{data1.value.author}</td>
                  <td>{data1.value.date_mod}</td>
                  {/* <td>{data1.value.img}</td> */}
                  <td>{data1.value.img_name}</td>
                  </tr>
              )}
              </tbody>
            </Table>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">The Aerol Project</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
}


export default Index;
