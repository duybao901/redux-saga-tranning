import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import * as modalActions from '../../actions/modal'
import renderTextField from '../../components/FormHelper/renderTextField/index'
import styles from './style'
import validate from './validate'
class TaskForm extends Component {

    handleSubmitForm = (data) => {
        console.log("data: ",data);
    }

    require = value => {
        var err = "Invalid Title";
        if (value !== '' && typeof value !== 'undefined' && value.trim() !== '') {
            err = null;
        }
        return err;
    }
    maxLength5 = value => {
        var err = "Invalid more than 5 character ";
        if (value.trim().length > 5) {
            err = null;
        }
        return err;
    }

    render() {
        const { classes, closeModal, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Field
                    className={classes.modalTextField}
                    name="title" label="Title"
                    component={renderTextField}
                    // validate={[this.require,this.maxLength5]}
                ></Field>
                <Field
                    className={classes.modalTextField}
                    name="description" label="Description"
                    component={renderTextField}
                    // validate={this.require}
                ></Field>
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
    form: 'TASK_MANAGEMENT',
    validate
})
export default compose(
    withConnect,
    withStyles(styles),
    ContactForm
)(TaskForm);