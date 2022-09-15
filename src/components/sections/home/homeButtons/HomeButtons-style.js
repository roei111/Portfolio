import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  homeButtonsWrapper: {
    display: "flex",
    paddingLeft: "1rem",
  },
  homeButton: {
    fontWeight: "800 !important",
    fontSize: "0.75rem !important",
    backgroundImage: "linear-gradient(to right, #42bbbb, #00c1c1)",
    "&:hover": {
      opacity: "0.85",
      transition: "all 0.2s ease-in-out",
    },
    "&:last-child": {
      marginLeft: "1rem",
    }
  },
}));