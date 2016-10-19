'use strict'
// Class names
const TRENDING = 'clearfix _uhk _4_nm';
// ID's
const SEE_MORE = 'u_ps_0_4_5';

document.addEventListener('DOMContentLoaded', function(event) {
	let seeMore = document.getElementById(SEE_MORE);

	let trending = document.getElementsByClassName(TRENDING);
	for(let i = 0; i < trending.length; i++) {
		trending[i].innerHTML = '<img class="_3uz0 _5r-z _8o lfloat _ohe img" alt="" src="https://www.facebook.com/rsrc.php/v3/y4/r/-PAXP-deijE.gif"><div class="clearfix _42ef"><div class="_18dr rfloat _ohf"><button class="_19_3" title="Hide Trending Item" aria-label="Hide Trending Item" type="submit" value="1"><span class="_4v8h" data-topicid="104049626299044"></span></button></div><a class="_4qzh _5v0t _7ge" href="/topic/Diablo-4/104049626299044?source=whfrt&amp;position=1&amp;trqid=6342973549914751764" id="u_ps_0_4_h" data-hovercard="/pubcontent/trending/hovercard/?topic_id=104049626299044&amp;topic_link_id=u_ps_0_4_h&amp;position=1&amp;source=whfrt&amp;trqid=6342973549914751764" data-hovercard-position="left" data-hovercard-offset-x="-15" data-hovercard-offset-y="10"><div><span class="_5v0s _5my8">Weeb Shit</span><div class="_5v9v">8.2K people talking about this</div></div></a></div>';
	}



	console.log("DOM fully loaded and parsed");
});


function observe(className) {
	const observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			console.log(mutation.type);
		});
	});

	const config = { attributes: true, childList: true, characterData: true };
	const target = document.getElementsByClassName(className);
	console.log(target);
	//console.log(target);
	// observer.observe(target, config);

	// later, you can stop observing
	observer.disconnect();
}
