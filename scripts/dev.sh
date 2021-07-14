#!/bin/bash

terminate(){
  echo 'Killing all Processes.....'
  kill -HUP -$$
}

trap terminate SIGINT EXIT
echo 'Starting Front End Build Server'
BROWSER=none yarn start | cat - &

echo 'Starting API server'
cd api
source venv/bin/activate
python main.py &
wait