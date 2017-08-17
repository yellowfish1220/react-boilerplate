/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectVote = (state) => state.get('vote');

const makeSelectTopics = () => createSelector(
  selectVote,
  (voteState) => voteState.get('topicList')
);

const makeChangeVote = () => createSelector(
  selectVote,
  (voteState) => voteState.get('changed')
);

export {
  selectVote,
  makeSelectTopics,
  makeChangeVote,
};
