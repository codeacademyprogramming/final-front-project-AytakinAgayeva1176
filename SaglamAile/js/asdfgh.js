var isMobile = false; //initiate as false

// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;


var _window = $(window),
    window_height = _window.height();

if (isMobile) {
    $("body").addClass("mobile");
}

/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PerfectScrollbar = e()
}(this, function () {
    "use strict";
    function t(t) {
        return getComputedStyle(t)
    }

    function e(t, e) {
        for (var i in e) {
            var r = e[i];
            "number" == typeof r && (r += "px"), t.style[i] = r
        }
        return t
    }

    function i(t) {
        var e = document.createElement("div");
        return e.className = t, e
    }

    function r(t, e) {
        if (!v)throw new Error("No element matching method supported");
        return v.call(t, e)
    }

    function l(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }

    function n(t, e) {
        return Array.prototype.filter.call(t.children, function (t) {
            return r(t, e)
        })
    }

    function o(t, e) {
        var i = t.element.classList, r = m.state.scrolling(e);
        i.contains(r) ? clearTimeout(Y[e]) : i.add(r)
    }

    function s(t, e) {
        Y[e] = setTimeout(function () {
            return t.isAlive && t.element.classList.remove(m.state.scrolling(e))
        }, t.settings.scrollingThreshold)
    }

    function a(t, e) {
        o(t, e), s(t, e)
    }

    function c(t) {
        if ("function" == typeof window.CustomEvent)return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e
    }

    function h(t, e, i, r, l) {
        var n = i[0], o = i[1], s = i[2], h = i[3], u = i[4], d = i[5];
        void 0 === r && (r = !0), void 0 === l && (l = !1);
        var f = t.element;
        t.reach[h] = null, f[s] < 1 && (t.reach[h] = "start"), f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"), e && (f.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)), r && a(t, h)), t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]))
    }

    function u(t) {
        return parseInt(t, 10) || 0
    }

    function d(t) {
        return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]")
    }

    function f(e) {
        var i = t(e);
        return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth)
    }

    function p(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
    }

    function b(t, i) {
        var r = {width: i.railXWidth}, l = Math.floor(t.scrollTop);
        i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft, i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - l : r.top = i.scrollbarXTop + l, e(i.scrollbarXRail, r);
        var n = {top: l, height: i.railYHeight};
        i.isScrollbarYUsingRight ? i.isRtl ? n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : n.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : n.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, n), e(i.scrollbarX, {
            left: i.scrollbarXLeft,
            width: i.scrollbarXWidth - i.railBorderXWidth
        }), e(i.scrollbarY, {top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth})
    }

    function g(t, e) {
        function i(e) {
            b[d] = g + Y * (e[a] - v), o(t, f), R(t), e.stopPropagation(), e.preventDefault()
        }

        function r() {
            s(t, f), t[p].classList.remove(m.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i)
        }

        var l = e[0], n = e[1], a = e[2], c = e[3], h = e[4], u = e[5], d = e[6], f = e[7], p = e[8], b = t.element,
            g = null, v = null, Y = null;
        t.event.bind(t[h], "mousedown", function (e) {
            g = b[d], v = e[a], Y = (t[n] - t[l]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", r), t[p].classList.add(m.state.clicking), e.stopPropagation(), e.preventDefault()
        })
    }

    var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        m = {
            main: "ps", element: {
                thumb: function (t) {
                    return "ps__thumb-" + t
                }, rail: function (t) {
                    return "ps__rail-" + t
                }, consuming: "ps__child--consume"
            }, state: {
                focus: "ps--focus", clicking: "ps--clicking", active: function (t) {
                    return "ps--active-" + t
                }, scrolling: function (t) {
                    return "ps--scrolling-" + t
                }
            }
        }, Y = {x: null, y: null}, X = function (t) {
            this.element = t, this.handlers = {}
        }, w = {isEmpty: {configurable: !0}};
    X.prototype.bind = function (t, e) {
        void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1)
    }, X.prototype.unbind = function (t, e) {
        var i = this;
        this.handlers[t] = this.handlers[t].filter(function (r) {
            return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1)
        })
    }, X.prototype.unbindAll = function () {
        var t = this;
        for (var e in t.handlers)t.unbind(e)
    }, w.isEmpty.get = function () {
        var t = this;
        return Object.keys(this.handlers).every(function (e) {
            return 0 === t.handlers[e].length
        })
    }, Object.defineProperties(X.prototype, w);
    var y = function () {
        this.eventElements = []
    };
    y.prototype.eventElement = function (t) {
        var e = this.eventElements.filter(function (e) {
            return e.element === t
        })[0];
        return e || (e = new X(t), this.eventElements.push(e)), e
    }, y.prototype.bind = function (t, e, i) {
        this.eventElement(t).bind(e, i)
    }, y.prototype.unbind = function (t, e, i) {
        var r = this.eventElement(t);
        r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
    }, y.prototype.unbindAll = function () {
        this.eventElements.forEach(function (t) {
            return t.unbindAll()
        }), this.eventElements = []
    }, y.prototype.once = function (t, e, i) {
        var r = this.eventElement(t), l = function (t) {
            r.unbind(e, l), i(t)
        };
        r.bind(e, l)
    };
    var W = function (t, e, i, r, l) {
        void 0 === r && (r = !0), void 0 === l && (l = !1);
        var n;
        if ("top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"]; else {
            if ("left" !== e)throw new Error("A proper axis should be provided");
            n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }
        h(t, i, n, r, l)
    }, L = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    }, R = function (t) {
        var e = t.element, i = Math.floor(e.scrollTop);
        t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (n(e, m.element.rail("x")).forEach(function (t) {
            return l(t)
        }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (n(e, m.element.rail("y")).forEach(function (t) {
            return l(t)
        }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = p(t, u(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = p(t, u(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = u(i * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), b(e, t), t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0)
    }, T = {
        "click-rail": function (t) {
            t.event.bind(t.scrollbarY, "mousedown", function (t) {
                return t.stopPropagation()
            }), t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
                var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                t.element.scrollTop += i * t.containerHeight, R(t), e.stopPropagation()
            }), t.event.bind(t.scrollbarX, "mousedown", function (t) {
                return t.stopPropagation()
            }), t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
                var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                t.element.scrollLeft += i * t.containerWidth, R(t), e.stopPropagation()
            })
        }, "drag-thumb": function (t) {
            g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
        }, keyboard: function (t) {
            function e(e, r) {
                var l = Math.floor(i.scrollTop);
                if (0 === e) {
                    if (!t.scrollbarYActive)return !1;
                    if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0)return !t.settings.wheelPropagation
                }
                var n = i.scrollLeft;
                if (0 === r) {
                    if (!t.scrollbarXActive)return !1;
                    if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0)return !t.settings.wheelPropagation
                }
                return !0
            }

            var i = t.element, l = function () {
                return r(i, ":hover")
            }, n = function () {
                return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus")
            };
            t.event.bind(t.ownerDocument, "keydown", function (r) {
                if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l() || n())) {
                    var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                    if (o) {
                        if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement; else for (; o.shadowRoot;)o = o.shadowRoot.activeElement;
                        if (d(o))return
                    }
                    var s = 0, a = 0;
                    switch (r.which) {
                        case 37:
                            s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
                            break;
                        case 38:
                            a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
                            break;
                        case 39:
                            s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
                            break;
                        case 40:
                            a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
                            break;
                        case 32:
                            a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                            break;
                        case 33:
                            a = t.containerHeight;
                            break;
                        case 34:
                            a = -t.containerHeight;
                            break;
                        case 36:
                            a = t.contentHeight;
                            break;
                        case 35:
                            a = -t.contentHeight;
                            break;
                        default:
                            return
                    }
                    t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a, i.scrollLeft += s, R(t), e(s, a) && r.preventDefault())
                }
            })
        }, wheel: function (e) {
            function i(t, i) {
                var r = Math.floor(o.scrollTop), l = 0 === o.scrollTop, n = r + o.offsetHeight === o.scrollHeight,
                    s = 0 === o.scrollLeft, a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
                return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation
            }

            function r(t) {
                var e = t.deltaX, i = -1 * t.deltaY;
                return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i]
            }

            function l(e, i, r) {
                if (!L.isWebKit && o.querySelector("select:focus"))return !0;
                if (!o.contains(e))return !1;
                for (var l = e; l && l !== o;) {
                    if (l.classList.contains(m.element.consuming))return !0;
                    var n = t(l);
                    if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                        var s = l.scrollHeight - l.clientHeight;
                        if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0))return !0;
                        var a = l.scrollWidth - l.clientWidth;
                        if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0))return !0
                    }
                    l = l.parentNode
                }
                return !1
            }

            function n(t) {
                var n = r(t), s = n[0], a = n[1];
                if (!l(t.target, s, a)) {
                    var c = !1;
                    e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed, c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed, c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed, o.scrollLeft += s * e.settings.wheelSpeed), R(e), (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault())
                }
            }

            var o = e.element;
            void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n)
        }, touch: function (e) {
            function i(t, i) {
                var r = Math.floor(h.scrollTop), l = h.scrollLeft, n = Math.abs(t), o = Math.abs(i);
                if (o > n) {
                    if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r)return 0 === window.scrollY && i > 0 && L.isChrome
                } else if (n > o && (t < 0 && l === e.contentWidth - e.containerWidth || t > 0 && 0 === l))return !0;
                return !0
            }

            function r(t, i) {
                h.scrollTop -= i, h.scrollLeft -= t, R(e)
            }

            function l(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }

            function n(t) {
                return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
            }

            function o(t) {
                if (n(t)) {
                    var e = l(t);
                    u.pageX = e.pageX, u.pageY = e.pageY, d = (new Date).getTime(), null !== p && clearInterval(p)
                }
            }

            function s(e, i, r) {
                if (!h.contains(e))return !1;
                for (var l = e; l && l !== h;) {
                    if (l.classList.contains(m.element.consuming))return !0;
                    var n = t(l);
                    if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                        var o = l.scrollHeight - l.clientHeight;
                        if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0))return !0;
                        var s = l.scrollLeft - l.clientWidth;
                        if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0))return !0
                    }
                    l = l.parentNode
                }
                return !1
            }

            function a(t) {
                if (n(t)) {
                    var e = l(t), o = {pageX: e.pageX, pageY: e.pageY}, a = o.pageX - u.pageX, c = o.pageY - u.pageY;
                    if (s(t.target, a, c))return;
                    r(a, c), u = o;
                    var h = (new Date).getTime(), p = h - d;
                    p > 0 && (f.x = a / p, f.y = c / p, d = h), i(a, c) && t.preventDefault()
                }
            }

            function c() {
                e.settings.swipeEasing && (clearInterval(p), p = setInterval(function () {
                    e.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p)
                }, 10))
            }

            if (L.supportsTouch || L.supportsIePointer) {
                var h = e.element, u = {}, d = 0, f = {}, p = null;
                L.supportsTouch ? (e.event.bind(h, "touchstart", o), e.event.bind(h, "touchmove", a), e.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (e.event.bind(h, "pointerdown", o), e.event.bind(h, "pointermove", a), e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o), e.event.bind(h, "MSPointerMove", a), e.event.bind(h, "MSPointerUp", c)))
            }
        }
    }, H = function (r, l) {
        var n = this;
        if (void 0 === l && (l = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");
        this.element = r, r.classList.add(m.main), this.settings = {
            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
        };
        for (var o in l)n.settings[o] = l[o];
        this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
        var s = function () {
            return r.classList.add(m.state.focus)
        }, a = function () {
            return r.classList.remove(m.state.focus)
        };
        this.isRtl = "rtl" === t(r).direction, this.isNegativeScroll = function () {
            var t = r.scrollLeft, e = null;
            return r.scrollLeft = -1, e = r.scrollLeft < 0, r.scrollLeft = t, e
        }(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new y, this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
        var c = t(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), e(this.scrollbarXRail, {display: "block"}), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), e(this.scrollbarXRail, {display: ""}), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
        var h = t(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(h.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null, this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth), e(this.scrollbarYRail, {display: "block"}), this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom), e(this.scrollbarYRail, {display: ""}), this.railYHeight = null, this.railYRatio = null, this.reach = {
            x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
            y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        }, this.isAlive = !0, this.settings.handlers.forEach(function (t) {
            return T[t](n)
        }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function (t) {
            return n.onScroll(t)
        }), R(this)
    };
    return H.prototype.update = function () {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {display: "block"}), e(this.scrollbarYRail, {display: "block"}), this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {display: "none"}), e(this.scrollbarYRail, {display: "none"}), R(this), W(this, "top", 0, !1, !0), W(this, "left", 0, !1, !0), e(this.scrollbarXRail, {display: ""}), e(this.scrollbarYRail, {display: ""}))
    }, H.prototype.onScroll = function (t) {
        this.isAlive && (R(this), W(this, "top", this.element.scrollTop - this.lastScrollTop), W(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, H.prototype.destroy = function () {
        this.isAlive && (this.event.unbindAll(), l(this.scrollbarX), l(this.scrollbarY), l(this.scrollbarXRail), l(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, H.prototype.removePsClasses = function () {
        this.element.className = this.element.className.split(" ").filter(function (t) {
            return !t.match(/^ps([-_].+|)$/)
        }).join(" ")
    }, H
});


/* Nav begin */
$("a.toggler").click(function () {
    var _this = $(this);
    if (_this.hasClass("active")) {
        _this.removeClass("active_last");
        $("body").removeClass("opened_nav");
        setTimeout(function () {
            _this.removeClass("active_second");
        }, 300);
        setTimeout(function () {
            _this.removeClass("active");
        }, 600);
        $("aside#aside_nav, header#header").removeClass("show_me");


    } else {
        _this.addClass("active");
        $("body").addClass("opened_nav");
        setTimeout(function () {
            _this.addClass("active_second");
        }, 300);
        setTimeout(function () {
            _this.addClass("active_last");
        }, 600);
        $("aside#aside_nav, header#header").addClass("show_me");

    }
    return false;
});
/* Nav end */


/* Fixed nav begin */
_window.scroll(function () {
    var top_pos = document.documentElement.scrollTop || document.body.scrollTop;
    if (_window.width() < 768) {
        if (top_pos > 120) {
            $("nav.inner_nav").addClass("fix");
            $("a.scroll_up").addClass("show_me");

        } else {
            $("nav.inner_nav").removeClass("fix");
            $("a.scroll_up").removeClass("show_me");
        }
    } else {
        if (top_pos > 240) {
            $("nav.inner_nav").addClass("fix");
            $("a.scroll_up").addClass("show_me");

        } else {
            $("nav.inner_nav").removeClass("fix");
            $("a.scroll_up").removeClass("show_me");
        }
    }

});

$("a.scroll_up").click(function () {
    $("html, body").animate({scrollTop: 0}, 300);
    return false;
});
/* Fixed nav end */


/* Add to order begin */
$(document).on('click', ".services_list .add a, .current_service header .add a, .analiz_wrapper .add a", function () {
    var t = $(this),
        id = t.data('id').toString(),
        basket = parseInt(t.data('basket')),
        count = parseInt($('.basket_link span, .services_list h3 strong u').html()),
        total = parseInt($('.total_price span').html()),
        price = parseInt(t.closest('.add').parent('div').find('.price span').html());
    //cookies = getCookie('analysis').split(',');

    if (t.hasClass('active')) {
        //var index = cookies.indexOf(id);
        //if (index > -1) {
        console.log('remove!');
        $.post('', {
            form: 'remove',
            id: id
        }, function (data) {
            //console.log(data);
        })

        count -= 1;
        total -= price;
        if (basket) t.closest('li').remove();
        //}
    } else {
        //if (cookies.indexOf(id) < 0) {

        $.post('', {
            form: 'add',
            id: id
        }, function (data) {
            //console.log(data);
        })

        count += 1;
        total += price;
        //}
    }

    if (!basket) t.toggleClass("active");
    $('.basket_link span, .services_list h3 strong u').html(count)
    $('.total_price span').html(total)

    if ($('.basket_link span').text() == "0") {
        $(".basket_footer").addClass("hide_me");
        $(".main_wrapper").removeClass("up_footer");
    } else {
        $(".basket_footer").removeClass("hide_me");
        $(".main_wrapper").addClass("up_footer");
    }


    /*return false;

     var t = $(this),
     id = t.data('id').toString(),
     basket = parseInt(t.data('basket')),
     count = parseInt($('.basket_link span, .services_list h3 strong u').html()),
     total = parseInt($('.total_price span').html()),
     price = parseInt(t.closest('.add').parent('div').find('.price span').html()),
     cookies = getCookie('analysis').split(',');

     if (t.hasClass('active')) {
     var index = cookies.indexOf(id);
     if (index > -1) {
     cookies.splice(index, 1);
     count -= 1;
     total -= price;
     if (basket) t.closest('li').remove();
     }
     } else {
     if (cookies.indexOf(id) < 0) {
     cookies.push(id);
     count += 1;
     total += price;
     }
     }

     setCookie('analysis', cookies)
     if (!basket) t.toggleClass("active");
     $('.basket_link span, .services_list h3 strong u').html(count)
     $('.total_price span').html(total)

     if ($('.basket_link span').text() == "0") {
     $(".basket_footer").addClass("hide_me");
     $(".main_wrapper").removeClass("up_footer");
     } else {
     $(".basket_footer").removeClass("hide_me");
     $(".main_wrapper").addClass("up_footer");
     }*/

    return false;
});

if ($(".basket_footer.fixed").length) {
    if ($('.basket_link span').text() == "0") {
        $(".basket_footer").addClass("hide_me");
        $(".main_wrapper").removeClass("up_footer");
    } else {
        $(".basket_footer").removeClass("hide_me");
        $(".main_wrapper").addClass("up_footer");
    }
}
/* Add to order end */

$('.clear_basket a').click(function () {
    $('.services_list li:not(.empty)').remove();
    $('.services_list li.empty').addClass('show');
    $('.total_price span').html(0)
    $('.total_analysis').html(0)
    $('.order_button').hide();
    //setCookie('analysis', '')
    $.post('', {
        form: 'clear'
    }, function (data) {

    })
})


/* Remove from basket confirm begin */
$(".services_list .delete a").click(function () {
    var t = $(this),
        id = t.data('id'),
        price = parseInt(t.closest('li').find('.price span').html()),
        total_analysis = parseInt($('.total_analysis').html()),
        total_price = parseInt($('.total_price span').html());

    total_analysis -= 1;
    total_price -= price;
    $('.total_analysis').html(total_analysis)
    $('.total_price span').html(total_price);
    t.closest('li').remove();
    if (parseInt($('.total_analysis').html()) == 0) {
        $('.order_button').hide();
    }

    $.post('', {
        form: 'remove',
        id: id
    }, function () {

    })
    return false;
});
/* Remove from basket confirm end */


/* Text tabs begin */
$(".current_service .tabs a").click(function () {
    var _this = $(this),
        _this_index = _this.parent().index();
    $(".current_service .tabs a").removeClass("active");
    _this.addClass("active");
    $(".current_service .text > div").removeClass("show_me").eq(_this_index).addClass("show_me");

    return false;
});

$(".current_service .tabs select").change(function () {
    var _this = $(this),
        _this_index = _this.find("option:selected").index();
    $(".current_service .tabs li").eq(_this_index).find("a").click();
});
/* Text tabs end */


/* Form tabs begin */
$(".forms_block .tabs a").click(function () {
    var _this = $(this),
        _this_index = _this.index();
    $(".forms_block .tabs a").removeClass("active").eq(_this_index).addClass("active");
    $(".form_slide > div > div").removeClass("show_me").eq(_this_index).addClass("show_me");

    return false;
});
/* Form tabs end */



// Map function
if ($("#simple_map").length) {
    $.each(map_json_data, function (i, v) {
        latitude = v.lat;
        longitude = v.lng;
    });
}

/* Map begin */
function gmap() {
    var myLatlng = new google.maps.LatLng(latitude, longitude);
    var myOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    }

    var map = new google.maps.Map(document.getElementById("simple_map"), myOptions);


    $.each(map_json_data, function (i, v) {
        var position_i = new google.maps.LatLng(v.lat, v.lng);
        new google.maps.Marker({
            position: position_i,
            map: map,
            title: v.name,
            icon: '//www.saglamaile.az/site/templates/img/location_pin.svg'
        });

        var contentString = '<div class="label_content"><h3>' + v.name + '</h3>' +
            '<p style="margin: 0 0 10px;">' + v.address + ' </p>' +
            '<p style="margin: 0 0 10px;">' + v.phone + ' </p>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: position_i,
            map: map,
            icon: '//www.saglamaile.az/site/templates/img/location_pin.svg'
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        $(".map_list ul li").eq($(".contacts .adress_list ul li").length - i - 1).find("a").click(function () {
            map.panTo(position_i);
            $('.map_list ul li a').removeClass("active");
            $(this).addClass("active");
            return false;
        });
    });


}
if ($("#simple_map").length > 0) {
    gmap();
}

/* Map end */

/* Map mobile tabs begin */
$(".filiall_links select").change(function () {
    var _this = $(this),
        _selected_index = _this.find("option:selected").index();
    location.href = ($(".filiall_links > div a").eq(_selected_index).attr("href"))
});
$(".filiall_tabs select").change(function () {
    var _this = $(this),
        _selected_index = _this.find("option:selected").index();
    location.href = ($(".filiall_tabs > div a").eq(_selected_index).attr("href"))
});
/* Map mobile tabs end */


/* Tag select emulation begin */
$(document).on('click', ".tags_list div a", function () {
    $(this).toggleClass("active");
    var items = $('div[data-tags=1] a[data-tag].active');
    var id = [];
    $.each(items, function (index, item) {
        id.push($(item).data('tag'));
    })
    $.post('', {id: id}, function (data) {
        var json = JSON.parse(data);

        $('div[data-articles=1]').html('')

        if (Object.keys(json.articles).length) {
            var i = 0,
                html = "<div>";
            $.each(json.articles, function (id, item) {
                if (i === 3) {
                    i = 0;
                    html += "</div><div>";
                }
                i += 1;
                html += "<article><div class=\"image\"><a href=\"" + item.url + "\"><img src=\"" + item.image + "\" alt=\"\"></a></div><h4><a href=\"" + item.url + "\">" + item.title + "</a></h4><p>" + item.desc + "...</p></article>";
            })
            html += "</div>";
            $('div[data-articles=1]').html(html);
        }
    });
    /*$(this).toggleClass("active");
     $(".symptom_result").addClass("preload");
     setTimeout(function () {
     $(".symptom_result").removeClass("preload");
     }, 300);
     return false;*/
});

$(document).on('click', ".quick_result a", function (e) {
    e.preventDefault();
    var tag = parseInt($(this).data('tag'));
    $('.symptom_form input').val('');
    $('.quick_result').removeClass('show_me');

    $.post('', {id: [tag], search: 1}, function (data) {
        var json = JSON.parse(data);

        $('div[data-tags=1]').html('')

        $('div[data-articles=1]').html('')

        if (Object.keys(json.tags).length) {
            $.each(json.tags, function (id, title) {
                var html = "<a href=\"javascript:void(0)\" data-tag=\"" + id + "\" "
                    + (id == tag ? " class=\"active\"" : "")
                    + "><span>" + title + "</span></a>";
                $('div[data-tags=1]').append(html);
            })
            $('div[data-tags=1]').addClass('show_me')
        }

        $('div[data-articles=1]').html('')

        if (Object.keys(json.articles).length) {
            var i = 0,
                html = "<div>";
            $.each(json.articles, function (id, item) {
                if (i === 3) {
                    i = 0;
                    html += "</div><div>";
                }
                i += 1;
                html += "<article><div class=\"image\"><a href=\"" + item.url + "\"><img src=\"" + item.image + "\" alt=\"\"></a></div><h4><a href=\"" + item.url + "\">" + item.title + "</a></h4><p>" + item.desc + "...</p></article>";
            })
            html += "</div>";
            $('div[data-articles=1]').html(html);
        }
    });
    return false;
});
/* Tag select emulation end */

/* Tags list mobile switcher begin */
$(".tags_list > a").click(function () {
    $(".tags_list").toggleClass("show_me");
    return false;
});
_window.resize(function () {
    $(".tags_list").removeClass("show_me");
});
/* Tags list mobile switcher end */

var xhr = null;
/* Ajax emulation form begin */
$(".symptom_form input").change(function () {
    $(".quick_result").removeClass("show_me");
});
$(".symptom_form input").focus(function () {
    if ($(this).val()) {
        $(".quick_result").addClass("show_me");
    } else {
        $(".quick_result").removeClass("show_me");
    }
});
$(".symptom_form input").keyup(function () {
    var t = $(this);
    var data = new FormData(this);
    data.append('action', 'search_symptoms')
    data.append('value', t.val())
    if (xhr) {
        xhr.abort();
    }
    if (t.val()) {
        xhr = $.ajax({
            url: '',
            method: 'post',
            data: data,
            dataType: 'json',
            contentType: false,
            processData: false,
            cache: false,
            beforeSend: function (xhr) {
                $(".quick_result").addClass("preload");
                $(".quick_result").addClass("show_me");
                $(".quick_result ul").html('');
            },
            success: function (data) {
                $(".quick_result").removeClass("preload");
                if (data.length) {
                    data.map(function (item) {
                        $(".quick_result ul").append('<li><a href="javascript:void(0)" data-tag="' + item.id + '">' + item.title + '</a></li>');
                    })
                } else {
                    $(".quick_result").removeClass("show_me");
                }
            }
        })
    } else {
        $(".quick_result").removeClass("show_me");
    }
    return false;
    /*var _this = $(this),
     _this_text = _this.val();
     if (_this_text == "") {
     $(".quick_result").removeClass("show_me");
     } else {
     $(".quick_result").addClass("preload");
     $(".quick_result").addClass("show_me");
     }
     setTimeout(function () {
     $(".quick_result").removeClass("preload");
     }, 300);
     return false;*/
});
/* Ajax emulation form end */



/* Symptom map begin */
$(".symptom_map .image a").click(function () {
    var _this = $(this),
        _this_category = _this.data("category");
    $(".symptom_map .image a").removeClass("active");
    _this.addClass("active");

    $(".search_by_image_header .text > p").hide();
    $(".symptom_list ul").removeClass("show_me");
    $(".symptom_list ul[data-category='" + _this_category + "']").addClass("show_me");
    return false;
});
/* Symptom map end */


/* First show begin */
$(".inner_bg, .index_bg, .index_inset").addClass("show_me");
var index_count = 0;

if ($(".index_bullets").length) {
    $(".index_bullets span").html($(".index_bullets a.active + a").data("name").replace("<br>", " ").replace("<br/>", " "));
    $(".index_bullets").css("bottom", (_window.height() - $(".index_inset .link").offset().top - 90) + "px");
    _window.resize(function () {
        $(".index_bullets").css("bottom", (_window.height() - $(".index_inset .link").offset().top - 90) + "px");
    });
}

setTimeout(function () {
    setInterval(function () {
        $(".index_nav ul li").eq(index_count).addClass("show_me");
        index_count++;
    }, 300);
}, 300);
/* First show end */


/* Only number inut begin */
$(".only_number").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
        return false;
    }
});
/* Only number inut end */

