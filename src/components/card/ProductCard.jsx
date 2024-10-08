import { CartIcon, EyesIcon } from "@/assets/icons";
import { addToCart } from "@/redux/slices/cartSlice";
import { toggleFavourit } from "@/redux/slices/favouritSlices";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, price, id }) => {
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favourites = useSelector((state) => state.favourit.favourites);

  const isAddedToFavourites = favourites.some((item) => item.id === id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        image,
        price,
        quantity: 1,
      })
    );
    toast.success(`${title} has been added to your cart!`, {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleToggleFavorite = () => {
    dispatch(
      toggleFavourit({
        id,
        title,
        image,
        price,
        quantity: 1,
      })
    );
  };
  const goProductPage = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg text-center relative group">
      <div className="flex justify-end">
        <span
          onClick={handleToggleFavorite}
          className="cursor-pointer transition-colors duration-300 ease-in-out"
        >
          {isAddedToFavourites ? (
            <IoMdHeart className={`text-[22px] text-red-600`} />
          ) : (
            <IoIosHeartEmpty className={`text-[22px]`} />
          )}
        </span>
      </div>

      <div className="relative flex justify-center">
        <img src={image} alt={title} className="object-cover h-64 rounded-lg" />
      </div>

      <div className="my-4">
        <h2 className="text-sm font-semibold text-gray-700 h-14">{title}</h2>
        <p className="text-lg font-bold text-gray-800 mt-2">{price} ₽</p>
      </div>

      <div className="mt-4 flex justify-center items-end gap-2">
        {sizes.map((size, index) => (
          <button
            key={index}
            className="px-2 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-md"
          >
            {size}
          </button>
        ))}
      </div>

      <div
        className="bg-cardHover absolute left-0 w-full h-[80%] bottom-0 py-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out 
        flex flex-col justify-center items-center"
      >
        <div className="flex gap-4 mb-4">
          <button
            onClick={handleAddToCart}
            className="bg-pureGreen text-white w-[64px] h-14 flex justify-center items-center transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          >
            <CartIcon className="w-[25px] h-[28px]" />
          </button>
          <button
            onClick={() => goProductPage(id)}
            className="bg-pureGreen text-white w-[64px] h-14 flex justify-center items-center transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          >
            <EyesIcon className="w-[25px] h-[28px]" />
          </button>
        </div>
        <h5 className="text-white tracking-widest uppercase text-base opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-300 ease-in-out">
          Подробнее
        </h5>
      </div>
    </div>
  );
};

export default ProductCard;
