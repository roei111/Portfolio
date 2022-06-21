import Icons from "../../icons/Icons";
import { useStyles } from "./Footer-style";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Icons iconsClassName={classes.icons}/>
        <p className={classes.copyright}>COPYRIGHT © 2022 <span className={classes.colorText}>ROEI YAACOBI</span> ALL RIGHTS RESERVE</p>
    </footer>);
};

export default Footer;
