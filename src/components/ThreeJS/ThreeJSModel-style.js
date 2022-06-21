import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  canvas: {
    width: "100vw !important", height: "50vh !important", cursor: "grab", marginTop: "70px",
    [theme.breakpoints.up("lg")]: {
      height: "85vh !important",
      width: "60vw !important",
      marginTop: "0",
      marginBottom: "50px",
      marginLeft: "-150px",
    },
  },
}));