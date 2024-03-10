import { lazy, Suspense } from "react";

const LazyVideo = lazy(() => import("./LazyVideo"));
const WhoWeAre = () => {
  return (
    <>
      <div id="whoWeAre" className="container my-5">
        <div className="d-flex justify-content-center">
          <h2 className=" fw-bold fs-1 my-5 border-bottom border-secondary border-5  ">
            من نحن
          </h2>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h3 className="fw-bold">نبذة عن طوق العربية </h3>
            <p className="lead border border-1 p-3 rounded-3">
              نحن ملتزمون بتوفير التمور الطازجة والأعلى جودة لعملائنا,يتم الحصول
              على تمورنا من أفضل البساتين. يقدم موقعنا مجموعة متنوعة من خيارات
              التمور,من تمور الخلاص الفاخر الى الأصناف الفريدة, نحرص دائما على
              توفير الأفضل لك .
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <Suspense
              fallback={
                <div className="text-center fw-bold fs-1">جاري التحميل...</div>
              }
            >
              <LazyVideo />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
