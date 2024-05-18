import axios from "axios";

const baseUrl = "http://127.0.0.1:3000/api";

export default axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});