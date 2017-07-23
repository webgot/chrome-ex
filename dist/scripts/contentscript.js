"use strict";console.log("'Allo 'Allo! Content script");var exid="pomaiepicigmmoenifggkbhemiffjnje";document.addEventListener("hello",function(e){chrome.runtime.sendMessage(exid,{action:"ping"},function(e){"PONG"==e?alert("설치 되었습니다"):alert("설치가 아직 안되었습니다")})});
//# sourceMappingURL=contentscript.js.map
