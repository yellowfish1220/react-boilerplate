import { fromJS, List } from 'immutable';

import voteReducer from '../reducer';
import {
  addNewTopic,
  upvoteTopic,
  downvoteTopic,
} from '../actions';

describe('voteReducer', () => {
  let state;
  const title = 'test_topic';

  beforeEach(() => {
    state = fromJS({
      topicList: List(),
      changed: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(voteReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the addNewTopic action correctly', () => {
    let list = List();
    let received = state;
    for (let i = 1; i < 25; i += 1) {
      const topic = {
        id: `id${i}`,
        title,
        upvote: 0,
        downvote: 0,
      };
      if (i >= 5) {
        list = list.push(topic);
      }
      received = voteReducer(received, addNewTopic(title));
    }
    const expectedResult = state.set('topicList', list);

    expect(received).toEqual(expectedResult);
  });

  describe('vote topic', () => {
    const topic = {
      id: 'id1',
      title,
      upvote: 0,
      downvote: 0,
    };
    beforeEach(() => {
      state = state.set('topicList', state.get('topicList').push(topic));
    });

    it('should handle the upvoteTopic action correctly', () => {
      let list = state.get('topicList');
      list = list.update(0, (item) => {
        const copy = Object.assign({}, item);
        copy.upvote += 1;
        return copy;
      });
      const expectedResult = state.set('topicList', list).set('changed', true);
      expect(voteReducer(state, upvoteTopic('id1'))).toEqual(expectedResult);
    });

    it('should handle the downvoteTopic action correctly', () => {
      let list = state.get('topicList');
      list = list.update(0, (item) => {
        const copy = Object.assign({}, item);
        copy.downvote += 1;
        return copy;
      });
      const expectedResult = state.set('topicList', list).set('changed', true);
      expect(voteReducer(state, downvoteTopic('id1'))).toEqual(expectedResult);
    });
  });
});
