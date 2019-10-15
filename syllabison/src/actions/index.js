export const ADD_SYLLABUS = 'ADD_SYLLABUS';

export function addSyllabus(course_name) {
  return {
    type: ADD_SYLLABUS,
    syllabus: {
      _id: new Date().getTime().toString(),
      course_name
    }
  };
}
