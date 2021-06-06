import axios from 'axios';
import React, { useEffect, useState, Component, setState } from "react";
import { Container, Col, Row, Card, Button, Form, Navbar, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function DataList(){

    const [datas, setDatas] = useState({
        data: []
    });

    const [targets, setTarget] = useState({
        target: []
    });

    const [status, setStatus] = useState(null);

    useEffect(async () => {
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
                console.log("fjhdhfjdhfj" + i);
                console.log(details);
                setDatas({data: details});
            });
      });

    const deleteTarget = (id) => {
        axios.delete('https://skem-api.vercel.app/api/deleteTarget/' + id)
            .then(() => setStatus('Delete successful'));
    }

    const updateTarget = (id) => {
        axios.put('https://skem-api.vercel.app/api/updateTarget/' + id)
            .then(() => setStatus('Ipdate successful'));
    }

    const getTarget = (id) => {
        axios({
            method: 'get',
            url: 'https://skem-api.vercel.app/api/getOneTarget' + id,
            responseType: 'json'
          })
            .then(function (res) {
              console.log(res);
              let details = [];
    
                for (var i = 0; i < Object.keys(res.data.message).length; i++) {
                    details.push({ name: i, value: res.data.message[i] })
                }
                console.log("fjhdhfjdhfj" + i);
                console.log(details);
                setTarget({target: details});
            });
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>

        {/* Edit Modal  */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {targets.target.map(target => 
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder={target.value.author} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image Name</Form.Label>
            <Form.Control type="text" placeholder={target.value.img_name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" type="submit">Edit</Button>
            </Form>
            )}
        </Modal.Body>
        </Modal>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Target ID</th>
                <th>Author</th>
                <th>Date Modified</th>
                {/* <th>Image</th> */}
                <th>Image Name</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {datas.data.map(data => 
                <tr>
                <td>{data.value.Target_ID}</td>
                <td>{data.value.author}</td>
                <td>{data.value.date_mod}</td>
                {/* <td>{data.value.image}</td> */}
                <td>{data.value.img_name}</td>
                <td>
                    <Button variant="success" onClick={handleShow}>Edit</Button>
                    <Button variant="danger" onClick={deleteTarget(data.value.Target_ID)}>Delete</Button>
              </td>
                </tr>
             )}
            </tbody>
        </Table>
      </Container>
    )
}

export default DataList;

// export default class DataList extends React.Component {
//     state = {
//         datas: []
//     };

//     componentDidMount(){
//         axios.get('https://skem-api.vercel.app/api/getAllTargets').then(res => {
//             let details = [];

//             for (var i = 0; i < Object.keys(res.data.message).length; i++) {
//                 details.push({ name: i, value: res.data.message[i] })
//             }
//             console.log("fjhdhfjdhfj" + i);
//             console.log(details);
//             this.setState({ datas: details});
//         });
//     }

//     constructor(props, context) {
//         super(props, context);
    
//         this.handleShow = this.handleShow.bind(this);
//         this.handleClose = this.handleClose.bind(this);
    
//         this.modal = {
//           show: null
//         };
//       }
    
    
    //   handleClose() {
    //     this.setState({show: null});
    //   };
    
    //   handleShow(id) {
    //     this.setState({show: id});
    //   };

    // render() {
        
    // }

// }