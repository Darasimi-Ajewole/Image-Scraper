export REACT_APP_CONTENT_ENDPOINT=https://us-central1-open-source-320820.cloudfunctions.net/image-scraper/get_page_content

yarn build && yarn deploy &

cd api
gcloud functions deploy image-scraper \
 --entry-point main \
 --runtime python39 \
 --trigger-http \
 --allow-unauthenticated \
 --update-env-vars REACT_APP_CONTENT_ENDPOINT=$REACT_APP_CONTENT_ENDPOINT  &
wait

echo 'Deployment successfully completed'