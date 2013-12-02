(function(a){a.flexslider=function(f,q){var c=a(f);c.vars=a.extend({},a.flexslider.defaults,q);var j=c.vars.namespace,e=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,k=(("ontouchstart" in window)||e||window.DocumentTouch&&document instanceof DocumentTouch)&&c.vars.touch,d="click touchend MSPointerUp",b="",p,i=c.vars.direction==="vertical",l=c.vars.reverse,o=(c.vars.itemWidth>0),h=c.vars.animation==="fade",m=c.vars.asNavFor!=="",g={},n=true;a.data(f,"flexslider",c);g={init:function(){c.animating=false;c.currentSlide=parseInt((c.vars.startAt?c.vars.startAt:0));if(isNaN(c.currentSlide)){c.currentSlide=0}c.animatingTo=c.currentSlide;c.atEnd=(c.currentSlide===0||c.currentSlide===c.last);c.containerSelector=c.vars.selector.substr(0,c.vars.selector.search(" "));c.slides=a(c.vars.selector,c);c.container=a(c.containerSelector,c);c.count=c.slides.length;c.syncExists=a(c.vars.sync).length>0;if(c.vars.animation==="slide"){c.vars.animation="swing"}c.prop=(i)?"top":"marginLeft";c.args={};c.manualPause=false;c.stopped=false;c.started=false;c.startTimeout=null;c.transitions=!c.vars.video&&!h&&c.vars.useCSS&&(function(){var t=document.createElement("div"),s=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var r in s){if(t.style[s[r]]!==undefined){c.pfx=s[r].replace("Perspective","").toLowerCase();c.prop="-"+c.pfx+"-transform";return true}}return false}());if(c.vars.controlsContainer!==""){c.controlsContainer=a(c.vars.controlsContainer).length>0&&a(c.vars.controlsContainer)}if(c.vars.manualControls!==""){c.manualControls=a(c.vars.manualControls).length>0&&a(c.vars.manualControls)}if(c.vars.randomize){c.slides.sort(function(){return(Math.round(Math.random())-0.5)});c.container.empty().append(c.slides)}c.doMath();c.setup("init");if(c.vars.controlNav){g.controlNav.setup()}if(c.vars.directionNav){g.directionNav.setup()}if(c.vars.keyboard&&(a(c.containerSelector).length===1||c.vars.multipleKeyboard)){a(document).bind("keyup",function(s){var r=s.keyCode;if(!c.animating&&(r===39||r===37)){var t=(r===39)?c.getTarget("next"):(r===37)?c.getTarget("prev"):false;c.flexAnimate(t,c.vars.pauseOnAction)}})}if(c.vars.mousewheel){c.bind("mousewheel",function(t,v,s,r){t.preventDefault();var u=(v<0)?c.getTarget("next"):c.getTarget("prev");c.flexAnimate(u,c.vars.pauseOnAction)})}if(c.vars.pausePlay){g.pausePlay.setup()}if(c.vars.slideshow&&c.vars.pauseInvisible){g.pauseInvisible.init()}if(c.vars.slideshow){if(c.vars.pauseOnHover){c.hover(function(){if(!c.manualPlay&&!c.manualPause){c.pause()}},function(){if(!c.manualPause&&!c.manualPlay&&!c.stopped){c.play()}})}if(!c.vars.pauseInvisible||!g.pauseInvisible.isHidden()){(c.vars.initDelay>0)?c.startTimeout=setTimeout(c.play,c.vars.initDelay):c.play()}}if(m){g.asNav.setup()}if(k&&c.vars.touch){g.touch()}if(!h||(h&&c.vars.smoothHeight)){a(window).bind("resize orientationchange focus",g.resize)}c.find("img").attr("draggable","false");setTimeout(function(){c.vars.start(c)},200)},asNav:{setup:function(){c.asNav=true;c.animatingTo=Math.floor(c.currentSlide/c.move);c.currentItem=c.currentSlide;c.slides.removeClass(j+"active-slide").eq(c.currentItem).addClass(j+"active-slide");if(!e){c.slides.click(function(t){t.preventDefault();var s=a(this),r=s.index();var u=s.offset().left-a(c).scrollLeft();if(u<=0&&s.hasClass(j+"active-slide")){c.flexAnimate(c.getTarget("prev"),true)}else{if(!a(c.vars.asNavFor).data("flexslider").animating&&!s.hasClass(j+"active-slide")){c.direction=(c.currentItem<r)?"next":"prev";c.flexAnimate(r,c.vars.pauseOnAction,false,true,true)}}})}else{f._slider=c;c.slides.each(function(){var r=this;r._gesture=new MSGesture();r._gesture.target=r;r.addEventListener("MSPointerDown",function(s){s.preventDefault();if(s.currentTarget._gesture){s.currentTarget._gesture.addPointer(s.pointerId)}},false);r.addEventListener("MSGestureTap",function(u){u.preventDefault();var t=a(this),s=t.index();if(!a(c.vars.asNavFor).data("flexslider").animating&&!t.hasClass("active")){c.direction=(c.currentItem<s)?"next":"prev";c.flexAnimate(s,c.vars.pauseOnAction,false,true,true)}})})}}},controlNav:{setup:function(){if(!c.manualControls){g.controlNav.setupPaging()}else{g.controlNav.setupManual()}},setupPaging:function(){var u=(c.vars.controlNav==="thumbnails")?"control-thumbs":"control-paging",s=1,v,r;c.controlNavScaffold=a('<ol class="'+j+"control-nav "+j+u+'"></ol>');if(c.pagingCount>1){for(var t=0;t<c.pagingCount;t++){r=c.slides.eq(t);v=(c.vars.controlNav==="thumbnails")?'<img src="'+r.attr("data-thumb")+'"/>':"<a>"+s+"</a>";if("thumbnails"===c.vars.controlNav&&true===c.vars.thumbCaptions){var w=r.attr("data-thumbcaption");if(""!=w&&undefined!=w){v+='<span class="'+j+'caption">'+w+"</span>"}}c.controlNavScaffold.append("<li>"+v+"</li>");s++}}(c.controlsContainer)?a(c.controlsContainer).append(c.controlNavScaffold):c.append(c.controlNavScaffold);g.controlNav.set();g.controlNav.active();c.controlNavScaffold.delegate("a, img",d,function(x){x.preventDefault();if(b===""||b===x.type){var z=a(this),y=c.controlNav.index(z);if(!z.hasClass(j+"active")){c.direction=(y>c.currentSlide)?"next":"prev";c.flexAnimate(y,c.vars.pauseOnAction)}}if(b===""){b=x.type}g.setToClearWatchedEvent()})},setupManual:function(){c.controlNav=c.manualControls;g.controlNav.active();c.controlNav.bind(d,function(r){r.preventDefault();if(b===""||b===r.type){var t=a(this),s=c.controlNav.index(t);if(!t.hasClass(j+"active")){(s>c.currentSlide)?c.direction="next":c.direction="prev";c.flexAnimate(s,c.vars.pauseOnAction)}}if(b===""){b=r.type}g.setToClearWatchedEvent()})},set:function(){var r=(c.vars.controlNav==="thumbnails")?"img":"a";c.controlNav=a("."+j+"control-nav li "+r,(c.controlsContainer)?c.controlsContainer:c)},active:function(){c.controlNav.removeClass(j+"active").eq(c.animatingTo).addClass(j+"active")},update:function(r,s){if(c.pagingCount>1&&r==="add"){c.controlNavScaffold.append(a("<li><a>"+c.count+"</a></li>"))}else{if(c.pagingCount===1){c.controlNavScaffold.find("li").remove()}else{c.controlNav.eq(s).closest("li").remove()}}g.controlNav.set();(c.pagingCount>1&&c.pagingCount!==c.controlNav.length)?c.update(s,r):g.controlNav.active()}},directionNav:{setup:function(){var r=a('<ul class="'+j+'direction-nav"><li><a class="'+j+'prev" href="#">'+c.vars.prevText+'</a></li><li><a class="'+j+'next" href="#">'+c.vars.nextText+"</a></li></ul>");if(c.controlsContainer){a(c.controlsContainer).append(r);c.directionNav=a("."+j+"direction-nav li a",c.controlsContainer)}else{c.append(r);c.directionNav=a("."+j+"direction-nav li a",c)}g.directionNav.update();c.directionNav.bind(d,function(s){s.preventDefault();var t;if(b===""||b===s.type){t=(a(this).hasClass(j+"next"))?c.getTarget("next"):c.getTarget("prev");c.flexAnimate(t,c.vars.pauseOnAction)}if(b===""){b=s.type}g.setToClearWatchedEvent()})},update:function(){var r=j+"disabled";if(c.pagingCount===1){c.directionNav.addClass(r).attr("tabindex","-1")}else{if(!c.vars.animationLoop){if(c.animatingTo===0){c.directionNav.removeClass(r).filter("."+j+"prev").addClass(r).attr("tabindex","-1")}else{if(c.animatingTo===c.last){c.directionNav.removeClass(r).filter("."+j+"next").addClass(r).attr("tabindex","-1")}else{c.directionNav.removeClass(r).removeAttr("tabindex")}}}else{c.directionNav.removeClass(r).removeAttr("tabindex")}}}},pausePlay:{setup:function(){var r=a('<div class="'+j+'pauseplay"><a></a></div>');if(c.controlsContainer){c.controlsContainer.append(r);c.pausePlay=a("."+j+"pauseplay a",c.controlsContainer)}else{c.append(r);c.pausePlay=a("."+j+"pauseplay a",c)}g.pausePlay.update((c.vars.slideshow)?j+"pause":j+"play");c.pausePlay.bind(d,function(s){s.preventDefault();if(b===""||b===s.type){if(a(this).hasClass(j+"pause")){c.manualPause=true;c.manualPlay=false;c.pause()}else{c.manualPause=false;c.manualPlay=true;c.play()}}if(b===""){b=s.type}g.setToClearWatchedEvent()})},update:function(r){(r==="play")?c.pausePlay.removeClass(j+"pause").addClass(j+"play").html(c.vars.playText):c.pausePlay.removeClass(j+"play").addClass(j+"pause").html(c.vars.pauseText)}},touch:function(){var C,z,x,D,G,E,B=false,u=0,t=0,w=0;if(!e){f.addEventListener("touchstart",y,false);function y(H){if(c.animating){H.preventDefault()}else{if((window.navigator.msPointerEnabled)||H.touches.length===1){c.pause();D=(i)?c.h:c.w;E=Number(new Date());u=H.touches[0].pageX;t=H.touches[0].pageY;x=(o&&l&&c.animatingTo===c.last)?0:(o&&l)?c.limit-(((c.itemW+c.vars.itemMargin)*c.move)*c.animatingTo):(o&&c.currentSlide===c.last)?c.limit:(o)?((c.itemW+c.vars.itemMargin)*c.move)*c.currentSlide:(l)?(c.last-c.currentSlide+c.cloneOffset)*D:(c.currentSlide+c.cloneOffset)*D;C=(i)?t:u;z=(i)?u:t;f.addEventListener("touchmove",s,false);f.addEventListener("touchend",F,false)}}}function s(H){u=H.touches[0].pageX;t=H.touches[0].pageY;G=(i)?C-t:C-u;B=(i)?(Math.abs(G)<Math.abs(u-z)):(Math.abs(G)<Math.abs(t-z));var I=500;if(!B||Number(new Date())-E>I){H.preventDefault();if(!h&&c.transitions){if(!c.vars.animationLoop){G=G/((c.currentSlide===0&&G<0||c.currentSlide===c.last&&G>0)?(Math.abs(G)/D+2):1)}c.setProps(x+G,"setTouch")}}}function F(J){f.removeEventListener("touchmove",s,false);if(c.animatingTo===c.currentSlide&&!B&&!(G===null)){var I=(l)?-G:G,H=(I>0)?c.getTarget("next"):c.getTarget("prev");if(c.canAdvance(H)&&(Number(new Date())-E<550&&Math.abs(I)>50||Math.abs(I)>D/2)){c.flexAnimate(H,c.vars.pauseOnAction)}else{if(!h){c.flexAnimate(c.currentSlide,c.vars.pauseOnAction,true)}}}f.removeEventListener("touchend",F,false);C=null;z=null;G=null;x=null}}else{f.style.msTouchAction="none";f._gesture=new MSGesture();f._gesture.target=f;f.addEventListener("MSPointerDown",r,false);f._slider=c;f.addEventListener("MSGestureChange",A,false);f.addEventListener("MSGestureEnd",v,false);function r(H){H.stopPropagation();if(c.animating){H.preventDefault()}else{c.pause();f._gesture.addPointer(H.pointerId);w=0;D=(i)?c.h:c.w;E=Number(new Date());x=(o&&l&&c.animatingTo===c.last)?0:(o&&l)?c.limit-(((c.itemW+c.vars.itemMargin)*c.move)*c.animatingTo):(o&&c.currentSlide===c.last)?c.limit:(o)?((c.itemW+c.vars.itemMargin)*c.move)*c.currentSlide:(l)?(c.last-c.currentSlide+c.cloneOffset)*D:(c.currentSlide+c.cloneOffset)*D}}function A(K){K.stopPropagation();var J=K.target._slider;if(!J){return}var I=-K.translationX,H=-K.translationY;w=w+((i)?H:I);G=w;B=(i)?(Math.abs(w)<Math.abs(-I)):(Math.abs(w)<Math.abs(-H));if(K.detail===K.MSGESTURE_FLAG_INERTIA){setImmediate(function(){f._gesture.stop()});return}if(!B||Number(new Date())-E>500){K.preventDefault();if(!h&&J.transitions){if(!J.vars.animationLoop){G=w/((J.currentSlide===0&&w<0||J.currentSlide===J.last&&w>0)?(Math.abs(w)/D+2):1)}J.setProps(x+G,"setTouch")}}}function v(K){K.stopPropagation();var H=K.target._slider;if(!H){return}if(H.animatingTo===H.currentSlide&&!B&&!(G===null)){var J=(l)?-G:G,I=(J>0)?H.getTarget("next"):H.getTarget("prev");if(H.canAdvance(I)&&(Number(new Date())-E<550&&Math.abs(J)>50||Math.abs(J)>D/2)){H.flexAnimate(I,H.vars.pauseOnAction)}else{if(!h){H.flexAnimate(H.currentSlide,H.vars.pauseOnAction,true)}}}C=null;z=null;G=null;x=null;w=0}}},resize:function(){if(!c.animating&&c.is(":visible")){if(!o){c.doMath()}if(h){g.smoothHeight()}else{if(o){c.slides.width(c.computedW);c.update(c.pagingCount);c.setProps()}else{if(i){c.viewport.height(c.h);c.setProps(c.h,"setTotal")}else{if(c.vars.smoothHeight){g.smoothHeight()}c.newSlides.width(c.computedW);c.setProps(c.computedW,"setTotal")}}}}},smoothHeight:function(r){if(!i||h){var s=(h)?c:c.viewport;(r)?s.animate({height:c.slides.eq(c.animatingTo).height()},r):s.height(c.slides.eq(c.animatingTo).height())}},sync:function(r){var t=a(c.vars.sync).data("flexslider"),s=c.animatingTo;switch(r){case"animate":t.flexAnimate(s,c.vars.pauseOnAction,false,true);break;case"play":if(!t.playing&&!t.asNav){t.play()}break;case"pause":t.pause();break}},pauseInvisible:{visProp:null,init:function(){var t=["webkit","moz","ms","o"];if("hidden" in document){return"hidden"}for(var s=0;s<t.length;s++){if((t[s]+"Hidden") in document){g.pauseInvisible.visProp=t[s]+"Hidden"}}if(g.pauseInvisible.visProp){var r=g.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(r,function(){if(g.pauseInvisible.isHidden()){if(c.startTimeout){clearTimeout(c.startTimeout)}else{c.pause()}}else{if(c.started){c.play()}else{(c.vars.initDelay>0)?setTimeout(c.play,c.vars.initDelay):c.play()}}})}},isHidden:function(){return document[g.pauseInvisible.visProp]||false}},setToClearWatchedEvent:function(){clearTimeout(p);p=setTimeout(function(){b=""},3000)}};c.flexAnimate=function(z,A,t,v,w){if(!c.vars.animationLoop&&z!==c.currentSlide){c.direction=(z>c.currentSlide)?"next":"prev"}if(m&&c.pagingCount===1){c.direction=(c.currentItem<z)?"next":"prev"}if(!c.animating&&(c.canAdvance(z,w)||t)&&c.is(":visible")){if(m&&v){var s=a(c.vars.asNavFor).data("flexslider");c.atEnd=z===0||z===c.count-1;s.flexAnimate(z,true,false,true,w);c.direction=(c.currentItem<z)?"next":"prev";s.direction=c.direction;if(Math.ceil((z+1)/c.visible)-1!==c.currentSlide&&z!==0){c.currentItem=z;c.slides.removeClass(j+"active-slide").eq(z).addClass(j+"active-slide");z=Math.floor(z/c.visible)}else{c.currentItem=z;c.slides.removeClass(j+"active-slide").eq(z).addClass(j+"active-slide");return false}}c.animating=true;c.animatingTo=z;if(A){c.pause()}c.vars.before(c);if(c.syncExists&&!w){g.sync("animate")}if(c.vars.controlNav){g.controlNav.active()}if(!o){c.slides.removeClass(j+"active-slide").eq(z).addClass(j+"active-slide")}c.atEnd=z===0||z===c.last;if(c.vars.directionNav){g.directionNav.update()}if(z===c.last){c.vars.end(c);if(!c.vars.animationLoop){c.pause()}}if(!h){var y=(i)?c.slides.filter(":first").height():c.computedW,x,u,r;if(o){x=c.vars.itemMargin;r=((c.itemW+x)*c.move)*c.animatingTo;u=(r>c.limit&&c.visible!==1)?c.limit:r}else{if(c.currentSlide===0&&z===c.count-1&&c.vars.animationLoop&&c.direction!=="next"){u=(l)?(c.count+c.cloneOffset)*y:0}else{if(c.currentSlide===c.last&&z===0&&c.vars.animationLoop&&c.direction!=="prev"){u=(l)?0:(c.count+1)*y}else{u=(l)?((c.count-1)-z+c.cloneOffset)*y:(z+c.cloneOffset)*y}}}c.setProps(u,"",c.vars.animationSpeed);if(c.transitions){if(!c.vars.animationLoop||!c.atEnd){c.animating=false;c.currentSlide=c.animatingTo}c.container.unbind("webkitTransitionEnd transitionend");c.container.bind("webkitTransitionEnd transitionend",function(){c.wrapup(y)})}else{c.container.animate(c.args,c.vars.animationSpeed,c.vars.easing,function(){c.wrapup(y)})}}else{if(!k){c.slides.eq(c.currentSlide).css({zIndex:1}).animate({opacity:0},c.vars.animationSpeed,c.vars.easing);c.slides.eq(z).css({zIndex:2}).animate({opacity:1},c.vars.animationSpeed,c.vars.easing,c.wrapup)}else{c.slides.eq(c.currentSlide).css({opacity:0,zIndex:1});c.slides.eq(z).css({opacity:1,zIndex:2});c.wrapup(y)}}if(c.vars.smoothHeight){g.smoothHeight(c.vars.animationSpeed)}}};c.wrapup=function(r){if(!h&&!o){if(c.currentSlide===0&&c.animatingTo===c.last&&c.vars.animationLoop){c.setProps(r,"jumpEnd")}else{if(c.currentSlide===c.last&&c.animatingTo===0&&c.vars.animationLoop){c.setProps(r,"jumpStart")}}}c.animating=false;c.currentSlide=c.animatingTo;c.vars.after(c)};c.animateSlides=function(){if(!c.animating&&n){c.flexAnimate(c.getTarget("next"))}};c.pause=function(){clearInterval(c.animatedSlides);c.animatedSlides=null;c.playing=false;if(c.vars.pausePlay){g.pausePlay.update("play")}if(c.syncExists){g.sync("pause")}};c.play=function(){if(c.playing){clearInterval(c.animatedSlides)}c.animatedSlides=c.animatedSlides||setInterval(c.animateSlides,c.vars.slideshowSpeed);c.started=c.playing=true;if(c.vars.pausePlay){g.pausePlay.update("pause")}if(c.syncExists){g.sync("play")}};c.stop=function(){c.pause();c.stopped=true};c.canAdvance=function(t,r){var s=(m)?c.pagingCount-1:c.last;return(r)?true:(m&&c.currentItem===c.count-1&&t===0&&c.direction==="prev")?true:(m&&c.currentItem===0&&t===c.pagingCount-1&&c.direction!=="next")?false:(t===c.currentSlide&&!m)?false:(c.vars.animationLoop)?true:(c.atEnd&&c.currentSlide===0&&t===s&&c.direction!=="next")?false:(c.atEnd&&c.currentSlide===s&&t===0&&c.direction==="next")?false:true};c.getTarget=function(r){c.direction=r;if(r==="next"){return(c.currentSlide===c.last)?0:c.currentSlide+1}else{return(c.currentSlide===0)?c.last:c.currentSlide-1}};c.setProps=function(u,r,s){var t=(function(){var v=(u)?u:((c.itemW+c.vars.itemMargin)*c.move)*c.animatingTo,w=(function(){if(o){return(r==="setTouch")?u:(l&&c.animatingTo===c.last)?0:(l)?c.limit-(((c.itemW+c.vars.itemMargin)*c.move)*c.animatingTo):(c.animatingTo===c.last)?c.limit:v}else{switch(r){case"setTotal":return(l)?((c.count-1)-c.currentSlide+c.cloneOffset)*u:(c.currentSlide+c.cloneOffset)*u;case"setTouch":return(l)?u:u;case"jumpEnd":return(l)?u:c.count*u;case"jumpStart":return(l)?c.count*u:u;default:return u}}}());return(w*-1)+"px"}());if(c.transitions){t=(i)?"translate3d(0,"+t+",0)":"translate3d("+t+",0,0)";s=(s!==undefined)?(s/1000)+"s":"0s";c.container.css("-"+c.pfx+"-transition-duration",s)}c.args[c.prop]=t;if(c.transitions||s===undefined){c.container.css(c.args)}};c.setup=function(s){if(!h){var t,r;if(s==="init"){c.viewport=a('<div class="'+j+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(c).append(c.container);c.cloneCount=0;c.cloneOffset=0;if(l){r=a.makeArray(c.slides).reverse();c.slides=a(r);c.container.empty().append(c.slides)}}if(c.vars.animationLoop&&!o){c.cloneCount=2;c.cloneOffset=1;if(s!=="init"){c.container.find(".clone").remove()}c.container.append(c.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(c.slides.last().clone().addClass("clone").attr("aria-hidden","true"))}c.newSlides=a(c.vars.selector,c);t=(l)?c.count-1-c.currentSlide+c.cloneOffset:c.currentSlide+c.cloneOffset;if(i&&!o){c.container.height((c.count+c.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){c.newSlides.css({display:"block"});c.doMath();c.viewport.height(c.h);c.setProps(t*c.h,"init")},(s==="init")?100:0)}else{c.container.width((c.count+c.cloneCount)*200+"%");c.setProps(t*c.computedW,"init");setTimeout(function(){c.doMath();c.newSlides.css({width:c.computedW,"float":"left",display:"block"});if(c.vars.smoothHeight){g.smoothHeight()}},(s==="init")?100:0)}}else{c.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});if(s==="init"){if(!k){c.slides.css({opacity:0,display:"block",zIndex:1}).eq(c.currentSlide).css({zIndex:2}).animate({opacity:1},c.vars.animationSpeed,c.vars.easing)}else{c.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(c.currentSlide).css({opacity:1,zIndex:2})}}if(c.vars.smoothHeight){g.smoothHeight()}}if(!o){c.slides.removeClass(j+"active-slide").eq(c.currentSlide).addClass(j+"active-slide")}};c.doMath=function(){var r=c.slides.first(),u=c.vars.itemMargin,s=c.vars.minItems,t=c.vars.maxItems;c.w=(c.viewport===undefined)?c.width():c.viewport.width();c.h=r.height();c.boxPadding=r.outerWidth()-r.width();if(o){c.itemT=c.vars.itemWidth+u;c.minW=(s)?s*c.itemT:c.w;c.maxW=(t)?(t*c.itemT)-u:c.w;c.itemW=(c.minW>c.w)?(c.w-(u*(s-1)))/s:(c.maxW<c.w)?(c.w-(u*(t-1)))/t:(c.vars.itemWidth>c.w)?c.w:c.vars.itemWidth;c.visible=Math.floor(c.w/(c.itemW));c.move=(c.vars.move>0&&c.vars.move<c.visible)?c.vars.move:c.visible;c.pagingCount=Math.ceil(((c.count-c.visible)/c.move)+1);c.last=c.pagingCount-1;c.limit=(c.pagingCount===1)?0:(c.vars.itemWidth>c.w)?(c.itemW*(c.count-1))+(u*(c.count-1)):((c.itemW+u)*c.count)-c.w-u}else{c.itemW=c.w;c.pagingCount=c.count;c.last=c.count-1}c.computedW=c.itemW-c.boxPadding};c.update=function(s,r){c.doMath();if(!o){if(s<c.currentSlide){c.currentSlide+=1}else{if(s<=c.currentSlide&&s!==0){c.currentSlide-=1}}c.animatingTo=c.currentSlide}if(c.vars.controlNav&&!c.manualControls){if((r==="add"&&!o)||c.pagingCount>c.controlNav.length){g.controlNav.update("add")}else{if((r==="remove"&&!o)||c.pagingCount<c.controlNav.length){if(o&&c.currentSlide>c.last){c.currentSlide-=1;c.animatingTo-=1}g.controlNav.update("remove",c.last)}}}if(c.vars.directionNav){g.directionNav.update()}};c.addSlide=function(r,t){var s=a(r);c.count+=1;c.last=c.count-1;if(i&&l){(t!==undefined)?c.slides.eq(c.count-t).after(s):c.container.prepend(s)}else{(t!==undefined)?c.slides.eq(t).before(s):c.container.append(s)}c.update(t,"add");c.slides=a(c.vars.selector+":not(.clone)",c);c.setup();c.vars.added(c)};c.removeSlide=function(r){var s=(isNaN(r))?c.slides.index(a(r)):r;c.count-=1;c.last=c.count-1;if(isNaN(r)){a(r,c.slides).remove()}else{(i&&l)?c.slides.eq(c.last).remove():c.slides.eq(r).remove()}c.doMath();c.update(s,"remove");c.slides=a(c.vars.selector+":not(.clone)",c);c.setup();c.vars.removed(c)};g.init()};a(window).blur(function(b){focused=false}).focus(function(b){focused=true});a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};a.fn.flexslider=function(b){if(b===undefined){b={}}if(typeof b==="object"){return this.each(function(){var f=a(this),d=(b.selector)?b.selector:".slides > li",e=f.find(d);if((e.length===1&&b.allowOneSlide===true)||e.length===0){e.fadeIn(400);if(b.start){b.start(f)}}else{if(f.data("flexslider")===undefined){new a.flexslider(this,b)}}})}else{var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),true);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),true);break;default:if(typeof b==="number"){c.flexAnimate(b,true)}}}}})(jQuery);window.Modernizr=function(af,ae,ad){function F(b){W.cssText=b}function E(d,c){return F(T.join(d+";")+(c||""))}function D(d,c){return typeof d===c}function Q(d,c){return !!~(""+d).indexOf(c)}function O(g,c,j){for(var i in g){var h=c[g[i]];if(h!==ad){return j===!1?g[i]:D(h,"function")?h.bind(j||c):h}}return !1}var ac="2.6.3",ab={},aa=!0,Z=ae.documentElement,Y="modernizr",X=ae.createElement(Y),W=X.style,V,U={}.toString,T=" -webkit- -moz- -o- -ms- ".split(" "),S={svg:"http://www.w3.org/2000/svg"},R={},P={},N={},M=[],K=M.slice,J,I=function(v,u,t,s){var r,q,p,o,h=ae.createElement("div"),g=ae.body,b=g||ae.createElement("body");if(parseInt(t,10)){while(t--){p=ae.createElement("div"),p.id=s?s[t]:Y+(t+1),h.appendChild(p)}}return r=["&#173;",'<style id="s',Y,'">',v,"</style>"].join(""),h.id=Y,(g?h:b).innerHTML+=r,b.appendChild(h),g||(b.style.background="",b.style.overflow="hidden",o=Z.style.overflow,Z.style.overflow="hidden",Z.appendChild(b)),q=u(h,v),g?h.parentNode.removeChild(h):(b.parentNode.removeChild(b),Z.style.overflow=o),!!q},H={}.hasOwnProperty,G;!D(H,"undefined")&&!D(H.call,"undefined")?G=function(d,c){return H.call(d,c)}:G=function(d,c){return c in d&&D(d.constructor.prototype[c],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;if(typeof h!="function"){throw new TypeError}var g=K.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};b.prototype=h.prototype;var d=new b,c=h.apply(d,g.concat(K.call(arguments)));return Object(c)===c?c:d}return h.apply(a,g.concat(K.call(arguments)))};return f}),R.touch=function(){var a;return"ontouchstart" in af||af.DocumentTouch&&ae instanceof DocumentTouch?a=!0:I(["@media (",T.join("touch-enabled),("),Y,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=b.offsetTop===9}),a},R.svg=function(){return !!ae.createElementNS&&!!ae.createElementNS(S.svg,"svg").createSVGRect};for(var L in R){G(R,L)&&(J=L.toLowerCase(),ab[J]=R[L](),M.push((ab[J]?"":"no-")+J))}return ab.addTest=function(e,c){if(typeof e=="object"){for(var f in e){G(e,f)&&ab.addTest(f,e[f])}}else{e=e.toLowerCase();if(ab[e]!==ad){return ab}c=typeof c=="function"?c():c,typeof aa!="undefined"&&aa&&(Z.className+=" "+(c?"":"no-")+e),ab[e]=c}return ab},F(""),X=V=null,function(am,al){function z(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)}function y(){var b=s.elements;return typeof b=="string"?b.split(" "):b}function x(d){var c=B[d[ag]];return c||(c={},C++,d[ag]=C,B[C]=c),c}function w(b,h,e){h||(h=al);if(A){return h.createElement(b)}e||(e=x(h));var d;return e.cache[b]?d=e.cache[b].cloneNode():ai.test(b)?d=(e.cache[b]=e.createElem(b)).cloneNode():d=e.createElem(b),d.canHaveChildren&&!aj.test(b)?e.frag.appendChild(d):d}function v(b,l){b||(b=al);if(A){return b.createDocumentFragment()}l=l||x(b);var k=l.frag.cloneNode(),j=0,i=y(),h=i.length;for(;j<h;j++){k.createElement(i[j])}return k}function u(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return s.shivMethods?w(a,d,c):c.createElem(a)},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+y().join().replace(/\w+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'})+");return n}")(s,c.frag)}function t(b){b||(b=al);var d=x(b);return s.shivCSS&&!ah&&!d.hasCSS&&(d.hasCSS=!!z(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),A||u(b,d),b}var ak=am.html5||{},aj=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,ai=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,ah,ag="_html5shiv",C=0,B={},A;(function(){try{var b=al.createElement("a");b.innerHTML="<xyz></xyz>",ah="hidden" in b,A=b.childNodes.length==1||function(){al.createElement("a");var c=al.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()}catch(d){ah=!0,A=!0}})();var s={elements:ak.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:ak.shivCSS!==!1,supportsUnknownElements:A,shivMethods:ak.shivMethods!==!1,type:"default",shivDocument:t,createElement:w,createDocumentFragment:v};am.html5=s,t(al)}(this,ae),ab._version=ac,ab._prefixes=T,ab.testStyles=I,Z.className=Z.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(aa?" js "+M.join(" "):""),ab}(this,this.document),function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)}function Z(b){return"string"==typeof b}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b}function W(){var b=O.shift();M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)},0):(b(),W()):M=0}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)},50);for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))}function U(g,e,j,i,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&W()),this}function T(){var b=L;return b.loader={load:U,i:0},b}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d}},N,L;L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;for(l=0;l<p;l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))}for(l=0;l<h;l++){q=E[l](q)}return q}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=aa(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(s)||aa(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2})))}function m(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}),n(b,r,v,0,t)}else{if(Object(b)===b){for(g in o=function(){var a=0,i;for(i in b){b.hasOwnProperty(i)&&a++}return a}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}:r[g]=function(i){return function(){var a=[].slice.call(arguments);i&&i.apply(this,a),p()}}(q[g])),n(b[g],r,v,g,t))}}}}else{!h&&p()}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;u(t?w.yep:w.nope,!!s),s&&u(s)}var k,f,d=this.yepnope.loader;if(Z(e)){n(e,0,d,0)}else{if(F(e)){for(k=0;k<e.length;k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)}}else{Object(e)===e&&m(e,d)}}},L.addPrefix=function(d,c){C[d]=c},L.addFilter=function(b){E.push(b)},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;g.src=r;for(b in p){g.setAttribute(b,p[b])}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)},R(function(){f||(f=1,q(1))},n),m?g.onload():Q.parentNode.insertBefore(g,Q)},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;l.href=b,l.rel="stylesheet",l.type="text/css";for(f in m){l.setAttribute(f,m[f])}k||(Q.parentNode.insertBefore(l,Q),R(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(h,j,e){var a="placeholder" in j.createElement("input");var f="placeholder" in j.createElement("textarea");var k=e.fn;var d=e.valHooks;var b=e.propHooks;var m;var l;if(a&&f){l=k.placeholder=function(){return this};l.input=l.textarea=true}else{l=k.placeholder=function(){var o=this;o.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":c,"blur.placeholder":g}).data("placeholder-enabled",true).trigger("blur.placeholder");return o};l.input=a;l.textarea=f;m={get:function(p){var o=e(p);var q=o.data("placeholder-password");if(q){return q[0].value}return o.data("placeholder-enabled")&&o.hasClass("placeholder")?"":p.value},set:function(p,r){var o=e(p);var q=o.data("placeholder-password");if(q){return q[0].value=r}if(!o.data("placeholder-enabled")){return p.value=r}if(r==""){p.value=r;if(p!=n()){g.call(p)}}else{if(o.hasClass("placeholder")){c.call(p,true,r)||(p.value=r)}else{p.value=r}}return o}};if(!a){d.input=m;b.value=m}if(!f){d.textarea=m;b.value=m}e(function(){e(j).delegate("form","submit.placeholder",function(){var o=e(".placeholder",this).each(c);setTimeout(function(){o.each(g)},10)})});e(h).bind("beforeunload.placeholder",function(){e(".placeholder").each(function(){this.value=""})})}function i(p){var o={};var q=/^jQuery\d+$/;e.each(p.attributes,function(s,r){if(r.specified&&!q.test(r.name)){o[r.name]=r.value}});return o}function c(p,q){var o=this;var r=e(o);if(o.value==r.attr("placeholder")&&r.hasClass("placeholder")){if(r.data("placeholder-password")){r=r.hide().next().show().attr("id",r.removeAttr("id").data("placeholder-id"));if(p===true){return r[0].value=q}r.focus()}else{o.value="";r.removeClass("placeholder");o==n()&&o.select()}}}function g(){var s;var o=this;var r=e(o);var q=this.id;if(o.value==""){if(o.type=="password"){if(!r.data("placeholder-textinput")){try{s=r.clone().attr({type:"text"})}catch(p){s=e("<input>").attr(e.extend(i(this),{type:"text"}))}s.removeAttr("name").data({"placeholder-password":r,"placeholder-id":q}).bind("focus.placeholder",c);r.data({"placeholder-textinput":s,"placeholder-id":q}).before(s)}r=r.removeAttr("id").hide().prev().attr("id",q).show()}r.addClass("placeholder");r[0].value=r.attr("placeholder")}else{r.removeClass("placeholder")}}function n(){try{return j.activeElement}catch(o){}}}(this,document,jQuery));var app=app={};(function(a,b){app.Events={ready:function(){app.defaults.init()}},app.defaults={init:function(){a("input[placeholder], textarea[placeholder]").placeholder();a(".flexslider").flexslider({animation:"slide",controlNav:false});a(".blogslider").flexslider({animation:"slide",controlNav:false,initDelay:3000})}};a(document).ready(app.Events.ready)})(jQuery);