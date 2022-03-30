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
      </div>
    </div>
  );
}
