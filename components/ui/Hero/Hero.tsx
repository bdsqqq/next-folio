import React, { FC } from "react";
import Image from "next/image";

import s from "./Hero.module.scss";

interface Props {
  className?: string;
  headline?: string;
  description?: string;
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className={s.heroWrapper}>
      <div className={s.imageWrapper}>
        <Image
          src="/assets/mountains.jpg"
          alt="test image"
          layout="fill"
          priority
          className={s.heroImage}
        />
      </div>

      <div className={s.heroContent}>
        <h2>Eu sou o Hero</h2>
        <h1>{headline}</h1>
        <h6>{description}</h6>
      </div>
    </div>
  );
};

export default Hero;
