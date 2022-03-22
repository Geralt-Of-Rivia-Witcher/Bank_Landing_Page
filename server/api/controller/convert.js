import fetch from "node-fetch";

import { API_KEY } from "../../config/config.js";

function convert(from, to) {
    const url = `https://free.currconv.com/api/v7/convert?q=${from}_${to}&apiKey=${API_KEY}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve({ message: "success", data: data }))
            .catch((err) =>
                reject({ message: "Some erroe occured", error: err })
            );
    });
}

export default convert;
