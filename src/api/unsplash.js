import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID TSTR0vWzMAAqF5SzQXCXzIEV-sNAm-FU53yIseVSTlQ",
  },
});
