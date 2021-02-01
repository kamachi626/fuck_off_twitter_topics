// ==UserScript==
// @name         Fuck off Twitter topics
// @namespace    https://falxter.co.jp/
// @version      0.1
// @description  Hide topics on Twitter.
// @author       Shogo Kamachi
// @include      https://twitter.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

(function() {
	$("body").bind('DOMSubtreeModified propertychange', function() {
		let main = $("main");
		if(main.length == 0) {
			return;
		}
		$("body").unbind("DOMSubtreeModified propertychange");
		main.bind("DOMSubtreeModified propertychange", function() {
			var paths = $("article path[d='M18.265 3.314c-3.45-3.45-9.07-3.45-12.52 0-3.45 3.44-3.45 9.06 0 12.51 1.5 1.49 3.43 2.38 5.51 2.56v4.14c0 .31.2.6.5.7.08.03.17.05.25.05.22 0 .44-.1.59-.29l6.49-8.11c2.63-3.49 2.27-8.47-.82-11.56zm-10.56 7.87c0-.41.33-.75.75-.75h4.05c.41 0 .75.34.75.75s-.34.75-.75.75h-4.05c-.42 0-.75-.34-.75-.75zm8.6-3.24c0 .42-.34.75-.75.75h-7.1c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h7.1c.41 0 .75.34.75.75z']");
			if(paths.length > 0) {
				paths.parents("article").hide();
			}
		});
	});
})();