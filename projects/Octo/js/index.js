var main = function () {
  	$("header").load("header/header.html");
  	$("footer").load("footer/footer.html");

 //  	var e1 = $("#effect1").offset().top;
 //  	var e2 = $("#effect2").offset().top;
 //  	var e3 = $("#effect3").offset().top;

	// $(document).scroll(function(){
	//     if($(this).scrollTop() > e1)
	//     {   
	//         $('.agencia').addClass("animated fadeInRight");
	//     }
	//     if($(this).scrollTop() > e2)
	//     {   
	//         $('.div-contact').addClass("animated fadeInLeft");
	//     }
	//     if($(this).scrollTop() > e3)
	//     {   
	//         $('.div-contact').addClass("animated fadeInUp");
	//     }
	// });
};

$(document).ready(main);