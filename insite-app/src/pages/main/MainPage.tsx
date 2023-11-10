/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable import/order */
// /* eslint-disable import/no-extraneous-dependencies */

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import styled, { css } from "styled-components";
import backgroundImg from "../../assets/images/애니메이션배경.gif";
import backgroundImg2 from "../../assets/images/메인페이지_설명4.jpg";
// import backgroundImg3 from "../../assets/images/MainVertical.jpg";
import secondPageImg from "../../assets/images/MainVertical.jpg";
import thirdPageImg from "../../assets/images/메인페이지_두번째2.jpg";
import thirdPageGif from "../../assets/images/MainBackground7.gif";
import FooterLogoImg from "../../assets/images/FooterLogo2.png";
import MainHeader2 from "@components/common/header/MainHeader2";
import { Link, Element } from "react-scroll"; // This is the react-scroll library

const StyledButton = styled.button`
  background-image: linear-gradient(to right, #4776e6 0%, #8e54e9 51%, #4776e6);
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px black;
  border-radius: 10px;
  display: block;
  position: absolute;
  top: 57%;
  left: 8%;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: white; /* Changed the text color to black for visibility */
    text-decoration: none;
    transform: scale(1.1); /* Makes the button bigger */
    transition: transform 0.3s ease; /* Smooth transition for scaling */
  }

  &:active {
    transform: scale(0.96); /* Scales down the button when clicked */
    transition: transform 0.1s; /* Faster transition for click effect */
  }

  &:focus {
    background-color: white;
    /* Ensuring the button remains clickable and visible */
  }
`;

const Section = styled(Element)`
  width: 100%;
  height: 100vh; // This makes the section take up the full viewport height
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled(animated.footer)`
  display: flex;
  justify-content: space-between; /* This will push the children to the sides */
  align-items: center; /* This will center them vertically */
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 50px;
  background-color: #252531;
  color: white; /* text color */
  font-size: 16px;
  /* border-top: 1px solid black; */
