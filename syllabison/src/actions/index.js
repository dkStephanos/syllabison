export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';

export const ADD_SYLLABUS = 'ADD_SYLLABUS';

export function handleAuthenticationCallback() {
  return {
    type: HANDLE_AUTHENTICATION_CALLBACK
  };
}

export function addSyllabus(course_name) {
  return {
    type: ADD_SYLLABUS,
    syllabus: {
      _id: new Date().getTime().toString(),
      course_name
    }
  };
}
