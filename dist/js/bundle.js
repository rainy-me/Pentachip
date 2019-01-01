!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=function(){return function(){this._canvas=document.getElementById("game"),this._ctx=this._canvas.getContext("2d"),this._config=r.default}}();e.default=o},function(t,e,n){"use strict";var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c};function o(t){var e=r(t.split("-").map(parseInt),2);return{x:e[0],y:e[1]}}function i(t){return t.x+"-"+t.y}Object.defineProperty(e,"__esModule",{value:!0}),e.stringToPosition=o,e.PositionToSting=i,e.default={stringToPosition:o,PositionToSting:i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={COLOR:{SHADOW:"lightyellow",BACKGROUND:"rgb(32,43,65)",GRID_LINE:"white",GAME:"lightyellow",P1:"rgb(103,197,222)",P2:"rgb(231,137,133)"},LATTICE:{SIZE:100},GAME_CHIP:{RADIUS:20,SPEED:.01}}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),c=function(t){function e(e,n){var r=t.call(this)||this;return r.position=e,r.ownedBy=n,r.id=i.default.PositionToSting(e),r.hover=!1,r.selected=!1,r}return o(e,t),e.prototype.render=function(){this._ctx.beginPath(),this._ctx.arc(this.position.x*this._config.LATTICE.SIZE,this.position.y*this._config.LATTICE.SIZE,this._config.GAME_CHIP.RADIUS,0,2*Math.PI,!1),this._ctx.shadowBlur=5,this._ctx.shadowColor=this.hover?this._config.COLOR.SHADOW:"rgba(0,0,0,0)",this._ctx.fillStyle=this._config.COLOR[this.ownedBy],this._ctx.fill(),this._ctx.closePath(),this._ctx.lineWidth=4,this._ctx.strokeStyle=this.selected?"crimson":"black",this._ctx.stroke()},e}(n(0).default);e.default=c},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(c,s)}u((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},i=this;Object.defineProperty(e,"__esModule",{value:!0});var c=n(5);r(i,void 0,void 0,function(){var t,e;return o(this,function(n){switch(n.label){case 0:return t=new c.default,e=["P1","P2"],t.start(t.choose(e)),[4,t.run()];case 1:return n.sent(),[2]}})})},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(c,s)}u((r=r.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),a=n(2),f=n(3),l=n(6),h=n(7),p=n(0),y=function(t){},d=function(t){function e(){var e=t.call(this)||this;e._canvas.height=600,e._canvas.width=600,e.config=a.default,e.board=new l.default;var n=e.board.load();return e.chips=n.chips,e.hints=[],e.selected=null,e.message=new h.default,e.gameover=!1,e.turn="P1",e.pcTurn="P2",e._canvas.onmousemove=function(t){var n=e.getEventPositon(t),r=!1;e.chips.map(function(t){var o=e.isInside(t.position,n);t.hover=o,o&&(r=!0)});var o=document.getElementById("game");r?(e.render(),o.style.cursor="pointer"):o.style.cursor="default"},e._canvas.onclick=function(t){var n,r;if(e.gameover&&e.reset(),!e.selected||Boolean(e.hints.length)){var o=e.getEventPositon(t),i=!1;try{for(var c=s(e.chips),u=c.next();!u.done;u=c.next()){var a=u.value,l=e.isInside(a.position,o);if(l){if(a.ownedBy!==e.turn)return;i=!0,e.selected=a,e.hints=[],e.searchHintPoints(a.position).map(function(t){return e.hints.push(new f.default(t,"GAME"))})}a.selected=l}}catch(t){n={error:t}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}e.hints.map(function(t){e.isInside(t.position,o)&&(e.hints=[],e.to(t.position))}),i&&e.render()}},e}return o(e,t),e.prototype.start=function(t){var e=this;this.turn=t;var n="P1"===t?"YOU":"PC";this.message.msg=n+" go first",console.log("__START__"),this.render(),setTimeout(function(){e.message.msg="",e.render()},1e3)},e.prototype.reset=function(){location.reload()},e.prototype.render=function(){this._ctx.clearRect(0,0,window.innerWidth,window.innerHeight),this.board.render(),this.renderChips(),this.renderHints(),this.message.msg&&this.message.render()},e.prototype.occupy=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.getChips(this.nextTurn()).map(function(n){var r,o;try{for(var i=s(e),c=i.next();!c.done;c=i.next()){var u=c.value;n.position.x===u.x&&n.position.y===u.y&&(n.ownedBy=t.turn)}}catch(t){r={error:t}}finally{try{c&&!c.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}})},e.prototype.getEventPositon=function(t){var e=this._canvas.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}},e.prototype.renderChips=function(){this.chips.map(function(t){return t.render()})},e.prototype.renderHints=function(){this.hints.map(function(t){return t.render()})},e.prototype.move=function(t){var e;if("string"==typeof t){var n=this.chips.filter(function(e){return e.id===t});if(1!==n.length)return;e=n[0]}else e=t;return this.selected=e,this},e.prototype.to=function(t){var e=this;return new Promise(function(n,r){if(e.selected){var o=t.x-e.selected.position.x,i=t.y-e.selected.position.y,c=function(){var s=!0;e.selected?(e.selected.position.x!==t.x&&(s=!1,e.selected.position.x+=o/50,e.selected.position.x=parseFloat(e.selected.position.x.toFixed(2))),e.selected.position.y!==t.y&&(s=!1,e.selected.position.y+=i/50,e.selected.position.y=parseFloat(e.selected.position.y.toFixed(2))),s?(e.selected=null,e.check(),e.render(),e.turn=e.nextTurn(),n(null),y(null)):(e.render(),requestAnimationFrame(c))):r(new Error("Not selected"))};c()}else r(new Error("Not selected"))})},e.prototype.choose=function(t){return t[Math.floor(Math.random()*t.length)]},e.prototype.run=function(){return i(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return this.gameover?[3,5]:"P2"!==this.turn?[3,2]:[4,this.pc()];case 1:return t.sent(),[3,4];case 2:return[4,this.player()];case 3:t.sent(),t.label=4;case 4:return[3,0];case 5:return[2]}})})},e.prototype.pc=function(){return i(this,void 0,void 0,function(){var t,e,n,r,o=this;return c(this,function(i){switch(i.label){case 0:return t=this.getChips(this.turn),e=[],t.map(function(t){e.push({chip:t,hints:o.searchHintPoints(t.position)})}),n=this.choose(e),this.selected=n.chip,r=this.choose(n.hints),[4,this.to(r)];case 1:return i.sent(),[2]}})})},e.prototype.player=function(){return i(this,void 0,void 0,function(){return c(this,function(t){return[2,new Promise(function(t){return y=t})]})})},e.prototype.nextTurn=function(){return"P1"===this.turn?"P2":"P1"},e.prototype.getChips=function(t){return this.chips.filter(function(e){return e.ownedBy===t})},e.prototype.check=function(){this.checkPoked(),this.checkClutch(),this.checkWin()},e.prototype.checkWin=function(){var t=this.getChips("P1"),e=this.getChips("P2");0!==t.length&&this.hasPotential(t)||(this.message.msg="YOU LOSE",this.gameover=!0),0!==e.length&&this.hasPotential(e)||(this.message.msg="YOU WIN",this.gameover=!0)},e.prototype.hasPotential=function(t){var e=this,n=[];return t.map(function(t){n=n.concat(e.searchHintPoints(t.position))}),Boolean(n.length)},e.prototype.checkPoked=function(){var t=this,e=this.getChips(this.nextTurn()).map(function(t){return t.position});2!==e.length&&this.getChips(this.turn).map(function(n){t.checkSingleAround(n.position,e,"poke")&&(n.ownedBy=t.turn,t.check(),t.render())})},e.prototype.checkClutch=function(){var t=this,e=this.getChips(this.nextTurn()),n=this.getChips(this.turn).map(function(t){return t.position});1!==e.length&&e.map(function(e){t.checkSingleAround(e.position,n)&&(e.ownedBy=t.turn,t.check(),t.render())})},e.prototype.checkSingleAround=function(t,e,n){var r,o;return void 0===n&&(n="clutch"),r={x:t.x-1,y:t.y-1},o={x:t.x+1,y:t.y+1},this.isInMap(r,o)&&this.isOccupied(e,r,o)?("poke"===n&&this.occupy(r,o),!0):(r={x:t.x,y:t.y-1},o={x:t.x,y:t.y+1},this.isInMap(r,o)&&this.isOccupied(e,r,o)?("poke"===n&&this.occupy(r,o),!0):(r={x:t.x+1,y:t.y-1},o={x:t.x-1,y:t.y+1},this.isInMap(r,o)&&this.isOccupied(e,r,o)?("poke"===n&&this.occupy(r,o),!0):(r={x:t.x+1,y:t.y},o={x:t.x-1,y:t.y},!(!this.isInMap(r,o)||!this.isOccupied(e,r,o))&&("poke"===n&&this.occupy(r,o),!0))))},e.prototype.isInMap=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.every(function(t){return t.x>=1&&t.x<=5&&t.y>=1&&t.y<=5})},e.prototype.isInside=function(t,e){return Math.sqrt(Math.pow(Math.abs(t.x*this.config.LATTICE.SIZE-e.x),2)+Math.pow(Math.abs(t.y*this.config.LATTICE.SIZE-e.y),2))<this.config.GAME_CHIP.RADIUS},e.prototype.isOccupied=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.every(function(e){var n=t.filter(function(t){return t.x===e.x&&t.y===e.y});return Boolean(n.length)})},e.prototype.searchHintPoints=function(t){var e=this,n=u.default.PositionToSting(t),r=this.board.directionMap[n],o=[];return r.forEach(function(n){o=o.concat(e.searchDirectionHintPoints(t,e.board.vectors[n]))}),o},e.prototype.searchDirectionHintPoints=function(t,e){for(var n=[],r={x:t.x+e.x,y:t.y+e.y},o=this.chips.map(function(t){return t.position});this.isInMap(r)&&!this.isOccupied(o,r);)n.push(r),r={x:r.x+e.x,y:r.y+e.y};return n},e}(p.default);e.default=d},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c},c=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(i(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),u=function(t){function e(){var e=t.call(this)||this;e.paths=[],c(Array(5).keys()).map(function(t){var n=t+1;e.paths.push({from:[n,1],to:[n,5]}),e.paths.push({from:[1,n],to:[5,n]})}),e.paths=e.paths.concat([{from:[1,1],to:[5,5]},{from:[1,5],to:[5,1]}]),e.paths=e.paths.concat([{from:[3,1],to:[1,3]},{from:[1,3],to:[3,5]},{from:[3,5],to:[5,3]},{from:[5,3],to:[3,1]}]);var n=["left","down","right"],r=["top","down","right"],o=["top","down","left"],i=["top","right","left"],s=["left","top","down","right"],u=["topLeft","topRight","downLeft","downRight"];return e.directionMap={"1-1":["right","down","downRight"],"2-1":c(n),"3-1":c(n,["downLeft","downRight"]),"4-1":c(n),"5-1":["left","downLeft","down"],"1-2":c(r),"2-2":c(s,u),"3-2":c(s),"4-2":c(s,u),"5-2":c(o),"1-3":c(r,["topRight","downRight"]),"2-3":c(s),"3-3":c(s,u),"4-3":c(s),"5-3":c(o,["topLeft","downLeft"]),"1-4":c(r),"2-4":c(s,u),"3-4":c(s),"4-4":c(s,u),"5-4":c(o),"1-5":["right","top","topRight"],"2-5":c(i),"3-5":c(i,["topLeft","topRight"]),"4-5":c(i),"5-5":["left","topLeft","top"]},e.vectors={topLeft:{x:-1,y:-1},top:{x:0,y:-1},topRight:{x:1,y:-1},left:{x:-1,y:0},right:{x:1,y:0},downLeft:{x:-1,y:1},down:{x:0,y:1},downRight:{x:1,y:1}},e}return o(e,t),e.prototype.load=function(){var t=[],e=[],n=c(Array(5).keys());return n.map(function(e){n.map(function(n){t.push({x:e+1,y:n+1})})}),n.map(function(t){e.push(new s.default({x:t+1,y:1},"P2")),e.push(new s.default({x:t+1,y:5},"P1"))}),{map:t,chips:e}},e.prototype.render=function(){var t=this;this._ctx.fillStyle=this._config.COLOR.BACKGROUND,this._ctx.fillRect(0,0,window.innerWidth,window.innerHeight),this.paths.map(function(e){t._ctx.strokeStyle=t._config.COLOR.GRID_LINE,t._ctx.shadowBlur=0,t._ctx.beginPath(),t._ctx.moveTo(e.from[0]*t._config.LATTICE.SIZE,e.from[1]*t._config.LATTICE.SIZE),t._ctx.lineTo(e.to[0]*t._config.LATTICE.SIZE,e.to[1]*t._config.LATTICE.SIZE),t._ctx.lineWidth=1,t._ctx.stroke(),t._ctx.closePath()})},e}(n(0).default);e.default=u},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(){var e=t.call(this)||this;return e.msg="",e}return o(e,t),e.prototype.render=function(){var t=50,e=250;this._ctx.beginPath(),this._ctx.beginPath(),this._ctx.moveTo(60,e),this._ctx.lineTo(540,e),this._ctx.quadraticCurveTo(550,e,550,260),this._ctx.lineTo(550,340),this._ctx.quadraticCurveTo(550,350,540,350),this._ctx.lineTo(60,350),this._ctx.quadraticCurveTo(t,350,t,340),this._ctx.lineTo(t,260),this._ctx.quadraticCurveTo(t,e,60,e),this._ctx.closePath(),this._ctx.fillStyle="white",this._ctx.fill(),this._ctx.stroke(),this.msg&&(this._ctx.fillStyle="black",this._ctx.font="50px Courier New",this._ctx.textAlign="center",this._ctx.fillText(this.msg,this._canvas.width/2,this._canvas.height/2+20))},e}(n(0).default);e.default=i}]);