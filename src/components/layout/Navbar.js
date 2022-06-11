import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeSwitch from "./DarkModeSwitch";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About me", href: "about" },
  { name: "Projects", href: "projects" },
];

const useStyles = makeStyles((theme) => ({
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

const navVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const linkVariants = {
  hidden: (index) => ({
    y: -30,
    opacity: 0,
  }),
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.2,
      duration: 2,
      ease: "easeInOut",
    },
  }),
};

const backToTop = () => {
  scroll.scrollToTop();
};

const Navbar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="default" className={classes.navbar}>
      <Toolbar
        disableGutters
        component={motion.nav}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography
          className={classes.logo}
          variant="h5"
          color="text.primary"
          onClick={backToTop}
        >
          Roei Yaacobi
        </Typography>
        <DarkModeSwitch {...props} />
        {navLinks.map((item, index) => (
          <Link
            className={`${classes.navlink} ${classes.hideLinks}`}
            to={item.href}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            key={item.name}
            component={motion.a}
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            {item.name}
          </Link>
        ))}
        <IconButton className={classes.menuIcon} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navLinks.map((item) => (
            <React.Fragment key={item.name}>
              <ListItem>
                <Link
                  className={classes.navlink}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </ListItem>
              <Divider variant="middle" />
            </React.Fragment>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;
