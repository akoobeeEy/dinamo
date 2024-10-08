import { Drawer, IconButton } from "@material-tailwind/react";
import { CloseIcon, MinusIcon, PlusIcon } from "@/assets/icons";
import { catalogList } from "@/data";
import { Fragment, useState, useEffect } from "react";

export const NavbarSm = ({ open, setOpen }) => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  // Menyu ochilganda bodyning scrollni cheklash uchun useEffect qo'shildi
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function: menyu yopilganda scrollni qayta tiklash
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <Fragment>
      <Drawer
        size={400}
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        className="p-4 h-screen"
      >
        <div className="mb-6">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpen(false)}
          >
            <CloseIcon className="text-black" />
          </IconButton>
        </div>

        <div>
          {catalogList.map((parent, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-center">
                <p>{parent.name}</p>
                <span onClick={() => handleExpand(index)} className="cursor-pointer">
                  {expanded === index ? <MinusIcon /> : <PlusIcon />}
                </span>
              </div>

              {expanded === index && (
                <div
                  className="pl-4 mt-2 h-[500px] overflow-y-auto"
                  style={{
                    scrollbarColor: "#0CA145",
                    scrollbarWidth: "thin",
                  }}
                >
                  {parent.categories.map((category, catIndex) => (
                    <div key={catIndex} className="mb-2">
                      {category.subList.map((subItem, subIndex) => (
                        <p key={subIndex} className="text-sm text-gray-600">
                          {subItem}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Drawer>
    </Fragment>
  );
};
