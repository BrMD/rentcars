import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./UserPanel.css";
const UserPanel = () => {
  return (
    <div className="content">
      <Header />
      <div className="userPanelDiv">
        <div className="userPanelInformation">
          <div className="userInputDiv">
            <label>
              Nome Atual:{" "}
              <span className="font-semibold text-sm text-black">
                {" "}
                Matheus Dorigon
              </span>
            </label>
            <input />
          </div>
          <div className="userInputDiv">
            <label>
              Nome Atual:{" "}
              <span className="font-semibold text-sm text-black">
                {" "}
                Matheus Dorigon
              </span>
            </label>
            <input />
          </div>
          <div className="userInputDiv">
            <label>
              Nome Atual:{" "}
              <span className="font-semibold text-sm text-black">
                {" "}
                Matheus Dorigon
              </span>
            </label>
            <input />
          </div>
          <div className="userInputDiv">
            <label>
              Nome Atual:{" "}
              <span className="font-semibold text-sm text-black">
                {" "}
                Matheus Dorigon
              </span>
            </label>
            <input />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPanel;
