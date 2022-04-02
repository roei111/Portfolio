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
  icons: {
    display: "flex",
    width: "55%",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    paddingInline: "1rem",
    marginTop: "1rem",
    "& svg": {
      color: [theme.palette.text.primary],
      paddingLeft: "0",
      "&:hover": {
        cursor: "pointer",
        color: [theme.palette.primary.main],
        transition: "all 0.3s linear",
      },
    },
  },
  aboutImage: {
    width: "100%",
  },
  colorText: {
    color: [theme.palette.primary.main],
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container>
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography className={classes.title} component="h2">
            About me
          </Typography>

          <Typography className={classes.aboutText}>
            Hello! I am <span className={classes.colorText}>Roei Yaacobi</span>,
            a self-taught web developer who loves combining the worlds of
            <span className={classes.colorText}> logic </span>
            and creative <span className={classes.colorText}>design </span> to
            make eye-catching, accessible and user friendly websites. Looking
            for my foothold in the world of programming.
          </Typography>
        </div>
        <img src={"./images/about.png"} alt="about me" className={classes.aboutImage} />
      </div>
    </Container>
  );
};

export default About;
