/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS, Map, List } from 'immutable';

import {
  ADD_NEW_TOPIC,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  topicList: List(),
  changed: false,

});

let count = 0;

function voteReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_NEW_TOPIC:

      count++;
      const id = `id${count}`;
      const topic = {
        id,
        title: action.title,
        upvote: 0,
        downvote: 0,
      };
      let list = state.get('topicList');
      if(list.size === 20) {
        const deletedIndex = list.findIndex(function(item) {
          return item.upvote === 0
        });
        if(deletedIndex === -1) {
          return state;
        }
        list = list.delete(deletedIndex);
      }
      list = list.push(topic);
      return state
            .set('topicList', list);

    case UPVOTE_TOPIC:
      const sortByUpvote = (item1, item2) => {
        if(item1.upvote > item2.upvote) {
          return -1;
        } else if(item1.upvote < item2.upvote) {
          return 1;
        }
        return 0;
      };
      let list1 = state.get('topicList');
      list1 = list1.update(
        list1.findIndex(function(item) {
          return item["id"] === action.topicID;
          }), function(item) {
          item.upvote = item.upvote+1;
          return item;
        }
      );
      list1 = list1.sort(sortByUpvote);
      return state
        .set('topicList', list1)
        .set('changed', !state.get('changed'));

    case DOWNVOTE_TOPIC:
      let list2 = state.get('topicList');
      list2 = list2.update(
        list2.findIndex(function(item) {
          return item["id"] === action.topicID;
          }), function(item) {
          item.downvote = item.downvote+1;
          return item;
        }
      );
      return state
        .set('topicList', list2)
        .set('changed', !state.get('changed'));
    default:
      return state;
  }
}

export default voteReducer;
