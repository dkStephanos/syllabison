import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Callback from './containers/Callback';
import NavigationContainer from './containers/NavigationContainer';
import AddSyllabus from './containers/AddSyllabus';
import SyllabiListContainer from './containers/SyllabiListContainer';
import SyllabusViewContainer from './containers/SyllabusViewContainer';

import Logo from './SyllabisonLogo.png';
const Image = styled.img`
  height: 15em;
  width: 100%;
  margin-bottom: -3.5%;
  max-width: 930px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <Image src={Logo} />
            <NavigationContainer />
            <Route
              exact
              path="/:searchTerm?"
              component={SyllabiListContainer}
            />
            <Route
              path="/syllabi/:syllabusId"
              component={SyllabusViewContainer}
            />
            <Route exact path="/new-syllabus" component={AddSyllabus} />
            <Route exact path="/callback" component={Callback} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
