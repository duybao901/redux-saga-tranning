import * as ActionsModal from '../../actions/modal'
import * as ActionsTask from '../../actions/task'
import SearchBox from '../../components/SearchBox/index'
import TaskForm from '../../components/TaskForm/index'
import TaskList from '../../components/TaskList/index'
import { STATUSS } from '../../contants/index'
import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style'


class TaskBoard extends Component {

    componentDidMount() {
        const { fectListTask } = this.props;
        fectListTask();
    }

    handleEditTask = task => {
        const { showModal, changeModalTitle, changeModalContent, setTaskEditing } = this.props;
        setTaskEditing(task);
        showModal();
        changeModalTitle('Editing Task');
        changeModalContent(<TaskForm />);
    }

    showModalDeleteTask = (task) => {
        const { showModal, hideModal, changeModalTitle, changeModalContent, classes } = this.props;
        showModal();
        changeModalTitle('Delete Task');
        changeModalContent(<div className={classes.deleteTaskContent}>
            <span className="classes.deleteTaskText">Are you sure you want to delete
            <span className={classes.deleteTaskTextBlod}>  {task.title}</span> ?
            </span>
            <Box mt={4}>
                <Grid container direction="row" justify="flex-end">
                    <Box mr={2} component="div">
                        <Button variant="contained" onClick={hideModal}>Cancel</Button>
                    </Box>
                    <Box component="div">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.deleteTaskButtonOk}
                            onClick={() => this.handleDeleteTask(task)}
                        >Ok</Button>
                    </Box>
                </Grid>
            </Box>
        </div>);
    }

    handleDeleteTask = (task) => {
        const { hideModal, deleteTask } = this.props;
        deleteTask(task.id);
        hideModal();
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
                        return <TaskList
                            task={taskBoardFilter}
                            status={status} key={index}
                            onClickEdit={this.handleEditTask}
                            onClickDeleteTask={this.showModalDeleteTask}
                        >
                        </TaskList>
                    })
                }
            </Grid>
        )
        return xhtml;
    }

    onOpenDialog = () => {
        const { showModal, changeModalTitle, changeModalContent, setTaskEditing } = this.props;
        setTaskEditing(null);
        showModal();
        changeModalTitle('Add New Task');
        changeModalContent(<TaskForm closeModal={showModal} />);
    }

    handleCloseDialog = () => {
        this.setState({
            open: false
        })
    }

    onFilter = (e) => {
        const { filterTask } = this.props;
        filterTask(e.target.value);
    }

    renderSearchBox = () => {
        var xHtml = null;
        xHtml = <SearchBox handleChange={this.onFilter} />
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
                <Button onClick={this.loadDataDemo} variant="contained" color="primary" style={{ marginRight: "20px" }}>
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
        changeModalTitle: (title) => {
            dispatch(ActionsModal.changeModalTitle(title))
        },
        changeModalContent: (component) => {
            dispatch(ActionsModal.changeModalContent(component))
        },
        hideModal: () => {
            dispatch(ActionsModal.hideModal())
        },
        setTaskEditing: (task) => {
            dispatch(ActionsTask.taskEditing(task));
        },
        deleteTask: (id) => {
            dispatch(ActionsTask.deleteTask(id))
        }

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