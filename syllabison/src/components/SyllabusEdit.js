import React, { Component } from 'react';
import { getCurrentDate } from '../utils';
import {
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  Jumbotron,
  Modal
} from 'react-bootstrap';

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

class SyllabusEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      disabled: true,
      editConfirmShow: false,
      deleteConfirmShow: false
    };
  }

  componentDidMount() {
    let {
      rubricCode,
      courseNumber,
      courseName,
      courseCredits,
      courseDesc,
      prereqs,
      coreqs,
      deliveryMethod,
      deptContactInfo,
      courseGoals,
      learningOutcomes,
      courseTopics,
      revisionDate,
      isInactive
    } = this.props.syllabus;
    this.props.actions.updateSyllabusFormData({
      rubric_code: rubricCode,
      course_number: courseNumber,
      course_name: courseName,
      course_credits: courseCredits,
      course_desc: courseDesc,
      prereqs: prereqs,
      coreqs: coreqs,
      delivery_method: deliveryMethod,
      dept_contact_info: deptContactInfo,
      course_goals: courseGoals,
      learning_outcomes: learningOutcomes,
      course_topics: courseTopics,
      revision_date: revisionDate,
      is_inactive: isInactive
    });
  }

  handleEditConfirmClose = () => {
    this.setState({ editConfirmShow: false });
  };

  handleEditConfirmShow = () => {
    this.setState({ editConfirmShow: true });
  };

  handleDeleteConfirmClose = () => {
    this.setState({ deleteConfirmShow: false });
  };

  handleDeleteConfirmShow = () => {
    this.setState({ deleteConfirmShow: true });
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    const currentSyllabusFormData = Object.assign(
      {},
      this.props.syllabusFormData,
      {
        [name]: value
      }
    );
    console.log(currentSyllabusFormData);
    this.props.actions.updateSyllabusFormData(currentSyllabusFormData);
  };

  toggleInactive = event => {
    const { name, checked } = event.target;
    console.log(event.target);
    const currentSyllabusFormData = Object.assign(
      {},
      this.props.syllabusFormData,
      {
        [name]: checked
      }
    );
    console.log(currentSyllabusFormData);
    this.props.actions.updateSyllabusFormData(currentSyllabusFormData);
  };

  handleEditClick() {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    let { syllabus, user, syllabusId, syllabusFormData } = this.props;
    let disabledStyle, courseNameStyle;
    if (this.state.disabled) {
      disabledStyle = { backgroundColor: 'rgba(135,206,250,.35)' };
      courseNameStyle = {
        width: '35%',
        backgroundColor: 'rgba(135,206,250,.35)'
      };
    } else {
    }
    return (
      <Jumbotron>
        {this.props.user && this.state.disabled && (
          <Button
            style={{
              float: 'right',
              color: 'deepSkyBlue',
              backgroundColor: 'white'
            }}
            variant="outline-dark"
            onClick={this.handleEditClick.bind(this)}
          >
            Edit Syllabus
          </Button>
        )}
        {this.props.user && !this.state.disabled && (
          <Form.Group>
            <Button
              style={{
                float: 'right',
                color: 'deepSkyBlue',
                backgroundColor: 'white'
              }}
              variant="outline-dark"
              onClick={this.handleEditClick.bind(this)}
            >
              Cancel
            </Button>
            <Button
              style={{
                float: 'right',
                color: 'deepSkyBlue',
                backgroundColor: 'white'
              }}
              variant="outline-dark"
              onClick={this.handleDeleteConfirmShow.bind(this)}
            >
              Delete Syllabus
            </Button>
            <Modal
              show={this.state.deleteConfirmShow}
              onHide={this.handleDeleteConfirmClose.bind(this)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this syllabus?
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={this.handleDeleteConfirmClose.bind(this)}
                >
                  Cancel
                </Button>
                <Button
                  style={{ color: 'deepSkyBlue', backgroundColor: 'white' }}
                  variant="outline-dark"
                  onClick={() => {
                    this.props.actions.deleteSyllabus(syllabus.id);
                    this.props.history.push(`/`);
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
            <Button
              style={{
                float: 'right',
                color: 'deepSkyBlue',
                backgroundColor: 'white'
              }}
              variant="outline-dark"
              onClick={this.handleEditConfirmShow.bind(this)}
            >
              Submit Changes
            </Button>
            <Modal
              show={this.state.editConfirmShow}
              onHide={this.handleEditConfirmClose.bind(this)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Confirm Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to submit changes to this syllabus?
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={this.handleEditConfirmClose.bind(this)}
                >
                  Cancel
                </Button>
                <Button
                  style={{ color: 'deepSkyBlue', backgroundColor: 'white' }}
                  variant="outline-dark"
                  type="submit"
                  form="editForm"
                  onClick={this.handleEditConfirmClose.bind(this)}
                >
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </Form.Group>
        )}
        <h2 style={headerStyle}>
          {this.state.disabled
            ? syllabus.courseName
            : `Editing ${syllabus.courseName}`}
        </h2>
        <Form
          id="editForm"
          onSubmit={e => {
            e.preventDefault();
            this.handleEditClick();
            if (
              !rubric_code.value.trim() ||
              !course_number.value.trim() ||
              !course_name.value.trim()
            ) {
              return;
            }
            console.log(`Submitted: ${course_topics.value}`);
            this.props.actions.updateSyllabus(
              syllabus.id,
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
              is_inactive.checked
            );
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
                  value={syllabusFormData.rubric_code}
                  name="rubric_code"
                  onChange={this.handleOnChange}
                  disabled={this.state.disabled}
                  style={disabledStyle}
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
                  value={syllabusFormData.course_number}
                  name="course_number"
                  onChange={this.handleOnChange}
                  disabled={this.state.disabled}
                  style={disabledStyle}
                  ref={node => {
                    course_number = node;
                  }}
                />
                <Form.Control
                  type="text"
                  value={syllabusFormData.course_name}
                  name="course_name"
                  onChange={this.handleOnChange}
                  disabled={this.state.disabled}
                  style={courseNameStyle}
                  ref={node => {
                    course_name = node;
                  }}
                />
                <Form.Control
                  type="text"
                  value={syllabusFormData.course_credits}
                  name="course_credits"
                  onChange={this.handleOnChange}
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
                value={syllabusFormData.course_desc}
                name="course_desc"
                onChange={this.handleOnChange}
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
                value={syllabusFormData.prereqs}
                name="prereqs"
                onChange={this.handleOnChange}
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
                value={syllabusFormData.coreqs}
                name="coreqs"
                onChange={this.handleOnChange}
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
                value={syllabusFormData.delivery_method}
                name="delivery_method"
                onChange={this.handleOnChange}
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
                value={syllabusFormData.dept_contact_info}
                name="dept_contact_info"
                onChange={this.handleOnChange}
                disabled={this.state.disabled}
                style={disabledStyle}
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
                value={syllabusFormData.course_goals}
                name="course_goals"
                onChange={this.handleOnChange}
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
                value={syllabusFormData.learning_outcomes}
                name="learning_outcomes"
                onChange={this.handleOnChange}
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
                value={syllabusFormData.course_topics}
                name="course_topics"
                onChange={this.handleOnChange}
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
              Revision Term:
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                value={syllabusFormData.revision_date}
                name="revision_date"
                onChange={this.handleOnChange}
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
                checked={syllabusFormData.is_inactive}
                name="is_inactive"
                onChange={this.toggleInactive}
                disabled={this.state.disabled}
                ref={node => {
                  is_inactive = node;
                }}
              />
            )}
          </Form.Group>
        </Form>
      </Jumbotron>
    );
  }
}

export default SyllabusEdit;