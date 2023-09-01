import { FC } from "react";
import Image from "next/image";
import { Hero, CarCatalogue } from "@/components";
import { SearchParams } from "./types";

interface HomeProps {
  searchParams: SearchParams;
}

const Home: FC<HomeProps> = async ({ searchParams }) => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue searchParams={searchParams} />
    </main>
  );
};

export default Home;
