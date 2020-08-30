import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './style'
import Header from './Header/index'
import SideBar from './SideBar/index'


class DashBoard extends Component{
    render() {
        const {children, name} = this.props
        return <div>
            <Header name={name}>
            </Header>
            <SideBar></SideBar>
            {children}
        </div>
    }
}

export default withStyles(styles)(DashBoard);
