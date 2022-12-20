import css from './Notification.module.css';
import { Component } from 'react';

const initialState = ``;

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: initialState,
    };
  }

  render() {
    return <h2 className={css.notification}>{this.props.message}</h2>;
  }
}

export default Notification;
