var tl = new TimelineMax();

tl
.staggerFromTo("g.ghost path",15,{drawSVG:true,opacity:0.1},{drawSVG:false,opacity:0.2,yoyo:true,repeat:-1},0.2, 1)
.staggerFromTo("g:not(.ghost) path",10,{drawSVG:true,fill:"none"},{fill:"#494E6B",drawSVG:false,yoyo:true,repeat:-1},0.7, 5)
.staggerFromTo("g:not(.ghost) path:nth-child(odd)",10,{drawSVG:true,fill:"none"},{fill:"#494E6B",drawSVG:false,yoyo:true,repeat:-1},0.7, 5);

tl.staggerTo("g:not(.ghost) path,g:not(.ghost) path:nth-child(odd)",4,{fill:"none",opacity:0.6,yoyo:true,repeat:-1},0.2, 1)

tl.play(100,false);