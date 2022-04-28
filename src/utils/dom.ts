import axios from "axios";
import { AxiosResponse } from "axios";

export const fetchPage = async (query: string): Promise<{pageContent: string, status: number}> => {
    const url: string = `${process.env.REACT_APP_CONTENT_ENDPOINT}?page_url=${query}`
    let data: string, status: number, response: AxiosResponse
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


export const extractPageUrl = (urlString: string): string => {
    const regExp: RegExp = /\{([^)]+)\}/;
    const match = regExp.exec(urlString);

    return match[1]
}