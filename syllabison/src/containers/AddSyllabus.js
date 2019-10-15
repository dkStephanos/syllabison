import React from 'react';
import { connect } from 'react-redux';
import { addSyllabus } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

let AddSyllabus = ({ dispatch }) => {
  let input;

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addSyllabus(input.value));
        input.value = '';
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter course name:"
            ref={node => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Add Syllabus</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
AddSyllabus = connect()(AddSyllabus);

export default AddSyllabus;
