import Image from "next/image";
import React from "react";
import amanat from "../shared/assets/png/amanat.png";
import elet from "../shared/assets/png/elet.png";
import crm from "../shared/assets/png/crm.png";
import agro from "../shared/assets/png/Agro.jpeg";
import { Container } from "@/shared/helpers/Container";

const OurProjects = () => {
  return (
    <Container>
      <div id="projects" className="flex flex-col my-[80px]">
        <h1 className="text-[#74757B] text-[16px] mb-[70px]">
          НАШИ ПРОЕКТЫ И КЕЙСЫ
        </h1>
        <div className="flex items-center flex-col ">
          <h1 className="text-[20px] md:text-[48px] font-bold">
            Ознакомьтесь с нашими проектами
          </h1>
          <p className="text-[#74757B] text-[12px] md:text-[20px] w-[300px] md:w-[553px] text-center">
            Наша способность сочетать опыт и системное мышление это то, что
            питает нас как команду
          </p>

          <div className="grid sm:grid-cols-2 grid-cols-1 my-[50px] gap-[30px]  ">
            <div className="bg-[#FA8109] p-[20px] rounded-[24px]">
              <Image
                className="w-full h-full rounded-[24px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                src={amanat}
                alt="img"
              />
            </div>
            <div className="bg-[#E9E9E9] p-[20px] rounded-[24px]">
              <Image
                className="w-full h-full rounded-[24px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                src={elet}
                alt="img"
              />
            </div>
            <div className="bg-[#E9E9E9] p-[20px]  rounded-[24px]">
              <Image
                className="w-full h-full rounded-[24px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                src={crm}
                alt="img"
              />
            </div>
            <div className="bg-[#E9E9E9]  lg:h-[378px]  p-[20px] rounded-[24px]">
              <Image
                className="w-full h-full rounded-[24px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                src={agro}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurProjects;
