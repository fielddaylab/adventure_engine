This engine consists of a (heirarchical) data directory (game/assets/data), and a series of simple scripts (game/engine). The scripts are either helpers for consistently modifying the data directory heirarchy, or for compiling the data heirarchy into runnable (non-human-readable) code (game/src/scenes/data.js). The source directory (game/src) "need not be edited" (at least, that is the ideal).

The script which does most of the heavy lifting is gen_data.sh.
Many other scripts simply call gen_data.sh with hard coded arguments (easier to call these than remember all the possible arguments to gen_data, and input them correctly).

### Logging
Each event is comprised of:
1. Event Type (int):
   - click (0)
   - hover (1)
   - checkpoint (2)
   - startgame (3)
   - endgame (4)
2. Type Data (JSON Object)
3. Event Subtype (int):
   - navigate (0)
   - notebook (1)
   - map (2)
   - notification (3)
   - object (4)
   - observation (5)
   - person (6)
   - cutscene (7)
   - wildcard (8) (assessments)
   - basic (9)
4. Subtype Data (JSON Object)
5. Event Name (int) (contained within subtype data):
   - basic  (0) (default name)
   - open (1) (only used for the notebook/map)
   - close (2) (only used for the closeable items)
   - choice (3) (only used for the assessments)
   - next (4) (only used for the notebook)
   - prev (5) (only used for the notebook)
6. room fqid (Fully Qualified ID) (string, or 0 if not applicable e.g. for startgame)
7. id (fqid minus the room fqid) (string, or 0 if not applicable e.g. for startgame)

Data is as follows (none if not listed):
- Click: screen coordinates (int array), room coordinates (int array)
- Hover: start_time (int), end_time (int) (client-side time)
- Startgame: save code (int, 0 if not used), fullscreen mode on/off (bool), music on/off (bool), high quality graphics on/off (bool)
- notebook: page_number (int)
- wildcard: correct (string, the correct answer to the problem), answer (string, the selected answer)

Note: Each element in the game has a unique FQID.

