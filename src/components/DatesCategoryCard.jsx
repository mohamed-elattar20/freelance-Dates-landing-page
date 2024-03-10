const DatesCategoryCard = ({ image, description, name, sizes }) => {
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
          {sizes.map((size) => (
            <span
              key={size}
              className="p-2 bg-success bg-opacity-50 rounded-4 my-2 mx-1 col-sm-12 col-md-2 w-100"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default DatesCategoryCard;
