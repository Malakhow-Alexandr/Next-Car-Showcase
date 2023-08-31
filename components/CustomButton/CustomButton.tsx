"use client";
import Image from "next/image";
import { ButtonProps } from "@/app/types";
import { FC } from "react";

export const CustomButton: FC<ButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} `}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
