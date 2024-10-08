import {
  MasterIcon,
  MetroIcon,
  MirIcon,
  PhoneIcon,
  VisaIcon,
} from "@/assets/icons";
import { footer, footerEnd, google, yandex } from "@/assets/images";
import { footerData } from "@/data";
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaWikipediaW,
  FaYoutube,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-trafficWhite pt-10">
      <div className="container pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  ">
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-bold mb-4 text-sm text-titleColor tracking-wider">
                {section.title}
              </h3>
              <ul className="list-none p-0">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="py-1">
                    <Link className=" transition-colors duration-300 text-[#221A2599] hover:text-black font-normal text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col">
            <h3 className="font-bold mb-4 text-sm text-titleColor tracking-wider">
              Контакты
            </h3>
            <div className="">
              <div className="mb-4">
                <Link
                  to={"tel: +7 (495) 788-77-50"}
                  className="flex gap-[4px] mb-[2px]"
                >
                  <PhoneIcon />
                  <Link className="font-bold text-sm text-titleColor">
                    +7 (495) 788-77-50
                  </Link>
                </Link>
                <Link className="flex items-center text-textColor text-xs font-normal">
                  или напишите нам
                  <span className="ml-[4px] text-pureGreen text-[20px] cursor-pointer">
                    <FaWhatsapp />
                  </span>
                </Link>
              </div>
              <div className="flex items-start gap-[4px] mb-4">
                <FiMapPin className="w-4 h-4" />
                <p className="font-normal text-sm text-[#231F20]">
                  Москва, ул.Малая Филевская, д. 8, корп. 1
                </p>
              </div>
              <div className="flex items-center gap-[4px] mb-4">
                <MetroIcon className="w-4 h-4 mb-1" />
                <p className="font-normal text-sm text-[#231F20] leading-5">
                  Филевский парк
                </p>
              </div>
              <p className="text-textColor font-normal text-sm mb-8">
                Ежедневно c 10 до 20
              </p>
              <div className="flex gap-4 flex-wrap mb-8">
                <Link>
                  <FaInstagram className="text-xl" />
                </Link>
                <Link>
                  <FaYoutube className="text-xl" />
                </Link>
                <Link>
                  <FaWikipediaW className="text-xl" />
                </Link>
                <Link>
                  <FaTelegram className="text-xl" />
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src={yandex}
                  alt=""
                  className="w-[123px] h-[61px] cursor-pointer"
                />
                <img
                  src={google}
                  alt=""
                  className="w-[123px] h-[61px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="container">
          <div className="flex justify-between flex-wrap">
            <div className="flex gap-[10px] flex-wrap lg:gap-[21px] mb-4 xl:mb-0">
              <p className="w-[420px] font-normal text-sm text-titleColor">
                ©2021 интернет-магазин детской функциональной одежды Диномама.ру
              </p>
              <p className="text-sm text-pureGreen">
                Защита персональных данных
              </p>
              <p className="text-sm text-pureGreen">Публичная оферта</p>
            </div>
            <div className="flex gap-[30px]">
              <div className="">
                <h5 className="font-normal text-sm text-titleColor mb-2">
                  Мы принимаем:
                </h5>
                <div className="flex gap-4 items-center mb-1">
                  <VisaIcon />
                  <MirIcon />
                  <MasterIcon />
                </div>
              </div>
              <div className="">
                <h5 className="font-normal text-sm text-titleColor mb-2">
                  Мы доставляем:
                </h5>
                <div className="flex gap-4 items-center mb-1">
                  <img src={footer} alt="" />
                  <img src={footerEnd} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
