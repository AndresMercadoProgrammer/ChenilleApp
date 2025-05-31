import React from "react";
import {
  PreFooterStyled,
  FooterWrapper,
  SocialMediaStyled,
  MenuFooterStyled,
  FinalFooterStyled,
} from "./FooterStyles";
import { LuMailQuestion } from "react-icons/lu";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialPinterest } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { ButtonCircle } from "../UI/Buttons/ButtonCircle/ButtonCircle";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterWrapper>
      <PreFooterStyled>
        <LuMailQuestion className="icon" />
        <p className="title">BE IN THE BOX</p>

        <p>
          {" "}
          Keep up to date with the latest Next news, including exclusive offers
          and not to be missed sale and store events.
        </p>
        <p>Enter your email address below to opt in to email marketing.</p>

        <p>
          See Next's full Terms and Conditions and Privacy Policy to find out
          more.
        </p>

        <input type="email" placeholder="Email address" />
        <ButtonCircle bkg="red">Subscribe</ButtonCircle>
        <p>
          See Next's full Terms and Conditions and Privacy Policy to find out
          more.
        </p>
      </PreFooterStyled>

      <SocialMediaStyled>
        <p>Our Social Networks </p>
        <div className="social_div_container">
          <SlSocialFacebook />
          <TiSocialTwitter />
          <SlSocialInstagram />
          <TiSocialPinterest />
          <SlSocialYoutube />
        </div>
      </SocialMediaStyled>

      <MenuFooterStyled>
        <div className="menu_columns">
          <h2>Help</h2>
          <ul>
            <li>
              <a href="">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="">Delivery Information</a>
            </li>
            <li>
              <a href="">Arrange A Return</a>
            </li>
            <li>
              <a href="">Product Recall</a>
            </li>
            <li>
              <a href="">Customer Services - 0333 777 8000</a>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>

            <li>
              <a href="">Accessible Site</a>
            </li>
            <li>
              <a href="">Website Accessibility Polic</a>y
            </li>
            <li>
              <a href="">Accessibility In Our Stores</a>
            </li>
            <li>
              <a href="">Site Map</a>
            </li>
            <li>
              <a href="">Complaints Process</a>
            </li>
            <li>
              <a href="">Furniture Spare Parts</a>
            </li>
          </ul>
        </div>
        <div className="menu_columns">
          <h2>Shopping Whit Us</h2>
          <ul>
            <li>
              <a href="">Next Unlimited</a>
            </li>
            <li>
              <a href="">Next Credit Options</a>
            </li>
            <li>
              <a href="">eGift Cards</a>
            </li>
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="">Gift Experiences</a>
            </li>
            <li>
              <a href="">Flowers, Plants & Wine</a>
            </li>
            <li>
              <a href="">Privacy & Cookie Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Manually Manage Cookies</a>
            </li>
          </ul>
        </div>
        <div className="menu_columns">
          <h2>Departments</h2>
          <ul>
            <li>
              <a href="">Sillas</a>
            </li>
            <li>
              <a href="">Mesas</a>
            </li>
            <li>
              <a href="">Armarios</a>
            </li>
            <li>
              <a href="">Roperos</a>
            </li>
            <li>
              <a href="">Sofas</a>
            </li>
            <li>
              <a href="">Sommiers</a>
            </li>
          </ul>
        </div>
        <div className="menu_columns">
          <h2>More From Next</h2>
          <ul>
            <li>
              <a href="">Next App</a>
            </li>
            <li>
              <a href="">The Company</a>
            </li>
            <li>
              <a href="">Media & Press</a>
            </li>
            <li>
              <a href="">Business 2 Business</a>
            </li>
            <li>
              <a href="">Careers @ Next</a>
            </li>
            <li>
              <a href="">View Our Modern Slavery Statement</a>
            </li>
            <li>
              <a href="">Gender Pay Report</a>
            </li>
            <li>
              <a href="">Corporate Responsibility Report</a>
            </li>
          </ul>
        </div>
      </MenuFooterStyled>
      <FinalFooterStyled>
        <a href="">View mobile site</a>
        <p>© 2024 Next Retail Ltd. All rights reserved.</p>
      </FinalFooterStyled>
    </FooterWrapper>
  );
};
