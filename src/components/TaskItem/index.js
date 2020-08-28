import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import styles from './style'

class TaskItem extends Component {
    render() {
        const { task, status, classes, clickEdit } = this.props;
        return (<Box component="div" mb={5}>
            <Card className={classes.root} >
                <CardContent>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <Typography component="h2">
                                {task.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography component="h2">
                                {status.label}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box component="div" mt={2}>
                        <Typography component="p" >
                            {task.description }
                        </Typography>
                    </Box>
                </CardContent>
               
                <CardActions>
                    <Grid container justify="flex-end">
                        <Box component="span" mr={2}>
                            <Button variant="contained" color="primary" onClick={clickEdit}>
                                <EditIcon />Edit
                            </Button>
                        </Box>
                        <Box component="span" >
                            <Button variant="contained" color="secondary">
                                <DeleteIcon />Delete
                            </Button>
                        </Box>

                    </Grid>
                </CardActions>
            </Card>
        </Box>
        )
    }
}

export default withStyles(styles)(TaskItem);