import axios from 'axios';
import React, { useEffect, useState, Component, setState } from "react";
import { Container, Col, Row, Card, Button, Form, Navbar, Modal, Table, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function DataComponent(){

    const [showSpin, setShowSpin] = useState("visible");

    useEffect(() => {
        getAllTargets();
   }, []);


    const [data, setData] = useState([]);
    var datas =[]
    const [target, setTarget] = useState([]);
    //const [targets, setTarget] = useState([]);

    const [status, setStatus] = useState("");

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
                setShowSpin("hidden");
                setData(details)
            });
            
      }

    
    const deleteTarget = (id) => {
        // axios.delete('https://skem-api.vercel.app/api/deleteTarget/')
        //     .then(() => setStatus('Delete successful'));
        axios({
            method: 'post',
            url: 'https://skem-api.vercel.app/api/deleteTarget/',
            data: {
                target: id
            },
            responseType: 'json'
        }).then(function (res){
            console.log(res);
            setStatus('Delete successful');
            console.log(status);
        });
        console.log("This is the delete function" + id);
    }

    const updateTarget = (event) => {
        // axios.put('https://skem-api.vercel.app/api/updateTarget/')
        //     .then(() => setStatus('Ipdate successful'));
            event.preventDefault();

            const data = new FormData(event.target);
            console.log("Datas - " + data.get('name'));
            console.log("wTF dasdadad")
            axios({
                method: 'post',
                url: 'https://skem-api.vercel.app/api/updateTarget/',
                data: {
                  name: data.get("author"),
                  image: data.get("img_name")
                },
                responseType: 'json'
              })
                .then(function (res) {
                  console.log(res);
                });
    }

    const getTarget = (id) => {
        console.log("This is the ID " + id);
        handleShow();
        axios({
            method: 'post',
            url: 'https://skem-api.vercel.app/api/getOneTarget',
            data: {
                    target: id
                },
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
                setTarget(details);
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
            {target.map(target => 
            <Form onSubmit={updateTarget}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" value={target.value.author} name="author"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Image Name" value={target.value.img_name} name="img_name"/>
            {/* <Form.Control type="text" value={target.value.date_mod}/> */}
            {/* <Form.Control type="text" placeholder={target.value.image} /> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
            </Form.Group>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="secondary" onClick={handleClose} style={{marginRight: '10px'}}>Cancel</Button>
                <Button variant="primary" type="submit">Edit</Button>
            </div>
            </Form>
            )}
        </Modal.Body>
        </Modal>
        <Table responsive="sm" className="text-center">
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
                {data.map(data1 => 
                <tr>
                <td>{data1.value.Target_ID}</td>
                <td>{data1.value.author}</td>
                <td>{data1.value.date_mod}</td>
                {/* <td>{data1.value.img}</td> */}
                <td>{data1.value.img_name}</td>
                <td>
                    <Button variant="success" onClick={ () => getTarget(data1.value.Target_ID)} style={{marginRight: '10px'}}>Edit</Button>
                    <Button variant="danger" onClick={() => deleteTarget(data1.value.Target_ID)}>Delete</Button>
              </td>
                </tr>
             )}
            </tbody>
            <Spinner animation="border" style={{visibility: showSpin}}/>
        </Table>
      </Container>
    )
}

export default DataComponent;

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

