import { Button, CardActions } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const CardButtons = (props) => {
  const { links } = props;
  return (
    <CardActions>
      <Button
        size="small"
        variant="contained"
        sx={{ color: "white" }}
        disabled={!links.url}
        target="_blank"
        href={links.url ? links.url : " "}
        startIcon={<LinkIcon />}
      >
        Website
      </Button>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        target="_blank"
        href={links.github}
        startIcon={<GitHubIcon />}
      >
        Repository
      </Button>
      <Button
        size="small"
        variant="contained"
        color="error"
        target="_blank"
        href={links.youtube}
        startIcon={<YouTubeIcon />}
      >
        Video
      </Button>
    </CardActions>
  );
};

export default CardButtons;
