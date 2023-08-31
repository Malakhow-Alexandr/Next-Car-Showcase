import { FC } from "react";
import Image from "next/image";
import { Hero, CarCatalogue } from "@/components";

const Home: FC = async () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue />
    </main>
  );
};

export default Home;
