'use client'
import React from "react";
import styled, { keyframes, css } from "styled-components";

const SlidGallery = () => {
    const row1 = [
        "/03.jpg",
        "/01.jpg",
        "/04.jpg",
        "/10.jpg",
        "/13.jpg",
      ];
    
      const row2 =[
        "/03.jpg",
        "/01.jpg",
        "/04.jpg",
        "/10.jpg",
        "/13.jpg",
      ];
    
      return (
        <AppContainer className="overflow-x-hidden">
          <Wrapper>
            <Text className="text_area2 hero-text2 max-w-fit items-center  mb-4   font-[600]  md:text-[45px] lg:text-[45px] xl-[45px] ">Building Tomorrow's Web Today</Text>
            <Note>For  Our customers  </Note>
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
            </Marquee>
          </Wrapper>
        </AppContainer>
      );
}

export default SlidGallery


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
  margin-bottom: 10px;
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


const ImageGroup = styled.div`
display: grid;
place-items: center;

`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

`;
// const Image = styled.img`
//   object-fit: contain;
//   width: 100%;
//   height: 100%;
//    border: 1px solid black; 
//   border-radius: 0.5rem;
//   aspect-ratio: 16/9;
//   padding: 5px 20px;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//  width: clamp(10rem, 1rem + 40vmin, 30rem);
//  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
// `;