import { createTheme } from "@mui/material/styles";
import { pink,blueGrey } from "@mui/material/colors";


const AppColor = createTheme({
  palette: {
    primary: {
      light: pink[200],
      main: pink[400],
      dark: pink[700],
    },

    secondary: {
      main: blueGrey[200],
    },

  },
});

export default AppColor;
