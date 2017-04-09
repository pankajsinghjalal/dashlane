/* Author: 

*/

$(document).ready(function(){

	/*light house*/
$(".play").click(function(){
$("html").css({'overflow':'hidden'});
$(".modal").css({'display':'block'});
$("video > source").attr('src','https://d38muu3h4xeqr1.cloudfront.net/Dashlane-TooShort.mp4');
$("video")[0].load();
});
$(".modal").click(function(){
	$(this).hide();
	$("html").css({'overflow':'visible'});
});
$("video").click(function(e){
e.stopPropagation();
});

//accordion
var headOne = document.getElementsByClassName("header");
var paraOne = document.getElementsByClassName("faq-paragraph-one");

$(".header-one").click(function(){
	$(".faq-paragraph-one").toggle('slow');
	$(".faq-paragraph-two, .faq-paragraph-three").hide('slow');
});

$(".header-two").click(function(){
	$(".faq-paragraph-two").toggle('slow');
	$(".faq-paragraph-one, .faq-paragraph-three").hide('slow');
});

$(".header-three").click(function(){
	$(".faq-paragraph-three").toggle('slow');
	$(".faq-paragraph-two, .faq-paragraph-one").hide('slow');
});



});





















