"use client";
import Image from "next/image";
import whatsapp from "../shared/assets/svg/whatsapp.svg";
import telegram from "../shared/assets/svg/telegram.svg";
import linkedin from "../shared/assets/svg/linkedin.svg";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Container } from "@/shared/helpers/Container";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  });
  const [errors, setErrors] = useState({ name: "", phone: "", question: "" });
  const [loading, setLoading] = useState(false);

  const notify = () => toast.success("Сообщение отправлено");
  const errorfy = () => toast.error("Произошла ошибка");

  const ref = React.useRef(null);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim().split(" ").length < 1
          ? "Введите имя и фамилию"
          : "";
      case "phone":
        return !/^\+?[1-9]\d{1,14}(\s?\d{1,14})*$/.test(value)
          ? "Введите корректный номер телефона"
          : "";
      case "question":
        return value.trim().length < 10
          ? "Вопрос должен содержать минимум 10 символов"
          : "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = {
      name: validateField("name", formData.name),
      phone: validateField("phone", formData.phone),
      question: validateField("question", formData.question),
    };

    setErrors(formErrors);

    if (Object.values(formErrors).some((error) => error)) return;

    setLoading(true);

    const botToken = "7801419610:AAGFPPXiQjxGXPEhzetDHujcqqBUJ2h0HP8"; 
    const chatId = "@kaitech27"; 
    const messageText = `Имя: ${formData.name}\nТелефон: ${formData.phone}\nВопрос: ${formData.question}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chat_id: chatId, text: messageText }),
        }
      );

      if (!response.ok) throw new Error("Ошибка при отправке формы");

      notify();

      setFormData({ name: "", phone: "", question: "" });
    } catch(error) {
      errorfy()
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="flex flex-col my-[25px] md:my-[50px]">
        <h1 className="text-[#74757B] text-[16px] mb-[30px] md:mb-[70px]">
          ОБРАТНЯ СВЯЗЬ
        </h1>

        <div className="bg-[#FA8109] overflow-hidden flex flex-col md:flex-row justify-between border border-[#FA8109] gap-5 pt-7  md:px-[34px] md:py-[34px] rounded-[30px] w-full">
          <div className="flex flex-col w-full px-5 md:w-[400px] gap-[5px] md:gap-[20px]">
            <h1 className="text-[#3B3C3F] text-[18px] lg:text-[36px] font-500">
              Оставьте данные и мы свяжемся с Вами
            </h1>

            <label className="flex items-start gap-4 text-[#3B3C3F] text-[12px] lg:text-[18px]">
              <FaCheck className="lg:w-6 w-3 h-3 lg:h-6" /> Проанализируем бизнес-процессы
            </label>
            <label className="flex items-start gap-4 text-[#3B3C3F] text-[12px] lg:text-[18px]">
              <FaCheck className="lg:w-6 w-3 h-3 lg:h-6" /> Настроим и автоматизируем
            </label>
            <label className="flex items-start gap-4 text-[#3B3C3F] text-[12px] lg:text-[18px]">
              <FaCheck className="lg:w-6 w-3 h-3 lg:h-6" /> Подключим необходимые интеграции
            </label>
            <label className="flex items-start gap-4 text-[#3B3C3F] text-[12px] lg:text-[18px]">
              <FaCheck className="lg:w-6 w-3 h-3 lg:h-6" /> Тех поддержка
            </label>

            <h1 className="text-[#3B3C3F] text-[20px] lg:text-[36px] mt-[20px] font-500">
              Наши чаты
            </h1>
            <label className="text-[#3B3C3F] text-[12px] lg:text-[18px]">
              Вы можете также отправлять сообщения в наши мессенджеры
            </label>
            <div className="flex items-center gap-[16px]">
              <Image className="cursor-pointer" src={whatsapp} alt="icon" />
              <Image className="cursor-pointer" src={telegram} alt="icon" />
              <Image className="cursor-pointer" src={linkedin} alt="icon" />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:w-[520px] w-full bg-white gap-[10px] md:gap-[26px] h-[550px] sm:h-[650px]   lg:rounded-[24px]  px-2 md:px-[40px] flex flex-col py-[10px]"
          >
            <h1 className="text-[28px]">Связаться с нами</h1>
            <p className="text-[12px] md:text-[18px] w-[300px] md:w-[400px] text-[#74757B]">
              Напишите любой интересующий вопрос, и наши менеджеры вам ответят
              как можно скорее.
            </p>

            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              className={`border px-2 py-3 md:px-4 md:py-5 rounded-[10px] ${
                errors.name ? "border-red-500" : "border-[#8F8F8F]"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}

            <input
              type="text"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              className={`border px-2 py-3 md:px-4 md:py-5 rounded-[10px] ${
                errors.phone ? "border-red-500" : "border-[#8F8F8F]"
              }`}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}

            <textarea
              name="question"
              placeholder="Сообщение"
              value={formData.question}
              onChange={handleChange}
              className={`border h-[440px] px-2 py-3 md:px-4 md:py-5 rounded-[10px] ${
                errors.question ? "border-red-500" : "border-[#8F8F8F]"
              }`}
            />
            {errors.question && (
              <span className="text-red-500 text-sm">{errors.question}</span>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FA8109] rounded-[26px] px-[30px] w-[150px] text-[#3B3C3F] py-[16px]"
            >
              {loading ? "Отправка..." : "Отправить"}
            </button>
          </form>
        </div>
        <Toaster/>
      </div>
    </Container>
  );
};

export default Form;
