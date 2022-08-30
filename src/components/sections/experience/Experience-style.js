import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    marginBottom: "1rem !important",
  },
  colorText: {
    backgroundColor: `${[theme.palette.primary.light]} !important`,
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  jobWrapper: {
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  description: {
    marginTop: "0.8rem !important",
  },
  listIcon: {
    marginTop: "0.8rem !important",
    minWidth: "35px !important",
  },
}));
