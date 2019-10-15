import { ADD_SYLLABUS } from '../actions';

const initialState = {
  syllabiList: []
};

export default function toDoApp(state = initialState, action) {
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
    default:
      return state;
  }
}
