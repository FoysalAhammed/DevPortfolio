'use client'
import React from "react";
import styled, { keyframes, css } from "styled-components";

const NewsSlider = () => {
    const row1 = [
        "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        "https://cdn.worldvectorlogo.com/logos/html-1.svg",
        "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
        
        "https://cdn.worldvectorlogo.com/logos/express-109.svg",
        "https://cdn.worldvectorlogo.com/logos/tailwind-css-wordmark.svg",
      ];
    
      const row2 = [
        "https://cdn.worldvectorlogo.com/logos/typescript-2.svg",
        "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
        "https://cdn.worldvectorlogo.com/logos/strapi-full-logo-dark.svg",
        "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
        "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
      ];
    
      return (
        <AppContainer className="overflow-x-hidden capitalize">
          <Wrapper>
            <Text className="hero-text2 max-w-fit	  items-center  mb-4   font-[600]  md:text-[45px] lg:text-[45px] xl-[45px] ">Modern Technology Use For Our Product</Text>
            <Note className="mx-auto max-w-xs   font-[600] " >We Use Modern Technology For Our Valuable Customers Which Increase Productivity </Note>
            <Marquee>
              <MarqueeGroup>
                {row1.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {row1.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
            <Marquee>
              <MarqueeGroup2>
                {row2.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
              <MarqueeGroup2>
                {row2.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
            </Marquee>
          </Wrapper>
        </AppContainer>
      );
}

export default NewsSlider


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-weight:bold;

`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 15);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;