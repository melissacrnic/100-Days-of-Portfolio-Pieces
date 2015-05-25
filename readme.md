#100DayProject Instagram Plug-in
###pull your content from IG using your unique hashtag
######(or any other hashtag you want to pull)

###Getting Started
What will I need?
1. Ideally, you'll have started the [100 Day Project ('hosted' by The Great Discontent)](https://thegreatdiscontent.com/100days)  
2. Ideally, you followed the instructions and created a hashtag unique to YOUR project  
3. You'll need to be logged into Instagram in your browser, and use [this awesome free service to receive your access_token](http://instagram.pixelunion.net/)  
4. Probably somewhere to host your hard work!  
  
Now, download the plugin folder and get started!

###Script Files
In the oneHundredDays.js file, fill in your unique tag (no hashtag/pound!) within the quotations. From step 3 above, input your unique access_token within the quotations -- it will be a very long alphanumeric string!
```javascript
	hundredDays.api('yourUniqueTag', 'yourAccessToken');
```

###HTML File
I've provided a "bare" index.html file for you to have a starting point. Feel free to adapt it as you see fit, but the requirements for this to work are:
**THE ORDER IS IMPORTANT**
1. jQuery linked at the bottom of your page   
`
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
`
2. The plugin script linked beneath jQuery   
`
<script src="scripts/plugin.js"></script>
`
3. Your final script file with your tag + access_token   
`
<script src="scripts/oneHundredDays.js"></script>
`
4. Somewhere on your page you have a `<ul class="gallery">` for the API to pull and place the images within

###CSS File
I've done a lot of the styling for you, but you can ditch this stuff and start from scratch. Remember, you'll be affecting a parent container of `<ul class="gallery">`. See the basic framework below to help you figure out what elements are where and how you might affect them.

```html
	<ul class="gallery">
		<li class="insta">
			<img>
			<p class="likes">
				<span class="heartIcon">
					<i class="fa fa-heart">
				</span>
			</p>
			<a>
				<div class="overlay">
					<p class="captions"></p>
				</div>	
			</a>
		</li>
	</ul>
```

###Credits
- [Instagram for Developers](https://instagram.com/developer/)
- [PixelUnion Access Token Generator](http://instagram.pixelunion.net/)
- [Google Fonts](https://www.google.com/fonts)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [Subtle Patterns](http://subtlepatterns.com/ps-neutral/)
- [TheGreatDisconent](https://thegreatdiscontent.com/100days)
- [Elle Luna](http://elleluna.com/)
- [Me!](http://kse.ninja)