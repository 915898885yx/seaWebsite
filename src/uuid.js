function getUuid () {
    var xr = new Array(16);
    var Tr = function() {
            for (var t, n = 0; n < 16; n++)
                0 == (3 & n) && (t = 4294967296 * Math.random()),
                xr[n] = t >>> ((3 & n) << 3) & 255;
            return xr
        }
    var Yr = Tr()
      , br = [1 | Yr[0], Yr[1], Yr[2], Yr[3], Yr[4], Yr[5]]
      , Sr = 16383 & (Yr[6] << 8 | Yr[7])
      , wr = 0
      , Xr = 0;
    for (var mr = [], yr = {}, Zr = 0; Zr < 256; Zr++) {
        mr[Zr] = (Zr + 256).toString(16).substr(1),
        yr[mr[Zr]] = Zr;
    }
    
    function Ot() {
        return +new Date
    }
    function Er(t, n) {
        var e = n || 0
          , r = mr;
        return r[t[e++]] + r[t[e++]] + r[t[e++]] + r[t[e++]] + "-" + r[t[e++]] + r[t[e++]] + "-" + r[t[e++]] + r[t[e++]] + "-" + r[t[e++]] + r[t[e++]] + "-" + r[t[e++]] + r[t[e++]] + r[t[e++]] + r[t[e++]] + r[t[e++]] + r[t[e++]]
    }
    function Ar(t, n, e, r) {
        var o = "";
        if (r)
            try {
                for (var a = ((new Date).getTime() * Math.random() + "").replace(".", ".".charCodeAt()).split("").slice(-16), c = 0; c < a.length; c++)
                    a[c] = parseInt(10 * Math.random()) * +a[c] || parseInt(Math.random() * dr);
                o = Er(a, 0)
            } catch (t) {}
        var i = n && e || 0
          , f = n || []
          , u = void 0 !== (t = t || {}).clockseq ? t.clockseq : Sr
          , s = void 0 !== t.msecs ? t.msecs : Ot()
          , l = void 0 !== t.nsecs ? t.nsecs : Xr + 1
          , v = s - wr + (l - Xr) / 1e4;
        if (v < 0 && void 0 === t.clockseq && (u = u + 1 & 16383),
        (v < 0 || s > wr) && void 0 === t.nsecs && (l = 0),
        l >= 1e4)
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        wr = s,
        Xr = l,
        Sr = u;
        var h = (1e4 * (268435455 & (s += 122192928e5)) + l) % 4294967296;
        f[i++] = h >>> 24 & 255,
        f[i++] = h >>> 16 & 255,
        f[i++] = h >>> 8 & 255,
        f[i++] = 255 & h;
        var p = s / 4294967296 * 1e4 & 268435455;
        f[i++] = p >>> 8 & 255,
        f[i++] = 255 & p,
        f[i++] = p >>> 24 & 15 | 16,
        f[i++] = p >>> 16 & 255,
        f[i++] = u >>> 8 | 128,
        f[i++] = 255 & u;
        for (var T = t.node || br, d = 0; d < 6; d++)
            f[i + d] = T[d];
        var g = n || Er(f);
        return o === g ? o : g
    }
    return Ar()
}

console.log(getUuid(), 'uuid')