
// This gets prepended to compiled data

var levels = [];

var tmp_animcycle;
var tmp_audio;
var tmp_entry;
var tmp_level;
var tmp_scene;
var tmp_room;
var tmp_cutscene;
var tmp_person;
var tmp_speak;
var tmp_option;
var tmp_object;
var tmp_observation;
var tmp_view;
var tmp_zone;
var tmp_porthole;
var tmp_wildcard;
var tmp_inert;

var init_levels = function()
{

tmp_level = new level();
tmp_level.id = "main";
tmp_level.fqid = "main";
{
tmp_level.primary = true;
tmp_level.intro_room_id = "tunic.historicalsociety.closet";
tmp_level.avatar_walk_animcycle_id = "avatar_walk";
tmp_level.avatar_idle_animcycle_id = "avatar_idle";
tmp_level.avatar_act_animcycle_id = "avatar_act";
tmp_level.avatar_ww = 124.2914274419755;
tmp_level.avatar_wh = 227.189352938386;
tmp_level.familiar_walk_animcycle_id = "teddy_walk";
tmp_level.familiar_idle_animcycle_id = "teddy_idle";
tmp_level.familiar_act_animcycle_id = "teddy_idle";
tmp_level.familiar_ww = 153;
tmp_level.familiar_wh = 90;
tmp_level.familiar_off_wx = 0;
tmp_level.familiar_off_wy = -80;
tmp_level.exit_animcycle_id = "exit";
tmp_level.toolbar_animcycle_id = "null";
tmp_level.toolbar_audio_id = "null";
tmp_level.map_animcycle_id = "map";
tmp_level.map_audio_id = "map_open";
tmp_level.notebook_animcycle_id = "notebook";
tmp_level.notebook_audio_id = "notebook_open";
tmp_level.notebook_turn_audio_id = "notebook_turn";
tmp_level.notebook_next_animcycle_id = "notebook_next";
tmp_level.notebook_prev_animcycle_id = "notebook_prev";
tmp_level.icon_map_animcycle_id = "icon_map";
tmp_level.icon_notebook_animcycle_id = "icon_notebook";
tmp_level.ui_hover_animcycle_id = "hover_ui";
tmp_level.ripple_click_animcycle_id = "click_ripple";
tmp_level.loading_animcycle_ids = [
];
tmp_level.loading_animcycle_reqs = [
];
tmp_level.deck_animcycle_ids = [
];
tmp_level.stack_animcycle_t = 100;
tmp_level.cursor_w = 27;
tmp_level.cursor_h = 31;
tmp_level.hover_w = 56;
tmp_level.hover_h = 56;
tmp_level.notifications_w = 200;
tmp_level.notifications_h = 30;
tmp_level.target_lerp_s = 0.03;
tmp_level.notifications_persistent = 0;
tmp_level.raw_notifications = [
];
tmp_level.raw_notification_ws = [
];
tmp_level.notification_reqs = [[
]];
tmp_level.reqs = [[
]];
tmp_level.notebook_reqs = [[
"tunic.historicalsociety.closet.notebook",
]];
tmp_level.map_reqs = [[
]];
tmp_level.familiar_reqs = [[
"tunic.historicalsociety.cage.unlockdoor",
]];

tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist";
tmp_animcycle.fqid = "main.archivist";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 40;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/archivist/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/archivist/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/archivist/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/archivist/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/archivist/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_act";
tmp_animcycle.fqid = "main.avatar_act";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_act/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_happy";
tmp_animcycle.fqid = "main.avatar_happy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_happy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_idle";
tmp_animcycle.fqid = "main.avatar_idle";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 30;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;
tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_idle/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_idle/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_idle/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_idle/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_idle/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_walk";
tmp_animcycle.fqid = "main.avatar_walk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 5;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/8.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/9.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/10.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/avatar_walk/11.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "badge_0";
tmp_animcycle.fqid = "main.badge_0";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/badge_0/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "bg";
tmp_animcycle.fqid = "main.bg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/bg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "black";
tmp_animcycle.fqid = "main.black";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/black/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "chapter1";
tmp_animcycle.fqid = "main.chapter1";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/chapter1/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "chapterfin";
tmp_animcycle.fqid = "main.chapterfin";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/chapterfin/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "click_ripple";
tmp_animcycle.fqid = "main.click_ripple";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 3;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/click_ripple/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/click_ripple/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/click_ripple/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/click_ripple/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/click_ripple/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "colorbook_img";
tmp_animcycle.fqid = "main.colorbook_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/colorbook_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "door";
tmp_animcycle.fqid = "main.door";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/door/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_x_img";
tmp_animcycle.fqid = "main.entry_x_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/entry_x_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "exit";
tmp_animcycle.fqid = "main.exit";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/exit/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fg";
tmp_animcycle.fqid = "main.fg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/fg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fuzzy";
tmp_animcycle.fqid = "main.fuzzy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/fuzzy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hblip_door";
tmp_animcycle.fqid = "main.hblip_door";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/hblip_door/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hblip_interact";
tmp_animcycle.fqid = "main.hblip_interact";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/hblip_interact/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hblip_person";
tmp_animcycle.fqid = "main.hblip_person";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/hblip_person/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_ui";
tmp_animcycle.fqid = "main.hover_ui";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/hover_ui/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "icon_map";
tmp_animcycle.fqid = "main.icon_map";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/icon_map/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "icon_notebook";
tmp_animcycle.fqid = "main.icon_notebook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/icon_notebook/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "logbook";
tmp_animcycle.fqid = "main.logbook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/logbook/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "logbook_front";
tmp_animcycle.fqid = "main.logbook_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/logbook_front/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "map";
tmp_animcycle.fqid = "main.map";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/map/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "nextarrow";
tmp_animcycle.fqid = "main.nextarrow";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/nextarrow/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook";
tmp_animcycle.fqid = "main.notebook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/notebook/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook_baked";
tmp_animcycle.fqid = "main.notebook_baked";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/notebook_baked/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook_next";
tmp_animcycle.fqid = "main.notebook_next";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/notebook_next/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook_object";
tmp_animcycle.fqid = "main.notebook_object";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/notebook_object/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook_prev";
tmp_animcycle.fqid = "main.notebook_prev";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/notebook_prev/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notice";
tmp_animcycle.fqid = "main.notice";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/notice/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "null";
tmp_animcycle.fqid = "main.null";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/null/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "plaque";
tmp_animcycle.fqid = "main.plaque";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/plaque/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "toolbar";
tmp_animcycle.fqid = "main.toolbar";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;
tmp_animcycle.loop = 1;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/main/animcycles/toolbar/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
for(var i = 0; i < tmp_level.animcycles.length; i++)
if(tmp_level.animcycles[i].id == "null") null_animcycle = tmp_level.animcycles[i];
tmp_audio = new audio();
tmp_audio.id = "clue";
tmp_audio.fqid = "main.clue";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/clue.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "door";
tmp_audio.fqid = "main.door";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/door.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "map_open";
tmp_audio.fqid = "main.map_open";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/map_open.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "music_challenge";
tmp_audio.fqid = "main.music_challenge";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/music_challenge.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "music_close_inspect";
tmp_audio.fqid = "main.music_close_inspect";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/music_close_inspect.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "music_main";
tmp_audio.fqid = "main.music_main";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/music_main.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "music_win";
tmp_audio.fqid = "main.music_win";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/music_win.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "notebook_open";
tmp_audio.fqid = "main.notebook_open";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/notebook_open.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "notebook_turn";
tmp_audio.fqid = "main.notebook_turn";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/notebook_turn.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "null";
tmp_audio.fqid = "main.null";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/null.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "stairs";
tmp_audio.fqid = "main.stairs";
{
tmp_audio.aud = GenAudio("assets/data/levels/main/audios/stairs.mp3");
}
tmp_level.audios.push(tmp_audio);
for(var i = 0; i < tmp_level.audios.length; i++)
if(tmp_level.audios[i].id == "null") null_audio = tmp_level.audios[i];
tmp_entry = new entry();
tmp_entry.id = "entry_doodle_0";
tmp_entry.fqid = "main.entry_doodle_0";
{
tmp_entry.ww = 141;
tmp_entry.wh = 95.00000000000001;
tmp_entry.wx = 319.5;
tmp_entry.wy = 218.5;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_doodle_0_img";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "null";
tmp_entry.fqid = "main.null";
{
tmp_entry.ww = 116.99999999999996;
tmp_entry.wh = 244.9999999999999;
tmp_entry.wx = -427.50000000000006;
tmp_entry.wy = -206.50000000000006;
tmp_entry.wz = 0;
tmp_entry.page = -1;
tmp_entry.animcycle_id = "null";
tmp_entry.audio_id = "null";
tmp_entry.deck_animcycle_ids = [
];
tmp_entry.notifications_persistent = 0;
tmp_entry.raw_notifications = [
];
tmp_entry.raw_notification_ws = [
];
tmp_entry.notification_reqs = [[
]];
tmp_entry.reqs = [[
]];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_entry.raw_notification_ws[i] ? tmp_entry.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_scene = new scene();
tmp_scene.id = "home";
tmp_scene.fqid = "main.home";
{
tmp_scene.primary = true;
tmp_scene.ww = 99.00000000000007;
tmp_scene.wh = 108.00000000000004;
tmp_scene.wx = 119.49999999999969;
tmp_scene.wy = 143.9999999999999;
tmp_scene.hover_icon_wx = 27;
tmp_scene.hover_icon_wy = 41.99999999999999;
tmp_scene.animcycle_id = "scene_historicalsociety";
tmp_scene.notice_icon_animcycle_id = "notice";
tmp_scene.audio_id = "null";
tmp_scene.deck_animcycle_ids = [
];
tmp_scene.notifications_persistent = 0;
tmp_scene.raw_notifications = [
];
tmp_scene.raw_notification_ws = [
];
tmp_scene.notification_reqs = [[
]];
tmp_scene.notice_reqs = [[
"!self",
]];
tmp_scene.reqs = [[
"!tunic.kohlcenter.halloffame.plaque.face.date",
],[
"tunic.capitol_0.hall.chap1_finale_c",
]];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_scene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_scene.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "main.home.entry";
{
tmp_room.primary = 2;
tmp_room.ww = 2529.910931174089;
tmp_room.wh = 1188;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_entry";
tmp_room.audio_id = "music_main";
tmp_room.deck_animcycle_ids = [
];
tmp_room.cam_wh = 1074.7199999999993;
tmp_room.nav_min_wz = 0.01;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-67.24883533330762, wy:-294.4417025964896, ww:1769.5494376878196, wh:580.1788249790067 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 915.4377020179154;
tmp_room.target_start_wy = -27.33622572459731;
tmp_room.notifications_persistent = 0;
tmp_room.raw_notifications = [
];
tmp_room.raw_notification_ws = [
];
tmp_room.notification_reqs = [[
]];
tmp_room.reqs = [[
]];
//SUGGEST_H:1.8

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "event";
tmp_cutscene.fqid = "main.home.entry.event";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 564.0836363636361;
tmp_cutscene.wh = 492.4356363636362;
tmp_cutscene.wx = 139.27737686620162;
tmp_cutscene.wy = 76.73389603761686;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = 273.2659952420667;
tmp_cutscene.act_wy = -123.79211585084114;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 87.64805366290636;
tmp_cutscene.hover_icon_wy = 213.94686296870225;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_cursor_animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.notice_icon_animcycle_id = "null";
tmp_cutscene.deck_animcycle_ids = [
];
tmp_cutscene.notifications_persistent = 0;
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.raw_notification_ws = [
];
tmp_cutscene.notification_reqs = [[
]];
tmp_cutscene.notice_reqs = [[
]];
tmp_cutscene.reqs = [[
"!self",
]];
tmp_cutscene.commands = [];

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "boss";
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = tmp_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 381.7547005805799;
tmp_cutscene_command.wy = 187.1573211557815;
tmp_cutscene_command.w = 209;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "Let's get started. The Wisconsin Wonders exhibit opens tomorrow!";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 379.4695936905128;
tmp_cutscene_command.wy = 190.17123824516477;
tmp_cutscene_command.w = 132;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "Who wants to investigate the shirt artifact?";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 68.17717596854999;
tmp_cutscene_command.wy = 191.99512175426574;
tmp_cutscene_command.w = 194;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = "emote_wells_annoyed";
tmp_cutscene_command.raw_text = "Well, Leopold here is always losing papers...";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 462.2540030742698;
tmp_cutscene_command.wy = 58.52439750576615;
tmp_cutscene_command.w = 36.39997863769531;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = "emote_jo_angry";
tmp_cutscene_command.raw_text = "Hey!";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -106.52510851414047;
tmp_cutscene_command.wy = 114.45003359764459;
tmp_cutscene_command.w = 194;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = "emote_gramps_sad";
tmp_cutscene_command.raw_text = "It's true, they do keep going missing lately.";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 68.84590253062348;
tmp_cutscene_command.wy = 187.69654863976103;
tmp_cutscene_command.w = 73;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "Ha. Told you so!";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 68.84590243440329;
tmp_cutscene_command.wy = 187.6965486482808;
tmp_cutscene_command.w = 187;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "Besides, I already figured out the shirt.";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 68.84590253062348;
tmp_cutscene_command.wy = 187.69654863976103;
tmp_cutscene_command.w = 160;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "It's a women's basketball jersey!";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "report";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 376.6179628112836;
tmp_cutscene_command.wy = 183.82078605068813;
tmp_cutscene_command.w = 137.60787963867188;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "That settles it.";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 381.67453353982376;
tmp_cutscene_command.wy = 186.84712021924975;
tmp_cutscene_command.w = 244.16775512695312;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "Wells, finish up your report.";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+-1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 385.55016704396337;
tmp_cutscene_command.wy = 189.88402907184692;
tmp_cutscene_command.w = 235;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "Leopold, why don't you help me set up in the Capitol?";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 382.99344406052666;
tmp_cutscene_command.wy = 189.88402907184584;
tmp_cutscene_command.w = 206;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = "emote_boss_frown";
tmp_cutscene_command.raw_text = "We need to talk about that missing paperwork.";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -111.08366877159534;
tmp_cutscene_command.wy = 112.65947051114006;
tmp_cutscene_command.w = 118.33589172363281;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "Will do, Boss.";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -108.24950506374364;
tmp_cutscene_command.wy = 114.27076087215517;
tmp_cutscene_command.w = 168;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.animcycle_id = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "Hey Jo, let's take a look at the shirt!";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ANIMATE;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.animcycle_id = "gramps_walk";
tmp_cutscene_command.deck_animcycle_ids = [
];
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+30;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -176.53309090909076;
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+1;
tmp_cutscene_command.end_t = tmp_cutscene_command.t+1;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "tocollection";
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+0;
tmp_cutscene_command.end_t = tmp_cutscene_command.t+199;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_prev_cutscene_command = tmp_cutscene_command;
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = tmp_prev_cutscene_command.t+200;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_cutscene.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_cutscene.raw_notification_ws[i] ? tmp_cutscene.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "npc";
tmp_person.fqid = "main.home.entry.npc";
{
tmp_person.ww = 176.53309090909076;
tmp_person.wh = 300.2887272727274;
tmp_person.wx = -57.16530107597346;
tmp_person.wy = -25.386355909718844;
tmp_person.wz = 0.1;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 87.93163636363631;
tmp_person.hover_icon_wy = 180.74836363636354;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_cursor_animcycle_id = "hover_ui";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.notice_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.deck_animcycle_ids = [
];
tmp_person.notifications_persistent = 0;
tmp_person.raw_notifications = [
];
tmp_person.raw_notification_ws = [
];
tmp_person.notice_reqs = [[
]];
tmp_person.notification_reqs = [[
]];
tmp_person.reqs = [[
"!main.home.entry.event",
]];

if(tmp_person.ww < 0) { tmp_person.ww *= -1; tmp_person.flip = 1; }
tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_person.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_person.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_person.notice_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_person.raw_notification_ws[i] ? tmp_person.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "main.home.entry.npc.hub";
{
tmp_speak.primary = false;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.notifications_persistent = 0;
tmp_speak.raw_notifications = [
];
tmp_speak.raw_notification_ws = [
];
tmp_speak.notification_reqs = [[
]];
tmp_speak.reqs = [[
]];

tmp_speak_command = new speak_command();
tmp_speak_command.wx = 100;
tmp_speak_command.wy = 100;
tmp_speak_command.w = 36.759979248046875;
tmp_speak_command.h = 30;
tmp_speak_command.animcycle_id = "null";
tmp_speak_command.audio_id = "null";
tmp_speak_command.deck_animcycle_ids = [
];
tmp_speak_command.raw_atext = "null";
tmp_speak_command.speaker = SPEAKER_PERSON;
tmp_speak.commands.push(tmp_speak_command);

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_speak.commands.length; i++) tmp_speak.commands[i].atext = stextToLines(tmp_speak.commands[i].raw_atext, tmp_speak.commands[i].w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_speak.raw_notification_ws[i] ? tmp_speak.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "thing";
tmp_object.fqid = "main.home.entry.thing";
{
tmp_object.ww = 357.2803045251266;
tmp_object.wh = 192.81671772629895;
tmp_object.wx = -403.4991472698001;
tmp_object.wy = 241.93551271086807;
tmp_object.wz = 0;
tmp_object.act_wx = 87.93163636363631;
tmp_object.act_wy = -236.11272727272706;
tmp_object.act_anim = 0;
tmp_object.hover_icon_wx = 127.01230366574451;
tmp_object.hover_icon_wy = 91.18836402425126;
tmp_object.animcycle_id = "null";
tmp_object.hover_cursor_animcycle_id = "hover_ui";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.notice_icon_animcycle_id = "null";
tmp_object.view_overlay_animcycle_id = "clueoverlay_glasses";
tmp_object.audio_id = "null";
tmp_object.deck_animcycle_ids = [
];
tmp_object.notifications_persistent = 0;
tmp_object.raw_notifications = [
];
tmp_object.raw_notification_ws = [
];
tmp_object.notification_reqs = [[
]];
tmp_object.view_overlay_reqs = [[
"main.home.cage.glasses.afterteddy",
"!main.home.entry.directory.closeup.archivist",
]];
tmp_object.notice_reqs = [[
]];
tmp_object.reqs = [[
]];

if(tmp_object.ww < 0) { tmp_object.ww *= -1; tmp_object.flip = 1; }
tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_object.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_object.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_object.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_object.view_overlay_animcycle_inst = gen_animcycle_inst(tmp_object.view_overlay_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_object.raw_notification_ws[i] ? tmp_object.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "closeup";
tmp_view.fqid = "main.home.entry.thing.closeup";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "directory_closeup";
tmp_view.magnify = false;
tmp_view.audio_id = "null";
tmp_view.deck_animcycle_ids = [
];
tmp_view.notifications_persistent = 0;
tmp_view.raw_notifications = [
];
tmp_view.raw_notification_ws = [
];
tmp_view.notification_reqs = [[
]];
tmp_view.exit_reqs = [[
]];
tmp_view.reqs = [[
]];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_view.raw_notification_ws[i] ? tmp_view.raw_notification_ws[i] : tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "archivist";
tmp_zone.fqid = "main.home.entry.thing.closeup.archivist";
{
tmp_zone.ww = 197;
tmp_zone.wh = 136.00000000000003;
tmp_zone.wx = -8.500000000000043;
tmp_zone.wy = -222;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.deck_animcycle_ids = [
];
tmp_zone.target_view = "closeup";
tmp_zone.notifications_persistent = 0;
tmp_zone.raw_notifications = [
"Those are the same glasses!",
"The archivist must've taken Teddy!",
];
tmp_zone.raw_notification_ws = [
243.27980041503906,
305.00775146484375,
];
tmp_zone.notification_reqs = [[
]];
tmp_zone.reqs = [[
"tunic.historicalsociety.cage.glasses.afterteddy",
]];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_zone.raw_notification_ws[i] ? tmp_zone.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_observation = new observation();
tmp_observation.id = "block";
tmp_observation.fqid = "main.home.entry.block";
{
tmp_observation.ww = 224.87620708397372;
tmp_observation.wh = 623.2132295249676;
tmp_observation.wx = 936.5041170754102;
tmp_observation.wy = 79.56918817261794;
tmp_observation.wz = 2;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_cursor_animcycle_id = "hover_ui";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.notice_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.deck_animcycle_ids = [
];
tmp_observation.raw_text = "I should see what Gramps is up to!";
tmp_observation.blip_wx = 514.2486023506824;
tmp_observation.blip_wy = 241.29371071991753;
tmp_observation.blip_w = 160;
tmp_observation.blip_h = 30;
tmp_observation.notifications_persistent = 0;
tmp_observation.raw_notifications = [
];
tmp_observation.raw_notification_ws = [
];
tmp_observation.notice_reqs = [[
]];
tmp_observation.notification_reqs = [[
]];
tmp_observation.reqs = [[
"!main.home.entry.event",
]];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.notice_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_observation.raw_notification_ws[i] ? tmp_observation.raw_notification_ws[i] : tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "main.home.entry.tomap";
{
tmp_porthole.ww = 200.8052913823572;
tmp_porthole.wh = 595.6530910614567;
tmp_porthole.wx = 933.5624009371168;
tmp_porthole.wy = 82.07800314346377;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_cursor_animcycle_id = "hover_ui";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.notice_icon_animcycle_id = "null";
tmp_porthole.audio_id = "null";
tmp_porthole.deck_animcycle_ids = [
];
tmp_porthole.target_room = "null";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.notifications_persistent = 0;
tmp_porthole.raw_notifications = [
];
tmp_porthole.raw_notification_ws = [
];
tmp_porthole.notification_reqs = [[
]];
tmp_porthole.notice_reqs = [[
]];
tmp_porthole.reqs = [[
]];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_cursor_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_cursor_animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_porthole.notice_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.notice_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fgdust";
tmp_inert.fqid = "main.home.entry.fgdust";
{
tmp_inert.ww = 1179.5969842368888;
tmp_inert.wh = 334.48455629843863;
tmp_inert.wx = -376.7094034420604;
tmp_inert.wy = 249.799638297336;
tmp_inert.wz = 0;
tmp_inert.g = 0.3;
tmp_inert.animcycle_id = "fgdust";
tmp_inert.deck_animcycle_ids = [
];
tmp_inert.reqs = [[
]];

if(tmp_inert.ww < 0) { tmp_inert.ww *= -1; tmp_inert.flip = 1; }
tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
}
levels.push(tmp_level);
// This gets appended to compiled data

  for(var i = 0; i < levels.length; i++)
  {
    tmp_level = levels[i];
    for(var j = 0; j < tmp_level.scenes.length; j++)
    {
      tmp_scene = tmp_level.scenes[j];
      for(var k = 0; k < tmp_scene.rooms.length; k++)
      {
        tmp_room = tmp_scene.rooms[k];
        tmp_room.nav_min_wz_wy = -99999;
        tmp_room.nav_max_wz_wy =  99999;
        for(var l = 0; l < tmp_room.navs.length; l++)
        {
          var tmp_nav = tmp_room.navs[l]
          if(tmp_nav.wy+tmp_nav.wh/2 > tmp_room.nav_min_wz_wy) tmp_room.nav_min_wz_wy = tmp_nav.wy+tmp_nav.wh/2;
          if(tmp_nav.wy-tmp_nav.wh/2 < tmp_room.nav_max_wz_wy) tmp_room.nav_max_wz_wy = tmp_nav.wy-tmp_nav.wh/2;
        }
        for(var l = 0; l < tmp_room.portholes.length; l++)
        {
          tmp_porthole = tmp_room.portholes[l];
          var id = tmp_scene.fqid+"."+tmp_porthole.target_room;
          var target_room = find(id);
          tmp_porthole.target_room_found = target_room;
          if(target_room) target_room.entry_portholes_found.push(tmp_porthole);
        }
        for(var l = 0; l < tmp_room.persons.length; l++)
        {
          tmp_person = tmp_room.persons[l];
          for(var m = 0; m < tmp_person.speaks.length; m++)
          {
            tmp_speak = tmp_person.speaks[m];
            for(var n = 0; n < tmp_speak.options.length; n++)
            {
              tmp_option = tmp_speak.options[n];
              var id = tmp_person.fqid+"."+tmp_option.target_speak;
              var target_speak = find(id);
              tmp_option.target_speak_found = target_speak;
            }
          }
        }
      }
    }
  }
}

