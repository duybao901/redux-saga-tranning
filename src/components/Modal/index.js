import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ActionsModal from '../../actions/modal'
import styles from './style'


class ComponentModal extends Component {
    render() {
        const { open, component, title, onCloseModal, classes } = this.props;
        return (
            <Modal open={open} onClose={onCloseModal} >
                <Box component="div" className={classes.modalForm} >
                    <Grid container justify="space-between" alignItems="center" className={classes.modalFormHeader}>
                        <Box component="div" >
                            <h3 className={classes.modalFormHeaderTitle}>{title}</h3>
                        </Box>
                        <Box>
                            <CloseIcon className={classes.modalFormClose} onClick={onCloseModal}> </CloseIcon>
                        </Box>
                    </Grid>
                    <Box component="div" className={classes.modalFormContent}>
                       {component}
                    </Box>
                </Box>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        open: state.modal.openModal,
        title: state.modal.title,
        component: state.modal.component
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseModal: () => {
            dispatch(ActionsModal.hideModal())
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ComponentModal));