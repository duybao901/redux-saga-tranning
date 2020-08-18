import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import TaskList from '../../components/TaskList/index'
import TaskForm from '../../components/TaskForm/index'

import styles from './style'
import { STATUSS } from '../../contants/index'

const listTask = [
    {
        id: 1,
        title: "Read Book",
        description: "Read Book in libary",
        status: 0
    },
    {
        id: 2,
        title: "Make Cofee",
        description: "Make Cofee at tomorrow",
        status: 1
    },
    {
        id: 3,
        title: "Play Football",
        description: "Play Football with my friend",
        status: 2
    },
    {
        id: 4,
        title: "Go to bed",
        description: "Go to bed at night",
        status: 1
    },
    {
        id: 5,
        title: "Go Home",
        description: "Go home with my friend",
        status: 2
    },
    {
        id: 6,
        title: "Playing Game",
        description: "Playing game with my friend",
        status: 0
    },
    {
        id: 7,
        title: "Listening to music",
        description: "Listening to music",
        status: 0
    }

]
class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    renderTaskBoard = () => {
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

    onOpenDialog= () => {
        this.setState({
            open: true
        })
    }

    handleCloseDialog = () => {
        this.setState({
            open: false
        })
    }

    renderTaskForm = () => {
        var xhtml = null;
        const { open } = this.state;
        xhtml = <TaskForm open={open} onCloseDialog={this.handleCloseDialog}></TaskForm>
        return xhtml;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.TaskList}>
                <Button variant="contained" color="primary" onClick={this.onOpenDialog}>
                    <span className="material-icons">
                        add
                    </span>
                    Add New Tasks
                </Button>
                {this.renderTaskBoard()}
                {this.renderTaskForm()}
            </div>
        )
    }
}
export default withStyles(styles)(TaskBoard);