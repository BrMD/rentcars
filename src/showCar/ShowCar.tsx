import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./ShowCar.css";
import eletrico from "/eletricoSF.png";

const ShowCar = () => {
  return (
    <div>
      <Header />
      <div className="carShow">
        <div className="carDetails">
          <h1 className="nameCar">Carro xxx</h1>
          <div className="divImage">
            <img className="carImage" src={eletrico} />
          </div>
          <div className="textDetails">
            <div className="flex flex-col text-right">
              <div className="m-2">
                <span>Marca:</span>
                <span>BMW</span>
              </div>
              <div className="m-2">
                <span>KM:</span>
                <span>50000</span>
              </div>
              <div className="m-2">
                <span>Ano:</span>
                <span>2023</span>
              </div>
              <div className="m-2">
                <span>Propulsao:</span>
                <span>Hibrido</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="m-2">
                <span>Configuracao:</span>
                <span>SUV</span>
              </div>
              <div className="m-2">
                <span>Porte:</span>
                <span>Medio</span>
              </div>
              <div className="m-2">
                <span>Lugares:</span>
                <span>5</span>
              </div>
              <div className="m-2">
                <span>Portas:</span>
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowCar;
