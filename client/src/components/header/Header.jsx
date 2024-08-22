import {
  faArrowsLeftRight,
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import Icon_navigation from "../icon_navigation";
import Search from "../flight/search";

const Header = ({ type }) => {
  const { t } = useTranslation();
  const [flights, setFlights] = useState(true);
  const [stays, setStays] = useState(false);

  const calendarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setOpenDate(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const FlightSearch = () => {
    setFlights(true);
    setStays(false);
  };
  const StaysSearch = () => {
    setStays(true);
    setFlights(false);
  };
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  const handelClick = () => {
    navigate("/login");
  };

  return (
    <div className="header text-[white] flex justify-center relative h-[40vh] ">
      <div
        className={
          type === "list"
            ? "w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl listMode"
            : "w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 3 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center md:mb-5"
        >
          {user ? (
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className=" md:flex text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]"
            >
              Where to next,{" "}
              <motion.span
                initial={{ color: "black" }}
                animate={{ color: "#FFD700" }}
                className="mr-5"
              >
                {user.username}
              </motion.span>
              ?
            </motion.h1>
          ) : (
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:flex text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]"
            >
              {t("headerTitle")}
            </motion.h1>
          )}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-0 my-2.5 sm:mx-2 sm:my-3 md:mx-4 md:my-5 lg:mx-6 lg:my-6 xl:mx-8 xl:my-8"
          >
            {t("headerDesc")}
          </motion.p>
        </motion.div>

        <div>
          <Icon_navigation />
        </div>

        {/* {type !== "list" && (
          <>
            {flights && (
              <div className="space-y-2 px-8 md:relative md:left-[40%] h-auto bg-white flex flex-wrap gap-x-[5px] gap-y-0 mx-auto md:ml-[calc(50% - 40vw + 15px)] md:transform md:-translate-x-1/2 w-full max-w-screen-lg shadow-[-1px_5px_5px_0px_rgba(206,205,205,0.75)] px-2 py-3 rounded-[5px] border-none md:px-4 lg:px-6">
                <div className="flex items-center gap-2.5 w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Where are you going ?"
                    className="border-[2px] border-solid border-gray-400 p-2 rounded-[10px] w-full md:w-auto"
                    style={{ color: "black" }}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2.5 w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Where To go ?"
                    className="border-[2px] border-solid border-gray-400 p-2 rounded-[10px] w-full md:w-auto"
                    style={{ color: "black" }}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-2.5 w-full md:w-auto ">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-lightgray"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="text-[rgb(86,86,86)] cursor-pointer"
                  >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>

                  {openDate && (
                    <div ref={calendarRef}>
                      <DateRange
                        ref={calendarRef}
                        editableDateInputs={true}
                        onChange={(item) => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className="absolute top-[50px] left-[20%] z-index-2"
                        minDate={new Date()}
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2.5 w-full md:w-auto">
                  <FontAwesomeIcon icon={faPerson} className="text-lightgray" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="text-[rgb(86,86,86)] cursor-pointer"
                  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  {openOptions && (
                    <div className="z-2 absolute bg-white text-black shadow-[0px_0px_10px_-5px_rgba(0,0,0,0.4)] rounded-[5px] top-[50px] shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4)">
                      <div className="w-full flex justify-between m-2.5">
                        <span>Adult</span>
                        <div className="flex items-center gap-2.5 text-xs text-black">
                          <button
                            disabled={options.adult <= 1}
                            className="w-[30px] h-[30px] border text-[#0071c2] cursor-pointer bg-white border-solid border-[#0071c2]"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span>{options.adult}</span>
                          <button
                            className="w-[30px] h-[30px] border text-[#0071c2] cursor-pointer bg-white border-solid border-[#0071c2]"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="w-full flex justify-between m-2.5">
                        <span>Children</span>
                        <div className="flex items-center gap-2.5 text-xs text-black">
                          <button
                            disabled={options.children <= 0}
                            className="w-[30px] h-[30px] border text-[#0071c2] cursor-pointer bg-white border-solid border-[#0071c2]"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span>{options.children}</span>
                          <button
                            className="w-[30px] h-[30px] border text-[#0071c2] cursor-pointer bg-white border-solid border-[#0071c2]"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="w-full flex justify-between m-2.5">
                        <span className="optionText">Room</span>
                        <div className="flex items-center gap-2.5 text-xs text-black">
                          <button
                            disabled={options.room <= 1}
                            className="w-[30px] h-[30px] border text-[#0071c2] cursor-pointer bg-white border-solid border-[#0071c2]"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span>{options.room}</span>
                          <button
                            className="w-[30px] h-[30px] border text-[#0071c2] cursor-pointer bg-white border-solid border-[#0071c2]"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full md:w-auto">
                  <button
                    className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            )}
          </>
        )} */}

        <Search/>
      </div>
    </div>
  );
};

export default Header;
