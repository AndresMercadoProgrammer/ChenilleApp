import React from "react";
import { HomeWrapper } from "./HomeStyles";
import { CarrouselText } from "../../Components/Carrousel_Text/CarrouselText";

import ImagenesComponent from "../../Components/ImagenComponent/ImagenesComponent";
import BubbleSection from "../../Components/Bubble/Bubble";
import { ImagesGrid } from "../../Components/ImagesWrapperGrid/ImagesWrapperGrid";
import Array from "../../assets/BubbleImg/BubbleArray";
export const Home = () => {
  return (
    <HomeWrapper>
      <CarrouselText />
      <ImagesGrid>
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1749355336/1_pzg5ue.jpg" />
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1749355336/2_j71gap.jpg" />
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1749355336/3_ptazlz.jpg" />
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1749355339/imageCentral_mgeicr.png" />
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1749355336/1_ahzfd0.webp" />
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1749355337/2_gugrj6.webp" />
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1749355337/3_rpkc6m.webp" />
      </ImagesGrid>
      <BubbleSection array={Array} />
      <ImagesGrid>
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1748840417/5_fpse7t.jpg" />
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1749355342/4_olsgwa.jpg" />
        <ImagenesComponent src="https://res.cloudinary.com/dcb95uryz/image/upload/v1749355339/6_c4wxtj.jpg" />
      </ImagesGrid>
    </HomeWrapper>
  );
};
