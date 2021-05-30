import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Card, Button, Form, Navbar, Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/index';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
          <Switch>
            <div className="component">
              <Route path="/" exact component={Index} />
              <Route path="/dashboard" exact component={Dashboard} />
            </div>
          </Switch>
       </Router>
  );
}


export default App;
