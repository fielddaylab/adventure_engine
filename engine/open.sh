#!/bin/bash

# opens in finder data directory of fqid

FOLDER="`./folderfrom.sh $@`"
open $FOLDER

