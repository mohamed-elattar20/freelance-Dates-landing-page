import datesPic from "../assets/imgs/pexels-quintin-gellar-696205.jpg";
const Penefits = () => {
  return (
    <>
      <div id="penefits" className="container my-5">
        <div className="row my-5">
          <div className="d-flex justify-content-center">
            <h2 className="fw-bold text-center my-5 fs-1 border-bottom border-secondary border-5">
              فوائد هامة
            </h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 mb-5 mb-md-0">
            <h3>فوائد لاتعرفها عن التمر</h3>
            <ul className=" my-4">
              <li className="my-1 lead fw-bold">
                تعزيز صحة الجهاز الهضمي{" "}
                <p className=" fw-light">
                  بما أن التمر مصدر غني بالألياف الغذائية القابلة للذوبان وغير
                  القابلة للذوبان .
                </p>
              </li>
              <li className="my-1 lead fw-bold">
                {" "}
                علاج فقر الدم{" "}
                <p className=" fw-light">
                  يعد التمر مصدرًا ممتازًا للعديد من المعادن ومن بينها الحديد،
                  ما يجعل التمر يلعب دورًا جيدًا في علاج فقر الدم (Anemia)
                  الناتج عن نقص الـحديد.
                </p>
              </li>
              <li className="my-1 lead fw-bold">
                الحفاظ على صحة القلب{" "}
                <p className=" fw-light">
                  يعد التمر مفيد جدًا لصحة القلب، إذ إنه مصدر للبوتاسيوم
                  والمغنيسيوم المهمين لعمل القلب.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img
              style={{ objectFit: "cover" }}
              className="d-block w-100 rounded-4 img-fluid"
              src={datesPic}
              alt="date"
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Penefits;
