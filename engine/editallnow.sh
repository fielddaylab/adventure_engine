#!/bin/bash

# edits all objects of a given type (w/o confirmation)

$EDITOR `find ../assets/data -name '*.meta' | grep "/$1/[^/]*\.meta" | xargs`

