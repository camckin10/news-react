import React from "react";
import "./Results.css";

const Results = () => (
    <div className = "container">
        <div className = "row">
        <div className="results-text-center">
        <h1>Results</h1>
    </div>
        </div>
        <li className = "list-group-item">
        <h4>
        <span>
          <em>{props.title}</em>
        </span>
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank">
            <button className="btn btn-default ">View Article</button>
          </a>
          <button className="btn btn-primary" onClick={() => props.saveItem(props._id)}>Save</button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
        
            
            
        
    </div>
    
)

export default Results;