/* Only charset inut begin */
$(".only_charset").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
    } else {
        return false;
    }
});
/* Only charset inut end */


/* Universal form alerts begin */

$(".universal_validate form").submit(function () {
    /*var _this = $(this);

     _this.find(".alert").removeClass("alert");
     for (var i = 0; i < _this.find("input[data-required=1]").length; i++) {
     if (_this.find("input[data-required=1]").eq(i).val() == "") {
     _this.find("input[data-required=1]").eq(i).addClass("alert");
     }
     }

     for (var i = 0; i < $(this).find("select[data-required=1]").length; i++) {
     if ($(this).find("select[data-required=1]").eq(i).find("option:selected").index() == "0") {
     $(this).find("select[data-required=1]").eq(i).addClass("alert");
     }
     }

     for (var i = 0; i < _this.find("textarea[data-required=1]").length; i++) {
     if (_this.find("textarea[data-required=1]").eq(i).val() == "") {
     _this.find("textarea[data-required=1]").eq(i).addClass("alert");
     }
     }

     if (_this.find("input[data-same=1]").length > 1) {
     _same_length = _this.find("input[data-same=1]").length;
     _this.find("input[data-same=1]").parent().find("em").remove();
     if (_this.find("input[data-same=1]").eq(0).val() == _this.find("input[data-same=1]").eq(1).val()) {

     } else {
     _this.find("input[data-same=1]").addClass("alert");
     for (var i = 0; i < _this.find("input[data-same=1]").length; i++) {
     _this.find("input[data-same=1]").eq(i).parent().prepend("<em class='text_alert'>" + _this.find("input[data-same=1]").eq(i).data("alert") + "</em>");
     }
     ;
     }
     }

     if (_this.find("input[type='phone']").hasClass("success")) {
     } else {
     _this.find("input[type='phone']").addClass("alert");
     }

     if (_this.find("input.email").hasClass("success")) {
     } else {
     _this.find("input.email").addClass("alert");
     }

     if (_this.find(".alert").length > 0) {

     return false;
     } else {

     }*/

});

