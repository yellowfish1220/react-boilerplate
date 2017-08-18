/**
 * Test the HomePage
 */
import { mapDispatchToProps } from '../index';
import { addNewTopic, upvoteTopic, downvoteTopic } from '../actions';

describe('<VotePage />', () => {
  describe('mapDispatchToProps', () => {
    describe('onSubmit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmit).toBeDefined();
      });

      it('should dispatch onSubmit when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const title = 'test_topic';
        result.onSubmit(title);
        expect(dispatch).toHaveBeenCalledWith(addNewTopic(title));
      });
    });

    describe('onUpvote', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onUpvote).toBeDefined();
      });

      it('should dispatch onUpvote when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const id = 'id1';
        result.onUpvote(id);
        expect(dispatch).toHaveBeenCalledWith(upvoteTopic(id));
      });
    });

    describe('onDownvote', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onDownvote).toBeDefined();
      });

      it('should dispatch onDownvote when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const id = 'id1';
        result.onDownvote(id);
        expect(dispatch).toHaveBeenCalledWith(downvoteTopic(id));
      });
    });
  });
});
