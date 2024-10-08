import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { logo } from "@/assets/images";
import {
  CartIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  SearchSmIcon,
} from "@/assets/icons";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FiMapPin } from "react-icons/fi";
import { NavbarSm } from "./NavbarSm";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const cart = useSelector((state) => state.cart.products);
  const favourites = useSelector((state) => state.favourit.favourites);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <nav className="bg-white relative">
      <div className="container border-b">
        {/* responsive logo */}
        <div className="lg:hidden block">
          <div className="flex flex-col items-center py-3">
            <div className="flex justify-center mb-2">
              <Link to={"/"} className="w-[284px] h-[100px]">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="">
              <div className="flex gap-2">
                <FiMapPin className="text-base" />

                <p className="text-sm font-normal  leading-5">
                  Шоурум: Москва, ул. Малая Филевская, д. 8, корп. 1
                </p>
              </div>
              <p className="text-sm font-normal text-[#99969A] text-center mb-3">
                c 10:00 до 20:00
              </p>
              <Link
                to={"tel:+74957887750"}
                className="font-bold text-sm flex justify-center"
              >
                +7 (495) 788-77-50
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <div onClick={() => setOpen(true)} className="cursor-pointer">
              <MenuIcon />
            </div>
            <div className="flex items-center justify-end gap-5">
              {/* search */}
              <div
                className="cursor-pointer"
                onClick={() => setShow(true)}
                ref={ref}
              >
                <SearchIcon className={`${show ? "hidden" : "block"}`} />
                {show && (
                  <div
                    className={`${
                      show ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    } transition-transform duration-300 ease-in-out transform origin-right`}
                  >
                    <input
                      type="text"
                      className="border-b border-black focus:outline-none px-4 text-sm"
                      placeholder="Я ищу"
                    />
                    <span className="absolute left-0 top-[5px]">
                      <SearchSmIcon />
                    </span>
                  </div>
                )}
              </div>
              <Link className="relative" to={"/favourites"}>
                <HeartIcon />
                {favourites?.length > 0 && (
                  <div className="absolute -top-3 -right-2 bg-[#FEAAE1] w-[22px] h-[22px] flex items-center justify-center rounded-full">
                    <p className="font-bold text-xs">{favourites?.length}</p>
                  </div>
                )}
              </Link>
              <Link className="relative" to={"/cart"}>
                <CartIcon />
                {cart?.length > 0 && (
                  <div className="absolute -top-2 -right-2 bg-[#FEAAE1] w-[22px] h-[22px] flex items-center justify-center rounded-full">
                    <p className="font-bold text-xs">{cart?.length}</p>
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
        {/* desktop menu */}
        <div className="grid grid-cols-3 text-titleColor  py-5">
          {/* contact */}
          <div className="lg:flex flex-col gap-2 hidden">
            <Link to={"tel:+74957887750"} className="font-bold text-[18px]">
              +7 (495) 788-77-50
            </Link>
            <p className="flex items-center text-[12px] text-textColor">
              или напишите нам whatsapp
              <span className="ml-[4px] text-pureGreen text-[20px] cursor-pointer">
                <FaWhatsapp />
              </span>
            </p>
          </div>
          {/* logo */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[284px] h-[100px] mt-0 lg:-mt-8">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>

          {/* right menu */}
          <div className="hidden lg:flex items-center justify-end gap-5">
            {/* search */}
            <div
              className="cursor-pointer"
              onClick={() => setShow(true)}
              ref={ref}
            >
              <SearchIcon className={`${show ? "hidden" : "block"}`} />
              {show && (
                <div
                  className={`${
                    show ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  } transition-transform duration-300 ease-in-out transform origin-right`}
                >
                  <input
                    type="text"
                    className="border-b border-black focus:outline-none px-4 text-sm"
                    placeholder="Я ищу"
                  />
                  <span className="absolute left-0 top-[5px]">
                    <SearchSmIcon />
                  </span>
                </div>
              )}
            </div>
            <Link className="relative" to={"/favourites"}>
              <HeartIcon />
              {favourites?.length > 0 && (
                <div className="absolute -top-3 -right-2 bg-[#FEAAE1] w-[22px] h-[22px] flex items-center justify-center rounded-full">
                  <p className="font-bold text-xs">{favourites?.length}</p>
                </div>
              )}
            </Link>
            <Link className="relative" to={"/cart"}>
              <CartIcon />
              {cart?.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-[#FEAAE1] w-[22px] h-[22px] flex items-center justify-center rounded-full">
                  <p className="font-bold text-xs">{cart?.length}</p>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
      <NavbarSm open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
