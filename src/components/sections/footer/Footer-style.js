import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    height: "100%",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
  },
  icons: {
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    margin: "1rem auto !important",
    "& svg": {
      color: "#FFF",
    },
  },
  copyright: {
    color: "#FFF",
    fontSize: "0.8rem",
    width: "70%",
    margin: "0 auto",
    marginBottom: "1rem",
  },
  colorText: {
    color: [theme.palette.primary.main],
  },
}));