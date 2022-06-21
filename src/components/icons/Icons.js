import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import clsx from "clsx";
import { useStyles } from "./Icons-style";

const Icons = (props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.icons, props.iconsClassName)}>
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
    </div>
  );
};

export default Icons;
