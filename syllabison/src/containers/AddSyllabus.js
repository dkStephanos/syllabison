import React from 'react';
import { connect } from 'react-redux';
import { addSyllabus } from '../actions';
import { getCurrentDate } from '../utils';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { InputGroup, Jumbotron } from 'react-bootstrap';

let AddSyllabus = ({ dispatch }) => {
  let course_number, course_name, course_credits;
  let date = getCurrentDate();

  let headerStyle = {
    paddingBottom: '1%',
    textDecoration: 'underline',
    textDecorationColor: 'dimGray',
    color: 'deepSkyBlue'
  };

  return (
    <Jumbotron>
      <h2 style={headerStyle}>Enter Syllabus Details</h2>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (
            !course_number.value.trim() ||
            !course_name.value.trim() ||
            !course_credits.value.trim()
          ) {
            return;
          }
          dispatch(
            addSyllabus(
              course_number.value,
              course_name.value,
              course_credits.value
            )
          );
          course_number.value = '';
          course_name.value = '';
          course_credits.value = '';
        }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Course Info:
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control as="select">
                <option>Rubric Code:</option>
                <option>ACCT</option>
                <option>CSCI</option>
                <option>DIGM</option>
                <option>ENGL</option>
                <option>JOUR</option>
                <option>MATH</option>
                <option>MGMT</option>
                <option>MUSC</option>
                <option>HIST</option>
                <option>SOCI</option>
              </Form.Control>
              <Form.Control
                type="text"
                placeholder="Course number:"
                ref={node => {
                  course_number = node;
                }}
              />
              <Form.Control
                type="text"
                placeholder="Course name:"
                ref={node => {
                  course_name = node;
                }}
              />
              <Form.Control
                type="text"
                placeholder="Number of credits:"
                ref={node => {
                  course_credits = node;
                }}
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <h4 style={headerStyle}>Catalog Information:</h4>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Catalog Description:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Enter the course description:"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Prerequisites:
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" rows="2" placeholder="Prereqs:" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Corequisites:
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" rows="2" placeholder="Coreqs:" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Delivery Method:
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Traditional, Online, etc." />
          </Col>
        </Form.Group>

        <h4 style={headerStyle}>Contact Information:</h4>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Dept Contact Info:
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder="Office #" />
          </Col>
        </Form.Group>

        <h4 style={headerStyle}>Course Purpose and Outcomes:</h4>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Goals:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Enter the various course goals:"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Expected Learning Outcomes:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Enter the learning outcomes:"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Major Course Topics:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Enter the topics for the course:"
            />
          </Col>
        </Form.Group>

        <h4 style={headerStyle}>Additional Information:</h4>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Revision Date:
          </Form.Label>
          <Col sm={3}>
            <Form.Control type="text" placeholder={date} />
          </Col>
          <Form.Check
            style={{ paddingTop: '.5%' }}
            type="checkbox"
            label="Is Inactive"
          />
        </Form.Group>

        <Button
          style={{ float: 'right', color: 'deepSkyBlue' }}
          variant="outline-dark"
          type="submit"
        >
          Submit Syllabus
        </Button>
      </Form>
    </Jumbotron>
  );
};
AddSyllabus = connect()(AddSyllabus);

export default AddSyllabus;
