import { Button, CardActions } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const CardButtons = (props) => {
  const { links } = props;
  return (
    <CardActions>
      <Button
        size="small"
        variant="contained"
        sx={{ color: "white", width: "50%" }}
        disabled={!links.url}
        target="_blank"
        href={links.url ? links.url : " "}
        startIcon={<LinkIcon />}
      >
        Website
      </Button>
      <Button
        size="small"
        variant="outlined"
        sx={{ width: "50%", border: "1px solid" }}
        target="_blank"
        href={links.github}
        startIcon={<GitHubIcon />}
      >
        Repository
      </Button>
    </CardActions>
  );
};

export default CardButtons;