/* Universal form alerts end */


/* Fise select begin */
$(".file_select label input").on("change", function (e) {
    var _this = $(this),
        _this_file_wrap = _this.parents(".file_select"),
        _this_file_name = _this_file_wrap.find("label input").val();
    _this_file_wrap.find("label span").text(_this_file_name.slice(12));
});

/* Fise select end */


/* Masked inputs begin */
$(function () {
    $("input[type='phone']").inputmask("+994 00 000 00 00", {
        oncomplete: function () {
            $("input[type='phone']").addClass("success");
        },
        onincomplete: function () {
            $("input[type='phone']").removeClass("success");
        }
    });
    /*$("input.email").inputmask("*{1,20}@*{1,20}.*{2,6}", {
     oncomplete: function () {
     $("input.email").addClass("success");
     },
     onincomplete: function () {
     $("input.email").removeClass("success");
     }
     });*/
});
/* Masked inputs end */


/* Big gallery begin */

$(".big_gallery a").click(function () {
    var _this = $(this),
        _this_image = _this.attr("href");
    if (_this.parent().hasClass("active")) {
    } else {
        if ($(".big_gallery").hasClass("animated")) {
        } else {
            $(".big_gallery figure").removeClass("active");
            _this.parent().addClass("active");
            $(".big_image").append("<img src='" + _this_image + "' alt='' class='hide_me' />");
            $(".big_image").addClass("preload");
            $(".big_gallery").addClass("animated");
            $(".big_image").imagesLoaded(function () {
                $(".big_image img").eq(1).removeClass("hide_me");
                setTimeout(function () {
                    $(".big_image").removeClass("preload");
                    $(".big_image img").eq(0).remove();
                }, 200);
                setTimeout(function () {
                    $(".big_gallery").removeClass("animated");
                }, 600);
            });
        }
    }


    return false;
});

