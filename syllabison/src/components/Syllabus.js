import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Syllabus = ({ course_name }) => (
  <ListGroup.Item>{course_name}</ListGroup.Item>
);

Syllabus.propTypes = {
  course_name: PropTypes.string.isRequired
};

export default Syllabus;
