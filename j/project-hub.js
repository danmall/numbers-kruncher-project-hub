/*
*************************************************

PROJECT HUB
JavaScript Functions
Requires jQuery

Created by the epic SuperFriendly team.
http://superfriend.ly/

*************************************************
*/

var Site = function () {
	this.init = function () {
		var _classNameToScrollTo = ".entry-latest",
			_pointToScrollTo = $(_classNameToScrollTo).offset().top - 30,
			_viewport = $("html, body");

		_viewport.delay(500).animate(
			{
				scrollTop: _pointToScrollTo,
			},
			2000,
		);

		// http://stackoverflow.com/questions/8858994/let-user-scrolling-stop-jquery-animation-of-scrolltop
		_viewport.bind(
			"scroll mousedown DOMMouseScroll mousewheel keyup",
			function (e) {
				if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
					_viewport
						.stop()
						.unbind("scroll mousedown DOMMouseScroll mousewheel keyup"); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
				}
			},
		);
	};
};

/**
 * Create relative time language for each milestone date
 */
var RelativeMilestoneDates = function () {
	this.init = function () {
		// Adds data meta to indicate how long from now the date is for each milestone
		dayjs.extend(window.dayjs_plugin_relativeTime);
		// Let's us customize the language around how relative time is communicated
		dayjs.extend(window.dayjs_plugin_updateLocale);
		// Let's us check if the relative time is _today_ in your locale
		dayjs.extend(window.dayjs_plugin_isToday);

		// Updating the english locale lanuage for relative time
		dayjs.updateLocale("en", {
			relativeTime: {
				future: "%s from now",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years",
			},
		});

		// we grab the datetime attribute from each .entry-date, convert it to relative time and insert it into the document
		$(".entry-date").each(function (i, obj) {
			let date = $(obj).attr("datetime");
			if (date) {
				let relativeDate = dayjs(date).fromNow();

				// just say 'today' if the relative time is anytime today
				if (dayjs(date).isToday()) {
					relativeDate = "today";
				}

				// add to the document
				$(obj).append(
					" <span class='relative-time'><span class='parenthesis'>(</span>" +
						relativeDate +
						"<span class='parenthesis'>)</span></span>",
				);
			}
		});
	};
};

/*-------------------------------------------
    Initial Actions
-------------------------------------------*/

$(document).ready(function () {
	var projectHub = new Site();
	projectHub.init();

	var milestoneDates = new RelativeMilestoneDates();
	milestoneDates.init();
});
