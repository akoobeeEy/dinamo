import { homeTopData } from "@/data/home-top-data";

const HomeTop = () => {
  return (
    <div className="py-8 bg-trafficWhite">
      <div className="container">
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {homeTopData.map(({ name, image }) => (
            <div key={name} className="flex flex-col items-center w-[200px]">
              <img src={image} alt={name} className="mb-2" />
              <p className="font-bold text-xs">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