/* Big gallery end */

if ($(".simple_carousel").length) {
    $('.simple_carousel').imagesLoaded(function () {
        $('.simple_carousel').addClass("show_me")
        $('.simple_carousel').flickity({
            // options
            cellAlign: 'left',
            contain: true,
            groupCells: true
        });
    });
}


/* Index slider begin */
/* Index slider begin */
if ($(".index_bg").length) {
    $(".index_bg > div > div img").eq(0).addClass("scale_me");
}

function index_go(_this, _this_src, _this_name, _this_link, _this_target) {
    $(".index_bullets a").removeClass("active");
    _this.addClass("active");

    $(".index_bullets span").addClass("hide_me");


    $(".index_bg > div > div").prepend("<img src='" + _this_src + "' alt='' />");
    $(".index_bg").imagesLoaded(function () {
        $(".index_bg > div > div img").eq(1).addClass("hide_me");
        setTimeout(function () {
            $(".index_bg > div > div img").eq(0).addClass("scale_me");
            if ($(".index_bullets a.active").index() == $(".index_bullets a").length - 1) {
                $(".index_bullets span").html($(".index_bullets a:first-child").data("name").replace("<br>", " ").replace("<br/>", " "));
            } else {
                $(".index_bullets span").html($(".index_bullets a.active + a").data("name").replace("<br>", " ").replace("<br/>", " "));
            }
            $(".index_bullets span").removeClass("hide_me");
            $(".index_bg > div > div img").eq(1).remove();
        }, 450);
        $(".index_inset h2").addClass("hide_me");
        setTimeout(function () {
            $(".index_inset h2").html(_this_name);
            $(".index_inset h2").removeClass("hide_me");
        }, 480);
        setTimeout(function () {
            $(".index_inset .link").addClass("hide_me");
        }, 150);
        setTimeout(function () {
            $(".index_inset .link a").attr("href", _this_link);
            $(".index_inset .link a").attr("target", _this_target);
            $(".index_inset .link").removeClass("hide_me");
        }, 650);
    });
}

