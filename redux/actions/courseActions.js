import * as types from './actionTypes';

export function createCourse(course){
  console.log('Action',course);
  return { type:types.CREATE_COURSE,course} // course:course Object short hand syntax
}