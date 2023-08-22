import "./HomeContent.css";
import ItemCategory from "../../components/UI/CategoryItem/ItemCategory";
import MoreRented from "../../components/UI/MoreRented/MoreRented";

const HomeContent = () => {
  return (
    <div>
      <div className="homeShowCategoryCars">
        <ItemCategory nameCategory="Sedan" imgPath="sedanSF.png" />
        <ItemCategory nameCategory="Hatch" imgPath="hatchSF.png" />
        <ItemCategory nameCategory="SUV" imgPath="SUVSF.png" />
        <ItemCategory nameCategory="Picape" imgPath="pickupSF.png" />
        <ItemCategory nameCategory="Eletrico" imgPath="eletricoSF.png" />
        <ItemCategory nameCategory="Luxo" imgPath="luxoSF.png" />
      </div>
      <div className="moreRentedDiv">
        <div className="moreRented">
          <h1 className="title">Mais Alugados</h1>
        </div>
        <div className="itemsRented">
          <MoreRented imgPath="sedanSF.png" nameRented="Sedan" price={40} />
          <MoreRented imgPath="hatchSF.png" nameRented="Hatch" price={20} />
          <MoreRented imgPath="SUVSF.png" nameRented="SUV" price={100} />
          <MoreRented
            imgPath="eletricoSF.png"
            nameRented="Eletrico"
            price={80}
          />
          <MoreRented imgPath="luxoSF.png" nameRented="Luxo" price={700} />
          <MoreRented imgPath="pickupSF.png" nameRented="Picape" price={200} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
