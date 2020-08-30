import { ThemeProvider, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute/index';
import theme from '../../commons/Theme/index';
import GlobalLoading from '../../components/GlobalLoading/index';
import ComponentModal from '../../components/Modal/index';
import { ROUTES } from '../../contants/index';
import configureStore from '../../redux/configureStore';
import styles from './style';
class App extends Component {

    renderAdminRoute = () => {
        let xhtml = null;
        xhtml = ROUTES.map((route, index) => {
            console.log(route)
            return <AdminLayoutRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
                name={route.name}
            />
        })
        return xhtml;
    }

    render() {
        // const { classes } = this.props;
        const store = configureStore();
        return (
            <Provider store={store}>
                <Router>
                    <ThemeProvider theme={theme}>
                        <GlobalLoading />
                        <ComponentModal />
                        {/* <TarkBoard /> */}
                        <Switch>
                            {this.renderAdminRoute()}
                        </Switch>
                    </ThemeProvider>
                    <ToastContainer
                        autoClose={1500}
                        closeOnClick
                    />
                </Router>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
