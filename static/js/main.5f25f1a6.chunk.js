(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{15:function(e,c,t){},17:function(e,c,t){},19:function(e,c,t){},20:function(e,c,t){},21:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t.n(s),i=t(9),a=t.n(i),r=(t(15),t(8)),j=t.n(r),l=t(10),m=t(4),b=(t(17),t(1));var d=function(e){e.id;var c=e.image,t=e.title,s=e.summary,n=e.genres,i=e.year;return Object(b.jsxs)("div",{className:"movie__grid",children:[Object(b.jsx)("img",{className:"movie__image",src:c,alt:t}),Object(b.jsxs)("div",{className:"movie__info__frame",children:[Object(b.jsxs)("div",{className:"movie__title__frame",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsx)("span",{children:i})]}),Object(b.jsx)("div",{className:"movie__summary",children:Object(b.jsx)("p",{children:s.length>120?"".concat(s.slice(0,120),"..."):s})}),Object(b.jsx)("ul",{className:"movie__genres",children:n.map((function(e,c){return Object(b.jsxs)("li",{children:["#",e]},c)}))})]})]})};t(19);var o=function(){return Object(b.jsx)("div",{className:"loading__frame",children:Object(b.jsx)("span",{className:"loading__text",children:"Setting Movies..."})})},u=t(5);t(20);var O=function(){var e=Object(s.useState)(!1),c=Object(m.a)(e,2),t=c[0],n=c[1],i=function(){return n(!t)};return Object(b.jsxs)("header",{children:[Object(b.jsxs)("div",{className:"nav__width",children:[Object(b.jsx)("h1",{children:Object(b.jsx)(u.b,{to:"React_Web/",children:"MOVIE"})}),Object(b.jsxs)("ul",{className:"nav__menu",children:[Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"React_Web/",children:"Home"})}),Object(b.jsx)("li",{children:"About"}),Object(b.jsx)("li",{children:"Porduct"})]}),Object(b.jsx)("div",{className:"nav__icon",children:Object(b.jsx)("i",{className:t?"fas fa-times":"fas fa-bars",onClick:i})})]}),Object(b.jsxs)("div",{className:t?"submenu":"submenu active",children:[Object(b.jsx)("i",{className:"fas fa-times",onClick:i}),Object(b.jsxs)("ul",{className:"submenu__list",children:[Object(b.jsx)("li",{onClick:i,children:"Home"}),Object(b.jsx)("li",{onClick:i,children:"About"}),Object(b.jsx)("li",{onClick:i,children:"Product"})]})]})]})};var x=function(){var e=Object(s.useState)(!0),c=Object(m.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)([]),a=Object(m.a)(i,2),r=a[0],u=a[1],x=function(){var e=Object(l.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:c=e.sent,u(c.data.movies),n(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){x()}),[]),Object(b.jsx)("div",{children:t?Object(b.jsx)(o,{}):Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"movie__container",children:r.map((function(e){return Object(b.jsx)(d,{id:e.id,image:e.medium_cover_image,title:e.title,year:e.year,summary:e.summary,genres:e.genres},e.id)}))})]})})},h=t(2);var v=function(){return Object(b.jsx)("div",{className:"main",children:Object(b.jsx)(u.a,{children:Object(b.jsx)(h.c,{children:Object(b.jsx)(h.a,{basename:"/React_Movie",path:"React_Movie/",element:Object(b.jsx)(x,{})})})})})};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5f25f1a6.chunk.js.map