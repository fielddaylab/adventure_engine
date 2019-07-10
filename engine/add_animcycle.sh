#!/bin/bash

# uses gen_data.sh to consistently append an animcycle to the data heirarchy
# example: ./add_animcycle.sh character_walk
# (adds an animcycle with fqid main.character_walk)
# note: auto-prefixes fqid with hard coded main level fqid

./gen_data.sh autofix nogen genanimcycle main.$1

