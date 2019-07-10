#!/bin/bash

# uses gen_data.sh to consistently append a named template object to the data heirarchy
# example: ./add.sh room main.home.bedroom
# (adds a room with fqid main.home.bedroom)

./gen_data.sh autofix nogen gen$1 $2

