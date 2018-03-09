// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;

function pageLoad_init()
{
	trace("pageLoad_init();");

	setup();
}

function setup()
{
	displayList = {};
	displayList.levelHolder = document.querySelector(".level-holder");
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
}