$(".index_bullets a").click(function () {
    var _this = $(this),
        _this_src = _this.attr("href"),
        _this_name = _this.data("name"),
        _this_link = _this.data("link"),
        _this_target = _this.data("target");
    index_go(_this, _this_src, _this_name, _this_link, _this_target);
    return false;
});


$(".index_inset").mouseover(function () {
    window.C_MOUSE_OVER = true;
    if (main_intervalus) {
        clearInterval(main_intervalus);
    }

}).mouseleave(function () {
    window.C_MOUSE_OVER = false;
    window.C_MOUSE_LEAVE = true;
    if (_window.width() < 769) {
        window.C_MOUSE_OVER = true;
    }
    _int = $(".index_bullets a.active").index();
    console.log(_int)
    main_carousel_interval()
});

$(".index_inset").mousemove(function () {
    window.C_MOUSE_OVER = true;
});

_window.resize(function () {
    if (_window.width() < 769) {
        window.C_MOUSE_OVER = true;
    }
});

if (_window.width() < 769) {
    window.C_MOUSE_OVER = true;
}

var _int = 0,
    _bullets_length = $(".index_bullets a").length;

function main_carousel_interval() {
    main_intervalus = setInterval(function () {

        _int++;

        if (_int == _bullets_length) {
            _int = 0;
        }

        $(".index_bullets a").eq(_int).click();

    }, 5000);
}

