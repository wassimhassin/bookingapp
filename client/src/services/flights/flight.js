import axios from "axios";

export const getAllFlight = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/flight/getAllFlight`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : new Error("Network Error");
  }
};
