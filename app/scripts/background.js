'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({ text: '\'Allo' });

console.log('\'Allo \'Allo! Event Page for Browser Action');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == 'ping') sendResponse("PONG");
});