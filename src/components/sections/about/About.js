import { Container, Typography, Divider } from "@mui/material";
import { useStyles } from "./About-style";

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
