import { FC } from "react";
import { SearchBar, CustomFilter } from "..";
import { NoResults, CarList } from "@/components";

import { fetchCars } from "@/utils/apiUtility";

const CarCatalogue: FC = async () => {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <section
      className="mt-12 padding-x padding-y container mx-auto"
      id="discover "
    >
      <div className="home__text-container">
        <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
        {!isDataEmpty ? (
          <CarList allCars={allCars} />
        ) : (
          <NoResults message={"Sorry Please try again"} />
        )}
      </div>
    </section>
  );
};

export default CarCatalogue;
