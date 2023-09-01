import { FC } from "react";
import { CarProps } from "@/app/types";
import Image from "next/image";

interface CarModalContentProps {
  car: CarProps;
}

const CarModalContent: FC<CarModalContentProps> = ({ car }) => {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <ul className="flex gap-3">
        <li className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
          <Image
            src="/hero.png"
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </li>
        <li className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
          <Image
            src="/hero.png"
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </li>
        <li className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
          <Image
            src="/hero.png"
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </li>
      </ul>
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="font-semibold text-xl capitalize ">
          {car.make} {car.model}
        </h3>
      </div>
      <ul className="mt-3 flex flex-wrap gap-4">
        {Object.entries(car).map(([key, value]) => (
          <li
            className="flex justify-between gap-5 w-full text-right"
            key={key}
          >
            <h4 className="text-gray capitalize">{key.split("_").join(" ")}</h4>
            <p className="text-black-100 font-semibold">{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarModalContent;
