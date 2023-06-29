import "./MiddleNav.css";
import logo1 from "../../../assets/svg/logo1.svg";
import logo2 from "../../../assets/svg/logo2.svg";
import filter from "../../../assets/icons/filter.png";
import calandar from "../../../assets/svg/calandar.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import Filter from "./components/Filter/Filter";

export default function MiddleNav() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guest, setGuest] = useState(1);
  const [filterCheck, setFilterCheck] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("isVisible", isVisible);
    if (!isVisible) {
      const timer = setTimeout(() => {
        setFilterCheck((x) => isVisible);
      }, 6000); // 60000 milliseconds = 1 minute

      return () => clearTimeout(timer);
    } else {
      setFilterCheck((x) => isVisible);
    }
  }, [isVisible]);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  function filterAction() {
    setIsVisible((x) => !x);
  }

  function updateGuest(check) {
    check
      ? setGuest((x) => x + 1)
      : guest > 1
      ? setGuest((x) => x - 1)
      : setGuest((x) => 1);
  }
  return (
    <div className="">
      <div className="framer">
        <div className="android d-flex gx-3 align-items-center">
          <img src={logo1} className="first-icon" alt={"logo"} />
          <img src={logo2} className="second-icon" alt={"logo"} />
        </div>
        <div className="middle-filter d-flex gx-3 align-items-center ">
          <div className="select d-flex  align-items-center justify-content-center me-3">
            <select name="" id="" className=" ">
              <option value="" selected={true}>
                Anywhere
              </option>
            </select>
          </div>
          <div className="d-flex">
            <div className="d-flex date-icon align-items-center">
              <img src={calandar} alt={"calendar"} className="calendar" />
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
          <div className="d-flex align-items-center btn__guest">
            <button className="minus__btn" onClick={() => updateGuest(false)}>
              -
            </button>
            <div className="text-input">{guest} guests</div>
            <button className="plus__btn" onClick={() => updateGuest(true)}>
              +
            </button>
          </div>
        </div>
        <div className="filter-menu d-flex align-items-center justify-content-center">
          <img src={filter} alt={"Filter"} onClick={filterAction} />
        </div>
      </div>
      {filterCheck && <Filter close={filterAction} filterCheck={!isVisible} />}
    </div>
  );
}
