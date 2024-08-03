import React from "react";
import {
  faMagnifyingGlass,
  faPeoplePulling,
  faPlaneArrival,
  faPlaneDeparture,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const Search = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = useState(dayjs("2022-04-17"));
  return (
    <div className="bg-gray-200 md:mt-5 rounded-xl flex flex-col items-center justify-center">
      <div className="container mx-auto px-5 py-4 flex justify-center items-center">
        <form className="flex flex-col md:flex-row md:space-x-2 ">
          <div className="relative flex flex-col mb-4 md:mb-0 w-full md:w-1/3">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">
              From:
            </label>
            <input
              type="text"
              id="name"
              className="p-2 pr-10 border border-gray-300 rounded-xl"
              placeholder="From..."
            />
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              size="xl"
              className="absolute top-10 right-3 text-black"
            />
          </div>

          <div className="flex flex-col justify-end items-center mb-4 md:mb-0 w-full md:w-[50px] cursor-pointer ">
            <FontAwesomeIcon
              icon={faRightLeft}
              size="xl"
              style={{ color: "#000000" }}
              className="p-2 border rounded-xl"
            />
          </div>
          <div className="relative flex flex-col mb-4 md:mb-0 w-full md:w-1/3">
            <label htmlFor="name" className="mb-2 font-medium text-gray-700">
              From:
            </label>
            <input
              type="text"
              id="name"
              className="p-2 pr-10 border border-gray-300 rounded-xl"
              placeholder="To..."
            />
            <FontAwesomeIcon
              icon={faPlaneArrival}
              size="xl"
              style={{ color: "#000000" }}
              className="absolute top-10 right-3 text-black"
            />
          </div>
          <div className="flex justify-center items-end">
            <button className="bg- hover:bg-gray-400 text-gray-800 font-bold py-5 px-7 rounded-xl inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
              <span>Search</span>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                style={{ color: "#000000" }}
              />
            </button>
          </div>
        </form>
      </div>

      <div className="container mx-auto px-5 py-4 flex justify-center items-center ">
        <form className="flex flex-col md:flex-row md:space-x-5  flex justify-center items-center">
          <div className="relative flex flex-col mb-4 md:mb-0 md:w-1/3 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                {/* <DatePicker
                  label="Uncontrolled picker"
                  defaultValue={dayjs("2022-04-17")}
                /> */}
                <DatePicker
                  label="Controlled picker"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div className="relative flex flex-col mb-4 md:mb-0 w-full md:w-1/4">
            <FormControl sx={{ m: 2, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="relative flex flex-col mb-4 md:mb-0 w-full md:w-1/3">
            <div>
              <FormControl sx={{ m: 2, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  all class
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                 
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10} style={{ color: "red" }}>
                    economy
                  </MenuItem>
                  <MenuItem value={20} style={{ color: "green" }}>
                    first class
                  </MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
