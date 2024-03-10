const DatesSampleCard = ({ image, description, name }) => {
  return (
    <>
      <div className="card mx-1">
        <div className="card-img-top">
          <img
            style={{ objectFit: "contain", height: "250px" }}
            src={image}
            className="d-block w-100 "
            alt={description}
          />
        </div>
        <div className="card-body text-center">
          <h3 className="card-text">{name}</h3>
          <h5 className="card-text text-muted my-2 pb-4">{description}</h5>
        </div>
      </div>
    </>
  );
};

export default DatesSampleCard;
