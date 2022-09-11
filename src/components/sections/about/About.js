import { Container, Typography, Divider } from "@mui/material";
import { useStyles } from "./About-style";
import '../../../index.css';

const About = () => {
  const classes = useStyles();
  return (
    <Container id="about">
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <Typography className="title" component="h2">
        About me
      </Typography>
      <div className={classes.aboutContent}>
        <div>
          <Typography className={classes.aboutText}>
            Hello! I am <span className={classes.colorText}>Roei Yaacobi</span>,
            a self-taught web developer who loves combining the worlds of
            <span className={classes.colorText}> logic </span>
            and creative <span className={classes.colorText}>design </span> to
            make eye-catching, accessible, and user-friendly websites.
          </Typography>
          <Typography className={classes.aboutText}>
            I am a fast learner with pure love for challenges and lots of
            motivation, with a passion to learn new technologies. In my free
            time, I enjoy contributing to{" "}
            <span className={classes.colorText}>open-source</span> projects.
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
