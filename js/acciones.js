// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btnbiografia').on('click', function (){
		//alert('Hola');
		$('body').pagecontainer("change","#biografia",
		{transition:"flip"});
	});// click btndatos
	
	$('#btnimagenpublica').on('click', function (){
		//alert('Hola');
		$('body').pagecontainer("change","#imagenpublica",
		{transition:"flip"});
	});// click btndatos
	
	$('#btnestilomusical').on('click', function (){
		//alert('Hola');
		$('body').pagecontainer("change","#estilomusical",
		{transition:"flip"});
	});// click btndatos
	
	$('#btnsida').on('click', function (){
		//alert('Hola');
		$('body').pagecontainer("change","#luchasida",
		{transition:"flip"});
	});// click btndatos
	
	$('#btnmonster').on('click', function (){
		//alert('Hola');
		$('body').pagecontainer("change","#themonster",
		{transition:"flip"});
	});// click btndatos
//}); 
});

