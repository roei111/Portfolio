import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  carouselImage: {
    height: "200px",
    objectFit: "fill",
    width: "100%",
  },
}));

const ImageCarousel = (props) => {
  const classes = useStyles();
  const images = props.images;
  return (
    <Carousel navButtonsAlwaysVisible={true} autoPlay={false} animation="slide" navButtonsProps={{style:{backgroundColor: "#000000b3"}}}>
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
