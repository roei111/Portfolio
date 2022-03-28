import { Container, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import aboutImage from "../../images/about.png";
import aboutImage from "../../images/about2.png";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
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
            Hello! I am <span style={{ color: "#39bcbc" }}>Roei Yaacobi</span>,
            a self-taught web developer who loves combining the worlds of
            <span style={{ color: "#39bcbc" }}> logic </span>
            and creative <span style={{ color: "#39bcbc" }}>design </span> to
            make eye-catching, accessible and user friendly websites. Looking
            for my foothold in the world of programming.
          </Typography>
        </div>
        <img src={aboutImage} style={{ width: "100%" }} />
      </div>
    </Container>
  );
};

export default About;
