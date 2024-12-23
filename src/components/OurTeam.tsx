import React from "react";
import { Container } from "@/shared/helpers/Container";
import Nurs from "../shared/assets/png/5411294704743605209.jpg";
import Nazi from "../shared/assets/png/5411294704743605205.jpg";
import Cholponbek from "../shared/assets/png/5242311668908810254.jpg";
import Image from "next/image";
import Mirlan from "../shared/assets/png/Untitled design.png";

const developers = [
  {
    name: "Мирлан Ипасов ",
    position: " Советник по праграммированию 20+ летним опытом",
    image: Mirlan,
  },
  {
    name: "Чолпонбек Эсенбеков",
    position: "CEO founder Пректный менеджер с 10+ летним опытом",
    image: Cholponbek,
  },
  {
    name: "Нази Токтоналы кызы ",
    position: "Проект менеджер",
    image: Nazi,
  },
  {
    name: "Нурсултан Улан уулу",
    position: "software developer",
    image: Nurs,
  },
];
const OurTeam = () => {
  return (
    <Container>
      <div className="flex flex-col mb-[50px] md:mb-[100px]">
        <h1 className="text-[#74757B] text-[16px] mb-[30px] md:mb-[70px]">
          НАША КОМАНДА
        </h1>
        <h1 className="text-center font-bold text-[28px] md:text-[48px] mb-[20px] mb:mb-[66px]">
          Эта команда воплощает идеи в жизнь
        </h1>
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-[50px] gap-[30px] w-auto h-auto py-6 place-items-center"
        >
          {developers.map((item, index) => (
            <div
              key={index}
              className="flex flex-col content-end duration-300 ease-in-out hover:scale-105 cursor-pointer  overflow-hidden  rounded-[24px]  max-w-[254px] h-[403px] z-50"
            >
              <Image
                className="min-h-[300px] w-full object-cover "
                src={item.image}
                alt=""
              />
              <div className="bg-[#FA8109] h-full flex flex-col items-center pt-[10px] pb-[18px]  ">
                <h1 className="text-[#3B3C3F] text-[20px] ">{item.name}</h1>
                <h2 className="text-[15px] text-center text-white font-sans">
                  {item.position}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurTeam;
