import Image from "next/image";
import { Hero, CarCatalogue } from "@/components";
import { FC } from "react";
import { fetchCars } from "@/utils";

const Home: FC = async () => {
  const allCars = await fetchCars();

  console.log(allCars)

  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue />
    </main>
  );
};

export default Home;
