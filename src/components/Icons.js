import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  svg: {
    color: [theme.palette.background.paper],
    paddingLeft: "0",
    "&:hover": {
      cursor: "pointer",
      color: [theme.palette.primary.main],
      transition: "all 0.3s linear",
    },
  },
}));

const Icons = () => {
  const classes = useStyles();
  return (
    <>
      <a
        href="https://github.com/roei111"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </a>
      <a
        href="https://www.linkedin.com/in/roei-yaacobi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCvhwvtUtrh7WOL_VNyp2E4Q"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon fontSize="large" />
      </a>
    </>
  );
};

export default Icons;
