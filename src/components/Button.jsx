const Button = ({
  textButton = "Sin texto",
  color = "btn-dark",
  size = "",
}) => {
  return <button className={`btn ${color} ${size}`}>{textButton}</button>;
};

export default Button;
