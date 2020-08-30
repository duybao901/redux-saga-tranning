import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import DashBoard from '../../../components/DashBoard/index'

class AdminLayoutRoute extends Component {
    render() {
        const { path, exact, component: YourComponent }  = this.props;
        return <Route
            exact={exact}
            path={path}
            render={
                routeProps => {
                    return (
                        <DashBoard>
                            <YourComponent {...routeProps}/>
                        </DashBoard>
                    )
                }
            }
        ></Route>
    }
}

export default AdminLayoutRoute;
