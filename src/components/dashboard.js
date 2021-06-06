import { Container, Col, Row, Card, Button, Form, Navbar, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, Component } from "react";
import { Link } from 'react-router-dom';
import Api from '../axios';
import axios from 'axios';


class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null
    };
  }

  handleClose() {
    this.setState({show: null});
  };

  handleShow(id) {
    this.setState({show: id});
  };

  render() {
    return (
      <div>
      <Navbar bg="light">
        <Navbar.Brand>PC Builder</Navbar.Brand>
        <Link to="/">
        <Button variant="danger" onClick={this.handleShow}>Logout</Button>
        </Link>
      </Navbar>
      <br />
          <Container>
            <Button variant="primary" onClick={() => this.handleShow('addModal')} className="float-end">Add</Button>
            <br />
            <br />
            {/* Add Modal  */}
            <Modal show={this.state.show == 'addModal'} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Details</Modal.Title>
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
                <Button variant="secondary" onClick={this.handleClose}>
                Close
                </Button>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </Modal.Body>
            </Modal>
            <Api />
          </Container>
      </div>
    );
  }
}


export default Dashboard;
