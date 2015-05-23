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
			hundredDays.img(resp)
		}
	}) // End of AJAX 
} // End of hundredDays.api method

hundredDays.img = function(imgData){
	var items = imgData.data;
	$.each(items, function(key, value) {
		var thumb = value.images.thumbnail.url;
		var standard = value.images.standard_resolution.url
		console.log(standard);
		// var $thumb = $('<li>').attr('src', thumb);
		var $image = $('<img>').attr('src', standard);
		var $fullSize = $('<li class="insta">').append($image);
		$('ul.gallery').append($fullSize);
	})
};

$(function(){
	hundredDays.api('100DaysCLBC', '1484007492.1677ed0.58bc2427ef174f86b431e0dbc98e3efa');
	// console.log(hundredDays.api());
});

