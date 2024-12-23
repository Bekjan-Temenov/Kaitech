import React from "react";
import caretRight from "../shared/assets/svg//headericon.svg";
import Image from "next/image";
import team from "../shared/assets/png/5195283215831656774.jpg";
import team1 from "../shared/assets/png/5431400155325782835.jpg";
import team2 from "../shared/assets/png/5391277425545045189.jpg";
import { Container } from "../shared/helpers/Container";

const Career = () => {
  return (
    <Container>
      <div id="careers" className="flex flex-col gap-2 mb-[100px]">
        <h1 className="text-[#74757B] text-[16px] mb-[70px]">Карьера</h1>
        <div className="flex flex-col lg:flex-row items-center gap-[66px] justify-between">
          <div className="flex flex-col  gap-[30px] w-full lg:w-[50%]">
            <h1 className="text-[48px]">
              Карьера в <span className="text-[#FA8109]">K</span>aiTech
            </h1>
            <p className="text-[#74757B] text-[20px]">
              Станьте ценным участником нашего опытного сообщества, где развитие
              и обучение приветствуются. Начните путь самосовершенствования и
              представьте себе светлое будущее вместе с нами, раскрывая свой
              полный потенциал. Мы предлагаем стажировки и помощь в
              трудоустройстве, помогли десяткам людей успешно начать свою
              карьеру с KaiTech.
            </p>
            <a href="https://wa.me/996700113095">
              <button className="flex items-center  bg-[#FA8109] w-[200px] rounded-[30px] justify-center gap-2 text-[#3B3C3F]  px-5 py-2">
                <span className="text-[#3B3C3F] ">Подать заявку</span>
                <Image src={caretRight} alt="Контактная иконка" />
              </button>
            </a>
          </div>

          <div className=" flex items-center  mt-5 w-full lg:w-[50%] justify-center ">
            <div className="border-[#FFC600] relative border rounded-[24px] w-[143px] h-[225px] sm:w-[263px] sm:h-[425px]">
            <Image
              className="absolute object-cover w-[163px] h-[225px] sm:w-[263px] sm:h-[425px] rounded-[24px] left-[-100px] sm:left-[-140px] lg:left-[-180px] bottom-9"
              src={team}
              alt=""
            />
            <Image
              className="absolute object-cover w-[156px] sm:w-[205px] h-[204px] sm:h-[304px]  rounded-[24px] top-[-20px] sm:top-0 right-[-80px] sm:right-[-110px] lg:top--8 lg:right-[-80px] "
              src={team1}
              alt=""
            />
            <Image
              className="absolute object-cover w-[146px] sm:w-[206px] h-[154px] sm:h-[304px]  rounded-[24px] bottom-[-30px] sm:bottom-[-99px]"
              src={team2}
              alt=""
            />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Career;
