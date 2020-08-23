import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CloseIcon from '@material-ui/icons/Close';

import styles from './style'
class TaskForm extends Component {
  
    render() {
        const { open, onCloseModal, classes } = this.props;
        return <Modal open={open} onClose={onCloseModal} >
            <form className={classes.modalForm} >
                <Grid container justify="space-between" alignItems="center" className={classes.modalFormHeader}>
                    <Box component="div" >
                        <h3 className={classes.modalFormHeaderTitle}>Add New Task</h3>
                    </Box>
                    <Box>
                        <CloseIcon className={classes.modalFormClose} onClick={onCloseModal}> </CloseIcon>
                    </Box>
                </Grid>
                <Box component="div" className={classes.modalFormContent}>
                    <TextField id="standard-basic" label="Title" className={classes.modalTextField}/>
                    <TextField id="standard-basic" label="Description" className={classes.modalTextField} />
                    <Grid container direction="row" justify="flex-end">
                        <Box mr={2} component="div">
                            <Button variant="contained">Cancel</Button>
                        </Box>
                        <Box component="div">
                            <Button variant="contained" color="primary" type="submit" className={classes.modalFormButtonSave}>Save</Button>
                        </Box>
                    </Grid>
                </Box>
           </form>
        </Modal>
    }
}

export default withStyles(styles)(TaskForm);