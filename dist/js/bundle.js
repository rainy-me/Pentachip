!function(t){var o={};function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,o,n){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)i.d(n,e,function(o){return t[o]}.bind(null,e));return n},i.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="",i(i.s=0)}([function(t,o,i){"use strict";o.__esModule=!0;var n=i(1),e=document.getElementById("game");new n.default(e).start("P1")},function(t,o,i){"use strict";o.__esModule=!0;var n=i(2),e=function(){function t(t){var o=this;t.height=600,t.width=600,this.ctx=t.getContext("2d"),this.config={COLOR:{P1:"black",P2:"red"},LATTICE:{SIZE:100},GAME_CHIP:{RADIUS:20,SPEED:.01}},this.board=new n.default(this.config,this.ctx),this.state=this.board.load(),t.onmousemove=function(i){var n=t.getBoundingClientRect(),e={x:i.clientX-n.left,y:i.clientY-n.top};o.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),o.board.draw(),o.state.chips.map(function(t){t.isHovering=o.calculateHovering(t.position,e),o.drawChip(t)})}}return t.prototype.calculateHovering=function(t,o){return Math.sqrt(Math.pow(Math.abs(t.x*this.config.LATTICE.SIZE-o.x),2)+Math.pow(Math.abs(t.y*this.config.LATTICE.SIZE-o.y),2))<this.config.GAME_CHIP.RADIUS},t.prototype.start=function(t){var o=this;this.turn=t,this.board.draw(),this.state.chips.forEach(function(t){return o.drawChip(t)})},t.prototype.drawChip=function(t){this.ctx.beginPath(),this.ctx.arc(t.position.x*this.config.LATTICE.SIZE,t.position.y*this.config.LATTICE.SIZE,this.config.GAME_CHIP.RADIUS,0,2*Math.PI,!1),this.ctx.shadowBlur=8,this.ctx.shadowColor=t.isHovering?"rgba(0, 188, 212, 1)":"rgba(0,0,0,0)",this.ctx.fillStyle=this.config.COLOR[t.ownedBy],this.ctx.fill(),this.ctx.closePath()},t.prototype.move=function(t){return this.moving=t,this},t.prototype.to=function(t){var o=this;return new Promise(function(i,n){console.log(t);var e=t.x-o.moving.position.x,r=t.y-o.moving.position.y,a=function(){var n=!0;o.moving.position.x!==t.x&&(n=!1,o.moving.position.x+=e/100,o.moving.position.x=parseFloat(o.moving.position.x.toFixed(2))),o.moving.position.y!==t.y&&(n=!1,o.moving.position.y+=r/100,o.moving.position.y=parseFloat(o.moving.position.y.toFixed(2))),n?i():(o.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),o.drawChip(o.moving),o.board.draw(),o.state.chips.forEach(function(t){return o.drawChip(t)}),requestAnimationFrame(a))};a()})},t}();o.default=e},function(t,o,i){"use strict";var n=this&&this.__read||function(t,o){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,e,r=i.call(t),a=[];try{for(;(void 0===o||o-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){e={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}return a},e=this&&this.__spread||function(){for(var t=[],o=0;o<arguments.length;o++)t=t.concat(n(arguments[o]));return t};o.__esModule=!0;var r=i(3),a=function(){function t(t,o){var i=this;this.config=t,this.ctx=o,this.paths=[],e(Array(5).keys()).map(function(t){var o=t+1;i.paths.push({from:[o,1],to:[o,5]}),i.paths.push({from:[1,o],to:[5,o]})}),this.paths=this.paths.concat([{from:[1,1],to:[5,5]},{from:[1,5],to:[5,1]}]),this.paths=this.paths.concat([{from:[3,1],to:[1,3]},{from:[1,3],to:[3,5]},{from:[3,5],to:[5,3]},{from:[5,3],to:[3,1]}])}return t.prototype.load=function(){var t=[],o=[],i=e(Array(5).keys());return i.map(function(o){i.map(function(i){t.push({x:o+1,y:i+1})})}),i.map(function(t){o.push(new r.default({x:t+1,y:1},"P1")),o.push(new r.default({x:t+1,y:5},"P2"))}),{map:t,chips:o}},t.prototype.draw=function(){var t=this;this.paths.map(function(o){t.ctx.strokeStyle="black",t.ctx.shadowBlur=0,t.ctx.beginPath(),t.ctx.moveTo(o.from[0]*t.config.LATTICE.SIZE,o.from[1]*t.config.LATTICE.SIZE),t.ctx.lineTo(o.to[0]*t.config.LATTICE.SIZE,o.to[1]*t.config.LATTICE.SIZE),t.ctx.lineWidth=4,t.ctx.stroke(),t.ctx.closePath()})},t}();o.default=a},function(t,o,i){"use strict";o.__esModule=!0;var n=function(){return function(t,o){this.position=t,this.ownedBy=o,this.id=t.x+"-"+t.y,this.isHovering=!1}}();o.default=n}]);