import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import styles from './style'
import TaskItem from '../TaskItem/index'

class TaskList extends Component {
    render() {
        const { task, status, classes, onClickEdit, onClickDeleteTask} = this.props;
        return <Grid item xs={12} md={6} lg={4} key={task}>
            <Box component="div" mt={10} mb={3} className={classes.status}>{status.label}</Box>
            <Box component="div" className={classes.wrapperStatus}>
                {
                    task.map((task, index) => {
                        return <TaskItem
                            task={task}
                            status={status}
                            key={index}
                            clickEdit={() => onClickEdit(task)}
                            clickDeleteTask={() => onClickDeleteTask(task)}
                        ></TaskItem>
                    })
                }
            </Box>
        </Grid>
    }
}

export default withStyles(styles)(TaskList);