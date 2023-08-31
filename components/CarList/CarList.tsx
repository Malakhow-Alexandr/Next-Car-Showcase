import React, { FC } from "react";
import { CarCard } from "..";
import { CarProps } from "@/app/types";

interface CarListProps {
  allCars: CarProps[];
}

const CarList: FC<CarListProps> = ({ allCars }) => {
  return (
    <section>
      <ul className="home__cars-wrapper">
        {allCars?.map((car: CarProps, index: React.Key | null | undefined) => (
          <CarCard car={car} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default CarList;
