'use strict'

document.addEventListener('DOMContentLoaded', function(event) {
	setupTrendSection();
});

function setupTrendSection() {
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
				const between1And10 = Math.floor(Math.random() * 10);

				for (let i = 1; i <= between1And10; i++){
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
		// Fuck this is ugly lol
		const ARROW_PICTURE = `https://www.facebook.com/rsrc.php/v3/y4/r/-PAXP-deijE.gif`;
		const ARROW = `<img class="_3uz0 _5r-z _8o lfloat _ohe img" alt="" src="${ARROW_PICTURE}">`;
		const HIDE_TREND = `<div class="_18dr rfloat _ohf">\
		<button class="_19_3" title="Hide Trending Item" aria-label="Hide Trending Item" type="submit" value="1">\
		<span class="_4v8h" data-topicid="104049626299044"></span>\
		</button>\
		</div>`;
		const TREND_LINK =  `/topic/Diablo-4/104049626299044?source=whfrt&amp;position=1&amp;trqid=6342973549914751764`;
		const HOVER_CARD = `/pubcontent/trending/hovercard/?topic_id=104049626299044&amp;topic_link_id=u_ps_0_4_h&amp;position=1&amp;source=whfrt&amp;trqid=6342973549914751764`;
		const TREND_TEXT = 'Weeb Shit'


		const TREND_POP = `${Math.floor(Math.random() * 1000)}K`;
		const trashTrend = `${ARROW}\
			<div class="clearfix _42ef">\
			${HIDE_TREND}\
			<a class="_4qzh _5v0t _7ge" href="${TREND_LINK}" id="u_ps_0_4_h" data-hovercard="${HOVER_CARD}" data-hovercard-position="left" data-hovercard-offset-x="-15" data-hovercard-offset-y="10">
			<div>
			<span class="_5v0s _5my8">${TREND_TEXT}</span>
			<div class="_5v9v">${TREND_POP} people talking about this</div>
			</div>
			</a>
			</div>`;
		return trashTrend;
	}
}
