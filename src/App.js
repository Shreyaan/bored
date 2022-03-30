import React from "react";
import "./App.css";
import spinner from "./Spinner.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import Card from "./Card.js";

var axios = require("axios");
function App() {
  const [apiResult, setApiResult] = React.useState([]);
  const [progress, setProgress] = React.useState(true);

  var config = {
    method: "get",
    url: "https://www.boredapi.com/api/activity/",
    headers: {},
  };

  function apiCall() {
    axios(config)
      .then(function (response) {
        setApiResult(response.data);
        setProgress(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  React.useEffect(() => {
    apiCall();
  }, []);

  function triggerApi() {
    setProgress(true);
    apiCall();
  }

  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

  return (
    <div className="container">
      <h1 data-aos="fade-in"  data-aos-duration="2000" >Getting bored?? Try an new activity</h1>
      <div data-aos="fade-in" data-aos-duration="2000">
        {progress ? (
          <img data-aos="fade-in"  src={spinner} />
        ) : (
          <Card  apiCall={triggerApi} apiResult={apiResult} />
        )}
      </div>
    </div>
  );
}

export default App;
