import axios from "axios";

export const api = axios.create({
  baseURL: "https://thingproxy.freeboard.io/fetch/http://api.deezer.com/track/"
});
