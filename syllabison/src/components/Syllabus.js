import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Syllabus = ({ courseNumber, courseName, courseCredits }) => (
  <ListGroup.Item>
    {courseNumber} - {courseName}: Credits {courseCredits}
  </ListGroup.Item>
);

Syllabus.propTypes = {
  course_number: PropTypes.number.isRequired,
  course_credits: PropTypes.number.isRequired,
  course_name: PropTypes.string.isRequired
};

export default Syllabus;
