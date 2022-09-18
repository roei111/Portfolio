import {
  Container,
  Typography,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { useStyles } from "./Experience-style";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import jobs from "../../../data/experienceData";
import DOMPurify from "dompurify";
import "../../../index.css";
import Title from "../../layout/Title";

const Experience = () => {
  const classes = useStyles();
  return (
    <Container id="experience">
      <Title title="Work Experience" />
      {jobs.map((job, index) => (
        <div className={classes.jobWrapper} key={index}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {job.title}
          </Typography>
          <Chip label={job.company} className={classes.colorText} />
          <Typography variant="caption" display="block" gutterBottom>
            {job.range}
          </Typography>
          <List>
            {job.descriptions.map((description, index) => (
              <ListItem disablePadding alignItems="flex-start" key={index}>
                <ListItemIcon className={classes.listIcon}>
                  <ArrowRightIcon color="primary" />
                </ListItemIcon>
                <Typography
                  className={classes.description}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(description, {
                      ALLOWED_TAGS: ["b"],
                    }),
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Container>
  );
};

export default Experience;
