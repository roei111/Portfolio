import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  carouselImage: {
    objectFit: "fill",
  },
}));

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
