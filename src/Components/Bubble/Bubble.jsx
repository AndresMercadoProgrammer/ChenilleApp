import React from "react";
import { BubbleContainer, BubbleStyled } from "./BubbleStyles";

export const Bubble = ({ array }) => {
  return (
    <>
      <>
        <BubbleContainer>
          {array.map((img, idx) => {
            return (
              <BubbleStyled key={idx + 1}>
                <img src={img} alt="" />
              </BubbleStyled>
            );
          })}
        </BubbleContainer>
      </>
    </>
  );
};
export default Bubble;
