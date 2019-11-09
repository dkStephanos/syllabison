import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

class SyllabusListItem extends Component {
  redirectToShowPage = id => {
    window.location.replace(`/syllabi/${id}`);
  };

  render() {
    let { id, rubricCode, courseNumber, courseName } = this.props;
    return (
      <ListGroup.Item onClick={() => this.redirectToShowPage(id)}>
        {rubricCode} {courseNumber} - {courseName}
      </ListGroup.Item>
    );
  }
}

SyllabusListItem.propTypes = {
  course_number: PropTypes.number.isRequired,
  course_credits: PropTypes.number.isRequired,
  course_name: PropTypes.string.isRequired
};

export default SyllabusListItem;
