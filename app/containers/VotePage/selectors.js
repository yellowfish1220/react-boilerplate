/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectVote = (state) => state.get('vote');

const makeSelectTopics = () => createSelector(
  selectVote,
  (voteState) => voteState.get('topicList')
);

export {
  selectVote,
  makeSelectTopics,
};
