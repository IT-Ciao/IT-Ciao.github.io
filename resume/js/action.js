var getURLVariable = function (keyword){
	var path = decodeURI(window.location.toString());
	if(path.match(keyword)){
		var variable = path.split(keyword+"=")[1];
		if(variable.match("&"))	variable = variable.split("&")[0];
		return variable;
	}
	else{
		return "home";
	}
}

$(function(){
	var page = getURLVariable("page");

	//load nav
	$("#nav").load("part/nav.html",function(){
		$(".nav-list a[href*="+page+"]").parent("li").addClass("active");
	});
	
	//page controller
	switch(page){
		case "home":
			$("#loadPage").load("page/home.html");
			break;

		case "info":
			$("#loadPage").load("page/info.html");
			break;

		case "specialty":
			$("#loadPage").load("page/specialty.html");
			break;

		case "development":
			$("#loadPage").load("page/development.html");

		default :
			$("#loadPage").load("page/error.html");
			break;
	}


	//click nav toggle button
	$("body").on("click",".nav-button",function(){
		$(this).toggleClass("open");
		if($(this).hasClass("open")){
			$(".nav-button i").removeClass("fa-bars").addClass("fa-chevron-up");
			$(".nav-list").show();
		}
		else{
			$(".nav-button i").removeClass("fa-chevron-up").addClass("fa-bars");
			$(".nav-list").hide();
		}
	});
});