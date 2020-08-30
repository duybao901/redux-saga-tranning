import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './style'

class Content extends Component{
    render() {
        return <div>Content Board</div>
    }
}

export default withStyles(styles)(Content);
