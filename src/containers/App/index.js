import React, { Component } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/core'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import theme from '../../commons/Theme/index'
import styles from './style'
import TarkBoard from '../Taskboard/index'
import GlobalLoading from '../../components/GlobalLoading/index'
import { Provider } from 'react-redux'
import configureStore from '../../reudx/configureStore'
class App extends Component {
    render() {
        // const { classes } = this.props;
        const store = configureStore();
        return (

            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalLoading/>
                    <TarkBoard />
                </ThemeProvider>
                <ToastContainer
                    autoClose={2000}
                    closeOnClick
                />
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
