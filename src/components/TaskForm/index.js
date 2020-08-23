import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import React, { Component } from 'react'
import styles from './style'

class TaskForm extends Component {
    render() {
        const { classes } = this.props;
        return (
            <form >
                <TextField id="standard-basic" label="Title" className={classes.modalTextField} />
                <TextField id="standard-basic" label="Description" className={classes.modalTextField} />
                <Grid container direction="row" justify="flex-end">
                    <Box mr={2} component="div">
                        <Button variant="contained">Cancel</Button>
                    </Box>
                    <Box component="div">
                        <Button variant="contained" color="primary" type="submit" className={classes.modalFormButtonSave}>Save</Button>
                    </Box>
                </Grid>
            </form>
        )
    }
}

export default withStyles(styles)(TaskForm);