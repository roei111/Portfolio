import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "20vh",
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>This is the footer ! </footer>;
};

export default Footer;
