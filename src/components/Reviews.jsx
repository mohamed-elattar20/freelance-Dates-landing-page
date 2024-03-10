const Reviews = () => {
  return (
    <>
      <section id="reviews" className="container my-5  py-5">
        <div className="row d-flex justify-content-center mt-5 mb-4">
          <div className=" d-flex justify-content-center">
            <h3 className="mb-4 fw-bold fs-1 border-bottom border-secondary border-5">
              آراء عملائنا
            </h3>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.IsuBW5KNmvj48M4O3CbizQHaHI&pid=Api&P=0&h=220"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">ياسر حمد</h5>
            <p className="px-xl-3">منتجات ذات جودة وكفاءة عالية جدا</p>
          </div>
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.LiQubs_u1xs5ns9p5v5JUwHaHa&pid=Api&P=0&h=220"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">مريم بن صالح</h5>
            <p className="px-xl-3">أفضل متجر لبيع التمور ذات الجودة العالية</p>
          </div>
          <div className="col-md-4 mb-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.5P6REDetU17GJfhBxp8m-QHaHa&pid=Api&P=0&h=220"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">محمد سليمان</h5>
            <p className="px-xl-3">
              سرعة في توصيل المنتجات وجودة المنتج ممتازة
            </p>
          </div>
        </div>
        {/* <hr /> */}
      </section>
    </>
  );
};

export default Reviews;
