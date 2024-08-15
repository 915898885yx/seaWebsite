function getPc (t) {
    t = [{
        t: "PX12095",
        d: {
            PX11332: undefined,
            PX11379: true,
            PX11385: 1723619895193,
            PX11496: "5f4f6c50-5a0d-11ef-b694-8f80be8e6f39",
            PX11560: 68,
            PX11645: "http://localhost:8080/src/",
            PX11902: 0,
            PX12207: 0,
            PX12248: 3600,
            PX12264: undefined,
            PX12280: 1723619895199,
            PX12458: "MacIntel",
            PX12564: null,
            PX12565: -1,
            PX12615: undefined,
        }
    }]
    function W(t) {
        var n, e, r = "0123456789abcdef", o = "";
        for (e = 0; e < t.length; e += 1)
            n = t.charCodeAt(e),
            o += r.charAt(n >>> 4 & 15) + r.charAt(15 & n);
        return o
    }
    function R(t) {
        var n, e = [];
        for (e[(t.length >> 2) - 1] = void 0,
        n = 0; n < e.length; n += 1)
            e[n] = 0;
        for (n = 0; n < 8 * t.length; n += 8)
            e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32;
        return e
    }
    function B(t, n, e, r, o, a, c) {
        return D(n & e | ~n & r, t, n, o, a, c)
    }
    function P(t, n) {
        var e = (65535 & t) + (65535 & n);
        return (t >> 16) + (n >> 16) + (e >> 16) << 16 | 65535 & e
    }
    function D(t, n, e, r, o, a) {
        return P((c = P(P(n, t), P(r, a))) << (i = o) | c >>> 32 - i, e);
        var c, i
    }
    function k(t, n, e, r, o, a, c) {
        return D(n & r | e & ~r, t, n, o, a, c)
    }
    function H(t, n, e, r, o, a, c) {
        return D(n ^ e ^ r, t, n, o, a, c)
    }
    function V(t, n, e, r, o, a, c) {
        return D(e ^ (n | ~r), t, n, o, a, c)
    }
    function P(t, n) {
        var e = (65535 & t) + (65535 & n);
        return (t >> 16) + (n >> 16) + (e >> 16) << 16 | 65535 & e
    }
    function N(t, n) {
        t[n >> 5] |= 128 << n % 32,
        t[14 + (n + 64 >>> 9 << 4)] = n;
        var e, r, o, a, c, i = 1732584193, f = -271733879, u = -1732584194, s = 271733878;
        for (e = 0; e < t.length; e += 16)
            r = i,
            o = f,
            a = u,
            c = s,
            i = B(i, f, u, s, t[e], 7, -680876936),
            s = B(s, i, f, u, t[e + 1], 12, -389564586),
            u = B(u, s, i, f, t[e + 2], 17, 606105819),
            f = B(f, u, s, i, t[e + 3], 22, -1044525330),
            i = B(i, f, u, s, t[e + 4], 7, -176418897),
            s = B(s, i, f, u, t[e + 5], 12, 1200080426),
            u = B(u, s, i, f, t[e + 6], 17, -1473231341),
            f = B(f, u, s, i, t[e + 7], 22, -45705983),
            i = B(i, f, u, s, t[e + 8], 7, 1770035416),
            s = B(s, i, f, u, t[e + 9], 12, -1958414417),
            u = B(u, s, i, f, t[e + 10], 17, -42063),
            f = B(f, u, s, i, t[e + 11], 22, -1990404162),
            i = B(i, f, u, s, t[e + 12], 7, 1804603682),
            s = B(s, i, f, u, t[e + 13], 12, -40341101),
            u = B(u, s, i, f, t[e + 14], 17, -1502002290),
            i = k(i, f = B(f, u, s, i, t[e + 15], 22, 1236535329), u, s, t[e + 1], 5, -165796510),
            s = k(s, i, f, u, t[e + 6], 9, -1069501632),
            u = k(u, s, i, f, t[e + 11], 14, 643717713),
            f = k(f, u, s, i, t[e], 20, -373897302),
            i = k(i, f, u, s, t[e + 5], 5, -701558691),
            s = k(s, i, f, u, t[e + 10], 9, 38016083),
            u = k(u, s, i, f, t[e + 15], 14, -660478335),
            f = k(f, u, s, i, t[e + 4], 20, -405537848),
            i = k(i, f, u, s, t[e + 9], 5, 568446438),
            s = k(s, i, f, u, t[e + 14], 9, -1019803690),
            u = k(u, s, i, f, t[e + 3], 14, -187363961),
            f = k(f, u, s, i, t[e + 8], 20, 1163531501),
            i = k(i, f, u, s, t[e + 13], 5, -1444681467),
            s = k(s, i, f, u, t[e + 2], 9, -51403784),
            u = k(u, s, i, f, t[e + 7], 14, 1735328473),
            i = H(i, f = k(f, u, s, i, t[e + 12], 20, -1926607734), u, s, t[e + 5], 4, -378558),
            s = H(s, i, f, u, t[e + 8], 11, -2022574463),
            u = H(u, s, i, f, t[e + 11], 16, 1839030562),
            f = H(f, u, s, i, t[e + 14], 23, -35309556),
            i = H(i, f, u, s, t[e + 1], 4, -1530992060),
            s = H(s, i, f, u, t[e + 4], 11, 1272893353),
            u = H(u, s, i, f, t[e + 7], 16, -155497632),
            f = H(f, u, s, i, t[e + 10], 23, -1094730640),
            i = H(i, f, u, s, t[e + 13], 4, 681279174),
            s = H(s, i, f, u, t[e], 11, -358537222),
            u = H(u, s, i, f, t[e + 3], 16, -722521979),
            f = H(f, u, s, i, t[e + 6], 23, 76029189),
            i = H(i, f, u, s, t[e + 9], 4, -640364487),
            s = H(s, i, f, u, t[e + 12], 11, -421815835),
            u = H(u, s, i, f, t[e + 15], 16, 530742520),
            i = V(i, f = H(f, u, s, i, t[e + 2], 23, -995338651), u, s, t[e], 6, -198630844),
            s = V(s, i, f, u, t[e + 7], 10, 1126891415),
            u = V(u, s, i, f, t[e + 14], 15, -1416354905),
            f = V(f, u, s, i, t[e + 5], 21, -57434055),
            i = V(i, f, u, s, t[e + 12], 6, 1700485571),
            s = V(s, i, f, u, t[e + 3], 10, -1894986606),
            u = V(u, s, i, f, t[e + 10], 15, -1051523),
            f = V(f, u, s, i, t[e + 1], 21, -2054922799),
            i = V(i, f, u, s, t[e + 8], 6, 1873313359),
            s = V(s, i, f, u, t[e + 15], 10, -30611744),
            u = V(u, s, i, f, t[e + 6], 15, -1560198380),
            f = V(f, u, s, i, t[e + 13], 21, 1309151649),
            i = V(i, f, u, s, t[e + 4], 6, -145523070),
            s = V(s, i, f, u, t[e + 11], 10, -1120210379),
            u = V(u, s, i, f, t[e + 2], 15, 718787259),
            f = V(f, u, s, i, t[e + 9], 21, -343485551),
            i = P(i, r),
            f = P(f, o),
            u = P(u, a),
            s = P(s, c);
        return [i, f, u, s]
    }
    function j(t) {
        var n, e = "";
        for (n = 0; n < 32 * t.length; n += 8)
            e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255);
        return e
    }
    function M(t) {
        return unescape(encodeURIComponent(t))
    }
    function F(t) {
        return function(t) {
            return j(N(R(t), 8 * t.length))
        }(M(t))
    }
    function C(t, n, e) {
        return n ? e ? L(n, t) : W(L(n, t)) : e ? F(t) : W(F(t))
    }
    function L(t, n) {
        return function(t, n) {
            var e, r = R(t), o = [], a = [];
            for (o[15] = a[15] = void 0,
            r.length > 16 && (r = N(r, 8 * t.length)),
            e = 0; e < 16; e += 1)
                o[e] = 909522486 ^ r[e],
                a[e] = 1549556828 ^ r[e];
            var c = N(o.concat(R(n)), 512 + 8 * n.length);
            return j(N(a.concat(c), 640))
        }(M(t), M(n))
    }
    function Q(t, n, e) {
        return C(t, n, e)
    }
    function Tt(t) {
        return JSON.stringify(t)
    }
    function Bt(t, n) {
        var e = Q(t, n);
        try {
            for (var r = function(t) {
                for (var n = "", e = "", r = 0; r < t.length; r++) {
                    var o = t.charCodeAt(r);
                    o >= 48 && o <= 57 ? n += t[r] : e += o % 10
                }
                return n + e
            }(e), o = "", a = 0; a < r.length; a += 2)
                o += r[a];
            return o
        } catch (t) {}
    }
    return Bt(Tt(t))
}

console.log(getPc(), 'pc')