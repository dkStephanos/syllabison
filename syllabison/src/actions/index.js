export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';
export const SIGN_OUT = 'SIGN_OUT';

export const ADD_SYLLABUS = 'ADD_SYLLABUS';

export function handleAuthenticationCallback() {
  return {
    type: HANDLE_AUTHENTICATION_CALLBACK
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT
  };
}

export function addSyllabus(course_number, course_name) {
  return {
    type: ADD_SYLLABUS,
    syllabus: {
      _id: new Date().getTime().toString(),
      courseNumber: course_number,
      courseName: course_name
    }
  };
}
