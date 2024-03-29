import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  home: {
    height: "calc(100vh - 70px)",
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "center",
      alignItems: "end",
      margin: "0 20rem",
    },
  },
  container: {
    display: "flex !important",
    flexDirection: "column",
    height: "55%",
    zIndex: 1,
  },
  text: {
    color: theme.palette.text.secondary,
    padding: "1rem",
    paddingRight: "0",
    alignSelf: "flex-start",
    fontSize: "1.5rem !important",
    fontWeight: "700 !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.2rem !important",
    }
  },
}));