#!/bin/bash

# edit via fqid rather than directory position

FILE="`./filefrom.sh $@`"
$EDITOR $FILE

