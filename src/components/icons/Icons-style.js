import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  icons: {
    display: "flex",
    width: "55%",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    paddingInline: "1rem",
    marginTop: "1rem",
    "& svg": {
      color: [theme.palette.text.primary],
      paddingLeft: "0",
      "&:hover": {
        cursor: "pointer",
        color: [theme.palette.primary.main],
        transition: "all 0.3s linear",
      },
    },
    [theme.breakpoints.only("md")]: {
      width: "30%",
    },
  },
}));