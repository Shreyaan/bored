import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Try New Activity</h5>
        <p className="card-text">
          Name - {props.apiResult.activity} <br />
        </p>
        <p className="card-text">
          Price - ₹{props.apiResult.price * 700} <br />
        </p>
        <p className="card-text">
          Type - {props.apiResult.type} <br />
        </p>

        <p>
            {props.apiResult.link && (
            
                <a href={props.apiResult.link} className="btn btn-info">
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
