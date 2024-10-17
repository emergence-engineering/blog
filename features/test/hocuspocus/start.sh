#!/bin/bash
if [[ -n "${REQUIRED_SERVICE_URL}" ]]; then
  echo "API check url: ${REQUIRED_SERVICE_URL}"
  while [[ $(curl -s -o /dev/null -w '%{http_code}' "$REQUIRED_SERVICE_URL") != "200" ]];
  do
    echo "Waiting for REQUIRED_SERVICE_URL to be started..."
    sleep 3;
  done
fi

echo "Starting hocuspocus..."
node index.js
