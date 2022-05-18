import { makeStyles } from "@mui/styles";
import Icons from "../Icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "10vh",
    backgroundColor: [theme.palette.text.primary],
    display: "flex"
  },
  // icons: {

  // },
  copyright: {
    color: [theme.palette.background.paper]
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Icons className={classes.icons}/>
        <p className={classes.copyright}>COPYRIGHT © 2022 Roei Yaacobi ALL RIGHTS RESERVE</p>
    </footer>);
};

export default Footer;
