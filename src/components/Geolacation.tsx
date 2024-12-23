import React from "react";
import map from "../shared/assets/png/image.png";
import Image from "next/image";
import { Container } from "@/shared/helpers/Container";

const Geolacation = () => {
  return (
    <Container>
      <div className="flex flex-col my-[30px] sm:my-[50px]">
        <h1 className="text-[#74757B] text-[14px] sm:text-[16px] mb-[40px] sm:mb-[70px]">
          ГДЕ МЫ НАХОДИМСЯ
        </h1>
        <h1 className="text-[24px] sm:text-[40px] text-center mb-[40px] sm:mb-[70px]">
          Наша местоположение
        </h1>
        <div className="border relative border-[#FFC600] w-full h-[300px] sm:h-[500px] rounded-[20px] sm:rounded-[30px]">
          <a href="https://go.2gis.com/hEIEU">
            <Image
              className="w-full absolute object-cover md:left-[10px] sm:left-[20px] duration-300 ease-in-out hover:scale-105 cursor-pointer top-[-10px] sm:top-[-20px] h-full rounded-[20px] sm:rounded-[30px]"
              src={map}
              alt="map"
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Geolacation;
