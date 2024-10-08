import { brandData } from "@/data";

export const Brand = () => {
  return (
    <div className="py-5 ">
      <div className="container border-t">
        <div className="flex justify-between flex-wrap">
          {brandData.map(({ image }, index) => (
            <img src={image} alt="brand" key={index} className="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
