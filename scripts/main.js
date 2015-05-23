var hundredDays = {};


hundredDays.api = function(){
	var yourUniqueTag = "100DaysCLBC";
	var clientID = 'e6e756c20e004c0c90f0a99f46d43c09';
	var accessTOKEN = '1484007492.1677ed0.58bc2427ef174f86b431e0dbc98e3efa';
	$.ajax({
		// This is the link you have to give IG to make an API Call
		type: 'GET',
		url: 'https://api.instagram.com/v1/tags/' + yourUniqueTag + '/media/recent/?access_token=' + accessTOKEN + '&count=100',
		dataType: 'jsonp',
		success: function(resp){
			// console.log(resp);
			hundredDays.img(resp)
		}

		// , resp.images.standard_resolution


	}) // End of AJAX 

} // End of .api method
	// .append() to page vs. .html()

hundredDays.img = function(imgData){
	var items = imgData.data;
	$.each(items, function(key, value) {
		var thumb = value.images.thumbnail.url;
		var standard = value.images.standard_resolution.url
		console.log(standard);
		// var $thumb = $('<li>').attr('src', thumb);
		var $image = $('<img>').attr('src', standard);
		var $fullSize = $('<li>').append($image);
		$('ul.gallery').append($fullSize);
	})
};

// hundredDays.toPage = function(){
// 	$('ul.gallery').append($('li'), hundredDays.img(standard));
// }

$(function(){
	hundredDays.api();
	// console.log(hundredDays.api());
});

