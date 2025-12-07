import axios from "axios";

export const weatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        appid: "0439257ddcafa13535e8fbef748608c7",
        units: "metric",
        lang: "en",
    }
})