import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

class SyllabusListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  redirectToEditPage = id => {
    window.location.replace(`/syllabi/edit/${id}`);
  };

  render() {
    let { id, rubricCode, courseNumber, courseName } = this.props;
    let listItemStyle;

    if (this.state.hover) {
      listItemStyle = { color: 'lightSkyBlue', cursor: 'pointer' };
    }

    return (
      <ListGroup.Item
        style={listItemStyle}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}
      >
        {rubricCode} {courseNumber} - {courseName}
        <Button
          onClick={() => this.redirectToEditPage(id)}
          size="sm"
          variant="secondary"
          style={{ float: 'right', color: 'skyBlue' }}
        >
          edit
        </Button>
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
