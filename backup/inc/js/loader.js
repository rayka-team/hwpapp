
	












var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

function pullDownAction () {
	// Function refresh
	
	// paging Function refresh
		/*var url = 'http://www.hamyarwp.com/?json=1';
		$.getJSON(url, function (json) {
		var rayka=json.posts;	
			
		rayka.forEach(function(obj) { 
		//$('#thelist').append('<a href="rm.php?'+obj.id+'" data-pid="'+obj.id+'">'+obj.title+'</a><br>');
		  $('#thelist').prepend('<li><a href="content.htm?'+obj.id+'"><img src="'+obj.thumbnail_images+'"></a></li>');
			//$('#amir').html(obj.id);
		
		 });
	myScroll.refresh();
		});	*/	
			
myScroll.refresh();
}

function pullUpAction () {
	// paging Function refresh
		/*var url = 'http://www.hamyarwp.com/?json=1';
		$.getJSON(url, function (json) {
		var rayka=json.posts;	
			
		rayka.forEach(function(obj) { 
		//$('#thelist').append('<a href="rm.php?'+obj.id+'" data-pid="'+obj.id+'">'+obj.title+'</a><br>');
		  $('#thelist').append('<li><a href="content.htm?'+obj.id+'"><img src="'+obj.thumbnail_images+'"></a></li>');
			//$('#amir').html(obj.id);
		
		 });
		 myScroll.refresh();
		
		});	*/	
myScroll.refresh();
}

function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll = new iScroll('wrapper', {
		useTransition: true,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
			}
		},
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';				
				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});
	
	setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);








	// paging Function refresh
   /* var query_cache = JSON.parse(localStorage.getItem('query_cache'));
		query_cache.forEach(function(obj) { 
		  $('#thelist').prepend('<li><a href="content.htm?'+obj.id+'"><img src="'+obj.thumbnail_images+'"></a></li>');
		 });
		myScroll.refresh();*/


