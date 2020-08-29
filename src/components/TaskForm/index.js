import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import * as modalActions from '../../actions/modal'
import * as TaskActions from '../../actions/task'
import renderTextField from '../../components/FormHelper/renderTextField/index'
import renderSelectField from '../FormHelper/renderSelectField'
import styles from './style'
import validate from './validate'
class TaskForm extends Component {

    handleSubmitForm = (data) => {
        const { addTask, updateTask , taskEditing} = this.props;
        const { title, description, status } = data;
        if (taskEditing && taskEditing.id) {
            updateTask(title,description, status);
        } else {         
            addTask(title, description);
        }
    }

    renderStatus = () => {
        let xhtml = null;
        const { taskEditing, classes } = this.props;
        if (taskEditing && taskEditing.id) {
            xhtml = <Field
                id="status"
                className={classes.modalTextField}
                name="status"
                label="Status"
                component={renderSelectField}
            >
                <option value={0}>Ready</option>
                <option value={1}>In Progress</option>
                <option value={2}>Complete</option>
            </Field>
        }
        return xhtml;
    }

    render() {
        const { classes, closeModal, handleSubmit, initialValues } = this.props;
        if (initialValues !== null) {
            var { title, description } = initialValues;
        }
        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Field
                    className={classes.modalTextField}
                    name="title" label="Title"
                    component={renderTextField}
                    value={title}
                // validate={[this.require,this.maxLength5]}
                ></Field>
                <Field
                    className={classes.modalTextField}
                    name="description" label="Description"
                    component={renderTextField}
                    value={description}
                // validate={this.require}
                ></Field>
                {this.renderStatus()}
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

const mapStateToProps = (state) => {
    return {
        // taskEditing thi ko do~ len form dc
        taskEditing: state.tasks.taskEditing,
        // Nhung initialValues thi  do~ len form duoc
        // Vi no se~ khoi tao gia tri cho form
        initialValues: state.tasks.taskEditing // pull initial values from account reducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            dispatch(modalActions.hideModal());
        },
        addTask: (title, description) => {
            dispatch(TaskActions.addTask(title, description))
        },
        updateTask: (title,description,status) => {
            dispatch(TaskActions.updateTask(title, description, status))
        }
    }
}

var withConnect = connect(mapStateToProps, mapDispatchToProps);

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