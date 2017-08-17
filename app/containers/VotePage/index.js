/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Im from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from './Button';
import Input from './input';
import { addNewTopic, upvoteTopic, downvoteTopic } from './actions';
import { makeSelectTopics, makeChangeVote } from './selectors';


export class VotePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    return (!Im.is(this.props.topics, nextProps.topics) ||
      this.state.inputVal !== nextState.inputVal
    );
  } */

  submitTopic = (evt) => {
    const { inputVal } = this.state;
    if(inputVal === "") {
      return;
    }
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();

    this.props.onSubmit(this.state.inputVal);
  }

  upvoteTopic = (evt, topicID) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    this.props.onUpvote(topicID);
  }

  downvoteTopic = (evt, topicID) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    this.props.onDownvote(topicID);
  }


  render() {
    const { topics } = this.props;
    const { inputVal } = this.state;
    return (
      <div>
        <div>
          <Button onClick={this.submitTopic}>
            Submit
          </Button>
          <Input
            onChange={(evt)=>this.setState({inputVal:evt.target.value})}
            value={inputVal} maxLength={255}
          />
        </div>
        <div>
          <ul>
            {
              topics.toJS().map(function(topic) {
                return (
                  <li key={topic.id}>
                    {`${topic.title} (Good:${topic.upvote} Bad:${topic.downvote})`}
                    <Button onClick={(evt)=>this.upvoteTopic(evt, topic.id)}>
                      Up
                    </Button>
                    <Button onClick={(evt)=>this.downvoteTopic(evt, topic.id)}>
                      Down
                    </Button>
                  </li>
                )
              }.bind(this))
            }
          </ul>
        </div>

      </div>
    );
  }
}

VotePage.propTypes = {
  onSubmit: React.PropTypes.func,
  topics: ImmutablePropTypes.list
};

export function mapDispatchToProps(dispatch) {
  return {

    onSubmit: (title) => {
      dispatch(addNewTopic(title));
    },
    onUpvote: (id) => {
      dispatch(upvoteTopic(id));
    },
    onDownvote: (id) => {
      dispatch(downvoteTopic(id));
    }
  };
}


const mapStateToProps = createStructuredSelector({
  topics: makeSelectTopics(),
  flag: makeChangeVote(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(VotePage);
