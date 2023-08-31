import { FC } from "react";
import { SearchBar, CustomFilter } from "..";

const CarCatalogue: FC = () => {
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
      </div>
    </section>
  );
};

export default CarCatalogue;
