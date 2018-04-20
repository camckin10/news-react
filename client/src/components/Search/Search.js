import React from "react";
import "./Search.css";

const Search = props => 
    <div className = "container">
        <div className = "row">
            <div className = "col-lg-12">
                <h1>Search</h1>
            </div>
        </div>
        
        <div className = "row">
            <div className = "col-lg-12">
                <h2>Topic</h2>
                <form>
                <label>
                 Topic:
            <input type="text" name="name" />
            </label>
             <input type="submit" value="Submit" />
            </form>
            </div>
        </div>

        <div className = "row">
            <div className = "col-lg-12">
                <h2>Start Year</h2>
                <form>
                <label>
                 Start Year:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
            </div>
        </div>


        <div className = "row">
            <div className = "col-lg-12">
                <h2>End Year</h2>
            </div>
        </div>

        <div className = "row">
            <div className = "col-lg-12">
                <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
             );
            </div>
        </div>

    </div>