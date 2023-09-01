"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchManufacturer, SearchButton } from "..";

const SearchBar: FC = () => {
  const router = useRouter();
  const [manufacturer, setMAnufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return;
    }
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()} `;
    router.push(newPathname);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="search__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setMAnufacturer}
        />
      </div>
      <div className="search__item relative">
        <Image
          src="/model-icon.png"
          alt="model-icon"
          width={20}
          height={20}
          className="absolute top-[13px] w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
          required
        />
      </div>
      <SearchButton otherClasses="" />
    </form>
  );
};

export default SearchBar;
