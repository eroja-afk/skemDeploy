import { Container, Button, Form, Navbar, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Link, useHistory, useLocation  } from 'react-router-dom';
import DataComp from '../DataComponent';
import axios from 'axios';
import '../App.css';

function Dashboard (){

  const history = useHistory();
  const {state} = useLocation();
  const { username, password } = state;

  var datas =[]

  const [image, setImage] = useState(null);

  const createTarget =  (event) => {
    // Prevent default behavior
    event.preventDefault();
    const data = new FormData(event.target);
    let baseURL = "";
      // Make new FileReader
    let reader = new FileReader();
    let base64;

      // Convert the file to base64 text
      reader.readAsDataURL(data.get("myImage"));

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        // console.log(baseURL);
        base64 = baseURL.replace("data:image/jpeg;base64,", "");
        // console.log(base64);
        console.log(image.name);
        // console.log("Datas - " + data.get('image_name') ," - " + data.get('author')," - " + data.get('myImage'));
      axios({
          method: 'post',
          url: 'https://skem-api.vercel.app/api/createTarget',
          data: {
            author: data.get('author'),
            name: data.get('image_name'),
            image: base64,
            filename: image.name,
            desc: data.get('img_desc')
          },
          responseType: 'json'
        })
        .then(function (res) {
          console.log(res);
          let details = [];

            for (var i = 0; i < Object.keys(res.data.message).length; i++) {
                details.push({ name: i, value: res.data.message[i] })
            }
            
            const formData = new FormData();
            formData.append("myImage", image);

            axios
              .post('http://localhost:3002/upload', formData)
              .then((res) => {
                console.log("File Upload success");
              })
              .catch((err) => console.log("File Upload Error"));
              handleClose();
             return(details)
        }); 
      };
    }

    function handleLogout() {
      history.push("/login");
      state.username = ""
      state.password = ""
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className="App">
      <Navbar className="bg-light justify-content-between">
      <Container>
        <Navbar.Brand>PC Builder</Navbar.Brand>
        <Link to="/">
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </Link>
        </Container>
      </Navbar>
      <br />
          <Container>
            <Button variant="primary" onClick={handleShow}>Add Image</Button>
            <br />
            <br />

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={createTarget} encType="multipart/form-data">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" placeholder="Enter Image" name="myImage" onChange= {e => setImage(e.target.files[0])}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Image Name" name="image_name"/>
                <Form.Control type="hidden" placeholder="Author" value={state.username} name="author"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Image Description" name="img_desc"/>
                </Form.Group>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="secondary" onClick={handleClose} style={{marginRight: '10px'}}>Close</Button>
                <Button variant="primary" type="submit">Submit</Button>
                </div>
            </Form>
            </Modal.Body>
            </Modal>
            <DataComp />
          </Container>
      </div>
    );
  }


export default Dashboard;
