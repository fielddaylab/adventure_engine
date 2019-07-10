#!/bin/bash

# lists animcycle file sizes ordered by size

du -h ../assets/data/levels/main/animcycles | grep -v meta | sort -n

