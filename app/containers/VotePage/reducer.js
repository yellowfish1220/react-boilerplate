/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS, List } from 'immutable';

import {
  ADD_NEW_TOPIC,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from './constants';


const initialState = fromJS({
  topicList: List(),
  changed: false,
});

let count = 0;

function voteReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_NEW_TOPIC: {
      count += 1;
      const id = `id${count}`;
      const topic = {
        id,
        title: action.title,
        upvote: 0,
        downvote: 0,
      };
      let list = state.get('topicList');
      if (list.size === 20) {
        const deletedIndex = list.findIndex((item) =>
          item.upvote === 0
        );
        if (deletedIndex === -1) {
          return state;
        }
        list = list.delete(deletedIndex);
      }
      list = list.push(topic);
      return state
            .set('topicList', list);
    }
    case UPVOTE_TOPIC: {
      const sortByUpvote = (item1, item2) => {
        if (item1.upvote > item2.upvote) {
          return -1;
        } else if (item1.upvote < item2.upvote) {
          return 1;
        }
        return 0;
      };
      let list = state.get('topicList');
      list = list.update(
        list.findIndex((item) =>
          item.id === action.topicID
        ), (item) => {
        const copy = Object.assign({}, item);
        copy.upvote += 1;
        return copy;
      });
      list = list.sort(sortByUpvote);
      return state
        .set('topicList', list)
        .set('changed', !state.get('changed'));
    }
    case DOWNVOTE_TOPIC: {
      let list = state.get('topicList');
      list = list.update(
        list.findIndex((item) =>
          item.id === action.topicID
        ), (item) => {
        const copy = Object.assign({}, item);
        copy.downvote += 1;
        return copy;
      });
      return state
        .set('topicList', list)
        .set('changed', !state.get('changed'));
    }
    default:
      return state;
  }
}

export default voteReducer;
