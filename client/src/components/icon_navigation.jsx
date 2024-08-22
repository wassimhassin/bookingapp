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
  import { Link } from "react-router-dom";

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  import "react-date-range/dist/styles.css";
  import "react-date-range/dist/theme/default.css";



const Icon_navigation = () => {
    return(
        <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2.5 cursor-pointer border bg-[white] text-[black] font-semibold text-[13px] p-[5px] rounded-[15px] border-solid border-[white]  
          text-[#048a98] font-medium text-[13px] p-[5px] rounded-[15px] border-2 border-solid border-[gray]"
            // onClick={StaysSearch}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" items-center gap-2.5 text-[14px] p-[6px] rounded-[20px] cursor-pointer"
            // onClick={FlightSearch}
          >
            <Link to="http://localhost:3000/flight">
              <FontAwesomeIcon icon={faPlane} className="px-1" />
              <span>Flights</span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" md:text-[15px] md:p-[7px] md:rounded-[25px] cursor-pointer"
          >
            <FontAwesomeIcon className="px-1" icon={faCar} />
            <span>Car</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-[15px] p-[7px] rounded-[25px] cursor-pointer"
          >
            <FontAwesomeIcon className="px-1" icon={faTaxi} />
            <span>Airport taxis</span>
          </motion.div>
          
        </motion.div>
      </div>
    )
}
export default Icon_navigation