import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import { banner1, bannersm1, dragonImg, flower } from "@/assets/images";
import { Button, Carousel, IconButton } from "@material-tailwind/react";
import { FaChevronRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="-mt-[12px]">
        <Carousel
          autoplay={true}
          loop={true}
          className="h-[380px] overflow-hidden"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 lg:block hidden"
            >
              <ArrowLeftIcon className="text-titleColor" />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 lg:block hidden"
            >
              <ArrowRightIcon className="text-titleColor" />
            </IconButton>
          )}
        >
          <div className="bg-gradient-to-r from-[#B7DEBF] to-[#E6F2E8] pt-2">
            <div className="container">
              <div className="grid grid-cols-2 place-items-center">
                <img
                  src={banner1}
                  alt="image 1"
                  className="h-[340px] lg:h-auto lg:object-contain md:block hidden"
                />
                <img
                  src={bannersm1}
                  alt=""
                  className="object-cover w-full h-full md:hidden block"
                />
                <div className="hidden lg:block">
                  <div className="relative mb-5">
                    <h1 className="font-black text-[44px] text-titleColor">
                      Новая коллекция{" "}
                      <span className="bg-[#41e95d70] p-1 rounded-sm">
                        Molo
                      </span>
                    </h1>
                    <div className="absolute -top-[40px] right-2">
                      <img src={dragonImg} alt="dragon" />
                    </div>
                  </div>
                  <div className="relative">
                    <p className="text-[20px] text-titleColor uppercase leading-8">
                      Комбинезоны и куртки с реалистичными <br /> фотопринтами
                    </p>
                    <div className="absolute right-[50%]">
                      <img src={flower} alt="" />
                    </div>
                  </div>
                  <div className="mt-10 flex">
                    <Button className="rounded-[1px] text-white bg-limeGreen">
                      смотреть
                    </Button>
                    <Button className="rounded-[1px] text-white bg-pureGreen">
                      <FaChevronRight className="text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#B7DEBF] to-[#E6F2E8] pt-2">
            <div className="container">
              <div className="grid grid-cols-2 place-items-center">
                <img
                  src={banner1}
                  alt="image 1"
                  className="h-[340px] lg:h-auto lg:object-contain md:block hidden"
                />
                <img
                  src={bannersm1}
                  alt=""
                  className="object-cover w-full h-full md:hidden block"
                />
                <div className="hidden lg:block">
                  <div className="relative mb-5">
                    <h1 className="font-black text-[44px] text-titleColor">
                      Новая коллекция{" "}
                      <span className="bg-[#41e95d70] p-1 rounded-sm">
                        Molo
                      </span>
                    </h1>
                    <div className="absolute -top-[40px] right-2">
                      <img src={dragonImg} alt="dragon" />
                    </div>
                  </div>
                  <div className="relative">
                    <p className="text-[20px] text-titleColor uppercase leading-8">
                      Комбинезоны и куртки с реалистичными <br /> фотопринтами
                    </p>
                    <div className="absolute right-[50%]">
                      <img src={flower} alt="" />
                    </div>
                  </div>
                  <div className="mt-10 flex">
                    <Button className="rounded-[1px] text-white bg-limeGreen">
                      смотреть
                    </Button>
                    <Button className="rounded-[1px] text-white bg-pureGreen">
                      <FaChevronRight className="text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
