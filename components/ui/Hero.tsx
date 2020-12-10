import React, { FC } from "react";
import Image from "next/image";

import theme from "../../global/theme";

interface Props {
  className?: string;
  headline?: string;
  description?: string;
  sm?: boolean;
}

const Hero: FC<Props> = ({ headline, description, sm }) => {
  return (
    <>
      <div className="heroWrapper">
        <div className="imageWrapper">
          <Image
            src="/assets/mountains.jpg"
            alt="test image"
            objectFit="cover"
            objectPosition="center center"
            layout="fill"
            priority
          />
        </div>

        <div className="heroContent">
          <h2>Eu sou o Hero</h2>
          <h1>{headline}</h1>
          <h6>{description}</h6>
        </div>
      </div>

      <style jsx>
        {`
          .heroWrapper {
            position: relative;
            width: 100%;
          }

          .heroContent {
            z-index: 10;
            position: absolute;
            top: 0;

            width: 100%;
            height: 100%;

            padding: 2.4rem;
          }

          .grid {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: 93%;
          }

          .pageTitleWrapper {
            display: flex;
            flex-flow: column;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: flex-start;

            color: ${theme.colors.white};
          }

          .pageTitleWrapper > h1 {
            font-weight: bold;
            font-size: 3.6rem;
            letter-spacing: 0.1em;
            max-width: 40rem;
            margin-top: 11.25vh;
          }

          .imageWrapper {
            width: 100%;
            height: 100%;
          }

          @media screen and (min-width: 400px) {
            .grid {
              display: grid;
              grid-template-columns: 2fr 1fr 1fr 2fr;
              grid-template-rows: 1fr;
              height: 100%;
            }

            .pageTitleWrapper {
              grid-row: 1;
              grid-column: 1 / 4;
            }
          }

          @media screen and (min-width: 640px) {
            .pageTitleWrapper > h1 {
              letter-spacing: 0.2em;
              max-width: 60rem;
              margin-top: 18rem;
              font-size: 4.8rem;
              margin-left: 2rem;
            }
          }

          @media screen and (min-width: 1440px) {
            .pageTitleWrapper > h1 {
              max-width: 80rem;
              margin-top: 18rem;
              font-size: 4.8rem;
              margin-left: 2rem;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          .heroWrapper {
            height: ${sm ? "30vh" : "100vh"};
            min-height: ${sm ? "32rem" : "48rem"};
          }
        `}
      </style>
    </>
  );
};

export default Hero;
