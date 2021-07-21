import axios from "axios";

export const fetchPage = async (query) => {
    const url = `http://localhost:4000/get_page_content?page_url=${query}`
    let data, status, response
    try {
        response = await axios.get(url);
    } catch (error) {
        response = error.response
    }

    data = response.data
    status = response.status
    return { pageContent: data, status };
}


export const extractPageUrl = (urlString) => {
    const regExp = /\{([^)]+)\}/;
    const match = regExp.exec(urlString);

    return match[1]
}