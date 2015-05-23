var hundredDays = {};

// This is the API call part of the function
hundredDays.api = function(yourUniqueTag, accessTOKEN){
	var clientID = 'e6e756c20e004c0c90f0a99f46d43c09';
	$.ajax({
		type: 'GET',
		// This is the link you have to give IG to make an API Call
		// + yourUniqueTag user enters, which searches through media -> recent
		// And then using your uniquely generated accessTOKEN
		// The API pulls all related tags, up to 100
		// User can increase '&count=' string if they're keeners and have 100+
		url: 'https://api.instagram.com/v1/tags/' + yourUniqueTag + '/media/recent/?access_token=' + accessTOKEN + '&count=100',
		dataType: 'jsonp',
		success: function(resp){
			// When function is run, the API results are returned here
			console.log(resp)
			hundredDays.counter(resp)
			hundredDays.img(resp);
			hundredDays.likes(resp);
			hundredDays.captions(resp);
			hundredDays.url(resp)
		}
	}) // End of AJAX 
} // End of hundredDays.api method

hundredDays.counter = function(count){
	var numb = count.data.length;
	console.log(numb)
	// var $countdown = $('<p class="counter">').text(numb);
	$('.counter').text(numb + " of 100 days down!")
	// var $counter = $('section.gallery').append($countdown);
	// $('.counter').before('ul.gallery')
};

hundredDays.img = function(imgData){
	var items = imgData.data;
	$.each(items, function(key, value) {
		var thumb = value.images.thumbnail.url;
		var standard = value.images.standard_resolution.url;
		var hyperlink = value.link;
		var likes = value.likes.count;
		var caption = value.caption.text;
		// console.log(standard);
		// var $thumb = $('<li>').attr('src', thumb);
		var $image = $('<img>').attr('src', standard);
		var $hearts = $('<p class="likes">').html('<i class="fa fa-heart-o">').text(likes);
		// var $heartIcon = $('<p class="likes">').html('<i class="fa fa-heart-o">');
		var $cap = $('<p class="captions">').text(caption);
		var $link = $('<a>').attr('href', hyperlink).attr('target', '_blank').append($image);
		var $fullSize = $('<li class="insta">').append($link).append($hearts).append($cap);
		$('ul.gallery').append($fullSize);
	})
};

hundredDays.likes = function(imgData){
	var items = imgData.data;
	$.each(items, function(key, value){
		var $likeCount = $('<p class="likes">').text(likes);
		var $hearts =$('p.likes').html('<i class="fa fa-heart-o">');
		$('ul.gallery').append($hearts, $likeCount);
	})
};


$(function(){
	hundredDays.api('100DaysCLBC', '1484007492.1677ed0.58bc2427ef174f86b431e0dbc98e3efa');
	// console.log(hundredDays.api());
});

