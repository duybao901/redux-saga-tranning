import React, { Component } from 'react';
import {Button, withStyles, ThemeProvider } from '@material-ui/core'

import theme from '../../commons/Theme/index'
import styles from './style'
import TarkBoard from '../Taskboard/index'

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}> 
        <div className="App">
          <Button color="primary" variant="contained">Button</Button>
          <TarkBoard />
          </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
