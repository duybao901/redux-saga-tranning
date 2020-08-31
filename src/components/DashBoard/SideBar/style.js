const styles = theme => {
    return {
        drawer: {
            width: '240px',
            flexShrink: 0,

        },
        drawerPaper: {
            width: '240px',
            marginTop: "64px"
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        drawerButtonClose: {
            marginLeft: 'auto',
            marginRight: "20px",
            marginTop: "20px"
        }
    }
}
export default styles