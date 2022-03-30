import React from "react";
import "./App.css";
import spinner from "./Spinner.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Card from "./Card.js";

var axios = require("axios");
function App() {
  const [apiResult, setApiResult] = React.useState([]);
  const [progress, setProgress] = React.useState(true);

  var config = {
    method: "get",
    url: "https://www.boredapi.com/api/activity?minaccessibility=0&maxaccessibility=0.5",
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

  return (
    <div className="container">
      <h1>
        Getting bored??
        Try an new activity
      </h1>
      {progress ? (
        <img src={spinner} />
      ) : (
        <Card apiCall={triggerApi} apiResult={apiResult} />
      )}
    </div>
  );
}

export default App;
