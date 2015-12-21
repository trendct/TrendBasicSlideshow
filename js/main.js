$(function () {

	var muffin_slideshow = new TrendTabber ({
		root_div: "corridor_slider_root",
		slider_name: "rail_corridor_122015",
		headline: "Muffin recipe",
		// overall caption for the slideshow. At this point, we just don't use it.
		// good thought, but "keep it simple" won out.
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "	
			+ "Aenean non nibh orci. Nulla facilisi. Phasellus dignissim est ut "
			+ "iaculis gravida. Aenean a quam libero. Vivamus placerat nulla ut "
			+ "metus sodales faucibus. Nam commodo tempor nunc nec viverra. In "
			+ "volutpat augue a nibh mattis, sed ultricies nunc aliquet. Donec "
			+ "eget ultricies.",
		// can somedway add "button text" as an override for individual button headlines
		button_text: "&bull;", 
		slides: [ {
			//url: "img/corridor_alt1_ts.jpeg",
			headline: "About muffins",
			caption: "This recipe only calls for a few ingrdients",
			html: "<div><h1>Ingredients</h1>"
			+ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "	
			+ "Aenean non nibh orci. Nulla facilisi. Phasellus dignissim est ut "
			+ "iaculis gravida. Aenean a quam libero. Vivamus placerat nulla ut "
			+ "metus sodales faucibus. Nam commodo tempor nunc nec viverra. In "
			+ "volutpat augue a nibh mattis, sed ultricies nunc aliquet. Donec "
			+ "eget ultricies."
			+ ""
		},
		{
			//url: "img/corridor_alt2_1_ts.jpeg",
			headline: "Recipe",
			caption: "Prep time: 10 minutes; cook time: 30 minutes",
			html: "<div><h1>Recipe</h1>"
			+ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "	
			+ "Aenean non nibh orci. Nulla facilisi. Phasellus dignissim est ut "
			+ "iaculis gravida. Aenean a quam libero. Vivamus placerat nulla ut "
			+ "metus sodales faucibus. Nam commodo tempor nunc nec viverra. In "
			+ "volutpat augue a nibh mattis, sed ultricies nunc aliquet. Donec "
			+ "eget ultricies."
			+ "</div>"

		},
		{
			//url: "img/corridor_alt2_2_ts.jpeg",
			headline: "Muffins!",
			caption: "Muffins!",
			html: "<div><img src='img/wikimuffins.jpg' /> <br />Image <a href='https://en.wikipedia.org/wiki/Muffin#/media/File:NCI_Visuals_Food_Muffins.jpg'>from Wikipedia</a></div>"

		},
		]
	});

})

