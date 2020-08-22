import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './style'
import loadingIcon from '../../assets/img/loading.gif'
import { connect } from 'react-redux'


class GlobalLoading extends Component{
    render() {
        const { classes, showLoading } = this.props;
        console.log(showLoading)
        var xHtml = null;
        if (showLoading) {         
            xHtml =  <div className={classes.loadingWrapper}>
                <img src={loadingIcon} alt="Global loading" className={classes.iconLoading}/>
            </div>
        };
        return xHtml;
    }
}

const mapStateToProps = (state) => {
    return {
        showLoading: state.ui.showLoading
    }
}

const withConnect = connect(mapStateToProps, null)

export default withStyles(styles)(withConnect(GlobalLoading));