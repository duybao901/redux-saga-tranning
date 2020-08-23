import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import TaskList from '../../components/TaskList/index'
import TaskForm from '../../components/TaskForm/index'
import SearchBox from '../../components/SearchBox/index'
import styles from './style'
import { STATUSS } from '../../contants/index'
import * as ActionsTask from '../../actions/task'
import * as ActionsModal from '../../actions/modal'


class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        const { fectListTask } = this.props;
        fectListTask();
    }

    renderTaskBoard = (listTask) => {
        var xhtml = null;
        xhtml = (
            <Grid container spacing={8}>
                {
                    STATUSS.map((status, index) => {
                        // render dung theo status
                        var taskBoardFilter = listTask.filter((tark) => {
                            return tark.status === status.value
                        })
                        return <TaskList task={taskBoardFilter} status={status} key={index}></TaskList>
                    })
                }
            </Grid>
        )
        return xhtml;
    }

    onOpenDialog = () => {
        const { showModal, showModalTitle } = this.props;
        showModal();
        showModalTitle('Show modal title')
    }

    handleCloseDialog = () => {
        this.setState({
            open: false
        })
    }

    renderTaskForm = () => {
        var xhtml = null;
        const { open } = this.state;
        xhtml = <TaskForm open={open} onCloseModal={this.handleCloseDialog}></TaskForm>
        return xhtml;
    }

    onFilter = (e) => {
        const { filterTask } = this.props;
        filterTask(e.target.value);
    }

    renderSearchBox = () => {
        var xHtml = null;
        xHtml = <SearchBox handleChange={this.onFilter}/>
        return xHtml;
    }

    loadDataDemo = () => {
        const { fectListTask } = this.props;
        fectListTask();
    }

    render() {
        const { classes, listTask } = this.props;
        return (
            <div className={classes.TaskList}>
                <Button onClick={this.loadDataDemo} variant="contained" color="primary" style={{marginRight: "20px"}}>
                    Load data
                </Button>
                <Button variant="contained" color="primary" onClick={this.onOpenDialog}>
                    <span className="material-icons">
                        add
                    </span>
                    Add New Tasks
                </Button>
                {this.renderSearchBox()}
                {this.renderTaskBoard(listTask.listTask)}
                {this.renderTaskForm()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listTask: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fectListTask: () => {
            // dispatch(Actions.fectListTaskRequest());
            dispatch(ActionsTask.fetchTask());
        },
        filterTask: keyword => {
            dispatch(ActionsTask.filterTask(keyword))
        },
        showModal: () => {
            dispatch(ActionsModal.showModal())
        },
        showModalTitle: (title) => {
            dispatch(ActionsModal.showModalTitle(title))
        },
        showModalContent: (component) => {
            dispatch(ActionsModal.showModalContent(component))
        },
        hideModal: () => {
            dispatch(ActionsModal.hideModal())
        },
    
    }
}

TaskBoard.propTypes = {
    fectListTaskRequest: PropTypes.func,
    filterTask: PropTypes.func,
    showModal: PropTypes.func,
    showModalTitle: PropTypes.func,
    showModalContent: PropTypes.func,
    hideModal: PropTypes.func,
    listTask: PropTypes.shape({
        listTask: PropTypes.array
    })
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));