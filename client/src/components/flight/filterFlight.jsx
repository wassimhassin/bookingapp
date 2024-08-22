import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import { styles } from "../../layout/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../redux/flight/flightThunks";

function DurationTime(value) {
  const hours = Math.floor(value / 60);
  const minutes = String(value % 60).padStart(2, "0");
  return `${hours}h ${minutes}m`;
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FilterFlight = () => {
  var minDistance = 10;

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.flights);

  const [value, setValue] = useState("");
  const [valueDuration, setValueDuration] = useState("");
  const [valueDuration2, setValueDuration2] = useState([450, 600]);

  useEffect(() => {
    dispatch(fetchFlights());
    if (error) {
      dispatch(error);
    }
  }, [dispatch]);

  function valuetext(value) {
    return `${value}`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeDuration = (event, newValue) => {
    setValueDuration(newValue);
  };
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValueDuration2([
        Math.min(newValue[0], valueDuration2[1] - minDistance),
        valueDuration2[1],
      ]);
    } else {
      setValueDuration2([
        valueDuration2[0],
        Math.max(newValue[1], valueDuration2[0] + minDistance),
      ]);
    }
  };

  return (
    <div className="flex lg:flex-col gap-4">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <strong>Price</strong>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="flex justify-between">
              <strong>{data[0]?.price} DT</strong>
              <strong>{value} DT</strong>
            </div>
            <Slider
              aria-label="Temperature"
              defaultValue={data[0]?.price}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              shiftStep={data[0]?.price}
              step={100}
              marks
              min={data[0]?.price}
              max={data[data.length - 1]?.price}
              value={value}
              onChange={handleChange}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>

        <Accordion  
        className="md:opacity-1 lg:opacity-1 "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <strong>Duration</strong>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Flight leg
              <div className="flex justify-between">
                <strong>3h 30m</strong>
                <strong>{DurationTime(valueDuration)}</strong>
              </div>
              <Slider
                aria-label="Duration"
                defaultValue={450}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={30}
                marks
                min={450}
                max={5000}
                value={valueDuration}
                onChange={handleChangeDuration}
              />
            </Typography>
          </AccordionDetails>

          <AccordionDetails>
            <Typography>
              Layover
              <div className="flex justify-between">
                <strong>{console.log(data, "-----")}</strong>
                <strong>{DurationTime(valueDuration2[1])}</strong>
              </div>
              <Slider
                getAriaLabel={() => "Minimum distance"}
                value={valueDuration2}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                min={450}
                max={3000}
                step={30}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* <Accordion 
        className="md:opacity-1 lg:opacity-1 "
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <strong>Airlines</strong>
          </AccordionSummary>
          <AccordionDetails>
            {data.map((flight, index) => (
              <React.Fragment key={index}>
                <Typography className="flex items-center gap-1">
                  <Checkbox {...label} defaultChecked />
                  <span
                    style={{
                      textTransform: "capitalize",
                      fontFamily:
                        "Helvetica Neue, Helvetica, Arial, sans-serif",
                    }}
                  >
                    {flight.airlineId.name}
                  </span>
                </Typography>
                {index < data.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </AccordionDetails>
        </Accordion> */}

        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <strong>AirPorts</strong>
          </AccordionSummary>
          <AccordionDetails>
            {data.map((flight, index) => (
              <React.Fragment key={index}>
                <Typography className="flex items-center gap-1">
                  <Checkbox {...label} defaultChecked />
                  <span style={styles}>{flight.originAirportId.name}</span>
                </Typography>
                {index < data.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </AccordionDetails>
        </Accordion> */}
    </div>
  );
};

export default FilterFlight;
