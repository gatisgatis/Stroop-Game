(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);for(var c=n(0),o=n(2),s=n.n(o),a=n(9),l=n.n(a),r=(n(15),n(1)),i=n(3),u=n(7),d=n(23),j=(n(16),n(17),{delay:2,colorCount:4,gamemode:"buttons",roundCount:10,language:"en",dificulty:"easy",sound:"off"}),b=["red","blue","green","yellow","orange","grey","brown","purple","coral","pink"],O=[].concat(b),m=["a","s","d","w","c","4","5","6","8","1"],h={color:"",word:""},p=[],x=1;x<101;x++)p.push(x);for(var g=[],f=1;f<11;f++)g.push(f/2);for(var v=[],y=1;y<11;y++)v.push(y);var N=function(e){var t=e.onSubmit,n=e.cancelClick,s=e.nowValues,a=Object(o.useState)(s),l=Object(i.a)(a,2),u=l[0],b=l[1];return Object(c.jsx)("div",{className:"settings-wrapper",children:Object(c.jsxs)("form",{action:"submit",onSubmit:function(e){return t(e,u)},className:"settings__form",children:[Object(c.jsxs)("label",{htmlFor:"round-count",children:["ROUND COUNT:",Object(c.jsx)("select",{name:"round-count",id:"round-count",value:u.roundCount,onChange:function(e){return b(Object(r.a)(Object(r.a)({},u),{},{roundCount:parseInt(e.target.value,10)}))},children:p.map((function(e){return Object(c.jsx)("option",{value:e.toString(),children:e},Object(d.a)())}))})]}),Object(c.jsxs)("label",{htmlFor:"color_count",children:["COLOR COUNT:",Object(c.jsx)("select",{name:"color_count",id:"color_count",value:u.colorCount,onChange:function(e){return b(Object(r.a)(Object(r.a)({},u),{},{colorCount:parseInt(e.target.value,10)}))},children:v.map((function(e){return Object(c.jsx)("option",{value:e.toString(),children:e},Object(d.a)())}))})]}),Object(c.jsxs)("label",{htmlFor:"delay",children:["DELAY:",Object(c.jsx)("select",{name:"delay",id:"delay",value:u.delay,onChange:function(e){return b(Object(r.a)(Object(r.a)({},u),{},{delay:parseFloat(e.target.value)}))},children:g.map((function(e){return Object(c.jsxs)("option",{value:e.toString(),children:[e.toFixed(1)," s"]},Object(d.a)())}))})]}),Object(c.jsxs)("label",{htmlFor:"gamemode",children:["Game Mode:",Object(c.jsxs)("select",{name:"gamemode",id:"gamemode",value:u.gamemode,onChange:function(e){return b(Object(r.a)(Object(r.a)({},u),{},{gamemode:e.target.value}))},children:[Object(c.jsx)("option",{value:"buttons",children:"Buttons"}),Object(c.jsx)("option",{value:"keyboard",children:"Keyboard"})]})]}),Object(c.jsxs)("label",{htmlFor:"lang",children:["LANGUAGE:",Object(c.jsxs)("select",{name:"lang",id:"lang",value:u.language,onChange:function(e){return b(Object(r.a)(Object(r.a)({},u),{},{language:e.target.value}))},children:[Object(c.jsx)("option",{value:"lv",children:"LV"}),Object(c.jsx)("option",{value:"en",children:"EN"})]})]}),Object(c.jsxs)("label",{htmlFor:"dif",children:["DIFICULTY:",Object(c.jsxs)("select",{name:"dif",id:"dif",value:u.dificulty,onChange:function(e){return b(Object(r.a)(Object(r.a)({},u),{},{dificulty:e.target.value}))},children:[Object(c.jsx)("option",{value:"easy",children:"EASY"}),Object(c.jsx)("option",{value:"hard",children:"HARD"})]})]}),Object(c.jsxs)("label",{htmlFor:"sound",children:["SOUND:",Object(c.jsxs)("select",{name:"sound",id:"sound",value:u.sound,onChange:function(e){return b(Object(r.a)(Object(r.a)({},u),{},{sound:e.target.value}))},children:[Object(c.jsx)("option",{value:"on",children:"ON"}),Object(c.jsx)("option",{value:"off",children:"OFF"})]})]}),Object(c.jsx)("button",{type:"submit",children:"OK"}),Object(c.jsx)("button",{type:"button",onClick:n,className:"settings__cancel",children:"X"}),Object(c.jsx)("button",{type:"button",onClick:function(){return b(j)},children:"Restore Defaults"})]})})},C=(n(18),function(e){var t=e.cancelClick,n=e.scores;return Object(c.jsxs)("div",{className:"highscores-wrapper",children:[Object(c.jsx)("div",{className:"highscores__title",children:"BEST RESULTS"}),Object(c.jsx)("div",{className:"highscores__categories",children:"Place/Name/Result"}),Object(c.jsx)("button",{type:"button",onClick:t,className:"highscores__cancel",children:"X"}),n.map((function(e,t){return Object(c.jsxs)("div",{className:"highscore__line",children:[t+1,". ",e.name," ",(100*e.result).toFixed(2),"%"]},Object(d.a)())}))]})}),w=(n(19),function(e){var t=e.cancelClick;return Object(c.jsxs)("div",{className:"instructions-wrapper",children:[Object(c.jsx)("div",{className:"instr__title",children:"INSTRUCTIONS"}),Object(c.jsx)("div",{className:"instr__text",children:"Press button on screen or key on keyboard to win the game! Good Luck!"}),Object(c.jsx)("button",{type:"button",onClick:t,className:"instructions__cancel",children:"X"})]})}),_=(n(20),function(e){var t=e.cancelClick,n=e.saveClick,s=e.result,a=e.keysOrBtns,l=e.roundCount,r=e.dificulty,u=e.colorCount,d=Object(o.useState)(""),j=Object(i.a)(d,2),b=j[0],O=j[1];return Object(c.jsxs)("div",{className:"end-pop-up-wrapper",children:[Object(c.jsx)("button",{type:"button",onClick:t,className:"end-pop-up__cancel",children:"X"}),Object(c.jsx)("div",{className:"popup__title",children:"Game Result"}),Object(c.jsxs)("div",{className:"popup__content",children:[" Game Mode: ",a]}),Object(c.jsxs)("div",{className:"popup__content",children:[" Round Count: ",l]}),Object(c.jsxs)("div",{className:"popup__content",children:[" Total Colors: ",u]}),Object(c.jsxs)("div",{className:"popup__content",children:[" Dificulty: ",r]}),Object(c.jsxs)("div",{className:"popup__content",children:[" Your scored ",(100*s).toFixed(2),"%! Congrats!"]}),Object(c.jsx)("div",{className:"popup__content",children:" "}),Object(c.jsx)("div",{className:"popup__input-label",children:"Enter Your name to save your score"}),Object(c.jsx)("input",{className:"popup__input",type:"text",value:b,autoFocus:!0,onChange:function(e){return O(e.target.value)}}),Object(c.jsx)("button",{type:"button",onClick:function(){return n(b)},className:"popup__button",children:"Save Result"}),Object(c.jsx)("button",{type:"button",onClick:t,className:"popup__button",children:"Return"})]})}),k=n.p+"static/media/logo.a3ce597d.png",S=(n(21),[]),G=[],T=0,F=[],R="-",E=0,I=0,L=[];localStorage.getItem("ls-highScores")&&L.push.apply(L,Object(u.a)(JSON.parse(localStorage.getItem("ls-highScores"))));var A,D={highScoresTablo:!1,settingsWindow:!1,introGifwindow:!0,endGameResults:!1,instructionsWindow:!1,preGameAnimation:!1},U=function(){var e=Object(o.useState)(j),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(o.useState)(h),l=Object(i.a)(a,2),p=l[0],x=l[1],g=Object(o.useState)(D),f=Object(i.a)(g,2),v=f[0],y=f[1],U=Object(o.useState)("before"),W=Object(i.a)(U,2),M=W[0],P=W[1];Object(o.useEffect)((function(){return"keyboard"===n.gamemode&&document.body.addEventListener("keydown",(function(e){R=e.key})),function(){document.body.removeEventListener("keydown",(function(e){R=e.key}))}}),[n.gamemode]),Object(o.useEffect)((function(){if(console.log(n),"pre-active"===M){T=0;for(var e=0;e<n.roundCount;e+=1){var t=Math.floor(Math.random()*O.length),c=Math.floor(Math.random()*n.colorCount);S[e]={color:b[c],word:O[t]}}for(var o=0;o<n.colorCount;o+=1)G[o]=b[o]}}),[n,M]),Object(o.useEffect)((function(){I<1?I=1:A=T>=n.roundCount-1?setTimeout((function(){F[T]=R,R="-",console.log(R,F,S,G),E=B(),P("end"),y(Object(r.a)(Object(r.a)({},v),{},{endGameResults:!0}))}),1e3*n.delay):setTimeout((function(){F[(T+=1)-1]=R,R="-",x(S[T])}),1e3*n.delay)}),[p]);var B=function(){var e=Object(u.a)(F.map((function(e){var t;return t=1===e.length?m.indexOf(e):b.indexOf(e),b[t]})));return S.map((function(e){return e.color})).filter((function(t,n){return t===e[n]})).length/n.roundCount};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"container container-fluid header",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"logo-overlay"}),Object(c.jsx)("div",{className:"col-xs-12 col-md-4 flexbox center-xs",children:Object(c.jsx)("div",{className:"logo-wrapper",children:Object(c.jsx)("img",{src:k,alt:"LOGO",className:"logo"})})}),Object(c.jsx)("div",{className:"col-xs-12 col-md-8 flexbox center-xs end-md",children:Object(c.jsxs)("div",{className:"header__button-wrapper",children:[Object(c.jsx)("button",{type:"button",className:"header__button howtoplay-button",onClick:function(){return y(Object(r.a)(Object(r.a)({},v),{},{instructionsWindow:!0}))},children:"How To Play"}),Object(c.jsx)("button",{type:"button",className:"header__button results-button",onClick:function(){return y(Object(r.a)(Object(r.a)({},v),{},{highScoresTablo:!0}))},children:"High Scores"}),Object(c.jsx)("button",{type:"button",disabled:"active"===M||"pre-active"===M,className:"header__button settings-button",onClick:function(){return y(Object(r.a)(Object(r.a)({},v),{},{settingsWindow:!0}))},children:"Settings"})]})})]}),v.settingsWindow&&Object(c.jsx)("div",{className:"background",children:Object(c.jsx)(N,{nowValues:n,onSubmit:function(e,t){e.preventDefault(),s({delay:t.delay,roundCount:t.roundCount,colorCount:t.colorCount,gamemode:t.gamemode,language:t.language,dificulty:t.dificulty,sound:t.sound}),y(Object(r.a)(Object(r.a)({},v),{},{settingsWindow:!1}))},cancelClick:function(){return y(Object(r.a)(Object(r.a)({},v),{},{settingsWindow:!1}))}})}),v.instructionsWindow&&Object(c.jsx)("div",{className:"background",children:Object(c.jsx)(w,{cancelClick:function(){return y(Object(r.a)(Object(r.a)({},v),{},{instructionsWindow:!1}))}})}),v.highScoresTablo&&Object(c.jsx)("div",{className:"background",children:Object(c.jsx)(C,{cancelClick:function(){return y(Object(r.a)(Object(r.a)({},v),{},{highScoresTablo:!1}))},scores:L})}),v.endGameResults&&Object(c.jsx)("div",{className:"background",children:Object(c.jsx)(_,{result:E,keysOrBtns:n.gamemode,roundCount:n.roundCount.toString(),dificulty:n.dificulty,colorCount:n.colorCount.toString(),saveClick:function(e){L.push({name:e,result:E}),L.sort((function(e,t){return e.result>t.result?-1:1})),localStorage.setItem("ls-highScores",JSON.stringify(L)),y(Object(r.a)(Object(r.a)({},v),{},{endGameResults:!1}))},cancelClick:function(){return y(Object(r.a)(Object(r.a)({},v),{},{endGameResults:!1}))}})})]})}),Object(c.jsx)("section",{children:Object(c.jsxs)("div",{className:"container container-fluid main",children:[v.introGifwindow&&"before"===M&&Object(c.jsxs)("div",{className:"intro-animation",children:[Object(c.jsx)("span",{style:{color:"red"},children:"S"}),Object(c.jsx)("span",{style:{color:"green"},children:"T"}),Object(c.jsx)("span",{style:{color:"orange"},children:"R"}),Object(c.jsx)("span",{style:{color:"yellow"},children:"O"}),Object(c.jsx)("span",{style:{color:"blue"},children:"O"}),Object(c.jsx)("span",{style:{color:"pink"},children:"P"})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-xs-12",children:"active"===M&&Object(c.jsxs)("div",{className:"round-counter",children:["Round: ",T+1,"/",n.roundCount]})})}),Object(c.jsx)("div",{className:"big-btn-wrapper flexbox center-xs",children:Object(c.jsx)("button",{type:"button",className:"big-btn",onClick:function(){"active"!==M?(y(Object(r.a)(Object(r.a)({},v),{},{introGifwindow:!1,preGameAnimation:!0})),P("pre-active"),setTimeout((function(){x(S[0]),P("active"),y(Object(r.a)(Object(r.a)({},v),{},{preGameAnimation:!1,introGifwindow:!1}))}),2e3)):(P("before"),clearTimeout(A))},children:"pre-active"===M||"active"===M?"Cancel Game":"Start New Game"})}),Object(c.jsxs)("div",{className:"game-window",children:[("before"===M||"end"===M)&&!v.introGifwindow&&Object(c.jsxs)("div",{className:"game-window-logo",children:[Object(c.jsx)("span",{style:{color:"red"},children:"S"}),Object(c.jsx)("span",{style:{color:"green"},children:"T"}),Object(c.jsx)("span",{style:{color:"orange"},children:"R"}),Object(c.jsx)("span",{style:{color:"yellow"},children:"O"}),Object(c.jsx)("span",{style:{color:"blue"},children:"O"}),Object(c.jsx)("span",{style:{color:"pink"},children:"P"})]}),v.preGameAnimation&&Object(c.jsx)("div",{className:"pre-game-animation",children:"GO"}),"active"===M&&Object(c.jsx)("div",{className:"time-effect-line",style:{animationDuration:"".concat(n.delay,"s"),animationIterationCount:n.roundCount}}),Object(c.jsx)("div",{className:"game-word",style:{color:p.color},children:"active"===M&&p.word})]}),Object(c.jsx)("div",{className:"btns-keys-wrapper1",children:"active"===M&&Object(c.jsxs)("div",{className:"row btns-keys-wrapper2",children:["buttons"===n.gamemode&&G.slice(0,n.colorCount).map((function(e){return Object(c.jsx)("div",{className:"col-xs-4 col-md-3 flexbox center-xs",children:Object(c.jsx)("button",{className:"play-btn",type:"button",onClick:function(){R=e},style:{backgroundColor:"easy"===n.dificulty?e:"white"},children:e.toUpperCase()})},Object(d.a)())})),"keyboard"===n.gamemode&&G.slice(0,n.colorCount).map((function(e,t){return Object(c.jsx)("div",{className:"col-xs-4 col-md-3 flexbox center-xs",children:Object(c.jsx)("h3",{className:"instruction",style:{backgroundColor:e},children:m[t]})},Object(d.a)())}))]})})]})})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root")),W()}],[[22,1,2]]]);
//# sourceMappingURL=main.9cbc64b0.chunk.js.map