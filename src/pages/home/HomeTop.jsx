import { homeTopData } from "@/data/home-top-data";

const HomeTop = () => {
  return (
    <div className="py-8 bg-trafficWhite">
      <div className="container">
        <div className="flex justify-center items-center gap-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {homeTopData.map(({ name, image }) => (
              <div key={name} className="flex flex-col items-center w-[200px] xl:mb-0 mb-4">
                <img src={image} alt={name} className="mb-2" />
                <p className="font-bold text-xs">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
