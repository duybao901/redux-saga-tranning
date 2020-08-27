import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import React, { Component } from 'react'
import { Field,reduxForm } from 'redux-form'
import styles from './style'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as modalActions from '../../actions/modal'
class TaskForm extends Component {

    handleSubmitForm = (data) => {
        console.log(data);
    } 

    render() {
        const { classes, closeModal, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid>
                    <Field name="title" component="input"></Field>
                </Grid>
                <TextField id="standard-basic" label="Title" className={classes.modalTextField} />
                <TextField id="standard-basic" label="Description" className={classes.modalTextField} />
                <Grid container direction="row" justify="flex-end">
                    <Box mr={2} component="div">
                        <Button variant="contained" onClick={closeModal}>Cancel</Button>
                    </Box>
                    <Box component="div">
                        <Button variant="contained" color="primary" type="submit" className={classes.modalFormButtonSave}>Save</Button>
                    </Box>
                </Grid>
            </form>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            dispatch(modalActions.hideModal());
        }
    }
}

var withConnect = connect(null, mapDispatchToProps);

var ContactForm = reduxForm({
    // a unique name for the form
    form: 'TASK_MANAGEMENT'
})
export default compose(
    withConnect,
    withStyles(styles),
    ContactForm
)(TaskForm);