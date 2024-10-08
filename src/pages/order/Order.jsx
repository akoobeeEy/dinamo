import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const { products, totalAmount } = location.state || {}; // Access the passed order details

  return (
    <div className="container py-12">
      <h1 className="font-black text-[28px] text-titleColor mb-[30px]">
        Ваш заказ
      </h1>
      
      {products && products.length > 0 ? (
        <div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-10 items-start h-[200px] mb-8 p-4"
                >
                  <div className="w-[154px] h-full">
                    {/* Assuming the image is passed; if not, you can add a placeholder */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[154px] h-[160px]"
                    />
                  </div>
                  <div className="pt-4">
                    <h3 className="font-bold text-sm text-titleColor leading-[6%] mb-[4px]">
                      {item.title}
                    </h3>
                    <p className="text-lg text-titleColor">
                      Количество: {item.quantity}
                    </p>
                    <p className="text-lg text-titleColor font-normal">
                      Цена: {item.price} ₽
                    </p>
                    <p className="text-lg text-titleColor font-bold">
                      Итого: {item.price * item.quantity} ₽
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-4">
              <div className="bg-trafficWhite p-10 rounded-lg shadow-lg">
                <h2 className="text-xl font-black mb-4">Сумма заказа</h2>
                <div className="flex justify-between items-center mb-[4px]">
                  <p className="text-base font-normal text-[#221A25CC]">
                    Итого к оплате
                  </p>
                  <p className="text-lg font-normal text-titleColor">
                    {totalAmount} ₽
                  </p>
                </div>
                {/* Here, you could add a button to confirm the order */}
                <div className="flex">
                  <button className="mt-4 h-[42px] uppercase bg-pureGreen tracking-wider rounded-none w-full">
                    Подтвердить заказ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Нет данных по заказу.</p>
      )}
    </div>
  );
};

export default Order;
