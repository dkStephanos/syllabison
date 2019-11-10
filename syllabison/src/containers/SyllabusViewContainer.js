import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as syllabusActions from '../actions/index';
import SyllabusView from '../components/SyllabusView';

const mapStateToProps = (state, props) => {
  const { syllabusId } = props.match.params;
  return {
    syllabus: state.syllabiList.find(e => e.id == syllabusId), //Just set to the first in the collection for now...
    user: state.user,
    syllabusId: syllabusId
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(syllabusActions, dispatch)
  };
}

const SyllabiViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SyllabusView);

export default SyllabiViewContainer;
