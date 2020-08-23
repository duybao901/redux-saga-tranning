const styles = () => ({
    modalForm: {
        position: 'relative',
        top: "40%",
        left: "50%",
        backgroundColor: "#f1f1f1",
        border: "none",
        outline: "none",
        transform: "translate(-50%,-50%)",
        width: "600px",
        height: "auto",
        padding: "0",
        borderRadius: "5px",
        overflow: "hidden"
    },
    modalFormHeader: {
        color: "white",
        backgroundColor: "#3f51b5",
        padding: "0px 30px"
    },
    modalFormContent: {
        display: "block",
        padding: "30px"
    },
    modalFormClose: {
        cursor: 'pointer',
    }
});

export default styles;