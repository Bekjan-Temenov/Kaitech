import Image from "next/image";
import React from "react";
import icon from "../shared/assets/svg/headericon.svg";
import kaitech from "../shared/assets/png/kaitech123.png";
import { Container } from "@/shared/helpers/Container";

const Success: React.FC = () => {
  return (
    <Container>
      <div
        style={{ backgroundImage: `url(${kaitech.src})` }}
        className="flex flex-col items-start justify-center my-[20px] md:my-[150px] px-[10px] py-[20px] gap-[18px] bg-cover bg-right w-full h-[150px] 
             lg:h-[400px] lg:my-[150px] lg:px-[50px] lg:py-[60px] 
             md:h-[300px]  md:px-[40px] md:py-[50px] 
             sm:h-[250px] sm:my-[80px] sm:px-[30px] sm:py-[40px]"
      >
        <h1
          className="text-[20px] md:text-[45px] w-[170px] sm:w-[300px] md:w-[500px] lg:w-full lg:text-[86px] max-w-[732px] font-bold "
        >
          Ваш успех — наши IT-решения
        </h1>
        <a href="https://wa.me/996700113095">
          <button
            className="flex items-center border w-auto text-xs border-[#3B3C3F] ml-0 rounded-[30px] justify-center gap-2 text-[#3B3C3F] px-2 py-1 md:mb-[60px] 
                       lg:w-[229px] lg:ml-[20px] lg:py-2 lg:mb-[60px] 
                       md:w-[280px] md:ml-[15px] md:py-[8px] 
                       sm:w-[240px] sm:ml-[10px] sm:py-[6px] sm:mb-[30px]"
          >
            <span
              className="text-[#3B3C3F] 
                       lg:text-[#3B3C3F] 
                       md:text-sm 
                       sm:text-xs"
            >
              Связаться с нами
            </span>
            <Image
              src={icon}
              alt="Контактная иконка"
              className="w-[20px] h-[20px] md:w-[16px] md:h-[16px] sm:w-[12px] sm:h-[12px]"
            />
          </button>
        </a>
      </div>
    </Container>
  );
};

export default Success;
