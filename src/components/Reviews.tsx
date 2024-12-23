"use client";
import Image from "next/image";
import React, { useState } from "react";
import review from "../shared/assets/svg/review.svg";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { Container } from "@/shared/helpers/Container";
import profile from "../shared/assets/png/profile.png";
import Aichurok from "../shared/assets/png/Aichurok.png";
import feruza from "../shared/assets/png/feruza.png";
import samara from "../shared/assets/png/samara.png";

const testimonials = [
  {
    text: `"Обратились за IT-консалтингом в KaiTech и остались очень довольны.
    Команда провела детальный анализ наших процессов, предложила
    эффективные решения и помогла внедрить новые технологии. 
    Это значительно повысило нашу продуктивность и снизило затраты.
    Рекомендуем их как надежных и профессиональных партнеров!"`,
    author: "Галина Сергеевна",
    position: "CEO TheTraveler",
    img: profile,
  },
  {
    text: "Хочу поблагодарить компанию KaiTech за невероятный опыт стажировки на позиции проджект-менеджера 😊Здесь я получила не только глубокие знания и практические навыки, но и полное погружение в профессиональную среду,👏Команда всегда была открыта к моим вопросам и идеям во главе с Чолпонбек байке, и благодаря этому я смогла развить свои управленческие и коммуникативные навыки. Спасибо за поддержку, ценные советы и возможность быть частью таких интересных проектов",
    author: "Айчурок",
    position: "Project Meneger",
    img: Aichurok,
  },
  {
    text: "Отличная возможность для самореализации. Я рада, что присоединился к вашей команде",
    author: "Феруза",
    position: "HR TheTraveler",
    img: feruza,
  },
  {
    text: "Очень благодарен за возможность присоединиться к вашей команде. Я уверен, что смогу внести свой вклад в проекты",
    author: "Бекзат",
    position: "Backend Developer",
    img: samara,
  },
  {
    text: "Благодарю за возможность расти профессионально и творчески. Буду рада новым проектам",
    author: "Самара",
    position: "Project Meneger",
    img: "https://www.piclumen.com/wp-content/uploads/2024/10/piclumen-upscale-after.webp",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Container>
      <div className="flex flex-col my-[100px]">
        <h1 className="text-[#74757B] text-[16px] mb-[70px]">
          ЧТО О НАС ГОВОРЯТ
        </h1>
        <h1 className="text-center text-[30px] md:text-[48px] font-bold">
          Отзывы от наших клиентов{" "}
        </h1>
        <div className="flex mx-auto w-full relative py-1 md:py-5 flex-col">
          <Image
            className="w-[45px] left-[10px]  md:left-[200px] top-0 absolute h-[30px]"
            src={review}
            alt=""
          />
          <div className="  overflow-hidden relative w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center justify-center text-center "
                >
                  <p className="text-[#8e8e8e] text-center mx-auto  my-3 flex flex-col md:w-[700px] px-3 md:px-8 font-gilroy text-[12px] md:text-[20px] ">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex items-center gap-[10px] sm:gap-[36px] justify-between">
            <FaAngleLeft
              onClick={prevSlide}
              className="w-[24px] h-[24px]  cursor-pointer"
            />
            <div className="flex items-center gap-[20px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 cursor-pointer ${
                    index === currentIndex
                      ? "bg-[#FA8109] sm:px-4 sm:py-2  p-2 rounded-full"
                      : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    className="rounded-full object-cover  w-[30px] h-[30px] sm:w-[59px] sm:h-[59px] "
                    alt="avatar"
                    width={59}
                    height={59}
                    quality={100}
                    src={testimonial.img}
                  />
                  {index === currentIndex && (
                    <div className="flex hidden sm:block flex-col text-[#3B3C3F] gap-1">
                      <span className="text-[18px]  ">
                        {testimonial.author}
                      </span>
                      <p className="text-[12px]">{testimonial.position}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <FaChevronRight
              onClick={nextSlide}
              className="w-[24px] h-[24px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
