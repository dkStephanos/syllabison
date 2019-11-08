import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SyllabusListItem from './SyllabusListItem';

const SyllabiList = ({ syllabiList }) => (
  <Jumbotron>
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
