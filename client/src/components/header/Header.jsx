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
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { useTranslation } from 'react-i18next';

const Header = ({ type }) => {
  const {t} = useTranslation()
  const [flights, setFlights] = useState(true);
  const [stays, setStays] = useState(false);

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
          type === "list" ? "w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl listMode" : "w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
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
              {t('headerTitle')}
            </motion.h1>
          )}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-0 my-2.5 sm:mx-2 sm:my-3 md:mx-4 md:my-5 lg:mx-6 lg:my-6 xl:mx-8 xl:my-8"
          >
           {t('headerDesc')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:flex justify-center items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2.5 cursor-pointer border bg-[white] text-[black] font-semibold text-[13px] p-[5px] rounded-[15px] border-solid border-[white]  
            text-[#048a98] font-medium text-[13px] p-[5px] rounded-[15px] border-2 border-solid border-[gray]
    sm:text-[14px] sm:p-[6px] sm:rounded-[20px]
    md:text-[15px] md:p-[7px] md:rounded-[25px]
    lg:text-[16px] lg:p-[8px] lg:rounded-[30px]
    xl:text-[17px] xl:p-[9px] xl:rounded-[35px]
    
            "
            onClick={StaysSearch}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="    sm:text-[14px] sm:p-[6px] sm:rounded-[20px] cursor-pointer "
            onClick={FlightSearch}
          >
            <Link to="http://localhost:3000/flight">
            <FontAwesomeIcon icon={faPlane} />
            <span >Flights</span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="    md:text-[15px] md:p-[7px] md:rounded-[25px] cursor-pointer "
          >
            <FontAwesomeIcon icon={faCar} />
            <span>Car</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:text-[16px] lg:p-[8px] lg:rounded-[30px] cursor-pointer "
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Package</span>
          </motion.div>
          {/* <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="    xl:text-[17px] xl:p-[9px] xl:rounded-[35px]"
          >
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </motion.div> */}
        </motion.div>
        {type !== "list" && (
          <>
            {flights && (
             <div className="md:relative md:left-[40%] h-auto bg-white flex flex-wrap gap-x-[5px] gap-y-0 mx-auto md:ml-[calc(50% - 40vw + 15px)] md:transform md:-translate-x-1/2 w-full max-w-screen-lg shadow-[-1px_5px_5px_0px_rgba(206,205,205,0.75)] px-2 py-3 rounded-[5px] border-none md:px-4 lg:px-6">
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
             <div className="flex items-center gap-2.5 w-full md:w-auto">
               <FontAwesomeIcon icon={faCalendarDays} className="text-lightgray" />
               <span
                 onClick={() => setOpenDate(!openDate)}
                 className="text-[rgb(86,86,86)] cursor-pointer"
               >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                 dates[0].endDate,
                 "MM/dd/yyyy"
               )}`}</span>
               {openDate && (
                 <DateRange
                   editableDateInputs={true}
                   onChange={(item) => setDates([item.selection])}
                   moveRangeOnFirstSelection={false}
                   ranges={dates}
                   className="date"
                   minDate={new Date()}
                 />
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

            {/* {stays && (
              <div className="h-auto bg-[white] grid grid-cols-[repeat(5,1fr)] grid-rows-[repeat(2,1fr)] gap-x-[5px] gap-y-0 absolute bottom-[-25px] w-full max-w-screen-lg shadow-[-1px_5px_5px_0px_rgba(206,205,205,0.75)] px-0 py-3 rounded-[5px] border-[none]">
                <div className="md:flex md:items-center md:gap-2.5">
                  <FontAwesomeIcon icon={faBed} className="text-[lightgray]" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    style={{ color: "black" }}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="md:flex md:items-center md:gap-2.5">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-[lightgray]"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="text-[rgb(86,86,86)] cursor-pointer"
                  >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>

                <div className="">
                  <button
                    className=" w-full 
                text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  
                "
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
                <div></div>
              </div>
            )} */}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
