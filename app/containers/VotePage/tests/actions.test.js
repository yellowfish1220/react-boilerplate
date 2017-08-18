import {
   addNewTopic,
   upvoteTopic,
   downvoteTopic,
} from '../actions';

import {
  ADD_NEW_TOPIC,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from '../constants';

describe('Topic actions', () => {
  it('add new topic', () => {
    const expected = {
      type: ADD_NEW_TOPIC,
      title: 'test_topic',
    };
    expect(addNewTopic('test_topic')).toEqual(expected);
  });

  it('upvote topic', () => {
    const expected = {
      type: UPVOTE_TOPIC,
      topicID: 'id1',
    };
    expect(upvoteTopic('id1')).toEqual(expected);
  });

  it('downvote topic', () => {
    const expected = {
      type: DOWNVOTE_TOPIC,
      topicID: 'id1',
    };
    expect(downvoteTopic('id1')).toEqual(expected);
  });
});
