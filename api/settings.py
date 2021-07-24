import os

REACT_APP_CONTENT_ENDPOINT = os.environ.get('REACT_APP_CONTENT_ENDPOINT', '')

if 'localhost' in REACT_APP_CONTENT_ENDPOINT:
    SPA_ORIGIN = 'http://localhost:3000'
else:
    SPA_ORIGIN = 'https://image-scraper-503eb.web.app'
