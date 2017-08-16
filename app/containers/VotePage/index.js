/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from './Button';
import Input from './input';
import { addNewTopic } from './actions';
import { makeSelectTopics } from './selectors';


export class VotePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
  }

  submitTopic = (evt) => {
    const { inputVal } = this.state;
    if(inputVal === "") {
      return;
    }
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();

    this.props.onSubmit(this.state.inputVal);
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
            value={inputVal}
          />
        </div>
        <div>
          <ul>
            {
              topics.toJS().map(function(topic) {
                return (
                  <li key={topic.id}>
                    {topic.title}
                    <Button>
                      Up
                    </Button>
                    <Button>
                      Down
                    </Button>
                  </li>
                )
              })
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
  };
}


const mapStateToProps = createStructuredSelector({
  topics: makeSelectTopics(),

});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(VotePage);
