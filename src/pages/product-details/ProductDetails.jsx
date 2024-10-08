/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowLeftIcon } from "@/assets/icons";
import { addToCart } from "@/redux/slices/cartSlice";
import { toggleFavourit } from "@/redux/slices/favouritSlices";
import { Button, Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourit.favourites);
  const navigate = useNavigate();
  const isAddedToFavourites = favourites.some((item) => item.id === id);

  const getProduct = async () => {
    try {
      const product = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(product.data);
    } catch (err) {
      console.log(err);
    }
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
  useEffect(() => {
    getProduct();
  }, []);

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
    toast.success(`Товар успешно добавлен в корзину`);
  };
  if (!product)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner color="green" className="h-10 w-10" />
      </div>
    );

  const { image, title, price, rating, description } = product;
  const backHome = () => {
    navigate("/");
  };
  return (
    <div className=" py-8">
      <div className="container">
        <Button
          onClick={backHome}
          color="green"
          className="mb-8  flex items-center gap-2 text-white"
        >
          <ArrowLeftIcon />
          Назад{" "}
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center bg-white  p-4 h-[400px] w-[79%]">
            <img src={image} alt={title} className="" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

            <div className="text-2xl font-semibold text-green-600">
              {price} ₽
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 font-semibold">
                {rating.rate} ★
              </span>
              <span className="text-gray-600">({rating.count} reviews)</span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="w-[197px] py-3 bg-green-500 text-white text-lg font-semibold rounded-md transition duration-300 hover:bg-green-600"
              >
                В корзину
              </button>
              <button
                onClick={handleToggleFavorite}
                className="w-12 h-12 bg-trafficWhite flex justify-center items-center"
              >
                {isAddedToFavourites ? (
                  <IoMdHeart className={`w-[22px] h-5 text-red-600`} />
                ) : (
                  <IoIosHeartEmpty className={`w-[22px] h-5`} />
                )}
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
