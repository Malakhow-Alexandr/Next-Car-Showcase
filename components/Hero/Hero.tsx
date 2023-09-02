"use client";
import Image from "next/image";
import { CustomButton } from "..";
import { FC } from "react";

const Hero: FC = () => {
  const handleScroll = () => {};

  return (
    <section className="hero container">
      <div className="flex-1 pt-24 md:pt-36">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 hover:bg-blue-800 transition-all"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" priority fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;
