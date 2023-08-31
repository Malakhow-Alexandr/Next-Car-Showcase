import { FC } from "react";
import { NoResultsProps } from "@/app/types";

const NoResults: FC<NoResultsProps> = ({
  message = "Sorry please try again!",
}) => {
  return (
    <div className="home__error-container">
      <h2 className="text-black text-xl font-bold">No results!</h2>
      <p>{message}</p>
    </div>
  );
};

export default NoResults;
