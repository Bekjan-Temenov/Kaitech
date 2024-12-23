import React from "react";
import insta from "../shared/assets/svg/instagram.svg";
import Image from "next/image";
import image from "../shared/assets/png/5391277425545045189.jpg";
import image1 from "../shared/assets/png/5249313681077031811.jpg";
import image2 from "../shared/assets/png/5323597601477615193.jpg";
import image3 from "../shared/assets/png/5267376234759837866.jpg";
import {Container} from "@/shared/helpers/Container";

const images = [image, image1, image2, image3];
const Instagram = () => {
  return (
    <Container>
    <div className="flex flex-col my-[50px]">
      <h1 className="text-[#74757B] text-[16px] mb-[70px]">
        МЫ В СОЦСЕТЯХ
      </h1>
      <h1 className="text-[48px] font-bold mx-auto mb-[84px]">Следите за нами в инстаграме</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center place-items-center">
        {images.map((item, index) => (
          <Image
          key={index}
            className="w-[263px] object-cover bg-center h-[280px] duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-[20px]"
            src={item}
            alt="icon"
          />
        ))}
      </div>

      <a href="https://www.instagram.com/kaitech_it/" target="_blank" rel="noopener noreferrer" className="flex items-center  mt-3 gap-[10px] duration-300 ease-in-out hover:scale-105 cursor-pointer ">
        <Image src={insta} alt="img" />
        <h1>@kaitech</h1>
      </a>
      
    </div>
    </Container>
  );
};

export default Instagram;
