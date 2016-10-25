'use strict'
const BUCKET = 'https://s3-us-west-2.amazonaws.com/my-facebook-friend-cant-be-this-cute';

https://s3-us-west-2.amazonaws.com/my-facebook-friend-cant-be-this-cute/data/top100.txt

// Test code
/*
function getRandomPictureURL() {
	const script = document.createElement('img');
	script.src = 'https://s3-us-west-2.amazonaws.com/my-facebook-friend-cant-be-this-cute/pics/general/0.jpg';
	script.id = 'yolo';
	script.height = '800';
	script.width = '1000';
	// script.alt = '1';
	//chrome.extension.getURL('js/main.js')
	document.getElementById('pagelet_bluebar').appendChild(script);
}
*/

document.addEventListener('DOMContentLoaded', function(event) {

	getPopularAnime().then((anime) => {
		const top100Shows = anime.split('\n');
		setupTrendSection(top100Shows);
	});
});

function getPopularAnime() {

	let promise = new Promise((resolve, reject) => {

		const xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = () => {
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {	resolve(xmlHttp.responseText);	}
		}

		xmlHttp.open('GET', `${BUCKET}/data/top100.txt`, true); // false for synchronous request
		xmlHttp.send(null);
	});
	return promise;
}


function setupTrendSection(top100Shows) {
	generateTrend.shows = top100Shows;
	// Class names
	const ALL_TRENDS_CONTAINER_CLASS = '_5myl';
	const SINGLE_TREND_CONTAINER_CLASS = '_5my2 _3uz4';
	const TREND_CLASS = 'clearfix _uhk _4_nm';
	// ID's
	//const SEE_MORE = 'u_ps_0_4_5';
	const SEE_MORE_TRENDS_ID = 'u_ps_0_4_6';

	// Trends are hidden by default in CSS to ensure we change the text before the user sees it
	modifyInitialTrends();
	showTrends();
	setupShowMoreButton();

	function modifyInitialTrends() {
		const initialTrends = document.getElementsByClassName(TREND_CLASS);

		for(let i = 0; i < initialTrends.length; i++) {
			initialTrends[i].innerHTML = generateTrend();
		}
	}

	function showTrends() {
		document.getElementsByClassName(ALL_TRENDS_CONTAINER_CLASS)[0].style.display = 'block';
	}

	function setupShowMoreButton() {
		const SEE_MORE_TRENDS_ID = 'u_ps_0_4_6';
		const seeMoreTrendsButton = document.getElementById(SEE_MORE_TRENDS_ID);

		seeMoreTrendsButton.addEventListener('click', (event) => {
			event.stopImmediatePropagation(); // Stops facebook default handling of click

			let allTrends = document.getElementsByClassName(ALL_TRENDS_CONTAINER_CLASS)[0];
			let singleTrend = document.getElementsByClassName(SINGLE_TREND_CONTAINER_CLASS)[0];
			let newTrend = null;

			hideShowMoreButton();
			generateMoreTrends();

			// Helper functions
			function generateMoreTrends() {
				const between0And10 = Math.floor(Math.random() * 10);

				for (let i = 1; i <= between0And10; i++){
					newTrend = singleTrend.cloneNode(true);
					newTrend.getElementsByClassName(TREND_CLASS)[0].innerHTML = generateTrend();
					allTrends.appendChild(newTrend);
				}
			}
			function hideShowMoreButton() {
				seeMoreTrendsButton.style.display = 'NONE';
			}
		});
	}

	// helper function
	function generateTrend() {
		// Hovercard Parent = js_1i /// uiContextualLayerPositioner _53ii uiLayer

 		/*<div class="uiContextualLayer uiContextualLayerLeft" style="right: 0px;">
			<div class="_5v-0 _53im" style="width: 439px;"><div class="_53ij" style="top: -164px;">
				<div>
					<div>
						<div>
							<div class="_2kg4 _5jyt" id="u_d_0">
								<div class="_5jyu">Popular article about Diablo 4</div>
								<a class="_32v_" href="/topic/Diablo-4/104049626299044?source=whfrt&amp;position=1&amp;trqid=6342973549914751764">
									<div class="_4-u2 _5jyr _4-u8">
										<div class="_32li">
											<div class="_5s6c">
												<div class="_32w2">
													<span class="">Diablo 4 rumours are heating up ahead of BlizzCon 2016 [Updated]</span>
												</div>
											</div>
											<div class="_32w3">
												<div>Something seems to be happening.</div>
											</div>
										</div>
										<div class="_5jyw _5jyy">pcgamer.com</div>
									</div>
								</a>
								</div>
							<div>
							<div class="_32w0">
							</div>
						</div>
						<div class="clearfix _5jyv">
							<div class="_4j0q lfloat _ohe">
							<a class="_32v-" href="/topic/Diablo-4/104049626299044?source=whfrt&amp;position=1&amp;trqid=6342973549914751764">
							<span class="_50f7">See more</span>posts about <span class="_50f7">Diablo 4...</span></a></div><div class="_5jyz rfloat _ohf"><abbr title="Sunday, October 16, 2016 at 6:10pm" data-utime="1476666649" class="timestamp livetimestamp"><span class="timestampContent">last Sunday</span></abbr></div></div></div></div><div role="alert" class="accessible_elem" id="js_1j">Tab to access contents in the dialog</div></div></div><i class="_53io" style="top: 0%; margin-top: 12px;"></i></div>
							</div>*/
		const between0And99 = Math.floor(Math.random() * 100);
		const show = generateTrend.shows[between0And99];
		generateTrend.shows.splice(between0And99, 1);

		// Fuck this is ugly lol
		const ARROW_PICTURE = `https://www.facebook.com/rsrc.php/v3/y4/r/-PAXP-deijE.gif`;
		const ARROW = `<img class="_3uz0 _5r-z _8o lfloat _ohe img" alt="" src="${ARROW_PICTURE}">`;
		const HIDE_TREND = `<div class="_18dr rfloat _ohf">\
		<button class="_19_3" title="Hide Trending Item" aria-label="Hide Trending Item" type="submit" value="1">\
		<span class="_4v8h" data-topicid="104049626299044"></span>\
		</button>\
		</div>`;

		const TREND_LINK = `https://myanimelist.net/search/all?q=${encodeURI(show)}`;

		const HOVER_CARD = `/pubcontent/trending/hovercard/?topic_id=104049626299044&amp;topic_link_id=u_ps_0_4_h&amp;position=1&amp;source=whfrt&amp;trqid=6342973549914751764`;
		const TREND_TEXT = `${show}`;
		const TREND_POP = `${Math.floor(Math.random() * 200 + Math.random() * 30)}k`;

		return `${ARROW}\
			<div class="clearfix _42ef">\
			${HIDE_TREND}\
			<a class="_4qzh _5v0t _7ge" href="${TREND_LINK}" id="u_ps_0_4_h" data-hovercard="${HOVER_CARD}" data-hovercard-position="left" data-hovercard-offset-x="-15" data-hovercard-offset-y="10">
			<div>
			<span class="_5v0s _5my8">${TREND_TEXT}</span>
			<div class="_5v9v">${TREND_POP} people talking about this</div>
			</div>
			</a>
			</div>`;




	}
}
