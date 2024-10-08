import { ArrowRightIcon } from "@/assets/icons";
import { fireImg } from "@/assets/images";
import { CategoryData } from "@/data";

const Category = () => {
  return (
    <div className="py-6 ">
      <div className="container ">
        <div className="grid grid-cols-6 gap-5">
          {CategoryData.map(({ name, image }) => (
            <div key={name} className="bg-trafficWhite py-[22px]">
              <div className="flex justify-center mb-10 px-[30px]">
                <img
                  src={image}
                  alt={name}
                  className="hover:scale-105 duration-300 h-[140px]"
                />
              </div>
              <div className="px-[19px] h-[54px]">
                <h3 className="text-center font-black text-[18px] text-titleColor">
                  {name}
                </h3>
              </div>
              <div className="mt-[38px] flex justify-center">
                <ArrowRightIcon className="text-pureGreen" />
              </div>
            </div>
          ))}
          <div className="bg-[#F95E65] py-[22px]">
            <div className="flex justify-center mb-10 px-[30px]">
              <img
                src={fireImg}
                alt="fire"
                className="hover:scale-105 duration-300 h-[140px]"
              />
            </div>
            <div className="px-[19px] h-[54px]">
              <h3 className="text-center font-black text-[18px] text-white">
                Распродажа
              </h3>
            </div>
            <div className="mt-[38px] flex justify-center">
              <ArrowRightIcon className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
