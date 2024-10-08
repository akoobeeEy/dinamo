import { orderData } from "@/data";
import { kFormatter } from "@/utils";
import { Button, Option, Radio, Select } from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "@/redux/slices/cartSlice";
import { toast } from "react-toastify";

const Order = () => {
  const location = useLocation();
  const { products, totalAmount } = location.state || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const handleDeliveryChange = (price) => {
    setDeliveryPrice(price);
  };

  const finalTotalAmount = totalAmount + deliveryPrice;
  const finished = () => {
    dispatch(resetCart());
    reset();
    toast.success(" Заказ успешно оформлен");
    navigate("/");
  };
  return (
    <div className="container py-12">
      <h1 className="font-black text-[28px] text-titleColor mb-6">
        Оформление заказа
      </h1>

      {products && products.length > 0 ? (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-10 xl:col-span-8">
              {/* Contact information */}
              <div className="mb-10">
                <h4 className="uppercase font-normal text-base text-titleColor mb-4 tracking-wider">
                  контактная информация
                </h4>
                <div className="border-b-[3px] mb-4"></div>
                <div className="flex flex-col gap-2">
                  {Object.entries(orderData).map(([key, item]) =>
                    item.type !== "select" ? (
                      <div key={key} className="flex flex-col mb-3">
                        <input
                          type={item.type}
                          className={`w-[431px] focus:outline-none bg-trafficWhite border-b h-10 px-2 text-lg ${
                            errors[key] ? "border-red-500" : "border-titleColor"
                          } text-[#99969A]`}
                          placeholder={item.placeholder}
                          {...register(key, {
                            required: `${item.name} не может быть пустым`,
                          })}
                        />
                        {errors[key] && (
                          <span className="text-red-500 text-sm">
                            {errors[key].message}
                          </span>
                        )}
                      </div>
                    ) : null
                  )}
                  <textarea
                    className="w-full focus:outline-none text-[#99969A] bg-trafficWhite border-titleColor border-b h-[78px] p-2 text-lg"
                    placeholder="Комментарий к заказу"
                    {...register("comment", {
                      required: false,
                    })}
                  />
                </div>
              </div>

              {/* Delivery section */}
              <div className="mb-10">
                <h4 className="uppercase font-normal text-base text-titleColor mb-4 tracking-wider">
                  доставка
                </h4>
                <div className="border-b-[3px] mb-4"></div>
                <div className="">
                  {Object.entries(orderData).map(([key, item]) =>
                    item.type === "select" ? (
                      <div key={key} className={`flex flex-col mb-4 `}>
                        <Controller
                          name={key}
                          control={control}
                          defaultValue={item.options[0]}
                          render={({ field }) => (
                            <Select
                              id={item.name}
                              label={item.name}
                              value={field.value}
                              className={`text-sm `}
                              labelProps={{
                                className: ``,
                              }}
                              menuProps={{
                                className: ``,
                              }}
                              color="blue-gray"
                              onChange={(value) => field.onChange(value)}
                              error={errors[key] ? true : false}
                            >
                              {item.options.map((el, index) => (
                                <Option key={index} value={el}>
                                  {el}
                                </Option>
                              ))}
                            </Select>
                          )}
                        />
                        {errors[key] && (
                          <span className="text-red-500 text-sm">
                            {errors[key].message}
                          </span>
                        )}
                      </div>
                    ) : null
                  )}
                  <div className="flex flex-col gap-0">
                    <Radio
                      name="deliveryType"
                      label="Курьер в пределах МКАД — 270 ₽"
                      onChange={() => handleDeliveryChange(270)}
                    />
                    <Radio
                      name="deliveryType"
                      label="Курьер за пределами МКАД — 340 ₽"
                      onChange={() => handleDeliveryChange(340)}
                    />
                    <Radio
                      name="deliveryType"
                      label="Самовывоз (м. Филевский парк) — 0 ₽"
                      onChange={() => handleDeliveryChange(0)}
                    />
                  </div>
                </div>
              </div>

              {/* Order summary */}
              <div className="mb-10">
                <h4 className="uppercase font-normal text-base text-titleColor mb-4 tracking-wider">
                  Состав заказа
                </h4>
                <div className="border-b-[3px] mb-4"></div>
                <div className="py-2 px-4">
                  <h5 className="text-base font-normal text-textColor">
                    {products.length} товарa
                  </h5>
                  {products.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-10 items-start  mt-8 "
                    >
                      <div className="w-[90px] h-[90px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full"
                        />
                      </div>
                      <div className="pt-4">
                        <h3 className="font-bold text-xs text-titleColor leading-[6%] mb-[4px]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-titleColor">
                          Количество: {item.quantity}
                        </p>
                        <p className="text-xs text-titleColor font-normal">
                          Цена: {item.price} ₽
                        </p>
                        <p className="text-xs text-titleColor font-bold">
                          Итого: {item.price * item.quantity} ₽
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div className="">
                <h4 className="uppercase font-normal text-base text-titleColor mb-4 tracking-wider">
                  оплата
                </h4>
                <div className="border-b-[3px] mb-4"></div>
                <div className="flex flex-col gap-3">
                  <Radio
                    name="paymentType"
                    label="Наличными или картой (при получении)"
                  />
                  <Radio
                    name="paymentType"
                    label="Оплата на сайте"
                    defaultChecked
                  />
                </div>
              </div>
            </div>

            <div className="col-span-8 xl:col-span-4">
              <div className=" bg-trafficWhite p-10 rounded-lg shadow-lg">
                <h2 className="text-xl font-black mb-4">Итого</h2>
                <div className="flex justify-between items-center mb-[4px]">
                  <p className="text-base font-normal text-[#221A25CC]">
                    Товары
                  </p>
                  <p className="text-lg font-normal text-titleColor">
                    {kFormatter(totalAmount)}₽
                  </p>
                </div>
                <div className="flex justify-between items-center mb-[4px]">
                  <p className="text-base font-normal text-[#221A25CC]">
                    Доставка
                  </p>
                  <p className="text-lg font-normal text-titleColor">
                    {kFormatter(deliveryPrice)}₽
                  </p>
                </div>
                <div className="border-2 my-4 border-[#E5E5E6]"></div>
                <div className="flex justify-between">
                  <p className="text-base  text-titleColor font-bold">
                    К оплате
                  </p>
                  <p className="text-lg font-normal text-titleColor">
                    {kFormatter(finalTotalAmount)}₽
                  </p>
                </div>
                <div className="flex">
                  <Button
                    type="submit"
                    onClick={finished}
                    className="mt-4 h-[42px] uppercase bg-pureGreen tracking-wider rounded-none  w-full"
                  >
                    завершить покупку
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <p>Нет данных по заказу.</p>
      )}
    </div>
  );
};

export default Order;
