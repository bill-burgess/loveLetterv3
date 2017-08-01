import React, { Component } from 'react';
// import config from 'config';
// import Helmet from 'react-helmet';
import { connect } from 'react-redux';

// import { PlayerIcons } from '../components';

@connect(
  state => ({
    online: state.online
  })
)
export default class Game extends Component {

  // static propTypes = {
  //   online: PropTypes.bool
  // };

  render() {
    // const { targetedPlayer } = this.props;
    if (true) {
      return (
        <div>
        </div>
      );
    }
    return (
      <div>
      </div>
    );
  }
}

// <PlayerIcons /><br /><br />
// <GuessOptions /><br /><br />
// <HistoryBox /><br /><br />
// <StartNewGame />


// <PlayerIcons /><br /><br />
// <PlayerHand /><br /><br />
// <HistoryBox /><br /><br />
// <StartNewGame />
