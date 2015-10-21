function slideAdType(e) {
	var t = bns.Base.id("slider_ctrl");
	for (var n = 0; n < slideAdDivTol; n++) slideAdDiv[n].style.display = "none", t.className = "slider-ctrl btns";
	return slideAdDiv[e].style.display = "block", t.className = "slider-ctrl btns slider-ctrl-" + (e + 1), curSlideType = e, slideAd(0), !1
}
function slideAd(e) {
	clearInterval(slideAdTimer), slideAdTimer = setInterval(slideAutoShow, 4e3);
	var t = 5,
		n = bns.Base.tag(slideAdDiv[curSlideType], "a"),
		r = bns.Base.tag(bns.Base.id("slider-switcher"), "span");
	for (var i = 0; i < t; i++) n[i].style.display = "none", r[i].className = "switcher-btn";
	return n[e].style.display = "block", r[e].className = "switcher-btn switcher-on", curSlideAd = e, !1
}
function slideAutoShow() {
	curSlideAd++, curSlideAd == 5 && (curSlideAd = 0), slideAd(curSlideAd)
}
function setSlideAd() {
	slideAdTimer = setInterval(slideAutoShow, 4e3)
}
function callSwf(e) {
	getSwfObj("swfcontent").closeMusic(e)
}
function getNavData() {
	return [["1/a1.png", "1/a2.png", "1/a3.png", "1/a4.png", "Word1.png"], ["2/b1.png", "2/b2.png", "2/b3.png", "2/b4.png", "2/b5.png", "2/b6.png", "Word2.png"], ["3/c1.png", "3/c2.png", "3/c3.png", "3/c4.png", "3/c5.png", "Word3.png"], ["4/d1.png", "4/d2.png", "4/d3.png", "4/d4.png", "Word4.png"], ["5/e1.png", "Word5.png"], ["6/f1.png", "6/f2.png", "6/f3.png", "6/f4.png", "6/f5.png", "Word6.png"], ["7/g1.png", "7/g2.png", "7/g3.png", "7/g4.png", "Word7.png"]]
}
function toNav(e) {
	switch (e) {
	case 0:
		pgvSendClick({
			hottag: "index.flash.charac1"
		}), window.open("http://bns.qq.com/act/a20131006audiovisual/graphics.shtml");
		break;
	case 1:
		pgvSendClick({
			hottag: "index.flash.charac2"
		}), window.open("http://bns.qq.com/act/a20131008profession/blademaster.shtml");
		break;
	case 2:
		pgvSendClick({
			hottag: "index.flash.charac3"
		}), window.open("http://bns.qq.com/act/a20131012fighting/defense.shtml");
		break;
	case 3:
		pgvSendClick({
			hottag: "index.flash.charac4"
		}), window.open("http://bns.qq.com/act/a20131006dodge");
		break;
	case 4:
		pgvSendClick({
			hottag: "index.flash.charac5"
		}), window.open("http://bns.qq.com/act/a20131006practice");
		break;
	case 5:
		pgvSendClick({
			hottag: "index.flash.charac6"
		}), window.open("http://bns.qq.com/act/a20131005face");
		break;
	case 6:
		pgvSendClick({
			hottag: "index.flash.charac7"
		}), window.open("http://bns.qq.com/act/a20130926fashion");
		break;
	default:
		return pgvSendClick({
			hottag: "index.flash.characdefault"
		}), !1
	}
}
function getCharaData() {
	return [[0, 1, 4], [1, 3], [2, 5, 6], [0, 2]]
}
function do_speed_report() {
	function e(e) {
		var t = new Date;
		n.push(e + "=" + (e === 1 ? t - d0 : t - d1))
	}
	var t, n = new Array;
	e(1), e(2);
	var r = "http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7718&flag2=63&flag3=2&" + n.join("&");
	Math.random() < .3 && (t = new Image, t.src = r)
}
function opAnimPer(e) {
	clearTimeout(opEveTimer), opEveTimer = setTimeout(nextOp, 3e3);
	for (var t = 0; t < opEveLinksL; t++) opEveLinks[t].style.display = "none";
	opEveLinks[e].style.display = "block"
}
function nextOp() {
	curOpEve++, curOpEve == 5 && (curOpEve = 0), opAnimPer(curOpEve)
}
function prevOp() {
	curOpEve--, curOpEve == -1 && (curOpEve = 4), opAnimPer(curOpEve)
}
function opAnimStart() {
	opEveTimer = setTimeout(function() {
		opAnimPer(0)
	}, 3e3)
}
var bns = new Object;
bns.Base = {
	id: function(e) {
		return document.getElementById(e)
	},
	tag: function(e, t) {
		return e.getElementsByTagName(t)
	},
	gclass: function(e, t, n) {
		var r = typeof e == "string" ? bns.Base.id(e) : document.body,
			i = r.getElementsByTagName(t),
			s = [];
		for (var o = 0; o < i.length; o++) i[o].className.indexOf(n) !== -1 && s.push(i[o]);
		return s
	},
	bind: function(e, t, n, r) {
		r = r || !1, window.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent("on" + t, n)
	},
	unbind: function(e, t, n) {
		window.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n)
	},
	css: function(e, t, n) {
		if (arguments.length < 2) return !0;
		if (arguments.length == 2) {
			if (document.defaultView) return document.defaultView.getComputedStyle(e, null).getPropertyValue(t);
			if (bns.Base.browser.msie && t == "opacity") {
				var r = 1;
				return e.filters.alpha ? r = e.filters.alpha.opacity : e.filters["DXImageTransform.Microsoft.Alpha"] && (r = e.filters["DXImageTransform.Microsoft.Alpha"].opacity), r
			}
			return t = t.replace(/\-(\w)/g, function(e, t) {
				return t.toUpperCase()
			}), e.currentStyle[t]
		}
		if (bns.Base.browser.msie && t == "opacity") return e.currentStyle.hasLayout || (e.style.zoom = 1), e.filters.alpha ? e.filters.alpha.opacity = n * 100 : e.style.filter = "alpha(opacity=" + n * 100 + ")", e;
		t = t.replace(/\-(\w)/g, function(e, t) {
			return t.toUpperCase()
		}), e.style[t] = n
	},
	browser: function() {
		var e = window.navigator.userAgent.toLowerCase(),
			t = {
				msie: /msie/.test(window.navigator.userAgent.toLowerCase()) && !/opera/.test(e),
				opera: /opera/.test(e),
				safari: /webkit/.test(e) && !/chrome/.test(e),
				firefox: /firefox/.test(e),
				chrome: /chrome/.test(e)
			},
			n = "";
		for (var r in t) if (t[r]) {
			n = "safari" == r ? "version" : r;
			break
		}
		return t.version = n && RegExp("(?:" + n + ")[\\/: ]([\\d.]+)").test(e) ? RegExp.$1 : "0", t
	}(),
	each: function(e, t) {
		var n = 0;
		for (var r in e) if (!e.hasOwnProperty || e.hasOwnProperty(r)) t.call(e, n, e[r]), n++
	},
	attr: function(e, t, n) {
		if (!e || !t) return null;
		if (!n) return e.getAttribute(t);
		e.setAttribute(t, n, 0)
	}
}, bns.Script = {
	script: function(e) {
		var t = document.createElement("script");
		return t.src = e, t.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(t), t
	},
	chkload: function(e, t, n) {
		var r = bns.Script.script(e);
		navigator.userAgent.indexOf("MSIE") != -1 ? r.onreadystatechange = function() {
			if (this.readyState && this.readyState == "loading") return;
			t(n)
		} : r.onload = function() {
			t(n)
		}
	},
	delayPic: function(e, t, n) {
		var r = bns.Base.id(e);
		n ? r.style.backgroundImage = "url(" + t + "?v=" + Math.random() + ")" : r.src = t + "?v=" + Math.random()
	},
	tabHandler: function(e, t, n, r) {
		var i = e,
			s = t,
			o = 0;
		if (i.length && s.length) for (o in i)(function(e) {
			bns.Base.bind(i[e], n, function() {
				bns.Base.each(s, function(e, t) {
					bns.Base.css(t, "display", "none")
				}), bns.Base.each(i, function(e, t) {
					t.className = "tab-link"
				}), bns.Base.css(s[e], "display") !== "none" ? bns.Base.css(s[e], "display", "none") : bns.Base.css(s[e], "display", "block"), i[e].className = "tab-link tlink-on"
			})
		})(o);
		else bns.Base.bind(i, n, function() {
			bns.Base.css(s, "display") !== "none" ? bns.Base.css(s, "display", "none") : bns.Base.css(s, "display", "block")
		})
	},
	corp: function() {
		var e = bns.Base.id("coopmedia"),
			t = e.getElementsByTagName("ul")[0],
			n = bns.Base.id("fansite"),
			r = n.getElementsByTagName("ul")[0];
		e.onmouseover = t.onmouseover = function() {
			t.style.display = "block"
		}, e.onmouseout = t.onmouseout = function() {
			t.style.display = "none"
		}, n.onmouseover = r.onmouseover = function() {
			r.style.display = "block"
		}, n.onmouseout = r.onmouseout = function() {
			r.style.display = "none"
		}
	},
	verPop: function() {
		var e = bns.Base.id("ver_btn"),
			t = bns.Base.id("ver_pop"),
			n = bns.Base.id("ver_close");
		bns.Script.tabHandler(e, t, "click"), bns.Base.bind(n, "click", function() {
			t.style.display = "none"
		})
	},
	setTopNew: function() {
		var e = bns.Base.gclass("news", "ul", "news-list"),
			t = bns.Base.tag(e[0], "li");
		t[0].className = "news-hot"
	},
	navHoverEvent: function() {
		var e = bns.Base.id("nav");
		e.onmouseover = function() {
			e.className = "nav nav-on"
		}, e.onmouseout = function() {
			e.className = "nav"
		}
	},
	charaShow: function() {
		function e(e) {
			h = g[e], d = e;
			for (var n = 0; n < c; n++) l[n].className = "career-btn";
			l[e].className += " careebtn-on", u = E + l[e].getAttribute("data-chara") + "/";
			for (var n = 0; n < f; n++) a[n].className = b;
			for (var n = 0; n < g[e].length; n++) a[g[e][n]].className = y, function(n) {
				bns.Base.bind(a[g[e][n]], "click", function() {
					if (a[g[e][n]].className == b) return;
					t(g[e][n], a[g[e][n]].getAttribute("data-chara") + ".jpg", n)
				})
			}(n);
			t(h[p], a[h[p]].getAttribute("data-chara") + ".jpg", p)
		}
		function t(e, t, n) {
			o.setAttribute("src", u + t), m.setAttribute("href", v + a[e].getAttribute("data-url") + ".shtml");
			for (var r = 0; r < f; r++) a[r].className == w && (a[r].className = y);
			a[e].className = w, p = n
		}
		function n() {
			p++;
			if (p == h.length) {
				p = 0, d++, d == g.length && (d = 0), e(d);
				return
			}
			t(h[p], a[h[p]].getAttribute("data-chara") + ".jpg", p)
		}
		function r() {
			p--;
			if (p < 0) {
				d--, d < 0 && (d = g.length - 1), p = g[d].length - 1, e(d);
				return
			}
			t(h[p], a[h[p]].getAttribute("data-chara") + ".jpg", p)
		}
		var i = bns.Base.id("career-prev"),
			s = bns.Base.id("career-next"),
			o = bns.Base.id("career-pic"),
			u = "",
			a = bns.Base.tag(bns.Base.id("career-list"), "a"),
			f = a.length,
			l = bns.Base.tag(bns.Base.id("career-ctrl"), "a"),
			c = l.length,
			h = [],
			p = 0,
			d = 3,
			v = "http://bns.qq.com/act/a20131008profession/",
			m = bns.Base.id("career-url"),
			g = getCharaData(),
			y = "career-link",
			b = "careelink-disable",
			w = "careelink-on",
			E = "http://ossweb-img.qq.com/images/bns/web201307/career/";
		for (var S = 0; S < c; S++)(function(t) {
			bns.Base.bind(l[t], "click", function() {
				p = 0, e(t)
			})
		})(S);
		bns.Base.bind(i, "click", function() {
			r()
		}), bns.Base.bind(s, "click", function() {
			n()
		}), e(2), n(), n()
	},
	imgSwitcher: function(e, t, n) {
		function r() {
			for (o = 0; o < s; o++) if (bns.Base.css(i[o], "display") !== "none") return o + 1
		}
		var i = bns.Base.gclass(e, "a", t),
			s = i.length,
			o, u = r();
		n === "next" ? (bns.Base.each(i, function(e, t) {
			bns.Base.css(t, "display", "none")
		}), i[u + 1 > s ? 0 : u].style.display = "block") : n === "prev" && (bns.Base.each(i, function(e, t) {
			bns.Base.css(t, "display", "none")
		}), i[u - 1 > 0 ? u - 2 : s - 1].style.display = "block")
	},
	mediaHover: function() {
		function e() {
			for (var e = 0; e < n.length; e++) r[0].style.display = "none"
		}
		var t = bns.Base.id("media_mod"),
			n = bns.Base.gclass("media_mod", "a", "media-link"),
			r = bns.Base.gclass("media_mod", "ul", "media-list"),
			i = bns.Base.gclass("media_mod", "a", "media-large");
		for (var s = 0; s < n.length; s++)(function(t) {
			n[t].onmouseover = i[t].onmouseover = function() {
				e(), i[t].style.display = "block"
			}, i[t].onmouseout = function() {
				r[0].style.display = "block", i[t].style.display = "none"
			}
		})(s)
	}
};
var curSlideType = 0,
	curSlideAd = 0,
	slideCon = bns.Base.id("slideList"),
	slideAdDiv = bns.Base.tag(slideCon, "div"),
	slideAdDivTol = slideAdDiv.length,
	slideAdTimer = null,
	curOpEve = 0,
	opEveCon = bns.Base.id("opevent"),
	opEveLinks = bns.Base.tag(opEveCon, "a"),
	opEveLinksL = opEveLinks.length,
	opEveTimer = null,
	d1 = new Date;
