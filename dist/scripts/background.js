"use strict";chrome.runtime.onInstalled.addListener(function(e){console.log("previousVersion",e.previousVersion)}),chrome.browserAction.setBadgeText({text:"'Allo"}),console.log("'Allo 'Allo! Event Page for Browser Action"),chrome.runtime.onMessage.addListener(function(e,o,n){"ping"==e.action&&n("PONG")});
//# sourceMappingURL=background.js.map
