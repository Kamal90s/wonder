import "./bestCategory.css";

const BestCategory = () => {
  return (
    <div className="bestCategory flex gap-2 mt-20 px-10">
      <div className="card1">
        <h2 className="text-[2.5rem] leading-10 text-white font-medium">
          أحدث المنتجات
        </h2>
        <button className="bg-white py-2 px-4">تسوق الان</button>
      </div>
      <div className="card2">
        <h2 className="text-[2.5rem] leading-10 text-white font-medium">
          أحدث المنتجات
        </h2>
        <button className="bg-white py-2 px-4">تسوق الان</button>
      </div>
      <div className="card3">
        <h2 className="text-[2.5rem] leading-10 text-white font-medium">
          أحدث المنتجات
        </h2>
        <button className="bg-white py-2 px-4">تسوق الان</button>
      </div>
    </div>
  );
};

export default BestCategory;
