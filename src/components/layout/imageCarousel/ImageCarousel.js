import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useStyles } from "./ImageCarousel-style";

const ImageCarousel = (props) => {
  const classes = useStyles();
  const images = props.images;
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
    </Carousel>
  );
};

export default ImageCarousel;