setTimeout(function () {
    if ($(window).width() > 768) {
        main_carousel_interval();
    }
}, 300);
/* Index slider end */


var isWebkit = 'WebkitAppearance' in document.documentElement.style


/* Perfect scroll begin*/
if (isWebkit) {
} else {
    const ps = new PerfectScrollbar('aside#aside_nav > div > div', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
}
/* Perfect scroll endeez*/


/* Medicaents begin */
$(".medicament_select select").change(function () {
    var _this = $(this),
        _this_index = _this.find("option:selected").index();

    $(".medicament_table > div").removeClass("show_me");
    $(".medicament_table").addClass("preload");
    setTimeout(function () {
        $(".medicament_table > div").eq(_this_index).addClass("show_me");
        $(".medicament_table").removeClass("preload");
    }, 300);
});
/* Medicaents end */


/* Analysis search begin */
$.expr[":"].contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

$(document).on('keyup', '.search_block input', function () {
    var search = $(this).val();
    $('.services_list ul li').removeClass('show');
    $('.services_list ul.first li span:contains(' + search + ')').closest('li').addClass('show');
    $('.services_list ul.second li .name a:contains(' + search + ')').closest('li').addClass('show');
});
/* Analysis search end */


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return '';
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

$(document).on('click', '#cash_payment', function () {
    var form = $(this).closest('form');
    form.find('input[name=payment]').val('cash');
    form.submit();
})

$(document).on('click', '#lcode_cash_payment', function () {
    var form = $(this).closest('form');
    form.find('input[name=payment]').val('cash');
    form.submit();
})

$(document).on('submit', 'form', function (e) {
    if ($(this).hasClass('static')) return;
    e.preventDefault();
    var form = $(this);
    var data = new FormData(this);
    $.ajax({
        url: form.attr('action'),
        method: form.attr('method'),
        data: data,
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function (xhr) {
            /*$('.notif-cont').html('').parent().removeClass('error show');
             form.find('input').attr('disabled', 'disabled');
             form.find('.error').removeClass('error');
             form.find('.err, .success').remove();*/
            form.find('.waring_test').html('')
            form.find('.alert').removeClass('alert');
            form.find('button').addClass('u_preloader');

        },
        success: function (data) {

            if (Object.keys(data.errors).length) {
                Object.keys(data.errors).map(function (field) {
                    console.log(field);
                    //form.find('.waring_test').append('<p>' + data.errors[field] + '</p>')
                    form.find('[name=' + field + ']').addClass('alert');
                })
                form.find('button.preloader').removeClass('preloader');
                form.find('input').removeAttr('disabled');
                form.find('button').removeClass('u_preloader');
            } else if (data.error) {
                form.find('.waring_test').append('<p>' + data.error + '</p>')
                form.find('button.preloader').removeClass('preloader');
                form.find('input').removeAttr('disabled');
                form.find('button').removeClass('u_preloader');
            } else if (data.success) {
                if (data.reset) form[0].reset();
                form.hide();
                form.siblings('.form_success').show();
                $(".vacancy_form p, .forms_block .tabs, .article_tabs, .call_form p").hide();
                //$(".inner_content > div > h2 span").text($('.form_success span').text());

                form.find('button.preloader').removeClass('preloader');
                form.find('input').removeAttr('disabled');
            } else if (data.reload) {
                window.location = '';
            } else if (data.redirect) {
                window.location = data.redirect;
            }
        }
    })

    return false;
});


/* Human body map hover begin */
$(".symptom_map map area").mouseover(function () {
    //console.log($(this).data("part"))
    $(this).parent().prev().find("img").attr("src", $(this).data("part"));

}).mouseleave(function () {
    //console.log($(this).data("part"))
    $(".symptom_map .mapped_image img").attr("src", $(".symptom_map").data("default"));
});
/* Human body map hover end */


/* Human body map click begin */
$(".symptom_map map area").click(function () {
    var t = $(this),
        tags = t.data('tags');
    $.post('', {s: tags}, function (data) {
        var json = JSON.parse(data);

        $('div[data-tags=1]').html('')
        $('div[data-articles=1]').html('')

        if (Object.keys(json.tags).length) {
            $.each(json.tags, function (id, title) {
                var html = "<a href=\"javascript:void(0)\" data-tag=\"" + id + "\"><span>" + title + "</span></a>";
                $('div[data-tags=1]').append(html);
            })
        }

        if (Object.keys(json.articles).length) {
            var i = 0,
                html = "<div>";
            $.each(json.articles, function (id, item) {
                if (i === 3) {
                    i = 0;
                    html += "</div><div>";
                }
                i += 1;
                html += "<article><div class=\"image\"><a href=\"" + item.url + "\"><img src=\"" + item.image + "\" alt=\"\"></a></div><h4><a href=\"" + item.url + "\">" + item.title + "</a></h4><p>" + item.desc + "...</p></article>";
            })
            html += "</div>";
            $('div[data-articles=1]').html(html);
        }

        $('.switcher.search').trigger('click');
    });
    /*var _this = $(this),
     _this_tag = _this.data("tags");
     $(".simptom_tags").addClass("show_me");
     $(".search_by_image_header .text").addClass("hide_me");
     $(".search_by_image_header .symptom_form").removeClass("hide_me").addClass("show_me");
     $('.symptom_map').removeClass("show_me").addClass("hide_me");
     $('.symptom_search').removeClass("hide_me").addClass("show_me");
     $('.switcher').removeClass('search');
     $(".tags_list > div > div").removeClass("show_me");
     $(".tags_list > div > div[data-tags=" + _this_tag + "]").addClass("show_me");*/
    return false;
});

$(".symptom_map map area, .simptom_map").mouseout(function () {
    $("body").on("click", inFavorite);
});
$(".symptom_map map area, .simptom_map").mouseover(function () {
    $("body").off("click", inFavorite);
})
function inFavorite() {
    //$(".simptom_map").removeClass("show_me");
    //$(".tags_list > div > div").removeClass("show_me");
    //$(".search_by_image_header .text").removeClass("hide_me");
}
/* Human body map click end */


var images = [];

for (var i = 0; i < $(".symptom_map map area").length; i++) {
    //console.log($(".symptom_map map area").eq(i).data("part"))
    images.push("//www.saglamaile.az" + $(".symptom_map map area").eq(i).data("part"));
    $(".loaded_images").append("<img src='" + "//www.saglamaile.az" + $(".symptom_map map area").eq(i).data("part") + "'>")
}


$(document).on('click', '.switcher', function () {
    var t = $(this);
    if (t.hasClass('search')) {
        t.removeClass('search')
        $('.search_by_image_header .text').removeClass('show_me').addClass('hide_me');
        $('.search_by_image_header .symptom_form').removeClass('hide_me').addClass('show_me');
        $('.symptom_search').removeClass('hide_me').addClass('show_me');
        $('.symptom_map').removeClass('show_me').addClass('hide_me');
        //$('.tags_list div[data-tags="popular"]').addClass('show_me')
        $('.tags_list div[data-tags="1"]').addClass('show_me')
    } else {
        t.addClass('search')
        $('.search_by_image_header .text').removeClass('hide_me').addClass('show_me');
        $('.search_by_image_header .symptom_form').removeClass('show_me').addClass('hide_me');
        $('.symptom_search').removeClass('show_me').addClass('hide_me');
        $('.symptom_map').removeClass('hide_me').addClass('show_me');
        $('.tags_list div[data-tags="1"]').removeClass('show_me')
    }
    return false;
})


// Super resize images for Analizes

$(".package_list").imagesLoaded(function () {

    $(".package_list > div > div a img + img").css("height", ($(".package_list > div > div a img.empty").height()) + "px");

    setTimeout(function () {
        $(".package_list > div > div a img").css("opacity", "1");
        for (var i = 0; i < $(".package_list > div > div").length; i++) {
            if ($(".package_list > div > div").eq(i).find("a img.empty").width() > $(".package_list > div > div").eq(i).find("a img + img").width() + 1) {
                $(".package_list > div > div").eq(i).find("a img + img").removeAttr("style").css("width", ($(".package_list > div > div a img.empty").width()) + "px").css("height", "auto");
                $(".package_list > div > div a img").css("opacity", "1");
            }
            $(".package_list > div > div").eq(i).append("<p><a href='" + $(".package_list > div > div").eq(i).find("a").attr("href") + "'>" + $(".package_list > div > div").eq(i).find("span").text() + "</a></p>")
        }
    }, 10);

});


var resizeTimer;

$(window).on('resize', function (e) {
    $(".package_list > div > div a img").removeAttr("style");

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {

        $(".package_list > div > div a img + img").css("height", ($(".package_list > div > div a img.empty").height()) + "px");
        setTimeout(function () {
            for (var i = 0; i < $(".package_list > div > div").length; i++) {
                if ($(".package_list > div > div").eq(i).find("a img.empty").width() > $(".package_list > div > div").eq(i).find("a img + img").width() + 1) {
                    $(".package_list > div > div").eq(i).find("a img + img").removeAttr("style").css("width", ($(".package_list > div > div a img.empty").width()) + "px").css("height", "auto");
                    $(".package_list > div > div a img").css("opacity", "1");
                }
            }
        }, 10);

    }, 250);

});


