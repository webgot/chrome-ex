'use strict';

console.log('\'Allo \'Allo! Content script');

var exid = 'pomaiepicigmmoenifggkbhemiffjnje';
document.addEventListener('hello', function(data){
  chrome.runtime.sendMessage(exid, {action : 'ping'}, function(respones){
    if(respones == "PONG"){
      alert('설치 되었습니다');
    }
    else{
      alert("설치가 아직 안되었습니다");
    }
  });
});