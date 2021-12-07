import { SCROLL } from "../../constants";
import { Carousel } from "react-responsive-carousel";
import gallery1 from "../../images/gallery1.jfif";
import gallery2 from "../../images/gallery2.jfif";
import gallery3 from "../../images/gallery3.jfif";
import gallery4 from "../../images/gallery4.jfif";
import gallery5 from "../../images/gallery5.jfif";

import styles from "./Gallery.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = () => (
  <div id={SCROLL.GALLERY}>
    <h2 className={styles.header}>Галарея</h2>
    <Carousel
      className={styles.gallery}
      autoPlay
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    >
      <div>
        <img alt="gallery" src={gallery1} />
      </div>
      <div>
        <img alt="gallery" src={gallery2} />
      </div>
      <div>
        <img alt="gallery" src={gallery3} />
      </div>
      <div>
        <img alt="gallery" src={gallery4} />
      </div>
      <div>
        <img alt="gallery" src={gallery5} />
      </div>
    </Carousel>
  </div>
);

export { Gallery };