bns.init = function() {
	do_speed_report();
	var e = "http://ossweb-img.qq.com/images/bns/web201307";
	bns.Script.delayPic("body", e + "/wrap_bg_index.jpg", !0), bns.Script.delayPic("lside", e + "/main_visual_0303.jpg", !0), bns.Script.delayPic("media_list", e + "/media_bg.jpg", !0), bns.Script.delayPic("version_pic", e + "/version2.jpg"), bns.Script.delayPic("dupli_img_1", e + "/duplicate/198x138_1.jpg"), bns.Script.delayPic("dupli_img_2", e + "/duplicate/198x138_2.jpg"), bns.Script.delayPic("dupli_img_3", e + "/duplicate/198x138_3.jpg"), bns.Script.delayPic("dupli_img_4", e + "/duplicate/198x138_4.jpg"), bns.Script.delayPic("dupli_img_5", e + "/duplicate/198x138_5.jpg"), bns.Script.delayPic("asstools_img_1", e + "/tools/198x138_1.jpg"), bns.Script.delayPic("asstools_img_2", e + "/tools/198x138_2.jpg"), bns.Script.delayPic("asstools_img_3", e + "/tools/198x138_3.jpg"), bns.Script.delayPic("asstools_img_4", e + "/tools/198x138_4.jpg"), bns.Script.delayPic("asstools_img_5", e + "/tools/198x138_5.jpg"), bns.Script.delayPic("career_intro_pic", e + "/medias/101515.jpg"), bns.Script.delayPic("faq_intro_pic", e + "/medias/101516.jpg"), bns.Script.delayPic("cloth_pic_01", e + "/cloth/cloth_01.jpg"), bns.Script.delayPic("cloth_pic_02", e + "/cloth/cloth_02.jpg"), bns.Script.delayPic("cloth_pic_03", e + "/cloth/cloth_03.jpg"), bns.Script.delayPic("cloth_pic_04", e + "/cloth/cloth_04.jpg"), bns.Script.delayPic("event_1_pic", e + "/events_chg/198x168_01.jpg"), bns.Script.delayPic("event_2_pic", e + "/events_chg/198x168_13.jpg"), bns.Script.delayPic("event_3_pic", e + "/events_chg/198x168_03.jpg"), bns.Script.delayPic("video_pic_1", e + "/videos/pic_1.jpg"), bns.Script.delayPic("video_pic_2", e + "/videos/pic_2.jpg"), bns.Script.delayPic("video_pic_3", e + "/videos/pic_3.jpg"), bns.Script.delayPic("video_pic_4", e + "/videos/pic_4.jpg"), bns.Script.delayPic("event_4_pic", e + "/events_chg/198x168_04.jpg"), bns.Script.delayPic("event_5_pic", e + "/events_chg/198x168_14.jpg"), bns.Script.delayPic("event_6_pic", e + "/events_chg/198x168_06.jpg"), bns.Script.delayPic("event_7_pic", e + "/events_chg/198x168_07.jpg"), bns.Script.delayPic("event_8_pic", e + "/events_chg/198x168_08.jpg"), bns.Script.delayPic("event_9_pic", e + "/events_chg/198x168_09.jpg"), bns.Script.delayPic("event_16_pic", e + "/events_chg/198x168_16.jpg"), bns.Script.delayPic("event_11_pic", e + "/events_chg/198x168_15.jpg"), bns.Script.delayPic("event_12_pic", e + "/events_chg/198x168_12.jpg"), bns.Script.delayPic("media_pic_1", e + "/medias/17173.png"), bns.Script.delayPic("media_pic_2", e + "/medias/duowan.png"), bns.Script.delayPic("media_pic_3", e + "/medias/766.png"), bns.Script.delayPic("media_pic_4", e + "/medias/youxipingdao.png"), bns.Script.delayPic("mnews_pic_1", e + "/medias/032801.jpg"), bns.Script.delayPic("mnews_pic_2", e + "/medias/032802.jpg"), bns.Script.delayPic("mnews_pic_3", e + "/medias/101402.jpg"), bns.Script.delayPic("mnews_pic_4_1", e + "/medias/wallpaper_1.jpg"), bns.Script.delayPic("mnews_pic_4_2", e + "/medias/wallpaper_2.jpg"), bns.Script.delayPic("mnews_pic_4_3", e + "/medias/wallpaper_3.jpg"), bns.Script.delayPic("mnews_pic_4_4", e + "/medias/wallpaper_4.jpg"), bns.Script.delayPic("mnews_pic_5_1", e + "/medias/paint_1.jpg"), bns.Script.delayPic("mnews_pic_5_2", e + "/medias/paint_2.jpg"), bns.Script.delayPic("mnews_pic_5_3", e + "/medias/paint_3.jpg"), bns.Script.charaShow();
	var t = bns.Base.gclass("news", "a", "tab-link"),
		n = bns.Base.gclass("news", "div", "news-con"),
		r = bns.Base.gclass("mod_list_2", "a", "tab-link"),
		i = bns.Base.gclass("mod_list_2", "div", "tab-con"),
		s = bns.Base.gclass("mod_list_1", "a", "tab-link"),
		o = bns.Base.gclass("mod_list_1", "div", "tab-con");
	bns.Script.tabHandler(t, n, "click"), bns.Script.tabHandler(r, i, "click"), bns.Script.tabHandler(s, o, "click"), bns.Script.corp(), bns.Script.setTopNew(), bns.Script.navHoverEvent(), bns.Script.chkload("http://ossweb-img.qq.com/images/js/comm/tgadshow.min.js", function() {
		bns.Script.chkload("http://ossweb-img.qq.com/images/js/title.js", function() {
			ostb_int()
		}, "")
	}, ""), bns.Script.chkload("http://ossweb-img.qq.com/images/js/basic/tgswfobj_s.js", function() {
		insertSwfV2("swfcontent", "http://ossweb-img.qq.com/images/bns/web201307/flash/bnsnav.swf?v=" + Math.random(), "873", "218", {}, {}, "10.0")
	}, ""), bns.Script.chkload("http://tajs.qq.com/stats?sId=22212170", function() {
		bns.Script.chkload("http://pingjs.qq.com/ping_tcss_ied.js", function() {
			typeof pgvMain == "function" && pgvMain()
		}, "")
	}, ""), setSlideAd(), opAnimStart()
}, window.onload = function() {
	bns.init()
}