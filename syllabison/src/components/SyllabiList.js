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
  constructor(props) {
    super(props);
    this.state = { ...this.state, sortChoice: 'rubric', sortedSyllabi: [] };
  }

  handleSortSelect(e) {
    switch (e) {
      case 'rubric':
        this.setState({ sortChoice: 'rubric' });
        break;

      case 'courseNum':
        this.setState({ sortChoice: 'courseNum' });
        break;

      case 'courseName':
        this.setState({ sortChoice: 'courseName' });
        break;
    }
  }

  handleSearch(rubricCode, courseNum, courseName) {
    let tempSyllabiList = this.props.syllabiList;
    if (rubricCode != 'Rubric Code:') {
      tempSyllabiList = tempSyllabiList.filter(syllabus =>
        syllabus.rubricCode.includes(rubricCode)
      );
    }
    if (courseNum != '') {
      tempSyllabiList = tempSyllabiList.filter(syllabus =>
        syllabus.courseNumber.includes(courseNum)
      );
    }
    if (courseName != '') {
      tempSyllabiList = tempSyllabiList.filter(syllabus =>
        syllabus.courseName.includes(courseName)
      );
    }
    if (rubricCode == 'Rubric Code:' && courseNum == '' && courseNum == '') {
      tempSyllabiList = [];
    }
    this.setState({ sortedSyllabi: tempSyllabiList });
  }

  render() {
    let currentSyllabiList;
    if (this.state.sortedSyllabi.length > 0) {
      currentSyllabiList = this.state.sortedSyllabi;
    } else {
      currentSyllabiList = this.props.syllabiList;
    }
    switch (this.state.sortChoice) {
      case 'rubric':
        currentSyllabiList.sort((s1, s2) => {
          return s1.rubricCode > s2.rubricCode ? 1 : -1;
        });
        break;

      case 'courseNum':
        currentSyllabiList.sort((s1, s2) => {
          return s1.courseNumber > s2.courseNumber ? 1 : -1;
        });
        break;

      case 'courseName':
        currentSyllabiList.sort((s1, s2) => {
          return s1.courseName > s2.courseName ? 1 : -1;
        });
        break;
    }

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
            onClick={e =>
              this.handleSearch(
                rubric_code.value,
                course_number.value,
                course_name.value
              )
            }
          >
            Search
          </button>
          <DropdownButton
            drop="bottom"
            title={` Sort By `}
            id={`dropdown-button-drop`}
            key="sortButton"
            style={{ backgroundColor: 'darkGray' }}
            variant="secondary"
            onSelect={e => this.handleSortSelect(e)}
          >
            <Dropdown.Item
              active={this.state.sortChoice == 'rubric'}
              eventKey="rubric"
            >
              Rubric Code
            </Dropdown.Item>
            <Dropdown.Item
              active={this.state.sortChoice == 'courseNum'}
              eventKey="courseNum"
            >
              Course Number
            </Dropdown.Item>
            <Dropdown.Item
              active={this.state.sortChoice == 'courseName'}
              eventKey="courseName"
            >
              Course Name
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <br />
        <ListGroup>
          {currentSyllabiList.map((syllabus, index) => (
            <SyllabusListItem key={index} {...syllabus} />
          ))}
        </ListGroup>
      </Jumbotron>
    );

    SyllabiList.propTypes = {
      syllabiList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          course_name: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    };
  }
}
export default SyllabiList;
