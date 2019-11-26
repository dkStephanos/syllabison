import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSyllabus } from '../actions';
import { getCurrentDate } from '../utils';
import {
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  Jumbotron,
  Accordion,
  Card,
  Modal
} from 'react-bootstrap';

let AddSyllabus = ({ dispatch }) => {
  let rubric_code,
    course_number,
    course_name,
    course_credits,
    course_desc,
    prereqs,
    coreqs,
    delivery_method,
    dept_contact_info,
    course_goals,
    learning_outcomes,
    course_topics,
    revision_date,
    is_inactive;
  let date = getCurrentDate();

  let headerStyle = {
    paddingBottom: '1%',
    color: 'deepSkyBlue'
  };

  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Submitted: ${course_name.value}`);
    if (
      !rubric_code.value.trim() ||
      !course_number.value.trim() ||
      !course_name.value.trim()
    ) {
      return;
    }
    dispatch(
      addSyllabus(
        rubric_code.value,
        course_number.value,
        course_name.value,
        course_credits.value,
        course_desc.value,
        prereqs.value,
        coreqs.value,
        delivery_method.value,
        dept_contact_info.value,
        course_goals.value,
        learning_outcomes.value,
        course_topics.value,
        revision_date.value,
        is_inactive.value
      )
    );
    history.push('/callback');
  };

  return (
    <Jumbotron>
      <Accordion style={{ float: 'right' }}>
        <Card>
          <Accordion.Toggle
            as={Button}
            variant="outline-dark"
            style={{ color: 'deepSkyBlue', backgroundColor: 'white' }}
            eventKey="0"
          >
            Upload
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="input-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Choose pdf
                  </label>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Button
        style={{
          color: 'deepSkyBlue',
          float: 'right',
          backgroundColor: 'white'
        }}
        variant="outline-dark"
        type="submit"
        form="submitForm"
      >
        Submit Syllabus
      </Button>
      <h2 style={headerStyle}>Enter Syllabus Details</h2>
      <Form id="submitForm" onSubmit={handleSubmit.bind(this)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Course Info:
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                ref={node => {
                  rubric_code = node;
                }}
                as="select"
              >
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
                style={{ width: '25%' }}
                ref={node => {
                  course_name = node;
                }}
                required
              />
              <Form.Control
                type="text"
                placeholder="Number of credits:"
                ref={node => {
                  course_credits = node;
                }}
                required
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
              ref={node => {
                course_desc = node;
              }}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Prerequisites:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows="2"
              placeholder="Prereqs:"
              ref={node => {
                prereqs = node;
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Corequisites:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows="2"
              placeholder="Coreqs:"
              ref={node => {
                coreqs = node;
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Delivery Method:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="Traditional, Online, etc."
              ref={node => {
                delivery_method = node;
              }}
            />
          </Col>
        </Form.Group>

        <h4 style={headerStyle}>Contact Information:</h4>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Dept Contact Info:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="Office #"
              ref={node => {
                dept_contact_info = node;
              }}
            />
          </Col>
        </Form.Group>

        <h4 style={headerStyle}>Syllabus Overview:</h4>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Course Purpose and Objectives:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Enter the various course goals:"
              ref={node => {
                course_goals = node;
              }}
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
              ref={node => {
                learning_outcomes = node;
              }}
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
              ref={node => {
                course_topics = node;
              }}
            />
          </Col>
        </Form.Group>

        <h4 style={headerStyle}>Additional Information:</h4>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Revision Term:
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="text"
              placeholder={date}
              ref={node => {
                revision_date = node;
              }}
            />
          </Col>
          <Form.Check
            style={{ paddingTop: '.5%' }}
            type="checkbox"
            label="Is Inactive"
            ref={node => {
              is_inactive = node;
            }}
          />
        </Form.Group>
      </Form>
    </Jumbotron>
  );
};
AddSyllabus = connect()(AddSyllabus);

export default withRouter(AddSyllabus);
