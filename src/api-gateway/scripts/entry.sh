#!/bin/bash
./scripts/wait.sh $REDIS_HOST:$REDIS_PORT -t 0
npm run start