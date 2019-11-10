import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSyllabus } from '../actions';
import { getCurrentDate } from '../utils';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { InputGroup, Jumbotron } from 'react-bootstrap';

let headerStyle = {
  paddingBottom: '1%',
  color: 'deepSkyBlue'
};

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

class SyllabusView extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.state, disabled: true };
  }

  handleEditClick() {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    let { syllabus, user, syllabusId } = this.props;
    let disabledStyle;
    if (this.state.disabled) {
      disabledStyle = { backgroundColor: 'rgba(135,206,250,.35)' };
    } else {
    }
    return (
      <Jumbotron>
        {this.state.disabled && (
          <Button
            style={{ float: 'right', color: 'deepSkyBlue' }}
            variant="outline-dark"
            onClick={this.handleEditClick.bind(this)}
          >
            Download
          </Button>
        )}
        <h2 style={headerStyle}>
          {this.state.disabled
            ? syllabus.courseName
            : `Editing ${syllabus.courseName}`}
        </h2>
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
                  disabled={this.state.disabled}
                  style={disabledStyle}
                  placeholder={syllabus.rubricCode}
                  ref={node => {
                    rubric_code = node;
                  }}
                  as="select"
                >
                  //<option>{syllabus.rubricCode}</option>
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
                  placeholder={syllabus.courseNumber}
                  disabled={this.state.disabled}
                  style={disabledStyle}
                  ref={node => {
                    course_number = node;
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder={syllabus.courseName}
                  disabled={this.state.disabled}
                  style={disabledStyle}
                  ref={node => {
                    course_name = node;
                  }}
                />
                <Form.Control
                  type="text"
                  placeholder={syllabus.courseCredits}
                  disabled={this.state.disabled}
                  style={disabledStyle}
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
                placeholder={syllabus.courseDesc}
                disabled={this.state.disabled}
                style={disabledStyle}
                ref={node => {
                  course_desc = node;
                }}
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
                placeholder={syllabus.prereqs}
                disabled={this.state.disabled}
                style={disabledStyle}
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
                placeholder={syllabus.coreqs}
                disabled={this.state.disabled}
                style={disabledStyle}
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
                placeholder={syllabus.deliveryMethod}
                disabled={this.state.disabled}
                style={disabledStyle}
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
                placeholder={syllabus.deptContactInfo}
                disabled={this.state.disabled}
                style={disabledStyle}
                ref={node => {
                  dept_contact_info = node;
                }}
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
                placeholder={syllabus.courseGoals}
                disabled={this.state.disabled}
                style={disabledStyle}
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
                placeholder={syllabus.learningOutcomes}
                disabled={this.state.disabled}
                style={disabledStyle}
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
                placeholder={syllabus.courseTopics}
                disabled={this.state.disabled}
                style={disabledStyle}
                ref={node => {
                  course_topics = node;
                }}
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
                placeholder={syllabus.revisionDate}
                style={disabledStyle}
                disabled={this.state.disabled}
                ref={node => {
                  revision_date = node;
                }}
              />
            </Col>
            {this.props.user && (
              <Form.Check
                style={{ paddingTop: '.5%' }}
                type="checkbox"
                label="Is Inactive"
                placeholder={syllabus.isInactive}
                disabled={this.state.disabled}
                ref={node => {
                  is_inactive = node;
                }}
              />
            )}
          </Form.Group>

          {this.props.user && this.state.disabled && (
            <Button
              style={{ float: 'right', color: 'deepSkyBlue' }}
              variant="outline-dark"
              onClick={this.handleEditClick.bind(this)}
            >
              Edit Syllabus
            </Button>
          )}
          {this.props.user && !this.state.disabled && (
            <Form.Group>
              <Button
                style={{ float: 'right', color: 'deepSkyBlue' }}
                variant="outline-dark"
                onClick={this.handleEditClick.bind(this)}
              >
                Cancel
              </Button>
              <Button
                style={{ float: 'right', color: 'deepSkyBlue' }}
                variant="outline-dark"
                type="submit"
              >
                Delete Syllabus
              </Button>
              <Button
                style={{ float: 'right', color: 'deepSkyBlue' }}
                variant="outline-dark"
                type="submit"
              >
                Submit Changes
              </Button>
            </Form.Group>
          )}
        </Form>
      </Jumbotron>
    );
  }
}

export default SyllabusView;
