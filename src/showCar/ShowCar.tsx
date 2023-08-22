import { useState } from "react";
import { Modal } from "react-responsive-modal";

import "./ShowCar.css";
import "react-responsive-modal/styles.css";

import Button from "../../components/UI/Button/Button";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Span from "../../components/UI/Span/Span";

import eletrico from "/eletricoSF.png";

const ShowCar = () => {
  const [open, setOpen] = useState(false);
  const modalClick = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="content">
      <Header />
      <div className="carShow flex-1">
        <div className="carDetails">
          <h1 className="nameCar">Carro xxx</h1>
          <div className="divImage">
            <img className="carImage" src={eletrico} />
          </div>
          <div className="textDetails">
            <div className="flex flex-col sm:text-right">
              <Span CategoryName="Marca" ResultName="BMW" />
              <Span CategoryName="KM" ResultName="50000" />
              <Span CategoryName="Ano" ResultName="2023" />
              <Span CategoryName="Propulsao" ResultName="Hibrido" />
            </div>
            <div className="flex flex-col ">
              <Span CategoryName="Configuracao" ResultName="SUV" />
              <Span CategoryName="Porte" ResultName="Medio" />
              <Span CategoryName="Lugares" ResultName="5" />
              <Span CategoryName="Portas" ResultName="4" />
            </div>
          </div>
          <div>
            <Button
              onButtonClick={modalClick}
              twClass="bg-black m-4 w-[6em] h-[2em] rounded-md text-white ease-in-out duration-300 hover:bg-[--color--purple]">
              Alugar
            </Button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        styles={{
          modal: {
            position: "absolute",
            top: "20%",
            left: "37%",
            background: "#fff",
            backgroundColor: "#7a7a7a",
          },
          closeButton: { display: "none" },
        }}
        onClose={onClose}
        center>
        <h1>a</h1>
        <select className="selectModal">
          <option>s</option>
          <option>s</option>
          <option>s</option>
        </select>
      </Modal>

      <Footer />
    </div>
  );
};

export default ShowCar;
