import "./Button.css";

interface props {
  children: React.ReactNode;
  twClass?: string;
  onButtonClick: () => void;
}

const Button: React.FC<props> = ({
  twClass = "button",
  children,
  onButtonClick,
}) => {
  return (
    <button onClick={onButtonClick} className={twClass}>
      {children}
    </button>
  );
};

export default Button;