`;

const Container = styled.div`
  width: 100%;
  height: 320vh; /* Making the container tall to enable scrolling */
  position: relative;
  background-color: #252531;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: scroll; /* Allow vertical scrolling */
  ${css`
    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

const DynamicBackground = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(${backgroundImg2}),
    radial-gradient(circle at center, transparent 0%, #252531 80%),
    url(${backgroundImg});
  background-position:
    left,
    right center,
    right;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 45%, 55%, 55%; /* Set this to the correct size of your images */
  z-index: 3;

  /* Add a pseudo-element to create the blur effect on the left edge of the right image */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 45%; /* Adjust this value so it overlays the left edge of the right image */
    height: 100%;
    width: 300px; /* Width of the blur effect */
    background: linear-gradient(to left, rgba(0, 0, 0, 0), #252531);
    /* z-index: -2; */
  }
`;

const SecondPage = styled(animated.div)`
  width: 100%;
  height: 100%; /* Making the container tall to enable scrolling */
  position: relative;
  background-image: url(${thirdPageImg});
  background-color: #252531;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;
  /* border-top: 1px solid black; */
  z-index: 2;
`;

const ThirdPage = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(${backgroundImg2}),
    radial-gradient(circle at center, transparent 0%, #252531 50%),
    url(${thirdPageGif}), url(${backgroundImg2});

  /* radial-gradient(circle at center, transparent 0%, #252531 80%),
    radial-gradient(circle at center, transparent 0%, #252531 80%); */
  background-position:
    left,
    center,
    center center,
    right;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 33%, 34%, 33%, 33%; /* Set this to the correct size of your images */
  z-index: 1;

  /* Add a pseudo-element to create the blur effect on the left edge of the right image */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 45%; /* Adjust this value so it overlays the left edge of the right image */
    height: 100%;
    width: 300px; /* Width of the blur effect */
    /* background: linear-gradient(to left, rgba(0, 0, 0, 0), #252531); */
    /* z-index: -1; */
  }
`;

// const ThirdPage = styled.div`
//   width: 100%;
//   height: 100%; /* Making the container tall to enable scrolling */
//   position: relative;
//   background-image: url(${thirdPageImg});
//   background-color: #252531;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   opacity: 1;
//   z-index: -10;
// `;

const ScrollDownIndicator = styled(animated.div)`
  position: fixed;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: #5383fa;
  text-align: center;
  font-size: 70px;
`;

const AnimatedImage = styled(animated.img)`
  position: absolute;
  will-change: transform; /* Performance optimization for smoother animations */
`;

function MainPage() {
  // Initialize vhInPixels state to a default value
  const [vhInPixels, setVhInPixels] = useState(0);

  // Update vhInPixels whenever the window resizes
  useEffect(() => {
    const updateVhInPixels = () => {
      setVhInPixels(window.innerHeight);
    };

    window.addEventListener("resize", updateVhInPixels);

    // Call the handler immediately to set the initial value
    updateVhInPixels();

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", updateVhInPixels);
  }, []);

  // Spring values for the image animations based on scroll
  const [{ scrollY }, setScrollY] = useSpring(() => ({ scrollY: 0 }));

  const scrollDownAnimation = useSpring({
    to: {
      opacity: scrollY.to((y) => (y > 0 ? 0 : 1)), // Opacity is 1 when at the top (y=0), becomes 0 when scrolling down
      transform: scrollY.to((y) => (y > 0 ? "scale(0)" : "scale(1)")), // Scale is 1 when at the top, becomes 0.5 when scrolling down
    },
    config: { tension: 250, friction: 10 },
  });

  const secondPageAnimation = useSpring({
    opacity: scrollY.to([0, vhInPixels * 0.5, vhInPixels], [0, 0, 1]),
    transform: scrollY.to(
      [0, vhInPixels * 0.5, vhInPixels],
      ["scale(1.0)", "scale(1.1)", "scale(1.0)"],
    ),
    config: { tension: 250, friction: 10 },
  });

  // State to manage the footer visibility
  const [showFooter, setShowFooter] = useState(false);

  // Spring animation for the footer
  const footerAnimation = useSpring({
    opacity: showFooter ? 1 : 0,
    bottom: showFooter ? "0px" : "-700px", // This will smoothly slide the footer up and down
  });

  // Update scrollY when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollY({ scrollY: window.scrollY });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const bottomThreshold = 100; // or any other value that suits your needs

      // Check if the user has scrolled to the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - bottomThreshold
      ) {
        setShowFooter(true); // Show footer
      } else {
        setShowFooter(false); // Hide footer
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this effect will only attach the event listener once

  // Define the background and image properties to change with scroll
  const imageTransform = scrollY.to(
    (y) => `scale(${1 + y / (2 * vhInPixels)})`, // Image scale grows as you scroll down
  );

  const imageOpacity = scrollY.to((y) => `${1 - y / (0.5 * vhInPixels)}`);

  // Make sure to only render once we have the window height
  if (!vhInPixels) {
    return null;
  }

  // A function to render sections
  const renderSection = (key: number, content: JSX.Element) => (
    <Section name={`section-${key}`} key={key}>
      {content}
    </Section>
  );

  return (
    <Container>
      <MainHeader2 scrollY={scrollY} />
      {/* {renderSection(1, <MainHeader2 scrollY={scrollY} />)} */}
      {renderSection(
        1,
        <DynamicBackground
          style={{
            transform: imageTransform, // Apply the dynamic scale transformation
            opacity: imageOpacity, // Apply the dynamic opacity
          }}
        >
          <StyledButton>서비스 이용하기</StyledButton>
        </DynamicBackground>,
      )}
      {renderSection(2, <SecondPage style={secondPageAnimation} />)}
      {renderSection(3, <ThirdPage />)}
      {/* Repeat for as many sections as you need, putting your content inside */}
      {/* Your ScrollDownIndicator and Footer will likely stay outside of these sections */}

      {/* <DynamicBackground
        style={{
          transform: imageTransform, // Apply the dynamic scale transformation
          opacity: imageOpacity, // Apply the dynamic opacity
        }}
      /> */}
      {/* Your other content here */}
      <ScrollDownIndicator style={scrollDownAnimation}>🢓</ScrollDownIndicator>
      <Footer style={footerAnimation}>
        <div
          style={{ display: "flex", alignItems: "center", paddingLeft: "30px" }}
        >
          {/* Aligning Contact and Guide side by side */}

          <p style={{ margin: "0px 20px" }}>연락처</p>
          <p style={{ margin: "0px 20px" }}>이용자 가이드</p>
          <p style={{ margin: "0px 20px" }}>개발자</p>
          <p style={{ margin: "0px 20px" }}>Github</p>
          {/* <p style={{ margin: "0px 10px" }}>이용자 가이드</p> */}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingRight: "170px",
          }}
        >
          <img src={FooterLogoImg} width="120" alt="FooterLogo" />
          &nbsp;
          <p>&copy; {new Date().getFullYear()} Insite. All rights reserved.</p>
        </div>
      </Footer>
    </Container>
  );
}

export default MainPage;
