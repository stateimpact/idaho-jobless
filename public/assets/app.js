/*!
 * jQuery UI 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);/*!
 * jQuery UI Widget 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);/*!
 * jQuery UI Mouse 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);/*
 * jQuery UI Position 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1];return this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]!==e){var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0}},top:function(b,c){if(c.at[1]!==e){var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];if(!c||!c.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&jQuery.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);/*
 * jQuery UI Slider 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=!0,f=a(this).data("index.ui-slider-handle"),g,h,i,j;if(!b.options.disabled){switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:e=!1;if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),g=b._start(d,f);if(g===!1)return}}j=b.options.step,b.options.values&&b.options.values.length?h=i=b.values(f):h=i=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:i=b._valueMin();break;case a.ui.keyCode.END:i=b._valueMax();break;case a.ui.keyCode.PAGE_UP:i=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:i=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(h===b._valueMax())return;i=b._trimAlignValue(h+j);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(h===b._valueMin())return;i=b._trimAlignValue(h-j)}b._slide(d,f,i);return e}}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy();return this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;if(c.disabled)return!1;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i);if(j===!1)return!1;this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0;return!0},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);this._slide(a,this._handleIndex,c);return!1},_mouseStop:function(a){this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1;return!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e;return this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values());return this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length)this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);else return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);else{if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()}},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;a=this._trimAlignValue(a);return a},_values:function(a){var b,c,d;if(arguments.length){b=this.options.values[a],b=this._trimAlignValue(b);return b}c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;Math.abs(c)*2>=b&&(d+=c>0?b:-b);return parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.17"})})(jQuery);
// Underscore.js 1.2.1
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function u(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(b.isFunction(a.isEqual))return a.isEqual(c);if(b.isFunction(c.isEqual))return c.isEqual(a);var e=typeof a;if(e!=typeof c)return false;if(!a!=!c)return false;if(b.isNaN(a))return b.isNaN(c);var g=b.isString(a),f=b.isString(c);if(g||f)return g&&f&&String(a)==String(c);g=b.isNumber(a);f=b.isNumber(c);if(g||f)return g&&f&&+a==+c;g=b.isBoolean(a);f=b.isBoolean(c);
if(g||f)return g&&f&&+a==+c;g=b.isDate(a);f=b.isDate(c);if(g||f)return g&&f&&a.getTime()==c.getTime();g=b.isRegExp(a);f=b.isRegExp(c);if(g||f)return g&&f&&a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase;if(e!="object")return false;if(a.length!==c.length)return false;if(a.constructor!==c.constructor)return false;for(e=d.length;e--;)if(d[e]==a)return true;d.push(a);var e=0,g=true,h;for(h in a)if(m.call(a,h)&&(e++,!(g=m.call(c,h)&&u(a[h],c[h],d))))break;if(g){for(h in c)if(m.call(c,
h)&&!e--)break;g=!e}d.pop();return g}var r=this,F=r._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,G=k.unshift,l=p.toString,m=p.hasOwnProperty,v=k.forEach,w=k.map,x=k.reduce,y=k.reduceRight,z=k.filter,A=k.every,B=k.some,q=k.indexOf,C=k.lastIndexOf,p=Array.isArray,H=Object.keys,s=Function.prototype.bind,b=function(a){return new n(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else typeof define==="function"&&define.amd?
define("underscore",function(){return b}):r._=b;b.VERSION="1.2.1";var j=b.each=b.forEach=function(a,c,b){if(a!=null)if(v&&a.forEach===v)a.forEach(c,b);else if(a.length===+a.length)for(var e=0,g=a.length;e<g;e++){if(e in a&&c.call(b,a[e],e,a)===o)break}else for(e in a)if(m.call(a,e)&&c.call(b,a[e],e,a)===o)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.map===w)return a.map(c,b);j(a,function(a,f,h){e[e.length]=c.call(b,a,f,h)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var g=
d!==void 0;a==null&&(a=[]);if(x&&a.reduce===x)return e&&(c=b.bind(c,e)),g?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){g?d=c.call(e,d,a,b,i):(d=a,g=true)});if(!g)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(y&&a.reduceRight===y)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;
D(a,function(a,f,h){if(c.call(b,a,f,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.filter===z)return a.filter(c,b);j(a,function(a,f,h){c.call(b,a,f,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,f,h){c.call(b,a,f,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(A&&a.every===A)return a.every(c,b);j(a,function(a,f,h){if(!(e=e&&c.call(b,a,f,h)))return o});
return e};var D=b.some=b.any=function(a,c,d){var c=c||b.identity,e=false;if(a==null)return e;if(B&&a.some===B)return a.some(c,d);j(a,function(a,b,h){if(e|=c.call(d,a,b,h))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return q&&a.indexOf===q?a.indexOf(c)!=-1:b=D(a,function(a){if(a===c)return true})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};
b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;
j(a,function(a,g){g==0?b[0]=a:(d=Math.floor(Math.random()*(g+1)),b[g]=b[d],b[d]=a)});return b};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,g=a.length;e<
g;){var f=e+g>>1;d(a[f])<d(c)?e=f+1:g=f}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,a.length-b):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=
function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,f,h){if(0==h||(c===true?b.last(d)!=f:!b.include(d,f)))d[d.length]=f,e[e.length]=a[h];return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};
b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(q&&a.indexOf===q)return a.indexOf(c);
for(d=0,e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(C&&a.lastIndexOf===C)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),g=0,f=Array(e);g<e;)f[g++]=a,a+=d;return f};var E=function(){};b.bind=function(a,c){var d,e;if(a.bind===s&&s)return s.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;
e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));E.prototype=a.prototype;var b=new E,f=a.apply(b,e.concat(i.call(arguments)));return Object(f)===f?f:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return m.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=
function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,g,f,h;h=b.debounce(function(){f=false},c);return function(){e=this;g=arguments;var b;d||(d=setTimeout(function(){d=null;a.apply(e,g);h()},c));f||a.apply(e,g);h&&h();f=true}};b.debounce=function(a,b){var d;return function(){var e=this,g=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,
g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=i.call(arguments);return function(){for(var b=i.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=H||function(a){if(a!==Object(a))throw new TypeError("Invalid object");
var b=[],d;for(d in a)m.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},
a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return u(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(m.call(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=l.call(arguments)=="[object Arguments]"?function(a){return l.call(a)=="[object Arguments]"}:function(a){return!(!a||!m.call(a,
"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===
void 0};b.noConflict=function(){r._=F;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),function(c){I(c,b[c]=a[c])})};var J=0;b.uniqueId=function(a){var b=J++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,
"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",d=new Function("obj",d);return c?d(c):d};var n=function(a){this._wrapped=a};b.prototype=n.prototype;var t=function(a,c){return c?b(a).chain():a},I=function(a,c){n.prototype[a]=function(){var a=i.call(arguments);G.call(a,this._wrapped);return t(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];n.prototype[a]=function(){b.apply(this._wrapped,arguments);return t(this._wrapped,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];n.prototype[a]=function(){return t(b.apply(this._wrapped,arguments),this._chain)}});n.prototype.chain=function(){this._chain=true;return this};n.prototype.value=function(){return this._wrapped}})();

// Backbone.js 0.5.3
// (c) 2010 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://documentcloud.github.com/backbone
(function(){var h=this,p=h.Backbone,e;e=typeof exports!=="undefined"?exports:h.Backbone={};e.VERSION="0.5.3";var f=h._;if(!f&&typeof require!=="undefined")f=require("underscore")._;var g=h.jQuery||h.Zepto;e.noConflict=function(){h.Backbone=p;return this};e.emulateHTTP=!1;e.emulateJSON=!1;e.Events={bind:function(a,b,c){var d=this._callbacks||(this._callbacks={});(d[a]||(d[a]=[])).push([b,c]);return this},unbind:function(a,b){var c;if(a){if(c=this._callbacks)if(b){c=c[a];if(!c)return this;for(var d=
0,e=c.length;d<e;d++)if(c[d]&&b===c[d][0]){c[d]=null;break}}else c[a]=[]}else this._callbacks={};return this},trigger:function(a){var b,c,d,e,f=2;if(!(c=this._callbacks))return this;for(;f--;)if(b=f?a:"all",b=c[b])for(var g=0,h=b.length;g<h;g++)(d=b[g])?(e=f?Array.prototype.slice.call(arguments,1):arguments,d[0].apply(d[1]||this,e)):(b.splice(g,1),g--,h--);return this}};e.Model=function(a,b){var c;a||(a={});if(c=this.defaults)f.isFunction(c)&&(c=c.call(this)),a=f.extend({},c,a);this.attributes={};
this._escapedAttributes={};this.cid=f.uniqueId("c");this.set(a,{silent:!0});this._changed=!1;this._previousAttributes=f.clone(this.attributes);if(b&&b.collection)this.collection=b.collection;this.initialize(a,b)};f.extend(e.Model.prototype,e.Events,{_previousAttributes:null,_changed:!1,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.attributes[a];
return this._escapedAttributes[a]=(b==null?"":""+b).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},has:function(a){return this.attributes[a]!=null},set:function(a,b){b||(b={});if(!a)return this;if(a.attributes)a=a.attributes;var c=this.attributes,d=this._escapedAttributes;if(!b.silent&&this.validate&&!this._performValidation(a,b))return!1;if(this.idAttribute in a)this.id=a[this.idAttribute];
var e=this._changing;this._changing=!0;for(var g in a){var h=a[g];if(!f.isEqual(c[g],h))c[g]=h,delete d[g],this._changed=!0,b.silent||this.trigger("change:"+g,this,h,b)}!e&&!b.silent&&this._changed&&this.change(b);this._changing=!1;return this},unset:function(a,b){if(!(a in this.attributes))return this;b||(b={});var c={};c[a]=void 0;if(!b.silent&&this.validate&&!this._performValidation(c,b))return!1;delete this.attributes[a];delete this._escapedAttributes[a];a==this.idAttribute&&delete this.id;this._changed=
!0;b.silent||(this.trigger("change:"+a,this,void 0,b),this.change(b));return this},clear:function(a){a||(a={});var b,c=this.attributes,d={};for(b in c)d[b]=void 0;if(!a.silent&&this.validate&&!this._performValidation(d,a))return!1;this.attributes={};this._escapedAttributes={};this._changed=!0;if(!a.silent){for(b in c)this.trigger("change:"+b,this,void 0,a);this.change(a)}return this},fetch:function(a){a||(a={});var b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&
c(b,d)};a.error=i(a.error,b,a);return(this.sync||e.sync).call(this,"read",this,a)},save:function(a,b){b||(b={});if(a&&!this.set(a,b))return!1;var c=this,d=b.success;b.success=function(a,e,f){if(!c.set(c.parse(a,f),b))return!1;d&&d(c,a,f)};b.error=i(b.error,c,b);var f=this.isNew()?"create":"update";return(this.sync||e.sync).call(this,f,this,b)},destroy:function(a){a||(a={});if(this.isNew())return this.trigger("destroy",this,this.collection,a);var b=this,c=a.success;a.success=function(d){b.trigger("destroy",
b,b.collection,a);c&&c(b,d)};a.error=i(a.error,b,a);return(this.sync||e.sync).call(this,"delete",this,a)},url:function(){var a=k(this.collection)||this.urlRoot||l();if(this.isNew())return a;return a+(a.charAt(a.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this)},isNew:function(){return this.id==null},change:function(a){this.trigger("change",this,a);this._previousAttributes=f.clone(this.attributes);this._changed=!1},hasChanged:function(a){if(a)return this._previousAttributes[a]!=
this.attributes[a];return this._changed},changedAttributes:function(a){a||(a=this.attributes);var b=this._previousAttributes,c=!1,d;for(d in a)f.isEqual(b[d],a[d])||(c=c||{},c[d]=a[d]);return c},previous:function(a){if(!a||!this._previousAttributes)return null;return this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},_performValidation:function(a,b){var c=this.validate(a);if(c)return b.error?b.error(this,c,b):this.trigger("error",this,c,b),!1;return!0}});
e.Collection=function(a,b){b||(b={});if(b.comparator)this.comparator=b.comparator;f.bindAll(this,"_onModelEvent","_removeReference");this._reset();a&&this.reset(a,{silent:!0});this.initialize.apply(this,arguments)};f.extend(e.Collection.prototype,e.Events,{model:e.Model,initialize:function(){},toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,b){if(f.isArray(a))for(var c=0,d=a.length;c<d;c++)this._add(a[c],b);else this._add(a,b);return this},remove:function(a,b){if(f.isArray(a))for(var c=
0,d=a.length;c<d;c++)this._remove(a[c],b);else this._remove(a,b);return this},get:function(a){if(a==null)return null;return this._byId[a.id!=null?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");this.models=this.sortBy(this.comparator);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},
reset:function(a,b){a||(a=[]);b||(b={});this.each(this._removeReference);this._reset();this.add(a,{silent:!0});b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a||(a={});var b=this,c=a.success;a.success=function(d,f,e){b[a.add?"add":"reset"](b.parse(d,e),a);c&&c(b,d)};a.error=i(a.error,b,a);return(this.sync||e.sync).call(this,"read",this,a)},create:function(a,b){var c=this;b||(b={});a=this._prepareModel(a,b);if(!a)return!1;var d=b.success;b.success=function(a,e,f){c.add(a,b);
d&&d(a,e,f)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_prepareModel:function(a,b){if(a instanceof e.Model){if(!a.collection)a.collection=this}else{var c=a;a=new this.model(c,{collection:this});a.validate&&!a._performValidation(c,b)&&(a=!1)}return a},_add:function(a,b){b||(b={});a=this._prepareModel(a,b);if(!a)return!1;var c=this.getByCid(a);if(c)throw Error(["Can't add the same model to a set twice",
c.id]);this._byId[a.id]=a;this._byCid[a.cid]=a;this.models.splice(b.at!=null?b.at:this.comparator?this.sortedIndex(a,this.comparator):this.length,0,a);a.bind("all",this._onModelEvent);this.length++;b.silent||a.trigger("add",a,this,b);return a},_remove:function(a,b){b||(b={});a=this.getByCid(a)||this.get(a);if(!a)return null;delete this._byId[a.id];delete this._byCid[a.cid];this.models.splice(this.indexOf(a),1);this.length--;b.silent||a.trigger("remove",a,this,b);this._removeReference(a);return a},
_removeReference:function(a){this==a.collection&&delete a.collection;a.unbind("all",this._onModelEvent)},_onModelEvent:function(a,b,c,d){(a=="add"||a=="remove")&&c!=this||(a=="destroy"&&this._remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,arguments))}});f.each(["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max",
"min","sortBy","sortedIndex","toArray","size","first","rest","last","without","indexOf","lastIndexOf","isEmpty","groupBy"],function(a){e.Collection.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});e.Router=function(a){a||(a={});if(a.routes)this.routes=a.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var q=/:([\w\d]+)/g,r=/\*([\w\d]+)/g,s=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(e.Router.prototype,e.Events,{initialize:function(){},route:function(a,
b,c){e.history||(e.history=new e.History);f.isRegExp(a)||(a=this._routeToRegExp(a));e.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d))},this))},navigate:function(a,b){e.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(s,"\\$&").replace(q,
"([^/]*)").replace(r,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});e.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")};var j=/^#*/,t=/msie [\w.]+/,m=!1;f.extend(e.History.prototype,{interval:50,getFragment:function(a,b){if(a==null)if(this._hasPushState||b){a=window.location.pathname;var c=window.location.search;c&&(a+=c);a.indexOf(this.options.root)==0&&(a=a.substr(this.options.root.length))}else a=window.location.hash;return decodeURIComponent(a.replace(j,
""))},start:function(a){if(m)throw Error("Backbone.history has already been started");this.options=f.extend({},{root:"/"},this.options,a);this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||!window.history||!window.history.pushState);a=this.getFragment();var b=document.documentMode;if(b=t.exec(navigator.userAgent.toLowerCase())&&(!b||b<=7))this.iframe=g('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);
this._hasPushState?g(window).bind("popstate",this.checkUrl):"onhashchange"in window&&!b?g(window).bind("hashchange",this.checkUrl):setInterval(this.checkUrl,this.interval);this.fragment=a;m=!0;a=window.location;b=a.pathname==this.options.root;if(this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;else if(this._wantsPushState&&this._hasPushState&&b&&a.hash)this.fragment=a.hash.replace(j,""),window.history.replaceState({},
document.title,a.protocol+"//"+a.host+this.options.root+this.fragment);if(!this.options.silent)return this.loadUrl()},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.iframe.location.hash));if(a==this.fragment||a==decodeURIComponent(this.fragment))return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(window.location.hash)},loadUrl:function(a){var b=this.fragment=this.getFragment(a);
return f.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){var c=(a||"").replace(j,"");if(!(this.fragment==c||this.fragment==decodeURIComponent(c))){if(this._hasPushState){var d=window.location;c.indexOf(this.options.root)!=0&&(c=this.options.root+c);this.fragment=c;window.history.pushState({},document.title,d.protocol+"//"+d.host+c)}else if(window.location.hash=this.fragment=c,this.iframe&&c!=this.getFragment(this.iframe.location.hash))this.iframe.document.open().close(),
this.iframe.location.hash=c;b&&this.loadUrl(a)}}});e.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.delegateEvents();this.initialize.apply(this,arguments)};var u=/^(\S+)\s*(.*)$/,n=["model","collection","el","id","attributes","className","tagName"];f.extend(e.View.prototype,e.Events,{tagName:"div",$:function(a){return g(a,this.el)},initialize:function(){},render:function(){return this},remove:function(){g(this.el).remove();return this},make:function(a,
b,c){a=document.createElement(a);b&&g(a).attr(b);c&&g(a).html(c);return a},delegateEvents:function(a){if(a||(a=this.events))for(var b in f.isFunction(a)&&(a=a.call(this)),g(this.el).unbind(".delegateEvents"+this.cid),a){var c=this[a[b]];if(!c)throw Error('Event "'+a[b]+'" does not exist');var d=b.match(u),e=d[1];d=d[2];c=f.bind(c,this);e+=".delegateEvents"+this.cid;d===""?g(this.el).bind(e,c):g(this.el).delegate(d,e,c)}},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=
0,c=n.length;b<c;b++){var d=n[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el){if(f.isString(this.el))this.el=g(this.el).get(0)}else{var a=this.attributes||{};if(this.id)a.id=this.id;if(this.className)a["class"]=this.className;this.el=this.make(this.tagName,a)}}});e.Model.extend=e.Collection.extend=e.Router.extend=e.View.extend=function(a,b){var c=v(this,a,b);c.extend=this.extend;return c};var w={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};e.sync=function(a,
b,c){var d=w[a];c=f.extend({type:d,dataType:"json"},c);if(!c.url)c.url=k(b)||l();if(!c.data&&b&&(a=="create"||a=="update"))c.contentType="application/json",c.data=JSON.stringify(b.toJSON());if(e.emulateJSON)c.contentType="application/x-www-form-urlencoded",c.data=c.data?{model:c.data}:{};if(e.emulateHTTP&&(d==="PUT"||d==="DELETE")){if(e.emulateJSON)c.data._method=d;c.type="POST";c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)}}if(c.type!=="GET"&&!e.emulateJSON)c.processData=
!1;return g.ajax(c)};var o=function(){},v=function(a,b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){return a.apply(this,arguments)};f.extend(d,a);o.prototype=a.prototype;d.prototype=new o;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},k=function(a){if(!a||!a.url)return null;return f.isFunction(a.url)?a.url():a.url},l=function(){throw Error('A "url" property or function must be specified');},i=function(a,b,c){return function(d){a?
a(b,d,c):b.trigger("error",b,d,c)}}}).call(this);

