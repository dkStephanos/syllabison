import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as syllabusActions from '../actions/index';
import SyllabusEdit from '../components/SyllabusEdit';

const mapStateToProps = (state, props) => {
  const { syllabusId } = props.match.params;
  return {
    syllabus: state.syllabiList.find(e => e.id == syllabusId),
    user: state.user,
    syllabusId: syllabusId,
    syllabusFormData: state.syllabusFormData
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(syllabusActions, dispatch)
  };
}

const SyllabiEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SyllabusEdit);

export default SyllabiEditContainer;
