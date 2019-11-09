import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addSyllabus } from '../actions';
import { getCurrentDate } from '../utils';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { InputGroup, Jumbotron } from 'react-bootstrap';
import SyllabusView from '../components/SyllabusView';

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

class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.state, disabled: true };
  }

  handleEditClick() {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    let { user } = this.props;
    const { syllabusId } = this.props.match.params;
    let syllabus = this.props.syllabiList[0]; //Just set to the first in the collection for now...

    return <SyllabusView syllabus={this.props.syllabiList[0]} user={user} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    syllabiList: state.syllabiList,
    syllabusId: ownProps.syllabusId,
    user: state.user
  };
};

export default connect(mapStateToProps)(Syllabus);
