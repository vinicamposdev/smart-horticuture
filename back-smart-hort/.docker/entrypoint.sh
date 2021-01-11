#!/bin/bash
cd /home/node/app/back-smart-hort
npm install
sleep 20
yarn typeorm migration:run
npm run dev:server
