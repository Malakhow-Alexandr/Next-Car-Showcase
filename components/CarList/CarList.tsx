import React, { FC } from "react";
import { CarCard, ShowMoreButton } from "..";
import { CarProps, SearchParams } from "@/app/types";

interface CarListProps {
  allCars: CarProps[];
  searchParams: SearchParams;
}

const CarList: FC<CarListProps> = ({ allCars, searchParams }) => {
  return (
    <section>
      <ul className="home__cars-wrapper">
        {allCars?.map((car: CarProps, index: React.Key | null | undefined) => (
          <CarCard car={car} key={index} />
        ))}
      </ul>
      <ShowMoreButton
        pageNumber={searchParams.limit || 10 }
        isNext={(searchParams.limit || 10) > allCars.length}
      />
    </section>
  );
};

export default CarList;
