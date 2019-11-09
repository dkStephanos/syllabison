import { connect } from 'react-redux';
import SyllabusView from '../components/SyllabusView';

const mapStateToProps = (state, props) => {
  const { syllabusId } = props.match.params;
  return {
    syllabus: state.syllabiList.find(e => e.id == syllabusId), //Just set to the first in the collection for now...
    user: state.user,
    syllabusId: syllabusId
  };
};

const SyllabiViewContainer = connect(mapStateToProps)(SyllabusView);

export default SyllabiViewContainer;
