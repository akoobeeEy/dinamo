import { ArrowLeftIcon } from "@/assets/icons"; // Use an upward arrow icon instead
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 370) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
      {showButton && (
        <button
          className="w-12 h-12 fixed right-6 bottom-[120px] z-[999] p-3 rounded-full bg-green-500 hover:bg-green-700"
          onClick={scrollToTop}
        >
          <ArrowLeftIcon className="text-white rotate-90" /> {/* Changed to an upward arrow */}
        </button>
      )}
    </div>
  );
};

export default Layout;
