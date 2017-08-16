/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectVote = (state) => state.get('vote');

const makeSelectTest = () => createSelector(
  selectVote,
  (voteState) => homeState.get('test')
);

export {
  selectVote,
  makeSelectTest,
};
