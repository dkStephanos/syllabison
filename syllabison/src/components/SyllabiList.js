import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  Jumbotron,
  DropdownButton,
  Dropdown
} from 'react-bootstrap';
import SyllabusListItem from './SyllabusListItem';

const SyllabiList = ({ syllabiList }) => (
  <Jumbotron>
    <DropdownButton
      drop="right"
      variant="secondary"
      title={` Sort By `}
      id={`dropdown-button-drop`}
      key="sortButton"
    >
      <Dropdown.Item eventKey="1">Rubric Code</Dropdown.Item>
      <Dropdown.Item eventKey="2">Course Number</Dropdown.Item>
      <Dropdown.Item eventKey="3">Coure Name</Dropdown.Item>
    </DropdownButton>
    <br />
    <ListGroup>
      {syllabiList.map((syllabus, index) => (
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

export default SyllabiList;
