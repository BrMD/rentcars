import "./Header.css";
import locationIcon from "/locationIconRed.svg";
import Logo from "../../components/UI/Logo/Logo";
import User from "../../components/UI/User/User";

import Button from "../../components/UI/Button/Button";
const Header = () => {
  return (
    <header className="header">
      <div className="flex-1">
        <div className="buttonDiv">
          <img className="icon" src={locationIcon} />
          <Button>Localização</Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Logo />
      </div>
      <div className="flex-1 flex justify-end">
        <User />
      </div>
    </header>
  );
};

export default Header;
