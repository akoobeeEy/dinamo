import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { logo } from "@/assets/images";
import { CartIcon, HeartIcon, SearchIcon, SearchSmIcon } from "@/assets/icons";
import { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

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
        <div className="grid grid-cols-3 text-titleColor  py-5">
          {/* contact */}
          <div className="flex flex-col gap-2">
            <Link to={"tel:+74957887750"} className="font-bold text-[18px]">
              +7 (495) 788-77-50
            </Link>
            <p className="flex items-center text-[12px] text-textColor">
              или напишите нам whatsapp
              <span className="ml-[4px] text-green text-[20px] cursor-pointer">
                <FaWhatsapp />
              </span>
            </p>
          </div>
          {/* logo */}
          <div className="flex justify-center">
            <div className="w-[284px] h-[100px] -mt-8">
              <img src={logo} alt="" />
            </div>
          </div>
          {/* right menu */}
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
            <Link>
              <HeartIcon />
            </Link>
            <Link>
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
