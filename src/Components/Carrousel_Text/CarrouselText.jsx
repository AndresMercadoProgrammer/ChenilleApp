import React from "react";
import { CarrouselTextStyled } from "./CarrouselTextStyles";
import { motion } from "framer-motion";
export const CarrouselText = () => {
  return (
    <>
      <CarrouselTextStyled>
        <ul>
          <motion.li
            animate={{
              y: ["0px", "75px", "-75px", "0px"],
              opacity: [1, 0, 0, 1],
            }}
            transition={{
              ease: "easeIn",
              duration: 5,
              repeat: Infinity,
              repeatDelay: 0.7,
              times: [0, 0.4, 0.6, 1],
            }}
          >
            The Best Site
          </motion.li>
          <motion.li
            animate={{
              y: ["0px", "-150px", "-75px", "0px"],
              opacity: [0, 0, 1, 1],
            }}
            transition={{
              ease: "easeIn",
              duration: 5,
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.1, 0.4, 1],
            }}
          >
            Amazing Prices
          </motion.li>
        </ul>
      </CarrouselTextStyled>
    </>
  );
};
