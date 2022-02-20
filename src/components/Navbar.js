import React, { useState } from "react";
import {
  Link,
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

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "70px",
  },
  navlink: {
    padding: "20px",
    fontWeight: "600 !important",
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
        <Typography className={classes.logo} variant="h5" color="text.primary">
          Roei Yaacobi
        </Typography>
        <DarkModeSwitch {...props} />
        {navLinks.map((item, index) => (
          <Link
            className={`${classes.navlink} ${classes.hideLinks}`}
            color="text.primary"
            variant="button"
            underline="none"
            href={item.href}
            key={item.name}
            component={motion.a}
            // animate={{
            //   opacity: [0, 1],
            //   y: [-30, 0],
            // }}
            // transition={{ delay: index * 0.1 }}
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
            <ListItem key={item.name}>
              <Link
                className={classes.navlink}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;
