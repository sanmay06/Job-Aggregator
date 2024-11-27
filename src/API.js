import React from "react";
import axios from 'axios';

const api = axios.create({ baseURL: "https://job-scrape-six.vercel.app/" });

export default api;