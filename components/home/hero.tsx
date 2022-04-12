import { FC } from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/image/hero.jpg" alt="Hero" width={300} height={300} />
      </div>
      <h1>Hi,I am Valeh</h1>
      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
