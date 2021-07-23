yarn install &

cd api
python3 -m venv venv && source venv/bin/activate &&
pip install --upgrade-strategy=only-if-needed -r requirements.txt &

wait