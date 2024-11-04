! function(t) {
    var r = {};

    function n(A) {
        if (r[A]) return r[A].exports;
        var e = r[A] = {
            i: A,
            l: !1,
            exports: {}
        };
        return t[A].call(e.exports, e, e.exports, n), e.l = !0, e.exports
    }
    n.m = t, n.c = r, n.d = function(A, e, t) {
        n.o(A, e) || Object.defineProperty(A, e, {
            enumerable: !0,
            get: t
        })
    }, n.r = function(A) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(A, "__esModule", {
            value: !0
        })
    }, n.t = function(e, A) {
        if (1 & A && (e = n(e)), 8 & A) return e;
        if (4 & A && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (n.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & A && "string" != typeof e)
            for (var r in e) n.d(t, r, function(A) {
                return e[A]
            }.bind(null, r));
        return t
    }, n.n = function(A) {
        var e = A && A.__esModule ? function() {
            return A.default
        } : function() {
            return A
        };
        return n.d(e, "a", e), e
    }, n.o = function(A, e) {
        return Object.prototype.hasOwnProperty.call(A, e)
    }, n.p = "/assets/", n(n.s = 16)
}([function(A, e) {
    A.exports = function(A) {
        function e(A) {
            "undefined" != typeof console && (console.error || console.log)("[Script Loader]", A)
        }
        try {
            "undefined" != typeof execScript && "undefined" != typeof attachEvent && "undefined" == typeof addEventListener ? execScript(A) : "undefined" != typeof eval ? eval.call(null, A) : e("EvalError: No eval function available")
        } catch (A) {
            e(A)
        }
    }
}, function(A, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        set: function(A, e) {
            localStorage.setItem(A, JSON.stringify(e))
        },
        get: function(A) {
            return JSON.parse(localStorage.getItem(A))
        },
        remove: function(A) {
            localStorage.removeItem(A)
        }
    }
}, function(A, e, t) {
    "use strict";
    var r = s(t(3)),
        n = s(t(1)),
        B = s(t(4));

    function s(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    A.exports = {
        run: function(e) {
            new Vue({
                el: "#vueApp",
                mounted: function() {
                    "function" == typeof e.mounted && e.mounted.call(this);
                    var A = n.default.get("phone"),
                        A = (A && (this.phone = A), new Date);
                    this.phone.time_hour = 10 <= A.getHours() ? A.getHours() : "0" + A.getHours().toString(), this.phone.time_mini = 10 <= A.getMinutes() ? A.getMinutes() : "0" + A.getMinutes().toString(), this.___(), $(".phone").width(this.phone.mode.width), $(".phone").height(this.phone.mode.height), $(".phone-content").css("transform", "scale(" + this.phone.mode.zoom + ")"), $(".phone-wrap").width(this.phone.mode.width * this.phone.mode.zoom), $(".phone-wrap").height(this.phone.mode.height * this.phone.mode.zoom), window.user = {}, localforage.getItem("app").then(function(e) {
                        e && e.auth && e.auth.token && $.ajax({
                            url: "https://api.weixinmoniqi.com/api/member/read",
                            async: !1,
                            type: "post",
                            beforeSend: function(A) {
                                A.setRequestHeader("Authorization", "bearer " + e.auth.token)
                            },
                            success: function(A) {
                                window.user = A.result, $("#username").html(window.user.username), "1" === window.user.vip && window.user.vipDatetime >= (new Date).getTime() / 1e3 || "1" === window.user.vip && !window.user.vipDatetime ? window.user.noMask = !0 : window.user.noMask = !1
                            }
                        })
                    }).catch(function(A) {});
                    try {
                        setInterval(function() {}, 50)
                    } catch (A) {}
                },
                data: Object.assign({
                    phone: {
                        single: 4,
                        wifi: 1,
                        wifi_single: 3,
                        time_hour: "12",
                        time_mini: "02",
                        battery_charge: 0,
                        battery_amount: 60,
                        ear: 0,
                        mode: {
                            width: 1125,
                            height: 2436,
                            radio: 3,
                            zoom: .26
                        }
                    }
                }, e.data),
                methods: Object.assign({
                    save: function() {
                        var e = this;
                        e.__();
                        var A = $("#phone").find(".phone-body").scrollTop(),
                            t = $("#phone").clone().addClass("iPhoneX").get(0);
                        $("body").append(t), $(t).find(".phone-body").scrollTop(A), $(".content-wrapper").addClass("loading"), setTimeout(function() {
                            (0, r.default)(t, {
                                scale: 1,
                                scrollY: 0,
                                scrollX: 0
                            }).then(function(A) {
                                $("#lightBoxToggle").data("zui.lightbox").show(e.canvas2image(A)), $(t).remove(), $(".content-wrapper").removeClass("loading")
                            })
                        }, 200)
                    },
                    moneyFormat: function(A, e, t, r, n) {
                        e = isNaN(e = Math.abs(e)) ? 2 : e, t = void 0 !== t ? t : "$", r = 0 == r ? "" : r || ",", n = n || ".";
                        var B = A < 0 ? "-" : "",
                            s = parseInt(A = Math.abs(+A || 0).toFixed(e), 10) + "",
                            i = 3 < (i = s.length) ? i % 3 : 0;
                        return t + B + (i ? s.substr(0, i) + r : "") + s.substr(i).replace(/(\d{3})(?=\d)/g, "$1" + r) + (e ? n + Math.abs(A - s).toFixed(e).slice(2) : "")
                    },
                    canvas2image: function(A) {
                        return A.toDataURL("png")
                    },
                    matchReplace: function(A, r, n) {
                        return this.regxSplit(A, r).map(function(A, e) {
                            for (var t in r)
                                if (A.match(r[t])) return n[t](A, e);
                            return A
                        }).join("")
                    },
                    regxSplit: function(r, A) {
                        A = new RegExp(A.join("|"), "ig");
                        var n = [],
                            B = 0;
                        return r.replace(A, function(A) {
                            var e = arguments[arguments.length - 2],
                                t = r.substring(B, e);
                            t && n.push(t), n.push(A), B = e + A.length
                        }), B < r.length && n.push(r.substring(B)), n
                    },
                    onBatteryChange: function(A) {
                        A = A.target.value;
                        this.phone.battery_amount = A
                    },
                    _: function() {
                        return "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"
                    },
                    __: function() {
                        var A;
                        window.user && window.user.noMask ? $(".s" + window._d).remove() : (A = "s" + window._d, $("." + A).length || ($("head").append(B.default.____(this._())), A = $('<div class="' + A + '"></div>'), $(".phone-bg").after(A)))
                    },
                    ___: function() {
                        var A = this;
                        A.__(), setTimeout(function() {
                            A.___()
                        }, 1e3)
                    }
                }, e.methods),
                watch: Object.assign({
                    phone: {
                        handler: function(A, e) {
                            n.default.set("phone", A)
                        },
                        deep: !0
                    }
                }, e.watch)
            })
        }
    }
}, function(A, e, t) {
    "use strict";
    var r, cs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
        return typeof A
    } : function(A) {
        return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
    };
    r = function() {
        var K = function(A, e) {
            return (K = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(A, e) {
                    A.__proto__ = e
                } || function(A, e) {
                    for (var t in e) e.hasOwnProperty(t) && (A[t] = e[t])
                })(A, e)
        };

        function v(A, e) {
            function t() {
                this.constructor = A
            }
            K(A, e), A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
        }
        var S = function() {
            return (S = Object.assign || function(A) {
                for (var e, t = 1, r = arguments.length; t < r; t++)
                    for (var n in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
                return A
            }).apply(this, arguments)
        };

        function o(B, s, i, o) {
            return new(i = i || Promise)(function(A, e) {
                function t(A) {
                    try {
                        n(o.next(A))
                    } catch (A) {
                        e(A)
                    }
                }

                function r(A) {
                    try {
                        n(o.throw(A))
                    } catch (A) {
                        e(A)
                    }
                }

                function n(e) {
                    e.done ? A(e.value) : new i(function(A) {
                        A(e.value)
                    }).then(t, r)
                }
                n((o = o.apply(B, s || [])).next())
            })
        }

        function R(r, n) {
            var B, s, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                },
                A = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (A[Symbol.iterator] = function() {
                return this
            }), A;

            function e(t) {
                return function(A) {
                    var e = [t, A];
                    if (B) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (B = 1, s && (i = 2 & e[0] ? s.return : e[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, e[1])).done) return i;
                        switch (s = 0, (e = i ? [2 & e[0], i.value] : e)[0]) {
                            case 0:
                            case 1:
                                i = e;
                                break;
                            case 4:
                                return o.label++, {
                                    value: e[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, s = e[1], e = [0];
                                continue;
                            case 7:
                                e = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = 0 < (i = o.trys).length && i[i.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === e[0] && (!i || e[1] > i[0] && e[1] < i[3])) {
                                    o.label = e[1];
                                    break
                                }
                                if (6 === e[0] && o.label < i[1]) {
                                    o.label = i[1], i = e;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(e);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        e = n.call(r, o)
                    } catch (A) {
                        e = [6, A], s = 0
                    } finally {
                        B = i = 0
                    }
                    if (5 & e[0]) throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }
            }
        }
        V.prototype.add = function(A, e, t, r) {
            return new V(this.left + A, this.top + e, this.width + t, this.height + r)
        }, V.fromClientRect = function(A) {
            return new V(A.left, A.top, A.width, A.height)
        };
        var P = V;

        function V(A, e, t, r) {
            this.left = A, this.top = e, this.width = t, this.height = r
        }
        for (var X = function(A) {
                return P.fromClientRect(A.getBoundingClientRect())
            }, z = function(A) {
                for (var e = [], t = 0, r = A.length; t < r;) {
                    var n, B = A.charCodeAt(t++);
                    55296 <= B && B <= 56319 && t < r ? 56320 == (64512 & (n = A.charCodeAt(t++))) ? e.push(((1023 & B) << 10) + (1023 & n) + 65536) : (e.push(B), t--) : e.push(B)
                }
                return e
            }, Q = function() {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
                var t = A.length;
                if (!t) return "";
                for (var r = [], n = -1, B = ""; ++n < t;) {
                    var s = A[n];
                    s <= 65535 ? r.push(s) : (s -= 65536, r.push(55296 + (s >> 10), s % 1024 + 56320)), (n + 1 === t || 16384 < r.length) && (B += String.fromCharCode.apply(String, r), r.length = 0)
                }
                return B
            }, J = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", x = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), G = 0; G < J.length; G++) x[J.charCodeAt(G)] = G;

        function k(A, e, t) {
            return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
        }
        Y.prototype.get = function(A) {
            var e;
            if (0 <= A) {
                if (A < 55296 || 56319 < A && A <= 65535) return e = ((e = this.index[A >> 5]) << 2) + (31 & A), this.data[e];
                if (A <= 65535) return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[e];
                if (A < this.highStart) return e = this.index[e = 2080 + (A >> 11)], e = ((e = this.index[e += A >> 5 & 63]) << 2) + (31 & A), this.data[e];
                if (A <= 1114111) return this.data[this.highValueIndex]
            }
            return this.errorValue
        };
        var W = Y;

        function Y(A, e, t, r, n, B) {
            this.initialValue = A, this.errorValue = e, this.highStart = t, this.highValueIndex = r, this.index = n, this.data = B
        }

        function Z(A, e, t, r) {
            var n = r[t];
            if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n)
                for (var B = t; B <= r.length;) {
                    if ((s = r[++B]) === e) return 1;
                    if (s !== q) break
                }
            if (n === q)
                for (B = t; 0 < B;) {
                    var s, i = r[--B];
                    if (Array.isArray(A) ? -1 !== A.indexOf(i) : A === i)
                        for (var o = t; o <= r.length;) {
                            if ((s = r[++o]) === e) return 1;
                            if (s !== q) break
                        }
                    if (i !== q) break
                }
        }

        function j(A, e) {
            for (var t = A; 0 <= t;) {
                var r = e[t];
                if (r !== q) return r;
                t--
            }
            return 0
        }
        var l, A, q = 10,
            _ = 13,
            $ = 15,
            AA = 17,
            eA = 18,
            tA = 19,
            rA = 20,
            nA = 21,
            BA = 22,
            sA = 24,
            d = 25,
            iA = 26,
            oA = 27,
            aA = 28,
            cA = 30,
            QA = 32,
            gA = 33,
            CA = 34,
            uA = 35,
            lA = 37,
            wA = 38,
            UA = 39,
            EA = 40,
            dA = 42,
            h = "×",
            hA = (u = function(A) {
                for (var e, t, r, n, B = .75 * A.length, s = A.length, i = 0, B = ("=" === A[A.length - 1] && (B--, "=" === A[A.length - 2] && B--), new("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(B)), o = Array.isArray(B) ? B : new Uint8Array(B), a = 0; a < s; a += 4) e = x[A.charCodeAt(a)], t = x[A.charCodeAt(a + 1)], r = x[A.charCodeAt(a + 2)], n = x[A.charCodeAt(a + 3)], o[i++] = e << 2 | t >> 4, o[i++] = (15 & t) << 4 | r >> 2, o[i++] = (3 & r) << 6 | 63 & n;
                return B
            }("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"), c = Array.isArray(u) ? function(A) {
                for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
                return t
            }(u) : new Uint32Array(u), B = k(u = Array.isArray(u) ? function(A) {
                for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
                return t
            }(u) : new Uint16Array(u), 12, c[4] / 2), u = 2 === c[5] ? k(u, (24 + c[4]) / 2) : (u = c, A = Math.ceil((24 + c[4]) / 4), u.slice ? u.slice(A, void 0) : new Uint32Array(Array.prototype.slice.call(u, A, void 0))), new W(c[0], c[1], c[2], c[3], B, u)),
            fA = [cA, 36],
            FA = [1, 2, 3, 5],
            HA = [q, 8],
            IA = [oA, iA],
            pA = FA.concat(HA),
            NA = [wA, UA, EA, CA, uA],
            mA = [$, _],
            KA = (vA.prototype.slice = function() {
                return Q.apply(void 0, this.codePoints.slice(this.start, this.end))
            }, vA);

        function vA(A, e, t, r) {
            this.codePoints = A, this.required = "!" === e, this.start = t, this.end = r
        }

        function g(A) {
            return 48 <= A && A <= 57
        }

        function RA(A) {
            return g(A) || 65 <= A && A <= 70 || 97 <= A && A <= 102
        }

        function bA(A) {
            return 10 === A || 9 === A || 32 === A
        }

        function DA(A) {
            return 97 <= (e = A) && e <= 122 || 65 <= e && e <= 90 || 128 <= A || 95 === A;
            var e
        }

        function TA(A) {
            return DA(A) || g(A) || 45 === A
        }

        function MA(A, e) {
            return 92 === A && 10 !== e
        }

        function LA(A, e, t) {
            return 45 === A ? DA(e) || MA(e, t) : DA(A) || 92 === A && MA(A, e)
        }

        function yA(A, e, t) {
            return 43 === A || 45 === A ? g(e) || 46 === e && g(t) : g(46 === A ? e : A)
        }(A = l = l || {})[A.STRING_TOKEN = 0] = "STRING_TOKEN", A[A.BAD_STRING_TOKEN = 1] = "BAD_STRING_TOKEN", A[A.LEFT_PARENTHESIS_TOKEN = 2] = "LEFT_PARENTHESIS_TOKEN", A[A.RIGHT_PARENTHESIS_TOKEN = 3] = "RIGHT_PARENTHESIS_TOKEN", A[A.COMMA_TOKEN = 4] = "COMMA_TOKEN", A[A.HASH_TOKEN = 5] = "HASH_TOKEN", A[A.DELIM_TOKEN = 6] = "DELIM_TOKEN", A[A.AT_KEYWORD_TOKEN = 7] = "AT_KEYWORD_TOKEN", A[A.PREFIX_MATCH_TOKEN = 8] = "PREFIX_MATCH_TOKEN", A[A.DASH_MATCH_TOKEN = 9] = "DASH_MATCH_TOKEN", A[A.INCLUDE_MATCH_TOKEN = 10] = "INCLUDE_MATCH_TOKEN", A[A.LEFT_CURLY_BRACKET_TOKEN = 11] = "LEFT_CURLY_BRACKET_TOKEN", A[A.RIGHT_CURLY_BRACKET_TOKEN = 12] = "RIGHT_CURLY_BRACKET_TOKEN", A[A.SUFFIX_MATCH_TOKEN = 13] = "SUFFIX_MATCH_TOKEN", A[A.SUBSTRING_MATCH_TOKEN = 14] = "SUBSTRING_MATCH_TOKEN", A[A.DIMENSION_TOKEN = 15] = "DIMENSION_TOKEN", A[A.PERCENTAGE_TOKEN = 16] = "PERCENTAGE_TOKEN", A[A.NUMBER_TOKEN = 17] = "NUMBER_TOKEN", A[A.FUNCTION = 18] = "FUNCTION", A[A.FUNCTION_TOKEN = 19] = "FUNCTION_TOKEN", A[A.IDENT_TOKEN = 20] = "IDENT_TOKEN", A[A.COLUMN_TOKEN = 21] = "COLUMN_TOKEN", A[A.URL_TOKEN = 22] = "URL_TOKEN", A[A.BAD_URL_TOKEN = 23] = "BAD_URL_TOKEN", A[A.CDC_TOKEN = 24] = "CDC_TOKEN", A[A.CDO_TOKEN = 25] = "CDO_TOKEN", A[A.COLON_TOKEN = 26] = "COLON_TOKEN", A[A.SEMICOLON_TOKEN = 27] = "SEMICOLON_TOKEN", A[A.LEFT_SQUARE_BRACKET_TOKEN = 28] = "LEFT_SQUARE_BRACKET_TOKEN", A[A.RIGHT_SQUARE_BRACKET_TOKEN = 29] = "RIGHT_SQUARE_BRACKET_TOKEN", A[A.UNICODE_RANGE_TOKEN = 30] = "UNICODE_RANGE_TOKEN", A[A.WHITESPACE_TOKEN = 31] = "WHITESPACE_TOKEN", A[A.EOF_TOKEN = 32] = "EOF_TOKEN";
        var OA = {
                type: l.LEFT_PARENTHESIS_TOKEN
            },
            SA = {
                type: l.RIGHT_PARENTHESIS_TOKEN
            },
            PA = {
                type: l.COMMA_TOKEN
            },
            VA = {
                type: l.SUFFIX_MATCH_TOKEN
            },
            XA = {
                type: l.PREFIX_MATCH_TOKEN
            },
            zA = {
                type: l.COLUMN_TOKEN
            },
            JA = {
                type: l.DASH_MATCH_TOKEN
            },
            xA = {
                type: l.INCLUDE_MATCH_TOKEN
            },
            GA = {
                type: l.LEFT_CURLY_BRACKET_TOKEN
            },
            kA = {
                type: l.RIGHT_CURLY_BRACKET_TOKEN
            },
            WA = {
                type: l.SUBSTRING_MATCH_TOKEN
            },
            YA = {
                type: l.BAD_URL_TOKEN
            },
            ZA = {
                type: l.BAD_STRING_TOKEN
            },
            jA = {
                type: l.CDO_TOKEN
            },
            qA = {
                type: l.CDC_TOKEN
            },
            _A = {
                type: l.COLON_TOKEN
            },
            $A = {
                type: l.SEMICOLON_TOKEN
            },
            Ae = {
                type: l.LEFT_SQUARE_BRACKET_TOKEN
            },
            ee = {
                type: l.RIGHT_SQUARE_BRACKET_TOKEN
            },
            te = {
                type: l.WHITESPACE_TOKEN
            },
            re = {
                type: l.EOF_TOKEN
            },
            ne = (e.prototype.write = function(A) {
                this._value = this._value.concat(z(A))
            }, e.prototype.read = function() {
                for (var A = [], e = this.consumeToken(); e !== re;) A.push(e), e = this.consumeToken();
                return A
            }, e.prototype.consumeToken = function() {
                var A = this.consumeCodePoint();
                switch (A) {
                    case 34:
                        return this.consumeStringToken(34);
                    case 35:
                        var e, t = this.peekCodePoint(0),
                            r = this.peekCodePoint(1),
                            n = this.peekCodePoint(2);
                        if (TA(t) || MA(r, n)) return t = LA(t, r, n) ? 2 : 1, e = this.consumeName(), {
                            type: l.HASH_TOKEN,
                            value: e,
                            flags: t
                        };
                        break;
                    case 36:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), VA;
                        break;
                    case 39:
                        return this.consumeStringToken(39);
                    case 40:
                        return OA;
                    case 41:
                        return SA;
                    case 42:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), WA;
                        break;
                    case 43:
                        if (yA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                        break;
                    case 44:
                        return PA;
                    case 45:
                        r = A, n = this.peekCodePoint(0), t = this.peekCodePoint(1);
                        if (yA(r, n, t)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                        if (LA(r, n, t)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                        if (45 === n && 62 === t) return this.consumeCodePoint(), this.consumeCodePoint(), qA;
                        break;
                    case 46:
                        if (yA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                        break;
                    case 47:
                        if (42 === this.peekCodePoint(0))
                            for (this.consumeCodePoint();;) {
                                var B = this.consumeCodePoint();
                                if (42 === B && 47 === (B = this.consumeCodePoint())) return this.consumeToken();
                                if (-1 === B) return this.consumeToken()
                            }
                        break;
                    case 58:
                        return _A;
                    case 59:
                        return $A;
                    case 60:
                        if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), jA;
                        break;
                    case 64:
                        if (LA(this.peekCodePoint(0), this.peekCodePoint(1), this.peekCodePoint(2))) return e = this.consumeName(), {
                            type: l.AT_KEYWORD_TOKEN,
                            value: e
                        };
                        break;
                    case 91:
                        return Ae;
                    case 92:
                        if (MA(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                        break;
                    case 93:
                        return ee;
                    case 61:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), XA;
                        break;
                    case 123:
                        return GA;
                    case 125:
                        return kA;
                    case 117:
                    case 85:
                        r = this.peekCodePoint(0), n = this.peekCodePoint(1);
                        return 43 !== r || !RA(n) && 63 !== n || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                    case 124:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), JA;
                        if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), zA;
                        break;
                    case 126:
                        if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), xA;
                        break;
                    case -1:
                        return re
                }
                return bA(A) ? (this.consumeWhiteSpace(), te) : g(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : DA(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
                    type: l.DELIM_TOKEN,
                    value: Q(A)
                }
            }, e.prototype.consumeCodePoint = function() {
                var A = this._value.shift();
                return void 0 === A ? -1 : A
            }, e.prototype.reconsumeCodePoint = function(A) {
                this._value.unshift(A)
            }, e.prototype.peekCodePoint = function(A) {
                return A >= this._value.length ? -1 : this._value[A]
            }, e.prototype.consumeUnicodeRangeToken = function() {
                for (var A = [], e = this.consumeCodePoint(); RA(e) && A.length < 6;) A.push(e), e = this.consumeCodePoint();
                for (var t, r = !1; 63 === e && A.length < 6;) A.push(e), e = this.consumeCodePoint(), r = !0;
                if (r) return n = parseInt(Q.apply(void 0, A.map(function(A) {
                    return 63 === A ? 48 : A
                })), 16), t = parseInt(Q.apply(void 0, A.map(function(A) {
                    return 63 === A ? 70 : A
                })), 16), {
                    type: l.UNICODE_RANGE_TOKEN,
                    start: n,
                    end: t
                };
                var n = parseInt(Q.apply(void 0, A), 16);
                if (45 === this.peekCodePoint(0) && RA(this.peekCodePoint(1))) {
                    this.consumeCodePoint();
                    for (var e = this.consumeCodePoint(), B = []; RA(e) && B.length < 6;) B.push(e), e = this.consumeCodePoint();
                    return t = parseInt(Q.apply(void 0, B), 16), {
                        type: l.UNICODE_RANGE_TOKEN,
                        start: n,
                        end: t
                    }
                }
                return {
                    type: l.UNICODE_RANGE_TOKEN,
                    start: n,
                    end: n
                }
            }, e.prototype.consumeIdentLikeToken = function() {
                var A = this.consumeName();
                return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                    type: l.FUNCTION_TOKEN,
                    value: A
                }) : {
                    type: l.IDENT_TOKEN,
                    value: A
                }
            }, e.prototype.consumeUrlToken = function() {
                var A = [];
                if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return {
                    type: l.URL_TOKEN,
                    value: ""
                };
                var e = this.peekCodePoint(0);
                if (39 === e || 34 === e) return (e = this.consumeStringToken(this.consumeCodePoint())).type === l.STRING_TOKEN && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
                    type: l.URL_TOKEN,
                    value: e.value
                }) : (this.consumeBadUrlRemnants(), YA);
                for (;;) {
                    var t = this.consumeCodePoint();
                    if (-1 === t || 41 === t) return {
                        type: l.URL_TOKEN,
                        value: Q.apply(void 0, A)
                    };
                    if (bA(t)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                        type: l.URL_TOKEN,
                        value: Q.apply(void 0, A)
                    }) : (this.consumeBadUrlRemnants(), YA);
                    if (34 === t || 39 === t || 40 === t || 0 <= t && t <= 8 || 11 === t || 14 <= t && t <= 31 || 127 === t) return this.consumeBadUrlRemnants(), YA;
                    if (92 === t) {
                        if (!MA(t, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), YA;
                        A.push(this.consumeEscapedCodePoint())
                    } else A.push(t)
                }
            }, e.prototype.consumeWhiteSpace = function() {
                for (; bA(this.peekCodePoint(0));) this.consumeCodePoint()
            }, e.prototype.consumeBadUrlRemnants = function() {
                for (;;) {
                    var A = this.consumeCodePoint();
                    if (41 === A || -1 === A) return;
                    MA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                }
            }, e.prototype.consumeStringSlice = function(A) {
                for (var e = ""; 0 < A;) {
                    var t = Math.min(6e4, A);
                    e += Q.apply(void 0, this._value.splice(0, t)), A -= t
                }
                return this._value.shift(), e
            }, e.prototype.consumeStringToken = function(A) {
                for (var e = "", t = 0;;) {
                    var r, n = this._value[t];
                    if (-1 === n || void 0 === n || n === A) return e += this.consumeStringSlice(t), {
                        type: l.STRING_TOKEN,
                        value: e
                    };
                    if (10 === n) return this._value.splice(0, t), ZA;
                    92 !== n || -1 !== (r = this._value[t + 1]) && void 0 !== r && (10 === r ? (e += this.consumeStringSlice(t), t = -1, this._value.shift()) : MA(n, r) && (e = (e += this.consumeStringSlice(t)) + Q(this.consumeEscapedCodePoint()), t = -1)), t++
                }
            }, e.prototype.consumeNumber = function() {
                var A = [],
                    e = 4;
                for (43 !== (t = this.peekCodePoint(0)) && 45 !== t || A.push(this.consumeCodePoint()); g(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                var t = this.peekCodePoint(0),
                    r = this.peekCodePoint(1);
                if (46 === t && g(r))
                    for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; g(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                t = this.peekCodePoint(0);
                var r = this.peekCodePoint(1),
                    n = this.peekCodePoint(2);
                if ((69 === t || 101 === t) && ((43 === r || 45 === r) && g(n) || g(r)))
                    for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; g(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
                return [function(A) {
                    var e = 0,
                        t = 1;
                    43 !== A[e] && 45 !== A[e] || (45 === A[e] && (t = -1), e++);
                    for (var r = []; g(A[e]);) r.push(A[e++]);
                    var n = r.length ? parseInt(Q.apply(void 0, r), 10) : 0;
                    46 === A[e] && e++;
                    for (var B = []; g(A[e]);) B.push(A[e++]);
                    var s = B.length,
                        i = s ? parseInt(Q.apply(void 0, B), 10) : 0,
                        o = (69 !== A[e] && 101 !== A[e] || e++, 1);
                    43 !== A[e] && 45 !== A[e] || (45 === A[e] && (o = -1), e++);
                    for (var a = []; g(A[e]);) a.push(A[e++]);
                    var c = a.length ? parseInt(Q.apply(void 0, a), 10) : 0;
                    return t * (n + i * Math.pow(10, -s)) * Math.pow(10, o * c)
                }(A), e]
            }, e.prototype.consumeNumericToken = function() {
                var A, e = this.consumeNumber(),
                    t = e[0],
                    e = e[1],
                    r = this.peekCodePoint(0);
                return LA(r, this.peekCodePoint(1), this.peekCodePoint(2)) ? (A = this.consumeName(), {
                    type: l.DIMENSION_TOKEN,
                    number: t,
                    flags: e,
                    unit: A
                }) : 37 === r ? (this.consumeCodePoint(), {
                    type: l.PERCENTAGE_TOKEN,
                    number: t,
                    flags: e
                }) : {
                    type: l.NUMBER_TOKEN,
                    number: t,
                    flags: e
                }
            }, e.prototype.consumeEscapedCodePoint = function() {
                var A = this.consumeCodePoint();
                if (RA(A)) {
                    for (var e = Q(A); RA(this.peekCodePoint(0)) && e.length < 6;) e += Q(this.consumeCodePoint());
                    bA(this.peekCodePoint(0)) && this.consumeCodePoint();
                    var t = parseInt(e, 16);
                    return 0 === t || 55296 <= t && t <= 57343 || 1114111 < t ? 65533 : t
                }
                return -1 === A ? 65533 : A
            }, e.prototype.consumeName = function() {
                for (var A = "";;) {
                    var e = this.consumeCodePoint();
                    if (TA(e)) A += Q(e);
                    else {
                        if (!MA(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), A;
                        A += Q(this.consumeEscapedCodePoint())
                    }
                }
            }, e);

        function e() {
            this._value = []
        }
        t.create = function(A) {
            var e = new ne;
            return e.write(A), new t(e.read())
        }, t.parseValue = function(A) {
            return t.create(A).parseComponentValue()
        }, t.parseValues = function(A) {
            return t.create(A).parseComponentValues()
        }, t.prototype.parseComponentValue = function() {
            for (var A = this.consumeToken(); A.type === l.WHITESPACE_TOKEN;) A = this.consumeToken();
            if (A.type === l.EOF_TOKEN) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            this.reconsumeToken(A);
            for (var e = this.consumeComponentValue();
                (A = this.consumeToken()).type === l.WHITESPACE_TOKEN;);
            if (A.type === l.EOF_TOKEN) return e;
            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
        }, t.prototype.parseComponentValues = function() {
            for (var A = [];;) {
                var e = this.consumeComponentValue();
                if (e.type === l.EOF_TOKEN) return A;
                A.push(e), A.push()
            }
        }, t.prototype.consumeComponentValue = function() {
            var A = this.consumeToken();
            switch (A.type) {
                case l.LEFT_CURLY_BRACKET_TOKEN:
                case l.LEFT_SQUARE_BRACKET_TOKEN:
                case l.LEFT_PARENTHESIS_TOKEN:
                    return this.consumeSimpleBlock(A.type);
                case l.FUNCTION_TOKEN:
                    return this.consumeFunction(A)
            }
            return A
        }, t.prototype.consumeSimpleBlock = function(A) {
            for (var e = {
                    type: A,
                    values: []
                }, t = this.consumeToken();;) {
                if (t.type === l.EOF_TOKEN || Fe(t, A)) return e;
                this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), t = this.consumeToken()
            }
        }, t.prototype.consumeFunction = function(A) {
            for (var e = {
                    name: A.value,
                    values: [],
                    type: l.FUNCTION
                };;) {
                var t = this.consumeToken();
                if (t.type === l.EOF_TOKEN || t.type === l.RIGHT_PARENTHESIS_TOKEN) return e;
                this.reconsumeToken(t), e.values.push(this.consumeComponentValue())
            }
        }, t.prototype.consumeToken = function() {
            var A = this._tokens.shift();
            return void 0 === A ? re : A
        }, t.prototype.reconsumeToken = function(A) {
            this._tokens.unshift(A)
        };
        var Be = t;

        function t(A) {
            this._tokens = A
        }

        function se(A) {
            return A.type === l.DIMENSION_TOKEN
        }

        function ie(A) {
            return A.type === l.NUMBER_TOKEN
        }

        function w(A) {
            return A.type === l.IDENT_TOKEN
        }

        function oe(A) {
            return A.type === l.STRING_TOKEN
        }

        function ae(A, e) {
            return w(A) && A.value === e
        }

        function ce(A) {
            return A.type !== l.WHITESPACE_TOKEN
        }

        function Qe(A) {
            return A.type !== l.WHITESPACE_TOKEN && A.type !== l.COMMA_TOKEN
        }

        function ge(A) {
            var e = [],
                t = [];
            return A.forEach(function(A) {
                if (A.type === l.COMMA_TOKEN) {
                    if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
                    return e.push(t), void(t = [])
                }
                A.type !== l.WHITESPACE_TOKEN && t.push(A)
            }), t.length && e.push(t), e
        }

        function Ce(A) {
            return A.type === l.NUMBER_TOKEN || A.type === l.DIMENSION_TOKEN
        }

        function U(A) {
            return A.type === l.PERCENTAGE_TOKEN || Ce(A)
        }

        function ue(A) {
            return 1 < A.length ? [A[0], A[1]] : [A[0]]
        }

        function le(A, e, t) {
            var r = A[0],
                A = A[1];
            return [D(r, e), D(void 0 !== A ? A : r, t)]
        }

        function we(A) {
            return A.type === l.DIMENSION_TOKEN && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit)
        }

        function Ue(A) {
            switch (A.filter(w).map(function(A) {
                    return A.value
                }).join(" ")) {
                case "to bottom right":
                case "to right bottom":
                case "left top":
                case "top left":
                    return [C, C];
                case "to top":
                case "bottom":
                    return s(0);
                case "to bottom left":
                case "to left bottom":
                case "right top":
                case "top right":
                    return [C, Ie];
                case "to right":
                case "left":
                    return s(90);
                case "to top left":
                case "to left top":
                case "right bottom":
                case "bottom right":
                    return [Ie, Ie];
                case "to bottom":
                case "top":
                    return s(180);
                case "to top right":
                case "to right top":
                case "left bottom":
                case "bottom left":
                    return [Ie, C];
                case "to left":
                case "right":
                    return s(270)
            }
            return 0
        }

        function Ee(A) {
            return 0 == (255 & A)
        }

        function b(A) {
            var e = 255 & A,
                t = 255 & A >> 8,
                r = 255 & A >> 16,
                A = 255 & A >> 24;
            return e < 255 ? "rgba(" + A + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + A + "," + r + "," + t + ")"
        }

        function de(A, e) {
            if (A.type === l.NUMBER_TOKEN) return A.number;
            if (A.type !== l.PERCENTAGE_TOKEN) return 0;
            var t = 3 === e ? 1 : 255;
            return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
        }

        function he(A) {
            var e, t, r, A = A.filter(Qe);
            if (3 === A.length) return e = (r = A.map(de))[0], t = r[1], r = r[2], Ne(e, t, r, 1);
            if (4 !== A.length) return 0;
            A = A.map(de), e = A[0], t = A[1], r = A[2], A = A[3];
            return Ne(e, t, r, A)
        }

        function fe(A) {
            if (A.type === l.DIMENSION_TOKEN) switch (A.unit) {
                case "deg":
                    return Math.PI * A.number / 180;
                case "grad":
                    return Math.PI / 200 * A.number;
                case "rad":
                    return A.number;
                case "turn":
                    return 2 * Math.PI * A.number
            }
            throw new Error("Unsupported angle type")
        }

        function s(A) {
            return Math.PI * A / 180
        }
        var Fe = function(A, e) {
                return e === l.LEFT_CURLY_BRACKET_TOKEN && A.type === l.RIGHT_CURLY_BRACKET_TOKEN || e === l.LEFT_SQUARE_BRACKET_TOKEN && A.type === l.RIGHT_SQUARE_BRACKET_TOKEN || e === l.LEFT_PARENTHESIS_TOKEN && A.type === l.RIGHT_PARENTHESIS_TOKEN
            },
            C = {
                type: l.NUMBER_TOKEN,
                number: 0,
                flags: 4
            },
            He = {
                type: l.PERCENTAGE_TOKEN,
                number: 50,
                flags: 4
            },
            Ie = {
                type: l.PERCENTAGE_TOKEN,
                number: 100,
                flags: 4
            },
            D = function(A, e) {
                if (A.type === l.PERCENTAGE_TOKEN) return A.number / 100 * e;
                if (se(A)) switch (A.unit) {
                    case "rem":
                    case "em":
                        return 16 * A.number;
                    default:
                        return A.number
                }
                return A.number
            },
            pe = function(A) {
                if (A.type === l.FUNCTION) {
                    var e = Re[A.name];
                    if (void 0 === e) throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
                    return e(A.values)
                }
                if (A.type === l.HASH_TOKEN) {
                    var t, r, n, B;
                    if (3 === A.value.length) return t = A.value.substring(0, 1), r = A.value.substring(1, 2), n = A.value.substring(2, 3), Ne(parseInt(t + t, 16), parseInt(r + r, 16), parseInt(n + n, 16), 1);
                    if (4 === A.value.length) return t = A.value.substring(0, 1), r = A.value.substring(1, 2), n = A.value.substring(2, 3), B = A.value.substring(3, 4), Ne(parseInt(t + t, 16), parseInt(r + r, 16), parseInt(n + n, 16), parseInt(B + B, 16) / 255);
                    if (6 === A.value.length) return t = A.value.substring(0, 2), r = A.value.substring(2, 4), n = A.value.substring(4, 6), Ne(parseInt(t, 16), parseInt(r, 16), parseInt(n, 16), 1);
                    if (8 === A.value.length) return t = A.value.substring(0, 2), r = A.value.substring(2, 4), n = A.value.substring(4, 6), B = A.value.substring(6, 8), Ne(parseInt(t, 16), parseInt(r, 16), parseInt(n, 16), parseInt(B, 16) / 255)
                }
                if (A.type === l.IDENT_TOKEN) {
                    e = be[A.value.toUpperCase()];
                    if (void 0 !== e) return e
                }
                return be.TRANSPARENT
            },
            Ne = function(A, e, t, r) {
                return (A << 24 | e << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0
            };

        function me(A, e, t) {
            return t < 0 && (t += 1), 1 <= t && --t, t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
        }

        function Ke(A) {
            var A = A.filter(Qe),
                e = A[0],
                t = A[1],
                r = A[2],
                A = A[3],
                e = (e.type === l.NUMBER_TOKEN ? s(e.number) : fe(e)) / (2 * Math.PI),
                t = U(t) ? t.number / 100 : 0,
                r = U(r) ? r.number / 100 : 0,
                A = void 0 !== A && U(A) ? D(A, 1) : 1;
            if (0 == t) return Ne(255 * r, 255 * r, 255 * r, 1);
            var t = r <= .5 ? r * (1 + t) : r + t - r * t,
                r = 2 * r - t,
                n = me(r, t, e + 1 / 3),
                B = me(r, t, e),
                r = me(r, t, e - 1 / 3);
            return Ne(255 * n, 255 * B, 255 * r, A)
        }
        var i, ve, Re = {
                hsl: Ke,
                hsla: Ke,
                rgb: he,
                rgba: he
            },
            be = {
                ALICEBLUE: 4042850303,
                ANTIQUEWHITE: 4209760255,
                AQUA: 16777215,
                AQUAMARINE: 2147472639,
                AZURE: 4043309055,
                BEIGE: 4126530815,
                BISQUE: 4293182719,
                BLACK: 255,
                BLANCHEDALMOND: 4293643775,
                BLUE: 65535,
                BLUEVIOLET: 2318131967,
                BROWN: 2771004159,
                BURLYWOOD: 3736635391,
                CADETBLUE: 1604231423,
                CHARTREUSE: 2147418367,
                CHOCOLATE: 3530104575,
                CORAL: 4286533887,
                CORNFLOWERBLUE: 1687547391,
                CORNSILK: 4294499583,
                CRIMSON: 3692313855,
                CYAN: 16777215,
                DARKBLUE: 35839,
                DARKCYAN: 9145343,
                DARKGOLDENROD: 3095837695,
                DARKGRAY: 2846468607,
                DARKGREEN: 6553855,
                DARKGREY: 2846468607,
                DARKKHAKI: 3182914559,
                DARKMAGENTA: 2332068863,
                DARKOLIVEGREEN: 1433087999,
                DARKORANGE: 4287365375,
                DARKORCHID: 2570243327,
                DARKRED: 2332033279,
                DARKSALMON: 3918953215,
                DARKSEAGREEN: 2411499519,
                DARKSLATEBLUE: 1211993087,
                DARKSLATEGRAY: 793726975,
                DARKSLATEGREY: 793726975,
                DARKTURQUOISE: 13554175,
                DARKVIOLET: 2483082239,
                DEEPPINK: 4279538687,
                DEEPSKYBLUE: 12582911,
                DIMGRAY: 1768516095,
                DIMGREY: 1768516095,
                DODGERBLUE: 512819199,
                FIREBRICK: 2988581631,
                FLORALWHITE: 4294635775,
                FORESTGREEN: 579543807,
                FUCHSIA: 4278255615,
                GAINSBORO: 3705462015,
                GHOSTWHITE: 4177068031,
                GOLD: 4292280575,
                GOLDENROD: 3668254975,
                GRAY: 2155905279,
                GREEN: 8388863,
                GREENYELLOW: 2919182335,
                GREY: 2155905279,
                HONEYDEW: 4043305215,
                HOTPINK: 4285117695,
                INDIANRED: 3445382399,
                INDIGO: 1258324735,
                IVORY: 4294963455,
                KHAKI: 4041641215,
                LAVENDER: 3873897215,
                LAVENDERBLUSH: 4293981695,
                LAWNGREEN: 2096890111,
                LEMONCHIFFON: 4294626815,
                LIGHTBLUE: 2916673279,
                LIGHTCORAL: 4034953471,
                LIGHTCYAN: 3774873599,
                LIGHTGOLDENRODYELLOW: 4210742015,
                LIGHTGRAY: 3553874943,
                LIGHTGREEN: 2431553791,
                LIGHTGREY: 3553874943,
                LIGHTPINK: 4290167295,
                LIGHTSALMON: 4288707327,
                LIGHTSEAGREEN: 548580095,
                LIGHTSKYBLUE: 2278488831,
                LIGHTSLATEGRAY: 2005441023,
                LIGHTSLATEGREY: 2005441023,
                LIGHTSTEELBLUE: 2965692159,
                LIGHTYELLOW: 4294959359,
                LIME: 16711935,
                LIMEGREEN: 852308735,
                LINEN: 4210091775,
                MAGENTA: 4278255615,
                MAROON: 2147483903,
                MEDIUMAQUAMARINE: 1724754687,
                MEDIUMBLUE: 52735,
                MEDIUMORCHID: 3126187007,
                MEDIUMPURPLE: 2473647103,
                MEDIUMSEAGREEN: 1018393087,
                MEDIUMSLATEBLUE: 2070474495,
                MEDIUMSPRINGGREEN: 16423679,
                MEDIUMTURQUOISE: 1221709055,
                MEDIUMVIOLETRED: 3340076543,
                MIDNIGHTBLUE: 421097727,
                MINTCREAM: 4127193855,
                MISTYROSE: 4293190143,
                MOCCASIN: 4293178879,
                NAVAJOWHITE: 4292783615,
                NAVY: 33023,
                OLDLACE: 4260751103,
                OLIVE: 2155872511,
                OLIVEDRAB: 1804477439,
                ORANGE: 4289003775,
                ORANGERED: 4282712319,
                ORCHID: 3664828159,
                PALEGOLDENROD: 4008225535,
                PALEGREEN: 2566625535,
                PALETURQUOISE: 2951671551,
                PALEVIOLETRED: 3681588223,
                PAPAYAWHIP: 4293907967,
                PEACHPUFF: 4292524543,
                PERU: 3448061951,
                PINK: 4290825215,
                PLUM: 3718307327,
                POWDERBLUE: 2967529215,
                PURPLE: 2147516671,
                REBECCAPURPLE: 1714657791,
                RED: 4278190335,
                ROSYBROWN: 3163525119,
                ROYALBLUE: 1097458175,
                SADDLEBROWN: 2336560127,
                SALMON: 4202722047,
                SANDYBROWN: 4104413439,
                SEAGREEN: 780883967,
                SEASHELL: 4294307583,
                SIENNA: 2689740287,
                SILVER: 3233857791,
                SKYBLUE: 2278484991,
                SLATEBLUE: 1784335871,
                SLATEGRAY: 1887473919,
                SLATEGREY: 1887473919,
                SNOW: 4294638335,
                SPRINGGREEN: 16744447,
                STEELBLUE: 1182971135,
                TAN: 3535047935,
                TEAL: 8421631,
                THISTLE: 3636451583,
                TOMATO: 4284696575,
                TRANSPARENT: 0,
                TURQUOISE: 1088475391,
                VIOLET: 4001558271,
                WHEAT: 4125012991,
                WHITE: 4294967295,
                WHITESMOKE: 4126537215,
                YELLOW: 4294902015,
                YELLOWGREEN: 2597139199
            };

        function De(A) {
            var e = pe(A[0]),
                A = A[1];
            return A && U(A) ? {
                color: e,
                stop: A
            } : {
                color: e,
                stop: null
            }
        }

        function Te(A, t) {
            var e = A[0],
                r = A[A.length - 1];
            null === e.stop && (e.stop = C), null === r.stop && (r.stop = Ie);
            for (var n = [], B = 0, s = 0; s < A.length; s++) {
                var i = A[s].stop;
                null !== i ? (B < (i = D(i, t)) ? n.push(i) : n.push(B), B = i) : n.push(null)
            }
            for (var o = null, s = 0; s < n.length; s++) {
                var a = n[s];
                if (null === a) null === o && (o = s);
                else if (null !== o) {
                    for (var c = s - o, Q = (a - n[o - 1]) / (1 + c), g = 1; g <= c; g++) n[o + g - 1] = Q * g;
                    o = null
                }
            }
            return A.map(function(A, e) {
                return {
                    color: A.color,
                    stop: Math.max(Math.min(1, n[e] / t), 0)
                }
            })
        }

        function T(A, e) {
            return Math.sqrt(A * A + e * e)
        }

        function Me(A, e, n, B, s) {
            return [
                [0, 0],
                [0, e],
                [A, 0],
                [A, e]
            ].reduce(function(A, e) {
                var t = e[0],
                    r = e[1],
                    t = T(n - t, B - r);
                return (s ? t < A.optimumDistance : t > A.optimumDistance) ? {
                    optimumCorner: e,
                    optimumDistance: t
                } : A
            }, {
                optimumDistance: s ? 1 / 0 : -1 / 0,
                optimumCorner: null
            }).optimumCorner
        }

        function Le(A) {
            var t = s(180),
                r = [];
            return ge(A).forEach(function(A, e) {
                if (0 === e) {
                    e = A[0];
                    if (e.type === l.IDENT_TOKEN && -1 !== ["top", "left", "right", "bottom"].indexOf(e.value)) return void(t = Ue(A));
                    if (we(e)) return void(t = (fe(e) + s(270)) % s(360))
                }
                e = De(A);
                r.push(e)
            }), {
                angle: t,
                stops: r,
                type: L.LINEAR_GRADIENT
            }
        }

        function ye(A) {
            return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
        }
        i = {
            VALUE: 0,
            0: "VALUE",
            LIST: 1,
            1: "LIST",
            IDENT_VALUE: 2,
            2: "IDENT_VALUE",
            TYPE_VALUE: 3,
            3: "TYPE_VALUE",
            TOKEN_VALUE: 4,
            4: "TOKEN_VALUE"
        };

        function Oe(A, e, t, r, n) {
            var B = "http://www.w3.org/2000/svg",
                s = document.createElementNS(B, "svg"),
                B = document.createElementNS(B, "foreignObject");
            return s.setAttributeNS(null, "width", A.toString()), s.setAttributeNS(null, "height", e.toString()), B.setAttributeNS(null, "width", "100%"), B.setAttributeNS(null, "height", "100%"), B.setAttributeNS(null, "x", t.toString()), B.setAttributeNS(null, "y", r.toString()), B.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(B), B.appendChild(n), s
        }

        function Se(r) {
            return new Promise(function(A, e) {
                var t = new Image;
                t.onload = function() {
                    return A(t)
                }, t.onerror = e, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
            })
        }
        var Pe = {
                name: "background-clip",
                initialValue: "border-box",
                prefix: !((W = ve = {
                    BORDER_BOX: 0,
                    0: "BORDER_BOX",
                    PADDING_BOX: 1,
                    1: "PADDING_BOX"
                })[W.CONTENT_BOX = 2] = "CONTENT_BOX"),
                type: i.LIST,
                parse: function(A) {
                    return A.map(function(A) {
                        if (w(A)) switch (A.value) {
                            case "padding-box":
                                return ve.PADDING_BOX;
                            case "content-box":
                                return ve.CONTENT_BOX
                        }
                        return ve.BORDER_BOX
                    })
                }
            },
            Ve = {
                name: "background-color",
                initialValue: "transparent",
                prefix: !1,
                type: i.TYPE_VALUE,
                format: "color"
            },
            a = {
                get SUPPORT_RANGE_BOUNDS() {
                    var A = function(A) {
                        if (A.createRange) {
                            var e = A.createRange();
                            if (e.getBoundingClientRect) {
                                var t = A.createElement("boundtest"),
                                    e = (t.style.height = "123px", t.style.display = "block", A.body.appendChild(t), e.selectNode(t), e.getBoundingClientRect()),
                                    e = Math.round(e.height);
                                if (A.body.removeChild(t), 123 === e) return !0
                            }
                        }
                        return !1
                    }(document);
                    return Object.defineProperty(a, "SUPPORT_RANGE_BOUNDS", {
                        value: A
                    }), A
                },
                get SUPPORT_SVG_DRAWING() {
                    var A = function(A) {
                        var e = new Image,
                            t = A.createElement("canvas"),
                            r = t.getContext("2d");
                        if (!r) return !1;
                        e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                        try {
                            r.drawImage(e, 0, 0), t.toDataURL()
                        } catch (A) {
                            return !1
                        }
                        return !0
                    }(document);
                    return Object.defineProperty(a, "SUPPORT_SVG_DRAWING", {
                        value: A
                    }), A
                },
                get SUPPORT_FOREIGNOBJECT_DRAWING() {
                    var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function(t) {
                        var A = t.createElement("canvas"),
                            r = 100,
                            n = (A.width = r, A.height = r, A.getContext("2d"));
                        if (!n) return Promise.reject(!1);
                        n.fillStyle = "rgb(0, 255, 0)", n.fillRect(0, 0, r, r);
                        var e = new Image,
                            B = A.toDataURL(),
                            A = (e.src = B, Oe(r, r, 0, 0, e));
                        return n.fillStyle = "red", n.fillRect(0, 0, r, r), Se(A).then(function(A) {
                            n.drawImage(A, 0, 0);
                            var A = n.getImageData(0, 0, r, r).data,
                                e = (n.fillStyle = "red", n.fillRect(0, 0, r, r), t.createElement("div"));
                            return e.style.backgroundImage = "url(" + B + ")", e.style.height = "100px", ye(A) ? Se(Oe(r, r, 0, 0, e)) : Promise.reject(!1)
                        }).then(function(A) {
                            return n.drawImage(A, 0, 0), ye(n.getImageData(0, 0, r, r).data)
                        }).catch(function() {
                            return !1
                        })
                    }(document) : Promise.resolve(!1);
                    return Object.defineProperty(a, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                        value: A
                    }), A
                },
                get SUPPORT_CORS_IMAGES() {
                    var A = void 0 !== (new Image).crossOrigin;
                    return Object.defineProperty(a, "SUPPORT_CORS_IMAGES", {
                        value: A
                    }), A
                },
                get SUPPORT_RESPONSE_TYPE() {
                    var A = "string" == typeof(new XMLHttpRequest).responseType;
                    return Object.defineProperty(a, "SUPPORT_RESPONSE_TYPE", {
                        value: A
                    }), A
                },
                get SUPPORT_CORS_XHR() {
                    var A = "withCredentials" in new XMLHttpRequest;
                    return Object.defineProperty(a, "SUPPORT_CORS_XHR", {
                        value: A
                    }), A
                }
            },
            M = (r.prototype.debug = function() {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                !this.enabled || "undefined" != typeof window && window.console && "function" == typeof console.debug || this.info.apply(this, A)
            }, r.prototype.getTime = function() {
                return Date.now() - this.start
            }, r.create = function(A) {
                r.instances[A.id] = new r(A)
            }, r.destroy = function(A) {
                delete r.instances[A]
            }, r.getInstance = function(A) {
                var e = r.instances[A];
                if (void 0 === e) throw new Error("No logger instance found with id " + A);
                return e
            }, r.prototype.info = function() {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                this.enabled && "undefined" != typeof window && window.console && console.info
            }, r.prototype.error = function() {
                for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                !this.enabled || "undefined" != typeof window && window.console && "function" == typeof console.error || this.info.apply(this, A)
            }, r.instances = {}, r);

        function r(A) {
            var e = A.id,
                A = A.enabled;
            this.id = e, this.enabled = A, this.start = Date.now()
        }
        n.create = function(A, e) {
            return n._caches[A] = new ze(A, e)
        }, n.destroy = function(A) {
            delete n._caches[A]
        }, n.open = function(A) {
            var e = n._caches[A];
            if (void 0 !== e) return e;
            throw new Error('Cache with key "' + A + '" not found')
        }, n.getOrigin = function(A) {
            var e = n._link;
            return e ? (e.href = A, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank"
        }, n.isSameOrigin = function(A) {
            return n.getOrigin(A) === n._origin
        }, n.setContext = function(A) {
            n._link = A.document.createElement("a"), n._origin = n.getOrigin(A.location.href)
        }, n.getInstance = function() {
            var A = n._current;
            if (null === A) throw new Error("No cache instance attached");
            return A
        }, n.attachInstance = function(A) {
            n._current = A
        }, n.detachInstance = function() {
            n._current = null
        }, n._caches = {}, n._origin = "about:blank", n._current = null;
        var Xe = n;

        function n() {}
        Je.prototype.addImage = function(A) {
            var e = Promise.resolve();
            return this.has(A) || (At(A) || qe(A)) && (this._cache[A] = this.loadImage(A)), e
        }, Je.prototype.match = function(A) {
            return this._cache[A]
        }, Je.prototype.loadImage = function(s) {
            return o(this, void 0, void 0, function() {
                var e, r, t, n, B = this;
                return R(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return e = Xe.isSameOrigin(s), r = !_e(s) && !0 === this._options.useCORS && a.SUPPORT_CORS_IMAGES && !e, t = !_e(s) && !e && "string" == typeof this._options.proxy && a.SUPPORT_CORS_XHR && !r, e || !1 !== this._options.allowTaint || _e(s) || t || r ? (n = s, t ? [4, this.proxy(n)] : [3, 2]) : [2];
                        case 1:
                            n = A.sent(), A.label = 2;
                        case 2:
                            return M.getInstance(this.id).debug("Added image " + s.substring(0, 256)), [4, new Promise(function(A, e) {
                                var t = new Image;
                                t.onload = function() {
                                    return A(t)
                                }, t.onerror = e, ($e(n) || r) && (t.crossOrigin = "anonymous"), t.src = n, !0 === t.complete && setTimeout(function() {
                                    return A(t)
                                }, 500), 0 < B._options.imageTimeout && setTimeout(function() {
                                    return e("Timed out (" + B._options.imageTimeout + "ms) loading image")
                                }, B._options.imageTimeout)
                            })];
                        case 3:
                            return [2, A.sent()]
                    }
                })
            })
        }, Je.prototype.has = function(A) {
            return void 0 !== this._cache[A]
        }, Je.prototype.keys = function() {
            return Promise.resolve(Object.keys(this._cache))
        }, Je.prototype.proxy = function(B) {
            var s = this,
                i = this._options.proxy;
            if (!i) throw new Error("No proxy defined");
            var o = B.substring(0, 256);
            return new Promise(function(e, t) {
                var A, r = a.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                    n = new XMLHttpRequest;
                n.onload = function() {
                    var A;
                    200 === n.status ? "text" == r ? e(n.response) : ((A = new FileReader).addEventListener("load", function() {
                        return e(A.result)
                    }, !1), A.addEventListener("error", function(A) {
                        return t(A)
                    }, !1), A.readAsDataURL(n.response)) : t("Failed to proxy resource " + o + " with status code " + n.status)
                }, n.onerror = t, n.open("GET", i + "?url=" + encodeURIComponent(B) + "&responseType=" + r), "text" != r && n instanceof XMLHttpRequest && (n.responseType = r), s._options.imageTimeout && (A = s._options.imageTimeout, n.timeout = A, n.ontimeout = function() {
                    return t("Timed out (" + A + "ms) proxying " + o)
                }), n.send()
            })
        };
        var ze = Je;

        function Je(A, e) {
            this.id = A, this._options = e, this._cache = {}
        }

        function xe(A) {
            var r = y.CIRCLE,
                n = O.FARTHEST_CORNER,
                B = [],
                s = [];
            return ge(A).forEach(function(A, e) {
                var t = !0;
                0 === e ? t = A.reduce(function(A, e) {
                    if (w(e)) switch (e.value) {
                        case "center":
                            return s.push(He), !1;
                        case "top":
                        case "left":
                            return s.push(C), !1;
                        case "right":
                        case "bottom":
                            return s.push(Ie), !1
                    } else if (U(e) || Ce(e)) return s.push(e), !1;
                    return A
                }, t) : 1 === e && (t = A.reduce(function(A, e) {
                    if (w(e)) switch (e.value) {
                        case "circle":
                            return r = y.CIRCLE, !1;
                        case st:
                            return r = y.ELLIPSE, !1;
                        case it:
                        case tt:
                            return n = O.CLOSEST_SIDE, !1;
                        case rt:
                            return n = O.FARTHEST_SIDE, !1;
                        case nt:
                            return n = O.CLOSEST_CORNER, !1;
                        case "cover":
                        case Bt:
                            return n = O.FARTHEST_CORNER, !1
                    } else if (Ce(e) || U(e)) return (n = Array.isArray(n) ? n : []).push(e), !1;
                    return A
                }, t)), t && (e = De(A), B.push(e))
            }), {
                size: n,
                shape: r,
                stops: B,
                position: s,
                type: L.RADIAL_GRADIENT
            }
        }

        function Ge(A) {
            if (A.type === l.URL_TOKEN) return e = {
                url: A.value,
                type: L.URL
            }, Xe.getInstance().addImage(A.value), e;
            if (A.type !== l.FUNCTION) throw new Error("Unsupported image type");
            var e = ot[A.name];
            if (void 0 === e) throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
            return e(A.values)
        }
        var L, y, O, ke, We, Ye = /^data:image\/svg\+xml/i,
            Ze = /^data:image\/.*;base64,/i,
            je = /^data:image\/.*/i,
            qe = function(A) {
                return a.SUPPORT_SVG_DRAWING || !et(A)
            },
            _e = function(A) {
                return je.test(A)
            },
            $e = function(A) {
                return Ze.test(A)
            },
            At = function(A) {
                return "blob" === A.substr(0, 4)
            },
            et = function(A) {
                return "svg" === A.substr(-3).toLowerCase() || Ye.test(A)
            },
            tt = "closest-side",
            rt = "farthest-side",
            nt = "closest-corner",
            Bt = "farthest-corner",
            st = "ellipse",
            it = "contain",
            ot = ((c = L = L || {})[c.URL = 0] = "URL", c[c.LINEAR_GRADIENT = 1] = "LINEAR_GRADIENT", c[c.RADIAL_GRADIENT = 2] = "RADIAL_GRADIENT", y = {
                CIRCLE: 0,
                0: "CIRCLE",
                ELLIPSE: 1,
                1: "ELLIPSE"
            }, O = {
                CLOSEST_SIDE: 0,
                0: "CLOSEST_SIDE",
                FARTHEST_SIDE: 1,
                1: "FARTHEST_SIDE",
                CLOSEST_CORNER: 2,
                2: "CLOSEST_CORNER",
                FARTHEST_CORNER: 3,
                3: "FARTHEST_CORNER"
            }, {
                "linear-gradient": function(A) {
                    var t = s(180),
                        r = [];
                    return ge(A).forEach(function(A, e) {
                        if (0 === e) {
                            e = A[0];
                            if (e.type === l.IDENT_TOKEN && "to" === e.value) return void(t = Ue(A));
                            if (we(e)) return void(t = fe(e))
                        }
                        e = De(A);
                        r.push(e)
                    }), {
                        angle: t,
                        stops: r,
                        type: L.LINEAR_GRADIENT
                    }
                },
                "-moz-linear-gradient": Le,
                "-ms-linear-gradient": Le,
                "-o-linear-gradient": Le,
                "-webkit-linear-gradient": Le,
                "radial-gradient": function(A) {
                    var n = y.CIRCLE,
                        B = O.FARTHEST_CORNER,
                        s = [],
                        i = [];
                    return ge(A).forEach(function(A, e) {
                        var t, r = !0;
                        0 === e && (t = !1, r = A.reduce(function(A, e) {
                            if (t)
                                if (w(e)) switch (e.value) {
                                    case "center":
                                        return i.push(He), A;
                                    case "top":
                                    case "left":
                                        return i.push(C), A;
                                    case "right":
                                    case "bottom":
                                        return i.push(Ie), A
                                } else(U(e) || Ce(e)) && i.push(e);
                                else if (w(e)) switch (e.value) {
                                case "circle":
                                    return n = y.CIRCLE, !1;
                                case st:
                                    return n = y.ELLIPSE, !1;
                                case "at":
                                    return !(t = !0);
                                case tt:
                                    return B = O.CLOSEST_SIDE, !1;
                                case "cover":
                                case rt:
                                    return B = O.FARTHEST_SIDE, !1;
                                case it:
                                case nt:
                                    return B = O.CLOSEST_CORNER, !1;
                                case Bt:
                                    return B = O.FARTHEST_CORNER, !1
                            } else if (Ce(e) || U(e)) return (B = Array.isArray(B) ? B : []).push(e), !1;
                            return A
                        }, r)), r && (e = De(A), s.push(e))
                    }), {
                        size: B,
                        shape: n,
                        stops: s,
                        position: i,
                        type: L.RADIAL_GRADIENT
                    }
                },
                "-moz-radial-gradient": xe,
                "-ms-radial-gradient": xe,
                "-o-radial-gradient": xe,
                "-webkit-radial-gradient": xe,
                "-webkit-gradient": function(A) {
                    var e = s(180),
                        r = [],
                        n = L.LINEAR_GRADIENT,
                        t = y.CIRCLE,
                        B = O.FARTHEST_CORNER;
                    return ge(A).forEach(function(A, e) {
                        var t, A = A[0];
                        if (0 === e) {
                            if (w(A) && "linear" === A.value) return void(n = L.LINEAR_GRADIENT);
                            if (w(A) && "radial" === A.value) return void(n = L.RADIAL_GRADIENT)
                        }
                        A.type === l.FUNCTION && ("from" === A.name ? (t = pe(A.values[0]), r.push({
                            stop: C,
                            color: t
                        })) : "to" === A.name ? (t = pe(A.values[0]), r.push({
                            stop: Ie,
                            color: t
                        })) : "color-stop" === A.name && 2 === (e = A.values.filter(Qe)).length && (t = pe(e[1]), ie(A = e[0]) && r.push({
                            stop: {
                                type: l.PERCENTAGE_TOKEN,
                                number: 100 * A.number,
                                flags: A.flags
                            },
                            color: t
                        })))
                    }), n === L.LINEAR_GRADIENT ? {
                        angle: (e + s(180)) % s(360),
                        stops: r,
                        type: n
                    } : {
                        size: B,
                        shape: t,
                        stops: r,
                        position: [],
                        type: n
                    }
                }
            }),
            at = {
                name: "background-image",
                initialValue: "none",
                type: i.LIST,
                prefix: !1,
                parse: function(A) {
                    if (0 === A.length) return [];
                    var e = A[0];
                    return e.type === l.IDENT_TOKEN && "none" === e.value ? [] : A.filter(function(A) {
                        return Qe(A) && (A.type !== l.FUNCTION || ot[A.name])
                    }).map(Ge)
                }
            },
            ct = {
                name: "background-origin",
                initialValue: "border-box",
                prefix: !1,
                type: i.LIST,
                parse: function(A) {
                    return A.map(function(A) {
                        if (w(A)) switch (A.value) {
                            case "padding-box":
                                return 1;
                            case "content-box":
                                return 2
                        }
                        return 0
                    })
                }
            },
            Qt = {
                name: "background-position",
                initialValue: "0% 0%",
                type: i.LIST,
                prefix: !1,
                parse: function(A) {
                    return ge(A).map(function(A) {
                        return A.filter(U)
                    }).map(ue)
                }
            },
            B = ke = {
                REPEAT: 0,
                0: "REPEAT",
                NO_REPEAT: 1,
                1: "NO_REPEAT",
                REPEAT_X: 2,
                2: "REPEAT_X"
            },
            gt = {
                name: "background-repeat",
                initialValue: "repeat",
                prefix: !(B[B.REPEAT_Y = 3] = "REPEAT_Y"),
                type: i.LIST,
                parse: function(A) {
                    return ge(A).map(function(A) {
                        return A.filter(w).map(function(A) {
                            return A.value
                        }).join(" ")
                    }).map(Ct)
                }
            },
            Ct = function(A) {
                switch (A) {
                    case "no-repeat":
                        return ke.NO_REPEAT;
                    case "repeat-x":
                    case "repeat no-repeat":
                        return ke.REPEAT_X;
                    case "repeat-y":
                    case "no-repeat repeat":
                        return ke.REPEAT_Y;
                    default:
                        return ke.REPEAT
                }
            };

        function ut(A) {
            return {
                name: "border-" + A + "-color",
                initialValue: "transparent",
                prefix: !1,
                type: i.TYPE_VALUE,
                format: "color"
            }
        }

        function lt(A) {
            return {
                name: "border-radius-" + A,
                initialValue: "0 0",
                prefix: !1,
                type: i.LIST,
                parse: function(A) {
                    return ue(A.filter(U))
                }
            }
        }(u = We = We || {}).AUTO = "auto", u.CONTAIN = "contain";
        var wt, Ut = {
                name: "background-size",
                initialValue: "0",
                prefix: !(u.COVER = "cover"),
                type: i.LIST,
                parse: function(A) {
                    return ge(A).map(function(A) {
                        return A.filter(Et)
                    })
                }
            },
            Et = function(A) {
                return w(A) || U(A)
            },
            dt = ut("top"),
            ht = ut("right"),
            ft = ut("bottom"),
            Ft = ut("left"),
            Ht = lt("top-left"),
            It = lt("top-right"),
            pt = lt("bottom-right"),
            Nt = lt("bottom-left");

        function mt(A) {
            return {
                name: "border-" + A + "-style",
                initialValue: "solid",
                prefix: !1,
                type: i.IDENT_VALUE,
                parse: function(A) {
                    return "none" === A ? wt.NONE : wt.SOLID
                }
            }
        }

        function Kt(A) {
            return {
                name: "border-" + A + "-width",
                initialValue: "0",
                type: i.VALUE,
                prefix: !1,
                parse: function(A) {
                    return se(A) ? A.number : 0
                }
            }
        }
        wt = {
            NONE: 0,
            0: "NONE",
            SOLID: 1,
            1: "SOLID"
        };
        var vt, Rt, bt, E, Dt = mt("top"),
            Tt = mt("right"),
            Mt = mt("bottom"),
            Lt = mt("left"),
            yt = Kt("top"),
            Ot = Kt("right"),
            St = Kt("bottom"),
            Pt = Kt("left"),
            Vt = {
                name: "color",
                initialValue: "transparent",
                prefix: !1,
                type: i.TYPE_VALUE,
                format: "color"
            },
            Xt = {
                name: "display",
                initialValue: "inline-block",
                prefix: !1,
                type: i.LIST,
                parse: function(A) {
                    return A.filter(w).reduce(function(A, e) {
                        return A | zt(e.value)
                    }, 0)
                }
            },
            zt = function(A) {
                switch (A) {
                    case "block":
                        return 2;
                    case "inline":
                        return 4;
                    case "run-in":
                        return 8;
                    case "flow":
                        return 16;
                    case "flow-root":
                        return 32;
                    case "table":
                        return 64;
                    case "flex":
                    case "-webkit-flex":
                        return 128;
                    case "grid":
                    case "-ms-grid":
                        return 256;
                    case "ruby":
                        return 512;
                    case "subgrid":
                        return 1024;
                    case "list-item":
                        return 2048;
                    case "table-row-group":
                        return 4096;
                    case "table-header-group":
                        return 8192;
                    case "table-footer-group":
                        return 16384;
                    case "table-row":
                        return 32768;
                    case "table-cell":
                        return 65536;
                    case "table-column-group":
                        return 131072;
                    case "table-column":
                        return 262144;
                    case "table-caption":
                        return 524288;
                    case "ruby-base":
                        return 1048576;
                    case "ruby-text":
                        return 2097152;
                    case "ruby-base-container":
                        return 4194304;
                    case "ruby-text-container":
                        return 8388608;
                    case "contents":
                        return 16777216;
                    case "inline-block":
                        return 33554432;
                    case "inline-list-item":
                        return 67108864;
                    case "inline-table":
                        return 134217728;
                    case "inline-flex":
                        return 268435456;
                    case "inline-grid":
                        return 536870912
                }
                return 0
            },
            W = vt = {
                NONE: 0,
                0: "NONE",
                LEFT: 1,
                1: "LEFT",
                RIGHT: 2,
                2: "RIGHT",
                INLINE_START: 3,
                3: "INLINE_START"
            },
            Jt = {
                name: "float",
                initialValue: "none",
                prefix: !(W[W.INLINE_END = 4] = "INLINE_END"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "left":
                            return vt.LEFT;
                        case "right":
                            return vt.RIGHT;
                        case "inline-start":
                            return vt.INLINE_START;
                        case "inline-end":
                            return vt.INLINE_END
                    }
                    return vt.NONE
                }
            },
            xt = {
                name: "letter-spacing",
                initialValue: "0",
                prefix: !1,
                type: i.VALUE,
                parse: function(A) {
                    return !(A.type === l.IDENT_TOKEN && "normal" === A.value || A.type !== l.NUMBER_TOKEN && A.type !== l.DIMENSION_TOKEN) ? A.number : 0
                }
            },
            Gt = {
                name: "line-break",
                initialValue: (Rt = {}).NORMAL = "normal",
                prefix: !(Rt.STRICT = "strict"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    return "strict" !== A ? Rt.NORMAL : Rt.STRICT
                }
            },
            kt = {
                name: "line-height",
                initialValue: "normal",
                prefix: !1,
                type: i.TOKEN_VALUE
            },
            Wt = {
                name: "list-style-image",
                initialValue: "none",
                type: i.VALUE,
                prefix: !1,
                parse: function(A) {
                    return A.type === l.IDENT_TOKEN && "none" === A.value ? null : Ge(A)
                }
            },
            c = bt = {
                INSIDE: 0,
                0: "INSIDE"
            },
            Yt = {
                name: "list-style-position",
                initialValue: "outside",
                prefix: !(c[c.OUTSIDE = 1] = "OUTSIDE"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    return "inside" !== A ? bt.OUTSIDE : bt.INSIDE
                }
            };

        function Zt(A) {
            return {
                name: "margin-" + A,
                initialValue: "0",
                prefix: !1,
                type: i.TOKEN_VALUE
            }
        }(B = E = E || {})[B.NONE = -1] = "NONE", B[B.DISC = 0] = "DISC", B[B.CIRCLE = 1] = "CIRCLE", B[B.SQUARE = 2] = "SQUARE", B[B.DECIMAL = 3] = "DECIMAL", B[B.CJK_DECIMAL = 4] = "CJK_DECIMAL", B[B.DECIMAL_LEADING_ZERO = 5] = "DECIMAL_LEADING_ZERO", B[B.LOWER_ROMAN = 6] = "LOWER_ROMAN", B[B.UPPER_ROMAN = 7] = "UPPER_ROMAN", B[B.LOWER_GREEK = 8] = "LOWER_GREEK", B[B.LOWER_ALPHA = 9] = "LOWER_ALPHA", B[B.UPPER_ALPHA = 10] = "UPPER_ALPHA", B[B.ARABIC_INDIC = 11] = "ARABIC_INDIC", B[B.ARMENIAN = 12] = "ARMENIAN", B[B.BENGALI = 13] = "BENGALI", B[B.CAMBODIAN = 14] = "CAMBODIAN", B[B.CJK_EARTHLY_BRANCH = 15] = "CJK_EARTHLY_BRANCH", B[B.CJK_HEAVENLY_STEM = 16] = "CJK_HEAVENLY_STEM", B[B.CJK_IDEOGRAPHIC = 17] = "CJK_IDEOGRAPHIC", B[B.DEVANAGARI = 18] = "DEVANAGARI", B[B.ETHIOPIC_NUMERIC = 19] = "ETHIOPIC_NUMERIC", B[B.GEORGIAN = 20] = "GEORGIAN", B[B.GUJARATI = 21] = "GUJARATI", B[B.GURMUKHI = 22] = "GURMUKHI", B[B.HEBREW = 22] = "HEBREW", B[B.HIRAGANA = 23] = "HIRAGANA", B[B.HIRAGANA_IROHA = 24] = "HIRAGANA_IROHA", B[B.JAPANESE_FORMAL = 25] = "JAPANESE_FORMAL", B[B.JAPANESE_INFORMAL = 26] = "JAPANESE_INFORMAL", B[B.KANNADA = 27] = "KANNADA", B[B.KATAKANA = 28] = "KATAKANA", B[B.KATAKANA_IROHA = 29] = "KATAKANA_IROHA", B[B.KHMER = 30] = "KHMER", B[B.KOREAN_HANGUL_FORMAL = 31] = "KOREAN_HANGUL_FORMAL", B[B.KOREAN_HANJA_FORMAL = 32] = "KOREAN_HANJA_FORMAL", B[B.KOREAN_HANJA_INFORMAL = 33] = "KOREAN_HANJA_INFORMAL", B[B.LAO = 34] = "LAO", B[B.LOWER_ARMENIAN = 35] = "LOWER_ARMENIAN", B[B.MALAYALAM = 36] = "MALAYALAM", B[B.MONGOLIAN = 37] = "MONGOLIAN", B[B.MYANMAR = 38] = "MYANMAR", B[B.ORIYA = 39] = "ORIYA", B[B.PERSIAN = 40] = "PERSIAN", B[B.SIMP_CHINESE_FORMAL = 41] = "SIMP_CHINESE_FORMAL", B[B.SIMP_CHINESE_INFORMAL = 42] = "SIMP_CHINESE_INFORMAL", B[B.TAMIL = 43] = "TAMIL", B[B.TELUGU = 44] = "TELUGU", B[B.THAI = 45] = "THAI", B[B.TIBETAN = 46] = "TIBETAN", B[B.TRAD_CHINESE_FORMAL = 47] = "TRAD_CHINESE_FORMAL", B[B.TRAD_CHINESE_INFORMAL = 48] = "TRAD_CHINESE_INFORMAL", B[B.UPPER_ARMENIAN = 49] = "UPPER_ARMENIAN", B[B.DISCLOSURE_OPEN = 50] = "DISCLOSURE_OPEN";
        var jt, qt = {
                name: "list-style-type",
                initialValue: "none",
                prefix: !(B[B.DISCLOSURE_CLOSED = 51] = "DISCLOSURE_CLOSED"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "disc":
                            return E.DISC;
                        case "circle":
                            return E.CIRCLE;
                        case "square":
                            return E.SQUARE;
                        case "decimal":
                            return E.DECIMAL;
                        case "cjk-decimal":
                            return E.CJK_DECIMAL;
                        case "decimal-leading-zero":
                            return E.DECIMAL_LEADING_ZERO;
                        case "lower-roman":
                            return E.LOWER_ROMAN;
                        case "upper-roman":
                            return E.UPPER_ROMAN;
                        case "lower-greek":
                            return E.LOWER_GREEK;
                        case "lower-alpha":
                            return E.LOWER_ALPHA;
                        case "upper-alpha":
                            return E.UPPER_ALPHA;
                        case "arabic-indic":
                            return E.ARABIC_INDIC;
                        case "armenian":
                            return E.ARMENIAN;
                        case "bengali":
                            return E.BENGALI;
                        case "cambodian":
                            return E.CAMBODIAN;
                        case "cjk-earthly-branch":
                            return E.CJK_EARTHLY_BRANCH;
                        case "cjk-heavenly-stem":
                            return E.CJK_HEAVENLY_STEM;
                        case "cjk-ideographic":
                            return E.CJK_IDEOGRAPHIC;
                        case "devanagari":
                            return E.DEVANAGARI;
                        case "ethiopic-numeric":
                            return E.ETHIOPIC_NUMERIC;
                        case "georgian":
                            return E.GEORGIAN;
                        case "gujarati":
                            return E.GUJARATI;
                        case "gurmukhi":
                            return E.GURMUKHI;
                        case "hebrew":
                            return E.HEBREW;
                        case "hiragana":
                            return E.HIRAGANA;
                        case "hiragana-iroha":
                            return E.HIRAGANA_IROHA;
                        case "japanese-formal":
                            return E.JAPANESE_FORMAL;
                        case "japanese-informal":
                            return E.JAPANESE_INFORMAL;
                        case "kannada":
                            return E.KANNADA;
                        case "katakana":
                            return E.KATAKANA;
                        case "katakana-iroha":
                            return E.KATAKANA_IROHA;
                        case "khmer":
                            return E.KHMER;
                        case "korean-hangul-formal":
                            return E.KOREAN_HANGUL_FORMAL;
                        case "korean-hanja-formal":
                            return E.KOREAN_HANJA_FORMAL;
                        case "korean-hanja-informal":
                            return E.KOREAN_HANJA_INFORMAL;
                        case "lao":
                            return E.LAO;
                        case "lower-armenian":
                            return E.LOWER_ARMENIAN;
                        case "malayalam":
                            return E.MALAYALAM;
                        case "mongolian":
                            return E.MONGOLIAN;
                        case "myanmar":
                            return E.MYANMAR;
                        case "oriya":
                            return E.ORIYA;
                        case "persian":
                            return E.PERSIAN;
                        case "simp-chinese-formal":
                            return E.SIMP_CHINESE_FORMAL;
                        case "simp-chinese-informal":
                            return E.SIMP_CHINESE_INFORMAL;
                        case "tamil":
                            return E.TAMIL;
                        case "telugu":
                            return E.TELUGU;
                        case "thai":
                            return E.THAI;
                        case "tibetan":
                            return E.TIBETAN;
                        case "trad-chinese-formal":
                            return E.TRAD_CHINESE_FORMAL;
                        case "trad-chinese-informal":
                            return E.TRAD_CHINESE_INFORMAL;
                        case "upper-armenian":
                            return E.UPPER_ARMENIAN;
                        case "disclosure-open":
                            return E.DISCLOSURE_OPEN;
                        case "disclosure-closed":
                            return E.DISCLOSURE_CLOSED;
                        default:
                            return E.NONE
                    }
                }
            },
            _t = Zt("top"),
            $t = Zt("right"),
            Ar = Zt("bottom"),
            er = Zt("left");

        function tr(A) {
            return {
                name: "padding-" + A,
                initialValue: "0",
                prefix: !1,
                type: i.TYPE_VALUE,
                format: "length-percentage"
            }
        }
        var rr, nr, Br, sr, ir, or, ar, cr = {
                name: "overflow",
                initialValue: "visible",
                prefix: !((u = jt = {
                    VISIBLE: 0,
                    0: "VISIBLE",
                    HIDDEN: 1,
                    1: "HIDDEN",
                    SCROLL: 2,
                    2: "SCROLL"
                })[u.AUTO = 3] = "AUTO"),
                type: i.LIST,
                parse: function(A) {
                    return A.filter(w).map(function(A) {
                        switch (A.value) {
                            case "hidden":
                                return jt.HIDDEN;
                            case "scroll":
                                return jt.SCROLL;
                            case "auto":
                                return jt.AUTO;
                            default:
                                return jt.VISIBLE
                        }
                    })
                }
            },
            Qr = {
                name: "overflow-wrap",
                initialValue: (rr = {}).NORMAL = "normal",
                prefix: !(rr.BREAK_WORD = "break-word"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    return "break-word" !== A ? rr.NORMAL : rr.BREAK_WORD
                }
            },
            gr = tr("top"),
            Cr = tr("right"),
            ur = tr("bottom"),
            lr = tr("left"),
            W = nr = {
                LEFT: 0,
                0: "LEFT",
                CENTER: 1,
                1: "CENTER"
            },
            wr = {
                name: "text-align",
                initialValue: "left",
                prefix: !(W[W.RIGHT = 2] = "RIGHT"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "right":
                            return nr.RIGHT;
                        case "center":
                        case "justify":
                            return nr.CENTER;
                        default:
                            return nr.LEFT
                    }
                }
            },
            c = Br = {
                STATIC: 0,
                0: "STATIC",
                RELATIVE: 1,
                1: "RELATIVE",
                ABSOLUTE: 2,
                2: "ABSOLUTE",
                FIXED: 3,
                3: "FIXED"
            },
            Ur = {
                name: "position",
                initialValue: "static",
                prefix: !(c[c.STICKY = 4] = "STICKY"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "relative":
                            return Br.RELATIVE;
                        case "absolute":
                            return Br.ABSOLUTE;
                        case "fixed":
                            return Br.FIXED;
                        case "sticky":
                            return Br.STICKY
                    }
                    return Br.STATIC
                }
            },
            Er = {
                name: "text-shadow",
                initialValue: "none",
                type: i.LIST,
                prefix: !1,
                parse: function(A) {
                    return 1 === A.length && ae(A[0], "none") ? [] : ge(A).map(function(A) {
                        for (var e = {
                                color: be.TRANSPARENT,
                                offsetX: C,
                                offsetY: C,
                                blur: C
                            }, t = 0, r = 0; r < A.length; r++) {
                            var n = A[r];
                            Ce(n) ? (0 === t ? e.offsetX = n : 1 === t ? e.offsetY = n : e.blur = n, t++) : e.color = pe(n)
                        }
                        return e
                    })
                }
            },
            B = sr = {
                NONE: 0,
                0: "NONE",
                LOWERCASE: 1,
                1: "LOWERCASE",
                UPPERCASE: 2,
                2: "UPPERCASE"
            },
            dr = {
                name: "text-transform",
                initialValue: "none",
                prefix: !(B[B.CAPITALIZE = 3] = "CAPITALIZE"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "uppercase":
                            return sr.UPPERCASE;
                        case "lowercase":
                            return sr.LOWERCASE;
                        case "capitalize":
                            return sr.CAPITALIZE
                    }
                    return sr.NONE
                }
            },
            hr = {
                name: "transform",
                initialValue: "none",
                prefix: !0,
                type: i.VALUE,
                parse: function(A) {
                    if (A.type === l.IDENT_TOKEN && "none" === A.value) return null;
                    if (A.type !== l.FUNCTION) return null;
                    var e = fr[A.name];
                    if (void 0 === e) throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
                    return e(A.values)
                }
            },
            fr = {
                matrix: function(A) {
                    A = A.filter(function(A) {
                        return A.type === l.NUMBER_TOKEN
                    }).map(function(A) {
                        return A.number
                    });
                    return 6 === A.length ? A : null
                },
                matrix3d: function(A) {
                    var A = A.filter(function(A) {
                            return A.type === l.NUMBER_TOKEN
                        }).map(function(A) {
                            return A.number
                        }),
                        e = A[0],
                        t = A[1],
                        r = (A[2], A[3], A[4]),
                        n = A[5],
                        B = (A[6], A[7], A[8], A[9], A[10], A[11], A[12]),
                        s = A[13];
                    return A[14], A[15], 16 === A.length ? [e, t, r, n, B, s] : null
                }
            },
            u = {
                type: l.PERCENTAGE_TOKEN,
                number: 50,
                flags: 4
            },
            Fr = [u, u],
            Hr = {
                name: "transform-origin",
                initialValue: "50% 50%",
                prefix: !0,
                type: i.LIST,
                parse: function(A) {
                    A = A.filter(U);
                    return 2 !== A.length ? Fr : [A[0], A[1]]
                }
            },
            W = ir = {
                VISIBLE: 0,
                0: "VISIBLE",
                HIDDEN: 1,
                1: "HIDDEN"
            },
            Ir = {
                name: "visible",
                initialValue: "none",
                prefix: !(W[W.COLLAPSE = 2] = "COLLAPSE"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "hidden":
                            return ir.HIDDEN;
                        case "collapse":
                            return ir.COLLAPSE;
                        default:
                            return ir.VISIBLE
                    }
                }
            },
            c = or = {
                NORMAL: "normal",
                BREAK_ALL: "break-all"
            },
            pr = {
                name: "word-break",
                initialValue: "normal",
                prefix: !(c.KEEP_ALL = "keep-all"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "break-all":
                            return or.BREAK_ALL;
                        case "keep-all":
                            return or.KEEP_ALL;
                        default:
                            return or.NORMAL
                    }
                }
            },
            Nr = {
                name: "z-index",
                initialValue: "auto",
                prefix: !1,
                type: i.VALUE,
                parse: function(A) {
                    if (A.type === l.IDENT_TOKEN) return {
                        auto: !0,
                        order: 0
                    };
                    if (ie(A)) return {
                        auto: !1,
                        order: A.number
                    };
                    throw new Error("Invalid z-index number parsed")
                }
            },
            mr = {
                name: "opacity",
                initialValue: "1",
                type: i.VALUE,
                prefix: !1,
                parse: function(A) {
                    return ie(A) ? A.number : 1
                }
            },
            Kr = {
                name: "text-decoration-color",
                initialValue: "transparent",
                prefix: !1,
                type: i.TYPE_VALUE,
                format: "color"
            },
            vr = {
                name: "text-decoration-line",
                initialValue: "none",
                prefix: !1,
                type: i.LIST,
                parse: function(A) {
                    return A.filter(w).map(function(A) {
                        switch (A.value) {
                            case "underline":
                                return 1;
                            case "overline":
                                return 2;
                            case "line-through":
                                return 3;
                            case "none":
                                return 4
                        }
                        return 0
                    }).filter(function(A) {
                        return 0 !== A
                    })
                }
            },
            Rr = {
                name: "font-family",
                initialValue: "",
                prefix: !1,
                type: i.LIST,
                parse: function(A) {
                    var e = [],
                        t = [];
                    return A.forEach(function(A) {
                        switch (A.type) {
                            case l.IDENT_TOKEN:
                            case l.STRING_TOKEN:
                                e.push(A.value);
                                break;
                            case l.NUMBER_TOKEN:
                                e.push(A.number.toString());
                                break;
                            case l.COMMA_TOKEN:
                                t.push(e.join(" ")), e.length = 0
                        }
                    }), e.length && t.push(e.join(" ")), t.map(function(A) {
                        return -1 === A.indexOf(" ") ? A : "'" + A + "'"
                    })
                }
            },
            br = {
                name: "font-size",
                initialValue: "0",
                prefix: !1,
                type: i.TYPE_VALUE,
                format: "length"
            },
            Dr = {
                name: "font-weight",
                initialValue: "normal",
                type: i.VALUE,
                prefix: !1,
                parse: function(A) {
                    return ie(A) ? A.number : !w(A) || "bold" !== A.value ? 400 : 700
                }
            },
            Tr = {
                name: "font-variant",
                initialValue: "none",
                type: i.LIST,
                prefix: !1,
                parse: function(A) {
                    return A.filter(w).map(function(A) {
                        return A.value
                    })
                }
            };

        function f(A, e) {
            return 0 != (A & e)
        }

        function Mr(A, e, t) {
            if (!A) return "";
            e = A[Math.min(e, A.length - 1)];
            return e ? t ? e.open : e.close : ""
        }
        var Lr, yr = {
                name: "font-style",
                initialValue: "normal",
                prefix: !((Lr = ar = {
                    NORMAL: "normal",
                    ITALIC: "italic"
                }).OBLIQUE = "oblique"),
                type: i.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "oblique":
                            return ar.OBLIQUE;
                        case "italic":
                            return ar.ITALIC;
                        default:
                            return ar.NORMAL
                    }
                }
            },
            Or = {
                name: "content",
                initialValue: "none",
                type: i.LIST,
                prefix: !1,
                parse: function(A) {
                    if (0 === A.length) return [];
                    var e = A[0];
                    return e.type === l.IDENT_TOKEN && "none" === e.value ? [] : A
                }
            },
            Sr = {
                name: "counter-increment",
                initialValue: "none",
                prefix: !0,
                type: i.LIST,
                parse: function(A) {
                    if (0 === A.length) return null;
                    var e = A[0];
                    if (e.type === l.IDENT_TOKEN && "none" === e.value) return null;
                    for (var t = [], r = A.filter(ce), n = 0; n < r.length; n++) {
                        var B = r[n],
                            s = r[n + 1];
                        B.type === l.IDENT_TOKEN && (s = s && ie(s) ? s.number : 1, t.push({
                            counter: B.value,
                            increment: s
                        }))
                    }
                    return t
                }
            },
            Pr = {
                name: "counter-reset",
                initialValue: "none",
                prefix: !0,
                type: i.LIST,
                parse: function(A) {
                    if (0 === A.length) return [];
                    for (var e = [], t = A.filter(ce), r = 0; r < t.length; r++) {
                        var n = t[r],
                            B = t[r + 1];
                        w(n) && "none" !== n.value && (B = B && ie(B) ? B.number : 0, e.push({
                            counter: n.value,
                            reset: B
                        }))
                    }
                    return e
                }
            },
            Vr = {
                name: "quotes",
                initialValue: "none",
                prefix: !0,
                type: i.LIST,
                parse: function(A) {
                    if (0 === A.length) return null;
                    var e = A[0];
                    if (e.type === l.IDENT_TOKEN && "none" === e.value) return null;
                    var t = [],
                        r = A.filter(oe);
                    if (r.length % 2 != 0) return null;
                    for (var n = 0; n < r.length; n += 2) {
                        var B = r[n].value,
                            s = r[n + 1].value;
                        t.push({
                            open: B,
                            close: s
                        })
                    }
                    return t
                }
            },
            Xr = {
                name: "box-shadow",
                initialValue: "none",
                type: i.LIST,
                prefix: !1,
                parse: function(A) {
                    return 1 === A.length && ae(A[0], "none") ? [] : ge(A).map(function(A) {
                        for (var e = {
                                color: 255,
                                offsetX: C,
                                offsetY: C,
                                blur: C,
                                spread: C,
                                inset: !1
                            }, t = 0, r = 0; r < A.length; r++) {
                            var n = A[r];
                            ae(n, "inset") ? e.inset = !0 : Ce(n) ? (0 === t ? e.offsetX = n : 1 === t ? e.offsetY = n : 2 === t ? e.blur = n : e.spread = n, t++) : e.color = pe(n)
                        }
                        return e
                    })
                }
            },
            zr = (Jr.prototype.isVisible = function() {
                return 0 < this.display && 0 < this.opacity && this.visibility === ir.VISIBLE
            }, Jr.prototype.isTransparent = function() {
                return Ee(this.backgroundColor)
            }, Jr.prototype.isTransformed = function() {
                return null !== this.transform
            }, Jr.prototype.isPositioned = function() {
                return this.position !== Br.STATIC
            }, Jr.prototype.isPositionedWithZIndex = function() {
                return this.isPositioned() && !this.zIndex.auto
            }, Jr.prototype.isFloating = function() {
                return this.float !== vt.NONE
            }, Jr.prototype.isInlineLevel = function() {
                return f(this.display, 4) || f(this.display, 33554432) || f(this.display, 268435456) || f(this.display, 536870912) || f(this.display, 67108864) || f(this.display, 134217728)
            }, Jr);

        function Jr(A) {
            this.backgroundClip = F(Pe, A.backgroundClip), this.backgroundColor = F(Ve, A.backgroundColor), this.backgroundImage = F(at, A.backgroundImage), this.backgroundOrigin = F(ct, A.backgroundOrigin), this.backgroundPosition = F(Qt, A.backgroundPosition), this.backgroundRepeat = F(gt, A.backgroundRepeat), this.backgroundSize = F(Ut, A.backgroundSize), this.borderTopColor = F(dt, A.borderTopColor), this.borderRightColor = F(ht, A.borderRightColor), this.borderBottomColor = F(ft, A.borderBottomColor), this.borderLeftColor = F(Ft, A.borderLeftColor), this.borderTopLeftRadius = F(Ht, A.borderTopLeftRadius), this.borderTopRightRadius = F(It, A.borderTopRightRadius), this.borderBottomRightRadius = F(pt, A.borderBottomRightRadius), this.borderBottomLeftRadius = F(Nt, A.borderBottomLeftRadius), this.borderTopStyle = F(Dt, A.borderTopStyle), this.borderRightStyle = F(Tt, A.borderRightStyle), this.borderBottomStyle = F(Mt, A.borderBottomStyle), this.borderLeftStyle = F(Lt, A.borderLeftStyle), this.borderTopWidth = F(yt, A.borderTopWidth), this.borderRightWidth = F(Ot, A.borderRightWidth), this.borderBottomWidth = F(St, A.borderBottomWidth), this.borderLeftWidth = F(Pt, A.borderLeftWidth), this.boxShadow = F(Xr, A.boxShadow), this.color = F(Vt, A.color), this.display = F(Xt, A.display), this.float = F(Jt, A.cssFloat), this.fontFamily = F(Rr, A.fontFamily), this.fontSize = F(br, A.fontSize), this.fontStyle = F(yr, A.fontStyle), this.fontVariant = F(Tr, A.fontVariant), this.fontWeight = F(Dr, A.fontWeight), this.letterSpacing = F(xt, A.letterSpacing), this.lineBreak = F(Gt, A.lineBreak), this.lineHeight = F(kt, A.lineHeight), this.listStyleImage = F(Wt, A.listStyleImage), this.listStylePosition = F(Yt, A.listStylePosition), this.listStyleType = F(qt, A.listStyleType), this.marginTop = F(_t, A.marginTop), this.marginRight = F($t, A.marginRight), this.marginBottom = F(Ar, A.marginBottom), this.marginLeft = F(er, A.marginLeft), this.opacity = F(mr, A.opacity);
            var e = F(cr, A.overflow);
            this.overflowX = e[0], this.overflowY = e[1 < e.length ? 1 : 0], this.overflowWrap = F(Qr, A.overflowWrap), this.paddingTop = F(gr, A.paddingTop), this.paddingRight = F(Cr, A.paddingRight), this.paddingBottom = F(ur, A.paddingBottom), this.paddingLeft = F(lr, A.paddingLeft), this.position = F(Ur, A.position), this.textAlign = F(wr, A.textAlign), this.textDecorationColor = F(Kr, A.textDecorationColor || A.color), this.textDecorationLine = F(vr, A.textDecorationLine), this.textShadow = F(Er, A.textShadow), this.textTransform = F(dr, A.textTransform), this.transform = F(hr, A.transform), this.transformOrigin = F(Hr, A.transformOrigin), this.visibility = F(Ir, A.visibility), this.wordBreak = F(pr, A.wordBreak), this.zIndex = F(Nr, A.zIndex)
        }

        function xr(A) {
            this.content = F(Or, A.content), this.quotes = F(Vr, A.quotes)
        }

        function Gr(A) {
            this.counterIncrement = F(Sr, A.counterIncrement), this.counterReset = F(Pr, A.counterReset)
        }

        function kr(A, e) {
            this.text = A, this.bounds = e
        }

        function Wr(A, e) {
            e = {
                lineBreak: e.lineBreak,
                wordBreak: e.overflowWrap === rr.BREAK_WORD ? "break-word" : e.wordBreak
            }, c = z(A), r = c, void 0 === (n = (e = (e = e) || {
                lineBreak: "normal",
                wordBreak: "normal"
            }).lineBreak) && (n = "strict"), B = [], s = [], i = [], r.forEach(function(A, e) {
                var t = hA.get(A);
                if (50 < t ? (i.push(!0), t -= 50) : i.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(n) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return s.push(e), B.push(16);
                if (4 !== t && 11 !== t) return s.push(e), 31 === t ? B.push("strict" === n ? nA : lA) : t === dA || 29 === t ? B.push(cA) : 43 === t ? 131072 <= A && A <= 196605 || 196608 <= A && A <= 262141 ? B.push(lA) : B.push(cA) : void B.push(t);
                if (0 === e) return s.push(e), B.push(cA);
                A = B[e - 1];
                return -1 === pA.indexOf(A) ? (s.push(s[e - 1]), B.push(A)) : (s.push(e), B.push(cA))
            }), o = (A = [s, B, i])[1], a = A[2], A = [A[0], o = "break-all" !== e.wordBreak && "break-word" !== e.wordBreak ? o : o.map(function(A) {
                return -1 !== [d, cA, dA].indexOf(A) ? lA : A
            }), "keep-all" === e.wordBreak ? a.map(function(A, e) {
                return A && 19968 <= r[e] && r[e] <= 40959
            }) : void 0], Q = A[0], g = A[1], C = A[2], u = c.length, w = l = 0;
            for (var t, r, n, B, s, i, o, a, c, Q, g, C, u, l, w, U = {
                    next: function() {
                        if (u <= w) return {
                            done: !0,
                            value: null
                        };
                        for (var A = h; w < u && (A = function(A, e, t, r, n) {
                                if (0 === t[r]) return h;
                                if (r -= 1, Array.isArray(n) && !0 === n[r]) return h;
                                var B, n = r - 1,
                                    s = 1 + r,
                                    i = e[r],
                                    o = 0 <= n ? e[n] : 0,
                                    a = e[s];
                                if (2 === i && 3 === a) return h;
                                if (-1 !== FA.indexOf(i)) return "!";
                                if (-1 !== FA.indexOf(a)) return h;
                                if (-1 !== HA.indexOf(a)) return h;
                                if (8 === j(r, e)) return "÷";
                                if (11 === hA.get(A[r]) && (a === lA || a === QA || a === gA)) return h;
                                if (7 === i || 7 === a) return h;
                                if (9 === i) return h;
                                if (-1 === [q, _, $].indexOf(i) && 9 === a) return h;
                                if (-1 !== [AA, eA, tA, sA, aA].indexOf(a)) return h;
                                if (j(r, e) === BA) return h;
                                if (Z(23, BA, r, e)) return h;
                                if (Z([AA, eA], nA, r, e)) return h;
                                if (Z(12, 12, r, e)) return h;
                                if (i === q) return "÷";
                                if (23 === i || 23 === a) return h;
                                if (16 === a || 16 === i) return "÷";
                                if (-1 !== [_, $, nA].indexOf(a) || 14 === i) return h;
                                if (36 === o && -1 !== mA.indexOf(i)) return h;
                                if (i === aA && 36 === a) return h;
                                if (a === rA && -1 !== fA.concat(rA, tA, d, lA, QA, gA).indexOf(i)) return h;
                                if (-1 !== fA.indexOf(a) && i === d || -1 !== fA.indexOf(i) && a === d) return h;
                                if (i === oA && -1 !== [lA, QA, gA].indexOf(a) || -1 !== [lA, QA, gA].indexOf(i) && a === iA) return h;
                                if (-1 !== fA.indexOf(i) && -1 !== IA.indexOf(a) || -1 !== IA.indexOf(i) && -1 !== fA.indexOf(a)) return h;
                                if (-1 !== [oA, iA].indexOf(i) && (a === d || -1 !== [BA, $].indexOf(a) && e[1 + s] === d) || -1 !== [BA, $].indexOf(i) && a === d || i === d && -1 !== [d, aA, sA].indexOf(a)) return h;
                                if (-1 !== [d, aA, sA, AA, eA].indexOf(a))
                                    for (var c = r; 0 <= c;) {
                                        if ((B = e[c]) === d) return h;
                                        if (-1 === [aA, sA].indexOf(B)) break;
                                        c--
                                    }
                                if (-1 !== [oA, iA].indexOf(a))
                                    for (c = -1 !== [AA, eA].indexOf(i) ? n : r; 0 <= c;) {
                                        if ((B = e[c]) === d) return h;
                                        if (-1 === [aA, sA].indexOf(B)) break;
                                        c--
                                    }
                                if (wA === i && -1 !== [wA, UA, CA, uA].indexOf(a) || -1 !== [UA, CA].indexOf(i) && -1 !== [UA, EA].indexOf(a) || -1 !== [EA, uA].indexOf(i) && a === EA) return h;
                                if (-1 !== NA.indexOf(i) && -1 !== [rA, iA].indexOf(a) || -1 !== NA.indexOf(a) && i === oA) return h;
                                if (-1 !== fA.indexOf(i) && -1 !== fA.indexOf(a)) return h;
                                if (i === sA && -1 !== fA.indexOf(a)) return h;
                                if (-1 !== fA.concat(d).indexOf(i) && a === BA || -1 !== fA.concat(d).indexOf(a) && i === eA) return h;
                                if (41 === i && 41 === a) {
                                    for (var Q = t[r], g = 1; 0 < Q && 41 === e[--Q];) g++;
                                    if (g % 2 != 0) return h
                                }
                                return i === QA && a === gA ? h : "÷"
                            }(c, g, Q, ++w, C)) === h;);
                        if (A === h && w !== u) return {
                            done: !0,
                            value: null
                        };
                        var e = new KA(c, A, l, w);
                        return l = w, {
                            value: e,
                            done: !1
                        }
                    }
                }, E = []; !(t = U.next()).done;) t.value && E.push(t.value.slice());
            return E
        }

        function Yr(A, e) {
            switch (e) {
                case sr.LOWERCASE:
                    return A.toLowerCase();
                case sr.CAPITALIZE:
                    return A.replace(_r, $r);
                case sr.UPPERCASE:
                    return A.toUpperCase();
                default:
                    return A
            }
        }
        var Zr, F = function(A, e) {
                var t = new ne,
                    e = null != e ? e.toString() : A.initialValue,
                    r = (t.write(e), new Be(t.read()));
                switch (A.type) {
                    case i.IDENT_VALUE:
                        var n = r.parseComponentValue();
                        return A.parse(w(n) ? n.value : A.initialValue);
                    case i.VALUE:
                        return A.parse(r.parseComponentValue());
                    case i.LIST:
                        return A.parse(r.parseComponentValues());
                    case i.TOKEN_VALUE:
                        return r.parseComponentValue();
                    case i.TYPE_VALUE:
                        switch (A.format) {
                            case "angle":
                                return fe(r.parseComponentValue());
                            case "color":
                                return pe(r.parseComponentValue());
                            case "image":
                                return Ge(r.parseComponentValue());
                            case "length":
                                var B = r.parseComponentValue();
                                return Ce(B) ? B : C;
                            case "length-percentage":
                                B = r.parseComponentValue();
                                return U(B) ? B : C
                        }
                }
                throw new Error("Attempting to parse unsupported css format type " + A.format)
            },
            jr = function(A) {
                this.styles = new zr(window.getComputedStyle(A, null)), this.textNodes = [], this.elements = [], null !== this.styles.transform && Jn(A) && (A.style.transform = "none"), this.bounds = X(A), this.flags = 0
            },
            qr = function(A, e) {
                var t, r, n, B, s;
                this.text = Yr(A.data, e.textTransform), this.textBounds = (t = this.text, n = A, t = t, t = 0 !== (A = r = e).letterSpacing ? z(t).map(function(A) {
                    return Q(A)
                }) : Wr(t, A), B = [], s = 0, t.forEach(function(A) {
                    var e;
                    r.textDecorationLine.length || 0 < A.trim().length ? a.SUPPORT_RANGE_BOUNDS ? B.push(new kr(A, function(A, e, t) {
                        var r = A.ownerDocument;
                        if (!r) throw new Error("Node has no owner document");
                        r = r.createRange();
                        return r.setStart(A, e), r.setEnd(A, e + t), P.fromClientRect(r.getBoundingClientRect())
                    }(n, s, A.length))) : (e = n.splitText(A.length), B.push(new kr(A, function(A) {
                        var e = A.ownerDocument;
                        if (e) {
                            var e = e.createElement("html2canvaswrapper"),
                                t = (e.appendChild(A.cloneNode(!0)), A.parentNode);
                            if (t) return t.replaceChild(e, A), A = X(e), e.firstChild && t.replaceChild(e.firstChild, e), A
                        }
                        return new P(0, 0, 0, 0)
                    }(n))), n = e) : a.SUPPORT_RANGE_BOUNDS || (n = n.splitText(A.length)), s += A.length
                }), B)
            },
            _r = /(^|\s|:|-|\(|\))([a-z])/g,
            $r = function(A, e, t) {
                return 0 < A.length ? e + t.toUpperCase() : A
            },
            An = (v(en, Zr = jr), en);

        function en(A) {
            var e = Zr.call(this, A) || this;
            return e.src = A.currentSrc || A.src, e.intrinsicWidth = A.naturalWidth, e.intrinsicHeight = A.naturalHeight, Xe.getInstance().addImage(e.src), e
        }
        v(nn, tn = jr);
        var tn, rn = nn;

        function nn(A) {
            var e = tn.call(this, A) || this;
            return e.canvas = A, e.intrinsicWidth = A.width, e.intrinsicHeight = A.height, e
        }
        v(on, Bn = jr);
        var Bn, sn = on;

        function on(A) {
            var e = Bn.call(this, A) || this,
                t = new XMLSerializer;
            return e.svg = "data:image/svg+xml," + encodeURIComponent(t.serializeToString(A)), e.intrinsicWidth = A.width.baseVal.value, e.intrinsicHeight = A.height.baseVal.value, Xe.getInstance().addImage(e.svg), e
        }
        v(Qn, an = jr);
        var an, cn = Qn;

        function Qn(A) {
            var e = an.call(this, A) || this;
            return e.value = A.value, e
        }
        v(un, gn = jr);
        var gn, Cn = un;

        function un(A) {
            var e = gn.call(this, A) || this;
            return e.start = A.start, e.reversed = "boolean" == typeof A.reversed && !0 === A.reversed, e
        }
        var ln, wn = [{
                type: l.DIMENSION_TOKEN,
                flags: 0,
                unit: "px",
                number: 3
            }],
            Un = [{
                type: l.PERCENTAGE_TOKEN,
                flags: 0,
                number: 50
            }],
            En = "checkbox",
            dn = "radio",
            hn = 707406591,
            fn = (v(Fn, ln = jr), Fn);

        function Fn(A) {
            var e, t = ln.call(this, A) || this;
            switch (t.type = A.type.toLowerCase(), t.checked = A.checked, t.value = 0 === (e = "password" === (A = A).type ? new Array(A.value.length + 1).join("•") : A.value).length ? A.placeholder || "" : e, t.type !== En && t.type !== dn || (t.styles.backgroundColor = 3739148031, t.styles.borderTopColor = t.styles.borderRightColor = t.styles.borderBottomColor = t.styles.borderLeftColor = 2779096575, t.styles.borderTopWidth = t.styles.borderRightWidth = t.styles.borderBottomWidth = t.styles.borderLeftWidth = 1, t.styles.borderTopStyle = t.styles.borderRightStyle = t.styles.borderBottomStyle = t.styles.borderLeftStyle = wt.SOLID, t.styles.backgroundClip = [ve.BORDER_BOX], t.styles.backgroundOrigin = [0], t.bounds = (A = t.bounds).width > A.height ? new P(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new P(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A), t.type) {
                case En:
                    t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = wn;
                    break;
                case dn:
                    t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = Un
            }
            return t
        }
        v(pn, Hn = jr);
        var Hn, In = pn;

        function pn(A) {
            var e = Hn.call(this, A) || this,
                A = A.options[A.selectedIndex || 0];
            return e.value = A && A.text || "", e
        }
        v(Kn, Nn = jr);
        var Nn, mn = Kn;

        function Kn(A) {
            var e = Nn.call(this, A) || this;
            return e.value = A.value, e
        }

        function vn(A) {
            return pe(Be.create(A).parseComponentValue())
        }
        v(Dn, Rn = jr);
        var Rn, bn = Dn;

        function Dn(A) {
            var e, t, r = Rn.call(this, A) || this;
            r.src = A.src, r.width = parseInt(A.width, 10) || 0, r.height = parseInt(A.height, 10) || 0, r.backgroundColor = r.styles.backgroundColor;
            try {
                A.contentWindow && A.contentWindow.document && A.contentWindow.document.documentElement && (r.tree = Sn(A.contentWindow.document.documentElement), e = A.contentWindow.document.documentElement ? vn(getComputedStyle(A.contentWindow.document.documentElement).backgroundColor) : be.TRANSPARENT, t = A.contentWindow.document.body ? vn(getComputedStyle(A.contentWindow.document.body).backgroundColor) : be.TRANSPARENT, r.backgroundColor = Ee(e) ? Ee(t) ? r.styles.backgroundColor : t : e)
            } catch (A) {}
            return r
        }

        function Tn(A) {
            return "STYLE" === A.tagName
        }

        function Mn(A, e, t) {
            for (var r = A.firstChild; r; r = B) {
                var n, B = r.nextSibling;
                Xn(r) && 0 < r.data.trim().length ? e.textNodes.push(new qr(r, e.styles)) : zn(r) && (n = On(r)).styles.isVisible() && (Pn(r, n, t) ? n.flags |= 4 : Vn(n.styles) && (n.flags |= 2), -1 !== yn.indexOf(r.tagName) && (n.flags |= 8), e.elements.push(n), _n(r) || Yn(r) || $n(r) || Mn(r, n, t))
            }
        }

        function Ln(A) {
            return "BODY" === A.tagName
        }
        var yn = ["OL", "UL", "MENU"],
            On = function(A) {
                return new(jn(A) ? An : Zn(A) ? rn : Yn(A) ? sn : Gn(A) ? cn : kn(A) ? Cn : Wn(A) ? fn : $n(A) ? In : _n(A) ? mn : qn(A) ? bn : jr)(A)
            },
            Sn = function(A) {
                var e = On(A);
                return e.flags |= 4, Mn(A, e, e), e
            },
            Pn = function(A, e, t) {
                return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Ln(A) && t.styles.isTransparent()
            },
            Vn = function(A) {
                return A.isPositioned() || A.isFloating()
            },
            Xn = function(A) {
                return A.nodeType === Node.TEXT_NODE
            },
            zn = function(A) {
                return A.nodeType === Node.ELEMENT_NODE
            },
            Jn = function(A) {
                return zn(A) && void 0 !== A.style && !xn(A)
            },
            xn = function(A) {
                return "object" == cs(A.className)
            },
            Gn = function(A) {
                return "LI" === A.tagName
            },
            kn = function(A) {
                return "OL" === A.tagName
            },
            Wn = function(A) {
                return "INPUT" === A.tagName
            },
            Yn = function(A) {
                return "svg" === A.tagName
            },
            Zn = function(A) {
                return "CANVAS" === A.tagName
            },
            jn = function(A) {
                return "IMG" === A.tagName
            },
            qn = function(A) {
                return "IFRAME" === A.tagName
            },
            _n = function(A) {
                return "TEXTAREA" === A.tagName
            },
            $n = function(A) {
                return "SELECT" === A.tagName
            },
            AB = (eB.prototype.getCounterValue = function(A) {
                A = this.counters[A];
                return A && A.length ? A[A.length - 1] : 1
            }, eB.prototype.getCounterValues = function(A) {
                return this.counters[A] || []
            }, eB.prototype.pop = function(A) {
                var e = this;
                A.forEach(function(A) {
                    return e.counters[A].pop()
                })
            }, eB.prototype.parse = function(A) {
                var t = this,
                    e = A.counterIncrement,
                    A = A.counterReset,
                    r = !0,
                    n = (null !== e && e.forEach(function(A) {
                        var e = t.counters[A.counter];
                        e && 0 !== A.increment && (r = !1, e[Math.max(0, e.length - 1)] += A.increment)
                    }), []);
                return r && A.forEach(function(A) {
                    var e = t.counters[A.counter];
                    n.push(A.counter), (e = e || (t.counters[A.counter] = [])).push(A.reset)
                }), n
            }, eB);

        function eB() {
            this.counters = {}
        }

        function tB(r, A, e, n, t, B) {
            return r < A || e < r ? gB(r, t, 0 < B.length) : n.integers.reduce(function(A, e, t) {
                for (; e <= r;) r -= e, A += n.values[t];
                return A
            }, "") + B
        }

        function rB(A, e, t, r) {
            for (var n = ""; t || A--, n = r(A) + n, e <= (A /= e) * e;);
            return n
        }

        function H(A, e, t, r, n) {
            var B = t - e + 1;
            return (A < 0 ? "-" : "") + (rB(Math.abs(A), B, r, function(A) {
                return Q(Math.floor(A % B) + e)
            }) + n)
        }

        function nB(A, e, t) {
            void 0 === t && (t = ". ");
            var r = e.length;
            return rB(Math.abs(A), r, !1, function(A) {
                return e[Math.floor(A % r)]
            }) + t
        }

        function BB(A, e, t, r, n, B) {
            if (A < -9999 || 9999 < A) return gB(A, E.CJK_DECIMAL, 0 < n.length);
            var s = Math.abs(A),
                i = n;
            if (0 === s) return e[0] + i;
            for (var o = 0; 0 < s && o <= 4; o++) {
                var a = s % 10;
                0 == a && f(B, 1) && "" !== i ? i = e[a] + i : 1 < a || 1 == a && 0 === o || 1 == a && 1 === o && f(B, 2) || 1 == a && 1 === o && f(B, 4) && 100 < A || 1 == a && 1 < o && f(B, 8) ? i = e[a] + (0 < o ? t[o - 1] : "") + i : 1 == a && 0 < o && (i = t[o - 1] + i), s = Math.floor(s / 10)
            }
            return (A < 0 ? r : "") + i
        }
        var sB, iB = {
                integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
            },
            oB = {
                integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
            },
            aB = {
                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
            },
            cB = {
                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
            },
            QB = "마이너스",
            gB = function(A, e, t) {
                var r = t ? ". " : "",
                    n = t ? "、" : "",
                    B = t ? ", " : "",
                    s = t ? " " : "";
                switch (e) {
                    case E.DISC:
                        return "•" + s;
                    case E.CIRCLE:
                        return "◦" + s;
                    case E.SQUARE:
                        return "◾" + s;
                    case E.DECIMAL_LEADING_ZERO:
                        var i = H(A, 48, 57, !0, r);
                        return i.length < 4 ? "0" + i : i;
                    case E.CJK_DECIMAL:
                        return nB(A, "〇一二三四五六七八九", n);
                    case E.LOWER_ROMAN:
                        return tB(A, 1, 3999, iB, E.DECIMAL, r).toLowerCase();
                    case E.UPPER_ROMAN:
                        return tB(A, 1, 3999, iB, E.DECIMAL, r);
                    case E.LOWER_GREEK:
                        return H(A, 945, 969, !1, r);
                    case E.LOWER_ALPHA:
                        return H(A, 97, 122, !1, r);
                    case E.UPPER_ALPHA:
                        return H(A, 65, 90, !1, r);
                    case E.ARABIC_INDIC:
                        return H(A, 1632, 1641, !0, r);
                    case E.ARMENIAN:
                    case E.UPPER_ARMENIAN:
                        return tB(A, 1, 9999, oB, E.DECIMAL, r);
                    case E.LOWER_ARMENIAN:
                        return tB(A, 1, 9999, oB, E.DECIMAL, r).toLowerCase();
                    case E.BENGALI:
                        return H(A, 2534, 2543, !0, r);
                    case E.CAMBODIAN:
                    case E.KHMER:
                        return H(A, 6112, 6121, !0, r);
                    case E.CJK_EARTHLY_BRANCH:
                        return nB(A, "子丑寅卯辰巳午未申酉戌亥", n);
                    case E.CJK_HEAVENLY_STEM:
                        return nB(A, "甲乙丙丁戊己庚辛壬癸", n);
                    case E.CJK_IDEOGRAPHIC:
                    case E.TRAD_CHINESE_INFORMAL:
                        return BB(A, "零一二三四五六七八九", "十百千萬", "負", n, 14);
                    case E.TRAD_CHINESE_FORMAL:
                        return BB(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);
                    case E.SIMP_CHINESE_INFORMAL:
                        return BB(A, "零一二三四五六七八九", "十百千萬", "负", n, 14);
                    case E.SIMP_CHINESE_FORMAL:
                        return BB(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);
                    case E.JAPANESE_INFORMAL:
                        return BB(A, "〇一二三四五六七八九", "十百千万", "マイナス", n, 0);
                    case E.JAPANESE_FORMAL:
                        return BB(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", n, 7);
                    case E.KOREAN_HANGUL_FORMAL:
                        return BB(A, "영일이삼사오육칠팔구", "십백천만", QB, B, 7);
                    case E.KOREAN_HANJA_INFORMAL:
                        return BB(A, "零一二三四五六七八九", "十百千萬", QB, B, 0);
                    case E.KOREAN_HANJA_FORMAL:
                        return BB(A, "零壹貳參四五六七八九", "拾百千", QB, B, 7);
                    case E.DEVANAGARI:
                        return H(A, 2406, 2415, !0, r);
                    case E.GEORGIAN:
                        return tB(A, 1, 19999, cB, E.DECIMAL, r);
                    case E.GUJARATI:
                        return H(A, 2790, 2799, !0, r);
                    case E.GURMUKHI:
                        return H(A, 2662, 2671, !0, r);
                    case E.HEBREW:
                        return tB(A, 1, 10999, aB, E.DECIMAL, r);
                    case E.HIRAGANA:
                        return nB(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                    case E.HIRAGANA_IROHA:
                        return nB(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                    case E.KANNADA:
                        return H(A, 3302, 3311, !0, r);
                    case E.KATAKANA:
                        return nB(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
                    case E.KATAKANA_IROHA:
                        return nB(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
                    case E.LAO:
                        return H(A, 3792, 3801, !0, r);
                    case E.MONGOLIAN:
                        return H(A, 6160, 6169, !0, r);
                    case E.MYANMAR:
                        return H(A, 4160, 4169, !0, r);
                    case E.ORIYA:
                        return H(A, 2918, 2927, !0, r);
                    case E.PERSIAN:
                        return H(A, 1776, 1785, !0, r);
                    case E.TAMIL:
                        return H(A, 3046, 3055, !0, r);
                    case E.TELUGU:
                        return H(A, 3174, 3183, !0, r);
                    case E.THAI:
                        return H(A, 3664, 3673, !0, r);
                    case E.TIBETAN:
                        return H(A, 3872, 3881, !0, r);
                    default:
                        E.DECIMAL;
                        return H(A, 48, 57, !0, r)
                }
            },
            CB = "data-html2canvas-ignore",
            uB = (lB.prototype.toIFrame = function(A, t) {
                var e = this,
                    r = UB(A, t);
                if (!r.contentWindow) return Promise.reject("Unable to find iframe window");
                var n = A.defaultView.pageXOffset,
                    A = A.defaultView.pageYOffset,
                    B = r.contentWindow,
                    s = B.document,
                    i = EB(r).then(function() {
                        return o(e, void 0, void 0, function() {
                            var e;
                            return R(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        return this.scrolledElements.forEach(FB), B && (B.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || B.scrollY === t.top && B.scrollX === t.left || (s.documentElement.style.top = -t.top + "px", s.documentElement.style.left = -t.left + "px", s.documentElement.style.position = "absolute")), e = this.options.onclone, void 0 === this.clonedReferenceElement ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : s.fonts && s.fonts.ready ? [4, s.fonts.ready] : [3, 2];
                                    case 1:
                                        A.sent(), A.label = 2;
                                    case 2:
                                        return "function" == typeof e ? [2, Promise.resolve().then(function() {
                                            return e(s)
                                        }).then(function() {
                                            return r
                                        })] : [2, r]
                                }
                            })
                        })
                    });
                return s.open(), s.write(hB(document.doctype) + "<html></html>"), fB(this.referenceElement.ownerDocument, n, A), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), i
            }, lB.prototype.createElementClone = function(A) {
                if (Zn(A)) return this.createCanvasClone(A);
                if (Tn(A)) return this.createStyleClone(A);
                A = A.cloneNode(!1);
                return jn(A) && "lazy" === A.loading && (A.loading = "eager"), A
            }, lB.prototype.createStyleClone = function(A) {
                try {
                    var e, t, r = A.sheet;
                    if (r && r.cssRules) return e = [].slice.call(r.cssRules, 0).reduce(function(A, e) {
                        return e && "string" == typeof e.cssText ? A + e.cssText : A
                    }, ""), (t = A.cloneNode(!1)).textContent = e, t
                } catch (A) {
                    if (M.getInstance(this.options.id).error("Unable to access cssRules property", A), "SecurityError" !== A.name) throw A
                }
                return A.cloneNode(!1)
            }, lB.prototype.createCanvasClone = function(A) {
                if (this.options.inlineImages && A.ownerDocument) {
                    var e = A.ownerDocument.createElement("img");
                    try {
                        return e.src = A.toDataURL(), e
                    } catch (A) {
                        M.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted")
                    }
                }
                e = A.cloneNode(!1);
                try {
                    e.width = A.width, e.height = A.height;
                    var t = A.getContext("2d"),
                        r = e.getContext("2d");
                    return r && (t ? r.putImageData(t.getImageData(0, 0, A.width, A.height), 0, 0) : r.drawImage(A, 0, 0)), e
                } catch (A) {}
                return e
            }, lB.prototype.cloneNode = function(A) {
                if (Xn(A)) return document.createTextNode(A.data);
                if (!A.ownerDocument) return A.cloneNode(!1);
                var e = A.ownerDocument.defaultView;
                if (e && zn(A) && (Jn(A) || xn(A))) {
                    var t = this.createElementClone(A),
                        r = e.getComputedStyle(A),
                        n = e.getComputedStyle(A, ":before"),
                        e = e.getComputedStyle(A, ":after");
                    this.referenceElement === A && Jn(t) && (this.clonedReferenceElement = t), Ln(t) && NB(t);
                    for (var B = this.counters.parse(new Gr(r)), n = this.resolvePseudoContent(A, t, n, sB.BEFORE), s = A.firstChild; s; s = s.nextSibling) zn(s) && ("SCRIPT" === s.tagName || s.hasAttribute(CB) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(s)) || this.options.copyStyles && zn(s) && Tn(s) || t.appendChild(this.cloneNode(s));
                    n && t.insertBefore(n, t.firstChild);
                    n = this.resolvePseudoContent(A, t, e, sB.AFTER);
                    return n && t.appendChild(n), this.counters.pop(B), r && (this.options.copyStyles || xn(A)) && !qn(A) && dB(r, t), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([t, A.scrollLeft, A.scrollTop]), (_n(A) || $n(A)) && (_n(t) || $n(t)) && (t.value = A.value), t
                }
                return A.cloneNode(!1)
            }, lB.prototype.resolvePseudoContent = function(s, A, e, t) {
                var i = this;
                if (e) {
                    var o, a, r = e.content,
                        c = A.ownerDocument;
                    if (c && r && "none" !== r && "-moz-alt-content" !== r && "none" !== e.display) return this.counters.parse(new Gr(e)), o = new xr(e), a = c.createElement("html2canvaspseudoelement"), dB(e, a), o.content.forEach(function(A) {
                        if (A.type === l.STRING_TOKEN) a.appendChild(c.createTextNode(A.value));
                        else if (A.type === l.URL_TOKEN) {
                            var e = c.createElement("img");
                            e.src = A.value, e.style.opacity = "1", a.appendChild(e)
                        } else if (A.type === l.FUNCTION) {
                            var t, r, n, B;
                            "attr" === A.name ? (e = A.values.filter(w)).length && a.appendChild(c.createTextNode(s.getAttribute(e[0].value) || "")) : "counter" === A.name ? (n = (e = A.values.filter(Qe))[0], B = e[1], n && w(n) && (e = i.counters.getCounterValue(n.value), t = B && w(B) ? qt.parse(B.value) : E.DECIMAL, a.appendChild(c.createTextNode(gB(e, t, !1))))) : "counters" === A.name && (n = (e = A.values.filter(Qe))[0], t = e[1], B = e[2], n && w(n) && (e = i.counters.getCounterValues(n.value), r = B && w(B) ? qt.parse(B.value) : E.DECIMAL, n = t && t.type === l.STRING_TOKEN ? t.value : "", B = e.map(function(A) {
                                return gB(A, r, !1)
                            }).join(n), a.appendChild(c.createTextNode(B))))
                        } else if (A.type === l.IDENT_TOKEN) switch (A.value) {
                            case "open-quote":
                                a.appendChild(c.createTextNode(Mr(o.quotes, i.quoteDepth++, !0)));
                                break;
                            case "close-quote":
                                a.appendChild(c.createTextNode(Mr(o.quotes, --i.quoteDepth, !1)));
                                break;
                            default:
                                a.appendChild(c.createTextNode(A.value))
                        }
                    }), a.className = HB + " " + IB, r = t === sB.BEFORE ? " " + HB : " " + IB, xn(A) ? A.className.baseValue += r : A.className += r, a
                }
            }, lB.destroy = function(A) {
                return !!A.parentNode && (A.parentNode.removeChild(A), !0)
            }, lB);

        function lB(A, e) {
            if (this.options = e, this.scrolledElements = [], this.referenceElement = A, this.counters = new AB, this.quoteDepth = 0, !A.ownerDocument) throw new Error("Cloned element does not have an owner document");
            this.documentElement = this.cloneNode(A.ownerDocument.documentElement)
        }(B = sB = sB || {})[B.BEFORE = 0] = "BEFORE", B[B.AFTER = 1] = "AFTER";
        var wB, UB = function(A, e) {
                var t = A.createElement("iframe");
                return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(CB, "true"), A.body.appendChild(t), t
            },
            EB = function(n) {
                return new Promise(function(e, A) {
                    var t = n.contentWindow;
                    if (!t) return A("No window assigned for iframe");
                    var r = t.document;
                    t.onload = n.onload = r.onreadystatechange = function() {
                        t.onload = n.onload = r.onreadystatechange = null;
                        var A = setInterval(function() {
                            0 < r.body.childNodes.length && "complete" === r.readyState && (clearInterval(A), e(n))
                        }, 50)
                    }
                })
            },
            dB = function(A, e) {
                for (var t = A.length - 1; 0 <= t; t--) {
                    var r = A.item(t);
                    "content" !== r && e.style.setProperty(r, A.getPropertyValue(r))
                }
                return e
            },
            hB = function(A) {
                var e = "";
                return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e
            },
            fB = function(A, e, t) {
                A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
            },
            FB = function(A) {
                var e = A[0],
                    t = A[1],
                    A = A[2];
                e.scrollLeft = t, e.scrollTop = A
            },
            HB = "___html2canvas___pseudoelement_before",
            IB = "___html2canvas___pseudoelement_after",
            pB = '{\n    content: "" !important;\n    display: none !important;\n}',
            NB = function(A) {
                mB(A, "." + HB + ":before" + pB + "\n         ." + IB + ":after" + pB)
            },
            mB = function(A, e) {
                var t = A.ownerDocument;
                t && ((t = t.createElement("style")).textContent = e, A.appendChild(t))
            };

        function KB(A, t) {
            return A.length === t.length && A.some(function(A, e) {
                return A === t[e]
            })
        }(u = wB = wB || {})[u.VECTOR = 0] = "VECTOR", u[u.BEZIER_CURVE = 1] = "BEZIER_CURVE";
        vB.prototype.add = function(A, e) {
            return new vB(this.x + A, this.y + e)
        };
        var I = vB;

        function vB(A, e) {
            this.type = wB.VECTOR, this.x = A, this.y = e
        }

        function RB(A, e, t) {
            return new I(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t)
        }
        DB.prototype.subdivide = function(A, e) {
            var t = RB(this.start, this.startControl, A),
                r = RB(this.startControl, this.endControl, A),
                n = RB(this.endControl, this.end, A),
                B = RB(t, r, A),
                r = RB(r, n, A),
                A = RB(B, r, A);
            return e ? new DB(this.start, t, B, A) : new DB(A, r, n, this.end)
        }, DB.prototype.add = function(A, e) {
            return new DB(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e))
        }, DB.prototype.reverse = function() {
            return new DB(this.end, this.endControl, this.startControl, this.start)
        };
        var bB = DB;

        function DB(A, e, t, r) {
            this.type = wB.BEZIER_CURVE, this.start = A, this.startControl = e, this.endControl = t, this.end = r
        }

        function TB(A) {
            return A.type === wB.BEZIER_CURVE
        }

        function MB(A) {
            var e = A.styles,
                t = A.bounds,
                r = (n = le(e.borderTopLeftRadius, t.width, t.height))[0],
                n = n[1],
                B = (s = le(e.borderTopRightRadius, t.width, t.height))[0],
                s = s[1],
                i = (o = le(e.borderBottomRightRadius, t.width, t.height))[0],
                o = o[1],
                a = (c = le(e.borderBottomLeftRadius, t.width, t.height))[0],
                c = c[1];
            (Q = []).push((r + B) / t.width), Q.push((a + i) / t.width), Q.push((n + c) / t.height), Q.push((s + o) / t.height);
            1 < (Q = Math.max.apply(Math, Q)) && (r /= Q, n /= Q, B /= Q, s /= Q, i /= Q, o /= Q, a /= Q, c /= Q);
            var Q = t.width - B,
                g = t.height - o,
                C = t.width - i,
                u = t.height - c,
                l = e.borderTopWidth,
                w = e.borderRightWidth,
                U = e.borderBottomWidth,
                E = e.borderLeftWidth,
                d = D(e.paddingTop, A.bounds.width),
                h = D(e.paddingRight, A.bounds.width),
                f = D(e.paddingBottom, A.bounds.width),
                e = D(e.paddingLeft, A.bounds.width);
            this.topLeftBorderBox = 0 < r || 0 < n ? N(t.left, t.top, r, n, p.TOP_LEFT) : new I(t.left, t.top), this.topRightBorderBox = 0 < B || 0 < s ? N(t.left + Q, t.top, B, s, p.TOP_RIGHT) : new I(t.left + t.width, t.top), this.bottomRightBorderBox = 0 < i || 0 < o ? N(t.left + C, t.top + g, i, o, p.BOTTOM_RIGHT) : new I(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = 0 < a || 0 < c ? N(t.left, t.top + u, a, c, p.BOTTOM_LEFT) : new I(t.left, t.top + t.height), this.topLeftPaddingBox = 0 < r || 0 < n ? N(t.left + E, t.top + l, Math.max(0, r - E), Math.max(0, n - l), p.TOP_LEFT) : new I(t.left + E, t.top + l), this.topRightPaddingBox = 0 < B || 0 < s ? N(t.left + Math.min(Q, t.width + E), t.top + l, Q > t.width + E ? 0 : B - E, s - l, p.TOP_RIGHT) : new I(t.left + t.width - w, t.top + l), this.bottomRightPaddingBox = 0 < i || 0 < o ? N(t.left + Math.min(C, t.width - E), t.top + Math.min(g, t.height + l), Math.max(0, i - w), o - U, p.BOTTOM_RIGHT) : new I(t.left + t.width - w, t.top + t.height - U), this.bottomLeftPaddingBox = 0 < a || 0 < c ? N(t.left + E, t.top + u, Math.max(0, a - E), c - U, p.BOTTOM_LEFT) : new I(t.left + E, t.top + t.height - U), this.topLeftContentBox = 0 < r || 0 < n ? N(t.left + E + e, t.top + l + d, Math.max(0, r - (E + e)), Math.max(0, n - (l + d)), p.TOP_LEFT) : new I(t.left + E + e, t.top + l + d), this.topRightContentBox = 0 < B || 0 < s ? N(t.left + Math.min(Q, t.width + E + e), t.top + l + d, Q > t.width + E + e ? 0 : B - E + e, s - (l + d), p.TOP_RIGHT) : new I(t.left + t.width - (w + h), t.top + l + d), this.bottomRightContentBox = 0 < i || 0 < o ? N(t.left + Math.min(C, t.width - (E + e)), t.top + Math.min(g, t.height + l + d), Math.max(0, i - (w + h)), o - (U + f), p.BOTTOM_RIGHT) : new I(t.left + t.width - (w + h), t.top + t.height - (U + f)), this.bottomLeftContentBox = 0 < a || 0 < c ? N(t.left + E + e, t.top + u, Math.max(0, a - (E + e)), c - (U + f), p.BOTTOM_LEFT) : new I(t.left + E + e, t.top + t.height - (U + f))
        }
        var p;

        function LB(A) {
            return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
        }

        function yB(A) {
            return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
        }
        p = {
            TOP_LEFT: 0,
            0: "TOP_LEFT",
            TOP_RIGHT: 1,
            1: "TOP_RIGHT",
            BOTTOM_RIGHT: 2,
            2: "BOTTOM_RIGHT",
            BOTTOM_LEFT: 3,
            3: "BOTTOM_LEFT"
        };

        function OB(A, e, t) {
            this.type = 0, this.offsetX = A, this.offsetY = e, this.matrix = t, this.target = 6
        }

        function SB(A, e) {
            this.type = 1, this.target = e, this.path = A
        }

        function PB(A) {
            this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = []
        }
        var N = function(A, e, t, r, n) {
                var B = (Math.sqrt(2) - 1) / 3 * 4,
                    s = t * B,
                    i = r * B,
                    o = A + t,
                    a = e + r;
                switch (n) {
                    case p.TOP_LEFT:
                        return new bB(new I(A, a), new I(A, a - i), new I(o - s, e), new I(o, e));
                    case p.TOP_RIGHT:
                        return new bB(new I(A, e), new I(A + s, e), new I(o, a - i), new I(o, a));
                    case p.BOTTOM_RIGHT:
                        return new bB(new I(o, e), new I(o, e + i), new I(A + s, a), new I(A, a));
                    default:
                        p.BOTTOM_LEFT;
                        return new bB(new I(o, a), new I(o - s, a), new I(A, e + i), new I(A, e))
                }
            },
            VB = (XB.prototype.getParentEffects = function() {
                var A, e = this.effects.slice(0);
                return this.container.styles.overflowX === jt.VISIBLE || KB(LB(this.curves), A = yB(this.curves)) || e.push(new SB(A, 6)), e
            }, XB);

        function XB(A, e) {
            var t, r;
            this.container = A, this.effects = e.slice(0), this.curves = new MB(A), null !== A.styles.transform && (e = A.bounds.left + A.styles.transformOrigin[0].number, r = A.bounds.top + A.styles.transformOrigin[1].number, t = A.styles.transform, this.effects.push(new OB(e, r, t))), A.styles.overflowX !== jt.VISIBLE && (KB(e = LB(this.curves), r = yB(this.curves)) ? this.effects.push(new SB(e, 6)) : (this.effects.push(new SB(e, 2)), this.effects.push(new SB(r, 4))))
        }

        function zB(A) {
            var e = A.bounds,
                A = A.styles;
            return e.add(A.borderLeftWidth, A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth), -(A.borderTopWidth + A.borderBottomWidth))
        }

        function JB(A) {
            var e = A.styles,
                A = A.bounds,
                t = D(e.paddingLeft, A.width),
                r = D(e.paddingRight, A.width),
                n = D(e.paddingTop, A.width),
                B = D(e.paddingBottom, A.width);
            return A.add(t + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + t + r), -(e.borderTopWidth + e.borderBottomWidth + n + B))
        }

        function xB(A, e, t) {
            r = qB(A.styles.backgroundOrigin, e), n = A;
            var r = 0 === r ? n.bounds : (2 === r ? JB : zB)(n),
                n = (n = qB(A.styles.backgroundClip, e), B = A, n === ve.BORDER_BOX ? B.bounds : (n === ve.CONTENT_BOX ? JB : zB)(B)),
                B = jB(qB(A.styles.backgroundSize, e), t, r),
                t = B[0],
                s = B[1],
                i = le(qB(A.styles.backgroundPosition, e), r.width - t, r.height - s);
            return [_B(qB(A.styles.backgroundRepeat, e), i, B, r, n), Math.round(r.left + i[0]), Math.round(r.top + i[1]), t, s]
        }

        function GB(A) {
            return w(A) && A.value === We.AUTO
        }

        function kB(A) {
            return "number" == typeof A
        }

        function WB(a, c, Q, g) {
            a.container.elements.forEach(function(A) {
                var e, t, r, n, B = f(A.flags, 4),
                    s = f(A.flags, 2),
                    i = new VB(A, a.getParentEffects()),
                    o = (f(A.styles.display, 2048) && g.push(i), f(A.flags, 8) ? [] : g);
                B || s ? (s = B || A.styles.isPositioned() ? Q : c, e = new PB(i), A.styles.isPositioned() || A.styles.opacity < 1 || A.styles.isTransformed() ? (t = A.styles.zIndex.order) < 0 ? (r = 0, s.negativeZIndex.some(function(A, e) {
                    return t > A.element.container.styles.zIndex.order ? (r = e, !1) : 0 < r
                }), s.negativeZIndex.splice(r, 0, e)) : 0 < t ? (n = 0, s.positiveZIndex.some(function(A, e) {
                    return t >= A.element.container.styles.zIndex.order ? (n = e + 1, !1) : 0 < n
                }), s.positiveZIndex.splice(n, 0, e)) : s.zeroOrAutoZIndexOrTransformedOrOpacity.push(e) : (A.styles.isFloating() ? s.nonPositionedFloats : s.nonPositionedInlineLevel).push(e), WB(i, e, B ? e : Q, o)) : ((A.styles.isInlineLevel() ? c.inlineLevel : c.nonInlineLevel).push(i), WB(i, c, Q, o)), f(A.flags, 8) && YB(A, o)
            })
        }

        function YB(A, e) {
            for (var t = A instanceof Cn ? A.start : 1, r = A instanceof Cn && A.reversed, n = 0; n < e.length; n++) {
                var B = e[n];
                B.container instanceof cn && "number" == typeof B.container.value && 0 !== B.container.value && (t = B.container.value), B.listValue = gB(t, B.container.styles.listStyleType, !0), t += r ? -1 : 1
            }
        }

        function ZB(A, e, t, r) {
            var n = [];
            return TB(A) ? n.push(A.subdivide(.5, !1)) : n.push(A), TB(t) ? n.push(t.subdivide(.5, !0)) : n.push(t), TB(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r), TB(e) ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e), n
        }
        var jB = function(A, e, t) {
                var r = e[0],
                    n = e[1],
                    e = e[2],
                    B = A[0],
                    A = A[1];
                if (U(B) && A && U(A)) return [D(B, t.width), D(A, t.height)];
                var s = kB(e);
                if (w(B) && (B.value === We.CONTAIN || B.value === We.COVER)) return kB(e) ? t.width / t.height < e != (B.value === We.COVER) ? [t.width, t.width / e] : [t.height * e, t.height] : [t.width, t.height];
                var i = kB(r),
                    o = kB(n),
                    a = i || o;
                if (GB(B) && (!A || GB(A))) return i && o ? [r, n] : s || a ? a && s ? [i ? r : n * e, o ? n : r / e] : [i ? r : t.width, o ? n : t.height] : [t.width, t.height];
                if (s) return s = a = 0, U(B) ? a = D(B, t.width) : U(A) && (s = D(A, t.height)), GB(B) ? a = s * e : A && !GB(A) || (s = a / e), [a, s];
                e = null, a = null;
                if (U(B) ? e = D(B, t.width) : A && U(A) && (a = D(A, t.height)), null !== (e = null !== (a = null === e || A && !GB(A) ? a : i && o ? e / r * n : t.height) && GB(B) ? i && o ? a / n * r : t.width : e) && null !== a) return [e, a];
                throw new Error("Unable to calculate background-size for element")
            },
            qB = function(A, e) {
                e = A[e];
                return void 0 === e ? A[0] : e
            },
            _B = function(A, e, t, r, n) {
                var B = e[0],
                    s = e[1],
                    i = t[0],
                    o = t[1];
                switch (A) {
                    case ke.REPEAT_X:
                        return [new I(Math.round(r.left), Math.round(r.top + s)), new I(Math.round(r.left + r.width), Math.round(r.top + s)), new I(Math.round(r.left + r.width), Math.round(o + r.top + s)), new I(Math.round(r.left), Math.round(o + r.top + s))];
                    case ke.REPEAT_Y:
                        return [new I(Math.round(r.left + B), Math.round(r.top)), new I(Math.round(r.left + B + i), Math.round(r.top)), new I(Math.round(r.left + B + i), Math.round(r.height + r.top)), new I(Math.round(r.left + B), Math.round(r.height + r.top))];
                    case ke.NO_REPEAT:
                        return [new I(Math.round(r.left + B), Math.round(r.top + s)), new I(Math.round(r.left + B + i), Math.round(r.top + s)), new I(Math.round(r.left + B + i), Math.round(r.top + s + o)), new I(Math.round(r.left + B), Math.round(r.top + s + o))];
                    default:
                        return [new I(Math.round(n.left), Math.round(n.top)), new I(Math.round(n.left + n.width), Math.round(n.top)), new I(Math.round(n.left + n.width), Math.round(n.height + n.top)), new I(Math.round(n.left), Math.round(n.height + n.top))]
                }
            },
            $B = "Hidden Text",
            As = (es.prototype.parseMetrics = function(A, e) {
                var t = this._document.createElement("div"),
                    r = this._document.createElement("img"),
                    n = this._document.createElement("span"),
                    B = this._document.body,
                    A = (t.style.visibility = "hidden", t.style.fontFamily = A, t.style.fontSize = e, t.style.margin = "0", t.style.padding = "0", B.appendChild(t), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = e, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode($B)), t.appendChild(n), t.appendChild(r), r.offsetTop - n.offsetTop + 2),
                    e = (t.removeChild(n), t.appendChild(this._document.createTextNode($B)), t.style.lineHeight = "normal", r.style.verticalAlign = "super", r.offsetTop - t.offsetTop + 2);
                return B.removeChild(t), {
                    baseline: A,
                    middle: e
                }
            }, es.prototype.getMetrics = function(A, e) {
                var t = A + " " + e;
                return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)), this._data[t]
            }, es);

        function es(A) {
            this._data = {}, this._document = A
        }
        m.prototype.applyEffects = function(A, e) {
            for (var t = this; this._activeEffects.length;) this.popEffect();
            A.filter(function(A) {
                return f(A.target, e)
            }).forEach(function(A) {
                return t.applyEffect(A)
            })
        }, m.prototype.applyEffect = function(A) {
            this.ctx.save(), 0 === A.type && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), 1 === A.type && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A)
        }, m.prototype.popEffect = function() {
            this._activeEffects.pop(), this.ctx.restore()
        }, m.prototype.renderStack = function(t) {
            return o(this, void 0, void 0, function() {
                var e;
                return R(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return (e = t.element.container.styles).isVisible() ? (this.ctx.globalAlpha = e.opacity, [4, this.renderStackContent(t)]) : [3, 2];
                        case 1:
                            A.sent(), A.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, m.prototype.renderNode = function(e) {
            return o(this, void 0, void 0, function() {
                return R(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
                        case 1:
                            return A.sent(), [4, this.renderNodeContent(e)];
                        case 2:
                            A.sent(), A.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, m.prototype.renderTextWithLetterSpacing = function(t, A) {
            var r = this;
            0 === A ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height) : z(t.text).map(function(A) {
                return Q(A)
            }).reduce(function(A, e) {
                return r.ctx.fillText(e, A, t.bounds.top + t.bounds.height), A + r.ctx.measureText(e).width
            }, t.bounds.left)
        }, m.prototype.createFontStyle = function(A) {
            var e = A.fontVariant.filter(function(A) {
                    return "normal" === A || "small-caps" === A
                }).join(""),
                t = A.fontFamily.join(", "),
                r = se(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
            return [
                [A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r
            ]
        }, m.prototype.renderTextNode = function(s, i) {
            return o(this, void 0, void 0, function() {
                var e, t, r, n, B = this;
                return R(this, function(A) {
                    return e = this.createFontStyle(i), t = e[0], r = e[1], n = e[2], this.ctx.font = t, s.textBounds.forEach(function(t) {
                        B.ctx.fillStyle = b(i.color), B.renderTextWithLetterSpacing(t, i.letterSpacing);
                        var A = i.textShadow;
                        A.length && t.text.trim().length && (A.slice(0).reverse().forEach(function(A) {
                            B.ctx.shadowColor = b(A.color), B.ctx.shadowOffsetX = A.offsetX.number * B.options.scale, B.ctx.shadowOffsetY = A.offsetY.number * B.options.scale, B.ctx.shadowBlur = A.blur.number, B.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height)
                        }), B.ctx.shadowColor = "", B.ctx.shadowOffsetX = 0, B.ctx.shadowOffsetY = 0, B.ctx.shadowBlur = 0), i.textDecorationLine.length && (B.ctx.fillStyle = b(i.textDecorationColor || i.color), i.textDecorationLine.forEach(function(A) {
                            switch (A) {
                                case 1:
                                    var e = B.fontMetrics.getMetrics(r, n).baseline;
                                    B.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top + e), t.bounds.width, 1);
                                    break;
                                case 2:
                                    B.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top), t.bounds.width, 1);
                                    break;
                                case 3:
                                    e = B.fontMetrics.getMetrics(r, n).middle;
                                    B.ctx.fillRect(t.bounds.left, Math.ceil(t.bounds.top + e), t.bounds.width, 1)
                            }
                        }))
                    }), [2]
                })
            })
        }, m.prototype.renderReplacedElement = function(A, e, t) {
            var r;
            t && 0 < A.intrinsicWidth && 0 < A.intrinsicHeight && (r = JB(A), e = yB(e), this.path(e), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore())
        }, m.prototype.renderNodeContent = function(u) {
            return o(this, void 0, void 0, function() {
                var r, n, B, s, i, o, a, c, Q, g, C;
                return R(this, function(A) {
                    switch (A.label) {
                        case 0:
                            this.applyEffects(u.effects, 4), r = u.container, n = u.curves, B = r.styles, s = 0, i = r.textNodes, A.label = 1;
                        case 1:
                            return s < i.length ? (o = i[s], [4, this.renderTextNode(o, B)]) : [3, 4];
                        case 2:
                            A.sent(), A.label = 3;
                        case 3:
                            return s++, [3, 1];
                        case 4:
                            if (!(r instanceof An)) return [3, 8];
                            A.label = 5;
                        case 5:
                            return A.trys.push([5, 7, , 8]), [4, this.options.cache.match(r.src)];
                        case 6:
                            return Q = A.sent(), this.renderReplacedElement(r, n, Q), [3, 8];
                        case 7:
                            return A.sent(), M.getInstance(this.options.id).error("Error loading image " + r.src), [3, 8];
                        case 8:
                            if (r instanceof rn && this.renderReplacedElement(r, n, r.canvas), !(r instanceof sn)) return [3, 12];
                            A.label = 9;
                        case 9:
                            return A.trys.push([9, 11, , 12]), [4, this.options.cache.match(r.svg)];
                        case 10:
                            return Q = A.sent(), this.renderReplacedElement(r, n, Q), [3, 12];
                        case 11:
                            return A.sent(), M.getInstance(this.options.id).error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
                        case 12:
                            return r instanceof bn && r.tree ? [4, new m({
                                id: this.options.id,
                                scale: this.options.scale,
                                backgroundColor: r.backgroundColor,
                                x: 0,
                                y: 0,
                                scrollX: 0,
                                scrollY: 0,
                                width: r.width,
                                height: r.height,
                                cache: this.options.cache,
                                windowWidth: r.width,
                                windowHeight: r.height
                            }).render(r.tree)] : [3, 14];
                        case 13:
                            o = A.sent(), r.width && r.height && this.ctx.drawImage(o, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), A.label = 14;
                        case 14:
                            if (r instanceof fn && (c = Math.min(r.bounds.width, r.bounds.height), r.type === En ? r.checked && (this.ctx.save(), this.path([new I(r.bounds.left + .39363 * c, r.bounds.top + .79 * c), new I(r.bounds.left + .16 * c, r.bounds.top + .5549 * c), new I(r.bounds.left + .27347 * c, r.bounds.top + .44071 * c), new I(r.bounds.left + .39694 * c, r.bounds.top + .5649 * c), new I(r.bounds.left + .72983 * c, r.bounds.top + .23 * c), new I(r.bounds.left + .84 * c, r.bounds.top + .34085 * c), new I(r.bounds.left + .39363 * c, r.bounds.top + .79 * c)]), this.ctx.fillStyle = b(hn), this.ctx.fill(), this.ctx.restore()) : r.type === dn && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = b(hn), this.ctx.fill(), this.ctx.restore())), rs(r) && r.value.length) {
                                switch (this.ctx.font = this.createFontStyle(B)[0], this.ctx.fillStyle = b(B.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = Bs(r.styles.textAlign), C = JB(r), a = 0, r.styles.textAlign) {
                                    case nr.CENTER:
                                        a += C.width / 2;
                                        break;
                                    case nr.RIGHT:
                                        a += C.width
                                }
                                c = C.add(a, 0, 0, -C.height / 2 + 1), this.ctx.save(), this.path([new I(C.left, C.top), new I(C.left + C.width, C.top), new I(C.left + C.width, C.top + C.height), new I(C.left, C.top + C.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new kr(r.value, c), B.letterSpacing), this.ctx.restore(), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"
                            }
                            if (!f(r.styles.display, 2048)) return [3, 20];
                            if (null === r.styles.listStyleImage) return [3, 19];
                            if ((g = r.styles.listStyleImage).type !== L.URL) return [3, 18];
                            Q = void 0, g = g.url, A.label = 15;
                        case 15:
                            return A.trys.push([15, 17, , 18]), [4, this.options.cache.match(g)];
                        case 16:
                            return Q = A.sent(), this.ctx.drawImage(Q, r.bounds.left - (Q.width + 10), r.bounds.top), [3, 18];
                        case 17:
                            return A.sent(), M.getInstance(this.options.id).error("Error loading list-style-image " + g), [3, 18];
                        case 18:
                            return [3, 20];
                        case 19:
                            u.listValue && r.styles.listStyleType !== E.NONE && (this.ctx.font = this.createFontStyle(B)[0], this.ctx.fillStyle = b(B.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", C = new P(r.bounds.left, r.bounds.top + D(r.styles.paddingTop, r.bounds.width), r.bounds.width, (e = B.lineHeight, t = B.fontSize.number, (w(e) && "normal" === e.value ? 1.2 * t : e.type === l.NUMBER_TOKEN ? t * e.number : U(e) ? D(e, t) : t) / 2 + 1)), this.renderTextWithLetterSpacing(new kr(u.listValue, C), B.letterSpacing), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), A.label = 20;
                        case 20:
                            return [2]
                    }
                    var e, t
                })
            })
        }, m.prototype.renderStackContent = function(w) {
            return o(this, void 0, void 0, function() {
                var e, t, r, n, B, s, i, o, a, c, Q, g, C, u, l;
                return R(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return [4, this.renderNodeBackgroundAndBorders(w.element)];
                        case 1:
                            A.sent(), e = 0, t = w.negativeZIndex, A.label = 2;
                        case 2:
                            return e < t.length ? (l = t[e], [4, this.renderStack(l)]) : [3, 5];
                        case 3:
                            A.sent(), A.label = 4;
                        case 4:
                            return e++, [3, 2];
                        case 5:
                            return [4, this.renderNodeContent(w.element)];
                        case 6:
                            A.sent(), r = 0, n = w.nonInlineLevel, A.label = 7;
                        case 7:
                            return r < n.length ? (l = n[r], [4, this.renderNode(l)]) : [3, 10];
                        case 8:
                            A.sent(), A.label = 9;
                        case 9:
                            return r++, [3, 7];
                        case 10:
                            B = 0, s = w.nonPositionedFloats, A.label = 11;
                        case 11:
                            return B < s.length ? (l = s[B], [4, this.renderStack(l)]) : [3, 14];
                        case 12:
                            A.sent(), A.label = 13;
                        case 13:
                            return B++, [3, 11];
                        case 14:
                            i = 0, o = w.nonPositionedInlineLevel, A.label = 15;
                        case 15:
                            return i < o.length ? (l = o[i], [4, this.renderStack(l)]) : [3, 18];
                        case 16:
                            A.sent(), A.label = 17;
                        case 17:
                            return i++, [3, 15];
                        case 18:
                            a = 0, c = w.inlineLevel, A.label = 19;
                        case 19:
                            return a < c.length ? (l = c[a], [4, this.renderNode(l)]) : [3, 22];
                        case 20:
                            A.sent(), A.label = 21;
                        case 21:
                            return a++, [3, 19];
                        case 22:
                            Q = 0, g = w.zeroOrAutoZIndexOrTransformedOrOpacity, A.label = 23;
                        case 23:
                            return Q < g.length ? (l = g[Q], [4, this.renderStack(l)]) : [3, 26];
                        case 24:
                            A.sent(), A.label = 25;
                        case 25:
                            return Q++, [3, 23];
                        case 26:
                            C = 0, u = w.positiveZIndex, A.label = 27;
                        case 27:
                            return C < u.length ? (l = u[C], [4, this.renderStack(l)]) : [3, 30];
                        case 28:
                            A.sent(), A.label = 29;
                        case 29:
                            return C++, [3, 27];
                        case 30:
                            return [2]
                    }
                })
            })
        }, m.prototype.mask = function(A) {
            this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath()
        }, m.prototype.path = function(A) {
            this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath()
        }, m.prototype.formatPath = function(A) {
            var r = this;
            A.forEach(function(A, e) {
                var t = TB(A) ? A.start : A;
                0 === e ? r.ctx.moveTo(t.x, t.y) : r.ctx.lineTo(t.x, t.y), TB(A) && r.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
            })
        }, m.prototype.renderRepeat = function(A, e, t, r) {
            this.path(A), this.ctx.fillStyle = e, this.ctx.translate(t, r), this.ctx.fill(), this.ctx.translate(-t, -r)
        }, m.prototype.resizeImage = function(A, e, t) {
            if (A.width === e && A.height === t) return A;
            var r = this.canvas.ownerDocument.createElement("canvas");
            return r.width = e, r.height = t, r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), r
        }, m.prototype.renderBackgroundImage = function(v) {
            return o(this, void 0, void 0, function() {
                var m, e, K, t, r, n;
                return R(this, function(A) {
                    switch (A.label) {
                        case 0:
                            m = v.styles.backgroundImage.length - 1, e = function(i) {
                                var o, a, c, Q, g, C, u, l, w, U, E, d, h, f, F, H, I, p, N;
                                return R(this, function(A) {
                                    switch (A.label) {
                                        case 0:
                                            if (i.type !== L.URL) return [3, 5];
                                            o = void 0, a = i.url, A.label = 1;
                                        case 1:
                                            return A.trys.push([1, 3, , 4]), [4, K.options.cache.match(a)];
                                        case 2:
                                            return o = A.sent(), [3, 4];
                                        case 3:
                                            return A.sent(), M.getInstance(K.options.id).error("Error loading background-image " + a), [3, 4];
                                        case 4:
                                            return o && (d = xB(v, m, [o.width, o.height, o.width / o.height]), l = d[0], h = d[1], f = d[2], E = d[3], d = d[4], u = K.ctx.createPattern(K.resizeImage(o, E, d), "repeat"), K.renderRepeat(l, u, h, f)), [3, 6];
                                        case 5:
                                            i.type !== L.LINEAR_GRADIENT ? i.type === L.RADIAL_GRADIENT && (p = xB(v, m, [null, null, null]), l = p[0], w = p[1], U = p[2], E = p[3], d = p[4], p = 0 === i.position.length ? [He] : i.position, h = D(p[0], E), f = D(p[p.length - 1], d), p = function(A, e, t, r, n) {
                                                var B, s, i = 0,
                                                    o = 0;
                                                switch (A.size) {
                                                    case O.CLOSEST_SIDE:
                                                        A.shape === y.CIRCLE ? i = o = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === y.ELLIPSE && (i = Math.min(Math.abs(e), Math.abs(e - r)), o = Math.min(Math.abs(t), Math.abs(t - n)));
                                                        break;
                                                    case O.CLOSEST_CORNER:
                                                        A.shape === y.CIRCLE ? i = o = Math.min(T(e, t), T(e, t - n), T(e - r, t), T(e - r, t - n)) : A.shape === y.ELLIPSE && (o = (B = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r))) * (i = T((s = Me(r, n, e, t, !0))[0] - e, (s[1] - t) / B)));
                                                        break;
                                                    case O.FARTHEST_SIDE:
                                                        A.shape === y.CIRCLE ? i = o = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === y.ELLIPSE && (i = Math.max(Math.abs(e), Math.abs(e - r)), o = Math.max(Math.abs(t), Math.abs(t - n)));
                                                        break;
                                                    case O.FARTHEST_CORNER:
                                                        A.shape === y.CIRCLE ? i = o = Math.max(T(e, t), T(e, t - n), T(e - r, t), T(e - r, t - n)) : A.shape === y.ELLIPSE && (o = (B = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r))) * (i = T((s = Me(r, n, e, t, !1))[0] - e, (s[1] - t) / B)))
                                                }
                                                return Array.isArray(A.size) && (i = D(A.size[0], r), o = 2 === A.size.length ? D(A.size[1], n) : i), [i, o]
                                            }(i, h, f, E, d), N = p[0], p = p[1], 0 < N && (F = K.ctx.createRadialGradient(w + h, U + f, 0, w + h, U + f, N), Te(i.stops, 2 * N).forEach(function(A) {
                                                return F.addColorStop(A.stop, b(A.color))
                                            }), K.path(l), K.ctx.fillStyle = F, N !== p ? (H = v.bounds.left + .5 * v.bounds.width, I = v.bounds.top + .5 * v.bounds.height, N = 1 / (p = p / N), K.ctx.save(), K.ctx.translate(H, I), K.ctx.transform(1, 0, 0, p, 0, 0), K.ctx.translate(-H, -I), K.ctx.fillRect(w, N * (U - I) + I, E, d * N), K.ctx.restore()) : K.ctx.fill())) : (p = xB(v, m, [null, null, null]), l = p[0], h = p[1], f = p[2], E = p[3], d = p[4], e = i.angle, t = E, r = d, e = "number" == typeof e ? e : (s = t / 2, B = (n = r) / 2, s = D((e = e)[0], t) - s, B -= D(e[1], n), (Math.atan2(B, s) + 2 * Math.PI) % (2 * Math.PI)), n = Math.abs(t * Math.sin(e)) + Math.abs(r * Math.cos(e)), B = t / 2, s = r / 2, t = n / 2, r = Math.sin(e - Math.PI / 2) * t, e = Math.cos(e - Math.PI / 2) * t, w = (H = [n, B - e, B + e, s - r, s + r])[0], U = H[1], I = H[2], N = H[3], c = H[4], (Q = document.createElement("canvas")).width = E, Q.height = d, g = Q.getContext("2d"), C = g.createLinearGradient(U, N, I, c), Te(i.stops, w).forEach(function(A) {
                                                return C.addColorStop(A.stop, b(A.color))
                                            }), g.fillStyle = C, g.fillRect(0, 0, E, d), 0 < E && 0 < d && (u = K.ctx.createPattern(Q, "repeat"), K.renderRepeat(l, u, h, f))), A.label = 6;
                                        case 6:
                                            return m--, [2]
                                    }
                                    var e, t, r, n, B, s
                                })
                            }, K = this, t = 0, r = v.styles.backgroundImage.slice(0).reverse(), A.label = 1;
                        case 1:
                            return t < r.length ? (n = r[t], [5, e(n)]) : [3, 4];
                        case 2:
                            A.sent(), A.label = 3;
                        case 3:
                            return t++, [3, 1];
                        case 4:
                            return [2]
                    }
                })
            })
        }, m.prototype.renderBorder = function(e, t, r) {
            return o(this, void 0, void 0, function() {
                return R(this, function(A) {
                    return this.path(function(A) {
                        switch (t) {
                            case 0:
                                return ZB(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                            case 1:
                                return ZB(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                            case 2:
                                return ZB(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                            default:
                                return ZB(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
                        }
                    }(r)), this.ctx.fillStyle = b(e), this.ctx.fill(), [2]
                })
            })
        }, m.prototype.renderNodeBackgroundAndBorders = function(a) {
            return o(this, void 0, void 0, function() {
                var e, t, r, n, B, s, i, o = this;
                return R(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return this.applyEffects(a.effects, 2), e = a.container.styles, i = !Ee(e.backgroundColor) || e.backgroundImage.length, t = [{
                                style: e.borderTopStyle,
                                color: e.borderTopColor
                            }, {
                                style: e.borderRightStyle,
                                color: e.borderRightColor
                            }, {
                                style: e.borderBottomStyle,
                                color: e.borderBottomColor
                            }, {
                                style: e.borderLeftStyle,
                                color: e.borderLeftColor
                            }], r = ns(qB(e.backgroundClip, 0), a.curves), i || e.boxShadow.length ? (this.ctx.save(), this.path(r), this.ctx.clip(), Ee(e.backgroundColor) || (this.ctx.fillStyle = b(e.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(a.container)]) : [3, 2];
                        case 1:
                            A.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach(function(A) {
                                o.ctx.save();
                                var t, r, n, B, e = LB(a.curves),
                                    s = A.inset ? 0 : 1e4,
                                    i = (t = -s + (A.inset ? 1 : -1) * A.spread.number, r = (A.inset ? 1 : -1) * A.spread.number, n = A.spread.number * (A.inset ? -2 : 2), B = A.spread.number * (A.inset ? -2 : 2), e.map(function(A, e) {
                                        switch (e) {
                                            case 0:
                                                return A.add(t, r);
                                            case 1:
                                                return A.add(t + n, r);
                                            case 2:
                                                return A.add(t + n, r + B);
                                            case 3:
                                                return A.add(t, r + B)
                                        }
                                        return A
                                    }));
                                A.inset ? (o.path(e), o.ctx.clip(), o.mask(i)) : (o.mask(e), o.ctx.clip(), o.path(i)), o.ctx.shadowOffsetX = A.offsetX.number + s, o.ctx.shadowOffsetY = A.offsetY.number, o.ctx.shadowColor = b(A.color), o.ctx.shadowBlur = A.blur.number, o.ctx.fillStyle = A.inset ? b(A.color) : "rgba(0,0,0,1)", o.ctx.fill(), o.ctx.restore()
                            }), A.label = 2;
                        case 2:
                            B = n = 0, s = t, A.label = 3;
                        case 3:
                            return B < s.length ? (i = s[B]).style === wt.NONE || Ee(i.color) ? [3, 5] : [4, this.renderBorder(i.color, n, a.curves)] : [3, 7];
                        case 4:
                            A.sent(), A.label = 5;
                        case 5:
                            n++, A.label = 6;
                        case 6:
                            return B++, [3, 3];
                        case 7:
                            return [2]
                    }
                })
            })
        }, m.prototype.render = function(n) {
            return o(this, void 0, void 0, function() {
                return R(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return this.options.backgroundColor && (this.ctx.fillStyle = b(this.options.backgroundColor), this.ctx.fillRect(this.options.x - this.options.scrollX, this.options.y - this.options.scrollY, this.options.width, this.options.height)), e = new VB(n, []), t = new PB(e), WB(e, t, t, r = []), YB(e.container, r), [4, this.renderStack(t)];
                        case 1:
                            return A.sent(), this.applyEffects([], 2), [2, this.canvas]
                    }
                    var e, t, r
                })
            })
        };
        var ts = m;

        function m(A) {
            this._activeEffects = [], this.canvas = A.canvas || document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), (this.options = A).canvas || (this.canvas.width = Math.floor(A.width * A.scale), this.canvas.height = Math.floor(A.height * A.scale), this.canvas.style.width = A.width + "px", this.canvas.style.height = A.height + "px"), this.fontMetrics = new As(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY), this.ctx.textBaseline = "bottom", this._activeEffects = [], M.getInstance(A.id).debug("Canvas renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale)
        }
        var rs = function(A) {
                return A instanceof mn || A instanceof In || A instanceof fn && A.type !== dn && A.type !== En
            },
            ns = function(A, e) {
                switch (A) {
                    case ve.BORDER_BOX:
                        return LB(e);
                    case ve.CONTENT_BOX:
                        return [e.topLeftContentBox, e.topRightContentBox, e.bottomRightContentBox, e.bottomLeftContentBox];
                    default:
                        ve.PADDING_BOX;
                        return yB(e)
                }
            },
            Bs = function(A) {
                switch (A) {
                    case nr.CENTER:
                        return "center";
                    case nr.RIGHT:
                        return "right";
                    default:
                        nr.LEFT;
                        return "left"
                }
            },
            ss = (is.prototype.render = function(t) {
                return o(this, void 0, void 0, function() {
                    var e;
                    return R(this, function(A) {
                        switch (A.label) {
                            case 0:
                                return e = Oe(Math.max(this.options.windowWidth, this.options.width) * this.options.scale, Math.max(this.options.windowHeight, this.options.height) * this.options.scale, this.options.scrollX * this.options.scale, this.options.scrollY * this.options.scale, t), [4, as(e)];
                            case 1:
                                return e = A.sent(), this.options.backgroundColor && (this.ctx.fillStyle = b(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(e, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas]
                        }
                    })
                })
            }, is);

        function is(A) {
            this.canvas = A.canvas || document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = A, this.canvas.width = Math.floor(A.width * A.scale), this.canvas.height = Math.floor(A.height * A.scale), this.canvas.style.width = A.width + "px", this.canvas.style.height = A.height + "px", this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY), M.getInstance(A.id).debug("EXPERIMENTAL ForeignObject renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale)
        }

        function os(A) {
            return pe(Be.create(A).parseComponentValue())
        }
        var as = function(r) {
            return new Promise(function(A, e) {
                var t = new Image;
                t.onload = function() {
                    A(t)
                }, t.onerror = e, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
            })
        };
        "undefined" != typeof window && Xe.setContext(window);
        return function(A, e) {
            return u = A, l = e = void 0 === e ? {} : e, o(void 0, void 0, void 0, function() {
                var e, t, r, n, B, s, i, o, a, c, Q, g, C;
                return R(this, function(A) {
                    switch (A.label) {
                        case 0:
                            if (!(e = u.ownerDocument)) throw new Error("Element is not attached to a Document");
                            if (s = e.defaultView) return t = (Math.round(1e3 * Math.random()) + Date.now()).toString(16), a = Ln(u) || "HTML" === u.tagName ? function(A) {
                                var e = A.body,
                                    A = A.documentElement;
                                if (!e || !A) throw new Error("Unable to get document size");
                                var t = Math.max(Math.max(e.scrollWidth, A.scrollWidth), Math.max(e.offsetWidth, A.offsetWidth), Math.max(e.clientWidth, A.clientWidth)),
                                    e = Math.max(Math.max(e.scrollHeight, A.scrollHeight), Math.max(e.offsetHeight, A.offsetHeight), Math.max(e.clientHeight, A.clientHeight));
                                return new P(0, 0, t, e)
                            }(e) : X(u), o = a.width, n = a.height, r = a.left, a = a.top, i = S({}, {
                                allowTaint: !1,
                                imageTimeout: 15e3,
                                proxy: void 0,
                                useCORS: !1
                            }, l), s = {
                                backgroundColor: "#ffffff",
                                cache: l.cache || Xe.create(t, i),
                                logging: !0,
                                removeContainer: !0,
                                foreignObjectRendering: !1,
                                scale: s.devicePixelRatio || 1,
                                windowWidth: s.innerWidth,
                                windowHeight: s.innerHeight,
                                scrollX: s.pageXOffset,
                                scrollY: s.pageYOffset,
                                x: r,
                                y: a,
                                width: Math.ceil(o),
                                height: Math.ceil(n),
                                id: t
                            }, r = S({}, s, i, l), a = new P(r.scrollX, r.scrollY, r.windowWidth, r.windowHeight), M.create({
                                id: t,
                                enabled: r.logging
                            }), M.getInstance(t).debug("Starting document clone"), o = new uB(u, {
                                id: t,
                                onclone: r.onclone,
                                ignoreElements: r.ignoreElements,
                                inlineImages: r.foreignObjectRendering,
                                copyStyles: r.foreignObjectRendering
                            }), (n = o.clonedReferenceElement) ? [4, o.toIFrame(e, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                            throw new Error("Document is not attached to a Window");
                        case 1:
                            return B = A.sent(), s = e.documentElement ? os(getComputedStyle(e.documentElement).backgroundColor) : be.TRANSPARENT, i = e.body ? os(getComputedStyle(e.body).backgroundColor) : be.TRANSPARENT, o = l.backgroundColor, a = "string" == typeof o ? os(o) : null === o ? be.TRANSPARENT : 4294967295, c = u === e.documentElement ? Ee(s) ? Ee(i) ? a : i : s : a, Q = {
                                id: t,
                                cache: r.cache,
                                canvas: r.canvas,
                                backgroundColor: c,
                                scale: r.scale,
                                x: r.x,
                                y: r.y,
                                scrollX: r.scrollX,
                                scrollY: r.scrollY,
                                width: r.width,
                                height: r.height,
                                windowWidth: r.windowWidth,
                                windowHeight: r.windowHeight
                            }, r.foreignObjectRendering ? (M.getInstance(t).debug("Document cloned, using foreign object rendering"), [4, new ss(Q).render(n)]) : [3, 3];
                        case 2:
                            return g = A.sent(), [3, 5];
                        case 3:
                            return M.getInstance(t).debug("Document cloned, using computed rendering"), Xe.attachInstance(r.cache), M.getInstance(t).debug("Starting DOM parsing"), C = Sn(n), Xe.detachInstance(), c === C.styles.backgroundColor && (C.styles.backgroundColor = be.TRANSPARENT), M.getInstance(t).debug("Starting renderer"), [4, new ts(Q).render(C)];
                        case 4:
                            g = A.sent(), A.label = 5;
                        case 5:
                            return !0 !== r.removeContainer || uB.destroy(B) || M.getInstance(t).error("Cannot detach cloned iframe as it is not in the DOM anymore"), M.getInstance(t).debug("Finished rendering"), M.destroy(t), Xe.destroy(t), [2, g]
                    }
                })
            });
            var u, l
        }
    }, "object" == cs(e) && void 0 !== A ? A.exports = r() : void 0 !== (t = "function" == typeof(r = r) ? r.call(e, t, e, A) : r) && (A.exports = t)
}, function(A, e, t) {
    "use strict";
    A.exports = {
        ___: "iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI5REZEOEVGQTU3MTFFQUI2NTBBMTMwQTg4MTUwM0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkI5REZEOERGQTU3MTFFQUI2NTBBMTMwQTg4MTUwM0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjFFMEJEMENGOTBCMTFFQUI2NTBBMTMwQTg4MTUwM0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjFFMEJEMERGOTBCMTFFQUI2NTBBMTMwQTg4MTUwM0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DaXOLAAA1WklEQVR42uydDXRc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",
        ____: function(A) {
            return "<style>.s" + window._d + "{display: flex;align-items: center;justify-content: center;height: 100%;position: absolute;top: 0;width: 100%;overflow: hidden; background: url(data:image/png;base64," + this.___ + A + ") repeat;}</style>"
        }
    }
}, function(A, e, t) {
    t(0)(t(6))
}, function(A, e) {
    A.exports = "'use strict';\n\nfunction PrefixInteger(num, m) {\n    return (Array(m).join(0) + num).slice(-m);\n}\n\n$(function () {\n    for (var i = 0; i < 24; i++) {\n        var v = PrefixInteger(i, 2);\n        $('.edit-phone-time-hour').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n    for (var i = 0; i < 60; i++) {\n        var v = PrefixInteger(i, 2);\n        $('.edit-phone-time-mini').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n    for (var i = 2011; i < 2030; i++) {\n        var v = i + '年';\n        $('.edit-phone-time-year').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n    for (var i = 1; i < 13; i++) {\n        var v = i + '月';\n        $('.edit-phone-time-month').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n    for (var i = 1; i < 32; i++) {\n        var v = i + '日';\n        $('.edit-phone-time-day').append('<option value=\"' + v + '\">' + v + '</option>');\n    }\n\n    var img_tips = '右击图片，点击图片另存为即可下载图片';\n\n    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {\n        //移动端\n        img_tips = '长按图片，然后保存图片到相册';\n    }\n\n    $('#lightBoxToggle').lightbox({\n        image: null,\n        caption: img_tips,\n        modalTeamplate: '<div class=\"icon-spinner icon-spin loader\"></div><div class=\"modal-dialog\"><button class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"icon-remove\"></i></button><button class=\"controller prev\"><i class=\"icon icon-chevron-left\"></i></button><button class=\"controller next\"><i class=\"icon icon-chevron-right\"></i></button><img class=\"lightbox-img\" src=\"{image}\" alt=\"\" /><div class=\"caption\"><div class=\"content\">{caption}<div></div></div>'\n    });\n\n    $('.el-remove').remove();\n});"
}, , , , , , , , , , function(A, e, t) {
    "use strict";
    var r = B(t(2)),
        n = B(t(17));

    function B(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    $(function() {
        r.default.run(n.default)
    });
    t(5)
}, function(A, e, t) {
    "use strict";
    var t = t(1),
        n = (t = t) && t.__esModule ? t : {
            default: t
        };
    A.exports = {
        mounted: function() {
            var A = new Date,
                e = n.default.get("wechat_setting"),
                t = n.default.get("wechat_users"),
                r = n.default.get("wechat_dialogs");
            e && (this.setting = e), t && (this.users = t), r && (this.dialogs = r), this.setting.date_hour = 10 <= A.getHours() ? A.getHours() : "0" + A.getHours().toString(), this.setting.date_min = 10 <= A.getMinutes() ? A.getMinutes() : "0" + A.getMinutes().toString()
        },
        data: {
            setting: {
                message: 1,
                title: "微信对话",
                dialog_content: "你好",
                dialog_money: 88,
                dialog_voice: 2,
                dialog_voice_isread: 1,
                dialog_repacket_remark: "恭喜发财，大吉大利",
                dialog_trans_remark: "",
                voice: 0,
                background: "",
                date_year: "",
                date_month: "",
                date_day: "",
                date_xinqi: "",
                date_shiduan: "",
                date_hour: "",
                date_min: ""
            },
            users: [{
                id: "user-1",
                name: "微信对话",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFFNjgxN0VBRkE1NTExRUFCNjUwQTEzMEE4ODE1MDNGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFFNjgxN0VCRkE1NTExRUFCNjUwQTEzMEE4ODE1MDNGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0REQTMxRUZGOTRBMTFFQUI2NTBBMTMwQTg4MTUwM0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0REQTMxRjBGOTRBMTFFQUI2NTBBMTMwQTg4MTUwM0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7JDGwgAAAeMElEQVR42uydB3gU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",
                is_me: !0,
                selected: !0
            }, {
                id: "user-2",
                name: "马先生",
                image: "data:image/jpeg;base64,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b29sAQAAAA9wcmludFNpeHRlZW5CaXRib29sAAAAAAtwcmludGVyTmFtZVRFWFQAAAABAAAAOEJJTQQ7AAAAAAGyAAAAEAAAAAEAAAAAABJwcmludE91dHB1dE9wdGlvbnMAAAASAAAAAENwdG5ib29sAAAAAABDbGJyYm9vbAAAAAAAUmdzTWJvb2wAAAAAAENybkNib29sAAAAAABDbnRDYm9vbAAAAAAATGJsc2Jvb2wAAAAAAE5ndHZib29sAAAAAABFbWxEYm9vbAAAAAAASW50cmJvb2wAAAAAAEJja2dPYmpjAAAAAQAAAAAAAFJHQkMAAAADAAAAAFJkICBkb3ViQG/gAAAAAAAAAAAAR3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBSAAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANJAAAABgAA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L3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczppbGx1c3RyYXRvcj0iaHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvIiB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iIHhtbG5zOmNycz0iaHR0cDovL25zLmFkb2JlLmNvbS9jYW1lcmEtcmF3LXNldHRpbmdzLzEuMC8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDEyLTAzLTA3VDIyOjU3OjE1KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxMi0wMy0wN1QyMjo1NzoxNSswODowMCIgeG1wOkNyZWF0ZURhdGU9IjIwMTItMDMtMDdUMTA6MDY6NTQrMDg6MDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgSWxsdXN0cmF0b3IgQ1M1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1NEM4N0JBMDcyMDY4MTE4RjYyQjlCN0Q5RDBCNjVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBCOTA5QzM2RkE2N0UxMTE4OTIwQzlDOUEwNzA2RDFDIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NUQyMDg5MjQ5M0JGREIxMTkxNEE4NTkwRDMxNTA4QzgiIHhtcE1NOlJlbmRpdGlvbkNsYXNzPSJwcm9vZjpwZGYiIGlsbHVzdHJhdG9yOlN0YXJ0dXBQcm9maWxlPSJQcmludCIgcGRmOlByb2R1Y2VyPSJBZG9iZSBQREYgbGlicmFyeSA5LjkwIiBjcnM6QWxyZWFkeUFwcGxpZWQ9IlRydWUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+SGFtaS3lpLTlg488L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0idXVpZDoxNWYyZGNmZC1iMDMzLTRlMDctYjEzZC04ZDg2MGVkMzZlZGYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzA1RTk4NkRFNzc3RTAxMTlCQTJGNEU5Qzc0QjEzRTkiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo1RDIwODkyNDkzQkZEQjExOTE0QTg1OTBEMzE1MDhDOCIgc3RSZWY6cmVuZGl0aW9uQ2xhc3M9InByb29mOnBkZiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQjkwMDFFNzRGNDZFMDExQUM0QUNDRTlBQzUzNTM5NSIgc3RFdnQ6d2hlbj0iMjAxMS0wMy0wNFQyMDoyNjoyMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgSWxsdXN0cmF0b3IgQ1M1IiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozMDVFOTg2REU3NzdFMDExOUJBMkY0RTlDNzRCMTNFOSIgc3RFdnQ6d2hlbj0iMjAxMS0wNS0wNlQyMjowNTowNCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgSWxsdXN0cmF0b3IgQ1M1IiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowQjkwOUMzNkZBNjdFMTExODkyMEM5QzlBMDcwNkQxQyIgc3RFdnQ6d2hlbj0iMjAxMi0wMy0wN1QxMDowNjo1NSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgSWxsdXN0cmF0b3IgQ1M1IiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NTRDODdCQTA3MjA2ODExOEY2MkI5QjdEOUQwQjY1QyIgc3RFdnQ6d2hlbj0iMjAxMi0wMy0wN1QyMjo1NzoxNSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAE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"
            }],
            dialogs: [{
                id: "dialog-1",
                type: "text",
                content: "hello，world",
                is_me: !1,
                user_id: "user-2"
            }, {
                id: "dialog-2",
                type: "text",
                content: "hello，world!!!",
                is_me: !0,
                user_id: "user-1"
            }, {
                id: "dialog-3",
                type: "notice",
                content: "2022年5月20日 下午5:20"
            }, {
                id: "dialog-4",
                type: "transfer",
                money: "1.00",
                is_me: !0,
                user_id: "user-1",
                is_get: !1,
                remark: "转账给马先生"
            }, {
                id: "dialog-5",
                type: "transfer",
                money: "1.00",
                user_id: "user-2",
                is_get: !0,
                remark: "已领取"
            }, {
                id: "dialog-6",
                type: "redpacket",
                money: "1.00",
                is_me: !0,
                user_id: "user-1",
                is_get: !1,
                remark: "恭喜发财，大吉大利"
            }, {
                id: "dialog-7",
                type: "redpacket",
                money: "1.00",
                user_id: "user-2",
                is_get: !0,
                remark: "恭喜发财，大吉大利"
            }, {
                id: "dialog-8",
                type: "voice",
                time: 2,
                is_me: !1,
                user_id: "user-2"
            }, {
                id: "dialog-9",
                type: "voice",
                time: 10,
                is_me: !1,
                user_id: "user-2"
            }, {
                id: "dialog-10",
                type: "voice",
                time: 60,
                is_me: !0,
                user_id: "user-1"
            }]
        },
        methods: {
            addUser: function() {
                this.users.push({
                    id: "user-" + (new Date).valueOf(),
                    name: "微信对话",
                    image: _path.images + "/face-default.jpg"
                })
            },
            capturePhone: function(){
                html2canvas(document.querySelector("#phone"),{
                    scale:2,
                    allowTaint: false,
                    useCORS: true
                }).then(canvas => {
                    
                    document.body.appendChild(canvas);
                    var imgData = canvas.toDataURL("image/png"); // 图片数据URL
                    var link = document.createElement("a");
                    link.href = imgData;
                    link.download = "phone.png"; // 下载的文件名
                    link.click();
                });
            },
            changeHeight: function(){
                document.querySelector("#phone").style = "height: 5000px"
            },
            veryHigh: function(){
                document.querySelector("#phone").style = "height: 10000px"
            },
            delUser: function(A) {
                var e = this.users[A],
                    t = this.dialogs.filter(function(A) {
                        return A.user_id != e.id
                    });
                this.dialogs = t, this.users.splice(A, 1)
            },
            addDialog: function(A) {
                this.dialogs.push(A), setTimeout(function() {
                    $(".phone-body").scrollTop($(".phone-body .wechat-content").height())
                }, 100)
            },
            addNoticeDialog: function() {
                var A = this.setting.date_year + this.setting.date_month + this.setting.date_day + " " + this.setting.date_xinqi + " " + this.setting.date_shiduan + (this.setting.date_shiduan ? parseInt(this.setting.date_hour) : this.setting.date_hour) + ":" + this.setting.date_min,
                    A = {
                        id: "dialog-" + (new Date).valueOf(),
                        type: "notice",
                        content: A,
                        	name:A.name,
                    };
                this.addDialog(A), this.setting.date_year = "", this.setting.date_month = "", this.setting.date_day = "", this.setting.date_xinqi = "", this.setting.date_shiduan = ""
            },
            addTextDialog: function() {
                var A = this.getSelectedUser();
                if (!A) return alert("请选择用户"), !1;
                if (!this.setting.dialog_content) return alert("请输入对话内容"), !1;
                A = {
                    id: "dialog-" + (new Date).valueOf(),
                    type: "text",
                    content: this.setting.dialog_content,
                    is_me: A.is_me,
                    user_id: A.id,
                    name:A.name,
                };
                this.addDialog(A)
            },
            addVoiceDialog: function() {
                var A = this.getSelectedUser();
                if (!A) return alert("请选择用户"), !1;
                if (!this.setting.dialog_voice) return alert("请输入语音时间"), !1;
                60 < this.setting.dialog_voice && (this.setting.dialog_voice = 60);
                A = {
                    id: "dialog-" + (new Date).valueOf(),
                    type: "voice",
                    time: this.setting.dialog_voice,
                    is_me: A.is_me,
                    user_id: A.id,
                    	name:A.name,
                    isread: this.setting.dialog_voice_isread
                };
                this.addDialog(A)
            },
            addImageDialog: function(A) {
                var e = this.getSelectedUser();
                if (!e) return alert("请选择用户"), !1;
                var t = this,
                    A = A.target.files[0],
                    r = new FileReader;
                r.onload = function() {
                    t.dealImage(r.result, {
                        width: 1260,
                        quality: .9
                    }, function(A) {
                        A = {
                            id: "dialog-" + (new Date).valueOf(),
                            type: "image",
                            image: A,
                            is_me: e.is_me,
                            user_id: e.id,
                            name:e.name,
                        };
                        t.addDialog(A)
                    })
                }, r.readAsDataURL(A)
            },
            addTransferDialog: function() {
                var A = this.getSelectedUser();
                if (!A) return alert("请选择用户"), !1;
                if (!this.setting.dialog_money) return alert("请输入金额"), !1;
                var e = "转账给你",
                    t = (A.is_me && (e = "转账给" + ((t = this.getOtherUser()) ? t.name : "马克")), this.setting.dialog_trans_remark && (e = this.setting.dialog_trans_remark), {
                        id: "dialog-" + (new Date).valueOf(),
                        type: "transfer",
                        money: this.setting.dialog_money,
                        is_me: A.is_me,
                        user_id: A.id,
                        remark: e,
                        trans_remark: this.setting.dialog_trans_remark,
                        	name:A.name,
                    });
                this.addDialog(t), this.setting.dialog_trans_remark = ""
            },
            addRedpacketDialog: function() {
                var A = this.getSelectedUser();
                if (!A) return alert("请选择用户"), !1;
                if (!this.setting.dialog_money) return alert("请输入金额"), !1;
                var e = this.setting.dialog_repacket_remark,
                    A = {
                        id: "dialog-" + (new Date).valueOf(),
                        type: "redpacket",
                        money: this.setting.dialog_money,
                        is_me: A.is_me,
                        user_id: A.id,
                        remark: e,
                        name:A.name,
                    };
                this.addDialog(A), this.setting.dialog_repacket_remark = "恭喜发财，大吉大利"
            },
            getUserById: function(e) {
                var A = this.users.filter(function(A) {
                    return A.id == e
                });
                return 0 < A.length ? A[0] : {
                    image: null
                }
            },
            setUserImage: function(A, e) {
                var t = this,
                    A = A.target.files[0],
                    r = new FileReader;
                r.onload = function() {
                    t.dealImage(r.result, {
                        width: 400
                    }, function(A) {
                        t.users[e].image = A
                    })
                }, r.readAsDataURL(A)
            },
            setBackground: function(A) {
                var e = this,
                    A = A.target.files[0],
                    t = new FileReader;
                t.onload = function() {
                    e.dealImage(t.result, {
                        width: 1400,
                        quality: .9
                    }, function(A) {
                        e.$set(e.setting, "background", A)
                    })
                }, t.readAsDataURL(A)
            },
            deleteBackground: function() {
                this.$set(this.setting, "background", "")
            },
            selectUser: function(A) {
                for (var e in this.users) {
                    e = this.users[e];
                    if (e.selected) {
                        e.selected = !1;
                        break
                    }
                }
                this.$set(this.users[A], "selected", !0)
            },
            becomeMe: function(A) {
                for (var e in this.users) {
                    e = this.users[e];
                    if (e.is_me) {
                        e.is_me = false;
                    }
                }
                this.users[A].is_me = true;
            },
            getSelectedUser: function() {
                var A, e = null;
                for (A in this.users) {
                    var t = this.users[A];
                    if (t.selected) {
                        e = t;
                        break
                    }
                }
                return e
            },
            getOtherUser: function() {
                var A = this.users.filter(function(A) {
                    return !A.is_me
                });
                return 0 < A.length ? A[0] : null
            },
            getMeUser: function() {
                var A = this.users.filter(function(A) {
                    return A.is_me
                });
                return 0 < A.length ? A[0] : null
            },
            getSender: function() {
                var A = this.getSelectedUser();
                return A ? A.name : "未选择"
            },
            deleteDialog: function(A) {
                this.dialogs.splice(A, 1)
            },
            getVoiceLength: function(A) {
                return 380 / 59 * (A - 1)
            },
            cleanDialogs: function() {
                confirm("您确认要清空对话内容？") && (this.dialogs = [])
            },
            dealImage: function(A, i, o) {
                var e = new Image;
                e.src = A, e.onload = function() {
                    var A = (e = this.width) / this.height,
                        e = i.width && e > i.width ? i.width : e,
                        A = i.height || e / A,
                        t = .7,
                        r = document.createElement("canvas"),
                        n = r.getContext("2d"),
                        B = document.createAttribute("width"),
                        s = (B.nodeValue = e, document.createAttribute("height")),
                        B = (s.nodeValue = A, r.setAttributeNode(B), r.setAttributeNode(s), n.drawImage(this, 0, 0, e, A), i.quality && i.quality <= 1 && 0 < i.quality && (t = i.quality), r.toDataURL("image/jpeg", t));
                    o(B)
                }
            },
            redpacketGet: function(A) {
                var e = this.dialogs[A],
                    t = this.getUserById(e.user_id),
                    A = (this.$set(this.dialogs[A], "is_get", !0), "[红包] 你领取了" + t.name + "的#红包#"),
                    e = (e.is_me && (A = "[红包]" + t.name + "领取了你的#红包#"), this.matchReplace(A, ["\\[红包]", "\\#.*?\\#"], [function(A, e) {
                        return '<i class="wechat-dialog-notice-redp-icon"></i>'
                    }, function(A, e) {
                        return "<em>" + A.substring(1, A.length - 1) + "</em>"
                    }])),
                    t = {
                        id: "dialog-" + (new Date).valueOf(),
                        type: "notice",
                        content: e,
                        is_system: 1,
                        
                    };
                this.addDialog(t)
            },
            transferGet: function(A) {
                var e = this.dialogs[A],
                    t = e.is_me ? this.getOtherUser() : this.getMeUser(),
                    A = (this.$set(this.dialogs[A], "is_get", !0), this.$set(this.dialogs[A], "remark", "已被领取"), e.trans_remark && this.$set(this.dialogs[A], "remark", "已被领取 - " + e.trans_remark), {
                        id: "dialog-" + (new Date).valueOf(),
                        type: "transfer",
                        money: e.money,
                        is_me: !e.is_me,
                        user_id: t.id,
                        remark: "已收款",
                        is_get: !0,
                        name:t.name,
                    });
                this.addDialog(A)
            },
            onBackgroundLoad: function(A) {
                (A.target.width >= A.target.height || A.target.width < 1125 || A.target.height < 2436) && $(A.target).addClass("phone-bg-for-height")
            }
        },
        watch: {
            setting: {
                handler: function(A, e) {
                    n.default.set("wechat_setting", A)
                },
                deep: !0
            },
            users: {
                handler: function(A, e) {
                    n.default.set("wechat_users", A)
                },
                deep: !0
            },
            dialogs: {
                handler: function(A, e) {
                    n.default.set("wechat_dialogs", A)
                },
                deep: !0
            }
        }
    }
}]);