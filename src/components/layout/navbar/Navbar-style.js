import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "70px",
    position: "fixed !important",
  },
  navlink: {
    padding: "10px 20px",
    fontWeight: "600 !important",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        color: [theme.palette.primary.main],
        transition: "color 0.3s linear, border-bottom 0.2s ease-in-out",
        borderBottom: "3px solid",
      },
    },
  },
  hideLinks: {
    display: "none",
    [theme.breakpoints.up("md")]: { display: "block" },
  },
  logo: {
    marginRight: "auto !important",
    fontWeight: "600 !important",
    padding: "20px",
  },
  menuIcon: {
    display: "visible",
    [theme.breakpoints.up("md")]: { visibility: "hidden" },
  },
}));