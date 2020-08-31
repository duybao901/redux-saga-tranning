import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import styles from './style';
import { ROUTES } from '../../../contants/index'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import CloseIcon from '@material-ui/icons/Close';

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }
    handleDrawerClose = () => {
        console.log("1")
        this.setState({
            open: false
        })
    }

    renderList = () => {
        let xhtml = null;
        const { classes } = this.props;
        xhtml = ROUTES.map((item, index) => {
            return <div className={classes.sideBarList}>
                <List key={index}>
                    <ListItem button className={classes.sideBarListItem}>                     
                         {item.name}   
                    </ListItem>
                </List>
            </div>
        })
        return xhtml;
    }

    render() {
        const { open } = this.state;

        const { classes } = this.props;
        return <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
            <CloseIcon onClick={this.handleDrawerClose} className={classes.drawerButtonClose}> </CloseIcon>
                {this.renderList()}
            </Drawer>
    }
}

export default withStyles(styles)(SideBar);
