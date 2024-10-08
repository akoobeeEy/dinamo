import { UserIcon } from "@/assets/icons";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="bg-trafficWhite py-[6px] text-titleColor hidden lg:block">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* header top left */}
          <div className="flex items-center gap-[4px]">
            <FiMapPin className="text-base" />

            <p className="text-sm font-normal  leading-5">
              Шоурум: Москва, ул. Малая Филевская, д. 8, корп. 1
            </p>
            <p className="text-sm font-normal text-[#99969A]">
              c 10:00 до 20:00
            </p>
          </div>

          {/* header top right */}
          <div className="flex items-center gap-[4px]">
            <UserIcon className="w-[14px] h-[20px]" />
            <Link className="text-sm hover:text-green duration-200">Вход</Link>
            <div className="bg-gray-300 w-[2px] h-[16px]"></div>
            <Link className="text-sm hover:text-green duration-200">Регистрация</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
