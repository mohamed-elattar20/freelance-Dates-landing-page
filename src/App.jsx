import Countdown from "./components/Countdown";
import DatesCategoryList from "./components/DatesCategoryList";
import DatesSamplesList from "./components/DatesSamplesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Penefits from "./components/Penefits";
import Questions from "./components/Questions";
import Reviews from "./components/Reviews";
import WhoWeAre from "./components/WhoWeAre";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Countdown />
      <DatesCategoryList />
      {/* <div className="container"> */}
      <DatesSamplesList />
      {/* </div> */}

      <Penefits />
      <Reviews />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
