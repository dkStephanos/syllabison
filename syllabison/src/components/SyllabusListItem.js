import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const SyllabusListItem = ({ rubricCode, courseNumber, courseName }) => (
  <ListGroup.Item>
    {rubricCode} {courseNumber} - {courseName}
  </ListGroup.Item>
);

SyllabusListItem.propTypes = {
  course_number: PropTypes.number.isRequired,
  course_credits: PropTypes.number.isRequired,
  course_name: PropTypes.string.isRequired
};

export default SyllabusListItem;