/*
 Copyright (c) 2010-2011, CloudMade, Vladimir Agafonkin
 Leaflet is a BSD-licensed JavaScript library for map display and interaction.
 See http://cloudmade.github.com/Leaflet/ for more information.
*/
(function(a){var b={VERSION:"0.2",ROOT_URL:function(){for(var a=document.getElementsByTagName("script"),b=/^(.*\/)leaflet-?([\w-]*)\.js.*$/,e=0,f=a.length;e<f;e++){var g=a[e].src;if(g=g&&g.match(b)){if(g[2]=="include")break;return g[1]}}return"../../dist/"}(),noConflict:function(){a.L=this._originalL;return this},_originalL:a.L};window.L=b})(this);L.Util={extend:function(a){for(var b=Array.prototype.slice.call(arguments,1),c=0,d=b.length,e;c<d;c++){e=b[c]||{};for(var f in e)e.hasOwnProperty(f)&&(a[f]=e[f])}return a},bind:function(a,b){return function(){return a.apply(b,arguments)}},stamp:function(){var a=0;return function(b){b._leaflet_id=b._leaflet_id||++a;return b._leaflet_id}}(),requestAnimFrame:function(){function a(a){window.setTimeout(a,1E3/60)}var b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||
window.oRequestAnimationFrame||window.msRequestAnimationFrame||a;return function(c,d,e){c=d?L.Util.bind(c,d):d;e&&b===a?c():b(c)}}(),limitExecByInterval:function(a,b,c){function d(){e=!1;f&&(g.callee.apply(c,g),f=!1)}var e,f,g;return function(){g=arguments;e?f=!0:(e=!0,setTimeout(d,b),a.apply(c,g))}},falseFn:function(){return!1},formatNum:function(a,b){var c=Math.pow(10,b||5);return Math.round(a*c)/c},setOptions:function(a,b){a.options=L.Util.extend({},a.options,b)},getParamString:function(a){var b=
[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c+"="+a[c]);return"?"+b.join("&")}};L.Class=function(){};
L.Class.extend=function(a){var b=function(){!L.Class._prototyping&&this.initialize&&this.initialize.apply(this,arguments)};L.Class._prototyping=!0;var c=new this;L.Class._prototyping=!1;c.constructor=b;b.prototype=c;c.superclass=this.prototype;a.statics&&(L.Util.extend(b,a.statics),delete a.statics);a.includes&&(L.Util.extend.apply(null,[c].concat(a.includes)),delete a.includes);if(a.options&&c.options)a.options=L.Util.extend({},c.options,a.options);L.Util.extend(c,a);b.extend=arguments.callee;b.include=
function(a){L.Util.extend(this.prototype,a)};for(var d in this)this.hasOwnProperty(d)&&d!="prototype"&&(b[d]=this[d]);return b};L.Mixin={};
L.Mixin.Events={addEventListener:function(a,b,c){var d=this._leaflet_events=this._leaflet_events||{};d[a]=d[a]||[];d[a].push({action:b,context:c});return this},hasEventListeners:function(a){return"_leaflet_events"in this&&a in this._leaflet_events&&this._leaflet_events[a].length>0},removeEventListener:function(a,b,c){if(!this.hasEventListeners(a))return this;for(var d=0,e=this._leaflet_events,f=e[a].length;d<f;d++)if(e[a][d].action===b&&(!c||e[a][d].context===c)){e[a].splice(d,1);break}return this},fireEvent:function(a,
b){if(this.hasEventListeners(a)){for(var c=L.Util.extend({type:a,target:this},b),d=this._leaflet_events[a].slice(),e=0,f=d.length;e<f;e++)d[e].action.call(d[e].context||this,c);return this}}};L.Mixin.Events.on=L.Mixin.Events.addEventListener;L.Mixin.Events.off=L.Mixin.Events.removeEventListener;L.Mixin.Events.fire=L.Mixin.Events.fireEvent;(function(){var a=navigator.userAgent.toLowerCase(),b=!!window.ActiveXObject,c=a.indexOf("webkit")!=-1,d=a.indexOf("mobi")!=-1,e=a.indexOf("android")!=-1,f=window.opera;L.Browser={ie:b,ie6:b&&!window.XMLHttpRequest,webkit:c,webkit3d:c&&"WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,mobileWebkit:c&&(d||e),mobileOpera:d&&f,gecko:a.indexOf("gecko")!=-1,android:e};L.Browser.touch=L.Browser.mobileWebkit||L.Browser.mobileOpera})();L.Point=function(a,b,c){this.x=c?Math.round(a):a;this.y=c?Math.round(b):b};
L.Point.prototype={add:function(a){return this.clone()._add(a)},_add:function(a){this.x+=a.x;this.y+=a.y;return this},subtract:function(a){return this.clone()._subtract(a)},_subtract:function(a){this.x-=a.x;this.y-=a.y;return this},divideBy:function(a,b){return new L.Point(this.x/a,this.y/a,b)},multiplyBy:function(a){return new L.Point(this.x*a,this.y*a)},distanceTo:function(a){var b=a.x-this.x,a=a.y-this.y;return Math.sqrt(b*b+a*a)},round:function(){return this.clone()._round()},_round:function(){this.x=
Math.round(this.x);this.y=Math.round(this.y);return this},clone:function(){return new L.Point(this.x,this.y)},toString:function(){return"Point("+L.Util.formatNum(this.x)+", "+L.Util.formatNum(this.y)+")"}};L.Bounds=L.Class.extend({initialize:function(a,b){if(a)for(var c=a instanceof Array?a:[a,b],d=0,e=c.length;d<e;d++)this.extend(c[d])},extend:function(a){!this.min&&!this.max?(this.min=new L.Point(a.x,a.y),this.max=new L.Point(a.x,a.y)):(this.min.x=Math.min(a.x,this.min.x),this.max.x=Math.max(a.x,this.max.x),this.min.y=Math.min(a.y,this.min.y),this.max.y=Math.max(a.y,this.max.y))},getCenter:function(a){return new L.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,a)},contains:function(a){var b;
if(a instanceof L.Bounds)b=a.min,a=a.max;return b.x>=this.min.x&&a.x<=this.max.x&&b.y>=this.min.y&&a.y<=this.max.y}});L.Transformation=L.Class.extend({initialize:function(a,b,c,d){this._a=a;this._b=b;this._c=c;this._d=d},transform:function(a,b){return this._transform(a.clone(),b)},_transform:function(a,b){b=b||1;a.x=b*(this._a*a.x+this._b);a.y=b*(this._c*a.y+this._d);return a},untransform:function(a,b){b=b||1;return new L.Point((a.x/b-this._b)/this._a,(a.y/b-this._d)/this._c)}});L.LineUtil={simplify:function(a,b){if(!b)return a.slice();a=this.reducePoints(a,b);return a=this.simplifyDP(a,b)},pointToSegmentDistance:function(a,b,c){return Math.sqrt(this._sqPointToSegmentDist(a,b,c))},simplifyDP:function(a,b){for(var c=0,d=0,e=b*b,f=1,g=a.length,h;f<g-1;f++)h=this._sqPointToSegmentDist(a[f],a[0],a[g-1]),h>c&&(d=f,c=h);return c>=e?(c=a.slice(0,d),d=a.slice(d),g=this.simplifyDP(c,b).slice(0,g-2),d=this.simplifyDP(d,b),g.concat(d)):[a[0],a[g-1]]},reducePoints:function(a,b){for(var c=
[a[0]],d=b*b,e=1,f=0,g=a.length;e<g;e++)this._sqDist(a[e],a[f])<d||(c.push(a[e]),f=e);f<g-1&&c.push(a[g-1]);return c},clipSegment:function(a,b,c,d){var d=d?this._lastCode:this._getBitCode(a,c),e=this._getBitCode(b,c);for(this._lastCode=e;;)if(d|e)if(d&e)return!1;else{var f=d||e,g=this._getEdgeIntersection(a,b,f,c),h=this._getBitCode(g,c);f==d?(a=g,d=h):(b=g,e=h)}else return[a,b]},_getEdgeIntersection:function(a,b,c,d){var e=b.x-a.x,b=b.y-a.y,f=d.min,d=d.max;if(c&8)return new L.Point(a.x+e*(d.y-a.y)/
b,d.y);else if(c&4)return new L.Point(a.x+e*(f.y-a.y)/b,f.y);else if(c&2)return new L.Point(d.x,a.y+b*(d.x-a.x)/e);else if(c&1)return new L.Point(f.x,a.y+b*(f.x-a.x)/e)},_getBitCode:function(a,b){var c=0;a.x<b.min.x?c|=1:a.x>b.max.x&&(c|=2);a.y<b.min.y?c|=4:a.y>b.max.y&&(c|=8);return c},_sqDist:function(a,b){var c=b.x-a.x,d=b.y-a.y;return c*c+d*d},_sqPointToSegmentDist:function(a,b,c){var d=c.x-b.x,e=c.y-b.y;if(!d&&!e)return this._sqDist(a,b);var f=((a.x-b.x)*d+(a.y-b.y)*e)/this._sqDist(b,c);if(f<
0)return this._sqDist(a,b);if(f>1)return this._sqDist(a,c);b=new L.Point(b.x+d*f,b.y+e*f);return this._sqDist(a,b)}};L.PolyUtil={};L.PolyUtil.clipPolygon=function(a,b){var c,d=[1,4,2,8],e,f,g,h,j,k,l=L.LineUtil;e=0;for(j=a.length;e<j;e++)a[e]._code=l._getBitCode(a[e],b);for(g=0;g<4;g++){k=d[g];c=[];e=0;j=a.length;for(f=j-1;e<j;f=e++)if(h=a[e],f=a[f],h._code&k){if(!(f._code&k))f=l._getEdgeIntersection(f,h,k,b),f._code=l._getBitCode(f,b),c.push(f)}else{if(f._code&k)f=l._getEdgeIntersection(f,h,k,b),f._code=l._getBitCode(f,b),c.push(f);c.push(h)}a=c}return a};L.DomEvent={addListener:function(a,b,c,d){function e(b){return c.call(d||a,b||L.DomEvent._getEvent())}var f=L.Util.stamp(c);if(L.Browser.touch&&b=="dblclick"&&this.addDoubleTapListener)this.addDoubleTapListener(a,e,f);else if("addEventListener"in a)if(b=="mousewheel")a.addEventListener("DOMMouseScroll",e,!1),a.addEventListener(b,e,!1);else if(b=="mouseenter"||b=="mouseleave"){var g=e,e=function(b){if(L.DomEvent._checkMouse(a,b))return g(b)};a.addEventListener(b=="mouseenter"?"mouseover":"mouseout",
e,!1)}else a.addEventListener(b,e,!1);else"attachEvent"in a&&a.attachEvent("on"+b,e);a["_leaflet_"+b+f]=e},removeListener:function(a,b,c){var c=L.Util.stamp(c),d="_leaflet_"+b+c;handler=a[d];L.Browser.mobileWebkit&&b=="dblclick"&&this.removeDoubleTapListener?this.removeDoubleTapListener(a,c):"removeEventListener"in a?b=="mousewheel"?(a.removeEventListener("DOMMouseScroll",handler,!1),a.removeEventListener(b,handler,!1)):b=="mouseenter"||b=="mouseleave"?a.removeEventListener(b=="mouseenter"?"mouseover":
"mouseout",handler,!1):a.removeEventListener(b,handler,!1):"detachEvent"in a&&a.detachEvent("on"+b,handler);a[d]=null},_checkMouse:function(a,b){var c=b.relatedTarget;if(!c)return!0;try{for(;c&&c!=a;)c=c.parentNode}catch(d){return!1}return c!=a},_getEvent:function(){var a=window.event;if(!a)for(var b=arguments.callee.caller;b;){if((a=b.arguments[0])&&Event==a.constructor)break;b=b.caller}return a},stopPropagation:function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},disableClickPropagation:function(a){L.DomEvent.addListener(a,
"mousedown",L.DomEvent.stopPropagation);L.DomEvent.addListener(a,"click",L.DomEvent.stopPropagation);L.DomEvent.addListener(a,"dblclick",L.DomEvent.stopPropagation)},preventDefault:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},stop:function(a){L.DomEvent.preventDefault(a);L.DomEvent.stopPropagation(a)},getMousePosition:function(a,b){var c=new L.Point(a.pageX?a.pageX:a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,a.pageY?a.pageY:a.clientY+document.body.scrollTop+
document.documentElement.scrollTop);return b?c.subtract(L.DomUtil.getCumulativeOffset(b)):c},getWheelDelta:function(a){var b=0;a.wheelDelta&&(b=a.wheelDelta/120);a.detail&&(b=-a.detail/3);return b}};L.Util.extend(L.DomEvent,{addDoubleTapListener:function(a,b,c){function d(a){if(a.touches.length==1){var b=Date.now(),c=b-(f||b);j=a.touches[0];g=c>0&&c<=h;f=b}}function e(){if(g)j.type="dblclick",b(j),f=null}var f,g=!1,h=250,j;a["_leaflet_touchstart"+c]=d;a["_leaflet_touchend"+c]=e;a.addEventListener("touchstart",d,!1);a.addEventListener("touchend",e,!1)},removeDoubleTapListener:function(a,b){a.removeEventListener(a,a["_leaflet_touchstart"+b],!1);a.removeEventListener(a,a["_leaflet_touchend"+b],
!1)}});L.DomUtil={get:function(a){return typeof a=="string"?document.getElementById(a):a},getStyle:function(a,b){var c=a.style[b];!c&&a.currentStyle&&(c=a.currentStyle[b]);if(!c||c=="auto")c=(c=document.defaultView.getComputedStyle(a,null))?c[b]:null;return c=="auto"?null:c},getCumulativeOffset:function(a){var b=0,c=0;do b+=a.offsetTop||0,c+=a.offsetLeft||0,a=a.offsetParent;while(a);return new L.Point(c,b)},create:function(a,b,c){a=document.createElement(a);a.className=b;c&&c.appendChild(a);return a},disableTextSelection:function(){document.selection&&
document.selection.empty&&document.selection.empty();if(!this._onselectstart)this._onselectstart=document.onselectstart,document.onselectstart=L.Util.falseFn},enableTextSelection:function(){document.onselectstart=this._onselectstart;this._onselectstart=null},CLASS_RE:/(\\s|^)'+cls+'(\\s|$)/,hasClass:function(a,b){return a.className.length>0&&RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},addClass:function(a,b){L.DomUtil.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},setOpacity:function(a,
b){L.Browser.ie?a.style.filter="alpha(opacity="+Math.round(b*100)+")":a.style.opacity=b},testProp:function(a){for(var b=document.documentElement.style,c=0;c<a.length;c++)if(a[c]in b)return a[c];return!1},getTranslateString:function(a){return L.DomUtil.TRANSLATE_OPEN+a.x+"px,"+a.y+"px"+L.DomUtil.TRANSLATE_CLOSE},getScaleString:function(a,b){return L.DomUtil.getTranslateString(b)+" scale("+a+") "+L.DomUtil.getTranslateString(b.multiplyBy(-1))},setPosition:function(a,b){a._leaflet_pos=b;L.Browser.webkit?
a.style[L.DomUtil.TRANSFORM]=L.DomUtil.getTranslateString(b):(a.style.left=b.x+"px",a.style.top=b.y+"px")},getPosition:function(a){return a._leaflet_pos}};
L.Util.extend(L.DomUtil,{TRANSITION:L.DomUtil.testProp(["transition","webkitTransition","OTransition","MozTransition","msTransition"]),TRANSFORM:L.DomUtil.testProp(["transformProperty","WebkitTransform","OTransform","MozTransform","msTransform"]),TRANSLATE_OPEN:"translate"+(L.Browser.webkit3d?"3d(":"("),TRANSLATE_CLOSE:L.Browser.webkit3d?",0)":")"});L.Draggable=L.Class.extend({includes:L.Mixin.Events,statics:{START:L.Browser.touch?"touchstart":"mousedown",END:L.Browser.touch?"touchend":"mouseup",MOVE:L.Browser.touch?"touchmove":"mousemove",TAP_TOLERANCE:15},initialize:function(a,b){this._element=a;this._dragStartTarget=b||a},enable:function(){if(!this._enabled)L.DomEvent.addListener(this._dragStartTarget,L.Draggable.START,this._onDown,this),this._enabled=!0},disable:function(){if(this._enabled)L.DomEvent.removeListener(this._dragStartTarget,
L.Draggable.START,this._onDown),this._enabled=!1},_onDown:function(a){if(!(a.shiftKey||a.which!=1&&a.button!=1&&!a.touches)&&!(a.touches&&a.touches.length>1)){var b=a.touches&&a.touches.length==1?a.touches[0]:a;L.DomEvent.preventDefault(a);L.Browser.mobileWebkit&&(b.target.className+=" leaflet-active");this._moved=!1;L.DomUtil.disableTextSelection();this._setMovingCursor();this._startPos=this._newPos=L.DomUtil.getPosition(this._element);this._startPoint=new L.Point(b.clientX,b.clientY);L.DomEvent.addListener(document,
L.Draggable.MOVE,this._onMove,this);L.DomEvent.addListener(document,L.Draggable.END,this._onUp,this)}},_onMove:function(a){if(!(a.touches&&a.touches.length>1)){L.DomEvent.preventDefault(a);a=a.touches&&a.touches.length==1?a.touches[0]:a;if(!this._moved)this.fire("dragstart"),this._moved=!0;this._newPos=this._startPos.add(new L.Point(a.clientX,a.clientY)).subtract(this._startPoint);L.Util.requestAnimFrame(this._updatePosition,this,!0);this.fire("drag")}},_updatePosition:function(){L.DomUtil.setPosition(this._element,
this._newPos)},_onUp:function(a){if(a.changedTouches){var a=a.changedTouches[0],b=a.target,c=this._newPos&&this._newPos.distanceTo(this._startPos)||0;b.className=b.className.replace(" leaflet-active","");c<L.Draggable.TAP_TOLERANCE&&this._simulateEvent("click",a)}L.DomUtil.enableTextSelection();this._restoreCursor();L.DomEvent.removeListener(document,L.Draggable.MOVE,this._onMove);L.DomEvent.removeListener(document,L.Draggable.END,this._onUp);this._moved&&this.fire("dragend")},_removeActiveClass:function(){},
_setMovingCursor:function(){this._bodyCursor=document.body.style.cursor;document.body.style.cursor="move"},_restoreCursor:function(){document.body.style.cursor=this._bodyCursor},_simulateEvent:function(a,b){var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!0,!0,window,1,b.screenX,b.screenY,b.clientX,b.clientY,!1,!1,!1,!1,0,null);b.target.dispatchEvent(c)}});L.Transition=L.Class.extend({includes:L.Mixin.Events,statics:{CUSTOM_PROPS_SETTERS:{position:L.DomUtil.setPosition},implemented:function(){return L.Transition.NATIVE||L.Transition.TIMER}},options:{easing:"ease",duration:0.5},_setProperty:function(a,b){var c=L.Transition.CUSTOM_PROPS_SETTERS;if(a in c)c[a](this._el,b);else this._el.style[a]=b}});L.Transition=L.Transition.extend({statics:function(){var a=L.DomUtil.TRANSITION;return{NATIVE:!!a,TRANSITION:a,PROPERTY:a+"Property",DURATION:a+"Duration",EASING:a+"TimingFunction",END:a=="webkitTransition"||a=="OTransition"?a+"End":"transitionend",CUSTOM_PROPS_PROPERTIES:{position:L.Browser.webkit?L.DomUtil.TRANSFORM:"top, left"}}}(),options:{fakeStepInterval:100},initialize:function(a,b){this._el=a;L.Util.setOptions(this,b);L.DomEvent.addListener(a,L.Transition.END,this._onTransitionEnd,this);this._onFakeStep=
L.Util.bind(this._onFakeStep,this)},run:function(a){var b,c=[],d=L.Transition.CUSTOM_PROPS_PROPERTIES;for(b in a)a.hasOwnProperty(b)&&(b=d[b]?d[b]:b,b=b.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()}),c.push(b));this._el.style[L.Transition.DURATION]=this.options.duration+"s";this._el.style[L.Transition.EASING]=this.options.easing;this._el.style[L.Transition.PROPERTY]=c.join(", ");for(b in a)a.hasOwnProperty(b)&&this._setProperty(b,a[b]);this._inProgress=!0;this.fire("start");L.Transition.NATIVE?
this._timer=setInterval(this._onFakeStep,this.options.fakeStepInterval):this._onTransitionEnd()},_onFakeStep:function(){this.fire("step")},_onTransitionEnd:function(){if(this._inProgress)this._inProgress=!1,clearInterval(this._timer),this._el.style[L.Transition.PROPERTY]="none",this.fire("step"),this.fire("end")}});L.Transition=L.Transition.NATIVE?L.Transition:L.Transition.extend({statics:{getTime:Date.now||function(){return+new Date},TIMER:!0,EASINGS:{ease:[0.25,0.1,0.25,1],linear:[0,0,1,1],"ease-in":[0.42,0,1,1],"ease-out":[0,0,0.58,1],"ease-in-out":[0.42,0,0.58,1]},CUSTOM_PROPS_GETTERS:{position:L.DomUtil.getPosition},UNIT_RE:/^[\d\.]+(\D*)$/},options:{fps:50},initialize:function(a,b){this._el=a;L.Util.extend(this.options,b);var c=L.Transition.EASINGS[this.options.easing]||L.Transition.EASINGS.ease;this._p1=
new L.Point(0,0);this._p2=new L.Point(c[0],c[1]);this._p3=new L.Point(c[2],c[3]);this._p4=new L.Point(1,1);this._step=L.Util.bind(this._step,this);this._interval=Math.round(1E3/this.options.fps)},run:function(a){this._props={};var b=L.Transition.CUSTOM_PROPS_GETTERS,c=L.Transition.UNIT_RE;this.fire("start");for(var d in a)if(a.hasOwnProperty(d)){var e={};if(d in b)e.from=b[d](this._el);else{var f=this._el.style[d].match(c);e.from=parseFloat(f[0]);e.unit=f[1]}e.to=a[d];this._props[d]=e}clearInterval(this._timer);
this._timer=setInterval(this._step,this._interval);this._startTime=L.Transition.getTime()},_step:function(){var a=L.Transition.getTime()-this._startTime,b=this.options.duration*1E3;a<b?this._runFrame(this._cubicBezier(a/b)):(this._runFrame(1),this._complete())},_runFrame:function(a){var b=L.Transition.CUSTOM_PROPS_SETTERS,c,d;for(c in this._props)this._props.hasOwnProperty(c)&&(d=this._props[c],c in b?(d=d.to.subtract(d.from).multiplyBy(a).add(d.from),b[c](this._el,d)):this._el.style[c]=(d.to-d.from)*
a+d.from+d.unit);this.fire("step")},_complete:function(){clearInterval(this._timer);this.fire("end")},_cubicBezier:function(a){var b=3*Math.pow(1-a,2)*a,c=3*(1-a)*Math.pow(a,2),d=Math.pow(a,3),a=this._p1.multiplyBy(Math.pow(1-a,3)),b=this._p2.multiplyBy(b),c=this._p3.multiplyBy(c),d=this._p4.multiplyBy(d);return a.add(b).add(c).add(d).y}});L.LatLng=function(a,b,c){c!==!0&&(a=Math.max(Math.min(a,90),-90),b=(b+180)%360+(b<-180?180:-180));this.lat=a;this.lng=b};L.Util.extend(L.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1.0E-9});L.LatLng.prototype={equals:function(a){if(!(a instanceof L.LatLng))return!1;return Math.max(Math.abs(this.lat-a.lat),Math.abs(this.lng-a.lng))<=L.LatLng.MAX_MARGIN},toString:function(){return"LatLng("+L.Util.formatNum(this.lat)+", "+L.Util.formatNum(this.lng)+")"}};L.LatLngBounds=L.Class.extend({initialize:function(a,b){if(a)for(var c=a instanceof Array?a:[a,b],d=0,e=c.length;d<e;d++)this.extend(c[d])},extend:function(a){!this._southWest&&!this._northEast?(this._southWest=new L.LatLng(a.lat,a.lng),this._northEast=new L.LatLng(a.lat,a.lng)):(this._southWest.lat=Math.min(a.lat,this._southWest.lat),this._southWest.lng=Math.min(a.lng,this._southWest.lng),this._northEast.lat=Math.max(a.lat,this._northEast.lat),this._northEast.lng=Math.max(a.lng,this._northEast.lng))},
getCenter:function(){return new L.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new L.LatLng(this._northEast.lat,this._southWest.lng)},getSouthEast:function(){return new L.LatLng(this._southWest.lat,this._northEast.lng)},contains:function(a){var b=this._southWest,c=this._northEast,d;a instanceof L.LatLngBounds?(d=a.getSouthWest(),
a=a.getNorthEast()):d=a;return d.lat>=b.lat&&a.lat<=c.lat&&d.lng>=b.lng&&a.lng<=c.lng}});L.Projection={};L.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(a){var b=L.LatLng.DEG_TO_RAD,c=this.MAX_LATITUDE,d=a.lng*b,a=Math.max(Math.min(c,a.lat),-c)*b,a=Math.log(Math.tan(Math.PI/4+a/2));return new L.Point(d,a)},unproject:function(a,b){var c=L.LatLng.RAD_TO_DEG;return new L.LatLng((2*Math.atan(Math.exp(a.y))-Math.PI/2)*c,a.x*c,b)}};L.Projection.LonLat={project:function(a){return new L.Point(a.lng,a.lat)},unproject:function(a,b){return new L.LatLng(a.y,a.x,b)}};L.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.3142,R_MAJOR:6378137,project:function(a){var b=L.LatLng.DEG_TO_RAD,c=this.MAX_LATITUDE,d=this.R_MAJOR,e=a.lng*b*d,a=Math.max(Math.min(c,a.lat),-c)*b,b=this.R_MINOR/d,b=Math.sqrt(1-b*b),c=b*Math.sin(a),c=Math.pow((1-c)/(1+c),b*0.5),a=-d*Math.log(Math.tan(0.5*(Math.PI*0.5-a))/c);return new L.Point(e,a)},unproject:function(a,b){for(var c=L.LatLng.RAD_TO_DEG,d=this.R_MAJOR,e=a.x*c/d,f=this.R_MINOR/d,f=Math.sqrt(1-f*f),d=Math.exp(-a.y/d),
g=Math.PI/2-2*Math.atan(d),h=15,j=0.1;Math.abs(j)>1.0E-7&&--h>0;)j=f*Math.sin(g),j=Math.PI/2-2*Math.atan(d*Math.pow((1-j)/(1+j),0.5*f))-g,g+=j;return new L.LatLng(g*c,e,b)}};L.CRS={latLngToPoint:function(a,b){return this.transformation._transform(this.projection.project(a),b)},pointToLatLng:function(a,b,c){return this.projection.unproject(this.transformation.untransform(a,b),c)},project:function(a){return this.projection.project(a)}};L.CRS.EPSG3857=L.Util.extend({},L.CRS,{code:"EPSG:3857",projection:L.Projection.SphericalMercator,transformation:new L.Transformation(0.5/Math.PI,0.5,-0.5/Math.PI,0.5),project:function(a){return this.projection.project(a).multiplyBy(6378137)}});L.CRS.EPSG900913=L.Util.extend({},L.CRS.EPSG3857,{code:"EPSG:900913"});L.CRS.EPSG4326=L.Util.extend({},L.CRS,{code:"EPSG:4326",projection:L.Projection.LonLat,transformation:new L.Transformation(1/360,0.5,-1/360,0.5)});L.CRS.EPSG3395=L.Util.extend({},L.CRS,{code:"EPSG:3395",projection:L.Projection.Mercator,transformation:function(){var a=L.Projection.Mercator;return new L.Transformation(0.5/(Math.PI*a.R_MAJOR),0.5,-0.5/(Math.PI*a.R_MINOR),0.5)}()});L.LayerGroup=L.Class.extend({initialize:function(a){this._layers={};if(a)for(var b=0,c=a.length;b<c;b++)this.addLayer(a[b])},addLayer:function(a){this._layers[L.Util.stamp(a)]=a;this._map&&this._map.addLayer(a);return this},removeLayer:function(a){delete this._layers[L.Util.stamp(a)];this._map&&this._map.removeLayer(a);return this},clearLayers:function(){this._iterateLayers(this.removeLayer,this);return this},onAdd:function(a){this._map=a;this._iterateLayers(a.addLayer,a)},onRemove:function(a){this._iterateLayers(a.removeLayer,
a);delete this._map},_iterateLayers:function(a,b){for(var c in this._layers)this._layers.hasOwnProperty(c)&&a.call(b,this._layers[c])}});L.FeatureGroup=L.LayerGroup.extend({includes:L.Mixin.Events,addLayer:function(a){this._initEvents(a);L.LayerGroup.prototype.addLayer.call(this,a);this._popupContent&&a.bindPopup&&a.bindPopup(this._popupContent)},bindPopup:function(a){this._popupContent=a;for(var b in this._layers)this._layers.hasOwnProperty(b)&&this._layers[b].bindPopup&&this._layers[b].bindPopup(a)},_events:["click","dblclick","mouseover","mouseout"],_initEvents:function(a){for(var b=0,c=this._events.length;b<c;b++)a.on(this._events[b],
this._propagateEvent,this)},_propagateEvent:function(a){a.layer=a.target;a.target=this;this.fire(a.type,a)}});L.TileLayer=L.Class.extend({includes:L.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",opacity:1,scheme:"xyz",noWrap:!1,unloadInvisibleTiles:L.Browser.mobileWebkit,updateWhenIdle:L.Browser.mobileWebkit},initialize:function(a,b){L.Util.setOptions(this,b);this._url=a;if(typeof this.options.subdomains=="string")this.options.subdomains=this.options.subdomains.split("")},onAdd:function(a){this._map=a;this._initContainer();this._createTileProto();
a.on("viewreset",this._reset,this);if(this.options.updateWhenIdle)a.on("moveend",this._update,this);else this._limitedUpdate=L.Util.limitExecByInterval(this._update,100,this),a.on("move",this._limitedUpdate,this);this._reset();this._update()},onRemove:function(){this._map.getPanes().tilePane.removeChild(this._container);this._container=null;this._map.off("viewreset",this._reset,this);this.options.updateWhenIdle?this._map.off("moveend",this._update,this):this._map.off("move",this._limitedUpdate,this)},
getAttribution:function(){return this.options.attribution},setOpacity:function(a){this.options.opacity=a;this._setOpacity(a);if(L.Browser.webkit)for(i in this._tiles)this._tiles[i].style.webkitTransform+=" translate(0,0)"},_setOpacity:function(a){a<1&&L.DomUtil.setOpacity(this._container,a)},_initContainer:function(){var a=this._map.getPanes().tilePane;if(!this._container||a.empty)this._container=L.DomUtil.create("div","leaflet-layer",a),this._setOpacity(this.options.opacity)},_reset:function(){this._tiles=
{};this._initContainer();this._container.innerHTML=""},_update:function(){var a=this._map.getPixelBounds(),b=this.options.tileSize,c=new L.Point(Math.floor(a.min.x/b),Math.floor(a.min.y/b)),a=new L.Point(Math.floor(a.max.x/b),Math.floor(a.max.y/b)),c=new L.Bounds(c,a);this._addTilesFromCenterOut(c);this.options.unloadInvisibleTiles&&this._removeOtherTiles(c)},_addTilesFromCenterOut:function(a){for(var b=[],c=a.getCenter(),d=a.min.y;d<=a.max.y;d++)for(var e=a.min.x;e<=a.max.x;e++)e+":"+d in this._tiles||
b.push(new L.Point(e,d));b.sort(function(a,b){return a.distanceTo(c)-b.distanceTo(c)});this._tilesToLoad=b.length;a=0;for(d=this._tilesToLoad;a<d;a++)this._addTile(b[a])},_removeOtherTiles:function(a){var b,c,d;for(d in this._tiles)if(this._tiles.hasOwnProperty(d)&&(b=d.split(":"),c=parseInt(b[0],10),b=parseInt(b[1],10),c<a.min.x||c>a.max.x||b<a.min.y||b>a.max.y))this._tiles[d].src="",this._tiles[d].parentNode==this._container&&this._container.removeChild(this._tiles[d]),delete this._tiles[d]},_addTile:function(a){var b=
this._getTilePos(a),c=this._map.getZoom(),d=a.x+":"+a.y,e=1<<c;if(!this.options.noWrap)a.x=(a.x%e+e)%e;if(!(a.y<0||a.y>=e)){var f=this._createTile();L.DomUtil.setPosition(f,b);this._tiles[d]=f;if(this.options.scheme=="tms")a.y=e-a.y-1;this._loadTile(f,a,c);this._container.appendChild(f)}},_getTilePos:function(a){var b=this._map.getPixelOrigin();return a.multiplyBy(this.options.tileSize).subtract(b)},getTileUrl:function(a,b){return this._url.replace("{s}",this.options.subdomains[(a.x+a.y)%this.options.subdomains.length]).replace("{z}",
b).replace("{x}",a.x).replace("{y}",a.y)},_createTileProto:function(){this._tileImg=L.DomUtil.create("img","leaflet-tile");this._tileImg.galleryimg="no";var a=this.options.tileSize;this._tileImg.style.width=a+"px";this._tileImg.style.height=a+"px"},_createTile:function(){var a=this._tileImg.cloneNode(!1);a.onselectstart=a.onmousemove=L.Util.falseFn;return a},_loadTile:function(a,b,c){a._layer=this;a.onload=this._tileOnLoad;a.onerror=this._tileOnError;a.src=this.getTileUrl(b,c)},_tileOnLoad:function(){var a=
this._layer;this.className+=" leaflet-tile-loaded";a.fire("tileload",{tile:this,url:this.src});a._tilesToLoad--;a._tilesToLoad||a.fire("load")},_tileOnError:function(){var a=this._layer;a.fire("tileerror",{tile:this,url:this.src});if(a=a.options.errorTileUrl)this.src=a}});L.TileLayer.WMS=L.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(a,b){this._url=a;this.wmsParams=L.Util.extend({},this.defaultWmsParams);this.wmsParams.width=this.wmsParams.height=this.options.tileSize;for(var c in b)this.options.hasOwnProperty(c)||(this.wmsParams[c]=b[c]);L.Util.setOptions(this,b)},onAdd:function(a){this.wmsParams[parseFloat(this.wmsParams.version)>=1.3?"crs":"srs"]=a.options.crs.code;
L.TileLayer.prototype.onAdd.call(this,a)},getTileUrl:function(a){var b=this.options.tileSize,a=a.multiplyBy(b),b=a.add(new L.Point(b,b)),a=this._map.unproject(a,this._zoom,!0),b=this._map.unproject(b,this._zoom,!0),a=this._map.options.crs.project(a),b=this._map.options.crs.project(b),b=[a.x,b.y,b.x,a.y].join(",");return this._url+L.Util.getParamString(this.wmsParams)+"&bbox="+b}});L.TileLayer.Canvas=L.TileLayer.extend({options:{async:!1},initialize:function(a){L.Util.setOptions(this,a)},_createTileProto:function(){this._canvasProto=L.DomUtil.create("canvas","leaflet-tile");var a=this.options.tileSize;this._canvasProto.width=a;this._canvasProto.height=a},_createTile:function(){var a=this._canvasProto.cloneNode(!1);a.onselectstart=a.onmousemove=L.Util.falseFn;return a},_loadTile:function(a,b,c){a._layer=this;this.drawTile(a,b,c);this.options.async||this.tileDrawn(a)},drawTile:function(){},
tileDrawn:function(a){this._tileOnLoad.call(a)}});L.ImageOverlay=L.Class.extend({includes:L.Mixin.Events,initialize:function(a,b){this._url=a;this._bounds=b},onAdd:function(a){this._map=a;this._image||this._initImage();a.getPanes().overlayPane.appendChild(this._image);a.on("viewreset",this._reset,this);this._reset()},onRemove:function(a){a.getPanes().overlayPane.removeChild(this._image);a.off("viewreset",this._reset,this)},_initImage:function(){this._image=L.DomUtil.create("img","leaflet-image-layer");this._image.style.visibility="hidden";L.Util.extend(this._image,
{galleryimg:"no",onselectstart:L.Util.falseFn,onmousemove:L.Util.falseFn,onload:this._onImageLoad,src:this._url})},_reset:function(){var a=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),b=this._map.latLngToLayerPoint(this._bounds.getSouthEast()).subtract(a);L.DomUtil.setPosition(this._image,a);this._image.style.width=b.x+"px";this._image.style.height=b.y+"px"},_onImageLoad:function(){this.style.visibility=""}});L.Popup=L.Class.extend({includes:L.Mixin.Events,options:{maxWidth:300,autoPan:!0,closeButton:!0,offset:new L.Point(0,2),autoPanPadding:new L.Point(5,5)},initialize:function(a){L.Util.setOptions(this,a)},onAdd:function(a){this._map=a;this._container||this._initLayout();this._updateContent();this._container.style.opacity="0";this._map._panes.popupPane.appendChild(this._container);this._map.on("viewreset",this._updatePosition,this);if(this._map.options.closePopupOnClick)this._map.on("preclick",this._close,
this);this._update();this._container.style.opacity="1";this._opened=!0},onRemove:function(a){a._panes.popupPane.removeChild(this._container);a.off("viewreset",this._updatePosition,this);a.off("click",this._close,this);this._container.style.opacity="0";this._opened=!1},setLatLng:function(a){this._latlng=a;this._opened&&this._update();return this},setContent:function(a){this._content=a;this._opened&&this._update();return this},_close:function(){this._opened&&this._map.removeLayer(this)},_initLayout:function(){this._container=
L.DomUtil.create("div","leaflet-popup");this._closeButton=L.DomUtil.create("a","leaflet-popup-close-button",this._container);this._closeButton.href="#close";this._closeButton.onclick=L.Util.bind(this._onCloseButtonClick,this);this._wrapper=L.DomUtil.create("div","leaflet-popup-content-wrapper",this._container);L.DomEvent.disableClickPropagation(this._wrapper);this._contentNode=L.DomUtil.create("div","leaflet-popup-content",this._wrapper);this._tipContainer=L.DomUtil.create("div","leaflet-popup-tip-container",
this._container);this._tip=L.DomUtil.create("div","leaflet-popup-tip",this._tipContainer)},_update:function(){this._container.style.visibility="hidden";this._updateContent();this._updateLayout();this._updatePosition();this._container.style.visibility="";this._adjustPan()},_updateContent:function(){if(this._content)typeof this._content=="string"?this._contentNode.innerHTML=this._content:(this._contentNode.innerHTML="",this._contentNode.appendChild(this._content))},_updateLayout:function(){this._container.style.width=
"";this._container.style.whiteSpace="nowrap";var a=this._container.offsetWidth;this._container.style.width=(a>this.options.maxWidth?this.options.maxWidth:a)+"px";this._container.style.whiteSpace="";this._containerWidth=this._container.offsetWidth},_updatePosition:function(){var a=this._map.latLngToLayerPoint(this._latlng);this._containerBottom=-a.y-this.options.offset.y;this._containerLeft=a.x-Math.round(this._containerWidth/2)+this.options.offset.x;this._container.style.bottom=this._containerBottom+
"px";this._container.style.left=this._containerLeft+"px"},_adjustPan:function(){if(this.options.autoPan){var a=this._container.offsetHeight,b=this._map.layerPointToContainerPoint(new L.Point(this._containerLeft,-a-this._containerBottom)),c=new L.Point(0,0),d=this.options.autoPanPadding,e=this._map.getSize();if(b.x<0)c.x=b.x-d.x;if(b.x+this._containerWidth>e.x)c.x=b.x+this._containerWidth-e.x+d.x;if(b.y<0)c.y=b.y-d.y;if(b.y+a>e.y)c.y=b.y+a-e.y+d.y;(c.x||c.y)&&this._map.panBy(c)}},_onCloseButtonClick:function(a){this._close();
L.DomEvent.stop(a)}});L.Icon=L.Class.extend({iconUrl:L.ROOT_URL+"images/marker.png",shadowUrl:L.ROOT_URL+"images/marker-shadow.png",iconSize:new L.Point(25,41),shadowSize:new L.Point(41,41),iconAnchor:new L.Point(13,41),popupAnchor:new L.Point(0,-33),initialize:function(a){if(a)this.iconUrl=a},createIcon:function(){return this._createIcon("icon")},createShadow:function(){return this._createIcon("shadow")},_createIcon:function(a){var b=this[a+"Size"],c=this[a+"Url"],d=this._createImg(c);if(!c)return null;d.className="leaflet-marker-"+
a;d.style.marginLeft=-this.iconAnchor.x+"px";d.style.marginTop=-this.iconAnchor.y+"px";if(b)d.style.width=b.x+"px",d.style.height=b.y+"px";return d},_createImg:function(a){var b;L.Browser.ie6?(b=document.createElement("div"),b.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+a+'")'):(b=document.createElement("img"),b.src=a);return b}});L.Marker=L.Class.extend({includes:L.Mixin.Events,options:{icon:new L.Icon,title:"",clickable:!0,draggable:!1},initialize:function(a,b){L.Util.setOptions(this,b);this._latlng=a},onAdd:function(a){this._map=a;this._initIcon();a.on("viewreset",this._reset,this);this._reset()},onRemove:function(a){this._removeIcon();a.off("viewreset",this._reset,this)},getLatLng:function(){return this._latlng},setLatLng:function(a){this._latlng=a;this._reset()},setIcon:function(a){this._removeIcon();this._icon=this._shadow=
null;this.options.icon=a;this._initIcon()},_initIcon:function(){if(!this._icon){this._icon=this.options.icon.createIcon();if(this.options.title)this._icon.title=this.options.title;this._initInteraction()}if(!this._shadow)this._shadow=this.options.icon.createShadow();this._map._panes.markerPane.appendChild(this._icon);this._shadow&&this._map._panes.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this._map._panes.markerPane.removeChild(this._icon);this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow)},
_reset:function(){var a=this._map.latLngToLayerPoint(this._latlng).round();L.DomUtil.setPosition(this._icon,a);this._shadow&&L.DomUtil.setPosition(this._shadow,a);this._icon.style.zIndex=a.y},_initInteraction:function(){if(this.options.clickable){this._icon.className+=" leaflet-clickable";L.DomEvent.addListener(this._icon,"click",this._onMouseClick,this);for(var a=["dblclick","mousedown","mouseover","mouseout"],b=0;b<a.length;b++)L.DomEvent.addListener(this._icon,a[b],this._fireMouseEvent,this)}if(L.Handler.MarkerDrag)this.dragging=
new L.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable()},_onMouseClick:function(a){L.DomEvent.stopPropagation(a);(!this.dragging||!this.dragging.moved())&&this.fire(a.type)},_fireMouseEvent:function(a){this.fire(a.type);L.DomEvent.stopPropagation(a)}});L.Marker.include({openPopup:function(){this._popup.setLatLng(this._latlng);this._map.openPopup(this._popup);return this},closePopup:function(){this._popup&&this._popup._close()},bindPopup:function(a,b){b=L.Util.extend({offset:this.options.icon.popupAnchor},b);this._popup=new L.Popup(b);this._popup.setContent(a);this.on("click",this.openPopup,this);return this}});L.Path=L.Class.extend({includes:[L.Mixin.Events],statics:function(){return{SVG_NS:"http://www.w3.org/2000/svg",SVG:!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),CLIP_PADDING:0.5}}(),options:{stroke:!0,color:"#0033ff",weight:5,opacity:0.5,fill:!1,fillColor:null,fillOpacity:0.2,clickable:!0,updateOnMoveEnd:!1},initialize:function(a){L.Util.setOptions(this,a)},onAdd:function(a){this._map=a;this._initElements();this._initEvents();this.projectLatlngs();
this._updatePath();a.on("viewreset",this.projectLatlngs,this);this._updateTrigger=this.options.updateOnMoveEnd?"moveend":"viewreset";a.on(this._updateTrigger,this._updatePath,this)},onRemove:function(a){a._pathRoot.removeChild(this._container);a.off("viewreset",this._projectLatlngs,this);a.off(this._updateTrigger,this._updatePath,this)},projectLatlngs:function(){},getPathString:function(){},setStyle:function(a){L.Util.setOptions(this,a);this._path&&this._updateStyle()},_initElements:function(){this._initRoot();
this._initPath();this._initStyle()},_initRoot:function(){if(!this._map._pathRoot)this._map._pathRoot=this._createElement("svg"),this._map._panes.overlayPane.appendChild(this._map._pathRoot),this._map.on("moveend",this._updateSvgViewport,this),this._updateSvgViewport()},_updateSvgViewport:function(){this._updateViewport();var a=this._map._pathViewport,b=a.min,c=a.max,a=c.x-b.x,c=c.y-b.y,d=this._map._pathRoot,e=this._map._panes.overlayPane;L.Browser.mobileWebkit&&e.removeChild(d);L.DomUtil.setPosition(d,
b);d.setAttribute("width",a);d.setAttribute("height",c);d.setAttribute("viewBox",[b.x,b.y,a,c].join(" "));L.Browser.mobileWebkit&&e.appendChild(d)},_updateViewport:function(){var a=L.Path.CLIP_PADDING,b=this._map.getSize(),c=L.DomUtil.getPosition(this._map._mapPane).multiplyBy(-1).subtract(b.multiplyBy(a)),a=c.add(b.multiplyBy(1+a*2));this._map._pathViewport=new L.Bounds(c,a)},_initPath:function(){this._container=this._createElement("g");this._path=this._createElement("path");this._container.appendChild(this._path);
this._map._pathRoot.appendChild(this._container)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round"));this.options.fill?this._path.setAttribute("fill-rule","evenodd"):this._path.setAttribute("fill","none");this._updateStyle()},_updateStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",
this.options.weight));this.options.fill&&(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity))},_updatePath:function(){var a=this.getPathString();a||(a="M0 0");this._path.setAttribute("d",a)},_createElement:function(a){return document.createElementNS(L.Path.SVG_NS,a)},_initEvents:function(){if(this.options.clickable){L.Path.VML||this._path.setAttribute("class","leaflet-clickable");L.DomEvent.addListener(this._container,
"click",this._onMouseClick,this);for(var a=["dblclick","mousedown","mouseover","mouseout"],b=0;b<a.length;b++)L.DomEvent.addListener(this._container,a[b],this._fireMouseEvent,this)}},_onMouseClick:function(a){(!this._map.dragging||!this._map.dragging.moved())&&this._fireMouseEvent(a)},_fireMouseEvent:function(a){this.hasEventListeners(a.type)&&(this.fire(a.type,{latlng:this._map.mouseEventToLatLng(a),layerPoint:this._map.mouseEventToLayerPoint(a)}),L.DomEvent.stopPropagation(a))},_redraw:function(){this.projectLatlngs();
this._updatePath()}});L.Path.VML=function(){var a=document.createElement("div");a.innerHTML='<v:shape adj="1"/>';a=a.firstChild;a.style.behavior="url(#default#VML)";return a&&typeof a.adj=="object"}();
L.Path=L.Path.SVG||!L.Path.VML?L.Path:L.Path.extend({statics:{CLIP_PADDING:0.02},_createElement:function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<lvml:"+a+' class="lvml">')}}catch(a){return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initRoot:function(){if(!this._map._pathRoot)this._map._pathRoot=document.createElement("div"),this._map._pathRoot.className=
"leaflet-vml-container",this._map._panes.overlayPane.appendChild(this._map._pathRoot),this._map.on("moveend",this._updateViewport,this),this._updateViewport()},_initPath:function(){this._container=this._createElement("shape");this._container.className+=" leaflet-vml-shape"+(this.options.clickable?" leaflet-clickable":"");this._container.coordsize="1 1";this._path=this._createElement("path");this._container.appendChild(this._path);this._map._pathRoot.appendChild(this._container)},_initStyle:function(){this.options.stroke?
(this._stroke=this._createElement("stroke"),this._stroke.endcap="round",this._container.appendChild(this._stroke)):this._container.stroked=!1;this.options.fill?(this._container.filled=!0,this._fill=this._createElement("fill"),this._container.appendChild(this._fill)):this._container.filled=!1;this._updateStyle()},_updateStyle:function(){if(this.options.stroke)this._stroke.weight=this.options.weight+"px",this._stroke.color=this.options.color,this._stroke.opacity=this.options.opacity;if(this.options.fill)this._fill.color=
this.options.fillColor||this.options.color,this._fill.opacity=this.options.fillOpacity},_updatePath:function(){this._container.style.display="none";this._path.v=this.getPathString()+" ";this._container.style.display=""}});L.Path.include({bindPopup:function(a,b){if(!this._popup||this._popup.options!==b)this._popup=new L.Popup(b);this._popup.setContent(a);if(!this._openPopupAdded)this.on("click",this._openPopup,this),this._openPopupAdded=!0;return this},_openPopup:function(a){this._popup.setLatLng(a.latlng);this._map.openPopup(this._popup)}});L.Polyline=L.Path.extend({initialize:function(a,b){L.Path.prototype.initialize.call(this,b);this._latlngs=a},options:{smoothFactor:1,noClip:!1,updateOnMoveEnd:!0},projectLatlngs:function(){this._originalPoints=[];for(var a=0,b=this._latlngs.length;a<b;a++)this._originalPoints[a]=this._map.latLngToLayerPoint(this._latlngs[a])},getPathString:function(){for(var a=0,b=this._parts.length,c="";a<b;a++)c+=this._getPathPartStr(this._parts[a]);return c},getLatLngs:function(){return this._latlngs},setLatLngs:function(a){this._latlngs=
a;this._redraw();return this},addLatLng:function(a){this._latlngs.push(a);this._redraw();return this},spliceLatLngs:function(){var a=[].splice.apply(this._latlngs,arguments);this._redraw();return a},_getPathPartStr:function(a){for(var b=L.Path.VML,c=0,d=a.length,e="",f;c<d;c++)f=a[c],b&&f._round(),e+=(c?"L":"M")+f.x+" "+f.y;return e},_clipPoints:function(){var a=this._originalPoints,b=a.length,c,d,e;if(this.options.noClip)this._parts=[a];else{var f=this._parts=[],g=this._map._pathViewport,h=L.LineUtil;
for(d=c=0;c<b-1;c++)if(e=h.clipSegment(a[c],a[c+1],g,c))if(f[d]=f[d]||[],f[d].push(e[0]),e[1]!=a[c+1]||c==b-2)f[d].push(e[1]),d++}},_simplifyPoints:function(){for(var a=this._parts,b=L.LineUtil,c=0,d=a.length;c<d;c++)a[c]=b.simplify(a[c],this.options.smoothFactor)},_updatePath:function(){this._clipPoints();this._simplifyPoints();L.Path.prototype._updatePath.call(this)}});L.Polygon=L.Polyline.extend({options:{fill:!0},initialize:function(a,b){L.Polyline.prototype.initialize.call(this,a,b);if(a[0]instanceof Array)this._latlngs=a[0],this._holes=a.slice(1)},projectLatlngs:function(){L.Polyline.prototype.projectLatlngs.call(this);this._holePoints=[];if(this._holes)for(var a=0,b=this._holes.length;a<b;a++){this._holePoints[a]=[];for(var c=0,d=this._holes[a].length;c<d;c++)this._holePoints[a][c]=this._map.latLngToLayerPoint(this._holes[a][c])}},_clipPoints:function(){var a=
[];this._parts=[this._originalPoints].concat(this._holePoints);if(!this.options.noClip){for(var b=0,c=this._parts.length;b<c;b++){var d=L.PolyUtil.clipPolygon(this._parts[b],this._map._pathViewport);d.length&&a.push(d)}this._parts=a}},_getPathPartStr:function(a){return L.Polyline.prototype._getPathPartStr.call(this,a)+(L.Path.SVG?"z":"x")}});(function(){function a(a){return L.FeatureGroup.extend({initialize:function(c,d){this._layers={};for(var e=0,f=c.length;e<f;e++)this.addLayer(new a(c[e],d))},setStyle:function(a){for(var b in this._layers)this._layers.hasOwnProperty(b)&&this._layers[b].setStyle&&this._layers[b].setStyle(a)}})}L.MultiPolyline=a(L.Polyline);L.MultiPolygon=a(L.Polygon)})();L.Circle=L.Path.extend({initialize:function(a,b,c){L.Path.prototype.initialize.call(this,c);this._latlng=a;this._mRadius=b},options:{fill:!0},setLatLng:function(a){this._latlng=a;this._redraw();return this},setRadius:function(a){this._mRadius=a;this._redraw();return this},projectLatlngs:function(){var a=this._map.options.scale(this._map._zoom);this._point=this._map.latLngToLayerPoint(this._latlng);this._radius=this._mRadius/40075017*a},getPathString:function(){var a=this._point,b=this._radius;return L.Path.SVG?
"M"+a.x+","+(a.y-b)+"A"+b+","+b+",0,1,1,"+(a.x-0.1)+","+(a.y-b)+" z":(a._round(),b=Math.round(b),"AL "+a.x+","+a.y+" "+b+","+b+" 0,23592600")}});L.CircleMarker=L.Circle.extend({options:{radius:10,weight:2},initialize:function(a,b){L.Circle.prototype.initialize.call(this,a,null,b);this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},setRadius:function(a){this._radius=a;this._redraw();return this}});L.GeoJSON=L.LayerGroup.extend({includes:L.Mixin.Events,initialize:function(a,b){L.Util.setOptions(this,b);this._geojson=a;this._layers={};a&&this.addGeoJSON(a)},addGeoJSON:function(a){if(a.features)for(var b=0,c=a.features.length;b<c;b++)this.addGeoJSON(a.features[b]);else b=a.type=="Feature"?a.geometry:a,c=L.GeoJSON.geometryToLayer(b,this.options.pointToLayer),this.fire("featureparse",{layer:c,properties:a.properties,geometryType:b.type,bbox:a.bbox,id:a.id}),this.addLayer(c)}});
L.Util.extend(L.GeoJSON,{geometryToLayer:function(a,b){var c=a.coordinates,d,e,f,g=[];switch(a.type){case "Point":return d=this.coordsToLatLng(c),b?b(d):new L.Marker(d);case "MultiPoint":e=0;for(f=c.length;e<f;e++)d=this.coordsToLatLng(c[e]),d=b?b(d):new L.Marker(d),g.push(d);return new L.FeatureGroup(g);case "LineString":return c=this.coordsToLatLngs(c),new L.Polyline(c);case "Polygon":return c=this.coordsToLatLngs(c,1),new L.Polygon(c);case "MultiLineString":return c=this.coordsToLatLngs(c,1),new L.MultiPolyline(c);
case "MultiPolygon":return c=this.coordsToLatLngs(c,2),new L.MultiPolygon(c);case "GeometryCollection":e=0;for(f=a.geometries.length;e<f;e++)d=this.geometryToLayer(a.geometries[e]),g.push(d);return new L.FeatureGroup(g);default:throw Error("Invalid GeoJSON object.");}},coordsToLatLng:function(a,b){var c=parseFloat(a[b?0:1]),d=parseFloat(a[b?1:0]);return new L.LatLng(c,d)},coordsToLatLngs:function(a,b,c){var d,e=[],f,g=a.length;for(f=0;f<g;f++)d=b?this.coordsToLatLngs(a[f],b-1,c):this.coordsToLatLng(a[f],
c),e.push(d);return e}});L.Handler=L.Class.extend({initialize:function(a){this._map=a},enabled:function(){return!!this._enabled}});L.Handler.MapDrag=L.Handler.extend({enable:function(){if(!this._enabled){if(!this._draggable)this._draggable=new L.Draggable(this._map._mapPane,this._map._container),this._draggable.on("dragstart",this._onDragStart,this),this._draggable.on("drag",this._onDrag,this),this._draggable.on("dragend",this._onDragEnd,this);this._draggable.enable();this._enabled=!0}},disable:function(){if(this._enabled)this._draggable.disable(),this._enabled=!1},moved:function(){return this._draggable._moved},_onDragStart:function(){this._map.fire("movestart");
this._map.fire("dragstart")},_onDrag:function(){this._map.fire("move");this._map.fire("drag")},_onDragEnd:function(){this._map.fire("moveend");this._map.fire("dragend")}});L.Handler.TouchZoom=L.Handler.extend({enable:function(){if(L.Browser.mobileWebkit&&!this._enabled)L.DomEvent.addListener(this._map._container,"touchstart",this._onTouchStart,this),this._enabled=!0},disable:function(){if(this._enabled)L.DomEvent.removeListener(this._map._container,"touchstart",this._onTouchStart,this),this._enabled=!1},_onTouchStart:function(a){if(a.touches&&!(a.touches.length!=2||this._map._animatingZoom)){var b=this._map.mouseEventToLayerPoint(a.touches[0]),c=this._map.mouseEventToLayerPoint(a.touches[1]),
d=this._map.containerPointToLayerPoint(this._map.getSize().divideBy(2));this._startCenter=b.add(c).divideBy(2,!0);this._startDist=b.distanceTo(c);this._moved=!1;this._zooming=!0;this._centerOffset=d.subtract(this._startCenter);L.DomEvent.addListener(document,"touchmove",this._onTouchMove,this);L.DomEvent.addListener(document,"touchend",this._onTouchEnd,this);L.DomEvent.preventDefault(a)}},_onTouchMove:function(a){if(a.touches&&a.touches.length==2){if(!this._moved)this._map._mapPane.className+=" leaflet-zoom-anim",
this._map._prepareTileBg(),this._moved=!0;var b=this._map.mouseEventToLayerPoint(a.touches[0]),c=this._map.mouseEventToLayerPoint(a.touches[1]);this._scale=b.distanceTo(c)/this._startDist;this._delta=b.add(c).divideBy(2,!0).subtract(this._startCenter);this._map._tileBg.style.webkitTransform=[L.DomUtil.getTranslateString(this._delta),L.DomUtil.getScaleString(this._scale,this._startCenter)].join(" ");L.DomEvent.preventDefault(a)}},_onTouchEnd:function(){if(this._moved&&this._zooming){this._zooming=
!1;var a=this._map.getZoom(),b=Math.log(this._scale)/Math.LN2,b=this._map._limitZoom(a+(b>0?Math.ceil(b):Math.floor(b))),a=b-a,c=this._centerOffset.subtract(this._delta).divideBy(this._scale),d=this._map.unproject(this._map.getPixelOrigin().add(this._startCenter).add(c));L.DomEvent.removeListener(document,"touchmove",this._onTouchMove);L.DomEvent.removeListener(document,"touchend",this._onTouchEnd);this._map._runAnimation(d,b,Math.pow(2,a)/this._scale,this._startCenter.add(c))}}});L.Handler.ScrollWheelZoom=L.Handler.extend({enable:function(){if(!this._enabled)L.DomEvent.addListener(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0,this._enabled=!0},disable:function(){if(this._enabled)L.DomEvent.removeListener(this._map._container,"mousewheel",this._onWheelScroll),this._enabled=!1},_onWheelScroll:function(a){this._delta+=L.DomEvent.getWheelDelta(a);this._lastMousePos=this._map.mouseEventToContainerPoint(a);clearTimeout(this._timer);this._timer=setTimeout(L.Util.bind(this._performZoom,
this),50);L.DomEvent.preventDefault(a)},_performZoom:function(){var a=Math.round(this._delta);this._delta=0;if(a){var b=this._getCenterForScrollWheelZoom(this._lastMousePos,a),a=this._map.getZoom()+a;this._map._limitZoom(a)!=this._map._zoom&&this._map.setView(b,a)}},_getCenterForScrollWheelZoom:function(a,b){var c=this._map.getPixelBounds().getCenter(),d=this._map.getSize().divideBy(2),d=a.subtract(d).multiplyBy(1-Math.pow(2,-b));return this._map.unproject(c.add(d),this._map._zoom,!0)}});L.Handler.DoubleClickZoom=L.Handler.extend({enable:function(){if(!this._enabled)this._map.on("dblclick",this._onDoubleClick,this._map),this._enabled=!0},disable:function(){if(this._enabled)this._map.off("dblclick",this._onDoubleClick,this._map),this._enabled=!1},_onDoubleClick:function(a){this.setView(a.latlng,this._zoom+1)}});L.Handler.ShiftDragZoom=L.Handler.extend({initialize:function(a){this._map=a;this._container=a._container;this._pane=a._panes.overlayPane},enable:function(){if(!this._enabled)L.DomEvent.addListener(this._container,"mousedown",this._onMouseDown,this),this._enabled=!0},disable:function(){if(this._enabled)L.DomEvent.removeListener(this._container,"mousedown",this._onMouseDown),this._enabled=!1},_onMouseDown:function(a){if(!a.shiftKey||a.which!=1&&a.button!=1)return!1;L.DomUtil.disableTextSelection();
this._startLayerPoint=this._map.mouseEventToLayerPoint(a);this._box=L.DomUtil.create("div","leaflet-zoom-box",this._pane);L.DomUtil.setPosition(this._box,this._startLayerPoint);this._container.style.cursor="crosshair";L.DomEvent.addListener(document,"mousemove",this._onMouseMove,this);L.DomEvent.addListener(document,"mouseup",this._onMouseUp,this);L.DomEvent.preventDefault(a)},_onMouseMove:function(a){var b=this._map.mouseEventToLayerPoint(a),a=b.x-this._startLayerPoint.x,c=b.y-this._startLayerPoint.y,
b=new L.Point(Math.min(b.x,this._startLayerPoint.x),Math.min(b.y,this._startLayerPoint.y));L.DomUtil.setPosition(this._box,b);this._box.style.width=Math.abs(a)-4+"px";this._box.style.height=Math.abs(c)-4+"px"},_onMouseUp:function(a){this._pane.removeChild(this._box);this._container.style.cursor="";L.DomUtil.enableTextSelection();L.DomEvent.removeListener(document,"mousemove",this._onMouseMove);L.DomEvent.removeListener(document,"mouseup",this._onMouseUp);a=this._map.mouseEventToLayerPoint(a);this._map.fitBounds(new L.LatLngBounds(this._map.layerPointToLatLng(this._startLayerPoint),
this._map.layerPointToLatLng(a)))}});L.Handler.MarkerDrag=L.Handler.extend({initialize:function(a){this._marker=a},enable:function(){if(!this._enabled){if(!this._draggable)this._draggable=new L.Draggable(this._marker._icon,this._marker._icon),this._draggable.on("dragstart",this._onDragStart,this),this._draggable.on("drag",this._onDrag,this),this._draggable.on("dragend",this._onDragEnd,this);this._draggable.enable();this._enabled=!0}},disable:function(){if(this._enabled)this._draggable.disable(),this._enabled=!1},moved:function(){return this._draggable&&
this._draggable._moved},_onDragStart:function(){this._marker.closePopup();this._marker.fire("movestart");this._marker.fire("dragstart")},_onDrag:function(){var a=L.DomUtil.getPosition(this._marker._icon);L.DomUtil.setPosition(this._marker._shadow,a);this._marker._latlng=this._marker._map.layerPointToLatLng(a);this._marker.fire("move");this._marker.fire("drag")},_onDragEnd:function(){this._marker.fire("moveend");this._marker.fire("dragend")}});L.Control={};L.Control.Position={TOP_LEFT:"topLeft",TOP_RIGHT:"topRight",BOTTOM_LEFT:"bottomLeft",BOTTOM_RIGHT:"bottomRight"};L.Control.Zoom=L.Class.extend({onAdd:function(a){this._map=a;this._container=L.DomUtil.create("div","leaflet-control-zoom");this._zoomInButton=this._createButton("Zoom in","leaflet-control-zoom-in",this._map.zoomIn,this._map);this._zoomOutButton=this._createButton("Zoom out","leaflet-control-zoom-out",this._map.zoomOut,this._map);this._container.appendChild(this._zoomInButton);this._container.appendChild(this._zoomOutButton)},getContainer:function(){return this._container},getPosition:function(){return L.Control.Position.TOP_LEFT},
_createButton:function(a,b,c,d){var e=document.createElement("a");e.href="#";e.title=a;e.className=b;L.DomEvent.disableClickPropagation(e);L.DomEvent.addListener(e,"click",L.DomEvent.preventDefault);L.DomEvent.addListener(e,"click",c,d);return e}});L.Control.Attribution=L.Class.extend({onAdd:function(a){this._container=L.DomUtil.create("div","leaflet-control-attribution");this._map=a;this._prefix='Powered by <a href="http://leaflet.cloudmade.com">Leaflet</a>';this._attributions={};this._update()},getPosition:function(){return L.Control.Position.BOTTOM_RIGHT},getContainer:function(){return this._container},setPrefix:function(a){this._prefix=a},addAttribution:function(a){a&&(this._attributions[a]=!0,this._update())},removeAttribution:function(a){a&&
(delete this._attributions[a],this._update())},_update:function(){if(this._map){var a=[],b;for(b in this._attributions)this._attributions.hasOwnProperty(b)&&a.push(b);b=[];this._prefix&&b.push(this._prefix);a.length&&b.push(a.join(", "));this._container.innerHTML=b.join(" &mdash; ")}}});L.Map=L.Class.extend({includes:L.Mixin.Events,options:{crs:L.CRS.EPSG3857||L.CRS.EPSG4326,scale:function(a){return 256*(1<<a)},center:null,zoom:null,layers:[],dragging:!0,touchZoom:L.Browser.mobileWebkit&&!L.Browser.android,scrollWheelZoom:!L.Browser.mobileWebkit,doubleClickZoom:!0,shiftDragZoom:!0,zoomControl:!0,attributionControl:!0,fadeAnimation:L.DomUtil.TRANSITION&&!L.Browser.android,zoomAnimation:L.DomUtil.TRANSITION&&!L.Browser.android&&!L.Browser.mobileOpera,trackResize:!0,closePopupOnClick:!0},
initialize:function(a,b){L.Util.setOptions(this,b);this._container=L.DomUtil.get(a);this._initLayout();L.DomEvent&&(this._initEvents(),L.Handler&&this._initInteraction(),L.Control&&this._initControls());var c=this.options.center,d=this.options.zoom;c!==null&&d!==null&&this.setView(c,d,!0);c=this.options.layers;c=c instanceof Array?c:[c];this._tileLayersNum=0;this._initLayers(c)},setView:function(a,b){this._resetView(a,this._limitZoom(b));return this},setZoom:function(a){return this.setView(this.getCenter(),
a)},zoomIn:function(){return this.setZoom(this._zoom+1)},zoomOut:function(){return this.setZoom(this._zoom-1)},fitBounds:function(a){var b=this.getBoundsZoom(a);return this.setView(a.getCenter(),b)},fitWorld:function(){var a=new L.LatLng(-60,-170),b=new L.LatLng(85,179);return this.fitBounds(new L.LatLngBounds(a,b))},panTo:function(a){return this.setView(a,this._zoom)},panBy:function(a){this.fire("movestart");this._rawPanBy(a);this.fire("move");this.fire("moveend");return this},addLayer:function(a){var b=
L.Util.stamp(a);if(this._layers[b])return this;this._layers[b]=a;if(a.options&&!isNaN(a.options.maxZoom))this._layersMaxZoom=Math.max(this._layersMaxZoom||0,a.options.maxZoom);if(a.options&&!isNaN(a.options.minZoom))this._layersMinZoom=Math.min(this._layersMinZoom||Infinity,a.options.minZoom);this.options.zoomAnimation&&L.TileLayer&&a instanceof L.TileLayer&&(this._tileLayersNum++,a.on("load",this._onTileLayerLoad,this));this.attributionControl&&a.getAttribution&&this.attributionControl.addAttribution(a.getAttribution());
b=function(){a.onAdd(this);this.fire("layeradd",{layer:a})};if(this._loaded)b.call(this);else this.on("load",b,this);return this},removeLayer:function(a){var b=L.Util.stamp(a);this._layers[b]&&(a.onRemove(this),delete this._layers[b],this.options.zoomAnimation&&L.TileLayer&&a instanceof L.TileLayer&&(this._tileLayersNum--,a.off("load",this._onTileLayerLoad,this)),this.attributionControl&&a.getAttribution&&this.attributionControl.removeAttribution(a.getAttribution()),this.fire("layerremove",{layer:a}));
return this},invalidateSize:function(){this._sizeChanged=!0;this.fire("move");clearTimeout(this._sizeTimer);this._sizeTimer=setTimeout(L.Util.bind(function(){this.fire("moveend")},this),200);return this},getCenter:function(a){var b=this.getSize().divideBy(2);return this.unproject(this._getTopLeftPoint().add(b),this._zoom,a)},getZoom:function(){return this._zoom},getBounds:function(){var a=this.getPixelBounds(),b=this.unproject(new L.Point(a.min.x,a.max.y)),a=this.unproject(new L.Point(a.max.x,a.min.y));
return new L.LatLngBounds(b,a)},getMinZoom:function(){return isNaN(this.options.minZoom)?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return isNaN(this.options.maxZoom)?this._layersMaxZoom||Infinity:this.options.maxZoom},getBoundsZoom:function(a){var b=this.getSize(),c=this.getMinZoom(),d=this.getMaxZoom(),e=a.getNorthEast(),a=a.getSouthWest(),f,g;do c++,f=this.project(e,c),g=this.project(a,c),f=new L.Point(f.x-g.x,g.y-f.y);while(f.x<=b.x&&f.y<=b.y&&c<=d);return c-1},getSize:function(){if(!this._size||
this._sizeChanged)this._size=new L.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1;return this._size},getPixelBounds:function(){var a=this._getTopLeftPoint(),b=this.getSize();return new L.Bounds(a,a.add(b))},getPixelOrigin:function(){return this._initialTopLeftPoint},getPanes:function(){return this._panes},mouseEventToContainerPoint:function(a){return L.DomEvent.getMousePosition(a,this._container)},mouseEventToLayerPoint:function(a){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))},
mouseEventToLatLng:function(a){return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))},containerPointToLayerPoint:function(a){return a.subtract(L.DomUtil.getPosition(this._mapPane))},layerPointToContainerPoint:function(a){return a.add(L.DomUtil.getPosition(this._mapPane))},layerPointToLatLng:function(a){return this.unproject(a.add(this._initialTopLeftPoint))},latLngToLayerPoint:function(a){return this.project(a)._subtract(this._initialTopLeftPoint)},project:function(a,b){b=typeof b=="undefined"?
this._zoom:b;return this.options.crs.latLngToPoint(a,this.options.scale(b))},unproject:function(a,b,c){b=typeof b=="undefined"?this._zoom:b;return this.options.crs.pointToLatLng(a,this.options.scale(b),c)},_initLayout:function(){var a=this._container;a.className+=" leaflet-container";this.options.fadeAnimation&&(a.className+=" leaflet-fade-anim");var b=L.DomUtil.getStyle(a,"position");if(b!="absolute"&&b!="relative")a.style.position="relative";this._initPanes();this._initControlPos&&this._initControlPos()},
_initPanes:function(){var a=this._panes={};this._mapPane=a.mapPane=this._createPane("leaflet-map-pane",this._container);this._tilePane=a.tilePane=this._createPane("leaflet-tile-pane",this._mapPane);this._objectsPane=a.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane);a.shadowPane=this._createPane("leaflet-shadow-pane");a.overlayPane=this._createPane("leaflet-overlay-pane");a.markerPane=this._createPane("leaflet-marker-pane");a.popupPane=this._createPane("leaflet-popup-pane")},_createPane:function(a,
b){return L.DomUtil.create("div",a,b||this._objectsPane)},_resetView:function(a,b,c){var d=this._zoom!=b;this.fire("movestart");this._zoom=b;this._initialTopLeftPoint=this._getNewTopLeftPoint(a);c?this._initialTopLeftPoint._add(L.DomUtil.getPosition(this._mapPane)):L.DomUtil.setPosition(this._mapPane,new L.Point(0,0));this._tileLayersToLoad=this._tileLayersNum;this.fire("viewreset");this.fire("move");d&&this.fire("zoomend");this.fire("moveend");if(!this._loaded)this._loaded=!0,this.fire("load")},
_initLayers:function(a){this._layers={};for(var b=0,c=a.length;b<c;b++)this.addLayer(a[b])},_initControls:function(){this.options.zoomControl&&this.addControl(new L.Control.Zoom);if(this.options.attributionControl)this.attributionControl=new L.Control.Attribution,this.addControl(this.attributionControl)},_rawPanBy:function(a){var b=L.DomUtil.getPosition(this._mapPane);L.DomUtil.setPosition(this._mapPane,b.subtract(a))},_initEvents:function(){L.DomEvent.addListener(this._container,"click",this._onMouseClick,
this);for(var a=["dblclick","mousedown","mouseenter","mouseleave","mousemove"],b=0;b<a.length;b++)L.DomEvent.addListener(this._container,a[b],this._fireMouseEvent,this);this.options.trackResize&&L.DomEvent.addListener(window,"resize",this.invalidateSize,this)},_onMouseClick:function(a){if(!this.dragging||!this.dragging.moved())this.fire("pre"+a.type),this._fireMouseEvent(a)},_fireMouseEvent:function(a){var b=a.type,b=b=="mouseenter"?"mouseover":b=="mouseleave"?"mouseout":b;this.hasEventListeners(b)&&
this.fire(b,{latlng:this.mouseEventToLatLng(a),layerPoint:this.mouseEventToLayerPoint(a)})},_initInteraction:function(){var a={dragging:L.Handler.MapDrag,touchZoom:L.Handler.TouchZoom,doubleClickZoom:L.Handler.DoubleClickZoom,scrollWheelZoom:L.Handler.ScrollWheelZoom,shiftDragZoom:L.Handler.ShiftDragZoom},b;for(b in a)a.hasOwnProperty(b)&&a[b]&&(this[b]=new a[b](this),this.options[b]&&this[b].enable())},_onTileLayerLoad:function(){this._tileLayersToLoad--;if(this._tileLayersNum&&!this._tileLayersToLoad&&
this._tileBg)clearTimeout(this._clearTileBgTimer),this._clearTileBgTimer=setTimeout(L.Util.bind(this._clearTileBg,this),500)},_getTopLeftPoint:function(){if(!this._loaded)throw Error("Set map center and zoom first.");return this._initialTopLeftPoint.subtract(L.DomUtil.getPosition(this._mapPane))},_getNewTopLeftPoint:function(a){var b=this.getSize().divideBy(2);return this.project(a).subtract(b).round()},_limitZoom:function(a){var b=this.getMinZoom(),c=this.getMaxZoom();return Math.max(b,Math.min(c,
a))}});L.Map.include({locate:function(a){var b={timeout:1E4};L.Util.extend(b,a);navigator.geolocation?navigator.geolocation.getCurrentPosition(L.Util.bind(this._handleGeolocationResponse,this),L.Util.bind(this._handleGeolocationError,this),b):this.fire("locationerror",{code:0,message:"Geolocation not supported."});return this},locateAndSetView:function(a,b){this._setViewOnLocate=!0;this._maxLocateZoom=a||Infinity;return this.locate(b)},_handleGeolocationError:function(a){var a=a.code,b=a==1?"permission denied":
a==2?"position unavailable":"timeout";if(this._setViewOnLocate)this.fitWorld(),this._setViewOnLocate=!1;this.fire("locationerror",{code:a,message:"Geolocation error: "+b+"."})},_handleGeolocationResponse:function(a){var b=180*a.coords.accuracy/4E7,c=b*2,d=a.coords.latitude,e=a.coords.longitude,f=new L.LatLng(d-b,e-c),b=new L.LatLng(d+b,e+c),f=new L.LatLngBounds(f,b);if(this._setViewOnLocate)b=Math.min(this.getBoundsZoom(f),this._maxLocateZoom),this.setView(f.getCenter(),b),this._setViewOnLocate=!1;
this.fire("locationfound",{latlng:new L.LatLng(d,e),bounds:f,accuracy:a.coords.accuracy})}});L.Map.include({openPopup:function(a){this.closePopup();this._popup=a;return this.addLayer(a)},closePopup:function(){this._popup&&this.removeLayer(this._popup);return this}});L.Map.include(!L.Transition||!L.Transition.implemented()?{}:{setView:function(a,b,c){var b=this._limitZoom(b),d=this._zoom!=b;if(this._loaded&&!c&&this._layers&&(c=this._getNewTopLeftPoint(a).subtract(this._getTopLeftPoint()),d?this._zoomToIfCenterInView&&this._zoomToIfCenterInView(a,b,c):this._panByIfClose(c)))return this;this._resetView(a,b);return this},panBy:function(a){if(!this._panTransition)this._panTransition=new L.Transition(this._mapPane,{duration:0.3}),this._panTransition.on("step",this._onPanTransitionStep,
this),this._panTransition.on("end",this._onPanTransitionEnd,this);this.fire(this,"movestart");this._panTransition.run({position:L.DomUtil.getPosition(this._mapPane).subtract(a)});return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){this.fire("moveend")},_panByIfClose:function(a){if(this._offsetIsWithinView(a))return this.panBy(a),!0;return!1},_offsetIsWithinView:function(a,b){var c=b||1,d=this.getSize();return Math.abs(a.x)<=d.x*c&&Math.abs(a.y)<=d.y*c}});L.Map.include(!L.DomUtil.TRANSITION?{}:{_zoomToIfCenterInView:function(a,b,c){if(this._animatingZoom)return!0;if(!this.options.zoomAnimation)return!1;var d=Math.pow(2,b-this._zoom),c=c.divideBy(1-1/d);if(!this._offsetIsWithinView(c,1))return!1;this._mapPane.className+=" leaflet-zoom-anim";c=this.containerPointToLayerPoint(this.getSize().divideBy(2)).add(c);this._prepareTileBg();this._runAnimation(a,b,d,c);return!0},_runAnimation:function(a,b,c,d){this._animatingZoom=!0;this._animateToCenter=a;this._animateToZoom=
b;a=L.DomUtil.TRANSFORM;if(L.Browser.gecko||window.opera)this._tileBg.style[a]+=" translate(0,0)";L.Browser.android?(this._tileBg.style[a+"Origin"]=d.x+"px "+d.y+"px",c="scale("+c+")"):c=L.DomUtil.getScaleString(c,d);L.Util.falseFn(this._tileBg.offsetWidth);d={};d[a]=this._tileBg.style[a]+" "+c;this._tileBg.transition.run(d)},_prepareTileBg:function(){if(!this._tileBg)this._tileBg=this._createPane("leaflet-tile-pane",this._mapPane),this._tileBg.style.zIndex=1;var a=this._tilePane,b=this._tileBg;b.style[L.DomUtil.TRANSFORM]=
"";b.style.visibility="hidden";b.empty=!0;a.empty=!1;this._tilePane=this._panes.tilePane=b;this._tileBg=a;if(!this._tileBg.transition)this._tileBg.transition=new L.Transition(this._tileBg,{duration:0.3,easing:"cubic-bezier(0.25,0.1,0.25,0.75)"}),this._tileBg.transition.on("end",this._onZoomTransitionEnd,this);this._stopLoadingBgTiles()},_stopLoadingBgTiles:function(){for(var a=[].slice.call(this._tileBg.getElementsByTagName("img")),b=0,c=a.length;b<c;b++)if(!a[b].complete)a[b].src="",a[b].parentNode.removeChild(a[b])},
_onZoomTransitionEnd:function(){this._restoreTileFront();L.Util.falseFn(this._tileBg.offsetWidth);this._resetView(this._animateToCenter,this._animateToZoom,!0);this._mapPane.className=this._mapPane.className.replace(" leaflet-zoom-anim","");this._animatingZoom=!1},_restoreTileFront:function(){this._tilePane.innerHTML="";this._tilePane.style.visibility="";this._tilePane.style.zIndex=2;this._tileBg.style.zIndex=1},_clearTileBg:function(){if(!this._animatingZoom&&!this.touchZoom._zooming)this._tileBg.innerHTML=
""}});L.Map.include({addControl:function(a){a.onAdd(this);var b=a.getPosition(),c=this._controlCorners[b],a=a.getContainer();L.DomUtil.addClass(a,"leaflet-control");b.indexOf("bottom")!=-1?c.insertBefore(a,c.firstChild):c.appendChild(a);return this},removeControl:function(a){var b=this._controlCorners[a.getPosition()],c=a.getContainer();b.removeChild(c);if(a.onRemove)a.onRemove(this);return this},_initControlPos:function(){var a=this._controlCorners={},b=L.DomUtil.create("div","leaflet-control-container",
this._container);L.Browser.mobileWebkit&&(b.className+=" leaflet-big-buttons");a.topLeft=L.DomUtil.create("div","leaflet-top leaflet-left",b);a.topRight=L.DomUtil.create("div","leaflet-top leaflet-right",b);a.bottomLeft=L.DomUtil.create("div","leaflet-bottom leaflet-left",b);a.bottomRight=L.DomUtil.create("div","leaflet-bottom leaflet-right",b)}});

