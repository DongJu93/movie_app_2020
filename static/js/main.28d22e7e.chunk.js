(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),i=a.n(r),c=a(2),o=a.n(c),m=a(13),l=a(14),u=a(17),v=a(15),p=a(18),d=a(16),y=a.n(d);a(42);var g=function(e){e.id;var t=e.year,a=e.title,n=e.summary,r=e.poster,i=e.genres;return s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:r,alt:a,title:a}),s.a.createElement("div",{className:"movie_data"},s.a.createElement("h3",{className:"movie_title"},a),s.a.createElement("h5",{className:"movie_year"},t),s.a.createElement("ul",{className:"movie_genres"},i.map((function(e,t){return s.a.createElement("li",{key:t,className:"genres_genre"},e)}))),s.a.createElement("p",{className:"movie_summary"},n.slice(0,140),"...")))},f=(a(43),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},a.getMovies=function(){var e,t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,t=e.data.data.movies,a.setState({movies:t,isLoading:!1});case 5:case"end":return n.stop()}}))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return s.a.createElement("section",{className:"container"},t?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader_text"},"Loading..")):s.a.createElement("div",{className:"movies"},a.map((function(e){return s.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(s.a.Component));i.a.render(s.a.createElement(f,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.28d22e7e.chunk.js.map