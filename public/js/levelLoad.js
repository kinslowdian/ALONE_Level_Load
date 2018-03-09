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
	displayList.lib.innerHTML = '<object type="text/html" data="public/data/lib.html"></object>';

	test();
}

function test()
{
	let test_div = document.querySelector(".lib .lib_level1");

	trace(test_div);
}

