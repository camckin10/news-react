import React from "react";
import "./Jumbotron.css";

//stateless component
//stateless -- no render function

const Jumbotron = () => (
     <div className="jumbotron text-center">
    <h1>News Scraper</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.newyorktimes.com"
    >
      Powered by The New York Times 
    </a>
  </div>
);

  
  export default Jumbotron;
  
