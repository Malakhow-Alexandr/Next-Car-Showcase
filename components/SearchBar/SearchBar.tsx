"use client";
import { FC, useState } from "react";
import { SearchManufacturer } from "..";

const SearchBar: FC = () => {
  const [manufacturer, setMAnufacturer] = useState("");


  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="search__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setMAnufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
