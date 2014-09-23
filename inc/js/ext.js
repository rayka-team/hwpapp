$(function(){

/// SET Cache 
function set_catch(name,data){
	window.localStorage.setItem(name,data);
	}	


/// GET Cache 
function get_catch(name){
	return window.localStorage.getItem(name);
	}
	
	
function location(links){
	window.location.assign(links);
	}
	
	
	
	
set_catch('notification','5');		
var notification = get_catch('notification');
if(notification!==""){
	$('.notification').html('<span>'+notification+'</span><i class="fa fa-bell fa-2x"></i>');
	}
//$('body').html(data);	



$('li[data-link]').click(function(){
	var links=$(this).attr('data-link');
	location(links);
	});


$('li[data-readmore]').click(function(){
	var links=$(this).attr('data-readmore');
	location(links);
	});








/* Light BOX ==================*/
$('.skip').click(function(){$('#LightBox').fadeOut("fast");});
/*==================================================================*/


function newpost(){
var url = 'http://localhost/wp/?json=1';
$.getJSON(url, function (json) {
var rayka=json.posts;	
	
rayka.forEach(function(obj) { 
//$('#thelist').append('<a href="rm.php?'+obj.id+'" data-pid="'+obj.id+'">'+obj.title+'</a><br>');
  //$('#thelist').append('<li><img src="'+obj.thumbnail+'"><h2>'+obj.title+'</h2></li>');
	//$('#amir').html(obj.id);

 });

});	
	
	}









	
	
	
});

















































