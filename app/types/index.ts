import { MouseEventHandler } from "react";

export type ButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface NoResultsProps {
  message: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarModalProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
export interface SearchParams {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}
