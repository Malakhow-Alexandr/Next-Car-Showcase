const options = {
  method: "GET",
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  params: { model: "corolla" },
};

export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "d1f0a24bd6msh1241e9d93a8f1dbp1565c3jsna2aec7bfc1e9",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
      { headers: headers }
    );
    return await response.json();
  } catch (error: any) {
    console.error(error);
  }
};
