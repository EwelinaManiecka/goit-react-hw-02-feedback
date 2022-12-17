import css from './Notification.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Notification extends Component {
  static defaultProps = {
    message: '',
  };
  static prpoTypes = {
    Message: PropTypes.string,
  };

  render() {
    return (
      <h2 className={css.notification} key={shortid.generate()}>
        {this.props.message}
      </h2>
    );
  }
}

export default Notification;
