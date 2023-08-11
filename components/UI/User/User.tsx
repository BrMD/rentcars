import user from "/user.png";
import "./User.css";

const User = () => {
  return (
    <div className="user">
      <img src={user} className="image" />
    </div>
  );
};

export default User;
