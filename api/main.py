import logging
from requests import get
from requests.exceptions import (SSLError, Timeout, ConnectTimeout,
                                 ReadTimeout, ConnectionError,
                                 ChunkedEncodingError, ContentDecodingError,
                                 TooManyRedirects, MissingSchema,
                                 InvalidSchema, InvalidURL, URLRequired)
from flask import make_response
from settings import SPA_ORIGIN


def main(request):

    resp = make_response(get_page_content(request))
    resp.headers['Access-Control-Allow-Origin'] = SPA_ORIGIN
    return resp


def get_page_content(request):
    page_url = request.args.get('page_url')
    try:
        response = get(page_url, timeout=15)
        if response.ok:
            return response.content, response.status_code
        return response.reason, response.status_code

    except SSLError:
        return 'SSL error encountered on scraping url', 400

    except (Timeout, ConnectTimeout, ReadTimeout):
        return 'Operation timed out, Please try again', 408

    except (ConnectionError, ChunkedEncodingError,
            ContentDecodingError, TooManyRedirects) as e:
        logging.error(e)
        return 'Unable to read content of url', 422

    except (MissingSchema, InvalidSchema, InvalidURL, URLRequired):
        return 'Invalid URL, Kindly check and correct', 400

    except Exception as e:
        logging.error(e)
        return 'Internal Server error', 500
