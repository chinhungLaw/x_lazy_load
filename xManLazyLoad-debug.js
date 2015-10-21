(function(win,doc){
	var app={
		getByClass:function (oParent, sClass){
			var aEle=oParent.getElementsByTagName('*');
			var aResult=[];
			var re=new RegExp('\\b'+sClass+'\\b', 'i');
			for(var i=0;i<aEle.length;i++){
				if(re.test(aEle[i].className)){
						aResult.push(aEle[i]);
				}
			}
			return aResult;
		},
		get_pos:function(elem){
			if(!elem) return false;
			var left = elem.offsetLeft,
				top = elem.offsetTop,
				current = elem;
			if(!top){
				while(current!=document && current!=null && !current.offsetTop){				
					current = current.parentNode ;
				}
			}else{
				current = elem.offsetParent || elem.parentNode ;
			}
			while(current!=document && current!=null){
				left += current.offsetLeft;
				top += current.offsetTop;
				current = current.offsetParent || current.parentNode ;
			}
			return {"left": left, "top": top};
		},
		removeClass : function(elem, oneClass){
			if(!elem || !elem.className) return false;
			var ownClass = elem.className.split(" "),
				had = false;
			for(var i = 0; i < ownClass.length; i++){
				if(ownClass[i] === oneClass){
					ownClass.splice(i, 1);
					had = true;
					break;
				}
			}
			if(had){
				elem.className = "";
				if(ownClass.length < 1){
					return had;
				}else if(ownClass.length == 1){
					elem.className = ownClass[0];
				}else if(ownClass.length >1){
					for(var i = 0; i < ownClass.length; i++){
						if(i == ownClass.length - 1){
							elem.className += ownClass[i];
						}else{
							elem.className += ownClass[i] + " ";
						}
					}
				}
			}	
			return had;	
		},
		addEvent: function(elem, eventName, handler){
			if(elem){
				if(elem.addEventListener){
					return elem.addEventListener(eventName, handler, false);
				}else if(elem.attachEvent){
					return elem.attachEvent("on" + eventName, handler);
				}else {
					elem["on" + eventName] = handler;
				}
			}
		},
		removeEvent: function(elem, eventName, handler){
			if(elem){
				if(elem.removeEventListener){
					return elem.removeEventListener(eventName, handler, false);
				}else if(elem.detachEvent){
					return elem.detachEvent("on" + eventName, handler);
				}else {
					elem["on" + eventName] = null;
				}
			}	
		},
		startMove:function(obj, json, fn){
			var iSpeed = 0;
			clearInterval(obj.timer);
			obj.timer=setInterval(function (){
				var bStop=true;		//这一次运动就结束了——所有的值都到达了
				for(var attr in json){
					//1.取当前的值
					var iCur=0;
					if(attr=='opacity'){
						iCur=parseInt(parseFloat(app.getStyle(obj, attr))*100);
					}else{
						iCur=parseInt(app.getStyle(obj, attr));
					}
					//2.算速度
					var iSpeed=(json[attr]-iCur)/8;
					iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);					
					//3.检测停止
					if(iCur!=json[attr]){
						bStop=false;
					}
					if(attr=='opacity'){
						obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
						obj.style.opacity=(iCur+iSpeed)/100;
					}
					else{
						obj.style[attr]=iCur+iSpeed+'px';
					}
				}				
				if(bStop){
					clearInterval(obj.timer);
					if(fn){
						fn();
					}
				}
			}, 30);
		},
		getStyle:function(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}
			else{
				return getComputedStyle(obj, false)[attr];
			}
		}
	}
	var xLazyLoad={
		init:function(){
			this.parm();
			this.getImg();
			this.getPos();
			this.bindEvent();
			this.lazyShow();
		},
		parm:function(){
			var xlz=doc.getElementById('xManLazyLoad');
			this.img={};
			this.img.onerrorImgUrl = "";
			this.img.srcStore      = xlz? xlz.getAttribute('xdata-attr') : "xLazyImg";
			this.img.className     = xlz? xlz.getAttribute('xdata-class') : "xLazyClass";
			this.img.lazy  		   = xlz? parseInt(xlz.getAttribute('xdata-lazy')) : 20;
		},
		getImg:function(){
			this.img.node=app.getByClass( doc.getElementsByTagName('body')[0] , this.img.className);
			this.img.length=this.img.node.length;
		},
		getPos:function(){
			var This=xLazyLoad;
			for(var i=0;i<This.img.node.length;i++){
				This.img.node[i].xLazyPos=app.get_pos(This.img.node[i]);
			}
		},
		bindEvent:function(){
			if(this.img.node.length >0){
				app.addEvent(win,'scroll',this.lazyShow);
				app.addEvent(win,'resize',this.getPos);
			}
		},
		lazyShow:function(){
			var This=xLazyLoad;
			var winHeight=win.innerHeight || document.documentElement.clientHeight;
			var scrTop=document.body.scrollTop || document.documentElement.scrollTop;
			if(This.img.length>0){
				for(var i=0;i<This.img.node.length;i++){
					~function(i){
						var node=This.img.node[i];
						var iSrc=node.getAttribute(This.img.srcStore);
						if(iSrc){
							if(winHeight+scrTop+This.img.lazy>=node.xLazyPos.top && scrTop-This.img.lazy<=node.xLazyPos.top){
								var img=new Image();
								img.onload = function(){
									node.style.filter="alpha(opacity=0)";
									node.style.opacity=0;
									node.removeAttribute(This.img.srcStore);
									app.removeClass(node,This.img.className);
									This.img.length--;
									node.setAttribute('src',iSrc);
									app.startMove(node,{'opacity':'100'});	
								};
								img.src=iSrc;
							}
						}
					}(i)
				}
			}else{
				This.img.node=app.getByClass( doc.getElementsByTagName('body')[0] , This.img.className);
				This.img.length=This.img.node.length;
				if(This.img.length<=0){
					app.removeEvent(win,'scroll',This.lazyShow);
					app.removeEvent(win,'resize',This.getPos);
				}
			}
		}
	};
	xLazyLoad.init();

}(window,document));