import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Gallery from "./components/gallery/Gallery";
import Feedback from "./components/feedback/Feedback";
import Evaluate from "./components/evaluate/Evaluate";
import Service from "./components/service/Service";
import Reason from "./components/reason/Reason";
import Maxim from "./components/maxim/Maxim";
import Questions from "./components/questions/Questions";
import Participation from "./components/participation/Participation";
import Contact from "./components/contact/Contact";
import Address from "./components/address/Address";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <div id="wrapper">
        {/* chứa header với phần content contact */}
        <div id="main">
          <div className="content">
            <Header />
            <div className="section">
              <Section />
            </div>
          </div>
        </div>
        <Gallery />
        <Feedback />
        <Evaluate />
        <Service />
        <Reason />
        <Maxim />
        <Questions />
        <Participation />
        <Contact />
        <Address />
        <Footer />
      </div>

      {/* footer */}
    </div>
  );
}

export default App;
