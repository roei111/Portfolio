import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useStyles } from "./MediaCarousel-style";
import YoutubeVideo from "./YoutubeVideo";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MediaCarousel = (props) => {
  const classes = useStyles();
  const { img: images, links, title } = props.project;
  const { youtube: videoId } = links;
  const arr = [videoId].filter((videoId) => videoId != null);
  return (
    <Carousel
    className={classes.carousel}
      showThumbs={false}
      infiniteLoop={true}
      swipeable={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={classes.arrows}
          >
            <NavigateBeforeIcon fontSize="large" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={classes.arrows}
            style={{
              left: "calc(100% - 50px)",
            }}
          >
            <NavigateNextIcon fontSize="large" />
          </button>
        )
      }
    >
      {images.map((image) => (
        <img
          className={classes.carouselImage}
          key={image}
          src={image}
          alt="project"
        />
      ))}
      {arr.map((videoId) => (
        <YoutubeVideo key={videoId} videoId={videoId} title={title} />
      ))}
    </Carousel>
  );
};

export default MediaCarousel;
