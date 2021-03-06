export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';
export const SIGN_OUT = 'SIGN_OUT';

export const ADD_SYLLABUS = 'ADD_SYLLABUS';
export const UPDATE_SYLLABUS = 'UPDATE_SYLLABUS';
export const DELETE_SYLLABUS = 'DELETE_SYLLABUS';
export const UPDATED_FORM_DATA = 'UPDATED_FORM_DATA';

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

export function addSyllabus(
  rubric_code,
  course_number,
  course_name,
  course_credits,
  course_desc,
  prereqs,
  coreqs,
  delivery_method,
  dept_contact_info,
  course_goals,
  learning_outcomes,
  course_topics,
  revision_date,
  is_inactive
) {
  return {
    type: ADD_SYLLABUS,
    syllabus: {
      id: new Date().getTime().toString(),
      rubricCode: rubric_code,
      courseNumber: course_number,
      courseName: course_name,
      courseCredits: course_credits,
      courseDesc: course_desc,
      prereqs: prereqs,
      coreqs: coreqs,
      deliveryMethod: delivery_method,
      deptContactInfo: dept_contact_info,
      courseGoals: course_goals,
      learningOutcomes: learning_outcomes,
      courseTopics: course_topics,
      revisionDate: revision_date,
      isInactive: is_inactive
    }
  };
}

export const updateSyllabusFormData = syllabusFormData => {
  return {
    type: 'UPDATED_FORM_DATA',
    syllabusFormData
  };
};

export function updateSyllabus(
  id,
  rubric_code,
  course_number,
  course_name,
  course_credits,
  course_desc,
  prereqs,
  coreqs,
  delivery_method,
  dept_contact_info,
  course_goals,
  learning_outcomes,
  course_topics,
  revision_date,
  is_inactive
) {
  return {
    type: UPDATE_SYLLABUS,
    syllabus: {
      id: id,
      rubricCode: rubric_code,
      courseNumber: course_number,
      courseName: course_name,
      courseCredits: course_credits,
      courseDesc: course_desc,
      prereqs: prereqs,
      coreqs: coreqs,
      deliveryMethod: delivery_method,
      deptContactInfo: dept_contact_info,
      courseGoals: course_goals,
      learningOutcomes: learning_outcomes,
      courseTopics: course_topics,
      revisionDate: revision_date,
      isInactive: is_inactive
    }
  };
}

export function deleteSyllabus(id) {
  return {
    type: DELETE_SYLLABUS,
    id: id
  };
}
