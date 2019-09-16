$(document).ready(function() {
	// sidebar current menu active jquery
	// ===================================

	$(".sidebar__wrapper ul li").click(function(e) {
		e.preventDefault();
		let tab_id = $(this).attr("data-tab");
		$(".sidebar__wrapper ul li").removeClass("current");
		$(this).addClass("current");
		$("#" + tab_id).addClass("current");
	});

	// sidebar submenu toggle jquery
	// ==============================
	// $("a.sidebar__sub__mneu").click(function(e) {
	// 	e.preventDefault();
	// 	$(this)
	// 		.parent()
	// 		.children("ul.sidebar__sub__menu__section")
	// 		.toggle("slow");
	// });
	// $(function() {
	// 	$("a.sidebar__sub__mneu")
	// 		.parent()
	// 		.children("ul.sidebar__sub__menu__section")
	// 		.toggle("slow");
	// });
});
