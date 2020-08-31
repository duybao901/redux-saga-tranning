import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './style'
import Header from './Header/index'
import SideBar from './SideBar/index'


class DashBoard extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        const {children, name, classes} = this.props
        return <div>
          
                <Header name={name}>
                </Header>
            <div className={classes.wraper}>
                <SideBar className={classes.SideBar}></SideBar>
                <div className={classes.taskBoard}>
                    {children}
                </div>
            </div>
        </div>
    }
}

export default withStyles(styles)(DashBoard);
