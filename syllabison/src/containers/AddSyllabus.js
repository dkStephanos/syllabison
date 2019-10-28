import React from 'react';
import { connect } from 'react-redux';
import { addSyllabus } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup, Jumbotron } from 'react-bootstrap';

let AddSyllabus = ({ dispatch }) => {
  let course_number, course_name;

  return (
    <Jumbotron>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!course_number.value.trim() || !course_name.value.trim()) {
            return;
          }
          dispatch(addSyllabus(course_number.value, course_name.value));
          course_number.value = '';
          course_name.value = '';
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Enter course number:"
              ref={node => {
                course_number = node;
              }}
            />
            <Form.Control
              type="text"
              placeholder="Enter course name:"
              ref={node => {
                course_name = node;
              }}
            />
          </InputGroup>
          <Button type="submit">Add Syllabus</Button>
        </Form.Group>
      </Form>
    </Jumbotron>
  );
};
AddSyllabus = connect()(AddSyllabus);

export default AddSyllabus;
