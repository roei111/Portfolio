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

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const useStyles = makeStyles((theme) => ({
  navlink: {
    padding: "20px",
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

const Navbar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="default">
      <Toolbar disableGutters>
        <Typography className={classes.logo} variant="h5" color="text.primary">
          Roei Yaacobi
        </Typography>
        <DarkModeSwitch {...props} />
        {navLinks.map((item) => (
          <Link
            className={`${classes.navlink} ${classes.hideLinks}`}
            color="text.primary"
            variant="button"
            underline="none"
            href={item.href}
            key={item.name}
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
