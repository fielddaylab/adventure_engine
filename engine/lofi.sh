#!/bin/bash

# resizes animcycles into lofi directory

cd ../assets/data/levels/main

for i in animcycles/*; do
  if [ -d $i ]; then
    if [ ! -d `echo $i | sed 's/animcycles/lofianimcycles/'` ]; then
      mkdir `echo $i | sed 's/animcycles/lofianimcycles/'`
    fi
    for j in $i/*; do
      echo $j...
      convert $j -resize %50 `echo $j | sed 's/animcycles/lofianimcycles/'`
    done
  fi
done

