import { connect } from 'react-redux';
import SyllabusView from '../components/SyllabusView';

const mapStateToProps = (state, props) => {
  const { syllabusId } = props.match.params;
  return {
    syllabus: state.syllabiList.find(e => e.id == syllabusId), //Just set to the first in the collection for now...
    user: state.user,
    syllabusId: syllabusId,
    syllabusFormData: state.syllabusFormData
  };
};

const updateForm = () => ({ type: 'UPDATED_FORM_DATA' });

const mapDispatchToProps = dispatch => {
  return {
    updateForm: () => dispatch(updateForm)
  };
};

const SyllabiViewContainer = connect(mapStateToProps)(SyllabusView);

export default SyllabiViewContainer;
