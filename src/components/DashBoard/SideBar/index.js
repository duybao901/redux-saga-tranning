import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../contants/index';
import styles from './style';

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
            return <NavLink
                key={index}
                to={item.path}
                exact={item.exact}
                className={classes.sidebarNavLink}
                activeClassName={classes.sidebarNavLinkActive}

            >
                <ListItem button className={classes.sideBarListItem}>
                    {item.name}
                </ListItem>
            </NavLink>
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
            <List className={classes.sibarList}>
                {this.renderList()}
            </List>

        </Drawer>
    }
}

export default withStyles(styles)(SideBar);
