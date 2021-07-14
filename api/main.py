from flask import Flask, request, make_response
from page import get_page_content


app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/get_page_content')
def scrape_world():
    resp = make_response(get_page_content(request))
     # TODO: Change this to only valid urls
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000, debug=True)
