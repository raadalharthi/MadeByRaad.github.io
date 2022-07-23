(function () {

  var aa = this || self;
  function k(a, b) {
    a = a.split(".");
    var c = aa;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function m(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.o = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  }
  var n = Array.prototype.indexOf
    ? function (a, b, c) {
        return Array.prototype.indexOf.call(a, b, c);
      }
    : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, c);
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  function p(a, b) {
    a.sort(b || ba);
  }
  function ba(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function ca(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function da(a, b) {
    this.a = a;
    this.h = !!b.i;
    this.c = b.b;
    this.m = b.type;
    this.l = !1;
    switch (this.c) {
      case ea:
      case fa:
      case ha:
      case ia:
      case ja:
      case ka:
      case la:
        this.l = !0;
    }
    this.g = b.defaultValue;
  }
  var la = 1,
    ka = 2,
    ea = 3,
    fa = 4,
    ha = 6,
    ia = 16,
    ja = 18;
  function ma(a, b) {
    this.c = a;
    this.a = {};
    for (a = 0; a < b.length; a++) {
      var c = b[a];
      this.a[c.a] = c;
    }
  }
  function na(a) {
    a = ca(a.a);
    p(a, function (b, c) {
      return b.a - c.a;
    });
    return a;
  }
  function q() {
    this.a = {};
    this.g = this.f().a;
    this.c = this.h = null;
  }
  q.prototype.has = function (a) {
    return null != this.a[a.a];
  };
  q.prototype.get = function (a, b) {
    return r(this, a.a, b);
  };
  q.prototype.set = function (a, b) {
    t(this, a.a, b);
  };
  q.prototype.add = function (a, b) {
    u(this, a.a, b);
  };
  function v(a, b) {
    for (var c = na(a.f()), d = 0; d < c.length; d++) {
      var e = c[d],
        f = e.a;
      if (null != b.a[f]) {
        a.c && delete a.c[e.a];
        var g = 11 == e.c || 10 == e.c;
        if (e.h) {
          e = w(b, f);
          for (var h = 0; h < e.length; h++) u(a, f, g ? e[h].clone() : e[h]);
        } else
          (e = x(b, f)),
            g ? ((g = x(a, f)) ? v(g, e) : t(a, f, e.clone())) : t(a, f, e);
      }
    }
  }
  q.prototype.clone = function () {
    var a = new this.constructor();
    a != this && ((a.a = {}), a.c && (a.c = {}), v(a, this));
    return a;
  };
  function x(a, b) {
    var c = a.a[b];
    if (null == c) return null;
    if (a.h) {
      if (!(b in a.c)) {
        var d = a.h,
          e = a.g[b];
        if (null != c)
          if (e.h) {
            for (var f = [], g = 0; g < c.length; g++) f[g] = d.c(e, c[g]);
            c = f;
          } else c = d.c(e, c);
        return (a.c[b] = c);
      }
      return a.c[b];
    }
    return c;
  }
  function r(a, b, c) {
    var d = x(a, b);
    return a.g[b].h ? d[c || 0] : d;
  }
  function y(a, b) {
    if (null != a.a[b]) a = r(a, b, void 0);
    else
      a: {
        a = a.g[b];
        if (void 0 === a.g)
          if (((b = a.m), b === Boolean)) a.g = !1;
          else if (b === Number) a.g = 0;
          else if (b === String) a.g = a.l ? "0" : "";
          else {
            a = new b();
            break a;
          }
        a = a.g;
      }
    return a;
  }
  function w(a, b) {
    return x(a, b) || [];
  }
  function A(a, b) {
    return a.g[b].h
      ? null != a.a[b]
        ? a.a[b].length
        : 0
      : null != a.a[b]
      ? 1
      : 0;
  }
  function t(a, b, c) {
    a.a[b] = c;
    a.c && (a.c[b] = c);
  }
  function u(a, b, c) {
    a.a[b] || (a.a[b] = []);
    a.a[b].push(c);
    a.c && delete a.c[b];
  }
  function B(a, b) {
    var c = [],
      d;
    for (d in b) 0 != d && c.push(new da(d, b[d]));
    return new ma(a, c);
  }
  function C() {}
  C.prototype.a = function (a) {
    new a.c();
    throw Error("Unimplemented");
  };
  C.prototype.c = function (a, b) {
    if (11 == a.c || 10 == a.c)
      return b instanceof q ? b : this.a(a.m.prototype.f(), b);
    if (14 == a.c)
      return "string" === typeof b && oa.test(b) && ((a = Number(b)), 0 < a)
        ? a
        : b;
    if (!a.l) return b;
    a = a.m;
    if (a === String) {
      if ("number" === typeof b) return String(b);
    } else if (
      a === Number &&
      "string" === typeof b &&
      ("Infinity" === b || "-Infinity" === b || "NaN" === b || oa.test(b))
    )
      return Number(b);
    return b;
  };
  var oa = /^-?[0-9]+$/;
  function D() {}
  m(D, C);
  D.prototype.a = function (a, b) {
    a = new a.c();
    a.h = this;
    a.a = b;
    a.c = {};
    return a;
  };
  function E() {}
  m(E, D);
  E.prototype.c = function (a, b) {
    return 8 == a.c ? !!b : C.prototype.c.apply(this, arguments);
  };
  E.prototype.a = function (a, b) {
    return E.o.a.call(this, a, b);
  };
  function F(a, b) {
    null != a && this.a.apply(this, arguments);
  }
  F.prototype.c = "";
  F.prototype.set = function (a) {
    this.c = "" + a;
  };
  F.prototype.a = function (a, b, c) {
    this.c += String(a);
    if (null != b)
      for (var d = 1; d < arguments.length; d++) this.c += arguments[d];
    return this;
  };
  F.prototype.toString = function () {
    return this.c;
  };

  function G() {
    q.call(this);
  }
  m(G, q);
  var pa = null;
  function H() {
    q.call(this);
  }
  m(H, q);
  var qa = null;
  function I() {
    q.call(this);
  }
  m(I, q);
  var ra = null;
  G.prototype.f = function () {
    var a = pa;
    a ||
      (pa = a =
        B(G, {
          0: { name: "NumberFormat", j: "i18n.phonenumbers.NumberFormat" },
          1: { name: "pattern", required: !0, b: 9, type: String },
          2: { name: "format", required: !0, b: 9, type: String },
          3: { name: "leading_digits_pattern", i: !0, b: 9, type: String },
          4: { name: "national_prefix_formatting_rule", b: 9, type: String },
          6: {
            name: "national_prefix_optional_when_formatting",
            b: 8,
            defaultValue: !1,
            type: Boolean,
          },
          5: {
            name: "domestic_carrier_code_formatting_rule",
            b: 9,
            type: String,
          },
        }));
    return a;
  };
  G.f = G.prototype.f;
  H.prototype.f = function () {
    var a = qa;
    a ||
      (qa = a =
        B(H, {
          0: {
            name: "PhoneNumberDesc",
            j: "i18n.phonenumbers.PhoneNumberDesc",
          },
          2: { name: "national_number_pattern", b: 9, type: String },
          9: { name: "possible_length", i: !0, b: 5, type: Number },
          10: { name: "possible_length_local_only", i: !0, b: 5, type: Number },
          6: { name: "example_number", b: 9, type: String },
        }));
    return a;
  };
  H.f = H.prototype.f;
  I.prototype.f = function () {
    var a = ra;
    a ||
      (ra = a =
        B(I, {
          0: { name: "PhoneMetadata", j: "i18n.phonenumbers.PhoneMetadata" },
          1: { name: "general_desc", b: 11, type: H },
          2: { name: "fixed_line", b: 11, type: H },
          3: { name: "mobile", b: 11, type: H },
          4: { name: "toll_free", b: 11, type: H },
          5: { name: "premium_rate", b: 11, type: H },
          6: { name: "shared_cost", b: 11, type: H },
          7: { name: "personal_number", b: 11, type: H },
          8: { name: "voip", b: 11, type: H },
          21: { name: "pager", b: 11, type: H },
          25: { name: "uan", b: 11, type: H },
          27: { name: "emergency", b: 11, type: H },
          28: { name: "voicemail", b: 11, type: H },
          29: { name: "short_code", b: 11, type: H },
          30: { name: "standard_rate", b: 11, type: H },
          31: { name: "carrier_specific", b: 11, type: H },
          33: { name: "sms_services", b: 11, type: H },
          24: { name: "no_international_dialling", b: 11, type: H },
          9: { name: "id", required: !0, b: 9, type: String },
          10: { name: "country_code", b: 5, type: Number },
          11: { name: "international_prefix", b: 9, type: String },
          17: { name: "preferred_international_prefix", b: 9, type: String },
          12: { name: "national_prefix", b: 9, type: String },
          13: { name: "preferred_extn_prefix", b: 9, type: String },
          15: { name: "national_prefix_for_parsing", b: 9, type: String },
          16: { name: "national_prefix_transform_rule", b: 9, type: String },
          18: {
            name: "same_mobile_and_fixed_line_pattern",
            b: 8,
            defaultValue: !1,
            type: Boolean,
          },
          19: { name: "number_format", i: !0, b: 11, type: G },
          20: { name: "intl_number_format", i: !0, b: 11, type: G },
          22: {
            name: "main_country_for_code",
            b: 8,
            defaultValue: !1,
            type: Boolean,
          },
          23: { name: "leading_digits", b: 9, type: String },
          26: {
            name: "leading_zero_possible",
            b: 8,
            defaultValue: !1,
            type: Boolean,
          },
        }));
    return a;
  };
  I.f = I.prototype.f;
  function J() {
    q.call(this);
  }
  m(J, q);
  var sa = null,
    ta = { $: 0, w: 1, v: 5, u: 10, s: 20 };
  J.prototype.f = function () {
    var a = sa;
    a ||
      (sa = a =
        B(J, {
          0: { name: "PhoneNumber", j: "i18n.phonenumbers.PhoneNumber" },
          1: { name: "country_code", required: !0, b: 5, type: Number },
          2: { name: "national_number", required: !0, b: 4, type: Number },
          3: { name: "extension", b: 9, type: String },
          4: { name: "italian_leading_zero", b: 8, type: Boolean },
          8: {
            name: "number_of_leading_zeros",
            b: 5,
            defaultValue: 1,
            type: Number,
          },
          5: { name: "raw_input", b: 9, type: String },
          6: { name: "country_code_source", b: 14, defaultValue: 0, type: ta },
          7: { name: "preferred_domestic_carrier_code", b: 9, type: String },
        }));
    return a;
  };
  J.ctor = J;
  J.ctor.f = J.prototype.f;

  var K = {
      965: ["KW"],
      966: ["SA"],
      968: ["OM"],
      971: ["AE"],
      973: ["BH"],
      974: ["QA"],
    },
    va = {
      AE: [
        ,
        [
          ,
          ,
          "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
          ,
          ,
          ,
          ,
          ,
          ,
          [5, 6, 7, 8, 9, 10, 11, 12],
        ],
        [, , "[2-4679][2-8]\\d{6}", , , , "22345678", , , [8], [7]],
        [, , "5[024-68]\\d{7}", , , , "501234567", , , [9]],
        [, , "400\\d{6}|800\\d{2,9}", , , , "800123456"],
        [, , "900[02]\\d{5}", , , , "900234567", , , [9]],
        [, , "700[05]\\d{5}", , , , "700012345", , , [9]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        "AE",
        971,
        "00",
        "0",
        ,
        ,
        "0",
        ,
        ,
        ,
        [
          [, "(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
          [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
          [, "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
          [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
        ],
        ,
        [, , , , , , , , , [-1]],
        ,
        ,
        [, , , , , , , , , [-1]],
        [, , "600[25]\\d{5}", , , , "600212345", , , [9]],
        ,
        ,
        [, , , , , , , , , [-1]],
      ],

      BH: [
        ,
        [, , "[136-9]\\d{7}", , , , , , , [8]],
        [
          ,
          ,
          "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9]|88)|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}",
          ,
          ,
          ,
          "17001234",
        ],
        [
          ,
          ,
          "(?:3(?:[1-79]\\d|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}",
          ,
          ,
          ,
          "36001234",
        ],
        [, , "80\\d{6}", , , , "80123456"],
        [, , "(?:87|9[014578])\\d{6}", , , , "90123456"],
        [, , "84\\d{6}", , , , "84123456"],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        "BH",
        973,
        "00",
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        [[, "(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]],
        ,
        [, , , , , , , , , [-1]],
        ,
        ,
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        ,
        ,
        [, , , , , , , , , [-1]],
      ],

      KW: [
        ,
        [, , "(?:18|[2569]\\d\\d)\\d{5}", , , , , , , [7, 8]],
        [
          ,
          ,
          "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}",
          ,
          ,
          ,
          "22345678",
          ,
          ,
          [8],
        ],
        [
          ,
          ,
          "(?:5(?:2(?:22|5[25])|88[58])|6(?:222|444|70[013-9]|888|93[039])|9(?:11[01]|333|500))\\d{4}|(?:5(?:[05]\\d|1[0-7]|6[56])|6(?:0[034679]|5[015-9]|6\\d|7[67]|9[069])|9(?:0[09]|22|[4679]\\d|55|8[057-9]))\\d{5}",
          ,
          ,
          ,
          "50012345",
          ,
          ,
          [8],
        ],
        [, , "18\\d{5}", , , , "1801234", , , [7]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        "KW",
        965,
        "00",
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        [
          [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
          [, "(\\d{3})(\\d{5})", "$1 $2", ["[25]"]],
        ],
        ,
        [, , , , , , , , , [-1]],
        ,
        ,
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        ,
        ,
        [, , , , , , , , , [-1]],
      ],

      OM: [
        ,
        [
          ,
          ,
          "(?:1505|[279]\\d{3}|500)\\d{4}|8007\\d{4,5}",
          ,
          ,
          ,
          ,
          ,
          ,
          [7, 8, 9],
        ],
        [, , "2[2-6]\\d{6}", , , , "23123456", , , [8]],
        [
          ,
          ,
          "(?:1505|90[1-9]\\d)\\d{4}|(?:7[1289]|9[1-9])\\d{6}",
          ,
          ,
          ,
          "92123456",
          ,
          ,
          [8],
        ],
        [, , "500\\d{4}|8007\\d{4,5}", , , , "80071234"],
        [, , "900\\d{5}", , , , "90012345", , , [8]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        "OM",
        968,
        "00",
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        [
          [, "(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
          [, "(\\d{2})(\\d{6})", "$1 $2", ["2"]],
          [, "(\\d{4})(\\d{4})", "$1 $2", ["[179]"]],
        ],
        ,
        [, , , , , , , , , [-1]],
        ,
        ,
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        ,
        ,
        [, , , , , , , , , [-1]],
      ],

      QA: [
        ,
        [, , "[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}", , , , , , , [7, 8]],
        [, , "(?:23|4[04])\\d{6}", , , , "44123456", , , [8]],
        [, , "(?:28|[35-7]\\d)\\d{6}", , , , "33123456", , , [8]],
        [, , "800\\d{4}", , , , "8001234", , , [7]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        "QA",
        974,
        "00",
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        [
          [, "(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
          [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
        ],
        ,
        [, , "2(?:[12]\\d|61)\\d{4}", , , , "2123456", , , [7]],
        ,
        ,
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        ,
        ,
        [, , , , , , , , , [-1]],
      ],

      SA: [
        ,
        [, , "92\\d{7}|(?:[15]|8\\d)\\d{8}", , , , , , , [9, 10], [7]],
        [
          ,
          ,
          "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",
          ,
          ,
          ,
          "112345678",
          ,
          ,
          [9],
          [7],
        ],
        [, , "5(?:[013-689]\\d|7[0-36-8])\\d{6}", , , , "512345678", , , [9]],
        [, , "800\\d{7}", , , , "8001234567", , , [10]],
        [, , "925\\d{6}", , , , "925012345", , , [9]],
        [, , "920\\d{6}", , , , "920012345", , , [9]],
        [, , , , , , , , , [-1]],
        [, , , , , , , , , [-1]],
        "SA",
        966,
        "00",
        "0",
        ,
        ,
        "0",
        ,
        ,
        ,
        [
          [, "(\\d{4})(\\d{5})", "$1 $2", ["9"]],
          [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
          [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
          [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
          [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
        ],
        ,
        [, , , , , , , , , [-1]],
        ,
        ,
        [, , , , , , , , , [-1]],
        [, , "811\\d{7}", , , , "8110123456", , , [10]],
        ,
        ,
        [, , , , , , , , , [-1]],
      ],
    };

  function M() {
    this.a = {};
  }
  M.c = void 0;
  M.a = function () {
    return M.c ? M.c : (M.c = new M());
  };
  var wa = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      "\uff10": "0",
      "\uff11": "1",
      "\uff12": "2",
      "\uff13": "3",
      "\uff14": "4",
      "\uff15": "5",
      "\uff16": "6",
      "\uff17": "7",
      "\uff18": "8",
      "\uff19": "9",
      "\u0660": "0",
      "\u0661": "1",
      "\u0662": "2",
      "\u0663": "3",
      "\u0664": "4",
      "\u0665": "5",
      "\u0666": "6",
      "\u0667": "7",
      "\u0668": "8",
      "\u0669": "9",
      "\u06f0": "0",
      "\u06f1": "1",
      "\u06f2": "2",
      "\u06f3": "3",
      "\u06f4": "4",
      "\u06f5": "5",
      "\u06f6": "6",
      "\u06f7": "7",
      "\u06f8": "8",
      "\u06f9": "9",
    },
    xa = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      "\uff10": "0",
      "\uff11": "1",
      "\uff12": "2",
      "\uff13": "3",
      "\uff14": "4",
      "\uff15": "5",
      "\uff16": "6",
      "\uff17": "7",
      "\uff18": "8",
      "\uff19": "9",
      "\u0660": "0",
      "\u0661": "1",
      "\u0662": "2",
      "\u0663": "3",
      "\u0664": "4",
      "\u0665": "5",
      "\u0666": "6",
      "\u0667": "7",
      "\u0668": "8",
      "\u0669": "9",
      "\u06f0": "0",
      "\u06f1": "1",
      "\u06f2": "2",
      "\u06f3": "3",
      "\u06f4": "4",
      "\u06f5": "5",
      "\u06f6": "6",
      "\u06f7": "7",
      "\u06f8": "8",
      "\u06f9": "9",
      A: "2",
      B: "2",
      C: "2",
      D: "3",
      E: "3",
      F: "3",
      G: "4",
      H: "4",
      I: "4",
      J: "5",
      K: "5",
      L: "5",
      M: "6",
      N: "6",
      O: "6",
      P: "7",
      Q: "7",
      R: "7",
      S: "7",
      T: "8",
      U: "8",
      V: "8",
      W: "9",
      X: "9",
      Y: "9",
      Z: "9",
    },
    N = /^[+\uff0b]+/,
    ya = /([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,
    za = /[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,
    Aa = /[\\\/] *x/,
    Ba = /[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,
    Ca = /(?:.*?[A-Za-z]){3}.*/,
    Da =
      /(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
    Ea =
      /^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
    Fa = /(\$\d)/;
  function Ga(a) {
    var b = a.search(za);
    0 <= b
      ? ((a = a.substring(b)),
        (a = a.replace(Ba, "")),
        (b = a.search(Aa)),
        0 <= b && (a = a.substring(0, b)))
      : (a = "");
    return a;
  }
  function Ha(a) {
    return 2 > a.length ? !1 : O(Ea, a);
  }
  function Ia(a) {
    return O(Ca, a) ? P(a, xa) : P(a, wa);
  }
  function Ja(a) {
    var b = Ia(a.toString());
    a.c = "";
    a.a(b);
  }
  function Ka(a) {
    return null != a && (1 != A(a, 9) || -1 != w(a, 9)[0]);
  }
  function P(a, b) {
    for (var c = new F(), d, e = a.length, f = 0; f < e; ++f)
      (d = a.charAt(f)), (d = b[d.toUpperCase()]), null != d && c.a(d);
    return c.toString();
  }
  function Q(a) {
    return null != a && isNaN(a) && a.toUpperCase() in va;
  }
  function La(a, b, c) {
    if (0 == r(b, 2) && null != b.a[5]) {
      var d = y(b, 5);
      if (0 < d.length) return d;
    }
    d = y(b, 1);
    var e = R(b);
    if (0 == c) return Ma(d, 0, e, "");
    if (!(d in K)) return e;
    a = S(a, d, T(d));
    b =
      null != b.a[3] && 0 != r(b, 3).length
        ? 3 == c
          ? ";ext=" + r(b, 3)
          : null != a.a[13]
          ? r(a, 13) + y(b, 3)
          : " ext. " + y(b, 3)
        : "";
    a: {
      a = 0 == w(a, 20).length || 2 == c ? w(a, 19) : w(a, 20);
      for (var f, g = a.length, h = 0; h < g; ++h) {
        f = a[h];
        var l = A(f, 3);
        if (0 == l || 0 == e.search(r(f, 3, l - 1)))
          if (((l = new RegExp(r(f, 1))), O(l, e))) {
            a = f;
            break a;
          }
      }
      a = null;
    }
    null != a &&
      ((g = a),
      (a = y(g, 2)),
      (f = new RegExp(r(g, 1))),
      y(g, 5),
      (g = y(g, 4)),
      (e =
        2 == c && null != g && 0 < g.length
          ? e.replace(f, a.replace(Fa, g))
          : e.replace(f, a)),
      3 == c &&
        ((e = e.replace(
          /^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/,
          ""
        )),
        (e = e.replace(
          /[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g,
          "-"
        ))));
    return Ma(d, c, e, b);
  }
  function S(a, b, c) {
    return "001" == c ? U(a, "" + b) : U(a, c);
  }
  function R(a) {
    if (null == a.a[2]) return "";
    var b = "" + r(a, 2);
    return null != a.a[4] && r(a, 4) && 0 < y(a, 8)
      ? Array(y(a, 8) + 1).join("0") + b
      : b;
  }
  function Ma(a, b, c, d) {
    switch (b) {
      case 0:
        return "+" + a + c + d;
      case 1:
        return "+" + a + " " + c + d;
      case 3:
        return "tel:+" + a + "-" + c + d;
      default:
        return c + d;
    }
  }
  function V(a, b) {
    switch (b) {
      case 4:
        return r(a, 5);
      case 3:
        return r(a, 4);
      case 1:
        return r(a, 3);
      case 0:
      case 2:
        return r(a, 2);
      case 5:
        return r(a, 6);
      case 6:
        return r(a, 8);
      case 7:
        return r(a, 7);
      case 8:
        return r(a, 21);
      case 9:
        return r(a, 25);
      case 10:
        return r(a, 28);
      default:
        return r(a, 1);
    }
  }
  function W(a, b) {
    return X(a, r(b, 1))
      ? X(a, r(b, 5))
        ? 4
        : X(a, r(b, 4))
        ? 3
        : X(a, r(b, 6))
        ? 5
        : X(a, r(b, 8))
        ? 6
        : X(a, r(b, 7))
        ? 7
        : X(a, r(b, 21))
        ? 8
        : X(a, r(b, 25))
        ? 9
        : X(a, r(b, 28))
        ? 10
        : X(a, r(b, 2))
        ? r(b, 18) || X(a, r(b, 3))
          ? 2
          : 0
        : !r(b, 18) && X(a, r(b, 3))
        ? 1
        : -1
      : -1;
  }
  function U(a, b) {
    if (null == b) return null;
    b = b.toUpperCase();
    var c = a.a[b];
    if (null == c) {
      c = va[b];
      if (null == c) return null;
      c = new E().a(I.f(), c);
      a.a[b] = c;
    }
    return c;
  }
  function X(a, b) {
    var c = a.length;
    return 0 < A(b, 9) && -1 == n(w(b, 9), c) ? !1 : O(y(b, 2), a);
  }
  function Na(a, b) {
    if (null == b) return null;
    var c = y(b, 1);
    c = K[c];
    if (null == c) a = null;
    else if (1 == c.length) a = c[0];
    else
      a: {
        b = R(b);
        for (var d, e = c.length, f = 0; f < e; f++) {
          d = c[f];
          var g = U(a, d);
          if (null != g.a[23]) {
            if (0 == b.search(r(g, 23))) {
              a = d;
              break a;
            }
          } else if (-1 != W(b, g)) {
            a = d;
            break a;
          }
        }
        a = null;
      }
    return a;
  }
  function T(a) {
    a = K[a];
    return null == a ? "ZZ" : a[0];
  }
  function Y(a, b, c, d) {
    var e = V(c, d),
      f = 0 == A(e, 9) ? w(r(c, 1), 9) : w(e, 9);
    e = w(e, 10);
    if (2 == d)
      if (Ka(V(c, 0)))
        (a = V(c, 1)),
          Ka(a) &&
            ((f = f.concat(0 == A(a, 9) ? w(r(c, 1), 9) : w(a, 9))),
            p(f),
            0 == e.length ? (e = w(a, 10)) : ((e = e.concat(w(a, 10))), p(e)));
      else return Y(a, b, c, 1);
    if (-1 == f[0]) return 5;
    b = b.length;
    if (-1 < n(e, b)) return 4;
    c = f[0];
    return c == b
      ? 0
      : c > b
      ? 2
      : f[f.length - 1] < b
      ? 3
      : -1 < n(f, b, 1)
      ? 0
      : 5;
  }
  function Oa(a, b) {
    var c = R(b);
    b = y(b, 1);
    if (!(b in K)) return 1;
    b = S(a, b, T(b));
    return Y(a, c, b, -1);
  }
  function Pa(a, b, c, d, e, f) {
    if (0 == b.length) return 0;
    b = new F(b);
    var g;
    null != c && (g = r(c, 11));
    null == g && (g = "NonMatch");
    var h = b.toString();
    if (0 == h.length) g = 20;
    else if (N.test(h)) (h = h.replace(N, "")), (b.c = ""), b.a(Ia(h)), (g = 1);
    else {
      h = new RegExp(g);
      Ja(b);
      g = b.toString();
      if (0 == g.search(h)) {
        h = g.match(h)[0].length;
        var l = g.substring(h).match(ya);
        l && null != l[1] && 0 < l[1].length && "0" == P(l[1], wa)
          ? (g = !1)
          : ((b.c = ""), b.a(g.substring(h)), (g = !0));
      } else g = !1;
      g = g ? 5 : 20;
    }
    e && t(f, 6, g);
    if (20 != g) {
      if (2 >= b.c.length) throw Error("Phone number too short after IDD");
      a: {
        a = b.toString();
        if (0 != a.length && "0" != a.charAt(0))
          for (e = a.length, b = 1; 3 >= b && b <= e; ++b)
            if (((c = parseInt(a.substring(0, b), 10)), c in K)) {
              d.a(a.substring(b));
              d = c;
              break a;
            }
        d = 0;
      }
      if (0 != d) return t(f, 1, d), d;
      throw Error("Invalid country calling code");
    }
    if (
      null != c &&
      ((g = y(c, 10)),
      (h = "" + g),
      (l = b.toString()),
      0 == l.lastIndexOf(h, 0) &&
        ((h = new F(l.substring(h.length))),
        (l = r(c, 1)),
        (l = new RegExp(y(l, 2))),
        Qa(h, c, null),
        (h = h.toString()),
        (!O(l, b.toString()) && O(l, h)) || 3 == Y(a, b.toString(), c, -1)))
    )
      return d.a(h), e && t(f, 6, 10), t(f, 1, g), g;
    t(f, 1, 0);
    return 0;
  }
  function Qa(a, b, c) {
    var d = a.toString(),
      e = d.length,
      f = r(b, 15);
    if (0 != e && null != f && 0 != f.length) {
      var g = new RegExp("^(?:" + f + ")");
      if ((e = g.exec(d))) {
        f = new RegExp(y(r(b, 1), 2));
        var h = O(f, d),
          l = e.length - 1;
        b = r(b, 16);
        if (null == b || 0 == b.length || null == e[l] || 0 == e[l].length) {
          if (!h || O(f, d.substring(e[0].length)))
            null != c && 0 < l && null != e[l] && c.a(e[1]),
              a.set(d.substring(e[0].length));
        } else if (((d = d.replace(g, b)), !h || O(f, d)))
          null != c && 0 < l && c.a(e[1]), a.set(d);
      }
    }
  }
  function Z(a, b, c) {
    if (!Q(c) && 0 < b.length && "+" != b.charAt(0))
      throw Error("Invalid country calling code");
    return Ra(a, b, c, !0);
  }
  function Ra(a, b, c, d) {
    if (null == b)
      throw Error("The string supplied did not seem to be a phone number");
    if (250 < b.length)
      throw Error("The string supplied is too long to be a phone number");
    var e = new F(),
      f = b.indexOf(";phone-context=");
    if (0 <= f) {
      var g = f + 15;
      if ("+" == b.charAt(g)) {
        var h = b.indexOf(";", g);
        0 < h ? e.a(b.substring(g, h)) : e.a(b.substring(g));
      }
      g = b.indexOf("tel:");
      e.a(b.substring(0 <= g ? g + 4 : 0, f));
    } else e.a(Ga(b));
    f = e.toString();
    g = f.indexOf(";isub=");
    0 < g && ((e.c = ""), e.a(f.substring(0, g)));
    if (!Ha(e.toString()))
      throw Error("The string supplied did not seem to be a phone number");
    f = e.toString();
    if (!(Q(c) || (null != f && 0 < f.length && N.test(f))))
      throw Error("Invalid country calling code");
    f = new J();
    d && t(f, 5, b);
    a: {
      b = e.toString();
      g = b.search(Da);
      if (0 <= g && Ha(b.substring(0, g))) {
        h = b.match(Da);
        for (var l = h.length, z = 1; z < l; ++z)
          if (null != h[z] && 0 < h[z].length) {
            e.c = "";
            e.a(b.substring(0, g));
            b = h[z];
            break a;
          }
      }
      b = "";
    }
    0 < b.length && t(f, 3, b);
    g = U(a, c);
    b = new F();
    h = 0;
    l = e.toString();
    try {
      h = Pa(a, l, g, b, d, f);
    } catch (L) {
      if ("Invalid country calling code" == L.message && N.test(l)) {
        if (((l = l.replace(N, "")), (h = Pa(a, l, g, b, d, f)), 0 == h))
          throw L;
      } else throw L;
    }
    0 != h
      ? ((e = T(h)), e != c && (g = S(a, h, e)))
      : (Ja(e),
        b.a(e.toString()),
        null != c
          ? ((h = y(g, 10)), t(f, 1, h))
          : d && (delete f.a[6], f.c && delete f.c[6]));
    if (2 > b.c.length)
      throw Error("The string supplied is too short to be a phone number");
    null != g &&
      ((c = new F()),
      (e = new F(b.toString())),
      Qa(e, g, c),
      (a = Y(a, e.toString(), g, -1)),
      2 != a &&
        4 != a &&
        5 != a &&
        ((b = e), d && 0 < c.toString().length && t(f, 7, c.toString())));
    d = b.toString();
    a = d.length;
    if (2 > a)
      throw Error("The string supplied is too short to be a phone number");
    if (17 < a)
      throw Error("The string supplied is too long to be a phone number");
    if (1 < d.length && "0" == d.charAt(0)) {
      t(f, 4, !0);
      for (a = 1; a < d.length - 1 && "0" == d.charAt(a); ) a++;
      1 != a && t(f, 8, a);
    }
    t(f, 2, parseInt(d, 10));
    return f;
  }
  function O(a, b) {
    return (a =
      "string" == typeof a ? b.match("^(?:" + a + ")$") : b.match(a)) &&
      a[0].length == b.length
      ? !0
      : !1;
  }
  k("intlTelInputUtils", {});
  k("intlTelInputUtils.formatNumber", function (a, b, c) {
    try {
      var d = M.a(),
        e = Z(d, a, b),
        f = Oa(d, e);
      return 0 == f || 4 == f ? La(d, e, "undefined" == typeof c ? 0 : c) : a;
    } catch (g) {
      return a;
    }
  });
  k("intlTelInputUtils.getExampleNumber", function (a, b, c) {
    try {
      var d = M.a();
      a: {
        if (Q(a)) {
          var e = V(U(d, a), c);
          try {
            if (null != e.a[6]) {
              var f = r(e, 6);
              var g = Ra(d, f, a, !1);
              break a;
            }
          } catch (h) {}
        }
        g = null;
      }
      return La(d, g, b ? 2 : 1);
    } catch (h) {
      return "";
    }
  });
  k("intlTelInputUtils.getExtension", function (a, b) {
    try {
      return r(Z(M.a(), a, b), 3);
    } catch (c) {
      return "";
    }
  });
  k("intlTelInputUtils.getNumberType", function (a, b) {
    try {
      var c = M.a();
      var d = Z(c, a, b),
        e = Na(c, d),
        f = S(c, y(d, 1), e);
      if (null == f) var g = -1;
      else {
        var h = R(d);
        g = W(h, f);
      }
      return g;
    } catch (l) {
      return -99;
    }
  });
  k("intlTelInputUtils.getValidationError", function (a, b) {
    try {
      var c = M.a(),
        d = Z(c, a, b);
      return Oa(c, d);
    } catch (e) {
      return "Invalid country calling code" == e.message
        ? 1
        : "The string supplied did not seem to be a phone number" == e.message
        ? 4
        : "Phone number too short after IDD" == e.message ||
          "The string supplied is too short to be a phone number" == e
        ? 2
        : "The string supplied is too long to be a phone number" == e.message
        ? 3
        : -99;
    }
  });
  k("intlTelInputUtils.isValidNumber", function (a, b) {
    try {
      var c = M.a(),
        d = Z(c, a, b);
      var e = Na(c, d),
        f = y(d, 1),
        g = S(c, f, e),
        h;
      if (!(h = null == g)) {
        var l;
        if ((l = "001" != e)) {
          var z = U(c, e);
          if (null == z) throw Error("Invalid region code: " + e);
          var L = y(z, 10);
          l = f != L;
        }
        h = l;
      }
      if (h) var ua = !1;
      else {
        var Sa = R(d);
        ua = -1 != W(Sa, g);
      }
      return ua;
    } catch (Ta) {
      return !1;
    }
  });
  k("intlTelInputUtils.numberFormat", {
    E164: 0,
    INTERNATIONAL: 1,
    NATIONAL: 2,
    RFC3966: 3,
  });
  k("intlTelInputUtils.numberType", {
    FIXED_LINE: 0,
    MOBILE: 1,
    FIXED_LINE_OR_MOBILE: 2,
    TOLL_FREE: 3,
    PREMIUM_RATE: 4,
    SHARED_COST: 5,
    VOIP: 6,
    PERSONAL_NUMBER: 7,
    PAGER: 8,
    UAN: 9,
    VOICEMAIL: 10,
    UNKNOWN: -1,
  });
  k("intlTelInputUtils.validationError", {
    IS_POSSIBLE: 0,
    INVALID_COUNTRY_CODE: 1,
    TOO_SHORT: 2,
    TOO_LONG: 3,
    NOT_A_NUMBER: 4,
  });
})();