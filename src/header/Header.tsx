import "./Header.css";
import locationIcon from "/locationIconRed.svg";

import Button from "../../components/UI/Button/Button";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={locationIcon} width={"20px"} height={"20px"} />
        <Button>localização</Button>
      </div>
      <div>Logo</div>
      <div>User</div>
    </div>
  );
};

export default Header;
