(function(t){function e(e){for(var n,o,r=e[0],s=e[1],l=e[2],b=0,d=[];b<r.length;b++)o=r[b],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),c()}function c(){for(var t,e=0;e<a.length;e++){for(var c=a[e],n=!0,r=1;r<c.length;r++){var s=c[r];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=c[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=n,o.d=function(t,e,c){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(c,n,function(e){return t[e]}.bind(null,n));return c},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=s;a.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"0c3b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAYAAAC803lsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARZSURBVHgBxZiLUdtKFIbXxjAwPK6o4MoVBCrAVHBJBTEVhFsBpoJABTYVECqwqCCmApQK7PAYGF7O/8lnyVoosWKTyZnZsbTaPec/r18rV9wU0u/3o/n5+fj5+XnDpgaVSmXw+PjYW19fH7gppFJ24dXVVUPG/tPljkb8i6U9jeTh4eFIoFJXUqqTFgDg+vq6KxDd4XDY1DhVJN7Pzc3VZWx9ZWWlwq+WbjKvcQ5YRexC+9qKXuxmFSn6pDEECIB+c29TAzDDm5ubfTeN4IU2f5HxvhTtuRlEOloG5oTaKr3RQODJxZuE1WXR2dDAqS+lwRCJtwRRAKY9cTG5JIxvDcKLFf6wKN0v7YtxKl1dcbC6utoqUnR7exvz+/T0FGldBHeoewZ3d3eDsvwhMIfa90GdVg/3vACxkDXUjnWPHt7QiGUU4oon2EApHJJqnMlQUsQjRoY4fBQ6XLGHWTR0uSsgneA+FZBE3PBVG7lOfRTCyDCq1SqAYz1/h0OmH2BHeVB0ktZ9DKNSsWiQs32BgJjc5eVlU4rbkBX3pET0nRnSfGbYKwWgy1E8XgssYHa0/gMO6LqzvLx8EESl7x0PgcCa3xSqnSAtXQs3EhrOjAb31ErYkkShp/lj6UuIbq1Wa2oNpJbI8La3CUCB2+W+Zps3NHngNZmCuinAaEI6lpaWUlcgwUuQ1PjaaqoLU4pfxluKckqUAwfO7d2VSSXolm0A5I2QFuUS5aTlX6ITpiZTIs+oIwD79MAbmtvzqbHIJYrAe1eQ/qq8jk3Zq/aDV1SQF2yg5agRN6qHNBgDm/9IOsk9YSfKa2trTQpSgE7pkvv7+91A/cBHM0yNE9J+Ptza3CK08vJwcXExklLaOAoLVr9nKNVcqucDAclSo/k2jlhqXhOYOR5F0T+Zc0GrbmpDL1wM1bsfhRqmI/UXuWJF+WcKVeBT1VWL1GiuI91hNEgNHXXiU1NzPzoDb8eAyMNtX7BS3tN1WlSwRE/PKHh0UKjdhYWFrFBNJx0zBgTeCWy7mhVWauw5JkZCLc+ydAVF6MZZFmWpFeSpwGcGLRpti9pRXrfmtrTnxfGsRmTgTJveuQIxsvvkRulICLuRmPcssmJlf1tpZrojQLBnh5uibtQ+uurY32f5CQjsVZ3o2Qmtq8tj6FtGG25UL74uUhs9c4j5fYva/9J3mAdRZC986fWNDfcKNrWtKHtGRPDG6B0xeinCMVsYtxQd6HlD6dlSN9YLgGTOCcSmK3jYmvUsQv2oGzp25siOhwV2/Jmk+StFF0ZGMwnGYM78sZB7jqFFAPNANmY6dU8Qzjylj6F0yZ8A44+h+t0pvcnXC981bkYhHRTnxLr4mVhk+uQUOnZTCN6zn++j3/1AGxNyGXjTxaNJ3yU8NydYP2R/mW+ZUh/hxiXUTMOmkuAMkglnFXtN+FdFYl8ESRkbpf8NQOxN3YCs7JAUB48hsnNejjrDfJ7274m/Lt8BP3i936pdLnkAAAAASUVORK5CYII="},1057:function(t,e,c){"use strict";c("398f")},"14e7":function(t,e,c){"use strict";c("7a53")},1771:function(t,e,c){var n={"./X.svg":"f865","./ad.jpg":"2383","./facebook.png":"5307","./facebook.svg":"aaa3","./img/bck-tickets.jpg":"8a9e","./img/home-bg.png":"a1d5","./img/lineup-bg.jpg":"4e87","./insta.svg":"598a","./instagram.png":"c7f8","./jan.jpg":"6620","./menu.svg":"36be","./metallica.jpg":"de0d","./spotify.png":"0c3b","./spotify.svg":"9451","./system-of-a-down.jpg":"1d7c","./tired-lion.jpg":"a6fe","./uxrocks.svg":"b17d"};function i(t){var e=a(t);return c(e)}function a(t){if(!c.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="1771"},"1c2c":function(t,e,c){"use strict";c("e72e")},"1d7c":function(t,e,c){t.exports=c.p+"img/system-of-a-down.ab6c56a3.jpg"},"1f84":function(t,e,c){"use strict";c("b450")},"207b":function(t,e,c){"use strict";c("5ea1")},2370:function(t,e,c){"use strict";c("271a")},2383:function(t,e,c){t.exports=c.p+"img/ad.f0df81d3.jpg"},"270f":function(t,e,c){"use strict";c("6584")},"271a":function(t,e,c){},2760:function(t,e,c){"use strict";c("7df5")},"27c8":function(t,e,c){"use strict";c("a096")},"2a18":function(t,e,c){"use strict";c("6896")},"2fcf":function(t,e,c){"use strict";c("72f6")},3003:function(t,e,c){},"36be":function(t,e,c){t.exports=c.p+"img/menu.e43470c1.svg"},"398f":function(t,e,c){},"3fef":function(t,e,c){},"4e87":function(t,e,c){t.exports=c.p+"img/lineup-bg.0c7165dc.jpg"},5307:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAYAAABTERJSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMASURBVHgB3ViLjdpAEB2+EhJCUEGcCuIO4lSQEuAqgFRwSQWBCoASroI4FRypAF8FWHwlvnnv2CXGZ5s1vkPRPWm0ttmdfZ6dnxH5j5CTDFitVtZ2u7VOynI5v1qtjuRKpCIzmUzqpVKphcuvEBtSj5nqQoabzcZtNBqevCYZkiiXy+3D4dBRBFxc/4GM8vn8qFAo+LQQ7uuwjg35jDkORg/jYL1e90DKl6yYzWbOYrEYz+fzA6QPsU3W4QWs6XQ64Dq13mhdLJbLZVuReITyq5SRFNbrl+nINdBE+HY8JskArtdWSk2IVtBEDOfXGVlBiZqnCfHoTfQ+K1ZnPDaxiLLgRL31SaI2pD4eOfVH6c6HH6iosRCWXy5FABS39vt9V+JD/AxK3x31F4vFTiIZOhuGFmRgmB+akhJMiniBIcK+HbZOMXiDhOYoq/wQMwSVedjADdzHWnW323WRn5oqgXYjJ8HsvyhiiEDIMpf0JQWi9iqG5tiwzDBJCY8S591StyfLYJ0Np/2u75GRE4+aGRyWbEaSUUmtjkmuJABELCi5j/iJZcAOzHMxeBJPZkS/wfgB4xOf5QOLn9+SlVduAFW3eFwf9bMXoQ1vH8sNgGP0ws/CPqOZPkm8ElbpO14jIn7KP7/xEbLf9DxEjCcJ4HHHkiFThBrNZyUpUYlroIjfazI83lqtNhBDqHbjzC3ygU08DD6jQm4AkHC4X7AzDPsMPfyT3ABqn7MWNUzmAeJkboQuQJUdBzKMJYMyMJBjGm/LGwK+SV/z2CNLHBk6J3ymh8vWW1lHF2Nm+nCGfpFnEFUsXJzUz9rhRRBhY8965Kl9LoONkW7ALym/1N0FoRr6Q+p+mr2qJvQaPbAmcnVTrgmpNtGSK0ArYP1jJiIBQnagb+mbklLrtDXGJk248Rcle1bVf1hy/KL8rdoAH795qEV11CYb9YrJjD7BrpFpokdnNfmiTPutbbE1lWPv60TNIQEQZGZ9YN5K81mb6V8IHgULnr6nhSqViifvAX8Ba4poqf7DtZEAAAAASUVORK5CYII="},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function i(t,e,c,i,a,o){var r=Object(n["x"])("Nav"),s=Object(n["x"])("router-view"),l=Object(n["x"])("Footer");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(r),Object(n["i"])(s,null,{default:Object(n["D"])((function(t){var e=t.Component;return[Object(n["i"])(n["b"],{name:"fade",mode:"out-in"},{default:Object(n["D"])((function(){return[(Object(n["r"])(),Object(n["e"])(Object(n["y"])(e),{class:"margin-top"}))]})),_:2},1024)]})),_:1}),Object(n["i"])(l)],64)}var a=Object(n["E"])("data-v-0843be39");Object(n["u"])("data-v-0843be39");var o=Object(n["g"])('<section class="linkz" data-v-0843be39><h2 data-v-0843be39>LINKS</h2><a href="#/lineup" data-v-0843be39>LINEUP</a><a href="#/tickets" data-v-0843be39>TICKETS</a><a href="" data-v-0843be39>INFORMATION</a><a href="#/faq" data-v-0843be39>FAQ&#39;S</a><a href="" data-v-0843be39>NEWS</a><a href="#/contact" data-v-0843be39>CONTACT</a></section>',1),r={class:"tickets"},s=Object(n["i"])("div",null,[Object(n["i"])("h2",null,"TICKETS"),Object(n["i"])("a",{href:"#/tickets"},"ON SALE"),Object(n["i"])("a",{href:"#/tickets"},"INFO")],-1),l={class:"general"},u=Object(n["i"])("div",{class:"enquiries"},[Object(n["i"])("h2",null,"GENERAL ENQUIRIES"),Object(n["i"])("p",null,[Object(n["h"])(" Got a question? Please read through our "),Object(n["i"])("a",{href:"#/faq"},"FAQ"),Object(n["h"])("’s carefully before emailing us! "),Object(n["i"])("a",{href:"info@uxrocks.com"},"info@uxrocks.com")])],-1);Object(n["s"])();var b=a((function(t,e,c,i,a,b){var d=this,j=Object(n["x"])("GhostBtn"),p=Object(n["x"])("SocialLinks");return Object(n["r"])(),Object(n["e"])("footer",null,[o,Object(n["i"])("section",r,[s,Object(n["i"])(j,{onClick:e[1]||(e[1]=function(t){return d.$router.push("tickets")}),title:"BUY TICKETS"})]),Object(n["i"])("section",l,[u,Object(n["i"])(p)])])})),d=Object(n["E"])("data-v-58ecada9");Object(n["u"])("data-v-58ecada9");var j={class:"ghost-btn"};Object(n["s"])();var p=d((function(t,e,c,i,a,o){return Object(n["r"])(),Object(n["e"])("button",j,Object(n["A"])(c.title),1)})),O={props:{title:String}};c("eabf");O.render=p,O.__scopeId="data-v-58ecada9";var f=O,v=c("9451"),m=c.n(v),h=c("598a"),A=c.n(h),g=c("aaa3"),k=c.n(g),y=Object(n["E"])("data-v-0032580c");Object(n["u"])("data-v-0032580c");var C={class:"social-cont"},S=Object(n["i"])("img",{src:m.a,alt:"Spotify logo"},null,-1),x=Object(n["i"])("img",{src:A.a,alt:"Instagram logo"},null,-1),w=Object(n["i"])("img",{src:k.a,alt:"Facebook logo"},null,-1);Object(n["s"])();var I=y((function(t,e,c,i,a,o){return Object(n["r"])(),Object(n["e"])("div",C,[Object(n["i"])("a",{onClick:e[1]||(e[1]=function(){return o.linkSpotify.apply(o,arguments)})},[S]),Object(n["i"])("a",{onClick:e[2]||(e[2]=function(){return o.linkInsta.apply(o,arguments)})},[x]),Object(n["i"])("a",{onClick:e[3]||(e[3]=function(){return o.linkFb.apply(o,arguments)})},[w])])})),E={methods:{linkSpotify:function(){window.location="https://spotify.com/"},linkInsta:function(){window.location="https://instagram.com"},linkFb:function(){window.location="https://facebook.com"}}};c("e17e");E.render=I,E.__scopeId="data-v-0032580c";var T=E,B={components:{GhostBtn:f,SocialLinks:T}};c("2fcf");B.render=b,B.__scopeId="data-v-0843be39";var U=B,R=c("b17d"),L=c.n(R),q=c("36be"),N=c.n(q),M=Object(n["E"])("data-v-6553d6f2");Object(n["u"])("data-v-6553d6f2");var D={class:"nav-positioning"},Q={id:"nav"},F=Object(n["i"])("img",{src:L.a,alt:"logo"},null,-1),X={class:"links"},K=Object(n["h"])("HOME"),P=Object(n["h"])("LINEUP"),Y=Object(n["h"])("TICKETS"),H=Object(n["h"])("CONTACT"),J=Object(n["h"])("FAQ");Object(n["s"])();var G=M((function(t,e,c,i,a,o){var r=Object(n["x"])("router-link"),s=Object(n["x"])("MenuModal");return Object(n["r"])(),Object(n["e"])("div",D,[Object(n["i"])("div",Q,[Object(n["i"])(r,{to:"/"},{default:M((function(){return[F]})),_:1}),Object(n["i"])("img",{class:"hamburger-menu",onClick:e[1]||(e[1]=function(t){return a.showModal=!0}),src:N.a,alt:"menu"}),Object(n["i"])("div",X,[Object(n["i"])(r,{to:"/"},{default:M((function(){return[K]})),_:1}),Object(n["i"])(r,{to:"/lineup"},{default:M((function(){return[P]})),_:1}),Object(n["i"])(r,{to:"/tickets"},{default:M((function(){return[Y]})),_:1}),Object(n["i"])(r,{to:"/contact"},{default:M((function(){return[H]})),_:1}),Object(n["i"])(r,{to:"/faq"},{default:M((function(){return[J]})),_:1})]),Object(n["i"])(n["b"],{name:"fade",mode:"out-in"},{default:M((function(){return[a.showModal?(Object(n["r"])(),Object(n["e"])(s,{key:0,onClose:e[2]||(e[2]=function(t){return a.showModal=!1})})):Object(n["f"])("",!0)]})),_:1})])])})),W=c("f865"),V=c.n(W),_={class:"menuModal"},Z={class:"close"},z={class:"links"},$=Object(n["h"])("HOME"),tt=Object(n["h"])("LINEUP"),et=Object(n["h"])("TICKETS"),ct=Object(n["h"])("CONTACT"),nt=Object(n["h"])("FAQ");function it(t,e,c,i,a,o){var r=Object(n["x"])("router-link");return Object(n["r"])(),Object(n["e"])("div",_,[Object(n["i"])("div",Z,[Object(n["i"])("img",{class:"close-x",onClick:e[1]||(e[1]=function(e){return t.$emit("close")}),src:V.a,alt:"X"})]),Object(n["i"])("div",z,[Object(n["i"])(r,{onClick:e[2]||(e[2]=function(e){return t.$emit("close")}),to:"/"},{default:Object(n["D"])((function(){return[$]})),_:1}),Object(n["i"])(r,{onClick:e[3]||(e[3]=function(e){return t.$emit("close")}),to:"/lineup"},{default:Object(n["D"])((function(){return[tt]})),_:1}),Object(n["i"])(r,{onClick:e[4]||(e[4]=function(e){return t.$emit("close")}),to:"/tickets"},{default:Object(n["D"])((function(){return[et]})),_:1}),Object(n["i"])(r,{onClick:e[5]||(e[5]=function(e){return t.$emit("close")}),to:"/contact"},{default:Object(n["D"])((function(){return[ct]})),_:1}),Object(n["i"])(r,{onClick:e[6]||(e[6]=function(e){return t.$emit("close")}),to:"/faq"},{default:Object(n["D"])((function(){return[nt]})),_:1})])])}var at={};c("2760");at.render=it;var ot=at,rt={data:function(){return{showModal:!1}},components:{MenuModal:ot}};c("788a");rt.render=G,rt.__scopeId="data-v-6553d6f2";var st=rt,lt={components:{Footer:U,Nav:st}};c("9cdc");lt.render=i;var ut=lt,bt=c("6c02"),dt=Object(n["E"])("data-v-2319b5a4");Object(n["u"])("data-v-2319b5a4");var jt={class:"home home-bg"},pt=Object(n["i"])("h1",{class:"gold"},"UX ROCKS",-1),Ot=Object(n["i"])("p",{class:"small-p"},"7-11 July Karlskrona, Sweden",-1),ft={class:"artist-list"},vt=Object(n["i"])("ul",null,[Object(n["i"])("h2",null,"Metallica"),Object(n["i"])("h2",{class:"gold"},"System of a Down"),Object(n["i"])("h2",null,"Antagonist A.D"),Object(n["i"])("h2",{class:"gold"},"Tired Lion")],-1),mt=Object(n["i"])("section",{class:"info-right"},[Object(n["i"])("p",null," Taking place in the middle of summer, in the cozy town Karlskrona. UX Rocks is a festival for the dedicated to give you epic rock music and one hell of a good time. ")],-1),ht=Object(n["i"])("section",{class:"info-left"},[Object(n["i"])("h1",{class:"gold"},[Object(n["h"])(" THE "),Object(n["i"])("br"),Object(n["h"])(" BEST "),Object(n["i"])("br"),Object(n["h"])(" ROCK "),Object(n["i"])("br"),Object(n["h"])(" FESTIVAL ")])],-1);Object(n["s"])();var At=dt((function(t,e,c,i,a,o){var r=this,s=Object(n["x"])("PrimaryBtn"),l=Object(n["x"])("GhostBtn"),u=Object(n["x"])("LineupList");return Object(n["r"])(),Object(n["e"])("div",jt,[Object(n["i"])("main",null,[Object(n["i"])("section",null,[pt,Ot,Object(n["i"])(s,{onClick:e[1]||(e[1]=function(t){return r.$router.push("tickets")}),title:"TICKETS"})]),Object(n["i"])("section",ft,[vt,Object(n["i"])(l,{onClick:e[2]||(e[2]=function(t){return r.$router.push("lineup")}),title:"FULL LINE-UP"})])]),Object(n["i"])(u,{class:"lineup"}),mt,ht])})),gt=Object(n["E"])("data-v-732db95a"),kt=gt((function(t,e,c,i,a,o){return Object(n["r"])(),Object(n["e"])("button",{disabled:c.disabled,class:"primary-btn"},Object(n["A"])(c.title),9,["disabled"])})),yt={props:{title:String,disabled:Boolean}};c("c620");yt.render=kt,yt.__scopeId="data-v-732db95a";var Ct=yt,St=Object(n["E"])("data-v-d8bb03d0");Object(n["u"])("data-v-d8bb03d0");var xt={id:"lineup-list"},wt={class:"lineup-container"},It=Object(n["i"])("h2",null,[Object(n["h"])("More "),Object(n["i"])("span",{class:"gold"},"bands"),Object(n["h"])(" to be announced...")],-1);Object(n["s"])();var Et=St((function(t,e,c,i,a,o){var r=Object(n["x"])("Artist"),s=Object(n["x"])("ArtistModal");return Object(n["r"])(),Object(n["e"])("div",xt,[Object(n["i"])("div",wt,[Object(n["i"])(r,{name:"Metallica",pic:"metallica.jpg",type:"highlight",onArtistClicked:e[1]||(e[1]=function(t){return o.showModal("Metallica","metallica.jpg","Metallica was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich. This iconic heavy metal band still fills arenas with their popular songs like “Master of puppets”, “Enter sandman” and “One”.")})}),Object(n["i"])(r,{name:"System of a Down",pic:"system-of-a-down.jpg",type:"highlight",onArtistClicked:e[2]||(e[2]=function(t){return o.showModal("System of a Down","system-of-a-down.jpg","Under construction")})}),Object(n["i"])(r,{name:"Tonight Alive",pic:"jan.jpg",type:"rest",onArtistClicked:e[3]||(e[3]=function(t){return o.showModal("Tonight Alive","jan.jpg","Under construction")})}),Object(n["i"])(r,{name:"Tired Lion",pic:"tired-lion.jpg",type:"rest",onArtistClicked:e[4]||(e[4]=function(t){return o.showModal("Tired Lion","tired-lion.jpg","Under construction")})}),Object(n["i"])(r,{name:"Antagonist A.D",pic:"ad.jpg",type:"rest",onArtistClicked:e[5]||(e[5]=function(t){return o.showModal("Antagonist A.D","ad.jpg","Under construction")})})]),It,Object(n["i"])(n["b"],{name:"fade",mode:"out-in"},{default:St((function(){return[a.showArtistModal?(Object(n["r"])(),Object(n["e"])(s,{key:0,onClose:o.closeModal,name:t.selectedName,pic:t.selectedPic,info:t.selectedInfo},null,8,["onClose","name","pic","info"])):Object(n["f"])("",!0)]})),_:1})])})),Tt=(c("b0c0"),Object(n["E"])("data-v-eac75348"));Object(n["u"])("data-v-eac75348");var Bt={class:"artist-name"},Ut=Object(n["i"])("div",{class:"filter-shadow"},null,-1);Object(n["s"])();var Rt=Tt((function(t,e,i,a,o,r){return Object(n["r"])(),Object(n["e"])("div",{id:"artist",class:i.type,onClick:e[1]||(e[1]=function(e){return t.$emit("artist-clicked")})},[Object(n["i"])("h2",Bt,Object(n["A"])(i.name),1),Ut,Object(n["i"])("img",{src:c("1771")("./".concat(i.pic)),alt:i.name},null,8,["src","alt"])],2)})),Lt={props:{name:String,pic:String,type:String}};c("2a18");Lt.render=Rt,Lt.__scopeId="data-v-eac75348";var qt=Lt,Nt=Object(n["E"])("data-v-6acfd656");Object(n["u"])("data-v-6acfd656");var Mt={class:"modalContainer"},Dt={class:"close"},Qt=Object(n["i"])("div",{class:"filter-shadow"},null,-1),Ft={class:"imageContainer"},Xt={class:"close"},Kt={class:"nameInfoContainer"},Pt={class:"socialContainer"};Object(n["s"])();var Yt=Nt((function(t,e,i,a,o,r){var s=Object(n["x"])("SocialLinks");return Object(n["r"])(),Object(n["e"])("div",Mt,[Object(n["i"])("div",Dt,[Object(n["i"])("img",{id:"closeMobile",class:"close-x",onClick:e[1]||(e[1]=function(e){return t.$emit("close")}),src:V.a,alt:"X"})]),Qt,Object(n["i"])("div",Ft,[Object(n["i"])("img",{src:c("1771")("./".concat(i.pic))},null,8,["src"]),Object(n["i"])("div",Xt,[Object(n["i"])("img",{id:"closeDesktop",class:"close-x",onClick:e[2]||(e[2]=function(e){return t.$emit("close")}),src:V.a,alt:"X"})])]),Object(n["i"])("div",Kt,[Object(n["i"])("h2",null,Object(n["A"])(i.name),1),Object(n["i"])("p",null,Object(n["A"])(i.info),1)]),Object(n["i"])("div",Pt,[Object(n["i"])(s)])])})),Ht={props:{name:String,pic:String,info:String},components:{SocialLinks:T}};c("aec7");Ht.render=Yt,Ht.__scopeId="data-v-6acfd656";var Jt=Ht,Gt={components:{Artist:qt,ArtistModal:Jt},data:function(){return{showArtistModal:!1}},methods:{showModal:function(t,e,c){this.selectedName=t,this.selectedPic=e,this.selectedInfo=c,this.showArtistModal=!0},closeModal:function(){this.showArtistModal=!1}}};c("1c2c");Gt.render=Et,Gt.__scopeId="data-v-d8bb03d0";var Wt=Gt,Vt={name:"Home",components:{PrimaryBtn:Ct,GhostBtn:f,LineupList:Wt}};c("ac31");Vt.render=At,Vt.__scopeId="data-v-2319b5a4";var _t=Vt,Zt=Object(n["E"])("data-v-d5f9b3fa");Object(n["u"])("data-v-d5f9b3fa");var zt={class:"lineup-bg"},$t={id:"lineup"},te=Object(n["i"])("h1",null,"Lineup",-1),ee={class:"btn-container"};Object(n["s"])();var ce=Zt((function(t,e,c,i,a,o){var r=Object(n["x"])("PrimaryBtn"),s=Object(n["x"])("GhostBtn"),l=Object(n["x"])("LineupList");return Object(n["r"])(),Object(n["e"])("div",zt,[Object(n["i"])("div",$t,[te,Object(n["i"])("div",ee,[Object(n["i"])(r,{title:"ALL"}),Object(n["i"])(s,{title:"THURSDAY"}),Object(n["i"])(s,{title:"FRIDAY"}),Object(n["i"])(s,{title:"SATURDAY"})]),Object(n["i"])(l)])])})),ne={components:{LineupList:Wt,PrimaryBtn:Ct,GhostBtn:f},data:function(){return{selectedName:"",selectedPic:"",selectedInfo:""}}};c("207b");ne.render=ce,ne.__scopeId="data-v-d5f9b3fa";var ie=ne,ae=Object(n["E"])("data-v-23a39bd6");Object(n["u"])("data-v-23a39bd6");var oe={class:"contact-container"},re={class:"contact-info"},se=Object(n["i"])("h1",null,"Contact",-1),le=Object(n["h"])(" Before you contact us we would be happy if you first look through our "),ue=Object(n["h"])("FAQ"),be=Object(n["h"])("'s and look for your answer there. "),de=Object(n["i"])("br",null,null,-1),je=Object(n["i"])("br",null,null,-1),pe=Object(n["h"])(" Contact us in the form or send an email to info@uxrocks.com "),Oe=Object(n["i"])("br",null,null,-1),fe=Object(n["h"])(" We will get back to you as soon as we can. "),ve={class:"input-container"},me={class:"contact-button"},he=Object(n["i"])("p",{class:"press-info"},[Object(n["h"])(" For press questions email to: "),Object(n["i"])("br"),Object(n["h"])(" press@uxrocks.se ")],-1);Object(n["s"])();var Ae=ae((function(t,e,c,i,a,o){var r=Object(n["x"])("router-link"),s=Object(n["x"])("Input"),l=Object(n["x"])("PrimaryBtn");return Object(n["r"])(),Object(n["e"])("div",oe,[Object(n["i"])("div",re,[se,Object(n["i"])("p",null,[le,Object(n["i"])(r,{to:"/faq"},{default:ae((function(){return[ue]})),_:1}),be,de,je,pe,Oe,fe])]),Object(n["i"])("div",ve,[Object(n["i"])(s,{label:"Name"}),Object(n["i"])(s,{label:"Email"}),Object(n["i"])(s,{label:"Message",multiline:""})]),Object(n["i"])("div",me,[Object(n["i"])(l,{onClick:e[1]||(e[1]=function(e){return t.$router.go(t.n)}),title:"SEND MESSAGE"})]),he])})),ge=Object(n["E"])("data-v-aefe4fb2");Object(n["u"])("data-v-aefe4fb2");var ke={class:"inputContainer"},ye={key:0,class:"p-disabled"},Ce={key:1};Object(n["s"])();var Se=ge((function(t,e,c,i,a,o){return Object(n["r"])(),Object(n["e"])("div",ke,[c.disabled?(Object(n["r"])(),Object(n["e"])("p",ye,Object(n["A"])(c.label),1)):Object(n["f"])("",!0),c.disabled?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])("p",Ce,Object(n["A"])(c.label),1)),c.multiline?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])("input",{key:2,type:"text",size:"50",disabled:c.disabled},null,8,["disabled"])),c.multiline?(Object(n["r"])(),Object(n["e"])("textarea",{key:3,size:"50",rows:"6",disabled:c.disabled},null,8,["disabled"])):Object(n["f"])("",!0)])})),xe={props:{label:String,multiline:Boolean,disabled:Boolean}};c("75d4");xe.render=Se,xe.__scopeId="data-v-aefe4fb2";var we=xe,Ie={name:"Contact",components:{Input:we,PrimaryBtn:Ct}};c("270f");Ie.render=Ae,Ie.__scopeId="data-v-23a39bd6";var Ee=Ie,Te=Object(n["E"])("data-v-11661349");Object(n["u"])("data-v-11661349");var Be={class:"faq-container"},Ue=Object(n["g"])('<h1 data-v-11661349>FAQ</h1><div class="question-container" data-v-11661349><p class="question" data-v-11661349>Is UX Rocks 2020 cancelled?</p><p data-v-11661349> Yes. Due to the current situation and restriction we do not want to take any risks or expose anyone to risk. </p><br data-v-11661349><p class="question" data-v-11661349>Are my tickets valid for next year?</p><p data-v-11661349> Yes! If you bought a ticket for 2020 the ticket is valid for UX Rocks 2021 instead. We want you to come rock with us next year. </p><br data-v-11661349><p class="question" data-v-11661349>When will UX rocks take place in 2021?</p><p data-v-11661349> It will take place on September 2-4 in Karlskrona. </p><br data-v-11661349><p class="question" data-v-11661349>Is there any age limit at UX Rocks?</p><p data-v-11661349> Yes. There is a strict age limit of 18+ with no exceptions. </p><br data-v-11661349><p class="question" data-v-11661349>Can you buy alcohol and food at the festival?</p><p data-v-11661349> Yes. We have 10 different food-trucks and an alcohol drinking area. </p><br data-v-11661349><p class="question" data-v-11661349> For other questions, you are welcome to contact our customer service via info@uxrocks.com </p></div>',2);Object(n["s"])();var Re=Te((function(t,e,c,i,a,o){return Object(n["r"])(),Object(n["e"])("div",Be,[Ue])})),Le={};c("1057");Le.render=Re,Le.__scopeId="data-v-11661349";var qe=Le,Ne=Object(n["E"])("data-v-5f3b5b39");Object(n["u"])("data-v-5f3b5b39");var Me={class:"ticket-bg"},De=Object(n["i"])("section",{class:"title"},[Object(n["i"])("h1",null,"Tickets")],-1),Qe={class:"main-cont"},Fe=Object(n["i"])("div",{class:"divider"},null,-1),Xe=Object(n["i"])("div",{class:"inner-box info-box"},[Object(n["i"])("article",null,[Object(n["i"])("h2",null,"How to get tickets"),Object(n["i"])("p",null,[Object(n["h"])(" You can buy tickets online right here in this page. "),Object(n["i"])("br"),Object(n["h"])(" If you don't want to buy tickets online, we have 10 ticket windows at the entrance of the hall. ")])]),Object(n["i"])("article",null,[Object(n["i"])("h2",null,"Prices"),Object(n["i"])("p",null,[Object(n["h"])(" - One day ticket: 250 Kr "),Object(n["i"])("br"),Object(n["h"])(" - Two days ticket: 400 Kr "),Object(n["i"])("br"),Object(n["h"])(" - Three days ticket: 600 Kr ")])])],-1),Ke={class:"inner-box ticket-box"},Pe=Object(n["i"])("h2",null,"Buy Tickets Online",-1);Object(n["s"])();var Ye=Ne((function(t,e,c,i,a,o){var r=Object(n["x"])("Ticket");return Object(n["r"])(),Object(n["e"])("main",Me,[De,Object(n["i"])("section",Qe,[Fe,Xe,Object(n["i"])("div",Ke,[Pe,Object(n["i"])(r)])])])})),He=Object(n["E"])("data-v-71870b08");Object(n["u"])("data-v-71870b08");var Je={class:"cb-cont"},Ge=Object(n["i"])("hr",{class:"shop-divider"},null,-1),We={class:"shop-summary"},Ve={class:"shop-line"},_e=Object(n["i"])("span",null,null,-1),Ze={class:"shop-line"},ze=Object(n["i"])("h2",null,"Participants",-1),$e=Object(n["i"])("span",null,null,-1),tc=Object(n["i"])("hr",{class:"total-divider"},null,-1),ec={class:"shop-line"},cc=Object(n["i"])("h2",null,"Total",-1),nc=Object(n["i"])("span",null,null,-1),ic={class:"btn-cont"};Object(n["s"])();var ac=He((function(t,e,c,i,a,o){var r=Object(n["x"])("Input"),s=Object(n["x"])("InputChckBox"),l=Object(n["x"])("InputStepper"),u=Object(n["x"])("PrimaryBtn");return Object(n["r"])(),Object(n["e"])("div",null,[Object(n["i"])(r,{class:"input inputName",label:"Name"}),Object(n["i"])(r,{class:"input inputEmail",label:"Email"}),Object(n["i"])("div",Je,[Object(n["i"])(s,{class:"inputCb",label:"Thursday",onHandleChkBox:e[1]||(e[1]=function(t){return o.updTicketDays(t)})}),Object(n["i"])(s,{class:"inputCb",label:"Friday",onHandleChkBox:e[2]||(e[2]=function(t){return o.updTicketDays(t)})}),Object(n["i"])(s,{class:"inputCb",label:"Saturday",onHandleChkBox:e[3]||(e[3]=function(t){return o.updTicketDays(t)})})]),Object(n["i"])(l,{stepper:a.participants,"onUpdate:stepper":e[4]||(e[4]=function(t){return a.participants=t}),class:"inputStp",label:"Participants"},null,8,["stepper"]),Ge,Object(n["i"])("div",We,[Object(n["i"])("div",Ve,[Object(n["i"])("h2",null,Object(n["A"])(o.ticketType),1),_e,Object(n["i"])("h2",null,Object(n["A"])(o.addKr(o.ticketPrice)),1)]),Object(n["i"])("div",Ze,[ze,$e,Object(n["i"])("h2",null,Object(n["A"])(a.participants),1)]),tc,Object(n["i"])("div",ec,[cc,nc,Object(n["i"])("h2",null,Object(n["A"])(o.addKr(o.ticketTotalPrice)),1)])]),Object(n["i"])("div",ic,[Object(n["i"])(u,{disabled:!o.ticketTotalPrice,title:"CHECKOUT"},null,8,["disabled"])])])})),oc=(c("ac1f"),c("5319"),c("1276"),Object(n["E"])("data-v-7b691964"));Object(n["u"])("data-v-7b691964");var rc={class:"inputContainer"},sc=Object(n["i"])("span",{class:"checkmark"},"⅃",-1);Object(n["s"])();var lc=oc((function(t,e,c,i,a,o){return Object(n["r"])(),Object(n["e"])("div",rc,[Object(n["i"])("input",{onInput:e[1]||(e[1]=function(){return o.handleInput.apply(o,arguments)}),disabled:c.disabled,type:"checkbox",name:c.label,id:c.label},null,40,["disabled","name","id"]),Object(n["i"])("label",{for:c.label},[Object(n["h"])(Object(n["A"])(c.label),1),sc],8,["for"])])})),uc={props:{label:String,disabled:Boolean},methods:{handleInput:function(t){this.$emit("handle-chk-box",t.target.checked)}}};c("6cb9");uc.render=lc,uc.__scopeId="data-v-7b691964";var bc=uc,dc=Object(n["E"])("data-v-6a48560d");Object(n["u"])("data-v-6a48560d");var jc={class:"stepperContainer"},pc={class:"label"},Oc={class:"innerContainer"},fc=Object(n["i"])("p",null,"-",-1),vc={class:"middlePart"},mc=Object(n["i"])("p",null,"+",-1);Object(n["s"])();var hc=dc((function(t,e,c,i,a,o){return Object(n["r"])(),Object(n["e"])("div",jc,[Object(n["i"])("p",pc,Object(n["A"])(c.label),1),Object(n["i"])("div",Oc,[Object(n["i"])("div",{class:"leftPart",onClick:e[1]||(e[1]=function(t){return o.decreaseStepper(0)})},[fc]),Object(n["i"])("div",vc,[Object(n["i"])("p",null,Object(n["A"])(c.stepper),1)]),Object(n["i"])("div",{class:"rightPart",onClick:e[2]||(e[2]=function(t){return o.increaseStepper(10)})},[mc])])])})),Ac=(c("a9e3"),{props:{label:String,stepper:Number},methods:{increaseStepper:function(t){this.stepper<t&&this.$emit("update:stepper",this.stepper+1)},decreaseStepper:function(t){this.stepper>t&&this.$emit("update:stepper",this.stepper-1)}}});c("1f84");Ac.render=hc,Ac.__scopeId="data-v-6a48560d";var gc=Ac,kc={data:function(){return{prices:[0,255,400,600],days:0,participants:1}},computed:{ticketType:function(){var t="";switch(this.days){case 0:t="Choose a ticket";break;case 1:t="One day ticket";break;case 2:t="Two days ticket";break;case 3:t="Three days ticket";break}return t},ticketPrice:function(){return this.prices[this.days]},ticketTotalPrice:function(){return this.ticketPrice*this.participants}},components:{Input:we,InputChckBox:bc,InputStepper:gc,PrimaryBtn:Ct},methods:{updTicketDays:function(t){this.days=this.days+(!0===t?1:-1)},addSpaces:function(t){t+="";var e=t.split("."),c=e[0],n=e.length>1?"."+e[1]:"",i=/(\d+)(\d{3})/;while(i.test(c))c=c.replace(i,"$1 $2");return c+n},addKr:function(t){return this.addSpaces(t)+" Kr"}}};c("27c8");kc.render=ac,kc.__scopeId="data-v-71870b08";var yc=kc,Cc={components:{Ticket:yc}};c("14e7");Cc.render=Ye,Cc.__scopeId="data-v-5f3b5b39";var Sc=Cc,xc=Object(n["E"])("data-v-2df3bc0b");Object(n["u"])("data-v-2df3bc0b");var wc={class:"cont"},Ic=Object(n["i"])("div",null,[Object(n["i"])("p",null," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor numquam quidem incidunt, nostrum dicta eum quod aperiam porro assumenda eius minus tempora quas saepe, maiores repellat fugit aut ipsum atque! ")],-1),Ec=Object(n["i"])("div",null,[Object(n["i"])("h3",null,"Lorem ipsum dolor"),Object(n["i"])("p",null," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor numquam quidem incidunt, nostrum dicta eum quod aperiam porro assumenda eius minus tempora quas saepe, maiores repellat fugit aut ipsum atque! ")],-1);Object(n["s"])();var Tc=xc((function(t,e,c,i,a,o){return Object(n["r"])(),Object(n["e"])("div",wc,[Ic,Ec])})),Bc={};c("2370");Bc.render=Tc,Bc.__scopeId="data-v-2df3bc0b";var Uc=Bc,Rc=[{path:"/",name:"Home",component:_t},{path:"/lineup",name:"Lineup",component:ie},{path:"/contact",name:"Contact",component:Ee},{path:"/faq",name:"Faq",component:qe},{path:"/tickets",name:"Tickets",component:Sc},{path:"/style",name:"Style",component:Uc}],Lc=Object(bt["a"])({history:Object(bt["b"])(),routes:Rc,scrollBehavior:function(){return document.getElementById("app").scrollIntoView(),null}}),qc=Lc,Nc=c("5502"),Mc=Object(Nc["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["d"])(ut).use(Mc).use(qc).mount("#app")},"598a":function(t,e,c){t.exports=c.p+"img/insta.69e9c6d7.svg"},"5ea1":function(t,e,c){},6584:function(t,e,c){},6620:function(t,e,c){t.exports=c.p+"img/jan.65e32e39.jpg"},6896:function(t,e,c){},"6cb9":function(t,e,c){"use strict";c("3fef")},"72f6":function(t,e,c){},"75d4":function(t,e,c){"use strict";c("3003")},"788a":function(t,e,c){"use strict";c("aef6")},"7a53":function(t,e,c){},"7df5":function(t,e,c){},"8a9e":function(t,e,c){t.exports=c.p+"img/bck-tickets.19fb3085.jpg"},"8de5":function(t,e,c){},"8fb2":function(t,e,c){},9451:function(t,e,c){t.exports=c.p+"img/spotify.87a279ba.svg"},"9cdc":function(t,e,c){"use strict";c("c701")},a096:function(t,e,c){},a1d5:function(t,e,c){t.exports=c.p+"img/home-bg.82923594.png"},a6fe:function(t,e,c){t.exports=c.p+"img/tired-lion.0eb95395.jpg"},aaa3:function(t,e,c){t.exports=c.p+"img/facebook.2349811a.svg"},abf4:function(t,e,c){},ac31:function(t,e,c){"use strict";c("8de5")},aec7:function(t,e,c){"use strict";c("d56b")},aef6:function(t,e,c){},b17d:function(t,e,c){t.exports=c.p+"img/uxrocks.aa8e308d.svg"},b450:function(t,e,c){},c620:function(t,e,c){"use strict";c("8fb2")},c701:function(t,e,c){},c7f8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAgCAYAAACYTcH3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMrSURBVHgBzViLUdtAEF0bw8DwiVxBRAUxFcR0QCqADoAKLCqwXUGcDkgFcQdxKrBSgRX/Z/zLe+LknM86WcdgJm/GSPfbfdrbvd1D5D9CQRzR6/W84+Njb9e86XQalcvlSBxQyFDqHx0d3a5Wqxs0ffx2EsgASXX4m81mTZAMJS+Z0WhUA4lA9oRCoRCcnp4+bfXLOxPJIrRBhltzeHjYtQkAyQhCQnkx+y54mO9jvnV7sWWX+paV9MFSqfRgWdeG4Kfz8/O2OGIwGFRBqIbXqjkGfXd4BEl7wzLD4fCHuUiRiBcwkmA5H325nHk+n3eSiAKpQJHS0Tk7O7uykenJZtS0MfmaL8qXHsQ9qlrYjkeSSvnYCPLLSaNoLNxQRKsoknXl1C5EGMqP+N3AmjVdnk2faZmVGKzV1vQkA8qxTaJXWN/B9jQwdg/rlJV1NqyPOWsOa8tQqSEs5B84WUXS0QGJayqBT5UpdLlcfknWAbeUCSKf2Tg4OKjqctP06ttkkrGGL5R+o+Mxuvi1k8nEZ//FxcUz+i9Bsonmg7Jo/DHFYtFLk+t53oc0MnkRQukdX8bj8T3NvlgsunzSydkPknT0tjjiNWRiJ6RiWKgh/yzKQy4AqfisSnHWtycDH3lWymwHZGwdnjGybzL0EaYNsYc5LfRRHXah7JMMvV/lE5uDM8x/q3df9klGC/VUn1CRFOckcYQzGXx1nU+EcINOygNPkeDzMcljCOWv4ojXRFMFERMromIeeDjQLtXBx+hK0ocvjtDJbPgALODziahI8407hHa33++zJJWTk5OQvsStUclwK9JALkyRI1EU/Vnr1AcychMLrqwkGe0YXxdSuXJTCuIvZYgmTpk1d8d4i0SUU1vnmmTMrUqO9yAHoVRwHesZJa+eqU9vwIQ/RSU2jdC6cOaWMbRzOmeEnNVOKj1Lob8u3oiS8RXfobxi9AUQVEEeaqoauC0OSGpgyKmaY+j7pbedbgfyYtZQct4OZMflz7wdbN2bLIXzm0Mv9K1k3oNQGhErGYJbxnsUSH3C4krWZSyH8vjyR5/EIdpyumtnIe9/IQiezOKAv8ue2IJmn0r8AAAAAElFTkSuQmCC"},d56b:function(t,e,c){},de0d:function(t,e,c){t.exports=c.p+"img/metallica.3c1fa237.jpg"},e17e:function(t,e,c){"use strict";c("abf4")},e72e:function(t,e,c){},eabf:function(t,e,c){"use strict";c("f379")},f379:function(t,e,c){},f865:function(t,e,c){t.exports=c.p+"img/X.d58d8550.svg"}});
//# sourceMappingURL=app.733beb87.js.map