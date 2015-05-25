	// Don't touch this unless you REALLY need to you control freak! 
var hundredDays = {};

	// This is the API call part of the function
hundredDays.api = function(yourUniqueTag, accessTOKEN){
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
				// This will print the entire returned object to your console. Uncomment if you need it.
			// console.log(resp);
				// This is an optional bit -- you can opt out of the completion counter.
			hundredDays.counter(resp);
				// This one is too, I guess, but then what was the point? Don't touch!
			hundredDays.img(resp);
		}
	}) // End of AJAX 
} // End of hundredDays.api method

	// If you decide to pull the counter ABOVE, then delete this too!
hundredDays.counter = function(count){
	var numb = count.data.length;
	console.log(numb)
	$('.counter').text(numb + " of 100 days down!");
};

	// If you know what you're doing here, you can pick out specific elements you don't want.
	// If you REALLY know what you're doing here, console.log(resp) above, view the returned object in your console,
	// and pick out stuff you want -- the Instagram API is pretty rich with data!
hundredDays.img = function(imgData){
	var items = imgData.data;
	$.each(items, function(key, value) {

		var standard = value.images.standard_resolution.url;
		var hyperlink = value.link;
		var caption = value.caption.text;
		var likes = value.likes.count;

			// THIS IS WHERE WE START PUTTING STUFF ON THE PAGE...
			// IF YOU START PICKING OUT ELEMENTS YOU DON'T WANT -- Tread carefully!
			// Certain elements are nested and you will get errors. Be precise.
			// But also, have fun with it! What's the point if you're not having fun?
		var $image = $('<img>').attr('src', standard);
		var $heartIcon = $('<span class="heartIcon">').html('<i class="fa fa-heart">');
		var $likeCount = $('<p class="likes">').text(likes).append($heartIcon);
		var $cap = $('<p class="captions">').text(caption);
		var $hover = $('<div class="overlay">').append($cap);
		var $link = $('<a>').attr('href', hyperlink).attr('target', '_blank').append($hover);
		var $fullSize = $('<li class="insta">').append($image).append($likeCount).append($link);

			// If for whatever reason you got a little trigger happy in HTML,
			// Make sure that your ul class matches this one!
			// vvvvvv Right there. Match it up.
		$('ul.gallery').append($fullSize);
	})
};

