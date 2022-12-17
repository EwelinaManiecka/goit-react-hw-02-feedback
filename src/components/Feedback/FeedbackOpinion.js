import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOpinion.module.css';

class FeedbackOpinions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={css.feedback}>
        <h1 className={css.feedback__title}>Please leave feedback</h1>
        <div className={css.feedback__buttons}>
          {this.props.options.map(btn => (
            <button
              className={css.feedback__buttons}
              value={btn}
              key={btn}
              type="button"
              onClick={event => this.props.onLeaveFeedback(event)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default FeedbackOpinions;
