/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS, Map, List } from 'immutable';

import {
  ADD_NEW_TOPIC,
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,

  topicList: List()

});

let count = 0;

function voteReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_NEW_TOPIC:
      if(count >= 20) {
        return state;
      }
      count++;
      const id = `id${count}`;
      const topic = {
        id,
        title: action.title,
        upVote: 0,
        downVote: 0,
      };
      const list = state.get('topicList').push(topic);
      return state
            .set('topicList', list);

    default:
      return state;
  }
}

export default voteReducer;
