import logo from "../assets/imgs/logo_new.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow py-3 sticky-top">
      <div className="container ">
        <a style={{ width: "150px" }} className="navbar-brand" href="#">
          <img className="d-block w-100 me-1 " src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav me-auto ">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#products">
                منتجاتنا
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#whoWeAre">
                من نحن ؟
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#penefits">
                فوائد هامة
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">
                آراء عملائنا
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#questions">
                سؤال وجواب
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
