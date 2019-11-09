import { connect } from 'react-redux';
import SyllabusView from '../components/SyllabusView';

const mapStateToProps = state => {
  return {
    syllabus: state.syllabiList[0], //Just set to the first in the collection for now...
    user: state.user
  };
};

const SyllabiViewContainer = connect(mapStateToProps)(SyllabusView);

export default SyllabiViewContainer;
