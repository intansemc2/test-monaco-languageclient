#!/bin/bash
echo "> Active environments ..."
source ./.venv/bin/activate

echo "> Start server at port 3000..."
pylsp --ws --port 3000

