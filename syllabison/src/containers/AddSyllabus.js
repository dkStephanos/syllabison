import React from 'react';
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
  Card
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

  return (
    <Jumbotron>
      <Accordion style={{ float: 'right' }}>
        <Card>
          <Accordion.Toggle
            as={Button}
            variant="outline-dark"
            style={{ color: 'deepSkyBlue' }}
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
                    Choose file
                  </label>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <h2 style={headerStyle}>Enter Syllabus Details</h2>
      <Form
        onSubmit={e => {
          e.preventDefault();
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
          rubric_code.value = '';
          course_number.value = '';
          course_name.value = '';
          course_credits.value = '';
          course_desc.value = '';
          prereqs.value = '';
          coreqs.value = '';
          delivery_method.value = '';
          dept_contact_info.value = '';
          course_goals.value = '';
          learning_outcomes.value = '';
          course_topics.value = '';
          revision_date.value = '';
          is_inactive.value = '';
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
                required
              />
              <Form.Control
                type="text"
                placeholder="Course name:"
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
              required
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
              required
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
              required
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
              required
            />
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
              ref={node => {
                course_goals = node;
              }}
              required
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
              required
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
              required
            />
          </Col>
        </Form.Group>

        <h4 style={headerStyle}>Additional Information:</h4>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Revision Date:
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="text"
              placeholder={date}
              ref={node => {
                revision_date = node;
              }}
              required
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
