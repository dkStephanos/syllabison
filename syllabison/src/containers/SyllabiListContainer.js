import { connect } from 'react-redux';
import SyllabiList from '../components/SyllabiList';

const mapStateToProps = state => {
  return {
    syllabiList: state.syllabiList,
    user: state.user
  };
};

const SyllabiListContainer = connect(mapStateToProps)(SyllabiList);

export default SyllabiListContainer;
