import React, { Component } from 'react'
import { withStyles, DialogContent } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


import styles from './style'
class TaskForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { open, onCloseDialog, classes } = this.props;
        return <div>
            <Dialog open={open} onClose={onCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
                <DialogContent >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        className={classes.taskFormDialog}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Description"
                        type="text"
                        fullWidth
                        className={classes.taskFormDialog}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onCloseDialog} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    }
}

export default withStyles(styles)(TaskForm);