import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, <strong>I'm Azeez</strong></h1>
        <p className={styles.description}>
          I'm a versatile full-stack developer with 4 years of experience using HTML, CSS, Javascript React, Next js, Typescript,
          NodeJS, and more tech stacks to build seamless application.
            Reach out if you'd like to learn more!
        </p>
        <a href="mailto:supremozee14@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Azeez.jpg")}
        alt="Hero image of me"
        width={250}
        height={350}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
