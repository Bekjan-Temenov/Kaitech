"use client";
import React from "react";
import Logo from "../shared/assets/png/Logo.png";
import icon from "../shared/assets/svg/headericon.svg";
import Image from "next/image";
import { Container } from "@/shared/helpers/Container";
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <header className="flex items-center justify-between  py-2 md:py-4">
        <Image
          className="w-[150px] md:w-[200px] bg-cover "
          src={Logo}
          alt="Kaitech logo, technology solutions"
        />
        <nav className="md:flex items-center justify-between gap-[10px] lg:gap-[40px] hidden">
          <a
            className="text-[#070707] font-sans cursor-pointer text-[14px] lg:text-lg hover:underline hover:text-[#FA8109]"
            title="О нас — Узнайте о компании Kaitech"
          >
            О нас
          </a>
          <a
            href="#services"
            className="text-[#070707] font-sans cursor-pointer  text-[14px] lg:text-lg hover:underline hover:text-[#FA8109]"
            title="Наши услуги — Обзор услуг компании"
          >
            Наши услуги
          </a>
          <a
            href="#projects"
            className="text-[#070707] font-sans cursor-pointer  text-[14px] lg:text-lg hover:underline hover:text-[#FA8109]"
            title="Проекты и кейсы — Наши успешные проекты"
          >
            Проекты и кейсы
          </a>
          <a
            href="#careers"
            className="text-[#070707] font-sans cursor-pointer  text-[14px] lg:text-lg hover:underline hover:text-[#FA8109]"
            title="Карьерные возможности в компании Kaitech"
          >
            Карьера
          </a>
          <a href="https://wa.me/996700113095">
            <button className="flex items-center border border-black  rounded-[30px] justify-center gap-2 text-[#070707] bg-[#FA8109] px-3 py-1 lg:px-5 lg:py-2">
              <span className="text-[#070707]  text-[14px] lg:text-lg ">
                Связаться с нами
              </span>
              <Image src={icon} alt="Контактная иконка" />
            </button>
          </a>
        </nav>

        <MdMenuOpen
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-9 h-9 cursor-pointer"
        />
        {isOpen && (
          <>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="fixed  inset-0 bg-black/30 z-40"
            ></div>

            <div className="flex z-50  text-white absolute md:hidden top-0 right-0 max-w-[300px] h-auto pb-[60px] rounded-b-xl  items-start px-3 flex-col bg-[#1C1A19] ">
              <div className=""></div>
              <IoClose
                onClick={() => setIsOpen(!isOpen)}
                className="w-8 h-8 cursor-pointer"
              />

              <nav className="flex mt-9 flex-col w-full items-start  justify-between gap-[20px] ">
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className=" font-sans  cursor-pointer text-lg hover:underline hover:text-[#FA8109]"
                  title="О нас — Узнайте о компании Kaitech"
                >
                  О нас
                </a>
                <a
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className=" font-sans   cursor-pointer  text-lg hover:underline hover:text-[#FA8109]"
                  title="Наши услуги — Обзор услуг компании"
                >
                  Наши услуги
                </a>
                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className=" font-sans cursor-pointer  text-lg hover:underline hover:text-[#FA8109]"
                  title="Проекты и кейсы — Наши успешные проекты"
                >
                  Проекты и кейсы
                </a>
                <a
                  href="#careers"
                  onClick={() => setIsOpen(false)}
                  className=" font-sans cursor-pointer  text-lg hover:underline hover:text-[#FA8109]"
                  title="Карьерные возможности в компании Kaitech"
                >
                  Карьера
                </a>
                <a href="https://wa.me/996700113095">
                  <button className="flex items-center border border-black  rounded-[30px] justify-center gap-2  bg-[#FA8109] px-3 py-1 lg:px-5 lg:py-2">
                    <span className="  text-lg ">Связаться с нами</span>
                    <Image src={icon} alt="Контактная иконка" />
                  </button>
                </a>
              </nav>
            </div>
          </>
        )}
      </header>
    </Container>
  );
};

export default Header;
