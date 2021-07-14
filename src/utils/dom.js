import axios from "axios";

export const fetchPage = async (query) => {
    const url = `http://localhost:4000/get_page_content?page_url=${query}`
    const { data, status } = await axios.get(url);
    // TODO: Handle Errors
    // 
    return { pageContent: data, status };
}

export const extractPageUrl = (urlString) => {
    const regExp = /\{([^)]+)\}/;
    const match = regExp.exec(urlString);
    return match[1]
}