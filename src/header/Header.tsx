import "./Header.css";
import locationIcon from "/locationIconRed.svg";
import Logo from "../../components/UI/Logo/Logo";
import User from "../../components/UI/User/User";

import Button from "../../components/UI/Button/Button";
const Header = () => {
  return (
    <div className="header">
      <div className="buttonDiv">
        <img className="icon" src={locationIcon} />
        <Button>Localização</Button>
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default Header;
