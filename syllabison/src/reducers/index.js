import { ADD_SYLLABUS } from '../actions';
import { USER_PROFILE_LOADED } from '../actions';

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
    default:
      return state;
  }
}