/* wax - 3.1.0 - 1.0.4-422-g0312066 *//*!
  * Reqwest! A general purpose XHR connection manager
  * copyright Dustin Diaz 2011
  * https://github.com/ded/reqwest
  * license MIT
  */!function(context,win){function serial(a){var b=a.name;if(a.disabled||!b)return"";b=enc(b);switch(a.tagName.toLowerCase()){case"input":switch(a.type){case"reset":case"button":case"image":case"file":return"";case"checkbox":case"radio":return a.checked?b+"="+(a.value?enc(a.value):!0)+"&":"";default:return b+"="+(a.value?enc(a.value):"")+"&"}break;case"textarea":return b+"="+enc(a.value)+"&";case"select":return b+"="+enc(a.options[a.selectedIndex].value)+"&"}return""}function enc(a){return encodeURIComponent(a)}function reqwest(a,b){return new Reqwest(a,b)}function init(o,fn){function error(a){o.error&&o.error(a),complete(a)}function success(resp){o.timeout&&clearTimeout(self.timeout)&&(self.timeout=null);var r=resp.responseText;if(r)switch(type){case"json":resp=win.JSON?win.JSON.parse(r):eval("("+r+")");break;case"js":resp=eval(r);break;case"html":resp=r}fn(resp),o.success&&o.success(resp),complete(resp)}function complete(a){o.complete&&o.complete(a)}this.url=typeof o=="string"?o:o.url,this.timeout=null;var type=o.type||setType(this.url),self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){self.abort(),error()},o.timeout)),this.request=getRequest(o,success,error)}function setType(a){return/\.json$/.test(a)?"json":/\.jsonp$/.test(a)?"jsonp":/\.js$/.test(a)?"js":/\.html?$/.test(a)?"html":/\.xml$/.test(a)?"xml":"js"}function Reqwest(a,b){this.o=a,this.fn=b,init.apply(this,arguments)}function getRequest(a,b,c){if(a.type!="jsonp"){var d=xhr();return d.open(a.method||"GET",typeof a=="string"?a:a.url,!0),setHeaders(d,a),d.onreadystatechange=handleReadyState(d,b,c),a.before&&a.before(d),d.send(a.data||null),d}var e=doc.createElement("script"),f=0;win[getCallbackName(a)]=generalCallback,e.type="text/javascript",e.src=a.url,e.async=!0,e.onload=e.onreadystatechange=function(){if(e[readyState]&&e[readyState]!=="complete"&&e[readyState]!=="loaded"||f)return!1;e.onload=e.onreadystatechange=null,a.success&&a.success(lastValue),lastValue=undefined,head.removeChild(e),f=1},head.appendChild(e)}function generalCallback(a){lastValue=a}function getCallbackName(a){var b=a.jsonpCallback||"callback";if(a.url.slice(-(b.length+2))==b+"=?"){var c="reqwest_"+uniqid++;return a.url=a.url.substr(0,a.url.length-1)+c,c}var d=new RegExp(b+"=([\\w]+)");return a.url.match(d)[1]}function setHeaders(a,b){var c=b.headers||{};c.Accept=c.Accept||"text/javascript, text/html, application/xml, text/xml, */*",b.crossOrigin||(c["X-Requested-With"]=c["X-Requested-With"]||"XMLHttpRequest"),c[contentType]=c[contentType]||"application/x-www-form-urlencoded";for(var d in c)c.hasOwnProperty(d)&&a.setRequestHeader(d,c[d],!1)}function handleReadyState(a,b,c){return function(){a&&a[readyState]==4&&(twoHundo.test(a.status)?b(a):c(a))}}var twoHundo=/^20\d$/,doc=document,byTag="getElementsByTagName",readyState="readyState",contentType="Content-Type",head=doc[byTag]("head")[0],uniqid=0,lastValue,xhr="XMLHttpRequest"in win?function(){return new XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")};Reqwest.prototype={abort:function(){this.request.abort()},retry:function(){init.call(this,this.o,this.fn)}},reqwest.serialize=function(a){var b=[a[byTag]("input"),a[byTag]("select"),a[byTag]("textarea")],c=[],d,e;for(d=0,l=b.length;d<l;++d)for(e=0,l2=b[d].length;e<l2;++e)c.push(serial(b[d][e]));return c.join("").replace(/&$/,"")},reqwest.serializeArray=function(a){for(var b=this.serialize(a).split("&"),c=0,d=b.length,e=[],f;c<d;c++)b[c]&&(f=b[c].split("="))&&e.push({name:f[0],value:f[1]});return e};var old=context.reqwest;reqwest.noConflict=function(){return context.reqwest=old,this},typeof module!="undefined"?module.exports=reqwest:context.reqwest=reqwest}(this,window),wax=wax||{},wax.attribution=function(){var a,b={};return b.set=function(b){if(typeof b=="undefined")return;return a.innerHTML=b,this},b.element=function(){return a},b.init=function(){return a=document.createElement("div"),a.className="wax-attribution",this},b.init()},wax=wax||{},wax.bwdetect=function(a,b){function h(){wax.bw=-1;var a=new Image;a.src=e;var b=!0,f=setTimeout(function(){b&&wax.bw==-1&&(c.bw(0),b=!1)},d);a.onload=function(){b&&wax.bw==-1&&(clearTimeout(f),c.bw(1),b=!1)}}var c={},d=a.threshold||400,e="http://a.tiles.mapbox.com/mapbox/1.0.0/blue-marble-topo-bathy-jul/0/0/0.png?preventcache="+ +(new Date),f=1,g=a.auto===undefined?!0:a.auto;return c.bw=function(a){if(!arguments.length)return f;var c=f;wax.bwlisteners&&wax.bwlisteners.length&&function(){listeners=wax.bwlisteners,wax.bwlisteners=[];for(i=0;i<listeners;i++)listeners[i](a)}(),wax.bw=a,f!=(f=a)&&b(a)},c.add=function(){return g&&h(),this},wax.bw==-1?(wax.bwlisteners=wax.bwlisteners||[],wax.bwlisteners.push(c.bw)):wax.bw!==undefined?c.bw(wax.bw):c.add(),c},wax.formatter=function(x){var formatter={},f;if(x&&typeof x=="string")try{eval("f = "+x)}catch(e){console&&console.log(e)}else x&&typeof x=="function"?f=x:f=function(){};return formatter.format=function(a,b){try{return f(a,b)}catch(c){console&&console.log(c)}},formatter},wax.GridInstance=function(a,b,c){function f(a){return a>=93&&a--,a>=35&&a--,a-=32,a}c=c||{};var d={},e=c.resolution||4;return tileSize=c.tileSize||256,d.grid_tile=function(){return a},d.getKey=function(b,c){if(!a||!a.grid)return;if(c<0||b<0)return;if(Math.floor(c)>=tileSize||Math.floor(b)>=tileSize)return;return f(a.grid[Math.floor(c/e)].charCodeAt(Math.floor(b/e)))},d.gridFeature=function(b,c){var d=this.getKey(b,c),e=a.keys;if(e&&e[d]&&a.data[e[d]])return a.data[e[d]]},d.tileFeature=function(c,d,e,f){if(!a)return;var g=wax.util.offset(e);feature=this.gridFeature(c-g.left,d-g.top);if(feature)return b.format(f,feature)},d},wax.GridManager=function(a){function h(a,b){if(typeof e!="undefined")return b(null,e);wax.request.get(f(a),function(a,c){return c&&c.formatter?e=wax.formatter(c.formatter):e=!1,b(a,e)})}function i(a){return typeof a=="string"&&(a=[a]),function b(b){if(!b)return;var c=/(\d+)\/(\d+)\/(\d+)\.[\w\._]+/g.exec(b);if(!c)return;return a[parseInt(c[2],10)%a.length].replace("{z}",c[1]).replace("{x}",c[2]).replace("{y}",c[3])}}a=a||{};var b=a.resolution||4,c={},d={},e,f=function(a){return a.replace(/\d+\/\d+\/\d+\.\w+/,"layer.json")},g=function(a){return a.replace(/(\.png|\.jpg|\.jpeg)(\d*)/,".grid.json")};return d.formatter=function(a){return arguments.length?(e=wax.formatter(a),d):e},d.formatterUrl=function(a){return arguments.length?(f=typeof a=="string"?function(){return a}:a,d):f},d.gridUrl=function(a){return arguments.length?(g=typeof a=="function"?a:i(a),d):g},d.getGrid=function(a,c){return h(a,function(d,e){var f=g(a);if(d||!e||!f)return c(d,null);wax.request.get(f,function(a,d){if(a)return c(a,null);c(null,wax.GridInstance(d,e,{resolution:b||4}))})}),d},a.formatter&&d.formatter(a.formatter),a.grids&&d.gridUrl(a.grids),d},wax=wax||{},wax.hash=function(a){function b(){return location.hash.substring(1)}function c(a){location.hash="#"+a}function g(b){var c=b.split("/");for(var d=0;d<c.length;d++){c[d]=Number(c[d]);if(isNaN(c[d]))return!0}if(c.length<3)return!0;c.length==3&&a.setCenterZoom(c)}function h(){var b=a.getCenterZoom();d!==b&&(d=b,c(d))}function i(a){if(a===d)return;g(d=a)&&h()}a=a||{};var d,e={},f=90-1e-8,j=wax.util.throttle(h,500);return e.add=function(){return i(b()),a.bindChange(j),this},e.remove=function(){return a.unbindChange(j),this},e.add()};var wax=wax||{};wax.legend=function(){var a,b={},c;return b.element=function(){return c},b.content=function(b){return arguments.length?(b?(a.innerHTML=b,a.style.display="block"):(a.innerHTML="",a.style.display="none"),this):a.innerHTML},b.add=function(){return c=document.createElement("div"),c.className="wax-legends",a=document.createElement("div"),a.className="wax-legend",a.style.display="none",c.appendChild(a),this},b.add()};var w=function(a){return a.melt=function(b,c){return b.apply(c,[a,c])},a},wax=wax||{};Array.prototype.reduce||(Array.prototype.reduce=function(a){"use strict";if(this===void 0||this===null)throw new TypeError;var b=Object(this),c=b.length>>>0;if(typeof a!="function")throw new TypeError;if(c==0&&arguments.length==1)throw new TypeError;var d=0,e;if(arguments.length>=2)e=arguments[1];else do{if(d in b){e=b[d++];break}if(++d>=c)throw new TypeError}while(!0);while(d<c)d in b&&(e=a.call(undefined,e,b[d],d,b)),d++;return e}),wax.Record=function(a,b){var c=function(a,b){var c=a.split(".").reduce(function(a,b){return[a[1]||a[0],a[1]?a[1][b]:a[0][b]]},[b||window,null]);if(c[0]&&c[1])return c;throw a+" not found."},d=function(a,b){var d=c(a),e;b=b.length?wax.Record(b):[];if(Object.create)e=Object.create(d[1].prototype),d[1].apply(e,b);else switch(b.length){case 0:e=new d[1];break;case 1:e=new d[1](b[0]);break;case 2:e=new d[1](b[0],b[1]);break;case 3:e=new d[1](b[0],b[1],b[2]);break;case 4:e=new d[1](b[0],b[1],b[2],b[3]);break;case 5:e=new d[1](b[0],b[1],b[2],b[3],b[4]);break;default:}return e},e=function(a,b,d){var e=c(a,d),f=b.length?wax.Record(b):[];return d&&a.indexOf(".")===-1?e[1].apply(d,f):e[1].apply(e[0],f)},f=function(a){return wax.util.isString(a)&&wax.util.indexOf(["@new","@call","@literal","@chain","@inject","@group"],a.split(" ")[0])!==-1},g=function(a){return wax.util.isString(a)&&wax.util.indexOf(["@new","@call","@chain"],a.split(" ")[0])!==-1},h=function(a){return wax.util.isArray(a)&&a[0]&&f(a[0])?{verb:a[0].split(" ")[0],subject:a[0].split(" ")[1],object:a.slice(1)}:!1},i,j=!1,k=null,l=null,m=h(a);if(!m){if(a!==null&&typeof a=="object"){var n=wax.util.keys(a);for(i=0;i<n.length;i++){var o=n[i];a[o]=wax.Record(a[o],b)}return a}return a}switch(m.verb){case"@group":for(i=0;i<m.object.length;i++)k=wax.Record(m.object[i],b),l=h(m.object[i]),l&&g(l.verb)&&(b=k);return b;case"@new":return d(m.subject,m.object);case"@literal":return j=c(m.subject),j?j[1]:null;case"@inject":return e(m.subject,m.object,b);case"@chain":return e(m.subject,m.object,b);case"@call":return e(m.subject,m.object,null)}};var wax=wax||{};wax.request={cache:{},locks:{},promises:{},get:function(a,b){if(this.cache[a])return b(this.cache[a][0],this.cache[a][1]);this.promises[a]=this.promises[a]||[],this.promises[a].push(b);if(this.locks[a])return;var c=this;this.locks[a]=!0,reqwest({url:a+(~a.indexOf("?")?"&":"?")+"callback=grid",type:"jsonp",jsonpCallback:"callback",success:function(b){c.locks[a]=!1,c.cache[a]=[null,b];for(var d=0;d<c.promises[a].length;d++)c.promises[a][d](c.cache[a][0],c.cache[a][1])},error:function(b){c.locks[a]=!1,c.cache[a]=[b,null];for(var d=0;d<c.promises[a].length;d++)c.promises[a][d](c.cache[a][0],c.cache[a][1])}})}};if(!wax)var wax={};wax.tilejson=function(a,b){reqwest({url:a+(~a.indexOf("?")?"&":"?")+"callback=grid",type:"jsonp",jsonpCallback:"callback",success:b,error:b})};var wax=wax||{};wax.tooltip={},wax.tooltip=function(a){this._currentTooltip=undefined,a=a||{},a.animationOut&&(this.animationOut=a.animationOut),a.animationIn&&(this.animationIn=a.animationIn)},wax.tooltip.prototype.isPopup=function(a){return a&&a.className.indexOf("wax-popup")!==-1},wax.tooltip.prototype.getTooltip=function(a,b){var c=document.createElement("div");return c.className="wax-tooltip wax-tooltip-0",c.innerHTML=a,b.appendChild(c),c},wax.tooltip.prototype.hideTooltip=function(a){if(!a)return;var b,c=function(){this.parentNode&&this.parentNode.removeChild(this)};a.style["-webkit-transition"]!==undefined&&this.animationOut?b="webkitTransitionEnd":a.style.MozTransition!==undefined&&this.animationOut&&(b="transitionend"),b?(a.addEventListener(b,c,!1),a.addEventListener("transitionend",c,!1),a.className+=" "+this.animationOut):a.parentNode&&a.parentNode.removeChild(a)},wax.tooltip.prototype.click=function(a,b){this._currentTooltip&&(this.hideTooltip(this._currentTooltip),this._currentTooltip=undefined);var c=this.getTooltip(a,b);c.className+=" wax-popup",c.innerHTML=a;var d=document.createElement("a");d.href="#close",d.className="close",d.innerHTML="Close",c.appendChild(d);var e=wax.util.bind(function(a){return this.hideTooltip(c),this._currentTooltip=undefined,a.returnValue=!1,a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),!1},this);d.addEventListener?d.addEventListener("click",e,!1):d.attachEvent&&d.attachEvent("onclick",e),this._currentTooltip=c},wax.tooltip.prototype.over=function(a,b){if(!a)return;b.style.cursor="pointer";if(this.isPopup(this._currentTooltip))return;this._currentTooltip=this.getTooltip(a,b)},wax.tooltip.prototype.out=function(a){a.style.cursor="default";if(this.isPopup(this._currentTooltip))return;this._currentTooltip&&(this.hideTooltip(this._currentTooltip),this._currentTooltip=undefined)};var wax=wax||{};wax.util=wax.util||{},wax.util={offset:function(a){var b=a.offsetWidth||parseInt(a.style.width,10),c=a.offsetHeight||parseInt(a.style.height,10),d=document.body,e=0,f=0,g=function(a){if(a===d||a===document.documentElement)return;e+=a.offsetTop,f+=a.offsetLeft;var b=a.style.transform||a.style.WebkitTransform||a.style.OTransform||a.style.MozTransform||a.style.msTransform;if(b)if(match=b.match(/translate\((.+)px, (.+)px\)/))e+=parseInt(match[2],10),f+=parseInt(match[1],10);else if(match=b.match(/translate3d\((.+)px, (.+)px, (.+)px\)/))e+=parseInt(match[2],10),f+=parseInt(match[1],10);else if(match=b.match(/matrix3d\(([\-\d,\s]+)\)/)){var c=match[1].split(",");e+=parseInt(c[13],10),f+=parseInt(c[12],10)}else if(match=b.match(/matrix\(.+, .+, .+, .+, (.+), (.+)\)/))e+=parseInt(match[2],10),f+=parseInt(match[1],10)};g(a);try{while(a=a.offsetParent)g(a)}catch(h){}e+=d.offsetTop,f+=d.offsetLeft,e+=d.parentNode.offsetTop,f+=d.parentNode.offsetLeft;var i=document.defaultView?window.getComputedStyle(d.parentNode,null):d.parentNode.currentStyle;return d.parentNode.offsetTop!==parseInt(i.marginTop,10)&&!isNaN(parseInt(i.marginTop,10))&&(e+=parseInt(i.marginTop,10),f+=parseInt(i.marginLeft,10)),{top:e,left:f,height:c,width:b}},$:function(a){return typeof a=="string"?document.getElementById(a):a},bind:function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,c.concat(Array.prototype.slice.call(arguments)))}},isString:function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)},indexOf:function(a,b){var c=Array.prototype.indexOf;if(a===null)return-1;var d,e;if(c&&a.indexOf===c)return a.indexOf(b);for(d=0,e=a.length;d<e;d++)if(a[d]===b)return d;return-1},isArray:Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"},keys:Object.keys||function(a){var b=Object.prototype.hasOwnProperty;if(a!==Object(a))throw new TypeError("Invalid object");var c=[];for(var d in a)b.call(a,d)&&(c[c.length]=d);return c},eventoffset:function(a){var b=0,c=0;if(!a)var a=window.event;if(a.pageX||a.pageY)return{x:a.pageX,y:a.pageY};if(a.clientX||a.clientY){var d=document.documentElement,e=document.body,f=document.body.parentNode.currentStyle,g=parseInt(f.marginTop,10)||0,h=parseInt(f.marginLeft,10)||0;return{x:a.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0)+h,y:a.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)+g}}if(a.touches&&a.touches.length===1)return{x:a.touches[0].pageX,y:a.touches[0].pageY}},limit:function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,a.apply(e,f)};c&&clearTimeout(d);if(c||!d)d=setTimeout(g,b)}},throttle:function(a,b){return this.limit(a,b,!1)}},wax=wax||{},wax.leaf=wax.leaf||{},wax.leaf.interaction=function(a,b,c){function s(){return r||(r=function(a){var b=[];for(var c in a)if(a[c]._tiles)for(var d in a[c]._tiles){var e=wax.util.offset(a[c]._tiles[d]);b.push([e.top,e.left,a[c]._tiles[d]])}return b}(a._layers))}function t(a,b){r=null}function u(a){for(var b=0,c=s();b<c.length;b++)if(c[b][0]<a.y&&c[b][0]+256>a.y&&c[b][1]<a.x&&c[b][1]+256>a.x)return c[b][2];return!1}function v(){return l?(window.clearTimeout(l),l=null,!0):!1}function w(a){if(k)return;var b=wax.util.eventoffset(a),c=u(b),f;c&&d.getGrid(c.src,function(a,d){if(a||!d)return;f=d.tileFeature(b.x,b.y,c,{format:"teaser"}),f?f&&o!==f?(o=f,e.out(m),e.over(f,m)):f||(o=null,e.out(m)):(o=null,e.out(m))})}function x(a){if(v())return;k=!0,p=wax.util.eventoffset(a),a.type==="mousedown"?g(m,"mouseup",z,this):a.type==="touchstart"&&a.touches.length===1&&(f=["full","teaser"],e._currentTooltip&&e.hideTooltip(e._currentTooltip),g(m,"touchend",z,this),g(m,"touchmove",y,this))}function y(){h(m,"touchend",z),h(m,"touchmove",z),k=!1}function z(a){var b=wax.util.eventoffset(a);return k=!1,h(m,"mouseup",z),m.ontouchend&&(h(m,"touchend",z),h(m,"touchmove",_touchCancel)),a.type==="touchend"?A(a,p):Math.round(b.y/q)===Math.round(p.y/q)&&Math.round(b.x/q)===Math.round(p.x/q)&&(l=window.setTimeout(function(){l=null,A(a,b)},300)),z}function A(a,b){var c=u(b),g;c&&d.getGrid(c.src,function(d,h){for(var j=0;h&&j<f.length;j++){g=h.tileFeature(b.x,b.y,c,{format:f[j]});if(g)switch(f[j]){case"full":case"teaser":return e.click(g,m,0,a);case"location":return i(g)}}})}b=b||{},c=c||{};var d=wax.GridManager(b),e=c.callbacks||new wax.tooltip(c),f=c.clickAction||["full","location"],g=L.DomEvent.addListener,h=L.DomEvent.removeListener,i=c.clickHandler||function(a){window.top.location=a},j={},k=!1,l=!1,m=a._container,n="ontouchstart"in document.documentElement,o,p,q=4,r;return j.add=function(){var b=["moveend","layerswitched"];for(var c=0;c<b.length;c++)a.on(b[c],t);return g(m,"mousemove",w),g(m,"mousedown",x),n&&g(m,"touchstart",x),this},j.remove=function(){var b=["moveend","layerswitched"];for(var c=0;c<b.length;c++)a.off(b[c],t);return h(m,"mousemove",w),h(m,"mousedown",x),n&&h(m,"touchstart",x),e._currentTooltip&&e.hideTooltip(e._currentTooltip),this},j.add(a)},wax=wax||{},wax.leaf=wax.leaf||{},wax.leaf.connector=L.TileLayer.extend({initialize:function(a){a=a||{},a.minZoom=a.minzoom||0,a.maxZoom=a.maxzoom||22,L.TileLayer.prototype.initialize.call(this,a.tiles[0],a)}})
/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]};
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,p=function(s,l){if(!l){l=2;}
return("000"+s).slice(l*-1);};$P.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};$P.setTimeToNow=function(){var n=new Date();this.setHours(n.getHours());this.setMinutes(n.getMinutes());this.setSeconds(n.getSeconds());this.setMilliseconds(n.getMilliseconds());return this;};$D.today=function(){return new Date().clearTime();};$D.compare=function(date1,date2){if(isNaN(date1)||isNaN(date2)){throw new Error(date1+" - "+date2);}else if(date1 instanceof Date&&date2 instanceof Date){return(date1<date2)?-1:(date1>date2)?1:0;}else{throw new TypeError(date1+" - "+date2);}};$D.equals=function(date1,date2){return(date1.compareTo(date2)===0);};$D.getDayNumberFromName=function(name){var n=$C.dayNames,m=$C.abbreviatedDayNames,o=$C.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s||o[i].toLowerCase()==s){return i;}}
return-1;};$D.getMonthNumberFromName=function(name){var n=$C.monthNames,m=$C.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};$D.isLeapYear=function(year){return((year%4===0&&year%100!==0)||year%400===0);};$D.getDaysInMonth=function(year,month){return[31,($D.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};$D.getTimezoneAbbreviation=function(offset){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].offset===offset){return z[i].name;}}
return null;};$D.getTimezoneOffset=function(name){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].name===name.toUpperCase()){return z[i].offset;}}
return null;};$P.clone=function(){return new Date(this.getTime());};$P.compareTo=function(date){return Date.compare(this,date);};$P.equals=function(date){return Date.equals(this,date||new Date());};$P.between=function(start,end){return this.getTime()>=start.getTime()&&this.getTime()<=end.getTime();};$P.isAfter=function(date){return this.compareTo(date||new Date())===1;};$P.isBefore=function(date){return(this.compareTo(date||new Date())===-1);};$P.isToday=function(){return this.isSameDay(new Date());};$P.isSameDay=function(date){return this.clone().clearTime().equals(date.clone().clearTime());};$P.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};$P.addSeconds=function(value){return this.addMilliseconds(value*1000);};$P.addMinutes=function(value){return this.addMilliseconds(value*60000);};$P.addHours=function(value){return this.addMilliseconds(value*3600000);};$P.addDays=function(value){this.setDate(this.getDate()+value);return this;};$P.addWeeks=function(value){return this.addDays(value*7);};$P.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,$D.getDaysInMonth(this.getFullYear(),this.getMonth())));return this;};$P.addYears=function(value){return this.addMonths(value*12);};$P.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.milliseconds){this.addMilliseconds(x.milliseconds);}
if(x.seconds){this.addSeconds(x.seconds);}
if(x.minutes){this.addMinutes(x.minutes);}
if(x.hours){this.addHours(x.hours);}
if(x.weeks){this.addWeeks(x.weeks);}
if(x.months){this.addMonths(x.months);}
if(x.years){this.addYears(x.years);}
if(x.days){this.addDays(x.days);}
return this;};var $y,$m,$d;$P.getWeek=function(){var a,b,c,d,e,f,g,n,s,w;$y=(!$y)?this.getFullYear():$y;$m=(!$m)?this.getMonth()+1:$m;$d=(!$d)?this.getDate():$d;if($m<=2){a=$y-1;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=0;f=$d-1+(31*($m-1));}else{a=$y;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=s+1;f=$d+((153*($m-3)+2)/5)+58+s;}
g=(a+b)%7;d=(f+g-e)%7;n=(f+3-d)|0;if(n<0){w=53-((g-s)/5|0);}else if(n>364+s){w=1;}else{w=(n/7|0)+1;}
$y=$m=$d=null;return w;};$P.getISOWeek=function(){$y=this.getUTCFullYear();$m=this.getUTCMonth()+1;$d=this.getUTCDate();return p(this.getWeek());};$P.setWeek=function(n){return this.moveToDayOfWeek(1).addWeeks(n-this.getWeek());};$D._validate=function(n,min,max,name){if(typeof n=="undefined"){return false;}else if(typeof n!="number"){throw new TypeError(n+" is not a Number.");}else if(n<min||n>max){throw new RangeError(n+" is not a valid value for "+name+".");}
return true;};$D.validateMillisecond=function(value){return $D._validate(value,0,999,"millisecond");};$D.validateSecond=function(value){return $D._validate(value,0,59,"second");};$D.validateMinute=function(value){return $D._validate(value,0,59,"minute");};$D.validateHour=function(value){return $D._validate(value,0,23,"hour");};$D.validateDay=function(value,year,month){return $D._validate(value,1,$D.getDaysInMonth(year,month),"day");};$D.validateMonth=function(value){return $D._validate(value,0,11,"month");};$D.validateYear=function(value){return $D._validate(value,0,9999,"year");};$P.set=function(config){if($D.validateMillisecond(config.millisecond)){this.addMilliseconds(config.millisecond-this.getMilliseconds());}
if($D.validateSecond(config.second)){this.addSeconds(config.second-this.getSeconds());}
if($D.validateMinute(config.minute)){this.addMinutes(config.minute-this.getMinutes());}
if($D.validateHour(config.hour)){this.addHours(config.hour-this.getHours());}
if($D.validateMonth(config.month)){this.addMonths(config.month-this.getMonth());}
if($D.validateYear(config.year)){this.addYears(config.year-this.getFullYear());}
if($D.validateDay(config.day,this.getFullYear(),this.getMonth())){this.addDays(config.day-this.getDate());}
if(config.timezone){this.setTimezone(config.timezone);}
if(config.timezoneOffset){this.setTimezoneOffset(config.timezoneOffset);}
if(config.week&&$D._validate(config.week,0,53,"week")){this.setWeek(config.week);}
return this;};$P.moveToFirstDayOfMonth=function(){return this.set({day:1});};$P.moveToLastDayOfMonth=function(){return this.set({day:$D.getDaysInMonth(this.getFullYear(),this.getMonth())});};$P.moveToNthOccurrence=function(dayOfWeek,occurrence){var shift=0;if(occurrence>0){shift=occurrence-1;}
else if(occurrence===-1){this.moveToLastDayOfMonth();if(this.getDay()!==dayOfWeek){this.moveToDayOfWeek(dayOfWeek,-1);}
return this;}
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek,+1).addWeeks(shift);};$P.moveToDayOfWeek=function(dayOfWeek,orient){var diff=(dayOfWeek-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};$P.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};$P.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1;};$P.getTimezone=function(){return $D.getTimezoneAbbreviation(this.getUTCOffset());};$P.setTimezoneOffset=function(offset){var here=this.getTimezoneOffset(),there=Number(offset)*-6/10;return this.addMinutes(there-here);};$P.setTimezone=function(offset){return this.setTimezoneOffset($D.getTimezoneOffset(offset));};$P.hasDaylightSavingTime=function(){return(Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.isDaylightSavingTime=function(){return(this.hasDaylightSavingTime()&&new Date().getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r.charAt(0)+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};$P.getElapsed=function(date){return(date||new Date())-this;};if(!$P.toISOString){$P.toISOString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z"';};}
$P._toString=$P.toString;$P.toString=function(format){var x=this;if(format&&format.length==1){var c=$C.formatPatterns;x.t=x.toString;switch(format){case"d":return x.t(c.shortDate);case"D":return x.t(c.longDate);case"F":return x.t(c.fullDateTime);case"m":return x.t(c.monthDay);case"r":return x.t(c.rfc1123);case"s":return x.t(c.sortableDateTime);case"t":return x.t(c.shortTime);case"T":return x.t(c.longTime);case"u":return x.t(c.universalSortableDateTime);case"y":return x.t(c.yearMonth);}}
var ord=function(n){switch(n*1){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};return format?format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(m){if(m.charAt(0)==="\\"){return m.replace("\\","");}
x.h=x.getHours;switch(m){case"hh":return p(x.h()<13?(x.h()===0?12:x.h()):(x.h()-12));case"h":return x.h()<13?(x.h()===0?12:x.h()):(x.h()-12);case"HH":return p(x.h());case"H":return x.h();case"mm":return p(x.getMinutes());case"m":return x.getMinutes();case"ss":return p(x.getSeconds());case"s":return x.getSeconds();case"yyyy":return p(x.getFullYear(),4);case"yy":return p(x.getFullYear());case"dddd":return $C.dayNames[x.getDay()];case"ddd":return $C.abbreviatedDayNames[x.getDay()];case"dd":return p(x.getDate());case"d":return x.getDate();case"MMMM":return $C.monthNames[x.getMonth()];case"MMM":return $C.abbreviatedMonthNames[x.getMonth()];case"MM":return p((x.getMonth()+1));case"M":return x.getMonth()+1;case"t":return x.h()<12?$C.amDesignator.substring(0,1):$C.pmDesignator.substring(0,1);case"tt":return x.h()<12?$C.amDesignator:$C.pmDesignator;case"S":return ord(x.getDate());default:return m;}}):this._toString();};}());
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype;$P._orient=+1;$P._nth=null;$P._is=false;$P._same=false;$P._isSecond=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return $D.today().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return $D.today().last();};$P.is=function(){this._is=true;return this;};$P.same=function(){this._same=true;this._isSecond=false;return this;};$P.today=function(){return this.same().day();};$P.weekday=function(){if(this._is){this._is=false;return(!this.is().sat()&&!this.is().sun());}
return false;};$P.at=function(time){return(typeof time==="string")?$D.parse(this.toString("d")+" "+time):this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),pxf=("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/),nth=("final first second third fourth fifth").split(/\s/),de;$P.toObject=function(){var o={};for(var i=0;i<px.length;i++){o[px[i].toLowerCase()]=this["get"+pxf[i]]();}
return o;};$D.fromObject=function(config){config.week=null;return Date.today().set(config);};var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+$D.getMonthName(temp.getMonth())+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.today(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){$D[dx[i].toUpperCase()]=$D[dx[i].toUpperCase().substring(0,3)]=i;$D[dx[i]]=$D[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.today().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){$D[mx[j].toUpperCase()]=$D[mx[j].toUpperCase().substring(0,3)]=j;$D[mx[j]]=$D[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(this._same){this._same=this._is=false;var o1=this.toObject(),o2=(arguments[0]||new Date()).toObject(),v="",k=j.toLowerCase();for(var m=(px.length-1);m>-1;m--){v=px[m].toLowerCase();if(o1[v]!=o2[v]){return false;}
if(k==v){break;}}
return true;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
$P._ss=ef("Second");var nthfn=function(n){return function(dayOfWeek){if(this._same){return this._ss(arguments[0]);}
if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}}());
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo;var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};$D.Grammar={};$D.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=(s.length==3)?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4:Number(s)-1;};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<$C.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
var now=new Date();if((this.hour||this.minute)&&(!this.month&&!this.year&&!this.day)){this.day=now.getDate();}
if(!this.year){this.year=now.getFullYear();}
if(!this.month&&this.month!==0){this.month=now.getMonth();}
if(!this.day){this.day=1;}
if(!this.hour){this.hour=0;}
if(!this.minute){this.minute=0;}
if(!this.second){this.second=0;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.day>$D.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
var today=$D.today();if(this.now&&!this.unit&&!this.operator){return new Date();}else if(this.now){today=new Date();}
var expression=!!(this.days&&this.days!==null||this.orient||this.operator);var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(!this.now&&"hour minute second".indexOf(this.unit)!=-1){today.setTimeToNow();}
if(this.month||this.month===0){if("year day hour minute second".indexOf(this.unit)!=-1){this.value=this.month+1;this.month=null;expression=true;}}
if(!expression&&this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(!this.month){this.month=temp.getMonth();}
this.year=temp.getFullYear();}
if(expression&&this.weekday&&this.unit!="month"){this.unit="day";gap=($D.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month&&this.unit=="day"&&this.operator){this.value=(this.month+1);this.month=null;}
if(this.value!=null&&this.month!=null&&this.year!=null){this.day=this.value*1;}
if(this.month&&!this.day&&this.value){today.set({day:this.value*1});if(!expression){this.day=this.value*1;}}
if(!this.month&&this.value&&this.unit=="month"&&!this.now){this.month=this.value;expression=true;}
if(expression&&(this.month||this.month===0)&&this.unit!="year"){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(!this.value&&this.operator&&this.operator!==null&&this[this.unit+"s"]&&this[this.unit+"s"]!==null){this[this.unit+"s"]=this[this.unit+"s"]+((this.operator=="add")?1:-1)+(this.value||0)*orient;}else if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
this[this.unit+"s"]=this.value*orient;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(temp.getMonth()!==today.getMonth()){this.month=temp.getMonth();}}
if((this.month||this.month===0)&&!this.day){this.day=1;}
if(!this.orient&&!this.operator&&this.unit=="week"&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value);}
if(expression&&this.timezone&&this.day&&this.days){this.day=this.days;}
return(expression)?today.add(this):today.set(this);}};var _=$D.Parsing.Operators,g=$D.Grammar,t=$D.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|@|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=$C.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken($C.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.m,g.s],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("second minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[$C.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw $D.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"","yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};$D._parse=$D.parse;$D.parse=function(s){var r=null;if(!s){return null;}
if(s instanceof Date){return s;}
try{r=$D.Grammar.start.call({},s.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};$D.getParseFunction=function(fx){var fn=$D.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};$D.parseExact=function(s,fx){return $D.getParseFunction(fx)(s);};}());

/*
 Highcharts JS v2.1.9 (2011-11-11)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
*/
(function(){function sa(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a}function ja(a,b){return parseInt(a,b||10)}function Sb(a){return typeof a==="string"}function Nb(a){return typeof a==="object"}function lc(a){return typeof a==="number"}function mc(a){return Fa.log(a)/Fa.LN10}function nc(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function K(a){return a!==Wa&&a!==null}function Ga(a,b,c){var d,e;if(Sb(b))if(K(c))a.setAttribute(b,c);else{if(a&&a.getAttribute)e=a.getAttribute(b)}else if(K(b)&&
Nb(b))for(d in b)a.setAttribute(d,b[d]);return e}function zc(a){return Object.prototype.toString.call(a)==="[object Array]"?a:[a]}function A(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++){c=a[b];if(typeof c!=="undefined"&&c!==null)return c}}function Ja(a,b){if(Pc)if(b&&b.opacity!==Wa)b.filter="alpha(opacity="+b.opacity*100+")";sa(a.style,b)}function hb(a,b,c,d,e){a=ua.createElement(a);b&&sa(a,b);e&&Ja(a,{padding:0,border:jb,margin:0});c&&Ja(a,c);d&&d.appendChild(a);return a}function yb(a,b){var c=
function(){};c.prototype=new a;sa(c.prototype,b);return c}function Ed(a,b,c,d){var e=Xa.lang;a=a;var f=isNaN(b=bb(b))?2:b;b=c===undefined?e.decimalPoint:c;d=d===undefined?e.thousandsSep:d;e=a<0?"-":"";c=String(ja(a=bb(+a||0).toFixed(f)));var g=c.length>3?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+bb(a-c).toFixed(f).slice(2):"")}function Fd(a){var b={left:a.offsetLeft,top:a.offsetTop};for(a=a.offsetParent;a;){b.left+=a.offsetLeft;b.top+=a.offsetTop;
if(a!==ua.body&&a!==ua.documentElement){b.left-=a.scrollLeft;b.top-=a.scrollTop}a=a.offsetParent}return b}function Gd(){this.symbol=this.color=0}function fe(a,b,c,d,e,f,g){var h=g.x;g=g.y;var i=h-a+c-25,j=g-b+d+10,m;if(i<7)i=c+h+15;if(i+a>c+e){i-=i+a-(c+e);j-=b;m=true}if(j<5){j=5;if(m&&g>=j&&g<=j+b)j=g+b-5}else if(j+b>d+f)j=d+f-b-5;return{x:i,y:j}}function Hd(a,b){var c=a.length,d;for(d=0;d<c;d++)a[d].ss_i=d;a.sort(function(e,f){var g=b(e,f);return g===0?e.ss_i-f.ss_i:g});for(d=0;d<c;d++)delete a[d].ss_i}
function Ac(a){for(var b in a){a[b]&&a[b].destroy&&a[b].destroy();delete a[b]}}function oc(a,b){Bc=A(a,b.animation)}function Id(){var a=Xa.global.useUTC;Qc=a?Date.UTC:function(b,c,d,e,f,g){return(new Date(b,c,A(d,1),A(e,0),A(f,0),A(g,0))).getTime()};id=a?"getUTCMinutes":"getMinutes";jd=a?"getUTCHours":"getHours";kd=a?"getUTCDay":"getDay";Cc=a?"getUTCDate":"getDate";Rc=a?"getUTCMonth":"getMonth";Sc=a?"getUTCFullYear":"getFullYear";Jd=a?"setUTCMinutes":"setMinutes";Kd=a?"setUTCHours":"setHours";ld=
a?"setUTCDate":"setDate";Ld=a?"setUTCMonth":"setMonth";Md=a?"setUTCFullYear":"setFullYear"}function pc(a){Tc||(Tc=hb(Tb));a&&Tc.appendChild(a);Tc.innerHTML=""}function Uc(){}function Nd(a,b){function c(p){function q(k,n){this.pos=k;this.minor=n;this.isNew=true;n||this.addLabel()}function w(k){if(k){this.options=k;this.id=k.id}return this}function x(k,n,t,r){this.isNegative=n;this.options=k;this.x=t;this.stack=r;this.alignOptions={align:k.align||(va?n?"left":"right":"center"),verticalAlign:k.verticalAlign||
(va?"middle":n?"bottom":"top"),y:A(k.y,va?4:n?14:-6),x:A(k.x,va?n?-6:6:0)};this.textAlign=k.textAlign||(va?n?"right":"left":"center")}function V(){var k=[],n=[],t;pa=wa=null;zb=[];u(Ha,function(r){t=false;u(["xAxis","yAxis"],function(F){if(r.isCartesian&&(F==="xAxis"&&xa||F==="yAxis"&&!xa)&&(r.options[F]===o.index||r.options[F]===Wa&&o.index===0)){r[F]=I;zb.push(r);t=true}});if(!r.visible&&z.ignoreHiddenSeries)t=false;if(t){var J,E,Q,fa,ka,$;if(!xa){J=r.options.stacking;Vc=J==="percent";if(J){ka=
r.options.stack;fa=r.type+A(ka,"");$="-"+fa;r.stackKey=fa;E=k[fa]||[];k[fa]=E;Q=n[$]||[];n[$]=Q}if(Vc){pa=0;wa=99}}if(r.isCartesian){u(r.data,function(F){var O=F.x,S=F.y,aa=S<0,Eb=aa?Q:E,kb=aa?$:fa;if(pa===null)pa=wa=F[qa];if(xa)if(O>wa)wa=O;else{if(O<pa)pa=O}else if(K(S)){if(J)Eb[O]=K(Eb[O])?Eb[O]+S:S;S=Eb?Eb[O]:S;F=A(F.low,S);if(!Vc)if(S>wa)wa=S;else if(F<pa)pa=F;if(J){s[kb]||(s[kb]={});s[kb][O]||(s[kb][O]=new x(o.stackLabels,aa,O,ka));s[kb][O].setTotal(S)}}});if(/(area|column|bar)/.test(r.type)&&
!xa)if(pa>=0){pa=0;Od=true}else if(wa<0){wa=0;Pd=true}}}})}function N(k,n){var t,r;Fb=n?1:Fa.pow(10,lb(Fa.log(k)/Fa.LN10));t=k/Fb;if(!n){n=[1,2,2.5,5,10];if(o.allowDecimals===false||ca)if(Fb===1)n=[1,2,5,10];else if(Fb<=0.1)n=[1/Fb]}for(r=0;r<n.length;r++){k=n[r];if(t<=(n[r]+(n[r+1]||n[r]))/2)break}k*=Fb;return k}function ta(k){var n;n=k;Fb=A(Fb,Fa.pow(10,lb(Fa.log(Ta)/Fa.LN10)));if(Fb<1){n=W(1/Fb)*10;n=W(k*n)/n}return n}function da(){var k,n,t,r,J=o.tickInterval,E=o.tickPixelInterval;k=o.maxZoom||
(xa&&!K(o.min)&&!K(o.max)?tb(l.smallestInterval*5,wa-pa):null);ya=R?Da:Aa;if(Ub){t=l[xa?"xAxis":"yAxis"][o.linkedTo];r=t.getExtremes();ia=A(r.min,r.dataMin);ra=A(r.max,r.dataMax)}else{ia=A(Vb,o.min,pa);ra=A(Gb,o.max,wa)}if(ca){ia=mc(ia);ra=mc(ra)}if(ra-ia<k){r=(k-ra+ia)/2;ia=Ia(ia-r,A(o.min,ia-r),pa);ra=tb(ia+k,A(o.max,ia+k),wa)}if(!Ya&&!Vc&&!Ub&&K(ia)&&K(ra)){k=ra-ia||1;if(!K(o.min)&&!K(Vb)&&Qd&&(pa<0||!Od))ia-=k*Qd;if(!K(o.max)&&!K(Gb)&&Rd&&(wa>0||!Pd))ra+=k*Rd}Ta=ia===ra?1:Ub&&!J&&E===t.options.tickPixelInterval?
t.tickInterval:A(J,Ya?1:(ra-ia)*E/ya);if(!D&&!K(o.tickInterval))Ta=N(Ta);I.tickInterval=Ta;Wc=o.minorTickInterval==="auto"&&Ta?Ta/5:o.minorTickInterval;if(D){Ba=[];J=Xa.global.useUTC;var Q=1E3/ub,fa=6E4/ub,ka=36E5/ub;E=864E5/ub;k=6048E5/ub;r=2592E6/ub;var $=31556952E3/ub,F=[["second",Q,[1,2,5,10,15,30]],["minute",fa,[1,2,5,10,15,30]],["hour",ka,[1,2,3,4,6,8,12]],["day",E,[1,2]],["week",k,[1,2]],["month",r,[1,2,3,4,6]],["year",$,null]],O=F[6],S=O[1],aa=O[2];for(t=0;t<F.length;t++){O=F[t];S=O[1];aa=
O[2];if(F[t+1])if(Ta<=(S*aa[aa.length-1]+F[t+1][1])/2)break}if(S===$&&Ta<5*S)aa=[1,2,5];F=N(Ta/S,aa);aa=new Date(ia*ub);aa.setMilliseconds(0);if(S>=Q)aa.setSeconds(S>=fa?0:F*lb(aa.getSeconds()/F));if(S>=fa)aa[Jd](S>=ka?0:F*lb(aa[id]()/F));if(S>=ka)aa[Kd](S>=E?0:F*lb(aa[jd]()/F));if(S>=E)aa[ld](S>=r?1:F*lb(aa[Cc]()/F));if(S>=r){aa[Ld](S>=$?0:F*lb(aa[Rc]()/F));n=aa[Sc]()}if(S>=$){n-=n%F;aa[Md](n)}S===k&&aa[ld](aa[Cc]()-aa[kd]()+o.startOfWeek);t=1;n=aa[Sc]();Q=aa.getTime()/ub;fa=aa[Rc]();for(ka=aa[Cc]();Q<
ra&&t<Da;){Ba.push(Q);if(S===$)Q=Qc(n+t*F,0)/ub;else if(S===r)Q=Qc(n,fa+t*F)/ub;else if(!J&&(S===E||S===k))Q=Qc(n,fa,ka+t*F*(S===E?1:7));else Q+=S*F;t++}Ba.push(Q);Xc=o.dateTimeLabelFormats[O[0]]}else{t=ta(lb(ia/Ta)*Ta);n=ta(md(ra/Ta)*Ta);Ba=[];for(t=ta(t);t<=n;){Ba.push(t);t=ta(t+Ta)}}if(!Ub){if(Ya||xa&&l.hasColumn){n=(Ya?1:Ta)*0.5;if(Ya||!K(A(o.min,Vb)))ia-=n;if(Ya||!K(A(o.max,Gb)))ra+=n}n=Ba[0];t=Ba[Ba.length-1];if(o.startOnTick)ia=n;else ia>n&&Ba.shift();if(o.endOnTick)ra=t;else ra<t&&Ba.pop();
Ob||(Ob={x:0,y:0});if(!D&&Ba.length>Ob[qa])Ob[qa]=Ba.length}}function Ma(){var k,n;Dc=ia;Sd=ra;V();da();Hb=fb;fb=ya/(ra-ia||1);if(!xa)for(k in s)for(n in s[k])s[k][n].cum=s[k][n].total;if(!I.isDirty)I.isDirty=ia!==Dc||ra!==Sd}function za(k){k=(new w(k)).render();Pb.push(k);return k}function eb(){var k=o.title,n=o.stackLabels,t=o.alternateGridColor,r=o.lineWidth,J,E,Q=(J=l.hasRendered)&&K(Dc)&&!isNaN(Dc);E=zb.length&&K(ia)&&K(ra);ya=R?Da:Aa;fb=ya/(ra-ia||1);cc=R?X:vb;if(E||Ub){if(Wc&&!Ya)for(E=ia+
(Ba[0]-ia)%Wc;E<=ra;E+=Wc){Wb[E]||(Wb[E]=new q(E,true));Q&&Wb[E].isNew&&Wb[E].render(null,true);Wb[E].isActive=true;Wb[E].render()}u(Ba,function($,F){if(!Ub||$>=ia&&$<=ra){Q&&mb[$].isNew&&mb[$].render(F,true);mb[$].isActive=true;mb[$].render(F)}});t&&u(Ba,function($,F){if(F%2===0&&$<ra){dc[$]||(dc[$]=new w);dc[$].options={from:$,to:Ba[F+1]!==Wa?Ba[F+1]:ra,color:t};dc[$].render();dc[$].isActive=true}});J||u((o.plotLines||[]).concat(o.plotBands||[]),function($){Pb.push((new w($)).render())})}u([mb,
Wb,dc],function($){for(var F in $)if($[F].isActive)$[F].isActive=false;else{$[F].destroy();delete $[F]}});if(r){J=X+(Oa?Da:0)+la;E=cb-vb-(Oa?Aa:0)+la;J=ga.crispLine([Za,R?X:J,R?E:ea,Ka,R?$a-Ib:J,R?E:cb-vb],r);if(La)La.animate({d:J});else La=ga.path(J).attr({stroke:o.lineColor,"stroke-width":r,zIndex:7}).add()}if(ba){J=R?X:ea;r=ja(k.style.fontSize||12);J={low:J+(R?0:ya),middle:J+ya/2,high:J+(R?ya:0)}[k.align];r=(R?ea+Aa:X)+(R?1:-1)*(Oa?-1:1)*nd+(L===2?r:0);ba[ba.isNew?"attr":"animate"]({x:R?J:r+(Oa?
Da:0)+la+(k.x||0),y:R?r-(Oa?Aa:0)+la:J+(k.y||0)});ba.isNew=false}if(n&&n.enabled){var fa,ka;n=I.stackTotalGroup;if(!n)I.stackTotalGroup=n=ga.g("stack-labels").attr({visibility:Ab,zIndex:6}).translate(X,ea).add();for(fa in s){k=s[fa];for(ka in k)k[ka].render(n)}}I.isDirty=false}function ab(k){for(var n=Pb.length;n--;)Pb[n].id===k&&Pb[n].destroy()}var xa=p.isX,Oa=p.opposite,R=va?!xa:xa,L=R?Oa?0:2:Oa?1:3,s={},o=Ca(xa?Yc:od,[ge,he,Td,ie][L],p),I=this,ba,B=o.type,D=B==="datetime",ca=B==="logarithmic",
la=o.offset||0,qa=xa?"x":"y",ya,fb,Hb,cc=R?X:vb,G,ha,na,Ra,La,pa,wa,zb,Vb,Gb,ra=null,ia=null,Dc,Sd,Qd=o.minPadding,Rd=o.maxPadding,Ub=K(o.linkedTo),Od,Pd,Vc;B=o.events;var pd,Pb=[],Ta,Wc,Fb,Ba,mb={},Wb={},dc={},qc,rc,nd,Xc,Ya=o.categories,je=o.labels.formatter||function(){var k=this.value;return Xc?Zc(Xc,k):Ta%1E6===0?k/1E6+"M":Ta%1E3===0?k/1E3+"k":!Ya&&k>=1E3?Ed(k,0):k},$c=R&&o.labels.staggerLines,ec=o.reversed,fc=Ya&&o.tickmarkPlacement==="between"?0.5:0;q.prototype={addLabel:function(){var k=this.pos,
n=o.labels,t=!(k===ia&&!A(o.showFirstLabel,1)||k===ra&&!A(o.showLastLabel,0)),r=Ya&&R&&Ya.length&&!n.step&&!n.staggerLines&&!n.rotation&&Da/Ya.length||!R&&Da/2,J=Ya&&K(Ya[k])?Ya[k]:k,E=this.label;k=je.call({isFirst:k===Ba[0],isLast:k===Ba[Ba.length-1],dateTimeLabelFormat:Xc,value:ca?Fa.pow(10,J):J});r=r&&{width:Ia(1,W(r-2*(n.padding||10)))+Ua};r=sa(r,n.style);if(E===Wa)this.label=K(k)&&t&&n.enabled?ga.text(k,0,0,n.useHTML).attr({align:n.align,rotation:n.rotation}).css(r).add(na):null;else E&&E.attr({text:k}).css(r)},
getLabelSize:function(){var k=this.label;return k?(this.labelBBox=k.getBBox())[R?"height":"width"]:0},render:function(k,n){var t=!this.minor,r=this.label,J=this.pos,E=o.labels,Q=this.gridLine,fa=t?o.gridLineWidth:o.minorGridLineWidth,ka=t?o.gridLineColor:o.minorGridLineColor,$=t?o.gridLineDashStyle:o.minorGridLineDashStyle,F=this.mark,O=t?o.tickLength:o.minorTickLength,S=t?o.tickWidth:o.minorTickWidth||0,aa=t?o.tickColor:o.minorTickColor,Eb=t?o.tickPosition:o.minorTickPosition,kb=E.step,nb=n&&ad||
cb,Qb;Qb=R?G(J+fc,null,null,n)+cc:X+la+(Oa?(n&&qd||$a)-Ib-X:0);nb=R?nb-vb+la-(Oa?Aa:0):nb-G(J+fc,null,null,n)-cc;if(fa){J=ha(J+fc,fa,n);if(Q===Wa){Q={stroke:ka,"stroke-width":fa};if($)Q.dashstyle=$;if(t)Q.zIndex=1;this.gridLine=Q=fa?ga.path(J).attr(Q).add(Ra):null}!n&&Q&&J&&Q.animate({d:J})}if(S){if(Eb==="inside")O=-O;if(Oa)O=-O;t=ga.crispLine([Za,Qb,nb,Ka,Qb+(R?0:-O),nb+(R?O:0)],S);if(F)F.animate({d:t});else this.mark=ga.path(t).attr({stroke:aa,"stroke-width":S}).add(na)}if(r&&!isNaN(Qb)){Qb=Qb+
E.x-(fc&&R?fc*fb*(ec?-1:1):0);nb=nb+E.y-(fc&&!R?fc*fb*(ec?1:-1):0);K(E.y)||(nb+=ja(r.styles.lineHeight)*0.9-r.getBBox().height/2);if($c)nb+=k/(kb||1)%$c*16;if(kb)r[k%kb?"hide":"show"]();r[this.isNew?"attr":"animate"]({x:Qb,y:nb})}this.isNew=false},destroy:function(){Ac(this)}};w.prototype={render:function(){var k=this,n=k.options,t=n.label,r=k.label,J=n.width,E=n.to,Q=n.from,fa=n.value,ka,$=n.dashStyle,F=k.svgElem,O=[],S,aa,Eb=n.color;aa=n.zIndex;var kb=n.events;if(ca){Q=mc(Q);E=mc(E);fa=mc(fa)}if(J){O=
ha(fa,J);n={stroke:Eb,"stroke-width":J};if($)n.dashstyle=$}else if(K(Q)&&K(E)){Q=Ia(Q,ia);E=tb(E,ra);ka=ha(E);if((O=ha(Q))&&ka)O.push(ka[4],ka[5],ka[1],ka[2]);else O=null;n={fill:Eb}}else return;if(K(aa))n.zIndex=aa;if(F)if(O)F.animate({d:O},null,F.onGetPath);else{F.hide();F.onGetPath=function(){F.show()}}else if(O&&O.length){k.svgElem=F=ga.path(O).attr(n).add();if(kb){$=function(nb){F.on(nb,function(Qb){kb[nb].apply(k,[Qb])})};for(S in kb)$(S)}}if(t&&K(t.text)&&O&&O.length&&Da>0&&Aa>0){t=Ca({align:R&&
ka&&"center",x:R?!ka&&4:10,verticalAlign:!R&&ka&&"middle",y:R?ka?16:10:ka?6:-4,rotation:R&&!ka&&90},t);if(!r)k.label=r=ga.text(t.text,0,0).attr({align:t.textAlign||t.align,rotation:t.rotation,zIndex:aa}).css(t.style).add();ka=[O[1],O[4],A(O[6],O[1])];O=[O[2],O[5],A(O[7],O[2])];S=tb.apply(Fa,ka);aa=tb.apply(Fa,O);r.align(t,false,{x:S,y:aa,width:Ia.apply(Fa,ka)-S,height:Ia.apply(Fa,O)-aa});r.show()}else r&&r.hide();return k},destroy:function(){Ac(this);nc(Pb,this)}};x.prototype={destroy:function(){Ac(this)},
setTotal:function(k){this.cum=this.total=k},render:function(k){var n=this.options.formatter.call(this);if(this.label)this.label.attr({text:n,visibility:ob});else this.label=l.renderer.text(n,0,0).css(this.options.style).attr({align:this.textAlign,rotation:this.options.rotation,visibility:ob}).add(k)},setOffset:function(k,n){var t=this.isNegative,r=I.translate(this.total),J=I.translate(0);J=bb(r-J);var E=l.xAxis[0].translate(this.x)+k,Q=l.plotHeight;t={x:va?t?r:r-J:E,y:va?Q-E-n:t?Q-r-J:Q-r,width:va?
J:n,height:va?n:J};this.label&&this.label.align(this.alignOptions,null,t).attr({visibility:Ab})}};G=function(k,n,t,r,J){var E=1,Q=0,fa=r?Hb:fb;r=r?Dc:ia;fa||(fa=fb);if(t){E*=-1;Q=ya}if(ec){E*=-1;Q-=E*ya}if(n){if(ec)k=ya-k;k=k/fa+r;if(ca&&J)k=Fa.pow(10,k)}else{if(ca&&J)k=mc(k);k=E*(k-r)*fa+Q}return k};ha=function(k,n,t){var r,J,E;k=G(k,null,null,t);var Q=t&&ad||cb,fa=t&&qd||$a,ka;t=J=W(k+cc);r=E=W(Q-k-cc);if(isNaN(k))ka=true;else if(R){r=ea;E=Q-vb;if(t<X||t>X+Da)ka=true}else{t=X;J=fa-Ib;if(r<ea||r>
ea+Aa)ka=true}return ka?null:ga.crispLine([Za,t,r,Ka,J,E],n||0)};if(va&&xa&&ec===Wa)ec=true;sa(I,{addPlotBand:za,addPlotLine:za,adjustTickAmount:function(){if(Ob&&!D&&!Ya&&!Ub){var k=qc,n=Ba.length;qc=Ob[qa];if(n<qc){for(;Ba.length<qc;)Ba.push(ta(Ba[Ba.length-1]+Ta));fb*=(n-1)/(qc-1);ra=Ba[Ba.length-1]}if(K(k)&&qc!==k)I.isDirty=true}},categories:Ya,getExtremes:function(){return{min:ia,max:ra,dataMin:pa,dataMax:wa,userMin:Vb,userMax:Gb}},getPlotLinePath:ha,getThreshold:function(k){if(ia>k)k=ia;else if(ra<
k)k=ra;return G(k,0,1)},isXAxis:xa,options:o,plotLinesAndBands:Pb,getOffset:function(){var k=zb.length&&K(ia)&&K(ra),n=0,t=0,r=o.title,J=o.labels,E=[-1,1,1,-1][L],Q;if(!na){na=ga.g("axis").attr({zIndex:7}).add();Ra=ga.g("grid").attr({zIndex:1}).add()}rc=0;if(k||Ub){u(Ba,function(fa){if(mb[fa])mb[fa].addLabel();else mb[fa]=new q(fa);if(L===0||L===2||{1:"left",3:"right"}[L]===J.align)rc=Ia(mb[fa].getLabelSize(),rc)});if($c)rc+=($c-1)*16}else for(Q in mb){mb[Q].destroy();delete mb[Q]}if(r&&r.text){if(!ba){ba=
I.axisTitle=ga.text(r.text,0,0,r.useHTML).attr({zIndex:7,rotation:r.rotation||0,align:r.textAlign||{low:"left",middle:"center",high:"right"}[r.align]}).css(r.style).add();ba.isNew=true}n=ba.getBBox()[R?"height":"width"];t=A(r.margin,R?5:10)}la=E*(o.offset||Xb[L]);nd=rc+(L!==2&&rc&&E*o.labels[R?"y":"x"])+t;Xb[L]=Ia(Xb[L],nd+n+E*la)},render:eb,setCategories:function(k,n){I.categories=p.categories=Ya=k;u(zb,function(t){t.translate();t.setTooltipPoints(true)});I.isDirty=true;A(n,true)&&l.redraw()},setExtremes:function(k,
n,t,r){t=A(t,true);Pa(I,"setExtremes",{min:k,max:n},function(){Vb=k;Gb=n;t&&l.redraw(r)})},setScale:Ma,setTickPositions:da,translate:G,redraw:function(){Yb.resetTracker&&Yb.resetTracker();eb();u(Pb,function(k){k.render()});u(zb,function(k){k.isDirty=true})},removePlotBand:ab,removePlotLine:ab,reversed:ec,stacks:s,destroy:function(){var k;pb(I);for(k in s){Ac(s[k]);s[k]=null}if(I.stackTotalGroup)I.stackTotalGroup=I.stackTotalGroup.destroy();u([mb,Wb,dc,Pb],function(n){Ac(n)});u([La,na,Ra,ba],function(n){n&&
n.destroy()});La=na=Ra=ba=null}});for(pd in B)Qa(I,pd,B[pd]);Ma()}function d(){var p={};return{add:function(q,w,x,V){if(!p[q]){w=ga.text(w,0,0).css(a.toolbar.itemStyle).align({align:"right",x:-Ib-20,y:ea+30}).on("click",V).attr({align:"right",zIndex:20}).add();p[q]=w}},remove:function(q){pc(p[q].element);p[q]=null}}}function e(p){function q(){var B=this.points||zc(this),D=B[0].series.xAxis,ca=this.x;D=D&&D.options.type==="datetime";var la=Sb(ca)||D,qa;qa=la?['<span style="font-size: 10px">'+(D?Zc("%A, %b %e, %Y",
ca):ca)+"</span>"]:[];u(B,function(ya){qa.push(ya.point.tooltipFormatter(la))});return qa.join("<br/>")}function w(B,D){L=xa?B:(2*L+B)/3;s=xa?D:(s+D)/2;o.translate(L,s);rd=bb(B-L)>1||bb(D-s)>1?function(){w(B,D)}:null}function x(){if(!xa){var B=l.hoverPoints;o.hide();u(da,function(D){D&&D.hide()});B&&u(B,function(D){D.setState()});l.hoverPoints=null;xa=true}}var V,N=p.borderWidth,ta=p.crosshairs,da=[],Ma=p.style,za=p.shared,eb=ja(Ma.padding),ab=N+eb,xa=true,Oa,R,L=0,s=0;Ma.padding=0;var o=ga.g("tooltip").attr({zIndex:8}).add(),
I=ga.rect(ab,ab,0,0,p.borderRadius,N).attr({fill:p.backgroundColor,"stroke-width":N}).add(o).shadow(p.shadow),ba=ga.text("",eb+ab,ja(Ma.fontSize)+eb+ab,p.useHTML).attr({zIndex:1}).css(Ma).add(o);o.hide();return{shared:za,refresh:function(B){var D,ca,la,qa=0,ya={},fb=[];la=B.tooltipPos;D=p.formatter||q;ya=l.hoverPoints;if(za){ya&&u(ya,function(Hb){Hb.setState()});l.hoverPoints=B;u(B,function(Hb){Hb.setState(Bb);qa+=Hb.plotY;fb.push(Hb.getLabelConfig())});ca=B[0].plotX;qa=W(qa)/B.length;ya={x:B[0].category};
ya.points=fb;B=B[0]}else ya=B.getLabelConfig();ya=D.call(ya);V=B.series;ca=za?ca:B.plotX;qa=za?qa:B.plotY;D=W(la?la[0]:va?Da-qa:ca);ca=W(la?la[1]:va?Aa-ca:qa);la=za||!B.series.isCartesian||gc(D,ca);if(ya===false||!la)x();else{if(xa){o.show();xa=false}ba.attr({text:ya});la=ba.getBBox();Oa=la.width+2*eb;R=la.height+2*eb;I.attr({width:Oa,height:R,stroke:p.borderColor||B.color||V.color||"#606060"});D=fe(Oa,R,X,ea,Da,Aa,{x:D,y:ca});w(W(D.x-ab),W(D.y-ab))}if(ta){ta=zc(ta);for(D=ta.length;D--;){ca=B.series[D?
"yAxis":"xAxis"];if(ta[D]&&ca){ca=ca.getPlotLinePath(B[D?"y":"x"],1);if(da[D])da[D].attr({d:ca,visibility:Ab});else{la={"stroke-width":ta[D].width||1,stroke:ta[D].color||"#C0C0C0",zIndex:2};if(ta[D].dashStyle)la.dashstyle=ta[D].dashStyle;da[D]=ga.path(ca).attr(la).add()}}}}},hide:x,destroy:function(){u(da,function(B){B&&B.destroy()});u([I,ba,o],function(B){B&&B.destroy()});I=ba=o=null}}}function f(p){function q(L){var s,o=Ud&&ua.width/ua.body.scrollWidth-1,I,ba,B;L=L||db.event;if(!L.target)L.target=
L.srcElement;s=L.touches?L.touches.item(0):L;if(L.type!=="mousemove"||db.opera||o){Jb=Fd(oa);I=Jb.left;ba=Jb.top}if(Pc){B=L.x;s=L.y}else if(s.layerX===Wa){B=s.pageX-I;s=s.pageY-ba}else{B=L.layerX;s=L.layerY}if(o){B+=W((o+1)*I-I);s+=W((o+1)*ba-ba)}return sa(L,{chartX:B,chartY:s})}function w(L){var s={xAxis:[],yAxis:[]};u(Va,function(o){var I=o.translate,ba=o.isXAxis;s[ba?"xAxis":"yAxis"].push({axis:o,value:I((va?!ba:ba)?L.chartX-X:Aa-L.chartY+ea,true)})});return s}function x(){var L=l.hoverSeries,
s=l.hoverPoint;s&&s.onMouseOut();L&&L.onMouseOut();hc&&hc.hide();sd=null}function V(){if(za){var L={xAxis:[],yAxis:[]},s=za.getBBox(),o=s.x-X,I=s.y-ea;if(Ma){u(Va,function(ba){var B=ba.translate,D=ba.isXAxis,ca=va?!D:D,la=B(ca?o:Aa-I-s.height,true,0,0,1);B=B(ca?o+s.width:Aa-I,true,0,0,1);L[D?"xAxis":"yAxis"].push({axis:ba,min:tb(la,B),max:Ia(la,B)})});Pa(l,"selection",L,td)}za=za.destroy()}l.mouseIsDown=ud=Ma=false;pb(ua,Kb?"touchend":"mouseup",V)}function N(L){var s=K(L.pageX)?L.pageX:L.page.x;L=
K(L.pageX)?L.pageY:L.page.y;Jb&&!gc(s-Jb.left-X,L-Jb.top-ea)&&x()}var ta,da,Ma,za,eb=z.zoomType,ab=/x/.test(eb),xa=/y/.test(eb),Oa=ab&&!va||xa&&va,R=xa&&!va||ab&&va;bd=function(){if(Ec){Ec.translate(X,ea);va&&Ec.attr({width:l.plotWidth,height:l.plotHeight}).invert()}else l.trackerGroup=Ec=ga.g("tracker").attr({zIndex:9}).add()};bd();if(p.enabled)l.tooltip=hc=e(p);(function(){oa.onmousedown=function(s){s=q(s);!Kb&&s.preventDefault&&s.preventDefault();l.mouseIsDown=ud=true;ta=s.chartX;da=s.chartY;Qa(ua,
Kb?"touchend":"mouseup",V)};var L=function(s){if(!(s&&s.touches&&s.touches.length>1)){s=q(s);if(!Kb)s.returnValue=false;var o=s.chartX,I=s.chartY,ba=!gc(o-X,I-ea);Jb||(Jb=Fd(oa));if(Kb&&s.type==="touchstart")if(Ga(s.target,"isTracker"))l.runTrackerClick||s.preventDefault();else!ke&&!ba&&s.preventDefault();if(ba){if(o<X)o=X;else if(o>X+Da)o=X+Da;if(I<ea)I=ea;else if(I>ea+Aa)I=ea+Aa}if(ud&&s.type!=="touchstart"){Ma=Math.sqrt(Math.pow(ta-o,2)+Math.pow(da-I,2));if(Ma>10){if(sc&&(ab||xa)&&gc(ta-X,da-ea))za||
(za=ga.rect(X,ea,Oa?1:Da,R?1:Aa,0).attr({fill:z.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add());if(za&&Oa){o=o-ta;za.attr({width:bb(o),x:(o>0?0:o)+ta})}if(za&&R){I=I-da;za.attr({height:bb(I),y:(I>0?0:I)+da})}}}else if(!ba){var B;I=l.hoverPoint;o=l.hoverSeries;var D,ca,la=$a,qa=va?s.chartY:s.chartX-X;if(hc&&p.shared){B=[];D=Ha.length;for(ca=0;ca<D;ca++)if(Ha[ca].visible&&Ha[ca].tooltipPoints.length){s=Ha[ca].tooltipPoints[qa];s._dist=bb(qa-s.plotX);la=tb(la,s._dist);B.push(s)}for(D=
B.length;D--;)B[D]._dist>la&&B.splice(D,1);if(B.length&&B[0].plotX!==sd){hc.refresh(B);sd=B[0].plotX}}if(o&&o.tracker)(s=o.tooltipPoints[qa])&&s!==I&&s.onMouseOver()}return ba||!sc}};oa.onmousemove=L;Qa(oa,"mouseleave",x);Qa(ua,"mousemove",N);oa.ontouchstart=function(s){if(ab||xa)oa.onmousedown(s);L(s)};oa.ontouchmove=L;oa.ontouchend=function(){Ma&&x()};oa.onclick=function(s){var o=l.hoverPoint;s=q(s);s.cancelBubble=true;if(!Ma)if(o&&Ga(s.target,"isTracker")){var I=o.plotX,ba=o.plotY;sa(o,{pageX:Jb.left+
X+(va?Da-ba:I),pageY:Jb.top+ea+(va?Aa-I:ba)});Pa(o.series,"click",sa(s,{point:o}));o.firePointEvent("click",s)}else{sa(s,w(s));gc(s.chartX-X,s.chartY-ea)&&Pa(l,"click",s)}Ma=false}})();Vd=setInterval(function(){rd&&rd()},32);sa(this,{zoomX:ab,zoomY:xa,resetTracker:x,destroy:function(){if(l.trackerGroup)l.trackerGroup=Ec=l.trackerGroup.destroy();pb(ua,"mousemove",N);oa.onclick=oa.onmousedown=oa.onmousemove=oa.ontouchstart=oa.ontouchend=oa.ontouchmove=null}})}function g(p){var q=p.type||z.type||z.defaultSeriesType,
w=wb[q],x=l.hasRendered;if(x)if(va&&q==="column")w=wb.bar;else if(!va&&q==="bar")w=wb.column;q=new w;q.init(l,p);if(!x&&q.inverted)va=true;if(q.isCartesian)sc=q.isCartesian;Ha.push(q);return q}function h(){z.alignTicks!==false&&u(Va,function(p){p.adjustTickAmount()});Ob=null}function i(p){var q=l.isDirtyLegend,w,x=l.isDirtyBox,V=Ha.length,N=V,ta=l.clipRect;for(oc(p,l);N--;){p=Ha[N];if(p.isDirty&&p.options.stacking){w=true;break}}if(w)for(N=V;N--;){p=Ha[N];if(p.options.stacking)p.isDirty=true}u(Ha,
function(da){if(da.isDirty){da.cleanData();da.getSegments();if(da.options.legendType==="point")q=true}});if(q&&Fc.renderLegend){Fc.renderLegend();l.isDirtyLegend=false}if(sc){if(!cd){Ob=null;u(Va,function(da){da.setScale()})}h();Gc();u(Va,function(da){if(da.isDirty||x){da.redraw();x=true}})}if(x){vd();bd();if(ta){Hc(ta);ta.animate({width:l.plotSizeX,height:l.plotSizeY})}}u(Ha,function(da){if(da.isDirty&&da.visible&&(!da.isCartesian||da.xAxis))da.redraw()});Yb&&Yb.resetTracker&&Yb.resetTracker();Pa(l,
"redraw")}function j(){var p=a.xAxis||{},q=a.yAxis||{},w;p=zc(p);u(p,function(x,V){x.index=V;x.isX=true});q=zc(q);u(q,function(x,V){x.index=V});Va=p.concat(q);l.xAxis=[];l.yAxis=[];Va=tc(Va,function(x){w=new c(x);l[w.isXAxis?"xAxis":"yAxis"].push(w);return w});h()}function m(p,q){uc=Ca(a.title,p);Ic=Ca(a.subtitle,q);u([["title",p,uc],["subtitle",q,Ic]],function(w){var x=w[0],V=l[x],N=w[1];w=w[2];if(V&&N)V=V.destroy();if(w&&w.text&&!V)l[x]=ga.text(w.text,0,0,w.useHTML).attr({align:w.align,"class":"highcharts-"+
x,zIndex:1}).css(w.style).add().align(w,false,Rb)})}function v(){qb=z.renderTo;Wd=vc+wd++;if(Sb(qb))qb=ua.getElementById(qb);qb.innerHTML="";if(!qb.offsetWidth){Zb=qb.cloneNode(0);Ja(Zb,{position:ic,top:"-9999px",display:""});ua.body.appendChild(Zb)}dd=(Zb||qb).offsetWidth;Jc=(Zb||qb).offsetHeight;l.chartWidth=$a=z.width||dd||600;l.chartHeight=cb=z.height||(Jc>19?Jc:400);l.container=oa=hb(Tb,{className:"highcharts-container"+(z.className?" "+z.className:""),id:Wd},sa({position:Xd,overflow:ob,width:$a+
Ua,height:cb+Ua,textAlign:"left"},z.style),Zb||qb);l.renderer=ga=z.forExport?new ed(oa,$a,cb,true):new fd(oa,$a,cb);var p,q;if(Yd&&oa.getBoundingClientRect){p=function(){Ja(oa,{left:0,top:0});q=oa.getBoundingClientRect();Ja(oa,{left:-(q.left-ja(q.left))+Ua,top:-(q.top-ja(q.top))+Ua})};p();Qa(db,"resize",p);Qa(l,"destroy",function(){pb(db,"resize",p)})}}function P(){function p(){var w=z.width||qb.offsetWidth,x=z.height||qb.offsetHeight;if(w&&x){if(w!==dd||x!==Jc){clearTimeout(q);q=setTimeout(function(){xd(w,
x,false)},100)}dd=w;Jc=x}}var q;Qa(db,"resize",p);Qa(l,"destroy",function(){pb(db,"resize",p)})}function T(){Pa(l,"endResize",null,function(){cd-=1})}function Y(){var p=a.labels,q=a.credits,w;m();Fc=l.legend=new le;Gc();u(Va,function(x){x.setTickPositions(true)});h();Gc();vd();sc&&u(Va,function(x){x.render()});if(!l.seriesGroup)l.seriesGroup=ga.g("series-group").attr({zIndex:3}).add();u(Ha,function(x){x.translate();x.setTooltipPoints();x.render()});p.items&&u(p.items,function(){var x=sa(p.style,this.style),
V=ja(x.left)+X,N=ja(x.top)+ea+12;delete x.left;delete x.top;ga.text(this.html,V,N).attr({zIndex:2}).css(x).add()});if(!l.toolbar)l.toolbar=d();if(q.enabled&&!l.credits){w=q.href;l.credits=ga.text(q.text,0,0).on("click",function(){if(w)location.href=w}).attr({align:q.position.align,zIndex:8}).css(q.style).add().align(q.position)}bd();l.hasRendered=true;if(Zb){qb.appendChild(oa);pc(Zb)}}function H(){var p,q=oa&&oa.parentNode;if(l!==null){Pa(l,"destroy");pb(db,"unload",H);pb(l);for(p=Va.length;p--;)Va[p]=
Va[p].destroy();for(p=Ha.length;p--;)Ha[p]=Ha[p].destroy();u(["title","subtitle","seriesGroup","clipRect","credits","tracker"],function(w){var x=l[w];if(x)l[w]=x.destroy()});u([wc,xc,Kc,Fc,hc,ga,Yb],function(w){w&&w.destroy&&w.destroy()});wc=xc=Kc=Fc=hc=ga=Yb=null;if(oa){oa.innerHTML="";pb(oa);q&&pc(oa);oa=null}clearInterval(Vd);for(p in l)delete l[p];l=null}}function U(){if(!Lc&&db==db.top&&ua.readyState!=="complete")ua.attachEvent("onreadystatechange",function(){ua.detachEvent("onreadystatechange",
U);ua.readyState==="complete"&&U()});else{v();yd();zd();u(a.series||[],function(p){g(p)});l.inverted=va=A(va,a.chart.inverted);j();l.render=Y;l.tracker=Yb=new f(a.tooltip);Y();Pa(l,"load");b&&b.apply(l,[l]);u(l.callbacks,function(p){p.apply(l,[l])})}}Yc=Ca(Yc,Xa.xAxis);od=Ca(od,Xa.yAxis);Xa.xAxis=Xa.yAxis=null;a=Ca(Xa,a);var z=a.chart,M=z.margin;M=Nb(M)?M:[M,M,M,M];var y=A(z.marginTop,M[0]),C=A(z.marginRight,M[1]),Z=A(z.marginBottom,M[2]),Sa=A(z.marginLeft,M[3]),Na=z.spacingTop,Ea=z.spacingRight,
gb=z.spacingBottom,Lb=z.spacingLeft,Rb,uc,Ic,ea,Ib,vb,X,Xb,qb,Zb,oa,Wd,dd,Jc,$a,cb,qd,ad,wc,Kc,Ad,xc,l=this,ke=(M=z.events)&&!!M.click,Bd,gc,hc,ud,jc,Zd,Cd,Aa,Da,Yb,Ec,bd,Fc,$b,ac,Jb,sc=z.showAxes,cd=0,Va=[],Ob,Ha=[],va,ga,rd,Vd,sd,vd,Gc,yd,zd,xd,td,$d,le=function(){function p(G,ha){var na=G.legendItem,Ra=G.legendLine,La=G.legendSymbol,pa=Oa.color,wa=ha?N.itemStyle.color:pa,zb=ha?G.color:pa;pa=ha?G.pointAttr[ib]:{stroke:pa,fill:pa};na&&na.css({fill:wa});Ra&&Ra.attr({stroke:zb});La&&La.attr(pa)}function q(G,
ha,na){var Ra=G.legendItem,La=G.legendLine,pa=G.legendSymbol;G=G.checkbox;Ra&&Ra.attr({x:ha,y:na});La&&La.translate(ha,na-4);pa&&pa.attr({x:ha+pa.xOff,y:na+pa.yOff});if(G){G.x=ha;G.y=na}}function w(){u(za,function(G){var ha=G.checkbox,na=qa.alignAttr;ha&&Ja(ha,{left:na.translateX+G.legendItemWidth+ha.x-40+Ua,top:na.translateY+ha.y-11+Ua})})}function x(G){var ha,na,Ra,La,pa=G.legendItem;La=G.series||G;var wa=La.options,zb=wa&&wa.borderWidth||0;if(!pa){La=/^(bar|pie|area|column)$/.test(La.type);G.legendItem=
pa=ga.text(N.labelFormatter.call(G),0,0).css(G.visible?ab:Oa).on("mouseover",function(){G.setState(Bb);pa.css(xa)}).on("mouseout",function(){pa.css(G.visible?ab:Oa);G.setState()}).on("click",function(){var Gb=function(){G.setVisible()};G.firePointEvent?G.firePointEvent("legendItemClick",null,Gb):Pa(G,"legendItemClick",null,Gb)}).attr({zIndex:2}).add(qa);if(!La&&wa&&wa.lineWidth){var Vb={"stroke-width":wa.lineWidth,zIndex:2};if(wa.dashStyle)Vb.dashstyle=wa.dashStyle;G.legendLine=ga.path([Za,-da-Ma,
0,Ka,-Ma,0]).attr(Vb).add(qa)}if(La)ha=ga.rect(na=-da-Ma,Ra=-11,da,12,2).attr({zIndex:3}).add(qa);else if(wa&&wa.marker&&wa.marker.enabled)ha=ga.symbol(G.symbol,na=-da/2-Ma,Ra=-4,wa.marker.radius).attr({zIndex:3}).add(qa);if(ha){ha.xOff=na+zb%2/2;ha.yOff=Ra+zb%2/2}G.legendSymbol=ha;p(G,G.visible);if(wa&&wa.showCheckbox){G.checkbox=hb("input",{type:"checkbox",checked:G.selected,defaultChecked:G.selected},N.itemCheckboxStyle,oa);Qa(G.checkbox,"click",function(Gb){Pa(G,"checkboxClick",{checked:Gb.target.checked},
function(){G.select()})})}}ha=pa.getBBox();na=G.legendItemWidth=N.itemWidth||da+Ma+ha.width+R;B=ha.height;if(ta&&o-s+na>(fb||$a-2*R-s)){o=s;I+=B}ba=I;q(G,o,I);if(ta)o+=na;else I+=B;ya=fb||Ia(ta?o-s:na,ya)}function V(){o=s;I=L;ba=ya=0;qa||(qa=ga.g("legend").attr({zIndex:7}).add());za=[];u(Hb,function(Ra){var La=Ra.options;if(La.showInLegend)za=za.concat(La.legendType==="point"?Ra.data:Ra)});Hd(za,function(Ra,La){return(Ra.options.legendIndex||0)-(La.options.legendIndex||0)});cc&&za.reverse();u(za,
x);$b=fb||ya;ac=ba-L+B;if(ca||la){$b+=2*R;ac+=2*R;if(D){if($b>0&&ac>0){D[D.isNew?"attr":"animate"](D.crisp(null,null,null,$b,ac));D.isNew=false}}else{D=ga.rect(0,0,$b,ac,N.borderRadius,ca||0).attr({stroke:N.borderColor,"stroke-width":ca||0,fill:la||jb}).add(qa).shadow(N.shadow);D.isNew=true}D[za.length?"show":"hide"]()}for(var G=["left","right","top","bottom"],ha,na=4;na--;){ha=G[na];if(eb[ha]&&eb[ha]!=="auto"){N[na<2?"align":"verticalAlign"]=ha;N[na<2?"x":"y"]=ja(eb[ha])*(na%2?-1:1)}}za.length&&
qa.align(sa(N,{width:$b,height:ac}),true,Rb);cd||w()}var N=l.options.legend;if(N.enabled){var ta=N.layout==="horizontal",da=N.symbolWidth,Ma=N.symbolPadding,za,eb=N.style,ab=N.itemStyle,xa=N.itemHoverStyle,Oa=N.itemHiddenStyle,R=ja(eb.padding),L=18,s=4+R+da+Ma,o,I,ba,B=0,D,ca=N.borderWidth,la=N.backgroundColor,qa,ya,fb=N.width,Hb=l.series,cc=N.reversed;V();Qa(l,"endResize",w);return{colorizeItem:p,destroyItem:function(G){var ha=G.checkbox;u(["legendItem","legendLine","legendSymbol"],function(na){G[na]&&
G[na].destroy()});ha&&pc(G.checkbox)},renderLegend:V,destroy:function(){if(D)D=D.destroy();if(qa)qa=qa.destroy()}}}};gc=function(p,q){return p>=0&&p<=Da&&q>=0&&q<=Aa};$d=function(){Pa(l,"selection",{resetSelection:true},td);l.toolbar.remove("zoom")};td=function(p){var q=Xa.lang,w=l.pointCount<100;l.toolbar.add("zoom",q.resetZoom,q.resetZoomTitle,$d);!p||p.resetSelection?u(Va,function(x){x.setExtremes(null,null,false,w)}):u(p.xAxis.concat(p.yAxis),function(x){var V=x.axis;if(l.tracker[V.isXAxis?"zoomX":
"zoomY"])V.setExtremes(x.min,x.max,false,w)});i()};Gc=function(){var p=a.legend,q=A(p.margin,10),w=p.x,x=p.y,V=p.align,N=p.verticalAlign,ta;yd();if((l.title||l.subtitle)&&!K(y))if(ta=Ia(l.title&&!uc.floating&&!uc.verticalAlign&&uc.y||0,l.subtitle&&!Ic.floating&&!Ic.verticalAlign&&Ic.y||0))ea=Ia(ea,ta+A(uc.margin,15)+Na);if(p.enabled&&!p.floating)if(V==="right")K(C)||(Ib=Ia(Ib,$b-w+q+Ea));else if(V==="left")K(Sa)||(X=Ia(X,$b+w+q+Lb));else if(N==="top")K(y)||(ea=Ia(ea,ac+x+q+Na));else if(N==="bottom")K(Z)||
(vb=Ia(vb,ac-x+q+gb));sc&&u(Va,function(da){da.getOffset()});K(Sa)||(X+=Xb[3]);K(y)||(ea+=Xb[0]);K(Z)||(vb+=Xb[2]);K(C)||(Ib+=Xb[1]);zd()};xd=function(p,q,w){var x=l.title,V=l.subtitle;cd+=1;oc(w,l);ad=cb;qd=$a;l.chartWidth=$a=W(p);l.chartHeight=cb=W(q);Ja(oa,{width:$a+Ua,height:cb+Ua});ga.setSize($a,cb,w);Da=$a-X-Ib;Aa=cb-ea-vb;Ob=null;u(Va,function(N){N.isDirty=true;N.setScale()});u(Ha,function(N){N.isDirty=true});l.isDirtyLegend=true;l.isDirtyBox=true;Gc();x&&x.align(null,null,Rb);V&&V.align(null,
null,Rb);i(w);ad=null;Pa(l,"resize");Bc===false?T():setTimeout(T,Bc&&Bc.duration||500)};zd=function(){l.plotLeft=X=W(X);l.plotTop=ea=W(ea);l.plotWidth=Da=W($a-X-Ib);l.plotHeight=Aa=W(cb-ea-vb);l.plotSizeX=va?Aa:Da;l.plotSizeY=va?Da:Aa;Rb={x:Lb,y:Na,width:$a-Lb-Ea,height:cb-Na-gb}};yd=function(){ea=A(y,Na);Ib=A(C,Ea);vb=A(Z,gb);X=A(Sa,Lb);Xb=[0,0,0,0]};vd=function(){var p=z.borderWidth||0,q=z.backgroundColor,w=z.plotBackgroundColor,x=z.plotBackgroundImage,V,N={x:X,y:ea,width:Da,height:Aa};V=p+(z.shadow?
8:0);if(p||q)if(wc)wc.animate(wc.crisp(null,null,null,$a-V,cb-V));else wc=ga.rect(V/2,V/2,$a-V,cb-V,z.borderRadius,p).attr({stroke:z.borderColor,"stroke-width":p,fill:q||jb}).add().shadow(z.shadow);if(w)if(Kc)Kc.animate(N);else Kc=ga.rect(X,ea,Da,Aa,0).attr({fill:w}).add().shadow(z.plotShadow);if(x)if(Ad)Ad.animate(N);else Ad=ga.image(x,X,ea,Da,Aa).add();if(z.plotBorderWidth)if(xc)xc.animate(xc.crisp(null,X,ea,Da,Aa));else xc=ga.rect(X,ea,Da,Aa,0,z.plotBorderWidth).attr({stroke:z.plotBorderColor,
"stroke-width":z.plotBorderWidth,zIndex:4}).add();l.isDirtyBox=false};Qa(db,"unload",H);z.reflow!==false&&Qa(l,"load",P);if(M)for(Bd in M)Qa(l,Bd,M[Bd]);l.options=a;l.series=Ha;l.addSeries=function(p,q,w){var x;if(p){oc(w,l);q=A(q,true);Pa(l,"addSeries",{options:p},function(){x=g(p);x.isDirty=true;l.isDirtyLegend=true;q&&l.redraw()})}return x};l.animation=A(z.animation,true);l.destroy=H;l.get=function(p){var q,w,x;for(q=0;q<Va.length;q++)if(Va[q].options.id===p)return Va[q];for(q=0;q<Ha.length;q++)if(Ha[q].options.id===
p)return Ha[q];for(q=0;q<Ha.length;q++){x=Ha[q].data;for(w=0;w<x.length;w++)if(x[w].id===p)return x[w]}return null};l.getSelectedPoints=function(){var p=[];u(Ha,function(q){p=p.concat(Dd(q.data,function(w){return w.selected}))});return p};l.getSelectedSeries=function(){return Dd(Ha,function(p){return p.selected})};l.hideLoading=function(){gd(jc,{opacity:0},{duration:a.loading.hideDuration,complete:function(){Ja(jc,{display:jb})}});Cd=false};l.isInsidePlot=gc;l.redraw=i;l.setSize=xd;l.setTitle=m;l.showLoading=
function(p){var q=a.loading;if(!jc){jc=hb(Tb,{className:"highcharts-loading"},sa(q.style,{left:X+Ua,top:ea+Ua,width:Da+Ua,height:Aa+Ua,zIndex:10,display:jb}),oa);Zd=hb("span",null,q.labelStyle,jc)}Zd.innerHTML=p||a.lang.loading;if(!Cd){Ja(jc,{opacity:0,display:""});gd(jc,{opacity:q.style.opacity},{duration:q.showDuration});Cd=true}};l.pointCount=0;l.counters=new Gd;U()}var ua=document,db=window,Fa=Math,W=Fa.round,lb=Fa.floor,md=Fa.ceil,Ia=Fa.max,tb=Fa.min,bb=Fa.abs,rb=Fa.cos,Cb=Fa.sin,kc=Fa.PI,ae=
kc*2/360,yc=navigator.userAgent,Pc=/msie/i.test(yc)&&!db.opera,Mc=ua.documentMode===8,Ud=/AppleWebKit/.test(yc),Yd=/Firefox/.test(yc),Lc=!!ua.createElementNS&&!!ua.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,me=Yd&&parseInt(yc.split("Firefox/")[1],10)<4,fd,Kb=ua.documentElement.ontouchstart!==undefined,be={},wd=0,ub=1,Tc,Xa,Zc,Bc,Nc,Wa,Tb="div",ic="absolute",Xd="relative",ob="hidden",vc="highcharts-",Ab="visible",Ua="px",jb="none",Za="M",Ka="L",ce="rgba(192,192,192,"+(Lc?1.0E-6:
0.0020)+")",ib="",Bb="hover",Qc,id,jd,kd,Cc,Rc,Sc,Jd,Kd,ld,Ld,Md,ma=db.HighchartsAdapter,Db=ma||{},u=Db.each,Dd=Db.grep,tc=Db.map,Ca=Db.merge,Qa=Db.addEvent,pb=Db.removeEvent,Pa=Db.fireEvent,gd=Db.animate,Hc=Db.stop,wb={};Zc=function(a,b,c){function d(P){return P.toString().replace(/^([0-9])$/,"0$1")}if(!K(b)||isNaN(b))return"Invalid date";a=A(a,"%Y-%m-%d %H:%M:%S");b=new Date(b*ub);var e,f=b[jd](),g=b[kd](),h=b[Cc](),i=b[Rc](),j=b[Sc](),m=Xa.lang,v=m.weekdays;b={a:v[g].substr(0,3),A:v[g],d:d(h),
e:h,b:m.shortMonths[i],B:m.months[i],m:d(i+1),y:j.toString().substr(2,2),Y:j,H:d(f),I:d(f%12||12),l:f%12||12,M:d(b[id]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:d(b.getSeconds())};for(e in b)a=a.replace("%"+e,b[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};Gd.prototype={wrapColor:function(a){if(this.color>=a)this.color=0},wrapSymbol:function(a){if(this.symbol>=a)this.symbol=0}};Nc={init:function(a,b,c){b=b||"";var d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g;b=b.split(" ");c=[].concat(c);var h,
i,j=function(m){for(g=m.length;g--;)m[g]===Za&&m.splice(g+1,0,m[g+1],m[g+2],m[g+1],m[g+2])};if(e){j(b);j(c)}if(a.isArea){h=b.splice(b.length-6,6);i=c.splice(c.length-6,6)}if(d){c=[].concat(c).splice(0,f).concat(c);a.shift=false}if(b.length)for(a=c.length;b.length<a;){d=[].concat(b).splice(b.length-f,f);if(e){d[f-6]=d[f-2];d[f-5]=d[f-1]}b=b.concat(d)}if(h){b=b.concat(h);c=c.concat(i)}return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=d;else if(f===b.length&&c<1)for(;f--;){d=parseFloat(a[f]);
e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d}else e=b;return e}};ma&&ma.init&&ma.init(Nc);if(!ma&&db.jQuery){var Mb=jQuery;u=function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===false)return c};Dd=Mb.grep;tc=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)c[d]=b.call(a[d],a[d],d,a);return c};Ca=function(){var a=arguments;return Mb.extend(true,null,a[0],a[1],a[2],a[3])};Qa=function(a,b,c){Mb(a).bind(b,c)};pb=function(a,b,c){var d=ua.removeEventListener?"removeEventListener":"detachEvent";
if(ua[d]&&!a[d])a[d]=function(){};Mb(a).unbind(b,c)};Pa=function(a,b,c,d){var e=Mb.Event(b),f="detached"+b;sa(e,c);if(a[b]){a[f]=a[b];a[b]=null}Mb(a).trigger(e);if(a[f]){a[b]=a[f];a[f]=null}d&&!e.isDefaultPrevented()&&d(e)};gd=function(a,b,c){var d=Mb(a);if(b.d){a.toD=b.d;b.d=1}d.stop();d.animate(b,c)};Hc=function(a){Mb(a).stop()};Mb.extend(Mb.easing,{easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}});var de=jQuery.fx,ee=de.step;u(["cur","_default","width","height"],function(a,b){var c=b?
ee:de.prototype,d=c[a],e;if(d)c[a]=function(f){f=b?f:this;e=f.elem;return e.attr?e.attr(f.prop,f.now):d.apply(this,arguments)}});ee.d=function(a){var b=a.elem;if(!a.started){var c=Nc.init(b,b.d,b.toD);a.start=c[0];a.end=c[1];a.started=true}b.attr("d",Nc.step(a.start,a.end,a.pos,b.toD))}}ma={enabled:true,align:"center",x:0,y:15,style:{color:"#666",fontSize:"11px",lineHeight:"14px"}};Xa={colors:["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],symbols:["circle",
"diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalPoint:".",resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:true},chart:{borderColor:"#4572A7",
borderRadius:5,defaultSeriesType:"line",ignoreHiddenSeries:true,spacingTop:10,spacingRight:10,spacingBottom:15,spacingLeft:10,style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',fontSize:"12px"},backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0"},title:{text:"Chart title",align:"center",y:15,style:{color:"#3E576F",fontSize:"16px"}},subtitle:{text:"",align:"center",y:30,style:{color:"#6D869F"}},plotOptions:{line:{allowPointSelect:false,showCheckbox:false,
animation:{duration:1E3},events:{},lineWidth:2,shadow:true,marker:{enabled:true,lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:Ca(ma,{enabled:false,y:-6,formatter:function(){return this.y}}),showInLegend:true,states:{hover:{marker:{}},select:{marker:{}}},stickyTracking:true}},labels:{style:{position:ic,color:"#3E576F"}},legend:{enabled:true,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},
borderWidth:1,borderColor:"#909090",borderRadius:5,shadow:false,style:{padding:"5px"},itemStyle:{cursor:"pointer",color:"#3E576F"},itemHoverStyle:{cursor:"pointer",color:"#000000"},itemHiddenStyle:{color:"#C0C0C0"},itemCheckboxStyle:{position:ic,width:"13px",height:"13px"},symbolWidth:16,symbolPadding:5,verticalAlign:"bottom",x:0,y:0},loading:{hideDuration:100,labelStyle:{fontWeight:"bold",position:Xd,top:"1em"},showDuration:100,style:{position:ic,backgroundColor:"white",opacity:0.5,textAlign:"center"}},
tooltip:{enabled:true,backgroundColor:"rgba(255, 255, 255, .85)",borderWidth:2,borderRadius:5,shadow:true,snap:Kb?25:10,style:{color:"#333333",fontSize:"12px",padding:"5px",whiteSpace:"nowrap"}},toolbar:{itemStyle:{color:"#4572A7",cursor:"pointer"}},credits:{enabled:true,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"10px"}}};var Yc={dateTimeLabelFormats:{second:"%H:%M:%S",minute:"%H:%M",
hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:false,gridLineColor:"#C0C0C0",labels:ma,lineColor:"#C0D0E0",lineWidth:1,max:null,min:null,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:false,tickColor:"#C0D0E0",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#6D869F",
fontWeight:"bold"}},type:"linear"},od=Ca(Yc,{endOnTick:true,gridLineWidth:1,tickPixelInterval:72,showLastLabel:true,labels:{align:"right",x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:true,tickWidth:0,title:{rotation:270,text:"Y-values"},stackLabels:{enabled:false,formatter:function(){return this.total},style:ma.style}}),ie={labels:{align:"right",x:-8,y:null},title:{rotation:270}},he={labels:{align:"left",x:8,y:null},title:{rotation:90}},Td={labels:{align:"center",x:0,y:14},title:{rotation:0}},
ge=Ca(Td,{labels:{y:-5}}),xb=Xa.plotOptions;ma=xb.line;xb.spline=Ca(ma);xb.scatter=Ca(ma,{lineWidth:0,states:{hover:{lineWidth:0}}});xb.area=Ca(ma,{});xb.areaspline=Ca(xb.area);xb.column=Ca(ma,{borderColor:"#FFFFFF",borderWidth:1,borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,states:{hover:{brightness:0.1,shadow:false},select:{color:"#C0C0C0",borderColor:"#000000",shadow:false}},dataLabels:{y:null,verticalAlign:null}});xb.bar=Ca(xb.column,{dataLabels:{align:"left",x:5,
y:0}});xb.pie=Ca(ma,{borderColor:"#FFFFFF",borderWidth:1,center:["50%","50%"],colorByPoint:true,dataLabels:{distance:30,enabled:true,formatter:function(){return this.point.name},y:5},legendType:"point",marker:null,size:"75%",showInLegend:false,slicedOffset:10,states:{hover:{brightness:0.1,shadow:false}}});Id();var bc=function(a){var b=[],c;(function(d){if(c=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(d))b=[ja(c[1]),ja(c[2]),ja(c[3]),parseFloat(c[4],
10)];else if(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d))b=[ja(c[1],16),ja(c[2],16),ja(c[3],16),1]})(a);return{get:function(d){return b&&!isNaN(b[0])?d==="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":d==="a"?b[3]:"rgba("+b.join(",")+")":a},brighten:function(d){if(lc(d)&&d!==0){var e;for(e=0;e<3;e++){b[e]+=ja(d*255);if(b[e]<0)b[e]=0;if(b[e]>255)b[e]=255}}return this},setOpacity:function(d){b[3]=d;return this}}};Uc.prototype={init:function(a,b){this.element=ua.createElementNS("http://www.w3.org/2000/svg",
b);this.renderer=a},animate:function(a,b,c){if(b=A(b,Bc,true)){b=Ca(b);if(c)b.complete=c;gd(this,a,b)}else{this.attr(a);c&&c()}},attr:function(a,b){var c,d,e,f,g=this.element,h=g.nodeName,i=this.renderer,j,m=this.shadows,v=this.htmlNode,P,T=this;if(Sb(a)&&K(b)){c=a;a={};a[c]=b}if(Sb(a)){c=a;if(h==="circle")c={x:"cx",y:"cy"}[c]||c;else if(c==="strokeWidth")c="stroke-width";T=Ga(g,c)||this[c]||0;if(c!=="d"&&c!=="visibility")T=parseFloat(T)}else for(c in a){j=false;d=a[c];if(c==="d"){if(d&&d.join)d=
d.join(" ");if(/(NaN| {2}|^$)/.test(d))d="M 0 0";this.d=d}else if(c==="x"&&h==="text"){for(e=0;e<g.childNodes.length;e++){f=g.childNodes[e];Ga(f,"x")===Ga(g,"x")&&Ga(f,"x",d)}if(this.rotation)Ga(g,"transform","rotate("+this.rotation+" "+d+" "+ja(a.y||Ga(g,"y"))+")")}else if(c==="fill")d=i.color(d,g,c);else if(h==="circle"&&(c==="x"||c==="y"))c={x:"cx",y:"cy"}[c]||c;else if(c==="translateX"||c==="translateY"||c==="rotation"||c==="verticalAlign"){this[c]=d;this.updateTransform();j=true}else if(c===
"stroke")d=i.color(d,g,c);else if(c==="dashstyle"){c="stroke-dasharray";d=d&&d.toLowerCase();if(d==="solid")d=jb;else if(d){d=d.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(e=d.length;e--;)d[e]=ja(d[e])*a["stroke-width"];d=d.join(",")}}else if(c==="isTracker")this[c]=d;else if(c==="width")d=ja(d);else if(c===
"align"){c="text-anchor";d={left:"start",center:"middle",right:"end"}[d]}else if(c==="title"){e=ua.createElementNS("http://www.w3.org/2000/svg","title");e.appendChild(ua.createTextNode(d));g.appendChild(e)}if(c==="strokeWidth")c="stroke-width";if(Ud&&c==="stroke-width"&&d===0)d=1.0E-6;if(this.symbolName&&/^(x|y|r|start|end|innerR)/.test(c)){if(!P){this.symbolAttr(a);P=true}j=true}if(m&&/^(width|height|visibility|x|y|d)$/.test(c))for(e=m.length;e--;)Ga(m[e],c,d);if((c==="width"||c==="height")&&h===
"rect"&&d<0)d=0;if(c==="text"){this.textStr=d;this.added&&i.buildText(this)}else j||Ga(g,c,d);if(v&&(c==="x"||c==="y"||c==="translateX"||c==="translateY"||c==="visibility")){e=v.length?v:[this];f=e.length;var Y;for(Y=0;Y<f;Y++){v=e[Y];j=v.getBBox();v=v.htmlNode;Ja(v,sa(this.styles,{left:j.x+(this.translateX||0)+Ua,top:j.y+(this.translateY||0)+Ua}));c==="visibility"&&Ja(v,{visibility:d})}}}return T},symbolAttr:function(a){var b=this;u(["x","y","r","start","end","width","height","innerR"],function(c){b[c]=
A(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](W(b.x*2)/2,W(b.y*2)/2,b.r,{start:b.start,end:b.end,width:b.width,height:b.height,innerR:b.innerR})})},clip:function(a){return this.attr("clip-path","url("+this.renderer.url+"#"+a.id+")")},crisp:function(a,b,c,d,e){var f,g={},h={},i;a=a||this.strokeWidth||0;i=a%2/2;h.x=lb(b||this.x||0)+i;h.y=lb(c||this.y||0)+i;h.width=lb((d||this.width||0)-2*i);h.height=lb((e||this.height||0)-2*i);h.strokeWidth=a;for(f in h)if(this[f]!==h[f])this[f]=g[f]=h[f];
return g},css:function(a){var b=this.element;b=a&&a.width&&b.nodeName==="text";var c,d="",e=function(f,g){return"-"+g.toLowerCase()};if(a&&a.color)a.fill=a.color;this.styles=a=sa(this.styles,a);if(Pc&&!Lc){b&&delete a.width;Ja(this.element,a)}else{for(c in a)d+=c.replace(/([A-Z])/g,e)+":"+a[c]+";";this.attr({style:d})}b&&this.added&&this.renderer.buildText(this);return this},on:function(a,b){var c=b;if(Kb&&a==="click"){a="touchstart";c=function(d){d.preventDefault();b()}}this.element["on"+a]=c;return this},
translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=true;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.inverted,d=this.rotation,e=[];if(c){a+=this.attr("width");b+=this.attr("height")}if(a||b)e.push("translate("+a+","+b+")");if(c)e.push("rotate(90) scale(-1,1)");else d&&e.push("rotate("+d+" "+this.x+" "+this.y+")");e.length&&Ga(this.element,"transform",e.join(" "))},toFront:function(){var a=
this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){if(a){this.alignOptions=a;this.alignByTranslate=b;c||this.renderer.alignedObjects.push(this)}else{a=this.alignOptions;b=this.alignByTranslate}c=A(c,this.renderer);var d=a.align,e=a.verticalAlign,f=(c.x||0)+(a.x||0),g=(c.y||0)+(a.y||0),h={};if(/^(right|center)$/.test(d))f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=W(f);if(/^(bottom|middle)$/.test(e))g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||
1);h[b?"translateY":"y"]=W(g);this[this.placed?"animate":"attr"](h);this.placed=true;this.alignAttr=h;return this},getBBox:function(){var a,b,c,d=this.rotation,e=d*ae;try{a=sa({},this.element.getBBox())}catch(f){a={width:0,height:0}}b=a.width;c=a.height;if(d){a.width=bb(c*Cb(e))+bb(b*rb(e));a.height=bb(c*rb(e))+bb(b*Cb(e))}return a},show:function(){return this.attr({visibility:Ab})},hide:function(){return this.attr({visibility:ob})},add:function(a){var b=this.renderer,c=a||b,d=c.element||b.box,e=
d.childNodes,f=this.element,g=Ga(f,"zIndex");this.parentInverted=a&&a.inverted;this.textStr!==undefined&&b.buildText(this);if(a&&this.htmlNode){if(!a.htmlNode)a.htmlNode=[];a.htmlNode.push(this)}if(g){c.handleZ=true;g=ja(g)}if(c.handleZ)for(c=0;c<e.length;c++){a=e[c];b=Ga(a,"zIndex");if(a!==f&&(ja(b)>g||!K(g)&&K(b))){d.insertBefore(f,a);return this}}d.appendChild(f);this.added=true;return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||
{},c=a.shadows,d,e;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=null;Hc(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(e=0;e<a.stops.length;e++)a.stops[e]=a.stops[e].destroy();a.stops=null}a.safeRemoveChild(b);c&&u(c,function(f){a.safeRemoveChild(f)});nc(a.renderer.alignedObjects,a);for(d in a)delete a[d];return null},empty:function(){for(var a=this.element,b=a.childNodes,c=b.length;c--;)a.removeChild(b[c])},shadow:function(a,b){var c=[],d,e,f=this.element,g=this.parentInverted?
"(-1,-1)":"(1,1)";if(a){for(d=1;d<=3;d++){e=f.cloneNode(0);Ga(e,{isShadow:"true",stroke:"rgb(0, 0, 0)","stroke-opacity":0.05*d,"stroke-width":7-2*d,transform:"translate"+g,fill:jb});b?b.element.appendChild(e):f.parentNode.insertBefore(e,f);c.push(e)}this.shadows=c}return this}};var ed=function(){this.init.apply(this,arguments)};ed.prototype={Element:Uc,init:function(a,b,c,d){var e=location,f;f=this.createElement("svg").attr({xmlns:"http://www.w3.org/2000/svg",version:"1.1"});a.appendChild(f.element);
this.box=f.element;this.boxWrapper=f;this.alignedObjects=[];this.url=Pc?"":e.href.replace(/#.*?$/,"");this.defs=this.createElement("defs").add();this.forExport=d;this.gradients=[];this.setSize(b,c,false)},destroy:function(){var a,b=this.gradients,c=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();if(b){for(a=0;a<b.length;a++)this.gradients[a]=b[a].destroy();this.gradients=null}if(c)this.defs=c.destroy();return this.alignedObjects=null},createElement:function(a){var b=new this.Element;
b.init(this,a);return b},buildText:function(a){for(var b=a.element,c=A(a.textStr,"").toString().replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g),d=b.childNodes,e=/style="([^"]+)"/,f=/href="([^"]+)"/,g=Ga(b,"x"),h=a.styles,i=h&&a.useHTML&&!this.forExport,j=a.htmlNode,m=h&&ja(h.width),v=h&&h.lineHeight,P,T=d.length;T--;)b.removeChild(d[T]);m&&!a.added&&
this.box.appendChild(b);u(c,function(Y,H){var U,z=0,M;Y=Y.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");U=Y.split("|||");u(U,function(y){if(y!==""||U.length===1){var C={},Z=ua.createElementNS("http://www.w3.org/2000/svg","tspan");e.test(y)&&Ga(Z,"style",y.match(e)[1].replace(/(;| |^)color([ :])/,"$1fill$2"));if(f.test(y)){Ga(Z,"onclick",'location.href="'+y.match(f)[1]+'"');Ja(Z,{cursor:"pointer"})}y=(y.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");Z.appendChild(ua.createTextNode(y));
if(z)C.dx=3;else C.x=g;if(!z){if(H){!Lc&&a.renderer.forExport&&Ja(Z,{display:"block"});M=db.getComputedStyle&&ja(db.getComputedStyle(P,null).getPropertyValue("line-height"));if(!M||isNaN(M))M=v||P.offsetHeight||18;Ga(Z,"dy",M)}P=Z}Ga(Z,C);b.appendChild(Z);z++;if(m){y=y.replace(/-/g,"- ").split(" ");for(var Sa,Na=[];y.length||Na.length;){Sa=b.getBBox().width;C=Sa>m;if(!C||y.length===1){y=Na;Na=[];if(y.length){Z=ua.createElementNS("http://www.w3.org/2000/svg","tspan");Ga(Z,{dy:v||16,x:g});b.appendChild(Z);
if(Sa>m)m=Sa}}else{Z.removeChild(Z.firstChild);Na.unshift(y.pop())}y.length&&Z.appendChild(ua.createTextNode(y.join(" ").replace(/- /g,"-")))}}}})});if(i){if(!j)j=a.htmlNode=hb("span",null,sa(h,{position:ic,top:0,left:0}),this.box.parentNode);j.innerHTML=a.textStr;for(T=d.length;T--;)d[T].style.visibility=ob}},crispLine:function(a,b){if(a[1]===a[4])a[1]=a[4]=W(a[1])+b%2/2;if(a[2]===a[5])a[2]=a[5]=W(a[2])+b%2/2;return a},path:function(a){return this.createElement("path").attr({d:a,fill:jb})},circle:function(a,
b,c){a=Nb(a)?a:{x:a,y:b,r:c};return this.createElement("circle").attr(a)},arc:function(a,b,c,d,e,f){if(Nb(a)){b=a.y;c=a.r;d=a.innerR;e=a.start;f=a.end;a=a.x}return this.symbol("arc",a||0,b||0,c||0,{innerR:d||0,start:e||0,end:f||0})},rect:function(a,b,c,d,e,f){if(Nb(a)){b=a.y;c=a.width;d=a.height;e=a.r;f=a.strokeWidth;a=a.x}e=this.createElement("rect").attr({rx:e,ry:e,fill:jb});return e.attr(e.crisp(f,a,b,Ia(c,0),Ia(d,0)))},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;
this.height=b;for(this.boxWrapper[A(c,true)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return K(a)?b.attr({"class":vc+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:jb};arguments.length>1&&sa(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e){var f,
g=this.symbols[a];g=g&&g(W(b),W(c),d,e);var h=/^url\((.*?)\)$/,i;if(g){f=this.path(g);sa(f,{symbolName:a,x:b,y:c,r:d});e&&sa(f,e)}else if(h.test(a)){var j=function(m,v){m.attr({width:v[0],height:v[1]}).translate(-W(v[0]/2),-W(v[1]/2))};i=a.match(h)[1];a=be[i];f=this.image(i).attr({x:b,y:c});if(a)j(f,a);else{f.attr({width:0,height:0});hb("img",{onload:function(){j(f,be[i]=[this.width,this.height])},src:i})}}else f=this.circle(b,c,d);return f},symbols:{square:function(a,b,c){c=0.707*c;return[Za,a-c,
b-c,Ka,a+c,b-c,a+c,b+c,a-c,b+c,"Z"]},triangle:function(a,b,c){return[Za,a,b-1.33*c,Ka,a+c,b+0.67*c,a-c,b+0.67*c,"Z"]},"triangle-down":function(a,b,c){return[Za,a,b+1.33*c,Ka,a-c,b-0.67*c,a+c,b-0.67*c,"Z"]},diamond:function(a,b,c){return[Za,a,b-c,Ka,a+c,b,a,b+c,a-c,b,"Z"]},arc:function(a,b,c,d){var e=d.start,f=d.end-1.0E-6,g=d.innerR,h=rb(e),i=Cb(e),j=rb(f);f=Cb(f);d=d.end-e<kc?0:1;return[Za,a+c*h,b+c*i,"A",c,c,0,d,1,a+c*j,b+c*f,Ka,a+g*j,b+g*f,"A",g,g,0,d,0,a+g*h,b+g*i,"Z"]}},clipRect:function(a,b,
c,d){var e=vc+wd++,f=this.createElement("clipPath").attr({id:e}).add(this.defs);a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;return a},color:function(a,b,c){var d,e=/^rgba/;if(a&&a.linearGradient){var f=this;b=a.linearGradient;c=vc+wd++;var g,h,i;g=f.createElement("linearGradient").attr({id:c,gradientUnits:"userSpaceOnUse",x1:b[0],y1:b[1],x2:b[2],y2:b[3]}).add(f.defs);f.gradients.push(g);g.stops=[];u(a.stops,function(j){if(e.test(j[1])){d=bc(j[1]);h=d.get("rgb");i=d.get("a")}else{h=j[1];i=1}j=
f.createElement("stop").attr({offset:j[0],"stop-color":h,"stop-opacity":i}).add(g);g.stops.push(j)});return"url("+this.url+"#"+c+")"}else if(e.test(a)){d=bc(a);Ga(b,c+"-opacity",d.get("a"));return d.get("rgb")}else{b.removeAttribute(c+"-opacity");return a}},text:function(a,b,c,d){var e=Xa.chart.style;b=W(A(b,0));c=W(A(c,0));a=this.createElement("text").attr({x:b,y:c,text:a}).css({fontFamily:e.fontFamily,fontSize:e.fontSize});a.x=b;a.y=c;a.useHTML=d;return a}};fd=ed;if(!Lc){Db=yb(Uc,{init:function(a,
b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ",ic,";"];if(b==="shape"||b===Tb)d.push("left:0;top:0;width:10px;height:10px;");if(Mc)d.push("visibility: ",b===Tb?ob:Ab);c.push(' style="',d.join(""),'"/>');if(b){c=b===Tb||b==="span"||b==="img"?c.join(""):a.prepVML(c);this.element=hb(c)}this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box;d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);Mc&&d.gVis===ob&&Ja(c,{visibility:ob});d.appendChild(c);this.added=true;this.alignOnAdd&&
this.updateTransform();return this},attr:function(a,b){var c,d,e,f=this.element||{},g=f.style,h=f.nodeName,i=this.renderer,j=this.symbolName,m,v,P=this.shadows,T=this;if(Sb(a)&&K(b)){c=a;a={};a[c]=b}if(Sb(a)){c=a;T=c==="strokeWidth"||c==="stroke-width"?this.strokeweight:this[c]}else for(c in a){d=a[c];m=false;if(j&&/^(x|y|r|start|end|width|height|innerR)/.test(c)){if(!v){this.symbolAttr(a);v=true}m=true}else if(c==="d"){d=d||[];this.d=d.join(" ");e=d.length;for(m=[];e--;)m[e]=lc(d[e])?W(d[e]*10)-
5:d[e]==="Z"?"x":d[e];d=m.join(" ")||"x";f.path=d;if(P)for(e=P.length;e--;)P[e].path=d;m=true}else if(c==="zIndex"||c==="visibility"){if(Mc&&c==="visibility"&&h==="DIV"){f.gVis=d;m=f.childNodes;for(e=m.length;e--;)Ja(m[e],{visibility:d});if(d===Ab)d=null}if(d)g[c]=d;m=true}else if(/^(width|height)$/.test(c)){this[c]=d;if(this.updateClipping){this[c]=d;this.updateClipping()}else g[c]=d;m=true}else if(/^(x|y)$/.test(c)){this[c]=d;if(f.tagName==="SPAN")this.updateTransform();else g[{x:"left",y:"top"}[c]]=
d}else if(c==="class")f.className=d;else if(c==="stroke"){d=i.color(d,f,c);c="strokecolor"}else if(c==="stroke-width"||c==="strokeWidth"){f.stroked=d?true:false;c="strokeweight";this[c]=d;if(lc(d))d+=Ua}else if(c==="dashstyle"){(f.getElementsByTagName("stroke")[0]||hb(i.prepVML(["<stroke/>"]),null,null,f))[c]=d||"solid";this.dashstyle=d;m=true}else if(c==="fill")if(h==="SPAN")g.color=d;else{f.filled=d!==jb?true:false;d=i.color(d,f,c);c="fillcolor"}else if(c==="translateX"||c==="translateY"||c==="rotation"||
c==="align"){if(c==="align")c="textAlign";this[c]=d;this.updateTransform();m=true}else if(c==="text"){this.bBox=null;f.innerHTML=d;m=true}if(P&&c==="visibility")for(e=P.length;e--;)P[e].style[c]=d;if(!m)if(Mc)f[c]=d;else Ga(f,c,d)}return T},clip:function(a){var b=this,c=a.members;c.push(b);b.destroyClip=function(){nc(c,b)};return b.css(a.getCSS(b.inverted))},css:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width){delete a.width;this.textWidth=b;this.updateTransform()}this.styles=sa(this.styles,
a);Ja(this.element,a);return this},safeRemoveChild:function(a){a.parentNode&&pc(a)},destroy:function(){this.destroyClip&&this.destroyClip();return Uc.prototype.destroy.apply(this)},empty:function(){for(var a=this.element.childNodes,b=a.length,c;b--;){c=a[b];c.parentNode.removeChild(c)}},getBBox:function(){var a=this.element,b=this.bBox;if(!b){if(a.nodeName==="text")a.style.position=ic;b=this.bBox={x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}}return b},on:function(a,b){this.element["on"+
a]=function(){var c=db.event;c.target=c.srcElement;b(c)};return this},updateTransform:function(){if(this.added){var a=this,b=a.element,c=a.translateX||0,d=a.translateY||0,e=a.x||0,f=a.y||0,g=a.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=g&&g!=="left";if(c||d)a.css({marginLeft:c,marginTop:d});a.inverted&&u(b.childNodes,function(z){a.renderer.invertChild(z,b)});if(b.tagName==="SPAN"){var j,m;c=a.rotation;var v;j=0;d=1;var P=0,T;v=ja(a.textWidth);var Y=a.xCorr||0,H=a.yCorr||0,U=[c,g,b.innerHTML,
a.textWidth].join(",");if(U!==a.cTT){if(K(c)){j=c*ae;d=rb(j);P=Cb(j);Ja(b,{filter:c?["progid:DXImageTransform.Microsoft.Matrix(M11=",d,", M12=",-P,", M21=",P,", M22=",d,", sizingMethod='auto expand')"].join(""):jb})}j=b.offsetWidth;m=b.offsetHeight;if(j>v){Ja(b,{width:v+Ua,display:"block",whiteSpace:"normal"});j=v}v=W((ja(b.style.fontSize)||12)*1.2);Y=d<0&&-j;H=P<0&&-m;T=d*P<0;Y+=P*v*(T?1-h:h);H-=d*v*(c?T?h:1-h:1);if(i){Y-=j*h*(d<0?-1:1);if(c)H-=m*h*(P<0?-1:1);Ja(b,{textAlign:g})}a.xCorr=Y;a.yCorr=
H}Ja(b,{left:e+Y,top:f+H});a.cTT=U}}else this.alignOnAdd=true},shadow:function(a,b){var c=[],d,e=this.element,f=this.renderer,g,h=e.style,i,j=e.path;if(j&&typeof j.value!=="string")j="x";if(a){for(d=1;d<=3;d++){i=['<shape isShadow="true" strokeweight="',7-2*d,'" filled="false" path="',j,'" coordsize="100,100" style="',e.style.cssText,'" />'];g=hb(f.prepVML(i),null,{left:ja(h.left)+1,top:ja(h.top)+1});i=['<stroke color="black" opacity="',0.05*d,'"/>'];hb(f.prepVML(i),null,null,g);b?b.element.appendChild(g):
e.parentNode.insertBefore(g,e);c.push(g)}this.shadows=c}return this}});ma=function(){this.init.apply(this,arguments)};ma.prototype=Ca(ed.prototype,{Element:Db,isIE8:yc.indexOf("MSIE 8.0")>-1,init:function(a,b,c){var d;this.alignedObjects=[];d=this.createElement(Tb);a.appendChild(d.element);this.box=d.element;this.boxWrapper=d;this.setSize(b,c,false);if(!ua.namespaces.hcv){ua.namespaces.add("hcv","urn:schemas-microsoft-com:vml");ua.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}},
clipRect:function(a,b,c,d){var e=this.createElement();return sa(e,{members:[],left:a,top:b,width:c,height:d,getCSS:function(f){var g=this.top,h=this.left,i=h+this.width,j=g+this.height;g={clip:"rect("+W(f?h:g)+"px,"+W(f?j:i)+"px,"+W(f?i:j)+"px,"+W(f?g:h)+"px)"};!f&&Mc&&sa(g,{width:i+Ua,height:j+Ua});return g},updateClipping:function(){u(e.members,function(f){f.css(e.getCSS(f.inverted))})}})},color:function(a,b,c){var d,e=/^rgba/;if(a&&a.linearGradient){var f,g,h=a.linearGradient,i,j,m,v;u(a.stops,
function(P,T){if(e.test(P[1])){d=bc(P[1]);f=d.get("rgb");g=d.get("a")}else{f=P[1];g=1}if(T){m=f;v=g}else{i=f;j=g}});a=90-Fa.atan((h[3]-h[1])/(h[2]-h[0]))*180/kc;a=["<",c,' colors="0% ',i,",100% ",m,'" angle="',a,'" opacity="',v,'" o:opacity2="',j,'" type="gradient" focus="100%" />'];hb(this.prepVML(a),null,null,b)}else if(e.test(a)&&b.tagName!=="IMG"){d=bc(a);a=["<",c,' opacity="',d.get("a"),'"/>'];hb(this.prepVML(a),null,null,b);return d.get("rgb")}else{b=b.getElementsByTagName(c);if(b.length)b[0].opacity=
1;return a}},prepVML:function(a){var b=this.isIE8;a=a.join("");if(b){a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />');a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')}else a=a.replace("<","<hcv:");return a},text:function(a,b,c){var d=Xa.chart.style;return this.createElement("span").attr({text:a,x:W(b),y:W(c)}).css({whiteSpace:"nowrap",fontFamily:d.fontFamily,
fontSize:d.fontSize})},path:function(a){return this.createElement("shape").attr({coordsize:"100 100",d:a})},circle:function(a,b,c){return this.symbol("circle").attr({x:a,y:b,r:c})},g:function(a){var b;if(a)b={className:vc+a,"class":vc+a};return this.createElement(Tb).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.css({left:b,top:c,width:d,height:e});return f},rect:function(a,b,c,d,e,f){if(Nb(a)){b=a.y;c=a.width;d=a.height;e=a.r;f=a.strokeWidth;
a=a.x}var g=this.symbol("rect");g.r=e;return g.attr(g.crisp(f,a,b,Ia(c,0),Ia(d,0)))},invertChild:function(a,b){var c=b.style;Ja(a,{flip:"x",left:ja(c.width)-10,top:ja(c.height)-10,rotation:-90})},symbols:{arc:function(a,b,c,d){var e=d.start,f=d.end,g=rb(e),h=Cb(e),i=rb(f),j=Cb(f);d=d.innerR;var m=0.07/c,v=d&&0.1/d||0;if(f-e===0)return["x"];else if(2*kc-f+e<m)i=-m;else if(f-e<v)i=rb(e+v);return["wa",a-c,b-c,a+c,b+c,a+c*g,b+c*h,a+c*i,b+c*j,"at",a-d,b-d,a+d,b+d,a+d*i,b+d*j,a+d*g,b+d*h,"x","e"]},circle:function(a,
b,c){return["wa",a-c,b-c,a+c,b+c,a+c,b,a+c,b,"e"]},rect:function(a,b,c,d){if(!K(d))return[];var e=d.width;d=d.height;var f=a+e,g=b+d;c=tb(c,e,d);return[Za,a+c,b,Ka,f-c,b,"wa",f-2*c,b,f,b+2*c,f-c,b,f,b+c,Ka,f,g-c,"wa",f-2*c,g-2*c,f,g,f,g-c,f-c,g,Ka,a+c,g,"wa",a,g-2*c,a+2*c,g,a+c,g,a,g-c,Ka,a,b+c,"wa",a,b,a+2*c,b+2*c,a,b+c,a+c,b,"x","e"]}}});fd=ma}Nd.prototype.callbacks=[];var Oc=function(){};Oc.prototype={init:function(a,b){var c=a.chart.counters,d;this.series=a;this.applyOptions(b);this.pointAttr=
{};if(a.options.colorByPoint){d=a.chart.options.colors;if(!this.options)this.options={};this.color=this.options.color=this.color||d[c.color++];c.wrapColor(d.length)}a.chart.pointCount++;return this},applyOptions:function(a){var b=this.series;this.config=a;if(lc(a)||a===null)this.y=a;else if(Nb(a)&&!lc(a.length)){sa(this,a);this.options=a}else if(Sb(a[0])){this.name=a[0];this.y=a[1]}else if(lc(a[0])){this.x=a[0];this.y=a[1]}if(this.x===Wa)this.x=b.autoIncrement()},destroy:function(){var a=this,b=a.series,
c=b.chart.hoverPoints,d;b.chart.pointCount--;if(c){a.setState();nc(c,a)}a===b.chart.hoverPoint&&a.onMouseOut();pb(a);u(["graphic","tracker","group","dataLabel","connector","shadowGroup"],function(e){a[e]&&a[e].destroy()});a.legendItem&&a.series.chart.legend.destroyItem(a);for(d in a)a[d]=null},getLabelConfig:function(){return{x:this.category,y:this.y,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},select:function(a,b){var c=this,d=c.series.chart;a=A(a,
!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=a;c.setState(a&&"select");b||u(d.getSelectedPoints(),function(e){if(e.selected&&e!==c){e.selected=false;e.setState(ib);e.firePointEvent("unselect")}})})},onMouseOver:function(){var a=this.series.chart,b=a.tooltip,c=a.hoverPoint;c&&c!==this&&c.onMouseOut();this.firePointEvent("mouseOver");b&&!b.shared&&b.refresh(this);this.setState(Bb);a.hoverPoint=this},onMouseOut:function(){this.firePointEvent("mouseOut");this.setState();
this.series.chart.hoverPoint=null},tooltipFormatter:function(a){var b=this.series;return['<span style="color:'+b.color+'">',this.name||b.name,"</span>: ",!a?"<b>x = "+(this.name||this.x)+",</b> ":"","<b>",!a?"y = ":"",this.y,"</b>"].join("")},update:function(a,b,c){var d=this,e=d.series,f=d.graphic,g=e.chart;b=A(b,true);d.firePointEvent("update",{options:a},function(){d.applyOptions(a);if(Nb(a)){e.getAttribs();f&&f.attr(d.pointAttr[e.state])}e.isDirty=true;b&&g.redraw(c)})},remove:function(a,b){var c=
this,d=c.series,e=d.chart,f=d.data;oc(b,e);a=A(a,true);c.firePointEvent("remove",null,function(){nc(f,c);c.destroy();d.isDirty=true;a&&e.redraw()})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;if(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])this.importEvents();if(a==="click"&&e.allowPointSelect)c=function(f){d.select(null,f.ctrlKey||f.metaKey||f.shiftKey)};Pa(this,a,b,c)},importEvents:function(){if(!this.hasImportedEvents){var a=Ca(this.series.options.point,
this.options).events,b;this.events=a;for(b in a)Qa(this,b,a[b]);this.hasImportedEvents=true}},setState:function(a){var b=this.series,c=b.options.states,d=xb[b.type].marker&&b.options.marker,e=d&&!d.enabled,f=(d=d&&d.states[a])&&d.enabled===false,g=b.stateMarkerGraphic,h=b.chart,i=this.pointAttr;a=a||ib;if(!(a===this.state||this.selected&&a!=="select"||c[a]&&c[a].enabled===false||a&&(f||e&&!d.enabled))){if(this.graphic)this.graphic.attr(i[a]);else{if(a){if(!g)b.stateMarkerGraphic=g=h.renderer.circle(0,
0,i[a].r).attr(i[a]).add(b.group);g.translate(this.plotX,this.plotY)}if(g)g[a?"show":"hide"]()}this.state=a}}};var sb=function(){};sb.prototype={isCartesian:true,type:"line",pointClass:Oc,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},init:function(a,b){var c,d;d=a.series.length;this.chart=a;b=this.setOptions(b);sa(this,{index:d,options:b,name:b.name||"Series "+(d+1),state:ib,pointAttr:{},visible:b.visible!==false,selected:b.selected===true});d=b.events;
for(c in d)Qa(this,c,d[c]);if(d&&d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=true;this.getColor();this.getSymbol();this.setData(b.data,false)},autoIncrement:function(){var a=this.options,b=this.xIncrement;b=A(b,a.pointStart,0);this.pointInterval=A(this.pointInterval,a.pointInterval,1);this.xIncrement=b+this.pointInterval;return b},cleanData:function(){var a=this.chart,b=this.data,c,d,e=a.smallestInterval,f,g;Hd(b,function(h,i){return h.x-i.x});if(this.options.connectNulls)for(g=
b.length-1;g>=0;g--)b[g].y===null&&b[g-1]&&b[g+1]&&b.splice(g,1);for(g=b.length-1;g>=0;g--)if(b[g-1]){f=b[g].x-b[g-1].x;if(f>0&&(d===Wa||f<d)){d=f;c=g}}if(e===Wa||d<e)a.smallestInterval=d;this.closestPoints=c},getSegments:function(){var a=-1,b=[],c=this.data;u(c,function(d,e){if(d.y===null){e>a+1&&b.push(c.slice(a+1,e));a=e}else e===c.length-1&&b.push(c.slice(a+1,e+1))});this.segments=b},setOptions:function(a){var b=this.chart.options.plotOptions;return Ca(b[this.type],b.series,a)},getColor:function(){var a=
this.chart.options.colors,b=this.chart.counters;this.color=this.options.color||a[b.color++]||"#0000ff";b.wrapColor(a.length)},getSymbol:function(){var a=this.chart.options.symbols,b=this.chart.counters;this.symbol=this.options.marker.symbol||a[b.symbol++];b.wrapSymbol(a.length)},addPoint:function(a,b,c,d){var e=this.data,f=this.graph,g=this.area,h=this.chart;a=(new this.pointClass).init(this,a);oc(d,h);if(f&&c)f.shift=c;if(g){g.shift=c;g.isArea=true}b=A(b,true);e.push(a);c&&e[0].remove(false);this.getAttribs();
this.isDirty=true;b&&h.redraw()},setData:function(a,b){var c=this,d=c.data,e=c.initialColor,f=c.chart,g=d&&d.length||0;c.xIncrement=null;if(K(e))f.counters.color=e;for(a=tc(zc(a||[]),function(h){return(new c.pointClass).init(c,h)});g--;)d[g].destroy();c.data=a;c.cleanData();c.getSegments();c.getAttribs();c.isDirty=true;f.isDirtyBox=true;A(b,true)&&f.redraw(false)},remove:function(a,b){var c=this,d=c.chart;a=A(a,true);if(!c.isRemoving){c.isRemoving=true;Pa(c,"remove",null,function(){c.destroy();d.isDirtyLegend=
d.isDirtyBox=true;a&&d.redraw(b)})}c.isRemoving=false},translate:function(){for(var a=this.chart,b=this.options.stacking,c=this.xAxis.categories,d=this.yAxis,e=this.data,f=e.length;f--;){var g=e[f],h=g.x,i=g.y,j=g.low,m=d.stacks[(i<0?"-":"")+this.stackKey];g.plotX=this.xAxis.translate(h);if(b&&this.visible&&m&&m[h]){j=m[h];h=j.total;j.cum=j=j.cum-i;i=j+i;if(b==="percent"){j=h?j*100/h:0;i=h?i*100/h:0}g.percentage=h?g.y*100/h:0;g.stackTotal=h}if(K(j))g.yBottom=d.translate(j,0,1,0,1);if(i!==null)g.plotY=
d.translate(i,0,1,0,1);g.clientX=a.inverted?a.plotHeight-g.plotX:g.plotX;g.category=c&&c[g.x]!==Wa?c[g.x]:g.x}},setTooltipPoints:function(a){var b=this.chart,c=b.inverted,d=[],e=W((c?b.plotTop:b.plotLeft)+b.plotSizeX),f,g,h=[];if(a)this.tooltipPoints=null;u(this.segments,function(i){d=d.concat(i)});if(this.xAxis&&this.xAxis.reversed)d=d.reverse();u(d,function(i,j){f=d[j-1]?d[j-1]._high+1:0;for(g=i._high=d[j+1]?lb((i.plotX+(d[j+1]?d[j+1].plotX:e))/2):e;f<=g;)h[c?e-f++:f++]=i});this.tooltipPoints=h},
onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(!(!Kb&&a.mouseIsDown)){b&&b!==this&&b.onMouseOut();this.options.events.mouseOver&&Pa(this,"mouseOver");this.tracker&&this.tracker.toFront();this.setState(Bb);a.hoverSeries=this}},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;d&&d.onMouseOut();this&&a.events.mouseOut&&Pa(this,"mouseOut");c&&!a.stickyTracking&&c.hide();this.setState();b.hoverSeries=null},animate:function(a){var b=this.chart,c=this.clipRect,
d=this.options.animation;if(d&&!Nb(d))d={};if(a){if(!c.isAnimating){c.attr("width",0);c.isAnimating=true}}else{c.animate({width:b.plotSizeX},d);this.animate=null}},drawPoints:function(){var a,b=this.data,c=this.chart,d,e,f,g,h,i;if(this.options.marker.enabled)for(f=b.length;f--;){g=b[f];d=g.plotX;e=g.plotY;i=g.graphic;if(e!==Wa&&!isNaN(e)){a=g.pointAttr[g.selected?"select":ib];h=a.r;if(i)i.animate({x:d,y:e,r:h});else g.graphic=c.renderer.symbol(A(g.marker&&g.marker.symbol,this.symbol),d,e,h).attr(a).add(this.group)}}},
convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={};a=a||{};b=b||{};c=c||{};d=d||{};for(f in e){g=e[f];h[f]=A(a[g],b[f],c[f],d[f])}return h},getAttribs:function(){var a=this,b=xb[a.type].marker?a.options.marker:a.options,c=b.states,d=c[Bb],e,f=a.color,g={stroke:f,fill:f},h=a.data,i=[],j,m=a.pointAttrToOptions,v;if(a.options.marker){d.radius=d.radius||b.radius+2;d.lineWidth=d.lineWidth||b.lineWidth+1}else d.color=d.color||bc(d.color||f).brighten(d.brightness).get();i[ib]=a.convertAttribs(b,
g);u([Bb,"select"],function(P){i[P]=a.convertAttribs(c[P],i[ib])});a.pointAttr=i;for(f=h.length;f--;){g=h[f];if((b=g.options&&g.options.marker||g.options)&&b.enabled===false)b.radius=0;e=false;if(g.options)for(v in m)if(K(b[m[v]]))e=true;if(e){j=[];c=b.states||{};e=c[Bb]=c[Bb]||{};if(!a.options.marker)e.color=bc(e.color||g.options.color).brighten(e.brightness||d.brightness).get();j[ib]=a.convertAttribs(b,i[ib]);j[Bb]=a.convertAttribs(c[Bb],i[Bb],j[ib]);j.select=a.convertAttribs(c.select,i.select,
j[ib])}else j=i;g.pointAttr=j}},destroy:function(){var a=this,b=a.chart,c=a.clipRect,d=/\/5[0-9\.]+ (Safari|Mobile)\//.test(yc),e,f;Pa(a,"destroy");pb(a);a.legendItem&&a.chart.legend.destroyItem(a);u(a.data,function(g){g.destroy()});if(c&&c!==b.clipRect)a.clipRect=c.destroy();u(["area","graph","dataLabelsGroup","group","tracker"],function(g){if(a[g]){e=d&&g==="group"?"hide":"destroy";a[g][e]()}});if(b.hoverSeries===a)b.hoverSeries=null;nc(b.series,a);for(f in a)delete a[f]},drawDataLabels:function(){if(this.options.dataLabels.enabled){var a,
b,c=this.data,d=this.options,e=d.dataLabels,f,g=this.dataLabelsGroup,h=this.chart,i=h.renderer,j=h.inverted,m=this.type,v;v=d.stacking;var P=m==="column"||m==="bar",T=e.verticalAlign===null,Y=e.y===null;if(P)if(v){if(T)e=Ca(e,{verticalAlign:"middle"});if(Y)e=Ca(e,{y:{top:14,middle:4,bottom:-6}[e.verticalAlign]})}else if(T)e=Ca(e,{verticalAlign:"top"});if(g)g.translate(h.plotLeft,h.plotTop);else g=this.dataLabelsGroup=i.g("data-labels").attr({visibility:this.visible?Ab:ob,zIndex:6}).translate(h.plotLeft,
h.plotTop).add();v=e.color;if(v==="auto")v=null;e.style.color=A(v,this.color,"black");u(c,function(H){var U=H.barX,z=U&&U+H.barW/2||H.plotX||-999,M=A(H.plotY,-999),y=H.dataLabel,C=e.align,Z=Y?H.y>=0?-6:12:e.y;f=e.formatter.call(H.getLabelConfig());a=(j?h.plotWidth-M:z)+e.x;b=(j?h.plotHeight-z:M)+Z;if(m==="column")a+={left:-1,right:1}[C]*H.barW/2||0;if(j&&H.y<0){C="right";a-=10}if(y){if(j&&!e.y)b=b+ja(y.styles.lineHeight)*0.9-y.getBBox().height/2;y.attr({text:f}).animate({x:a,y:b})}else if(K(f)){y=
H.dataLabel=i.text(f,a,b).attr({align:C,rotation:e.rotation,zIndex:1}).css(e.style).add(g);j&&!e.y&&y.attr({y:b+ja(y.styles.lineHeight)*0.9-y.getBBox().height/2})}if(P&&d.stacking&&y){z=H.barY;M=H.barW;H=H.barH;y.align(e,null,{x:j?h.plotWidth-z-H:U,y:j?h.plotHeight-U-M:z,width:j?H:M,height:j?M:H})}})}},drawGraph:function(){var a=this,b=a.options,c=a.graph,d=[],e,f=a.area,g=a.group,h=b.lineColor||a.color,i=b.lineWidth,j=b.dashStyle,m,v=a.chart.renderer,P=a.yAxis.getThreshold(b.threshold||0),T=/^area/.test(a.type),
Y=[],H=[];u(a.segments,function(U){m=[];u(U,function(C,Z){if(a.getPointSpline)m.push.apply(m,a.getPointSpline(U,C,Z));else{m.push(Z?Ka:Za);Z&&b.step&&m.push(C.plotX,U[Z-1].plotY);m.push(C.plotX,C.plotY)}});if(U.length>1)d=d.concat(m);else Y.push(U[0]);if(T){var z=[],M,y=m.length;for(M=0;M<y;M++)z.push(m[M]);y===3&&z.push(Ka,m[1],m[2]);if(b.stacking&&a.type!=="areaspline")for(M=U.length-1;M>=0;M--)z.push(U[M].plotX,U[M].yBottom);else z.push(Ka,U[U.length-1].plotX,P,Ka,U[0].plotX,P);H=H.concat(z)}});
a.graphPath=d;a.singlePoints=Y;if(T){e=A(b.fillColor,bc(a.color).setOpacity(b.fillOpacity||0.75).get());if(f)f.animate({d:H});else a.area=a.chart.renderer.path(H).attr({fill:e}).add(g)}if(c){Hc(c);c.animate({d:d})}else if(i){c={stroke:h,"stroke-width":i};if(j)c.dashstyle=j;a.graph=v.path(d).attr(c).add(g).shadow(b.shadow)}},render:function(){var a=this,b=a.chart,c,d,e=a.options,f=e.animation,g=f&&a.animate;f=g?f&&f.duration||500:0;var h=a.clipRect,i=b.renderer;if(!h){h=a.clipRect=!b.hasRendered&&
b.clipRect?b.clipRect:i.clipRect(0,0,b.plotSizeX,b.plotSizeY);if(!b.clipRect)b.clipRect=h}if(!a.group){c=a.group=i.g("series");if(b.inverted){d=function(){c.attr({width:b.plotWidth,height:b.plotHeight}).invert()};d();Qa(b,"resize",d);Qa(a,"destroy",function(){pb(b,"resize",d)})}c.clip(a.clipRect).attr({visibility:a.visible?Ab:ob,zIndex:e.zIndex}).translate(b.plotLeft,b.plotTop).add(b.seriesGroup)}a.drawDataLabels();g&&a.animate(true);a.drawGraph&&a.drawGraph();a.drawPoints();a.options.enableMouseTracking!==
false&&a.drawTracker();g&&a.animate();setTimeout(function(){h.isAnimating=false;if((c=a.group)&&h!==b.clipRect&&h.renderer){c.clip(a.clipRect=b.clipRect);h.destroy()}},f);a.isDirty=false},redraw:function(){var a=this.chart,b=this.group;if(b){a.inverted&&b.attr({width:a.plotWidth,height:a.plotHeight});b.animate({translateX:a.plotLeft,translateY:a.plotTop})}this.translate();this.setTooltipPoints(true);this.render()},setState:function(a){var b=this.options,c=this.graph,d=b.states;b=b.lineWidth;a=a||
ib;if(this.state!==a){this.state=a;if(!(d[a]&&d[a].enabled===false)){if(a)b=d[a].lineWidth||b+1;if(c&&!c.dashstyle)c.attr({"stroke-width":b},a?0:500)}}},setVisible:function(a,b){var c=this.chart,d=this.legendItem,e=this.group,f=this.tracker,g=this.dataLabelsGroup,h,i=this.data,j=c.options.chart.ignoreHiddenSeries;h=this.visible;h=(this.visible=a=a===Wa?!h:a)?"show":"hide";e&&e[h]();if(f)f[h]();else for(e=i.length;e--;){f=i[e];f.tracker&&f.tracker[h]()}g&&g[h]();d&&c.legend.colorizeItem(this,a);this.isDirty=
true;this.options.stacking&&u(c.series,function(m){if(m.options.stacking&&m.visible)m.isDirty=true});if(j)c.isDirtyBox=true;b!==false&&c.redraw();Pa(this,h)},show:function(){this.setVisible(true)},hide:function(){this.setVisible(false)},select:function(a){this.selected=a=a===Wa?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;Pa(this,a?"select":"unselect")},drawTracker:function(){var a=this,b=a.options,c=[].concat(a.graphPath),d=c.length,e=a.chart,f=e.options.tooltip.snap,g=a.tracker,h=b.cursor;
h=h&&{cursor:h};var i=a.singlePoints,j;if(d)for(j=d+1;j--;){c[j]===Za&&c.splice(j+1,0,c[j+1]-f,c[j+2],Ka);if(j&&c[j]===Za||j===d)c.splice(j,0,Ka,c[j-2]+f,c[j-1])}for(j=0;j<i.length;j++){d=i[j];c.push(Za,d.plotX-f,d.plotY,Ka,d.plotX+f,d.plotY)}if(g)g.attr({d:c});else a.tracker=e.renderer.path(c).attr({isTracker:true,stroke:ce,fill:jb,"stroke-width":b.lineWidth+2*f,visibility:a.visible?Ab:ob,zIndex:b.zIndex||1}).on(Kb?"touchstart":"mouseover",function(){e.hoverSeries!==a&&a.onMouseOver()}).on("mouseout",
function(){b.stickyTracking||a.onMouseOut()}).css(h).add(e.trackerGroup)}};ma=yb(sb);wb.line=ma;ma=yb(sb,{type:"area"});wb.area=ma;ma=yb(sb,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,m;if(c&&c<a.length-1){a=f.plotY;j=g.plotX;g=g.plotY;var v;h=(1.5*d+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*d+j)/2.5;m=(1.5*e+g)/2.5;v=(m-i)*(j-d)/(j-h)+e-m;i+=v;m+=v;if(i>a&&i>e){i=Ia(a,e);m=2*e-i}else if(i<a&&i<e){i=tb(a,e);m=2*e-i}if(m>g&&m>e){m=Ia(g,e);i=2*e-m}else if(m<
g&&m<e){m=tb(g,e);i=2*e-m}b.rightContX=j;b.rightContY=m}if(c){b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e];f.rightContX=f.rightContY=null}else b=[Za,d,e];return b}});wb.spline=ma;ma=yb(ma,{type:"areaspline"});wb.areaspline=ma;var hd=yb(sb,{type:"column",pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",r:"borderRadius"},init:function(){sb.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasColumn=true;b.hasRendered&&u(b.series,function(c){if(c.type===
a.type)c.isDirty=true})},translate:function(){var a=this,b=a.chart,c=a.options,d=c.stacking,e=c.borderWidth,f=0,g=a.xAxis.reversed,h=a.xAxis.categories,i={},j,m;sb.prototype.translate.apply(a);u(b.series,function(C){if(C.type===a.type&&C.visible){if(C.options.stacking){j=C.stackKey;if(i[j]===Wa)i[j]=f++;m=i[j]}else m=f++;C.columnIndex=m}});var v=a.data,P=a.closestPoints;h=bb(v[1]?v[P].plotX-v[P-1].plotX:b.plotSizeX/(h&&h.length||1));P=h*c.groupPadding;var T=(h-2*P)/f,Y=c.pointWidth,H=K(Y)?(T-Y)/2:
T*c.pointPadding,U=Ia(A(Y,T-2*H),1),z=H+(P+((g?f-a.columnIndex:a.columnIndex)||0)*T-h/2)*(g?-1:1),M=a.yAxis.getThreshold(c.threshold||0),y=A(c.minPointLength,5);u(v,function(C){var Z=C.plotY,Sa=C.yBottom||M,Na=C.plotX+z,Ea=md(tb(Z,Sa)),gb=md(Ia(Z,Sa)-Ea),Lb=a.yAxis.stacks[(C.y<0?"-":"")+a.stackKey],Rb;d&&a.visible&&Lb&&Lb[C.x]&&Lb[C.x].setOffset(z,U);if(bb(gb)<y){if(y){gb=y;Ea=bb(Ea-M)>y?Sa-y:M-(Z<=M?y:0)}Rb=Ea-3}sa(C,{barX:Na,barY:Ea,barW:U,barH:gb});C.shapeType="rect";Z=sa(b.renderer.Element.prototype.crisp.apply({},
[e,Na,Ea,U,gb]),{r:c.borderRadius});if(e%2){Z.y-=1;Z.height+=1}C.shapeArgs=Z;C.trackerArgs=K(Rb)&&Ca(C.shapeArgs,{height:Ia(6,gb+3),y:Rb})})},getSymbol:function(){},drawGraph:function(){},drawPoints:function(){var a=this,b=a.options,c=a.chart.renderer,d,e;u(a.data,function(f){var g=f.plotY;if(g!==Wa&&!isNaN(g)&&f.y!==null){d=f.graphic;e=f.shapeArgs;if(d){Hc(d);d.animate(e)}else f.graphic=c[f.shapeType](e).attr(f.pointAttr[f.selected?"select":ib]).add(a.group).shadow(b.shadow)}})},drawTracker:function(){var a=
this,b=a.chart,c=b.renderer,d,e,f=+new Date,g=a.options,h=g.cursor,i=h&&{cursor:h},j;u(a.data,function(m){e=m.tracker;d=m.trackerArgs||m.shapeArgs;delete d.strokeWidth;if(m.y!==null)if(e)e.attr(d);else m.tracker=c[m.shapeType](d).attr({isTracker:f,fill:ce,visibility:a.visible?Ab:ob,zIndex:g.zIndex||1}).on(Kb?"touchstart":"mouseover",function(v){j=v.relatedTarget||v.fromElement;b.hoverSeries!==a&&Ga(j,"isTracker")!==f&&a.onMouseOver();m.onMouseOver()}).on("mouseout",function(v){if(!g.stickyTracking){j=
v.relatedTarget||v.toElement;Ga(j,"isTracker")!==f&&a.onMouseOut()}}).css(i).add(m.group||b.trackerGroup)})},animate:function(a){var b=this,c=b.data;if(!a){u(c,function(d){var e=d.graphic;d=d.shapeArgs;if(e){e.attr({height:0,y:b.yAxis.translate(0,0,1)});e.animate({height:d.height,y:d.y},b.options.animation)}});b.animate=null}},remove:function(){var a=this,b=a.chart;b.hasRendered&&u(b.series,function(c){if(c.type===a.type)c.isDirty=true});sb.prototype.remove.apply(a,arguments)}});wb.column=hd;ma=yb(hd,
{type:"bar",init:function(a){a.inverted=this.inverted=true;hd.prototype.init.apply(this,arguments)}});wb.bar=ma;ma=yb(sb,{type:"scatter",translate:function(){var a=this;sb.prototype.translate.apply(a);u(a.data,function(b){b.shapeType="circle";b.shapeArgs={x:b.plotX,y:b.plotY,r:a.chart.options.tooltip.snap}})},drawTracker:function(){var a=this,b=a.options.cursor,c=b&&{cursor:b},d;u(a.data,function(e){(d=e.graphic)&&d.attr({isTracker:true}).on("mouseover",function(){a.onMouseOver();e.onMouseOver()}).on("mouseout",
function(){a.options.stickyTracking||a.onMouseOut()}).css(c)})},cleanData:function(){}});wb.scatter=ma;ma=yb(Oc,{init:function(){Oc.prototype.init.apply(this,arguments);var a=this,b;sa(a,{visible:a.visible!==false,name:A(a.name,"Slice")});b=function(){a.slice()};Qa(a,"select",b);Qa(a,"unselect",b);return a},setVisible:function(a){var b=this.series.chart,c=this.tracker,d=this.dataLabel,e=this.connector,f=this.shadowGroup,g;g=(this.visible=a=a===Wa?!this.visible:a)?"show":"hide";this.group[g]();c&&
c[g]();d&&d[g]();e&&e[g]();f&&f[g]();this.legendItem&&b.legend.colorizeItem(this,a)},slice:function(a,b,c){var d=this.series.chart,e=this.slicedTranslation;oc(c,d);A(b,true);a=this.sliced=K(a)?a:!this.sliced;a={translateX:a?e[0]:d.plotLeft,translateY:a?e[1]:d.plotTop};this.group.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)}});ma=yb(sb,{type:"pie",isCartesian:false,pointClass:ma,pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},getColor:function(){this.initialColor=
this.chart.counters.color},animate:function(){var a=this;u(a.data,function(b){var c=b.graphic;b=b.shapeArgs;var d=-kc/2;if(c){c.attr({r:0,start:d,end:d});c.animate({r:b.r,start:b.start,end:b.end},a.options.animation)}});a.animate=null},translate:function(){var a=0,b=-0.25,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f=c.center.concat([c.size,c.innerSize||0]),g=this.chart,h=g.plotWidth,i=g.plotHeight,j,m,v,P=this.data,T=2*kc,Y,H=tb(h,i),U,z,M,y=c.dataLabels.distance;f=tc(f,function(C,Z){return(U=
/%$/.test(C))?[h,i,H,H][Z]*ja(C)/100:C});this.getX=function(C,Z){v=Fa.asin((C-f[1])/(f[2]/2+y));return f[0]+(Z?-1:1)*rb(v)*(f[2]/2+y)};this.center=f;u(P,function(C){a+=C.y});u(P,function(C){Y=a?C.y/a:0;j=W(b*T*1E3)/1E3;b+=Y;m=W(b*T*1E3)/1E3;C.shapeType="arc";C.shapeArgs={x:f[0],y:f[1],r:f[2]/2,innerR:f[3]/2,start:j,end:m};v=(m+j)/2;C.slicedTranslation=tc([rb(v)*d+g.plotLeft,Cb(v)*d+g.plotTop],W);z=rb(v)*f[2]/2;M=Cb(v)*f[2]/2;C.tooltipPos=[f[0]+z*0.7,f[1]+M*0.7];C.labelPos=[f[0]+z+rb(v)*y,f[1]+M+Cb(v)*
y,f[0]+z+rb(v)*e,f[1]+M+Cb(v)*e,f[0]+z,f[1]+M,y<0?"center":v<T/4?"left":"right",v];C.percentage=Y*100;C.total=a});this.setTooltipPoints()},render:function(){this.drawPoints();this.options.enableMouseTracking!==false&&this.drawTracker();this.drawDataLabels();this.options.animation&&this.animate&&this.animate();this.isDirty=false},drawPoints:function(){var a=this.chart,b=a.renderer,c,d,e,f=this.options.shadow,g,h;u(this.data,function(i){d=i.graphic;h=i.shapeArgs;e=i.group;g=i.shadowGroup;if(f&&!g)g=
i.shadowGroup=b.g("shadow").attr({zIndex:4}).add();if(!e)e=i.group=b.g("point").attr({zIndex:5}).add();c=i.sliced?i.slicedTranslation:[a.plotLeft,a.plotTop];e.translate(c[0],c[1]);g&&g.translate(c[0],c[1]);if(d)d.animate(h);else i.graphic=b.arc(h).attr(sa(i.pointAttr[ib],{"stroke-linejoin":"round"})).add(i.group).shadow(f,g);i.visible===false&&i.setVisible(false)})},drawDataLabels:function(){var a=this.data,b,c=this.chart,d=this.options.dataLabels,e=A(d.connectorPadding,10),f=A(d.connectorWidth,1),
g,h,i=A(d.softConnector,true),j=d.distance,m=this.center,v=m[2]/2;m=m[1];var P=j>0,T=[[],[]],Y,H,U,z,M=2,y;if(d.enabled){sb.prototype.drawDataLabels.apply(this);u(a,function(gb){if(gb.dataLabel)T[gb.labelPos[7]<kc/2?0:1].push(gb)});T[1].reverse();z=function(gb,Lb){return Lb.y-gb.y};for(a=T[0][0]&&T[0][0].dataLabel&&ja(T[0][0].dataLabel.styles.lineHeight);M--;){var C=[],Z=[],Sa=T[M],Na=Sa.length,Ea;for(y=m-v-j;y<=m+v+j;y+=a)C.push(y);U=C.length;if(Na>U){h=[].concat(Sa);h.sort(z);for(y=Na;y--;)h[y].rank=
y;for(y=Na;y--;)Sa[y].rank>=U&&Sa.splice(y,1);Na=Sa.length}for(y=0;y<Na;y++){b=Sa[y];h=b.labelPos;b=9999;for(H=0;H<U;H++){g=bb(C[H]-h[1]);if(g<b){b=g;Ea=H}}if(Ea<y&&C[y]!==null)Ea=y;else{if(U<Na-y+Ea&&C[y]!==null)Ea=U-Na+y;for(;C[Ea]===null;)Ea++}Z.push({i:Ea,y:C[Ea]});C[Ea]=null}Z.sort(z);for(y=0;y<Na;y++){b=Sa[y];h=b.labelPos;g=b.dataLabel;H=Z.pop();Y=h[1];U=b.visible===false?ob:Ab;Ea=H.i;H=H.y;if(Y>H&&C[Ea+1]!==null||Y<H&&C[Ea-1]!==null)H=Y;Y=this.getX(Ea===0||Ea===C.length-1?Y:H,M);g.attr({visibility:U,
align:h[6]})[g.moved?"animate":"attr"]({x:Y+d.x+({left:e,right:-e}[h[6]]||0),y:H+d.y});g.moved=true;if(P&&f){g=b.connector;h=i?[Za,Y+(h[6]==="left"?5:-5),H,"C",Y,H,2*h[2]-h[4],2*h[3]-h[5],h[2],h[3],Ka,h[4],h[5]]:[Za,Y+(h[6]==="left"?5:-5),H,Ka,h[2],h[3],Ka,h[4],h[5]];if(g){g.animate({d:h});g.attr("visibility",U)}else b.connector=g=this.chart.renderer.path(h).attr({"stroke-width":f,stroke:d.connectorColor||b.color||"#606060",visibility:U,zIndex:3}).translate(c.plotLeft,c.plotTop).add()}}}}},drawTracker:hd.prototype.drawTracker,
getSymbol:function(){}});wb.pie=ma;db.Highcharts={Chart:Nd,dateFormat:Zc,pathAnim:Nc,getOptions:function(){return Xa},hasRtlBug:me,numberFormat:Ed,Point:Oc,Color:bc,Renderer:fd,seriesTypes:wb,setOptions:function(a){Xa=Ca(Xa,a);Id();return Xa},Series:sb,addEvent:Qa,removeEvent:pb,createElement:hb,discardElement:pc,css:Ja,each:u,extend:sa,map:tc,merge:Ca,pick:A,extendClass:yb,product:"Highcharts",version:"2.1.9"}})();

