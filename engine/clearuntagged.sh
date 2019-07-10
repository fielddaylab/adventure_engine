#!/bin/bash

# I'm not sure what this was for?
# it might be that some in-javascript scrubber of dead objects (objects w/o accessible path) get marked as "tagged" via the editor.

for i in `find ../assets/data -name '*.meta' | grep "/speaks/[^/]*\.meta" | xargs` `find ../assets/data -name '*.meta' | grep "/options/[^/]*\.meta" | xargs`; do
  if [ "@`grep "TAGGED" $i`" == "@" ]; then
    rm $i
    rm -rf `echo $i | sed 's/.meta//'`
  fi
done

