import "./MoreRented.css";

const MoreRented = ({
  imgPath,
  nameRented,
  price,
}: {
  imgPath: string;
  nameRented: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rentedItem">
        <span>{nameRented}</span>
        <img src={imgPath} className="imgCar" />
      </div>
      <div className="blackBar">R$ {price}/dia</div>
    </div>
  );
};

export default MoreRented;