/* ==========================================================
 * bootstrap-twipsy.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#twipsy
 * Adapted from the original jQuery.tipsy by Jason Frame
 * ==========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function( $ ) {

  "use strict"

 /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
  * ======================================================= */

  var transitionEnd

  $(document).ready(function () {

    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
      return support
    })()

    // set CSS transition event type
    if ( $.support.transition ) {
      transitionEnd = "TransitionEnd"
      if ( $.browser.webkit ) {
      	transitionEnd = "webkitTransitionEnd"
      } else if ( $.browser.mozilla ) {
      	transitionEnd = "transitionend"
      } else if ( $.browser.opera ) {
      	transitionEnd = "oTransitionEnd"
      }
    }

  })


 /* TWIPSY PUBLIC CLASS DEFINITION
  * ============================== */

  var Twipsy = function ( element, options ) {
    this.$element = $(element)
    this.options = options
    this.enabled = true
    this.fixTitle()
  }

  Twipsy.prototype = {

    show: function() {
      var pos
        , actualWidth
        , actualHeight
        , placement
        , $tip
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animate) {
          $tip.addClass('fade')
        }

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .prependTo(document.body)

        pos = $.extend({}, this.$element.offset(), {
          width: this.$element[0].offsetWidth
        , height: this.$element[0].offsetHeight
        })

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        placement = maybeCall(this.options.placement, this, [ $tip[0], this.$element[0] ])

        switch (placement) {
          case 'below':
            tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'above':
            tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset}
            break
        }

        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var $tip = this.tip()
      $tip.find('.twipsy-inner')[this.options.html ? 'html' : 'text'](this.getTitle())
      $tip[0].className = 'twipsy'
    }

  , hide: function() {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeElement () {
        $tip.remove()
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip.bind(transitionEnd, removeElement) :
        removeElement()
    }

  , fixTitle: function() {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getTitle: function() {
      var title
        , $e = this.$element
        , o = this.options

        this.fixTitle()

        if (typeof o.title == 'string') {
          title = $e.attr(o.title == 'title' ? 'data-original-title' : o.title)
        } else if (typeof o.title == 'function') {
          title = o.title.call($e[0])
        }

        title = ('' + title).replace(/(^\s*|\s*$)/, "")

        return title || o.fallback
    }

  , tip: function() {
      return this.$tip = this.$tip || $('<div class="twipsy" />').html(this.options.template)
    }

  , validate: function() {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function() {
      this.enabled = true
    }

  , disable: function() {
      this.enabled = false
    }

  , toggleEnabled: function() {
      this.enabled = !this.enabled
    }

  , toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* TWIPSY PRIVATE METHODS
  * ====================== */

   function maybeCall ( thing, ctx, args ) {
     return typeof thing == 'function' ? thing.apply(ctx, args) : thing
   }

 /* TWIPSY PLUGIN DEFINITION
  * ======================== */

  $.fn.twipsy = function (options) {
    $.fn.twipsy.initWith.call(this, options, Twipsy, 'twipsy')
    return this
  }

  $.fn.twipsy.initWith = function (options, Constructor, name) {
    var twipsy
      , binder
      , eventIn
      , eventOut

    if (options === true) {
      return this.data(name)
    } else if (typeof options == 'string') {
      twipsy = this.data(name)
      if (twipsy) {
        twipsy[options]()
      }
      return this
    }

    options = $.extend({}, $.fn[name].defaults, options)

    function get(ele) {
      var twipsy = $.data(ele, name)

      if (!twipsy) {
        twipsy = new Constructor(ele, $.fn.twipsy.elementOptions(ele, options))
        $.data(ele, name, twipsy)
      }

      return twipsy
    }

    function enter() {
      var twipsy = get(this)
      twipsy.hoverState = 'in'

      if (options.delayIn == 0) {
        twipsy.show()
      } else {
        twipsy.fixTitle()
        setTimeout(function() {
          if (twipsy.hoverState == 'in') {
            twipsy.show()
          }
        }, options.delayIn)
      }
    }

    function leave() {
      var twipsy = get(this)
      twipsy.hoverState = 'out'
      if (options.delayOut == 0) {
        twipsy.hide()
      } else {
        setTimeout(function() {
          if (twipsy.hoverState == 'out') {
            twipsy.hide()
          }
        }, options.delayOut)
      }
    }

    if (!options.live) {
      this.each(function() {
        get(this)
      })
    }

    if (options.trigger != 'manual') {
      binder   = options.live ? 'live' : 'bind'
      eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus'
      eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur'
      this[binder](eventIn, enter)[binder](eventOut, leave)
    }

    return this
  }

  $.fn.twipsy.Twipsy = Twipsy

  $.fn.twipsy.defaults = {
    animate: true
  , delayIn: 0
  , delayOut: 0
  , fallback: ''
  , placement: 'above'
  , html: false
  , live: false
  , offset: 0
  , title: 'title'
  , trigger: 'hover'
  , template: '<div class="twipsy-arrow"></div><div class="twipsy-inner"></div>'
  }

  $.fn.twipsy.rejectAttrOptions = [ 'title' ]

  $.fn.twipsy.elementOptions = function(ele, options) {
    var data = $(ele).data()
      , rejects = $.fn.twipsy.rejectAttrOptions
      , i = rejects.length

    while (i--) {
      delete data[rejects[i]]
    }

    return $.extend({}, options, data)
  }

}( window.jQuery || window.ender );
/* =========================================================
 * bootstrap-modal.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#modal
 * =========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function( $ ){

  "use strict"

 /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
  * ======================================================= */

  var transitionEnd

  $(document).ready(function () {

    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
      return support
    })()

    // set CSS transition event type
    if ( $.support.transition ) {
      transitionEnd = "TransitionEnd"
      if ( $.browser.webkit ) {
      	transitionEnd = "webkitTransitionEnd"
      } else if ( $.browser.mozilla ) {
      	transitionEnd = "transitionend"
      } else if ( $.browser.opera ) {
      	transitionEnd = "oTransitionEnd"
      }
    }

  })


 /* MODAL PUBLIC CLASS DEFINITION
  * ============================= */

  var Modal = function ( content, options ) {
    this.settings = $.extend({}, $.fn.modal.defaults, options)
    this.$element = $(content)
      .delegate('.close', 'click.modal', $.proxy(this.hide, this))

    if ( this.settings.show ) {
      this.show()
    }

    return this
  }

  Modal.prototype = {

      toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
        this.isShown = true
        this.$element.trigger('show')

        escape.call(this)
        backdrop.call(this, function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          that.$element
            .appendTo(document.body)
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element.addClass('in')

          transition ?
            that.$element.one(transitionEnd, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })

        return this
      }

    , hide: function (e) {
        e && e.preventDefault()

        if ( !this.isShown ) {
          return this
        }

        var that = this
        this.isShown = false

        escape.call(this)

        this.$element
          .trigger('hide')
          .removeClass('in')

        $.support.transition && this.$element.hasClass('fade') ?
          hideWithTransition.call(this) :
          hideModal.call(this)

        return this
      }

  }


 /* MODAL PRIVATE METHODS
  * ===================== */

  function hideWithTransition() {
    // firefox drops transitionEnd events :{o
    var that = this
      , timeout = setTimeout(function () {
          that.$element.unbind(transitionEnd)
          hideModal.call(that)
        }, 500)

    this.$element.one(transitionEnd, function () {
      clearTimeout(timeout)
      hideModal.call(that)
    })
  }

  function hideModal (that) {
    this.$element
      .hide()
      .trigger('hidden')

    backdrop.call(this)
  }

  function backdrop ( callback ) {
    var that = this
      , animate = this.$element.hasClass('fade') ? 'fade' : ''
    if ( this.isShown && this.settings.backdrop ) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      if ( this.settings.backdrop != 'static' ) {
        this.$backdrop.click($.proxy(this.hide, this))
      }

      if ( doAnimate ) {
        this.$backdrop[0].offsetWidth // force reflow
      }

      this.$backdrop.addClass('in')

      doAnimate ?
        this.$backdrop.one(transitionEnd, callback) :
        callback()

    } else if ( !this.isShown && this.$backdrop ) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one(transitionEnd, $.proxy(removeBackdrop, this)) :
        removeBackdrop.call(this)

    } else if ( callback ) {
       callback()
    }
  }

  function removeBackdrop() {
    this.$backdrop.remove()
    this.$backdrop = null
  }

  function escape() {
    var that = this
    if ( this.isShown && this.settings.keyboard ) {
      $(document).bind('keyup.modal', function ( e ) {
        if ( e.which == 27 ) {
          that.hide()
        }
      })
    } else if ( !this.isShown ) {
      $(document).unbind('keyup.modal')
    }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function ( options ) {
    var modal = this.data('modal')

    if (!modal) {

      if (typeof options == 'string') {
        options = {
          show: /show|toggle/.test(options)
        }
      }

      return this.each(function () {
        $(this).data('modal', new Modal(this, options))
      })
    }

    if ( options === true ) {
      return modal
    }

    if ( typeof options == 'string' ) {
      modal[options]()
    } else if ( modal ) {
      modal.toggle()
    }

    return this
  }

  $.fn.modal.Modal = Modal

  $.fn.modal.defaults = {
    backdrop: false
  , keyboard: false
  , show: false
  }


 /* MODAL DATA- IMPLEMENTATION
  * ========================== */

  $(document).ready(function () {
    $('body').delegate('[data-controls-modal]', 'click', function (e) {
      e.preventDefault()
      var $this = $(this).data('show', true)
      $('#' + $this.attr('data-controls-modal')).modal( $this.data() )
    })
  })

}( window.jQuery || window.ender );

