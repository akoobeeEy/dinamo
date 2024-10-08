import ProductCard from "@/components/card/ProductCard";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourit.favourites);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="py-12">
      {favourites.length > 0 ? (
        <div className="container">
          <h1 className="font-black text-[28px] text-titleColor mb-[30px]">
            Избранное
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {favourites.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          <div>
            <h1 className="font-black text-[28px] text-titleColor mb-[30px]">
              Избранное пуста
            </h1>
            <Button onClick={goHome} color="green">
              Вернуться к покупкам
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourites;
