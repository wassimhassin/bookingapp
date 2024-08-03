import axios from "axios";
import CryptoJS from 'crypto-js';

const secretKey = '1920';

export const getAllHotels = async (page = 1, limit = 7) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/hotels/getAllhotels?page=${page}&limit=${limit}`);
    const decryptedData = CryptoJS.AES.decrypt(res.data.data, secretKey).toString(CryptoJS.enc.Utf8);
    const hotels = JSON.parse(decryptedData); // Parse the decrypted string into JSON
    return hotels;
  } catch (err) {
    return err; 
  }
};
