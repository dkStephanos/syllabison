import { ADD_SYLLABUS } from '../actions';
import { USER_PROFILE_LOADED, SIGN_OUT } from '../actions';

const initialState = {
  syllabiList: [],
  syllabusFormData: {
    rubric_code: '',
    course_number: '',
    course_name: '',
    course_credits: '',
    course_desc: '',
    prereqs: '',
    coreqs: '',
    delivery_method: '',
    dept_contact_info: '',
    course_goals: '',
    learning_outcomes: '',
    course_topics: '',
    revision_date: '',
    is_inactive: false
  }
};

export default function syllabisonApp(state = initialState, action) {
  switch (action.type) {
    case ADD_SYLLABUS:
      let newSyllabiList = [
        ...state.syllabiList,
        {
          ...action.syllabus
        }
      ];
      return {
        ...state,
        syllabiList: newSyllabiList
      };
    case 'UPDATED_FORM_DATA':
      return Object.assign({}, state, {
        syllabusFormData: action.syllabusFormData
      });
    case USER_PROFILE_LOADED:
      return {
        ...state,
        user: action.user
      };
    case SIGN_OUT:
      let oldSyllabiList = [...state.syllabiList];
      return {
        syllabiList: oldSyllabiList
      };
    default:
      return state;
  }
}
