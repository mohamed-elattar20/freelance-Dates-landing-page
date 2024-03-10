import { useRef, useEffect, useState } from "react";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMins, setTimerMins] = useState("00");
  const [timerSecs, setTimerSecs] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("may 22 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMins(mins);
        setTimerSecs(secs);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <>
      <div id="hi" className="container my-5">
        <h2 className="fw-bold display-6 my-5">اطلب الآن قبل نفاذ العروض</h2>
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-between ">
            <div className="bg-success bg-opacity-25 py-4 rounded-3 text-center mx-1 w-25">
              <p className="lead fw-bold fs-1">{timerSecs}</p>
              <p>
                <small className="fs-4">ثانية</small>
              </p>
            </div>

            <div className="bg-success bg-opacity-25 py-4 rounded-3 text-center mx-1 w-25">
              <p className="lead fw-bold fs-1"> {timerMins}</p>
              <p>
                <small className="fs-4">دقيقة</small>
              </p>
            </div>

            <div className="bg-success bg-opacity-25 py-4 rounded-3 text-center mx-1 w-25 ">
              <p className="lead fw-bold fs-1">{timerHours}</p>
              <p>
                <small className="fs-4">ساعة</small>
              </p>
            </div>

            <div className="bg-success bg-opacity-25 py-4 rounded-3 text-center  mx-1 w-25">
              <p className="lead fw-bold fs-1">
                {timerDays === 0 ? "00" : timerDays}{" "}
              </p>
              <p>
                <small className="fs-4">يوم</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
