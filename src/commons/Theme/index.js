import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: "#4791db",
        secondary: "#e33371",
        error: "#e57373",
        warning: "#ffb74d",
        info: "#64b5f6",
        success:"#81c784"
    },
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'Arial'
        ].join(",")
    },
    spacing: 4, // theme.spacing(2) = 4 * 2
   

})

export default theme