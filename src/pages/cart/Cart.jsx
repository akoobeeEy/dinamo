import {
  ApplePayIcon,
  CloseIcon,
  GooglePayIcon,
  MasterIcon,
  MirIcon,
  VisaIcon,
} from "@/assets/icons";
import ProductCard from "@/components/card/ProductCard";
import { deleteItem, updateItemQuantity } from "@/redux/slices/cartSlice";
import { toggleFavourit } from "@/redux/slices/favouritSlices";
import { kFormatter } from "@/utils";
import { Breadcrumbs, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourit.favourites);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const products = await axios.get(
        "https://fakestoreapi.com/products?limit=5"
      );

      setProducts(products.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const allPrice = totalPrice + 900;

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleToggleFavorite = (item) => {
    dispatch(
      toggleFavourit({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      })
    );
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity: parseInt(quantity) }));
  };

  const goHome = () => {
    navigate("/");
  };

  const goToCheckout = () => {
    const orderDetails = {
      products: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      totalAmount: allPrice,
    };

    console.log("Order Details:", orderDetails);
    navigate("/checkout", { state: orderDetails });
  };

  return (
    <div className="">
      {cart.length > 0 ? (
        <div className="container">
          <Breadcrumbs className="bg-white">
            <Link to={"/"} className="text-base">
              Home
            </Link>

            <Typography className="opacity-60 cursor-auto hover:text-black text-base">
              Cart
            </Typography>
          </Breadcrumbs>
          <div className="py-12">
            <h1 className="font-black text-[28px] text-titleColor ">Корзина</h1>

            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12 lg:col-span-8 xl:col-span-8">
                <div className="">
                  {cart.map((item) => {
                    const isAddedToFavourites = favourites.some(
                      (favouriteItem) => favouriteItem.id === item.id
                    );

                    return (
                      <div
                        key={item.id}
                        className="flex gap-10 items-start h-[200px] mb-8 p-4"
                      >
                        <div className="w-[200px] h-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-[154px] h-[160px]"
                          />
                        </div>
                        <div className="flex justify-between w-full pt-4">
                          <div>
                            <h3 className="font-bold text-sm text-titleColor leading-[6%] mb-[4px]">
                              {item.category}
                            </h3>
                            <h3 className="text-[#221A25CC] font-normal text-[18px] mb-[4px]">
                              {item.title}
                            </h3>
                            <p className="text-[18px] text-titleColor font-normal">
                              {item.price} ₽
                            </p>
                            <div className="flex gap-4 mt-4 items-center">
                              <button
                                onClick={() => handleToggleFavorite(item)}
                                className="w-12 h-12 bg-trafficWhite flex justify-center items-center"
                              >
                                {isAddedToFavourites ? (
                                  <IoMdHeart
                                    className={`w-[22px] h-5 text-red-600`}
                                  />
                                ) : (
                                  <IoIosHeartEmpty className={`w-[22px] h-5`} />
                                )}
                              </button>
                              <div className="relative">
                                <select
                                  className="bg-trafficWhite w-[63px] h-12 pr-8 pl-3 appearance-none"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      item.id,
                                      e.target.value
                                    )
                                  }
                                >
                                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                    (qty) => (
                                      <option key={qty} value={qty}>
                                        {qty}
                                      </option>
                                    )
                                  )}
                                </select>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  ▼
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={() => handleDelete(item.id)}
                          >
                            <button className="w-[42px] h-[42px] flex items-center justify-center bg-white text-titleColor group hover:bg-trafficWhite duration-200">
                              <CloseIcon className="text-titleColor group-hover:text-pureGreen" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 xl:col-span-4">
                <div className=" bg-trafficWhite p-10 rounded-lg shadow-lg sticky top-4">
                  <h2 className="text-xl font-black mb-4">Сумма заказа</h2>
                  <div className="flex justify-between items-center mb-[4px]">
                    <p className="text-base font-normal text-[#221A25CC]">
                      Товары
                    </p>
                    <p className="text-lg font-normal text-titleColor">
                      {kFormatter(totalPrice)}₽
                    </p>
                  </div>
                  <div className="flex justify-between items-center mb-[4px]">
                    <p className="text-base font-normal text-[#221A25CC]">
                      Доставка
                    </p>
                    <p className="text-lg font-normal text-titleColor">900 ₽</p>
                  </div>
                  <div className="border-2 my-4 border-[#E5E5E6]"></div>
                  <div className="flex justify-between">
                    <p className="text-base  text-titleColor font-bold">
                      Итого к оплате
                    </p>
                    <p className="text-lg font-normal text-titleColor">
                      {kFormatter(allPrice)}₽
                    </p>
                  </div>
                  <div className="flex mb-10">
                    <Button
                      className="mt-4 h-[42px] uppercase bg-pureGreen tracking-wider rounded-none  w-full"
                      onClick={goToCheckout}
                    >
                      перейти к оплате
                    </Button>
                  </div>
                  <div className="">
                    <h5 className="font-normal text-sm text-titleColor mb-2">
                      Мы принимаем:
                    </h5>
                    <div className="flex justify-between items-center mb-1">
                      <VisaIcon />
                      <MirIcon />
                      <MasterIcon />
                      <ApplePayIcon />
                      <GooglePayIcon />
                    </div>
                    <p className="text-textColor text-xs mb-6">
                      +оплата наличными при получении
                    </p>
                    <p className="text-textColor text-[10px] mb-2 leading-4">
                      Цены и стоимость доставки являются неподтвержденными до
                      перехода к разделу оформления заказа.
                    </p>
                    <p className="text-textColor text-[10px] leading-4">
                      14-дневный период возврата товара, комиссия за возврат и
                      возврат стоимости за неотправленный товар. Прочитать о
                      возврате и возмещении стоимости товара.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8">
            <h1 className="font-black text-[20px] text-titleColor mb-6">
              Может что то еще?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {products.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          <div>
            <h1 className="font-black text-[28px] text-titleColor mb-[30px]">
              Корзина пуста
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

export default Cart;
