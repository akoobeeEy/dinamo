import { FiMapPin } from "react-icons/fi";
const HeaderTop = () => {
  return (
    <div className="bg-headerTop py-[6px]">
      <div className="container">
        <div className="flex justify-between">
          {/* header top left */}
          <div className="flex items-center gap-[4px]">
            <FiMapPin className="text-base" />

            <p className="text-sm font-normal  leading-5">
              Шоурум: Москва, ул. Малая Филевская, д. 8, корп. 1
            </p>
            <p className="text-sm font-normal text-[#99969A]">c 10:00 до 20:00</p>
          </div>

          {/* header top right */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
