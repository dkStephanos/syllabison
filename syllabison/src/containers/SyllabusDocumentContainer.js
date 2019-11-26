import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import SyllabusDocument from '../components/SyllabusDocument';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

let SyllabusDocumentContainer = () => {
  return (
    <PDFViewer>
      <SyllabusDocument />
    </PDFViewer>
  );
};

SyllabusDocumentContainer = connect(mapStateToProps)(SyllabusDocument);

export default SyllabusDocumentContainer;
