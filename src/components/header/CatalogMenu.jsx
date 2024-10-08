import { ChevronDownIcon } from "@/assets/icons";
import { catalogList } from "@/data";
import { useState } from "react";
import { Link } from "react-router-dom";

const CatalogMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="py-3 relative ">
      <div className="container relative border-b">
        <div className="flex justify-center gap-[56px]">
          {catalogList.map((parent, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setActiveMenu(parent.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                className={`flex items-center gap-1 cursor-pointer font-bold text-base pb-1 ${
                  activeMenu === parent.name ? "text-titleColor" : "text-textColor"
                }`}
              >
                {parent.name}
                <ChevronDownIcon
                  className={`transition-transform duration-500 ease-in-out ${
                    activeMenu === parent.name ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Link>

              {activeMenu === parent.name && (
                <div
                  className="absolute left-0 top-full w-full bg-white border-t z-10 shadow-lg
                             opacity-0 transform scale-95 transition-all duration-500 ease-in-out
                             group-hover:opacity-100 group-hover:scale-100 h-[500px] overflow-y-auto"
                  onMouseEnter={() => setActiveMenu(parent.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                  style={{
                    scrollbarColor: "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1)",
                    scrollbarWidth: "thin",
                  }}
                >
                  <div className="grid grid-cols-4 gap-4 p-4">
                    {parent.categories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h3 className="font-bold mb-2">{category.name}</h3>
                        <ul>
                          {category.subList.map((item, subIndex) => (
                            <li key={subIndex} className="py-1">
                              <Link>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogMenu;
