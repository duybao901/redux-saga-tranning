import React, { Component } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/core'

import theme from '../../commons/Theme/index'
import styles from './style'
import TarkBoard from '../Taskboard/index'
import { Provider } from 'react-redux'
import configureStore from '../../reudx/configureStore'
class App extends Component {
    render() {
        // const { classes } = this.props;
        const store = configureStore();
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <TarkBoard />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
