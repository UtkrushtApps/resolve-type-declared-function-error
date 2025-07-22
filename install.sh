#!/bin/bash
set -e

if [ ! -d "node_modules" ]; then
  echo "Installing npm dependencies..."
  npm install
fi

if [ ! -d "dist" ]; then
  echo "Building TypeScript files..."
  npx tsc
fi

echo "Install completed."
