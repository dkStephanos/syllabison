import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  Jumbotron,
  DropdownButton,
  Dropdown,
  InputGroup,
  Form,
  Button
} from 'react-bootstrap';
import SyllabusListItem from './SyllabusListItem';

let rubric_code, course_number, course_name;

class SyllabiList extends Component {
  render() {
    return (
      <Jumbotron>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">
              Advanced Search:
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
            ref={node => {
              course_name = node;
            }}
          />
          <button
            class="btn btn-outline-dark my-2 my-sm-0"
            style={{ color: 'deepSkyBlue' }}
            type="submit"
          >
            Search
          </button>
          <DropdownButton
            drop="bottom"
            variant="secondary"
            title={` Sort By `}
            id={`dropdown-button-drop`}
            key="sortButton"
          >
            <Dropdown.Item eventKey="1">Rubric Code</Dropdown.Item>
            <Dropdown.Item eventKey="2">Course Number</Dropdown.Item>
            <Dropdown.Item eventKey="3">Coure Name</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <br />
        <ListGroup>
          {this.props.syllabiList.map((syllabus, index) => (
            <SyllabusListItem key={index} {...syllabus} />
          ))}
        </ListGroup>
      </Jumbotron>
    );

    SyllabiList.propTypes = {
      syllabiList: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          course_name: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    };
  }
}
export default SyllabiList;
