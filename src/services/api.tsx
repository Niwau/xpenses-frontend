import axios from "axios";

export const api = axios.create({
  baseURL: 'https://xpenses-backend-production.up.railway.app'
})