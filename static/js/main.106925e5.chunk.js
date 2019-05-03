(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(69)},38:function(e,t,a){},39:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),l=a.n(r),s=(a(38),a(39),a(13)),o=a(12);var i=function(){return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-5"},c.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"},"Lyrics Finder"))},m=a(6),u=a(7),d=a(9),p=a(8),h=a(10),f=a(29),b=a(11),g=a.n(b),k=c.a.createContext(),y=function(e,t){switch(t.type){case"SEARCH_TRACKS":return Object(f.a)({},e,{track_list:t.payload,heading:"Search Results"});default:return e}},E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={track_list:[],heading:"Top 10 Tracks",dispatch:function(e){return a.setState(function(t){return y(t,e)})}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=".concat("04f9d437d00af42cdfa793c1d8c2d568")).then(function(t){e.setState({track_list:t.data.message.body.track_list})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement(k.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),v=k.Consumer;var _=function(){return c.a.createElement("div",{className:"loader"},"Loading...")};var N=function(e){var t=e.track;return c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card mb-4 shadow-sm"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,t.artist_name),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-play"})," Track"),": ",t.track_name,c.a.createElement("br",null),c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-compact-disc"})," Album"),": ",t.album_name),c.a.createElement(s.b,{className:"btn btn-dark btn-block",to:"lyrics/track/".concat(t.track_id)},c.a.createElement("i",{className:"fas fa-chevron-right"})," View Lyrics"))))},w=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(v,null,function(e){var t=e.track_list,a=e.heading;return void 0===t||0===t.length?c.a.createElement(_,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"text-center mb-4"},a),c.a.createElement("div",{className:"row"},t.map(function(e){return c.a.createElement(N,{track:e.track,key:e.track.track_id})})))})}}]),t}(n.Component),j=a(15),O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={trackTitle:""},a.onChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.findTrack=function(e,t){t.preventDefault(),g.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=".concat(a.state.trackTitle,"&page_size=10&page=1&s_track_rating=desc&apikey=").concat("04f9d437d00af42cdfa793c1d8c2d568")).then(function(t){e({type:"SEARCH_TRACKS",payload:t.data.message.body.track_list}),a.setState({trackTitle:""})}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(v,null,function(t){var a=t.dispatch;return c.a.createElement("div",{className:"card card-body mb-4 p-4"},c.a.createElement("h1",{className:"display-4 text-center"},c.a.createElement("i",{className:"fas fa-music"})," Search For A Song"),c.a.createElement("p",{className:"lead text-center"},"Get the lyrics for any song"),c.a.createElement("form",{onSubmit:e.findTrack.bind(e,a)},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Song title...",name:"trackTitle",value:e.state.trackTitle,onChange:e.onChange})),c.a.createElement("button",{className:"btn btn-lg btn-block mb-5 btn-primary",type:"submit"},"Get Lyrics")))})}}]),t}(n.Component);var x=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null),c.a.createElement(w,null))},S=a(32),C=a.n(S),T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={track:{},lyrics:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(this.props.match.params.id,"&apikey=").concat("04f9d437d00af42cdfa793c1d8c2d568")).then(function(t){return e.setState({lyrics:t.data.message.body.lyrics}),g.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=".concat(e.props.match.params.id,"&apikey=").concat("04f9d437d00af42cdfa793c1d8c2d568"))}).then(function(t){e.setState({track:t.data.message.body.track})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.track,a=e.lyrics;return void 0===t||void 0===a||0===Object.keys(t).length||0===Object.keys(a).length?c.a.createElement(_,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(s.b,{to:"/",className:"btn btn-dark btn-sm mb-4"},"Back"),c.a.createElement("div",{className:"card"},c.a.createElement("h5",{className:"card-header"},t.track_name," ",c.a.createElement("span",{className:"text-secondary"},"by ",t.artist_name)),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},a.lyrics_body))),c.a.createElement("ul",{className:"list-group mt-3"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Album ID: "),t.album_id),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Song Genre: "),t.primary_genres.music_genre_list[0]?t.primary_genres.music_genre_list[0].music_genre.music_genre_name:"Not available"),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Release Date: "),c.a.createElement(C.a,{format:"YYYY"},t.updated_time))))}}]),t}(n.Component);var A=function(){return c.a.createElement(E,null,c.a.createElement(s.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement("div",{className:"container"},c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:x}),c.a.createElement(o.a,{exact:!0,path:"/lyrics/track/:id",component:T}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.106925e5.chunk.js.map