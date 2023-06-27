import "./MiddleNav.css";
import logo1 from "../../../assets/svg/logo1.svg";
import logo2 from "../../../assets/svg/logo2.svg";
import calandar from "../../../assets/svg/calandar.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function MiddleNav() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="framer">
      <div className="android d-flex gx-3 align-items-center">
        <img src={logo1} className="first-icon" />
        <img src={logo2} className="second-icon" />
      </div>
      <div className="middle-filter d-flex gx-3 align-items-center">
        <select name="" id="" className="select me-3">
          <option value="" selected={true}>
            Anywhere
          </option>
        </select>
        <div className="d-flex">
          <div className="d-flex date-icon align-items-center">
            <img src={calandar} alt="" className="calendar" />
          </div>

          <DatePicker
            className="me-3"
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="MMM dd"
          />
        </div>
      </div>
      <div className="filter-menu"></div>
    </div>
  );
}
