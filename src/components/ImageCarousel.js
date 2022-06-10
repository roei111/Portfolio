import Carousel from 'react-material-ui-carousel'

const ImageCarousel = (props) => {
  const images = props.images
  return(
    <Carousel height={"400px"} autoPlay={false}>
      {images.map((image)=><img key={image} src={image} style={{objectFit:"cover"}}/>)}
    </Carousel>
  );
};

export default ImageCarousel;