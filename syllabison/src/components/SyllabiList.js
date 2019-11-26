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
import Pagination from './Pagination';

let rubric_code, course_number, course_name;

class SyllabiList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.syllabiList);
    this.state = {
      ...this.state,
      sortChoice: 'rubric',
      sortedSyllabi:
        this.props.match.params.searchTerm &&
        this.props.match.params.searchTerm != 'callback' &&
        this.props.match.params.searchTerm != 'new-syllabus'
          ? this.props.syllabiList.filter(syllabus =>
              syllabus.courseName.includes(this.props.match.params.searchTerm)
            )
          : this.props.syllabiList,
      currentSyllabiList: this.props.syllabiList,
      currentPage: 1,
      totalPages: null,
      pageLimit: 5
    };
    console.log(this.state.sortedSyllabi);
    console.log(this.props.match.params.searchTerm);
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

  handlePageLimitSelect(e) {
    switch (e) {
      case '5':
        this.setState({ pageLimit: 5 });
        break;

      case '10':
        this.setState({ pageLimit: 10 });
        break;

      case '20':
        this.setState({ pageLimit: 20 });
        break;
    }
  }

  handleSearch(rubricCode, courseNum, courseName) {
    this.props.match.params.searchTerm = '';
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
    this.setState({
      sortedSyllabi: tempSyllabiList,
      totalPages: tempSyllabiList.length
    });
  }

  onPageChanged = data => {
    let currentSyllabiList = this.state.sortedSyllabi;

    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    currentSyllabiList = currentSyllabiList.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentSyllabiList, totalPages });
  };

  render() {
    let syllabiListItems;

    switch (this.state.sortChoice) {
      case 'rubric':
        this.state.sortedSyllabi.sort((s1, s2) => {
          return s1.rubricCode > s2.rubricCode ? 1 : -1;
        });
        break;

      case 'courseNum':
        this.state.sortedSyllabi.sort((s1, s2) => {
          return s1.courseNumber > s2.courseNumber ? 1 : -1;
        });
        break;

      case 'courseName':
        this.state.sortedSyllabi.sort((s1, s2) => {
          return s1.courseName > s2.courseName ? 1 : -1;
        });
        break;
    }

    let syllabiList;
    if (this.props.user) {
      syllabiList = this.state.sortedSyllabi;
    } else {
      syllabiList = this.state.sortedSyllabi.filter(
        syllabus => syllabus.isInactive == false
      );
    }

    const offset = (this.state.currentPage - 1) * this.state.pageLimit;
    syllabiListItems = syllabiList
      .slice(offset, offset + this.state.pageLimit)
      .map((syllabus, index) => (
        <SyllabusListItem key={index} user={this.props.user} {...syllabus} />
      ));

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
            placeholder={
              this.props.match.params.searchTerm
                ? this.props.match.params.searchTerm
                : 'Course name:'
            }
            style={{ width: '25%' }}
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
        <ListGroup>{syllabiListItems}</ListGroup>
        <Pagination
          key={this.state.sortedSyllabi.length + this.state.pageLimit}
          totalRecords={this.state.sortedSyllabi.length}
          pageLimit={this.state.pageLimit}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />
        {this.state.sortedSyllabi.length > 5 && (
          <DropdownButton
            drop="bottom"
            title={`${this.state.pageLimit} per page`}
            id={`dropdown-button-drop`}
            style={{ float: 'right', padding: '.5%' }}
            variant="secondary"
            onSelect={e => this.handlePageLimitSelect(e)}
          >
            <Dropdown.Item active={this.state.pageLimit == 5} eventKey="5">
              5
            </Dropdown.Item>
            <Dropdown.Item active={this.state.pageLimit == 10} eventKey="10">
              10
            </Dropdown.Item>
            {this.state.sortedSyllabi.length > 10 && (
              <Dropdown.Item active={this.state.pageLimit == 20} eventKey="20">
                20
              </Dropdown.Item>
            )}
          </DropdownButton>
        )}
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
