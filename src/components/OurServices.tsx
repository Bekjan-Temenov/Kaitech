import React from "react";
import icon from "../shared/assets/svg/headericon.svg";
import Image from "next/image";
import consulting from "../shared/assets/png/it-konsalting.jpg";
import developer from "../shared/assets/png/eaeae646078c53c952d0bdba674448ba.jpeg";
import autsorfing from "../shared/assets/png//ousorc.jpg";
import autsafing from "../shared/assets/png/shutterstock_1097199728-1200x675.png";
import { Container } from "@/shared/helpers/Container";

const OurServices = () => {
  return (
    <Container>
      <div id="services" className="flex flex-col gap-[30px] py-[70px]">
        <h1 className="text-[#74757B] text-[16px]">
          ЧТО МЫ ДЕЛАЕМ ЛУЧШЕ ВСЕГО
        </h1>
        <div className="flex flex-col items-center ">
          <h1 className="text-[48px] text-[#070707]">Наши услуги</h1>
          <p className="text-[#74757B]  mb-[100px]">
            Професиональный сервис от нашей команды
          </p>
          <div className="grid lg:grid-cols-4 w-full   sm:grid-cols-2 gap-3 justify-between">
            <div className="w-full h-[400px] group hover:bg-[#FA8109] hover:text-white rounded-[24px] px-[16px] gap-[29px] py-[16px] text-[#3B3C3F] bg-[#F4F4F4]  flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
              <h1 className="text-[26px] font-bold group-hover:text-white">
                Консалтинг
              </h1>
              <p className="text-[16px] text-center group-hover:text-white">
                Мы оказываем экспертную поддержку в оптимизации
                IT-инфраструктуры и бизнес-процессов.
              </p>
              <Image
                className="w-[120px] h-[120px] bg-center rounded-full bg-cover"
                src={consulting}
                alt="image"
              />
              <a href="https://wa.me/996700113095">
                <button className="flex items-center border border-[#3B3C3F] rounded-[30px] justify-center gap-2 text-[#3B3C3F] px-4 py-2 group-hover:border-white group-hover:text-white">
                  Подробнее
                  <Image
                    className="inset-0"
                    src={icon}
                    alt="Контактная иконка"
                  />
                </button>
              </a>
            </div>

            <div className="w-full h-[400px] group hover:bg-[#FA8109] hover:text-white rounded-[24px] px-[16px] gap-[29px] py-[16px] text-[#3B3C3F] bg-[#F4F4F4]  flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 ">
              <h1 className="text-[26px] font-bold">Разработка ПО</h1>
              <p className="text-[16px] text-center">
                Создаем индивидуальные программные решения для автоматизации
                бизнеса.
              </p>
              <Image
                className="w-[120px] h-[120px] bg-center rounded-full bg-cover"
                src={developer}
                alt="image"
              />
              <a href="https://wa.me/996700113095">
                <button className="flex  items-center border  border-[#3B3C3F]  rounded-[30px] justify-center gap-2 text-[#3B3C3F]  px-4 py-2">
                  <span className="text-[#3B3C3F]">Подробнее</span>
                  <Image src={icon} alt="Контактная иконка" />
                </button>
              </a>
            </div>

            <div className="w-full h-[400px] group hover:bg-[#FA8109] hover:text-white rounded-[24px] px-[16px] gap-[29px] py-[16px] text-[#3B3C3F] bg-[#F4F4F4]  flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 ">
              <h1 className="text-[26px] font-bold">Аутсорсинг</h1>
              <p className="text-[16px] text-center">
                Мы берем на себя поддержку, обслуживание и развитие вашей
                IT-инфраструктуры.
              </p>
              <Image
                className="w-[120px] h-[120px] bg-center rounded-full bg-cover"
                src={autsorfing}
                alt="image"
              />
              <a href="https://wa.me/996700113095">
                <button className="flex  items-center border  border-[#3B3C3F]  rounded-[30px] justify-center gap-2 text-[#3B3C3F]  px-4 py-2">
                  <span className="text-[#3B3C3F]">Подробнее</span>
                  <Image src={icon} alt="Контактная иконка" />
                </button>
              </a>
            </div>

            <div className="w-full h-[400px] group hover:bg-[#FA8109] hover:text-white rounded-[24px] px-[16px] gap-[29px] py-[16px] text-[#3B3C3F] bg-[#F4F4F4]  flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 ">
              <h1 className="text-[26px] font-bold">Аутстаффинг</h1>
              <p className="text-[16px] text-center">
                Мы предоставим квалифицированных IT-специалистов для работы над
                вашими проектами.
              </p>
              <Image
                className="w-[120px] h-[120px] bg-center rounded-full bg-cover"
                src={autsafing}
                alt="image"
              />
              <a href="https://wa.me/996700113095">
                <button className="flex  items-center border  border-[#3B3C3F]  rounded-[30px] justify-center gap-2 text-[#3B3C3F]  px-4 py-2">
                  <span className="text-[#3B3C3F]">Подробнее</span>
                  <Image src={icon} alt="Контактная иконка" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurServices;
