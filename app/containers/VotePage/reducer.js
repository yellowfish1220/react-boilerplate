/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS, List } from 'immutable';

import {
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  topics: List(),
  test: '@@',
});

function voteReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOPICS:
      return state
        .set('loading', true)
        .set('error', false)
    case LOAD_TOPICS_SUCCESS:
      return states
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_TOPICS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default voteReducer;
