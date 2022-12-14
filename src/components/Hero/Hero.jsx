import React from "react";
import Image from "./Image";
import Text from "./Text";

const Hero = () => {
  return (
    <section className="row mt-3">
      <article className="col-sm-12 col-md-6">
        <Text />
      </article>
      <article className="col-sm-12 col-md-6">
        <Image />
      </article>
    </section>
  );
};

export default Hero;
