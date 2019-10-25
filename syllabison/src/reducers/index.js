import { ADD_SYLLABUS } from '../actions';
import { USER_PROFILE_LOADED, SIGN_OUT } from '../actions';

const initialState = {
  syllabiList: []
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
