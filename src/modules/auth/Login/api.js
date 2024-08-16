import axios from "axios";

export const getToken = async (params) => {
    return await axios.post("https://reqres.in/api/login", params);
};
