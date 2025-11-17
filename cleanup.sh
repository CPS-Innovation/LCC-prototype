#!/bin/bash

echo "Cleaning duplicate Finder files..."
find . \
  -type f \
  \( -name "* 2.*" -o -name "* 3.*" -o -name "* 4.*" -o -name "* copy 2.*" -o -name "* copy 3.*" -o -name "* copy 4.*" \) \
  -delete

echo "Removing .DS_Store files..."
find . -name ".DS_Store" -delete

echo "Repo cleaned. ✔️"