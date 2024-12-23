import React from "react";
import icon from "../shared/assets/svg/headericon.svg";
import caretRight from "../shared/assets/svg/caretRight.svg";
import Image from "next/image";
import Nurs from "../shared/assets/png/DSC_3787.jpg";
import Nazi from "../shared/assets/png/DSC_3844.jpg";
import Cholponbek from "../shared/assets/png/5242311668908810255.jpg";
import { Container } from "@/shared/helpers/Container";
import Head from 'next/head'

const Developer: React.FC = () => {
  return (
    <>
      <Head>
        <title>Разработка и внедрение решений для вашего бизнеса</title>
        <meta
          name="description"
          content="Мы предоставляем высококлассные решения в области разработки ПО, консалтинга и аутсорсинга."
        />
        <meta
          name="keywords"
          content="разработка, ПО, консалтинг, аутсорсинг, IT"
        />
        <meta name="author" content="Your Company" />
      </Head>
      <Container>
        <div
          id="about"
          className="flex items-center lg:items-start flex-col lg:flex-row  gap-3 py-[80px]"
        >
          <div className="flex flex-col w-full lg:w-[50%] gap-[15px] md:gap-[36px]">
            <h1 className="font-ubuntu text-[28px] md:text-[48px] font-bold text-[#070707]">
              Разработка и внедрение решений для вашего бизнеса
            </h1>
            <p className="text-[#74757B] text-[12px] md:text-[19px] max-w-[435px] font-gilroy leading:[20px] md:leading-[51px]">
              С нами в качестве вашего IT-партнера вы сможете сосредоточиться на
              развитии бизнеса, пока мы обеспечим высококлассные решения для
              ваших клиентов в области разработки ПО, консалтинга и аутсорсинга.
            </p>
            <div className="flex items-center justify-between gap-0  md:gap-[32px]">
              <a href="https://wa.me/996700113095">
                <button className="flex items-center md:ml-[20px] rounded-[30px] justify-center gap-2 text-[#3B3C3F] bg-[#FA8109] px-5 py-2">
                  <span className="text-[#3B3C3F]">Связаться</span>
                  <Image src={icon} alt="Контактная иконка" />
                </button>
              </a>
              <a href="https://t.me/NaziToktonalievna">
                <button className="flex items-center border border-[#74757B] ml-[20px] rounded-[30px] justify-center gap-2 text-[#3B3C3F]  px-5 py-2">
                  <span className="text-[#3B3C3F]">Подробнее</span>
                  <Image src={caretRight} alt="Контактная иконка" />
                </button>
              </a>
            </div>
          </div>

          <div className="w-full   lg:w-[50%] mt-5   flex  md:flex-row justify-between items-center gap-[18px] ">
            <div className="border-2 relative w-[100px] h-[250px] sm:w-[165px] sm:h-[347px] border-[#FA8109] rounded-full">
              <div className=" sm:w-[165px] w-[100px] h-[250px] bottom-[16px] left-[13px] absolute  sm:h-[347px] overflow-hidden rounded-full ">
                <Image
                  src={Nazi}
                  alt="Team Collaboration"
                  className="object-cover bg-center w-full h-full  bg-cover "
                />
              </div>
            </div>
            <div className=" sm:w-[165px] w-[100px] h-[250px] sm:h-[347px] mt-[130px] overflow-hidden rounded-full ">
              <Image
                src={Nurs}
                alt="Team Collaboration"
                className="object-cover  w-full bg-center h-full  bg-cover "
              />
            </div>
            <div className="border-2 mb-[80px] relative sm:w-[165px] w-[100px] h-[250px] sm:h-[347px] border-[#FA8109] rounded-full">
              <div className=" sm:w-[165px] w-[100px] h-[250px] top-[10px] right-[13px] absolute  sm:h-[347px] overflow-hidden rounded-full ">
                <Image
                  src={Cholponbek}
                  alt="Team Collaboration"
                  className="object-cover  w-full bg-center h-full  bg-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Developer;