/* ===========================================================
 * bootstrap-popover.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#popover
 * ===========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function( $ ) {

 "use strict"

  var Popover = function ( element, options ) {
    this.$element = $(element)
    this.options = options
    this.enabled = true
    this.fixTitle()
  }

  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TWIPSY.js
     ========================================= */

  Popover.prototype = $.extend({}, $.fn.twipsy.Twipsy.prototype, {

    setContent: function () {
      var $tip = this.tip()
      $tip.find('.title')[this.options.html ? 'html' : 'text'](this.getTitle())
      $tip.find('.content p')[this.options.html ? 'html' : 'text'](this.getContent())
      $tip[0].className = 'popover'
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
       , $e = this.$element
       , o = this.options

      if (typeof this.options.content == 'string') {
        content = $e.attr(this.options.content)
      } else if (typeof this.options.content == 'function') {
        content = this.options.content.call(this.$element[0])
      }

      return content
    }

  , tip: function() {
      if (!this.$tip) {
        this.$tip = $('<div class="popover" />')
          .html(this.options.template)
      }
      return this.$tip
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  $.fn.popover = function (options) {
    if (typeof options == 'object') options = $.extend({}, $.fn.popover.defaults, options)
    $.fn.twipsy.initWith.call(this, options, Popover, 'popover')
    return this
  }

  $.fn.popover.defaults = $.extend({} , $.fn.twipsy.defaults, {
    placement: 'right'
  , content: 'data-content'
  , template: '<div class="arrow"></div><div class="inner"><h3 class="title"></h3><div class="content"><p></p></div></div>'
  })

  $.fn.twipsy.rejectAttrOptions.push( 'content' )

}( window.jQuery || window.ender );
// data handling for idaho unemployment
// requires underscore, backbone, jquery, leaflet, date.js

(function($) {
    // setting these up top so I don't have to dig through code later
    var TILE_URL = "http://a.tiles.mapbox.com/v3/npr.idaho-jobless.jsonp",
        CENTER = new L.LatLng(45.636, -114.299),
        ZOOM = 6,
        DEFAULT_AREA = "Ada County",
        ACTIVE_COUNTY_COLOR = '#e38d2c',
        INACTIVE_COUNTY_COLOR = '#d8472b';
    
    var MONTHS = {
        january: 0,
        february: 1,
        march: 2,
        april: 3,
        may: 4,
        june: 5,
        july: 6,
        august: 7,
        september: 8,
        october: 9,
        november: 10,
        december: 11
    };
    
    var MONTH_NAMES = ["January", "February", "March", 
                       "April", "May", "June", "July", 
                       "August", "September", "October", 
                       "November", "December"];
    
    var YESNO = {
        'yes'  : true,
        'true' : true,
        'no'   : false,
        'false': false
    };
    
    window.intcomma = function(value) {
        // inspired by django.contrib.humanize.intcomma
        var origValue = String(value);
        var newValue = origValue.replace(/^(-?\d+)(\d{3})/, '$1,$2');
        if (origValue == newValue){
            return newValue;
        } else {
            return intcomma(newValue);
        }
    };
    
    // models
    window.County = Backbone.Model.extend({
        
        defaults: {
            name: '',
            formalname: '',
            fips: null,
            latitude: null,
            longitude: null,
            point: null
        },
        
        initialize: function(attributes, options) {
            if (attributes.fips) {
                this.set({ id: attributes.fips });
            }
            
            if (attributes.latitude && attributes.longitude) {
                var point = new L.LatLng(parseFloat(attributes.latitude), parseFloat(attributes.longitude));
                this.set({ point: point });
            }
            
            return this;
        },
        
        toString: function() {
            return this.get('formalname') || this.get('name');
        }
    });
    
    window.UnemploymentRate = Backbone.Model.extend({
        
        initialize: function(attributes, options) {
            this.normalize(attributes);
            return this;
        },
        
        getMarker: function(options) {
            if (!this.has('point')) return null;
            var rate = this, color,
                county = rate.getCounty();
                activeCounty = location.hash.split('/')[2] || "";
            
            if (county.get('name') == activeCounty) {
                color = ACTIVE_COUNTY_COLOR;
            } else {
                color = INACTIVE_COUNTY_COLOR;
            }
            var marker = new L.CircleMarker(this.get('point'), {
                weight: 1,
                color: color,
                opacity: 0.8,
                fillOpacity: 0.7,
                radius: this.get('unemploymentrate'),
                county: county.get('name')
            });
            marker.on('click', function(e) {
                var route = [rate.get('year'), rate.get('month'), county.get('name')];
                window.app.navigate(route.join('/'), true);
            });
            return marker;
        },
        
        normalize: function(attributes) {
            // bulk normalizing
            var changes = {};
            if (attributes.latitude && attributes.longitude) {
                var point = new L.LatLng(parseFloat(attributes.latitude), parseFloat(attributes.longitude));
                changes.point = point;
                changes.latitude = parseFloat(attributes.latitude);
                changes.longitude = parseFloat(attributes.longitude);
            }
            
            if (attributes.year && attributes.month) {
                var date = new Date(attributes.year, MONTHS[attributes.month.toLowerCase()]);
                changes.date = date;
                changes.year = Number(attributes.year);
            }
            
            if (attributes.preliminary) {
                changes.preliminary = YESNO[attributes.preliminary.toLowerCase()];
            }
            
            if (attributes.adjusted) {
                changes.adjusted = YESNO[attributes.adjusted.toLowerCase()];
            }
            
            if (attributes.unemploymentrate) {
                changes.unemploymentrate = parseFloat(attributes.unemploymentrate);
            }
            
            if (attributes.unemployment) {
                changes.unemployment = Number(attributes.unemployment);
            }
            
            if (attributes.employment) {
                changes.employment = Number(attributes.employment);
            }
            
            if (attributes.laborforce) {
                changes.laborforce = Number(attributes.laborforce);
            }
            
            // update everything at once
            this.set(changes);
            return this;
        },
        
        getCounty: function() {
            if (this.has('fips')) {
                return window.counties.get(this.get('fips'));
            } else {
                return null;
            }
        }
    });
    
    // collections
    window.CountyCollection = Backbone.Collection.extend({
        model: County
    });
    
    window.UnemploymentRateCollection = Backbone.Collection.extend({
        model: UnemploymentRate,
        
        comparator: function(rate) {
            return (rate.get('date') || 0).valueOf();
        },
        
        latest: function() {
            return this.find(function(rate) {
                return (rate.has('fips') && rate.get('adjusted') && !rate.get('preliminary'));
            });
        },
        
        getArea: function(area) {
            return this.filter(function(rate) {
                return (rate.get('area') === area && rate.get('adjusted') && !rate.get('preliminary'));
            });
        },
        
        getNational: function() {
            return this.getArea('United States');
        },
        
        getIdaho: function() {
            return this.getArea('Idaho');
        },
        
        getCounty: function(county) {
            if (_.isString(county)) {
                county = window.counties.find(function(c) {
                    return c.get('name') == county || c.get('formalname') == county;
                });
            }
            county = county || app.getCounty();
            if (!county) return;
            return this.filter(function(rate) {
                return (rate.get('area') === county.get('formalname') && rate.get('adjusted') && !rate.get('preliminary'));
            });
        },
        
        getMonths: function() {
            // return all unique months in this collection
            var dates = this.pluck('date');
            return _.unique(dates, true, function(d) { return d.valueOf(); });
        },
        
        getCountyMonths: function() {
            // return unemployment rates for months with county rates
            var rates = this.filter(function(rate) { return (rate.has('fips') && rate.get('adjusted') && !rate.get('prelimintary')); }),
                dates = _.map(rates, function(rate) {return rate.get('date'); });
            return _.unique(dates, true, function(d) { return d.valueOf(); });
        },
        
        getMonth: function(year, month) {
            if (_.isDate(year)) {
                var date = year;
                return this.filter(function(rate) {
                    return (rate.get('date').getFullYear() === date.getFullYear() && rate.get('date').getMonth() === date.getMonth() && rate.get('adjusted') && !rate.get('preliminary'));
                });
            }
            
            return this.filter(function(rate) {
                return (rate.get('year') == year && rate.get('month') == month && rate.get('adjusted') && !rate.get('preliminary'));
            });
        },
        
        getRate: function(year, month, county) {
            return this.find(function(rate) {
                return (rate.get('year') == year && rate.get('month') == month && rate.get('area') == county + ' County' && rate.get('adjusted') && !rate.get('preliminary'));
            });
        }
    });
    
    // views
    
    // unemployment map is a thin wrapper around leaflet
    // to handle data and events
    window.UnemploymentMap = Backbone.View.extend({
        
        initialize: function(options) {
            _.bindAll(this);
            this.map = new L.Map(this.el, options);
            var map = this.map;
            wax.tilejson(TILE_URL, function(tilejson) {
                map.addLayer(new wax.leaf.connector(tilejson))
                .setView(CENTER, ZOOM);
            });
            this.markers = new L.FeatureGroup();
            this.map.addLayer(this.markers);
            return this;
        },
        
        nextMonth: function() {
            var date = this.currentMonth();
            date.next().month(); // increment the date in place
            var url = window.app.getUrl(date.getFullYear(), MONTH_NAMES[date.getMonth()], this.county);
            window.app.navigate(url, true);
        },
        
        previousMonth: function() {
            var date = this.currentMonth();
            date.previous().month(); // increment the date in place
            var url = window.app.getUrl(date.getFullYear(), MONTH_NAMES[date.getMonth()], this.county);
            window.app.navigate(url, true);
        },
        
        currentMonth: function() {
            // get the current month, based on the URL
            var parts = Backbone.history.fragment.split('/');
            var year = parts[0],
                month = parts[1],
                county = parts[2];
            this.county = county; // just hold onto this for a moment
            return new Date(year, MONTHS[month.toLowerCase()]);
        },
        
        getFragments: function() {
            if (Backbone.history) {
                return Backbone.history.fragment.split('/');
            } else {
                return location.hash.replace('#', '').split('/');
            }
        },
        
        plot: function() {
            var parts = this.getFragments(),
                year = parts[0],
                month = parts[1],
                county = parts[2];
            var umap = this,
                rates = this.collection.getMonth(year, month);
            this.markers.clearLayers();
            _.each(rates, function(rate, i) {
                var marker = rate.getMarker();
                if (marker) {
                    umap.markers.addLayer(marker);
                }
            });
            return this;
        },
        
        setActive: function(county) {
            _.each(this.markers._layers, function(marker, i) {
                if (marker.options.county == county) {
                    marker.setStyle({ color: ACTIVE_COUNTY_COLOR });
                } else {
                    marker.setStyle({ color: INACTIVE_COUNTY_COLOR });
                }
            });
        },
                
        play: function(start, end) {
            var months = this.collection.getMonths(),
                current = this.currentMonth(),
                umap = this;
            
            // ensure there's only one play action happening
            this.timeout = clearTimeout(this.timeout);
            
            start = (start || _.first(months));
            end = (end || _.last(months));
            
            return this;
        }
        
    });
    
    var Slider = Backbone.View.extend({
        
        initialize: function(options) {
            _.bindAll(this);
            var view = this;
            this.months = this.collection.getCountyMonths();
            this.slider = $(this.el).slider(this.slideOpts());            
            this.collection.bind('reset', function(models) {
                // reset options when the collection changes
                view.months = view.collection.getCountyMonths();
                view.slider.slider('option', view.slideOpts());
            });
            
            return this.slideEvents();
        },
        
        slideOpts: function() {
            return {
                min: 0,
                max: this.months.length,
                // This is problematic because it assumes every month is the same length.
                step: 1, 
                animate: false
            };
        },
        
        slideEvents: function() {
            // breaking out slide events heres
            var values = this.collection.getCountyMonths(),
                county, display = this.$('p span'),
                view = this;
            this.slider.bind('slide', function(e, ui) {
                var date = view.months[ui.value],
                    county = location.hash.split('/')[2],
                    url = app.getUrl(date.getFullYear(), date.toString('MMMM'), county);
                display.text(date.toString('MMM yyyy'));
                app.navigate(url, true);
            });
                        
            return this;
        },
        
        toDate: function(date) {
            date = date || this.currentMonth();
            var months = _.invoke(this.months, 'valueOf');
            var index = _.indexOf(months, date.valueOf(), true);
            this.value(index);
        },
        
        currentMonth: function() {
            // get the current month, based on the URL
            var parts;
            if (Backbone.history) {
                parts = Backbone.history.fragment.split('/');
            } else {
                parts = location.hash.replace('#', '').split('/');
            }
            var year = parts[0],
                month = parts[1],
                county = parts[2];
            this.county = county; // just hold onto this for a moment
            
            return new Date(year, MONTHS[month.toLowerCase()]);
        },
        
        value: function(val) {
            if (val) {
                return this.slider.slider('value', val);
            } else {
                return this.slider.slider('value');
            }
        }
        
    });
    
    var Chart = Backbone.View.extend({
        
        initialize: function(options) {
            _.bindAll(this);
            this.series = {};
            this.el = $(this.id)[0];
            if (this.collection.length) {
                var makeChart = this.makeChart;
                _.defer(makeChart);
            } else {
                var chart = this;
                this.collection.bind('reset', function(models) {
                    chart.makeChart();
                });
            }
            return this;
        },
        
        makeChart: function() {
            var that = this;
            this.chart = new Highcharts.Chart(this.chartOptions(), function(chart) {
                that.plot(chart);
            });
            return this;
        },
        
        getMonths: function() {
            var dates = this.collection.getMonths();
            return _.map(dates, function(d) { return d.toString('MMMM yyyy'); });
        },
        
        clear: function(chart) {
            chart = chart || this.chart;
            for (var line in this.series) {
                this.series[line].remove(false);
            }
            chart.redraw();
            return this;
        },
        
        plot: function(chart) {
            // this.clear(chart);
            chart = chart || this.chart;
            this.plotNational(chart, false);
            this.plotIdaho(chart, false);
            this.plotCounty(null, chart);
            if (jQuery.browser.msie && chart.series.length > 3) {
                chart.series[0].remove(true);
            }
            return this;
        },
        
        plotNational: function(chart, redraw) {
            // national
            redraw = redraw || true;
            chart = chart || this.chart;
            var national = this.collection.getNational();
            
            if (this.series.national) {
                this.series.national.remove(redraw);
            }
            this.series.national = chart.addSeries({
                type: 'line',
                data: _.map(national, function(rate) { return rate.get('unemploymentrate'); }),
                name: 'United States',
                color: chart.options.colors[0],
                events: {
                   legendItemClick: function(event){
                     return false;
                   }
                },
                marker:{
                  radius: 0
                }
            });
            return this;
        },
        
        plotIdaho: function(chart, redraw) {
            redraw = redraw || true;
            chart = chart || this.chart;
            var idaho = this.collection.getIdaho();

            if (this.series.idaho) {
                this.series.idaho.remove(redraw);
            }
            this.series.idaho = chart.addSeries({
                type: 'line',
                data: _.map(idaho, function(rate) { return rate.get('unemploymentrate'); }),
                name: 'Idaho',
                color: chart.options.colors[1],
                events: {
                   legendItemClick: function(event){
                     return false;
                   }
                },
                marker:{
                  radius: 0
                }
            });
            return this;
        },
        
        plotCounty: function(county, chart, redraw) {
            // county
            redraw = redraw || true;
            county = county || app.getCounty();
            chart = chart || this.chart;
            
            if (this.series.county) {
                this.series.county.remove(redraw);
            }
            
            if (_.isString(county)) {
                county = window.counties.find(function(c) {
                    return c.get('name') == county || c.get('formalname') == county;
                });
            }
            
            if (county) {
                var countyrates = this.collection.getCounty(county);
                this.series.county = chart.addSeries({
                    type: 'line',
                    data: _.map(countyrates, function(rate) { return rate.get('unemploymentrate'); }),
                    name: county.get('formalname'),
                    color: chart.options.colors[2],
                    events: {
                       legendItemClick: function(event){
                         return false;
                       }
                    },
                    marker:{
                      radius: 0
                    }
                });
            }
            return this;
        },
        
        chartOptions: function() {
            // default options for charts
            // data is deliberately left out and handled with methods
            return {
                chart: {
                    renderTo: this.id,
                    height: 120,
                    width: 620,
                    defaultSeriesType: 'spline',
                    marginLeft: 0,
                    marginRight: 0
                },
                colors: ['#17807e','#d8472b', '#e38d2c'],
                credits: {
                    text: null
                },
                title: {
                    text: null
                },
                legend: {
                    enabled: true,
                    floating: true,
                    align: 'left',
                    verticalAlign: 'top',
                    layout: 'horizontal',
                    borderWidth: 0,
                    margin: 0,
                    symbolPadding: 3,
                    symbolWidth: 10,
                    x: -15,
                    itemStyle: {
                      color: '#555'
                    },
                    itemHoverStyle: {
                      color: '#555'
                    }
                },
                xAxis: {
                    categories: this.getMonths(),
                    labels: {
                        enabled: true,
                        step: 12,
                        formatter: function() {
                            if (_.isString(this.value) && this.value.match(/\w+ \d{4}/)) {
                                return this.value.replace("January", "");
                            } else {
                                return ""
                            }
                        },
                        x: 10,
                        y: 18
                    },
                    tickInterval: 1,
                    tickmarkPlacement: 'on',
                    lineColor: '#ccc'
                },
                yAxis: {
                    labels: {
                        enabled: false
                    },
                    gridLineColor: '#fff',
                    title: {
                        text: null
                    },
                    tickInterval: 1,
                    tickmarkPlacement: "on",
                    min: 0,
                    max: 20
                },
                tooltip: {
                    crosshairs: false,
                    shared: true,
                    borderWidth: 0,
                    borderRadius: 0,
                    formatter: function() {
                        var s = '<strong>'+ this.x +'</strong>';

                        _.each(this.points, function(point, i, points) {
                            s += '<br/><span style="font-weight: bold; color:' + point.series.color + ';">' + point.series.name +':</span> '+
                            point.y +'%';
                        });

                        return s;
                    }
                },
                plotOptions: {
                    line: {
                        lineWidth: 1.5,
                        marker: {
                            radius: 4,
                            lineColor: '#666666',
                            lineWidth: 1
                        },
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1.5
                            }
                        },
                        events: {
                            click: function(p){
                                var date = p.point.category,
                                    county = location.hash.split('/')[2],
                                    url = app.getUrl(date.split(' ')[1], date.split(' ')[0], county);
                                app.navigate(url, true);
                            }
                        }
                    }
                },
                symbols: ['circle','circle','circle','circle','circle']
            };
        }
    });
    
    var TableView = Backbone.View.extend({
        
        initialize: function(options) {
            this.template = _.template($('#table-template').html());
            return this;
        },
        
        getRate: function() {
            if (window.app) {
                return window.app.getRate();
            } else {
                var parts = location.hash.replace('#', '').split('/'),
                    year = parts[0],
                    month = parts[1],
                    county = parts[2];
                return this.collection.getRate(year, month, county);
            }
        },
        
        render: function() {
            // rate = rate || this.model;
            var rate = this.getRate();
            // var date = window.app.getDate();
            if (!rate) return;
            var idaho = this.collection.find(function(r) {
                if (!r) return;
                return (r.get('area') === 'Idaho' && r.get('adjusted') && !r.get('preliminary') && _.isEqual(r.get('date'), rate.get('date')));
            });
            var context = rate.toJSON();
            context.idaho = idaho.toJSON();
            $(this.el).html(this.template(context));
            $('.data a').popover();
        }
    });
    
    // router
    var App = Backbone.Router.extend({
        
        initialize: function(options) {
            this.collection = options.collection || window.unemploymentrates;
            this.bind('route:showCounty', function(year, month, county) {
                if (this._county !== county) {
                    this._county = county;
                    this.trigger('change:county', county);
                }
            }, this);
            return this;
        },
        
        routes: {
            ''                      : 'initial',
            ':year/:month'          : 'showMonth',
            ':year/:month/:county'  : 'showCounty'
        },
        
        initial: function() {
            var url, rate;
            if (this.collection.length) {
                rate = this.getDefaultRate();
                url = this.getUrl(rate.get('year'), rate.get('month'), rate.get('area').replace(' County', ''));
                this.navigate(url, true);
            } else {
                this.collection.bind('reset', function(models) {
                    rate = this.getDefaultRate();
                    url = this.getUrl(rate.get('year'), rate.get('month'), rate.get('area').replace(' County', ''));
                    this.navigate(url, true);
                }, this);
            }
        },
        
        showMonth: function(year, month) {
            var date = this.getDate();
            if (!_.isEqual(date, this._date)) {
                this._date = date;
                this.trigger('change:date', date);
            }
            
            if (this.collection.length) {
                // window.umap.plot(year, month);
                window.slider.toDate(date);
                window.datatable.render();
            } else {
                this.collection.bind('reset', function(rates) {
                    // window.umap.plot(year, month);
                    window.slider.toDate(date);
                    window.datatable.render();
                });
            }
        },
        
        showCounty: function(year, month, county) {
            var date = this.getDate(),
                rate = this.getRate();
            
            if (!_.isEqual(date, this._date)) {
                this._date = date;
                this.trigger('change:date', date);
            }
            
            if (this.collection.length) {
                window.umap.plot();
                window.slider.toDate(date);
                window.datatable.render();
            } else {
                this.collection.bind('reset', function(rates) {
                    window.umap.plot();
                    window.datatable.render();
                    window.slider.toDate(date);
                });
            }
        },
        
        getUrl: function(year, month, county) {
            // utility method for getting a paty from args
            return _.compact([year, month, county]).join('/');
        },
        
        getDefaultRate: function() {
            // return the most recent rate for DEFAULT_AREA
            return this.collection.chain().filter(function(rate) {
                return (rate.get('area') == DEFAULT_AREA && rate.get('adjusted') && !rate.get('preliminary'));
            }).last().value();
        },
        
        getDate: function() {
            // get the current month, based on the URL
            var parts = Backbone.history.fragment.split('/');
            var year = parts[0],
                month = parts[1];
                
            return new Date(year, MONTHS[month.toLowerCase()]);
        },
        
        getCounty: function() {
            // get the current month, based on the URL
            var parts = Backbone.history.fragment.split('/');
            var year = parts[0],
                month = parts[1],
                county = parts[2];
            return window.counties.find(function(c) {
                return c.get('name') === county;
            });
        },
        
        getRate: function() {
            var parts = Backbone.history.fragment.split('/'),
                year = parts[0],
                month = parts[1],
                county = parts[2];
            return this.collection.getRate(year, month, county);
        }
    });
    
    // global instances
    window.counties = new CountyCollection();
    window.unemploymentrates = new UnemploymentRateCollection();
    window.umap = new UnemploymentMap({ 
        el: '#map', 
        collection: window.unemploymentrates, 
        scrollWheelZoom: false, 
        zoomControl: false, 
        attributionControl: false,
        doubleClickZoom: false 
    });
    window.slider = new Slider({ el: '#slider', collection: window.unemploymentrates });
    window.hichart = new Chart({ id: 'chart', collection: window.unemploymentrates });
    window.datatable = new TableView({ el: '#comparison', collection: window.unemploymentrates });
    window.app = new App({ collection: window.unemploymentrates });
    
    Backbone.history.start();    
})(window.jQuery);