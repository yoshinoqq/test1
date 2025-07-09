import axios from "axios"
const API = axios.create({baseURL:' http://test-backend.itdelta.agency/api',headers:{'Content-Type': 'application/json; charset=utf-8',}})
export default API;