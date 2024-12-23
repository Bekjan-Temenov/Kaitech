import React from "react";
import bakai from "../shared/assets/png/vertikalnyj-dvuhcv.png";
import mbank from "../shared/assets/png/mbank500-removebg-preview.png";
import eram from "../shared/assets/png/EPAM_LOGO_Black.png";
import beeline from "../shared/assets/png/Beeline-Logo-2005.png";
import levante from "../shared/assets/png/images__1_-removebg-preview (1).png";
import companion from "../shared/assets/png/Untitled_design__5_-removebg-preview.png";
import techonolgy from "../shared/assets/png/Untitled_design__3_-removebg-preview.png";
import bai from "../shared/assets/png/1354239.1.1482912852-removebg-preview.png";
import demir from "../shared/assets/png/Untitled_design__6_-removebg-preview.png";
import gknb from "../shared/assets/png/images-removebg-preview (1).png";
import Image from "next/image";
import { Container } from "@/shared/helpers/Container";

const logos = [
  bakai,
  mbank,
  eram,
  beeline,
  levante,
  companion,
  techonolgy,
  bai,
  demir,
  gknb,
];
const Trusting = () => {
  return (
    <Container>
      <div className="flex flex-col my-[50px]">
        <h1 className="text-[#74757B] text-[16px] mb-[20px] md:mb-[70px]">НАМ ДОВЕРЯЮТ</h1>
        <h1 className="text-center font-bold text-[20px] md:text-[48px] mb-[28px] md:mb-[66px] w-[80%] mx-auto">
          Наши успешные стажёры работают в топовых IT-компаниях страны
        </h1>
        <div className="bg-[#FA8109]  grid xl:grid-cols-5 lg:grid-cols-4 rounded-[30px] grid-cols-3 items-center justify-between md:p-9 p-3 gap-3 md:gap-8 lg:gap-[80px] flex-wrap w-full">
          {logos.map((item, index) => (
            <Image key={index} className="h-full  w-full object-contain bg-white shadow-2xl shadow-rgba(0, 0, 0, 0.16) rounded-xl  p-2" src={item} alt="img" />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Trusting;
