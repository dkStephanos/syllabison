import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import SyllabusDocument from '../components/SyllabusDocument';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const { syllabusId } = props.match.params;
  return {
    syllabus: state.syllabiList.find(e => e.id == syllabusId),
    user: state.user
  };
};

let SyllabusDocumentContainer = () => {
  return <SyllabusDocument />;
};

SyllabusDocumentContainer = connect(mapStateToProps)(SyllabusDocument);

export default SyllabusDocumentContainer;
