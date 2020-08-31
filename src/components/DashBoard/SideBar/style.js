const styles = theme => {
    return {
        drawer: {
            width: '240px',
            flexShrink: 0,
            zIndex: 1
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
        },
        sidebarNavLink: {
            color:"#000",
            backgroundColor: 'red',
            textDecoration: 'none',
            '& > div': {
                padding: "12px 10px",
            },
            '&:hover > div': {
                backgroundColor: "#d9d9d9"
            }
        },
        sidebarNavLinkActive: {
            '& > div': {
                backgroundColor: "#f5f5f5"
            },           
        },
        sibarList: {
            padding: 0,
        }
    }
}
export default styles