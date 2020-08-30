import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from './style';
import Menu from '@material-ui/core/Menu';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    }
    setAnchorEl = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }

    handleMenuClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    handleProfileMenuOpen = (event) => {
        this.setAnchorEl(event);
    };
    renderMenu = () => {
        const menuId = 'primary-search-account-menu';
        const { anchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);// Boolean se~ convert nguoc lai true -> false; flase -> true
        return <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
        >
            <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
        </Menu>
    };
    render() {
        const { classes, name } = this.props;
        return <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {name}
                    </Typography>
                    {/* <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div> */}
                    <MenuItem onClick={this.handleProfileMenuOpen} className={classes.login}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </MenuItem>
                </Toolbar>
            </AppBar>
            {this.renderMenu()}
        </div>
    }
}

export default withStyles(styles)(Header);
