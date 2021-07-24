import axios from "axios";

export const fetchPage = async (query) => {
    const url = `${process.env.REACT_APP_CONTENT_ENDPOINT}?page_url=${query}`
    let data, status, response
    try {
        response = await axios.get(url);
    } catch (error) {
        response = error && error.response;
    }

    if (response) {
        data = response.data
        status = response.status
        return { pageContent: data, status };    
    }

    return { pageContent: 'Kindly reload the page and try again', status: 417}

}


export const extractPageUrl = (urlString) => {
    const regExp = /\{([^)]+)\}/;
    const match = regExp.exec(urlString);

    return match[1]
}