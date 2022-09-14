import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useStyles } from "./MediaCarousel-style";
import YoutubeVideo from "./YoutubeVideo";

const MediaCarousel = (props) => {
  const classes = useStyles();
  const { img: images, links, title } = props.project;
  const { youtube: videoId } = links;
  const arr = [videoId].filter((videoId) => videoId != null);
  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
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
