import { motion } from "framer-motion";
import styled from "styled-components";


export const CarrouselTextStyled = styled(motion.div)`



    ul {
        
        list-style: none;
        width: 100%;
        height: 70px;
        font-weight: 600;
      overflow: hidden;
       text-transform: capitalize;
        
    }



    ul li{
        text-align: center;
        width:100%;
        line-height: 70px;
       
      
    }

     
`