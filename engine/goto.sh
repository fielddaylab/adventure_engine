#!/bin/bash

# changes directory to location of search type + name
# NOTE- prefix with '. ' (sources results so main shell actually cd's)
# example: . ./goto.sh room entry

cd $(./folderfrom.sh $1 `./fqid.sh $1 $2`)

