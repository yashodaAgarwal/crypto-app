import { Container, makeStyles} from "@material-ui/core";
import Carousel from "../Carousel/Carousel";
import "./banner.css";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiK2Ps5dbp2dx1SYm4iRlR4c0U1VKiWdlh7qSojgTTWXleuam8nvuUv7w_Bp7IC48SZd0&usqp=CAU)",
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className="bannerContent">
        <div className="tagline">
          <h2 className="bannertitle">Crypto Coins</h2>
          <p className="bannertitle2">
            Get all the Info regarding your favorite Crypto Currency
          </p>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
