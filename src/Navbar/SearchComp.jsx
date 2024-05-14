import React, { Component } from "react";
import { GrLocation } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
class SearchComp extends Component {
  render() {
    return (
      <div className="searchBlock">
        <aside className="searchDivider">
          <div className="leftSearch">
            <span className="icon-left"><GrLocation/></span>
            <span>
              <input type="text" placeholder="banglore"></input>
            </span>
            <span><FaAngleDown /></span>
          </div>

          {/*-----------------Right search----------------------*/}

          <div className="rightSearch">
            <span className="icon-right"><FiSearch/></span>
            <span>
              <input type="text" placeholder="Search for cleaning.."></input>
            </span>
          </div>
        </aside>
      </div>
    );
  }
}
export default SearchComp;
