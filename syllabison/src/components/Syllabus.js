import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Syllabus = ({ courseNumber, courseName }) => (
  <ListGroup.Item>
    {courseNumber} - {courseName}
  </ListGroup.Item>
);

Syllabus.propTypes = {
  course_number: PropTypes.number.isRequired,
  course_name: PropTypes.string.isRequired
};

export default Syllabus;
