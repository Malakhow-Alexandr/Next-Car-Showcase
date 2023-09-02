"use client";
import React, { FC } from "react";
import { CustomButton } from "..";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/app/types";
import { updateSearchParams } from "@/utils/updateSearchParams";

const ShowMoreButton: FC<ShowMoreProps> = ({ pageNumber, isNext }) => {
  const router = useRouter();

  const handleNavigation = () => {
    // const newPageNumber = pageNumber / 10
    const newLimit = Number(pageNumber) + 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMoreButton;
