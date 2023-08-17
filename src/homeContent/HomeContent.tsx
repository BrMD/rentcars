import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div>
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
      <div className="moreRentedDiv">
        <div className="moreRented">
          <h1 className="title">Mais Alugados</h1>
        </div>
        <div className="itemsRented">
          <div className="rentedItem">
            <span>Sedan</span>
            <img src="eletricoSF.png" className="imgCar" />
          </div>
          <div className="rentedItem">
            <span>Sedan</span>
            <img src="eletricoSF.png" className="imgCar" />
          </div>
          <div className="rentedItem">
            <span>Sedan</span>
            <img src="eletricoSF.png" className="imgCar" />
          </div>
          <div className="rentedItem">
            <span>Sedan</span>
            <img src="eletricoSF.png" className="imgCar" />
          </div>
          <div className="rentedItem">
            <span>Sedan</span>
            <img src="eletricoSF.png" className="imgCar" />
          </div>
          <div className="rentedItem">
            <span>Sedan</span>
            <img src="eletricoSF.png" className="imgCar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
