import React from "react";

export default function Card(props) {
 

  return (
    <div data-aos="zoom-in" className="card">
      <div className="card-body">
        <h5 className="card-title"> New Activity</h5>
        <p className="card-text">
          Name - {props.apiResult.activity} <br />
        </p>
        <p className="card-text">
          Price - ₹{props.apiResult.price * 800} <br />
        </p>
        <p className="card-text">
          Type - {props.apiResult.type} <br />
        </p>
        <p className="card-text">
          Participants - {props.apiResult.participants} <br />
        </p>

        <p>
          {props.apiResult.link && (
            <a href={props.apiResult.link} className="btn btn-info atag">
              {" "}
              {props.apiResult.link}{" "}
            </a>
          )}
        </p>
        <button className="btn btn-primary" onClick={props.apiCall}>
          {" "}
          Get new activity
        </button>
        <div>
          select type
          <select
            value={props.value}
            onChange={props.handleChange}
            className="btn dropdown-custom"
          >
            <option value="any">any</option>
            <option value="education">education</option>
            <option value="recreational">recreational</option>
            <option value="social">social</option>
            <option value="diy">diy</option>
            <option value="charity">charity</option>
            <option value="cooking">cooking</option>
            <option value="relaxation">relaxation</option>
            <option value="music">music</option>
            <option value="busywork">busywork</option>
          </select>
      
        </div>
      </div>
    </div>
  );
}
