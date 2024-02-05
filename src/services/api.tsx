import axios from "axios";

export const api = axios.create({
  baseURL: 'https://xpenses-backend-uktd.onrender.com'
})
