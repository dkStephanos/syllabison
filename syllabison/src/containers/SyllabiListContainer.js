import { connect } from 'react-redux';
import SyllabiList from '../components/SyllabiList';

const mapStateToProps = state => {
  return {
    syllabiList: state.syllabiList
  };
};

const SyllabiListContainer = connect(mapStateToProps)(SyllabiList);

export default SyllabiListContainer;
