import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  carouselImage: {
    objectFit: "fill",
  },
  video: {
    width: "100% !important",
    height: "100% !important",
    margin: "0 !important",
  },
  arrows: {
    height: "70%",
    top: "15%",
    position: "absolute",
    zIndex: 2,
    cursor: "pointer",
    backgroundColor: "#fff0",
    borderColor: "#fff0",
    [theme.breakpoints.down("sm")]: {
      height: "60%",
      top: "20%",
    },
    "& svg": {
      top: "calc(50% - 15px)",
      color: "#fff",
      backgroundColor: "#00000069",
      borderRadius: "50%",
    },
  },
  carousel: {
    "& .control-dots": {
      width: "80%",
      left: "10%",
    },
  },
}));
