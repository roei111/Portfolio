import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    height: "15vh",
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      height: "20vh",
      width: "40vw",
      margin: 0,
    },
  },
  svg: {
    width: "auto",
    alignSelf: "flex-start",
    "& path": {
      stroke: "currentColor",
      strokeWidth: "5",
      fill: (props) =>
        //If the theme has changed one or more times, the fill will be without animation - to prevent animation repetition
        props.isThemeChanged ? [theme.palette.text.primary] : null,
    },
  },
}));