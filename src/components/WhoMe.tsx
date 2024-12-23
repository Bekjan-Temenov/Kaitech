import React from "react";
import icon from "../shared/assets/svg/headericon.svg";
import Image from "next/image";
import vector from "../shared/assets/png/Vector 2 (1).png";
import { Container } from "@/shared/helpers/Container";
import Head from "next/head";

const WhoMe = () => {
  return (
    <>
      <Head>
        <title>Кто мы — KaiTech</title>
        <meta
          name="description"
          content="Мы разрабатываем ПО для автоматизации малых и средних предприятий. Узнайте больше о наших продуктах и проектах."
        />
        <meta
          name="keywords"
          content="KaiTech, программное обеспечение, автоматизация, стартапы, малые предприятия"
        />
        <meta name="author" content="KaiTech" />
      </Head>
      <Container>
        <div className="flex flex-col gap-[30px] py-[30px] md:py-[70px] ">
          <h1 className="text-[#74757B] text-[16px]">КТО МЫ</h1>
          <div className="bg-[#FA8109]  relative w-full rounded-[30px] py-[20px] p-[10px] md:p-[50px] flex md:flex-row flex-col items-center gap-[40px] ">
            <div className="lg:w-[40%]  w-full flex flex-col gap-0 md:gap-[30px] ">
              <div className="flex flex-col gap-3">
                <p className="text-[#3B3C3F]">
                  Мы KaiTech разрабатываем ПО для автоматизации малых и средних
                  предприятий.
                </p>
                <p className="text-[#3B3C3F] ">
                  Наши продукты помогают ведущим компаниям, а креативные
                  стартапы — важная часть нашей работы.
                </p>
              </div>
              <div className="text-[#3B3C3F] text:md md:text-2xl  w-auto mt-9  flex flex-col gap-0 md:gap-[50px] ">
                <span className="text-[#070707]  font-bold mx-auto text-[98px] sm:text-[128px]">
                  100+
                </span>
                Реализовнных проектов и <br />
                довольных клиентов
              </div>
              <hr className="h-[1px] my-3 w-full border border-[#3B3C3F]" />
              <a href="https://wa.me/996700113095">
                <button className="flex items-center border w-[229px] border-[#3B3C3F] ml-0 md:ml-[20px] rounded-[30px] justify-center gap-2 text-[#3B3C3F]  px-5 py-2">
                  <span className="text-[#3B3C3F]">Узнать подробнее</span>
                  <Image src={icon} alt="Контактная иконка" />
                </button>
              </a>
            </div>
            <Image
              className=" hidden lg:block   absolute right-0"
              src={vector}
              alt="img"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default WhoMe;
