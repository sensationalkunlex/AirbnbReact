import { useState } from "react";
import "./Filter.css";
export default function Filter(props) {
  const [btns] = useState(["Any", "1", "2", "3", "4", "5+"]);

  const allButtons = btns.map((x) => (
    <div key={x}>
      <button
        className={`round-5 btn ${
          x === "Any" ? " button-curve black-color" : " button-curve btn-white "
        }`}
      >
        {x}
      </button>
    </div>
  ));

  return (
    <div className="">
      <div
        className="tab-close"
        onClick={() => {
          props.close();
        }}
      ></div>
      <div
        className={`filter-page ${
          props.filterCheck ? "slide-out" : "slide-in"
        }`}
      >
        <div className="d-flex justify-content-between mt-3 mb-4">
          <div className="filter-text">Filters</div>
          <div className="clear-all text-danger">Clear All</div>
        </div>
        <hr />
        <div className="d-flex flex-column mb-3">
          <div className="price-text">Price range</div>
          <div className="average-text">The average nightly price is $133</div>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="">
            <div className="min">Min price</div>
            <div className="input">
              <input type="text" className="filter" placeholder="$0" />
            </div>
          </div>
          <div className="mb-3">
            <div className="min">Max price</div>
            <div className="input ">
              <input type="text" className="filter" placeholder="$500+" />
            </div>
          </div>
        </div>
        <hr />

        <div className="mt-4 mb-4">
          <div className="price-text">Type of place</div>
        </div>
        <div className="d-flex  mb-3 align-items-baseline ">
          <div className="filter-text me-2">
            <input type="checkbox" name="entire" id="entire" />
          </div>
          <div className="d-flex flex-column  ">
            <div className="title">Entire Place</div>
            <div className="sub"> A place all to yourself</div>
          </div>
        </div>

        <div className="d-flex  mb-3 align-items-baseline ">
          <div className="filter-text me-2">
            <input type="checkbox" name="entire" id="entire" />
          </div>
          <div className="d-flex flex-column ">
            <div className="title">Private room</div>
            <div className="sub">
              Your own room in a home or a hotel, plus some shared common
              spaces.
            </div>
          </div>
        </div>

        <div className="d-flex  mb-3 align-items-baseline ">
          <div className="filter-text me-2">
            <input type="checkbox" name="entire" id="entire" />
          </div>
          <div className="d-flex flex-column ">
            <div className="title">Shared room</div>
            <div className="sub">
              A sleeping space and common areas that may be shared with others.{" "}
            </div>
          </div>
        </div>

        <hr />

        <div className="price-text mb-3">Rooms, beds, and baths</div>
        <div className="d-flex flex-column">
          <div className="average-text mb-2">Bedroom</div>
          <div className="d-flex  gap">{allButtons} </div>
        </div>
        <div className="d-flex flex-column mt-3">
          <div className="average-text mb-2">Beds</div>
          <div className="d-flex  gap">{allButtons} </div>
        </div>
        <div className="d-flex flex-column mt-3">
          <div className="average-text mb-2">Bathrooms</div>
          <div className="d-flex  gap">{allButtons} </div>
        </div>

        <div className="small-height"></div>
      </div>
      <div
        className={`filter-bottom ${
          props.filterCheck ? " slide-out" : "slide-in"
        } d-flex justify-content-center align-items-center`}
      >
        <button className="btn w-75 round-btn-white">Show 836 Homes</button>
      </div>
    </div>
  );
}
