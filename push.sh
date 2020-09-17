#!/bin/bash

echo "-------tart-----------"
git add .
git commit -m $1
git push
echo "--------done------------"