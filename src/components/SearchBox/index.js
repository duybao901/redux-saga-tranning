import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { TextField} from '@material-ui/core'
import styles from './style'
// import PropTypes from 'prop-types'

class SearchBox extends Component{
    render() {
        const { classes, handleChange } = this.props;
        return <form className={classes.searchBox} noValidate autoComplete="off">
            <TextField
                id="standard-basic"
                label="Search"
                className={classes.searchText}
                onChange={handleChange}
            />
        </form>
    }
}

export default withStyles(styles)(SearchBox);