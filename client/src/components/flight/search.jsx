import React, { useRef } from "react";
import {
  faMagnifyingGlass,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from "@mui/material";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useState } from "react";
import Header from "../header/Header";

const Search = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const calendarRef = useRef(null);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="grid  grid-cols-2 lg:grid-cols-5 gap-4 md:bg-gray-200 rounded-xl mt-2 px-8 md:px-16 lg:px-32 py-4">
      <Header/>
      <div className="col-span-2 lg:col-span-1">
        <label className="block text-sm font-medium text-gray-700">
          Aller-retour
        </label>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <option>Aller-retour</option>
          <option>Aller simple</option>
          <option>Multi-destinations</option>
        </select>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          Départ de
        </label>
        <input
          type="text"
          placeholder="Départ de"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          Arrivée à
        </label>
        <input
          type="text"
          placeholder="Arrivée à"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="col-span-2 md:col-span-3 lg:col-span-3">
        <label className="block text-sm font-medium text-gray-700">
          Dates de voyage
        </label>
        <div className="flex items-center justify-between gap-2.5 w-full md:w-auto">
          <FontAwesomeIcon icon={faCalendarDays} className="text-lightgray" />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="text-[rgb(34,55,121)] text-lg cursor-pointer mt-1 flex w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >{`${format(dates[0].startDate, "MM/dd/yyyy")} To ${format(
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
                className="absolute top-[315px] md:top-[250px] md:left-[20%] left-[15%] z-index-1"
                minDate={new Date()}
              />
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <label className="block text-sm font-medium text-gray-700">
          Passagers
        </label>
        <select className="cursor-pointer mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <option>Bébé (0 - 23 mois)</option>
          <option>Enfant (2-11 ans inclus)</option>
          <option>Jeune (18-24 ans)</option>
          <option>Étudiant (18-29 ans)</option>
          <option>Adulte</option>
          <option>Senior (65 ans et plus)</option>
        </select>
      </div>

      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <label className="block text-sm font-medium text-gray-700">
          Economy
        </label>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <option>Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </select>
      </div>

      <div className="col-span-2 md:col-span-3 lg:col-span-2 flex items-center justify-between">
        <div className="flex items-center">
          <Switch />
          <span className="ml-2 text-sm text-gray-700">
            Je veux réserver avec bluebiz ou un accord d'entreprise
          </span>
        </div>
      </div>

      <div className="col-span-2 d:col-span-5 lg:col-span-2">
        <button className=" bg-gray-800 hover:bg-gray-400 text-white font-bold py-5 px-7 rounded-xl inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
          <span>Search</span>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            style={{ color: "#000000" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
