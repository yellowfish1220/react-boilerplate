import { fromJS, List } from 'immutable';

import {
  makeSelectTopics,
} from '../selectors';

describe('makeSelectTopic', () => {
  const topicsSelector = makeSelectTopics();
  it('should select the topics', () => {
    const topicList = List();
    const mockedState = fromJS({
      vote: {
        topicList,
      },
    });
    expect(topicsSelector(mockedState)).toEqual(topicList);
  });
});