//

for (var i = 0; i < $(".similar_packages > div > div").length; i++) {
    $(".similar_packages > div > div").eq(i).append("<p><a href='" + $(".similar_packages > div > div").eq(i).find("a").attr("href") + "'>" + $(".similar_packages > div > div").eq(i).find("span").text() + "</a></p>")
}


/* Analiz begin */

$(document).on("click", ".wrap_category > h2 > a", function () {
    var _this = $(this);
    if (_this.hasClass('page')) {
        _this.addClass("active");
        $(".analiz_right").html(_this.parent().next().html());
        $(".analiz_right").prepend("<h2><span>" + _this.text() + "</span><strong>" + ($(".analiz_left").data("price")) + "</strong></h2>");
    } else {
        if (_this.hasClass("active")) {
            _this.removeClass("active")
            _this.parent().next().animate({"height": 'hide'}, 350);
        } else {
            _this.addClass("active")
            _this.parent().next().animate({"height": 'show'}, 350);
        }
    }
    return false;
});


$(document).on("click", ".analiz_left article h3 a", function () {
    var _this = $(this);
    if (_this.hasClass("active")) {
        _this.removeClass("active")
        _this.parent().next().animate({"height": 'hide'}, 350);
    } else {
        _this.addClass("active")
        _this.parent().next().animate({"height": 'show'}, 350);
    }
    return false;
});
//var test = $('[data-test=1]');
//if (test.length) {
var loadAnalysisLeft = function () {
    if ($(".analiz_wrapper").hasClass('search')) return false;
    var data = new FormData();
    data.append('action', 'load_left');
    $.ajax({
        url: '',
        method: 'post',
        data: data,
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function (xhr) {
        },
        success: function (data) {
            $(".analiz_left").html(data);
            $(".analiz_wrapper").removeClass("preloader");

            var first = $(data).find('a[data-id]').first();
            first.addClass('active');
            loadAnalysisRight(first.data('id'));
        }
    })
}, loadAnalysisRight = function (id) {
    var data = new FormData();
    data.append('action', 'load_right');
    data.append('id', id);
    $.ajax({
        url: '',
        method: 'post',
        data: data,
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function (xhr) {
            $(".analiz_right").addClass("preloader");
        },
        success: function (data) {
            $(".analiz_right").html(data);
            $(".analiz_right").removeClass("preloader");
        }
    })
}
loadAnalysisLeft();

