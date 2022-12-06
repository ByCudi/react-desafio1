const Card = ({ cardImage, cardTitle, cardText, children }) => {
  return (
    <div
      className="card bg-dark text-center border border-3"
      style={{ width: "100vh" }}
    >
      <img className="card-img-top" src={cardImage} alt="img" />
      <div className="card-body p-3">
        <h5 className="card-title ">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        {children}
      </div>
    </div>
  );
};
export default Card;
