import React from "react";
import Image from "next/image";
import whatsapp from "../shared/assets/svg/whatsapp.svg";
import telegram from "../shared/assets/svg/telegram.svg";
import insta from "../shared/assets/svg/instagram.svg";
import kaitech from "../shared/assets/png/kaitech.png";
import { Container } from "../shared/helpers/Container";

const Footer = () => {
  return (
    <div className="bg-[#1C1A19] py-3 md:py-[63px]">
      <Container>
        <div className="text-white gap-[20px] md:gap-[40px] lg:gap-[140px] flex items-center flex-col md:flex-row  justify-between">
          <div className="md:flex hidden  flex-col  gap-[32px]">
            <Image width={200} src={kaitech} alt="" />
            <div className="flex items-center justify-between  ">
              <a href="https://wa.me/996700113095">
                <Image className="cursor-pointer" src={whatsapp} alt="icon" />
              </a>
              <a
                href="https://t.me/NaziToktonalievna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image className="cursor-pointer" src={telegram} alt="icon" />
              </a>
              <a
                href="https://www.instagram.com/kaitech_it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image className="cursor-pointer" src={insta} alt="icon" />
              </a>
            </div>
          </div>

          <table className="w-full text-left  table-fixed ">
            <thead>
              <tr className="text-[12px] md:text-[15px] lg:text-[20px] font-bold">
                <th className="lg:px-4 lg:py-2 py-1 px-2 max-w-[276px]">Информация</th>
                <th className="lg:px-4 lg:py-2 py-1 px-2 max-w-[276px]">
                  Условия использования
                </th>
                <th className="lg:px-4 px-2 hidden md:block py-1 lg:py-2 max-w-[276px]">
                  Контакты
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="lg:text-[16px] md:text-[12px]  text-[10px] text-gray-400 font-normal">
                <td className="lg:px-4 lg:py-2  px-2 py-1 max-w-[276px] cursor-pointer">
                  <a href="#about">О нас</a>
                </td>
                <td className="lg:px-4 lg:py-2 py-1 px-2 max-w-[276px] cursor-pointer">
                  <a href="https://wa.me/996700113095">
                    Политика конфиденциальности
                  </a>
                </td>
                <td className="px-4 hidden  md:block py-2 max-w-[276px] cursor-pointer">
                  Кыргызская Республика, 720000 г. Бишкек, ул. Осмонкулова 113
                </td>
              </tr>
              <tr className="md:text-[12px] lg:text-[16px] text-[10px] text-gray-400 font-normal">
                <td className="px-2 py-1 lg:px-4 lg:py-2 max-w-[276px] cursor-pointer">
                  <a href="#projects">Наши проекты</a>
                </td>
                <td className="px-4 py-2 max-w-[276px] cursor-pointer">
                  Обратная связь
                </td>
              </tr>
              <tr className="md:text-[12px] lg:text-[16px] text-[10px] text-gray-400 font-normal">
                <td className="px-2 py-1 lg:px-4 lg:py-2 max-w-[276px] cursor-pointer">
                  <a href="#services">Услуги</a>
                </td>
                <td className="px-4 py-2 max-w-[276px] cursor-pointer">
                  <a href="https://wa.me/996700113095">
                    Условия использования веб-сайта
                  </a>
                </td>
                <td className="px-4 hidden  md:block py-2 max-w-[276px] cursor-pointer">
                  <a href="https://wa.me/996700113095">
                    Телефон: +996 (700) 11 30 95
                  </a>
                </td>
              </tr>
              <tr className="md:text-[12px] lg:text-[16px] text-[10px] text-gray-400 font-normal">
                <td className="px-2 py-1 lg:px-4 lg:py-2 max-w-[276px] cursor-pointer">
                  Наши УЦ
                </td>
                <td className="px-4 py-2 max-w-[276px] cursor-pointer">
                  <a href="https://wa.me/996700113095">
                    Сообщить об ошибке на сайте
                  </a>
                </td>
              </tr>
              <tr className="md:text-[12px] lg:text-[16px] text-[10px] text-gray-400 font-normal">
                <td className="px-2 py-1 lg:px-4 lg:py-2 max-w-[276px] cursor-pointer">
                  Закупки
                </td>
                <td className="px-4 py-2 max-w-[276px] cursor-pointer">
                  <a href="https://wa.me/996700113095">
                    Об использовании информации
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-start w-full gap-[20px] justify-between md:hidden">
            <table className=" text-left w-full  md:text-left   ">
              <thead>
                <tr className="text-[12px] md:text-[20px] font-bold">
                  <th className="px-4  md:block py-2 max-w-[276px]">
                    Контакты
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="md:text-[16px]  text-[10px] text-gray-400 font-normal">
                  <td className="px-4   md:block py-2 max-w-[276px] cursor-pointer">
                    Кыргызская Республика, 720000 г. Бишкек, ул. Осмонкулова 113
                  </td>
                </tr>
                <tr className="md:text-[16px] text-[10px] text-gray-400 font-normal">
                  <td className="px-4   md:block py-2 max-w-[276px] cursor-pointer">
                    <a href="https://wa.me/996700113095">
                      Телефон: +996 (700) 11 30 95
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex   flex-col  gap-[17px]">
              <Image width={100} src={kaitech} alt="" />
              <div className="flex items-center justify-between  ">
                <a href="https://wa.me/996700113095">
                  <Image className="cursor-pointer w-4 h-4" src={whatsapp} alt="icon" />
                </a>
                <a
                  href="https://t.me/NaziToktonalievna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image className="cursor-pointer w-4 h-4" src={telegram} alt="icon" />
                </a>
                <a
                  href="https://www.instagram.com/kaitech_it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image className="cursor-pointer w-4 h-4" src={insta} alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
