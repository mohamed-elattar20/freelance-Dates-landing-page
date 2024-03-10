import "./Questions.css";
const Questions = () => {
  return (
    <>
      <div id="questions" className="container my-5 py-5">
        <div className="d-flex justify-content-center">
          <h2 className="fw-bold fs-1 text-center my-5 border-bottom border-secondary border-5">
            سؤال وجواب
          </h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed   "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    ما هي أنواع التمور التي تبيعونها ؟
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    نقدم مجموعة متنوعة من التمور اللذيذة عالية الجودة التي تناسب
                    جميع الأذواق! لدينا تمور مدجول الحلوة والعصيرية، تمور خضري
                    المميزة بطعمها اللطيف، تمور برحي ذات القوام شبه الشهي،
                    والمزيد! يمكنك تصفح موقعنا الإلكتروني أو التواصل معنا لمعرفة
                    المزيد عن الأنواع المتوفرة حاليًا.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    هل تقدمون عروضًا وخصومات؟
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    نعم! نسعى دائمًا لإسعاد عملائنا بعروض وخصومات جذابة. تأكد من
                    الاشتراك في القائمة البريدية الخاصة بنا أو متابعتنا على
                    وسائل التواصل الاجتماعي للبقاء على اطلاع بأحدث العروض. كما
                    نقدم خصومات خاصة للمشترين لأول مرة والطلبات الكبيرة.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    هل تتيحون الدفع عند الاستلام؟
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    نعم الدفع عند الإستلام متاح فهو طريقة الدفع الأساسية لدينا.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    كيف يتم شحن التمور؟
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    نحرص على توصيل تمورك إليك بأمان وفي أسرع وقت ممكن. نستخدم
                    علبًا مبطنة بشكل جيد للحفاظ على نضارة التمور وحمايتها أثناء
                    الشحن. كما نقدم خيارات شحن مختلفة لتناسب احتياجاتك، بما في
                    ذلك الشحن السريع والشحن الاقتصادي.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
