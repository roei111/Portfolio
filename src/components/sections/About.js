import { Container, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    marginBottom: "1rem !important",
  },
  aboutText: {
    fontSize: "1.2rem !important",
  },
  aboutImage: {
    width: "100%",
    marginTop: "1rem",
    [theme.breakpoints.only("sm")]: {
      width: "70%",
    },
  },
  colorText: {
    color: [theme.palette.primary.main],
  },
  aboutContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
   
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container id="about">
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <Typography className={classes.title} component="h2">
        About me
      </Typography>
      <div className={classes.aboutContent}>
        <div>
          <Typography className={classes.aboutText}>
            Hello! I am <span className={classes.colorText}>Roei Yaacobi</span>,
            a self-taught web developer who loves combining the worlds of
            <span className={classes.colorText}> logic </span>
            and creative <span className={classes.colorText}>design </span> to
            make eye-catching, accessible and user friendly websites. Looking
            for my foothold in the world of programming.
          </Typography>
        </div>
        <img
          src={
            "https://res.cloudinary.com/dq6iduc79/image/upload/v1655203386/portfolio-avif/about5_j1mdia.webp"
          }
          alt="about me"
          className={classes.aboutImage}
        />
      </div>
    </Container>
  );
};

export default About;