$(document).on('click', '.analiz_left a[data-id]', function () {
    var id = $(this).data('id');
    $('.analiz_left a[data-id]').removeClass('active');
    $(this).addClass('active');
    loadAnalysisRight(id);
    if (_window.width() < 1024) {
        $('html, body').animate({
            scrollTop: $(".analiz_right").offset().top - 10
        }, 300);
    }
    return false;
})

/*} else {
 _first_click = false;
 $(document).on("click", ".analiz_left article > div > ul > li > a, .analiz_left article .nonav a:first-child", function () {
 var _this = $(this),
 _this_name = _this.text(),
 _this_html = _this.next().html();

 if (_this.hasClass("active")) {
 } else {
 $(".analiz_left article > div > ul > li > a, .analiz_left article .nonav a:first-child").removeClass("active");
 _this.addClass("active");
 }
 $(".analiz_right").html(_this_html);
 $(".analiz_right").prepend("<h2><span>" + _this_name + "</span><strong>" + ($(".analiz_left").data("price")) + "</strong></h2>");
 $(document).ready(function () {
 console.log("ready!");
 $(".analiz_wrapper").removeClass("preloader");
 });
 setTimeout(function () {
 if (_window.width() < 1024 && _first_click) {
 $('html, body').animate({
 scrollTop: $(".analiz_right").offset().top - 10
 }, 300);
 }
 _first_click = true;
 }, 100);

 return false;
 });

 $('.analiz_left article:first > div:first > ul:first > li:first > a:first').click();
 }*/

/* Analiz end */

/* Doctors accordion begin */

$(document).on("click", ".doctors_grid section h3 a", function () {
    var _this = $(this);
    if (_this.hasClass("active")) {
        _this.removeClass("active")
        _this.parent().next().animate({"height": 'hide'}, 350)
    } else {
        _this.addClass("active")
        _this.parent().next().animate({"height": 'show'}, 350)
    }
    return false;
});

/* Doctors accordion end */



/* Fillials menu begin */
$(document).on("click", "a.call_menu", function () {
    $(this).toggleClass("active");
    return false;
});

$(document).mouseup(function (e) {
    var div = $(".fillial_menu");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $("a.call_menu").removeClass("active");
    }
});
/* Fillials menu end */



/* Fillials preloader begin */
$(document).on("click", ".index_nav ul li a", function () {
    if ($(this).attr('target')) return;
    $(this).addClass("preloader");
});

$(document).on("click", "nav.inner_nav ul li a", function () {
    if ($(this).attr('target')) return;
    $(this).parent().addClass("preloader");
});
/* Fillials preloader end */


/* Smart icons mobile begin */
if (isMobile) {
    $(document).on("click", ".smart_icons a.call", function () {
        $(".smart_icons ul").toggleClass("show_me");
    });
}
$(document).mouseup(function (e) {
    var div = $(".smart_icons");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $(".smart_icons ul").removeClass("show_me");
    }
});
/* Smart icons mobile end */


setInterval(function () {
    $("#hide_chat + script + div iframe").css("bottom", "-240px");
    $("#hide_chat + script + noscript + div iframe").css("bottom", "-240px");
    $("#hide_chat + script + script + noscript + div iframe").css("bottom", "-240px");
    $("#hide_chat + script + ym-measure + ym-measure + div iframe").css("bottom", "-240px");
    $("#hide_chat ~ div iframe").css("bottom", "-240px");

}, 1)

/* Price input begin */
$(document).on("change", ".payment_form input.only_number", function () {
    var _this = $(this),
        _this_num = _this.val();
    if (_this_num == "") {
        $(".payment_form .price").removeClass("active");
        $(".payment_form .price strong").text("0");
    } else {
        $(".payment_form .price").addClass("active");
        if (_this_num * 1 > 500) {
            _this_num = 500;
            $(".payment_form input.only_number").val("500");
        }
        $(".payment_form .price strong").text(_this_num);
    }

});
/* Price input end */

/*$(function () {
 var test = $('[data-test=1]');
 if (test) {


 }
 })*/