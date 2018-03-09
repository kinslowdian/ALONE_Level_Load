// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;

var level_upgrade_to;

function pageLoad_init()
{
	trace("pageLoad_init();");

	setup();
}

function setup()
{
	displayList = {};
	displayList.levelHolderData = document.querySelector(".level-holder .data");
	displayList.levelHolderWipe = document.querySelector(".level-holder .wipe");
	displayList.lib = document.querySelector(".lib");

	lib_load();
}

function lib_load()
{
	load_ext_data("public/data/lib.html", lib_load_loaded, false);
}

function lib_load_loaded(data)
{
	displayList.lib.innerHTML = data;

	level_push(0);

	tool_test(1);
}

function level_push(num)
{
	let lev_html = displayList.lib.querySelector('.lib_level' + num).outerHTML;

	displayList.levelHolderData.innerHTML = lev_html;

	displayList.levelHolderWipe.classList.add("wipe-none");
}

function tool_test(num)
{
	let delay = setTimeout(level_change_init, 4 * 1000, num);
}

function level_change_init(num)
{
	displayList.levelHolderWipe.addEventListener("transitionend", level_change, false);	

	level_upgrade_to = num;

	displayList.levelHolderWipe.classList.remove("wipe-none");
}

function level_change(event)
{
	displayList.levelHolderWipe.removeEventListener("transitionend", level_change, false);

	level_push(level_upgrade_to);
}

