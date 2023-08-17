import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="homeShowCategoryCars">
      <div className="itemCategoryCar">
        <span>Sedan</span>
        <img src="sedanSF.png" className="imgCar" />
      </div>
      <div className="itemCategoryCar">
        <span>Hatch</span>
        <img src="hatchSF.png" className="imgCar" />
      </div>
      <div className="itemCategoryCar">
        <span>SUV</span>
        <img src="SUVSF.png" className="imgCar" />
      </div>
      <div className="itemCategoryCar">
        <span>Picape</span>
        <img src="pickupSF.png" className="imgCar" />
      </div>
      <div className="itemCategoryCar">
        <span>Eletrico</span>
        <img src="eletricoSF.png" className="imgCar" />
      </div>
      <div className="itemCategoryCar">
        <span>Luxo</span>
        <img src="luxoSF.png" className="imgCar" />
      </div>
    </div>
  );
};

export default HomeContent;
