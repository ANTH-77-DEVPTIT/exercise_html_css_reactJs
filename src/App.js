import Header from "./components/header/Header";
import Button from "./layouts/button/index";
import Section from "./components/section/Section";
import Gallery from "./components/gallery/Gallery";
import Feedback from "./components/feedback/Feedback";
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
      </div>

      {/* footer */}
    </div>
  );
}

export default App;
