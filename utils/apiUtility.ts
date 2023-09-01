import { CarProps, FilterProps } from "@/app/types";

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, fuel, limit, model, year } = filters;
  const headers = {
    "X-RapidAPI-Key": "d1f0a24bd6msh1241e9d93a8f1dbp1565c3jsna2aec7bfc1e9",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`,
      { headers: headers }
    );
    return await response.json();
  } catch (error: any) {
    console.error(error);
  }
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
