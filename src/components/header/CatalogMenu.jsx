import { ChevronDownIcon } from "@/assets/icons";
import { catalogList } from "@/data";
import { useState } from "react";
import { Link } from "react-router-dom";

const CatalogMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="py-3 lg:block hidden">
      <div className="container relative border-b">
        <div className="flex justify-center gap-[56px]">
          {catalogList.map((parent, index) => (
            <div
              key={index}
              className="group "
              onMouseEnter={() => setActiveMenu(parent.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                className={`flex items-center gap-1 cursor-pointer font-bold text-base pb-1 transition-colors duration-500 ${
                  activeMenu === parent.name
                    ? "text-titleColor"
                    : "text-textColor"
                }`}
              >
                {parent.name}
                <ChevronDownIcon
                  className={`transition-transform duration-500 ease ${
                    activeMenu === parent.name ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Link>

              <div
                className={`absolute left-0 top-4 w-full bg-white border-t z-10 shadow-lg
                  opacity-0 transform scale-95 transition-all duration-500 ease-out
                  ${
                    activeMenu === parent.name
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "pointer-events-none"
                  }
                  h-[500px] overflow-y-auto`}
                style={{
                  scrollbarColor: "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1)",
                  scrollbarWidth: "thin",
                }}
              >
                <div className="grid grid-cols-4 gap-4 p-4">
                  {parent.categories.map((category, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className={`transition-all duration-500 ease-in-out transform ${
                        activeMenu === parent.name
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <h3 className="text-[#221A25CC] text-lg font-normal uppercase">{category.name}</h3>
                      <ul>
                        {category.subList.map((item, subIndex) => (
                          <li key={subIndex} className="py-1">
                            <Link className="hover:underline transition-colors duration-500 text-[#221A25CC] font-normal text-sm">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogMenu;
