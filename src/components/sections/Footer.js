import { makeStyles } from "@mui/styles";
import Icons from "../Icons";

const useStyles = makeStyles((theme) => ({
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
  },
  colorText: {
    color: [theme.palette.primary.main],
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Icons iconsClassName={classes.icons}/>
        <p className={classes.copyright}>COPYRIGHT © 2022 <span className={classes.colorText}>ROEI YAACOBI</span> ALL RIGHTS RESERVE</p>
    </footer>);
};

export default Footer;
