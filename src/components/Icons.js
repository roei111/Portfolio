import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.only("md")]: {
      width: "30%",
    },
  },
}));

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
