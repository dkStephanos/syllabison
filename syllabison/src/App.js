import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import AddSyllabus from './containers/AddSyllabus';
import SyllabiListContainer from './containers/SyllabiListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Syllabi List</h1>
            <Navigation />
            <Route exact path="/" component={SyllabiListContainer} />
            <Route exact path="/new-syllabus" component={AddSyllabus} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
