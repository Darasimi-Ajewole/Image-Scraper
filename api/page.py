from requests import get


def get_page_content(request):
    page_url = request.args.get('page_url')
    response = get(page_url)
    return response.content, response.status_code