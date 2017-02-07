import React, { Component, PropTypes } from 'react';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

@connect(
  state => ({
    online: state.online
  })
)
export default class Home extends Component {

  static propTypes = {
    online: PropTypes.bool
  };

  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const headerImage = require('./love-letter-logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home" />
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.header}>
              <p>
                <img src={headerImage} role="presentation" />
              </p>
            </div>

            <h2>{config.app.description}</h2>

            <p>
              <a
                className={styles.github}
                href="https://github.com/bill-burgess/loveLetterv3"
                target="_blank">
                <i className="fa fa-github" /> View on Github
              </a>
            </p>

            <p className={styles.humility}>
              Created and maintained by <a href="https://twitter.com/Doll4rBillYo" target="_blank">@Doll4rBillYo</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
