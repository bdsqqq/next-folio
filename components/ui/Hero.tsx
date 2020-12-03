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

          .pageTitleWrpper {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: flex-start;
          }

          .pageTitle {
            font-size: 6.4rem;
            letter-spacing: 0.2em;
            margin-bottom: 2.4rem;
            color: ${theme.colors.white};
          }

          .imageWrapper {
            width: 100%;
            height: 100%;
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
