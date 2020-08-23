import { ThemeProvider, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../../commons/Theme/index';
import GlobalLoading from '../../components/GlobalLoading/index';
import configureStore from '../../redux/configureStore';
import TarkBoard from '../Taskboard/index';
import styles from './style';
import ComponentModal from '../../components/Modal/index'

class App extends Component {
    render() {
        // const { classes } = this.props;
        const store = configureStore();
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalLoading />
                    <ComponentModal />
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
