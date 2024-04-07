import axios from "axios";

const YOUR_ACCESS_KEY = "evgqyK-W5AZtM8w4c_gNgqKaLpVTyFDQlYp9DXG2AIk";
const perPage = 12;
// DQlYp9DXG2AIk;
// axios.defaults.baseURL = `https://api.unsplash.com/search/photos/?client_id=${YOUR_ACCESS_KEY}`;

export const fetchList = async (topic, page) => {
  const response = axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${YOUR_ACCESS_KEY}&query=${topic}&per_page=${perPage}&page=${page}`
  );
  return response;
};
