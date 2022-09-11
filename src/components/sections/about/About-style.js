import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    marginBottom: "1rem !important",
  },
  aboutText: {
    fontSize: "1.2rem !important",
    lineHeight: "1.7 !important",
    [theme.breakpoints.up("lg")]: {
      marginInline: "2rem !important",
      lineHeight: "2 !important",
    },
    [theme.breakpoints.only("md")]: {
      lineHeight: "2 !important",
    },
    "&:last-child": {
      marginTop: "0.5rem",
    }
  },
  aboutImage: {
    width: "100%",
    marginTop: "1rem",
    [theme.breakpoints.only("sm")]: {
      width: "70%",
    },
  },
  colorText: {
    color: [theme.palette.primary.main],
  },
  aboutContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },

  },
}));