import React, { Component, PropTypes } from 'react';
// import config from 'config';
// import Helmet from 'react-helmet';
import { connect } from 'react-redux';

@connect(
  state => ({
    online: state.online
  })
)
export default class Game extends Component {

  static propTypes = {
    online: PropTypes.bool
  };

  render() {
    const { targetedPlayer } = this.props;
    if (targetedPlayer) {
      return (
        <div>
          <PlayerIcons /><br /><br />
          <GuessOptions /><br /><br />
          <HistoryBox /><br /><br />
          <StartNewGame />
        </div>
      );
    }
    return (
      <div>
        <PlayerIcons /><br /><br />
        <PlayerHand /><br /><br />
        <HistoryBox /><br /><br />
        <StartNewGame />
      </div>
    );
  }
}
