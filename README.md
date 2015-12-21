#TrendTabber

Jake Kara / Trend CT
jkara@trendct.org

Use tabs to switch between content panels. Can be used as a slideshow, toggling between maps, or any other content. Uses Bootstrap for styling and pym.js for dynamic iframe embedding. Throughout the code, it's refered to as a "slideshow," but it's really so much more than that.

####Usage
There's no documentation for this, but the basic usage is observable in main.js:
		
		var muffin_slideshow = new TrendTabber (options);

Where options is an options object. A bunch of objects within options are required, and some don't do anything yet. Here is an incomplete list:

1. root_div - the ID of a div that exists to put the entire "slideshow" into.
2. slider_name - the name that all html element IDs will be based on to avoid name collisions.
3. caption - the "default" caption for the spreadsheet. Useless, since it gets replaced right away by showing the first slide, but still required until I get around to deleting reference.
4. button_text - does nothing, not required. This was originally envisioned as the default text to use instead of titles for the tab buttons.
5. slides - required array of objects that describe the content of each slide / panel
	1. headline - headline for that specific panel
	2. caption - Caption text for that specific panel
	3. html - html content for that panel. It can simply be an img, which was the original use of this code, or it can be a div, iframe, anything.

####Annotated directory structure

	├── README.md 
	├── css
	│   └── trend_basic_slider.css - NOTE: dist code, required
	├── img
	│   └── wikimuffins.jpg - NOTE: example code
	├── index.html - NOTE: example 
	├── js
	│   ├── TrendTabber.js - NOTE: dist code, required
	│   ├── bootstrap-3.3.6-dist - NOTE: vendor 
	│   │   ├── css
	│   │   │   ├── bootstrap-theme.css
	│   │   │   ├── bootstrap-theme.css.map
	│   │   │   ├── bootstrap-theme.min.css
	│   │   │   ├── bootstrap-theme.min.css.map
	│   │   │   ├── bootstrap.css
	│   │   │   ├── bootstrap.css.map
	│   │   │   ├── bootstrap.min.css
	│   │   │   └── bootstrap.min.css.map
	│   │   ├── fonts
	│   │   │   ├── glyphicons-halflings-regular.eot
	│   │   │   ├── glyphicons-halflings-regular.svg
	│   │   │   ├── glyphicons-halflings-regular.ttf
	│   │   │   ├── glyphicons-halflings-regular.woff
	│   │   │   └── glyphicons-halflings-regular.woff2
	│   │   └── js
	│   │       ├── bootstrap.js
	│   │       ├── bootstrap.min.js
	│   │       └── npm.js
	│   ├── jquery-1.11.3.min.js - NOTE: vendor 
	│   ├── main.js - NOTE: example
	│   └── pym.min.js - NOTE: vendor 
	└── pym.html - NOTE: example of pym.js embedding
