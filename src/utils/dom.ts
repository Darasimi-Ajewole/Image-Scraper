import axios, { AxiosError } from "axios";
import { AxiosResponse } from "axios";

export const fetchPage = async (query: string): Promise<{pageContent: string, status: number}> => {
    const url: string = `${process.env.REACT_APP_CONTENT_ENDPOINT}?page_url=${query}`
    let data: string, status: number, response: AxiosResponse|undefined
    try {
        response = await axios.get(url);
    } catch (error) {
        const errorResponse = error as AxiosError
        response = errorResponse?.response;
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
    const url = ((match && match[1]) || '') as string
    return url
}