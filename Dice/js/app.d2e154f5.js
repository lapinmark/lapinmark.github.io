(function(t){function e(e){for(var s,c,o=e[0],n=e[1],d=e[2],u=0,f=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,o=1;o<i.length;o++){var n=i[o];0!==a[n]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=i[0]))}return t}var s={},a={app:0},r=[];function c(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=s,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(i,s,function(e){return t[e]}.bind(null,s));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=n;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("DiceSample")],1)},r=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container dice-sample"},[i("h2",{staticClass:"title"},[t._v("Попробуйте угадать сумму и бросьте кубики")]),i("div",{staticClass:"bet-wrapper",on:{click:t.changeBet}},[i("div",{staticClass:"bet-less"},[t._v("2 - 6")]),i("div",{staticClass:"bet-switch-box"},[i("div",{staticClass:"bet-switch",class:{"bet-switch_more":t.isMore}})]),i("div",{staticClass:"bet-more"},[t._v("7 - 12")])]),i("div",{staticClass:"dice-wrapper",on:{click:t.shuffleDice}},[i("div",{staticClass:"dice dice_first",class:[t.diceFirstClass,t.rotateClass]},[i("div",{staticClass:"dot dot_top-left"}),i("div",{staticClass:"dot dot_middle-left"}),i("div",{staticClass:"dot dot_bottom-left"}),i("div",{staticClass:"dot dot_center"}),i("div",{staticClass:"dot dot_top-right"}),i("div",{staticClass:"dot dot_middle-right"}),i("div",{staticClass:"dot dot_bottom-right"})]),i("div",{staticClass:"dice dice_second",class:[t.diceSecondClass,t.rotateClass]},[i("div",{staticClass:"dot dot_top-left"}),i("div",{staticClass:"dot dot_middle-left"}),i("div",{staticClass:"dot dot_bottom-left"}),i("div",{staticClass:"dot dot_center"}),i("div",{staticClass:"dot dot_top-right"}),i("div",{staticClass:"dot dot_middle-right"}),i("div",{staticClass:"dot dot_bottom-right"})])]),i("div",{staticClass:"dice-summ"},[t._v(" Сумма равна "),i("span",{staticClass:"dice-summ_highlight"},[t._v(t._s(t.diceSumm))])])])},o=[],n={name:"DiceSample",data:function(){return{maxValue:6,minValue:1,diceFirstValue:6,diceSecondValue:6,rotateClass:"",isMore:!1}},computed:{diceFirstClass:function(){switch(this.diceFirstValue){case 1:return"dice_one";case 2:return"dice_two";case 3:return"dice_three";case 4:return"dice_four";case 5:return"dice_five";case 6:return"dice_six";default:return"dice_six"}},diceSecondClass:function(){switch(this.diceSecondValue){case 1:return"dice_one";case 2:return"dice_two";case 3:return"dice_three";case 4:return"dice_four";case 5:return"dice_five";case 6:return"dice_six";default:return"dice_six"}},diceSumm:function(){return this.diceFirstValue+this.diceSecondValue}},methods:{getRandomDice:function(){var t=this.minValue+Math.random()*(this.maxValue+1-this.minValue);return Math.floor(t)},stopRotation:function(){this.rotateClass=""},rotateDice:function(){this.rotateClass="dice_rotate",setTimeout(this.stopRotation,1100)},shuffleDice:function(){this.rotateDice(),this.diceFirstValue=this.getRandomDice(),this.diceSecondValue=this.getRandomDice(),setTimeout(this.alertResult,1100)},changeBet:function(){this.isMore=!this.isMore},alertResult:function(){this.diceSumm<7&&!1===this.isMore&&alert("Вы выиграли!"),this.diceSumm<7&&!0===this.isMore&&alert("Вы проиграли!"),this.diceSumm>6&&!0===this.isMore&&alert("Вы выиграли!"),this.diceSumm>6&&!1===this.isMore&&alert("Вы проиграли!")}}},d=n,l=(i("f1ea"),i("2877")),u=Object(l["a"])(d,c,o,!1,null,"94dac962",null),f=u.exports,h={name:"app",components:{DiceSample:f}},p=h,m=Object(l["a"])(p,a,r,!1,null,null,null),v=m.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(v)}}).$mount("#app")},"6f5a":function(t,e,i){},f1ea:function(t,e,i){"use strict";var s=i("6f5a"),a=i.n(s);a.a}});
//# sourceMappingURL=app.d2e154f5.js.map