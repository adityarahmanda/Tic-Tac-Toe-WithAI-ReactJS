(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t),c.d(t,"playmodes",(function(){return p})),c.d(t,"difficulties",(function(){return A}));var n=c(0),r=c(2),a=c(1),s=c(7),i=c.n(s),l=c(6);function u(e){for(var t=0;t<e.length;t++)if(null===e[t])return!1;return!0}function o(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(r.a)(t[c],3),a=n[0],s=n[1],i=n[2];if(e[a]&&e[a]===e[s]&&e[a]===e[i])return e[a]}return null}function j(e,t,c){var n="x"===e?"o":"x",r=o(t);if(r===e)return{square:-1,score:1};if(r===n)return{square:-1,score:-1};if(u(t))return{square:-1,score:0};for(var a={square:-1,score:c?-1e3:1e3},s=0;s<t.length;s++)if(!t[s]){t[s]=c?e:n;var i=j(e,t,!c).score;t[s]=null,c?i>a.score&&(a.score=i,a.square=s):i<a.score&&(a.score=i,a.square=s)}return a}function b(e,t){return Math.floor(e+(Math.random()*t-e))}function d(e){var t=0;do{t=b(0,9)}while(null!=e[t]);return t}var f=function(e){var t=e.value,c=e.active,r=e.onClick,a="squares btn ".concat(t&&t," ").concat(c&&"active");return Object(n.jsx)("button",{className:a,onClick:r,children:Object(n.jsx)("div",{className:"content",children:t})})},O=function(e){var t=e.squares,c=e.lines,r=e.onClick;function a(e){if(null==c)return!1;for(var t=0;t<c.length;t++)if(c[t]===e)return!0;return!1}return Object(n.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(n.jsx)(f,{value:e,active:a(t),onClick:function(){return r(t)}},t)}))})},h=function(e){var t=e.active,c=e.value,r="notification ".concat(t&&"show");return Object(n.jsx)("div",{className:r,children:c})},v=c(8),m=function(e){var t=e.isRestart,c=e.playmode,s=e.difficulty,i=Object(a.useState)([Array(9).fill(null)]),f=Object(r.a)(i,2),m=f[0],x=f[1],I=Object(a.useState)(0),N=Object(r.a)(I,2),g=N[0],k=N[1],C=Object(a.useState)(!0),S=Object(r.a)(C,2),y=S[0],E=S[1],H=Object(a.useState)(!0),T=Object(r.a)(H,2),W=T[0],D=T[1],w=Object(a.useState)(!1),_=Object(r.a)(w,2),q=_[0],R=_[1],M=Object(a.useState)(!1),F=Object(r.a)(M,2),U=F[0],Y=F[1],J=Object(a.useState)(!1),P=Object(r.a)(J,2),B=P[0],z=P[1],G=Object(a.useState)(!1),K=Object(r.a)(G,2),L=K[0],Q=K[1],V=Object(a.useState)(Array(2).fill(0)),X=Object(r.a)(V,2),Z=X[0],$=X[1],ee=Object(a.useState)(Array(3).fill(null)),te=Object(r.a)(ee,2),ce=te[0],ne=te[1],re=Object(a.useState)(!1),ae=Object(r.a)(re,2),se=ae[0],ie=ae[1],le=Object(a.useState)(" "),ue=Object(r.a)(le,2),oe=ue[0],je=ue[1],be=m.slice(0,g+1),de=be[g],fe=Object(a.useMemo)((function(e){return Object(l.a)(de)}),[de]),Oe=y?"x":"o";function he(e,t){je(e),ie(!0),setTimeout((function(){ie(!1)}),t)}var ve=Object(a.useCallback)((function(){setTimeout((function(){E(!W),D(!W),k(0),Q(!1),ne(Array(3).fill(null)),c===p.WITH_AI&&W&&Y(!0);var e=W?"o":"x";he(Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:e,children:e})," turn first"]}),1500)}),2e3)}),[c,W]),me=Object(a.useCallback)((function(){var e=o(fe),t=u(fe);if(e||t){if(e){he(Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:Oe,children:Oe})," Win"]}),1500),console.log(Oe+" Win!");var a=Z;a["x"===Oe?0:1]++,$(a)}else he("Draw",1500),console.log("Draw!");Q(!0),ne(function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(r.a)(t[c],3),a=n[0],s=n[1],i=n[2];if(e[a]&&e[a]===e[s]&&e[a]===e[i])return t[c]}return Array(3).fill(null)}(fe)),ve()}else E(!y),c===p.WITH_AI&&"x"===Oe&&R(!0)}),[fe,ve,Oe,Z,y,c]),xe=Object(a.useCallback)((function(e){if(!fe[e]){fe[e]=Oe;var t=[].concat(Object(l.a)(be),[fe]);x(t),k(t.length-1),me()}}),[be,fe,Oe,me]);function Ie(){he("Restart",1500),$(Array(2).fill(0)),x([Array(9).fill(null)]),k(0),E(!0)}return Object(a.useEffect)((function(){t&&Ie()})),Object(a.useEffect)((function(){q&&(z(!0),setTimeout((function(){var e=function(e,t,c){var n;if(e===A.EASY)n=d(t);else if(e===A.MEDIUM){for(var r=0,a=0;a<t.length;a++)null!=t[a]&&r++;n=r<6||0===b(0,2)?j(c,t,!0).square:d(t)}else e===A.HARD&&(n=j(c,t,!0).square);return n}(s,fe,Oe);-1!==e&&(console.log("AI select best square "+e),xe(e),z(!1))}),500),R(!1))}),[q,s,fe,Oe,xe]),Object(a.useEffect)((function(){U&&(z(!0),setTimeout((function(){var e=b(0,8);console.log("AI turn first and select random square "+e),xe(e),z(!1)}),500),Y(!1))}),[U,xe]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{class:"board-wrapper",children:[Object(n.jsxs)("div",{className:"score-wrapper",children:[Object(n.jsx)("div",{className:"player x "+("x"===Oe&&"active"),children:"x"}),Object(n.jsxs)("div",{className:"score centered",children:[Object(n.jsx)(h,{active:se,value:oe}),Z[0]," - ",Z[1]]}),Object(n.jsx)("div",{className:"player o "+("o"===Oe&&"active"),children:"o"})]}),Object(n.jsx)(O,{squares:de,lines:ce,onClick:function(e){return function(e){fe[e]||L||B||(console.log("player select square "+e),xe(e))}(e)}})]}),Object(n.jsx)(v.a,{className:"restart",onClick:function(){return Ie()}})]})},x=function(e){var t=e.onClick;return Object(n.jsxs)("div",{className:"main-menu centered",children:[Object(n.jsx)("h3",{children:"Choose your play mode"}),Object(n.jsx)("div",{className:"menu",children:Object(n.jsx)("button",{className:"btn with-ai",onClick:function(){return t(p.WITH_AI)},children:Object(n.jsx)("span",{children:p.WITH_AI})})}),Object(n.jsx)("div",{className:"menu",children:Object(n.jsx)("button",{className:"btn with-friend",onClick:function(){return t(p.WITH_FRIEND)},children:Object(n.jsx)("span",{children:p.WITH_FRIEND})})})]})},I=function(e){var t=e.value,c=e.gameStatus,r=e.onClick;return Object(n.jsx)("nav",{class:"nav-menu",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)("span",{className:t===p.WITH_AI&&c&&"active",onClick:function(){return r(p.WITH_AI)},children:["Play ",p.WITH_AI]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("span",{className:t===p.WITH_FRIEND&&c&&"active",onClick:function(){return r(p.WITH_FRIEND)},children:["Play ",p.WITH_FRIEND]})})]})})},N=function(e){var t=e.value,c=e.onClick;return Object(n.jsxs)("div",{className:"settings",children:[Object(n.jsx)("h5",{children:"Settings"}),Object(n.jsx)("div",{className:"left-align",children:"Difficulty"}),Object(n.jsxs)("div",{className:"dropdown left-align",children:[t,Object(n.jsx)("div",{className:"down-arrow"}),Object(n.jsxs)("div",{className:"dropdown-contents",children:[Object(n.jsx)("div",{onClick:function(){return c(A.EASY)},children:A.EASY}),Object(n.jsx)("div",{onClick:function(){return c(A.MEDIUM)},children:A.MEDIUM}),Object(n.jsx)("div",{onClick:function(){return c(A.HARD)},children:A.HARD})]})]})]})},p=(c(14),{WITH_AI:"With AI",WITH_FRIEND:"With Friend"}),A={EASY:"Stupid",MEDIUM:"Normal",HARD:"Unbeatable"},g=function(){var e=Object(a.useState)(p.WITH_AI),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(A.MEDIUM),l=Object(r.a)(i,2),u=l[0],o=l[1],j=Object(a.useState)(!1),b=Object(r.a)(j,2),d=b[0],f=b[1],O=Object(a.useState)(!1),h=Object(r.a)(O,2),v=h[0],g=h[1],k=Object(a.useState)(!1),C=Object(r.a)(k,2),S=C[0],y=C[1];return Object(a.useEffect)((function(){S&&y(!1)}),[S]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("header",{id:"header",children:[Object(n.jsx)("div",{className:"hamburger-menu-button",onClick:function(){return g(!v)},children:Object(n.jsx)("div",{className:v?"hamburger-menu open":"hamburger-menu"})}),Object(n.jsxs)("div",{id:"navbar",className:!v&&"close",children:[Object(n.jsx)(I,{value:c,gameStatus:d,onClick:function(e){return function(e){d?(s(e),y(!0)):(s(e),f(!0))}(e)}}),Object(n.jsx)(N,{value:u,onClick:function(e){return function(e){d&&c===p.WITH_AI&&y(!0),o(e)}(e)}})]}),Object(n.jsx)("h1",{className:"title centered",onClick:function(){d&&(f(!1),v&&g(!1))},children:"tictactoe"})]}),Object(n.jsx)("main",{id:"main-wrapper",children:Object(n.jsx)("div",{className:"game-wrapper",children:d?Object(n.jsx)(m,{playmode:c,difficulty:u,isRestart:S}):Object(n.jsx)(x,{onClick:function(e){return function(e){s(e),f(!0),v&&g(!1)}(e)}})})}),!d&&Object(n.jsxs)("footer",{id:"footer",className:"centered",children:["@2020 - ",Object(n.jsx)("a",{href:"https://adityarahmanda.com",children:"Aditya Rahmanda"})]})]})};i.a.render(Object(n.jsx)(g,{}),document.getElementById("outer-wrapper"))}},[[15,1,2]]]);
//# sourceMappingURL=main.297b8fcf.chunk.js.map