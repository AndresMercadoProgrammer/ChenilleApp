import React from "react";
import { HomeWrapper } from "./HomeStyles";
import { CarrouselText } from "../../Components/Carrousel_Text/CarrouselText";
import ONE from "../../PORTADA IMG/1.jpg";
import TWO from "../../PORTADA IMG/2.jpg";
import THREE from "../../PORTADA IMG/3.jpg";
import FOUR from "../../PORTADA IMG/4.jpg";
import CENTRAL from "../../PORTADA IMG/imageCentral.png";
import ImagenesComponent from "../../Components/ImagenComponent/ImagenesComponent";
import BubbleSection from "../../Components/Bubble/Bubble";
import { ImagesGrid } from "../../Components/ImagesWrapperGrid/ImagesWrapperGrid";
import Array from "../../assets/BubbleImg/BubbleArray";
export const Home = () => {
  return (
    <HomeWrapper>
      <CarrouselText />

      <ImagesGrid>
        <ImagenesComponent src={ONE} />
        <ImagenesComponent src={TWO} />
        <ImagenesComponent src={THREE} />
        <ImagenesComponent src={CENTRAL} />
        <ImagenesComponent src={FOUR} />
        <ImagenesComponent src={ONE} />
        <ImagenesComponent src={THREE} />
      </ImagesGrid>
      <BubbleSection array={Array} />
      <ImagesGrid>
        <ImagenesComponent src={ONE} />
        <ImagenesComponent src={ONE} />
        <ImagenesComponent src={ONE} />
      </ImagesGrid>
    </HomeWrapper>
  );
};
