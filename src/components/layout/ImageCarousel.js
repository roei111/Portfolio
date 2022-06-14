import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  carouselImage: {
    // objectFit: "fill",
    objectFit: "cover",
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      height: "350px",
    },
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      objectFit: "fill",
    },
  },
  carousel: {
    height: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const ImageCarousel = (props) => {
  const classes = useStyles();
  const images = props.images;
  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      animation="slide"
      className={classes.carousel}
      navButtonsProps={{ style: { backgroundColor: "#000000b3" } }}
      indicatorContainerProps={{
        style: {
          zIndex: "150",
        },
      }}
    >
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
