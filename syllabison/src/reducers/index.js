import {
  ADD_SYLLABUS,
  UPDATE_SYLLABUS,
  DELETE_SYLLABUS,
  UPDATED_FORM_DATA
} from '../actions';
import { USER_PROFILE_LOADED, SIGN_OUT } from '../actions';

const initialState = {
  syllabiList: [
    {
      id: 0,
      rubricCode: 'MATH',
      courseNumber: '1000',
      courseName: 'How to Add Numbers',
      courseCredits: '',
      courseDesc: '',
      prereqs: '',
      coreqs: '',
      deliveryMethod: '',
      deptContactInfo: '',
      courseGoals: '',
      learningOutcomes: '',
      courseTopics: '',
      revisionDate: '',
      isInactive: false
    },
    {
      id: 1,
      rubricCode: 'CSCI',
      courseNumber: '1100',
      courseName: 'Using InfoTech',
      courseCredits: '',
      courseDesc: '',
      prereqs: '',
      coreqs: '',
      deliveryMethod: '',
      deptContactInfo: '',
      courseGoals: '',
      learningOutcomes: '',
      courseTopics: '',
      revisionDate: '',
      isInactive: false
    }
  ],
  syllabusFormData: {
    rubric_ode: '',
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
  let updatedSyllabiList;
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
    case UPDATE_SYLLABUS:
      updatedSyllabiList = [
        ...state.syllabiList.filter(
          syllabus => syllabus.id !== action.syllabus.id
        ),
        Object.assign({}, action.syllabus)
      ];
      return {
        syllabiList: updatedSyllabiList,
        user: state.user,
        syllabusFormData: state.syllabusFormData
      };
    case DELETE_SYLLABUS:
      updatedSyllabiList = [
        ...state.syllabiList.filter(syllabus => syllabus.id !== action.id)
      ];
      return {
        syllabiList: updatedSyllabiList,
        user: state.user,
        syllabusFormData: state.syllabusFormData
      };
    case UPDATED_FORM_DATA:
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
