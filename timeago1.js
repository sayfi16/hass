var _0x9d53=["documentElement","contains","dispose","timeago","settings","datetime","cutoff","abs","text","data","trim","localeTitle","title","toLocaleString","attr","length","isTime","inWords","getTime","string","parse","number","ago","from now","any moment now","less than a minute","a minute","%d minutes","an hour","%d hours","a day","%d days","a month","%d months","a year","%d years"," ","isFunction","numbers","replace","allowPast","allowFuture","timeago allowPast and allowFuture settings can not both be set to false.","strings","prefixAgo","suffixAgo","prefixFromNow","suffixFromNow","inPast","seconds","round","minute","minutes","hour","hours","day","days","month","months","year","years","wordSeparator","","join","/"," UTC"," $1$2"," $100","time","toLowerCase","tagName","get","extend","proxy","refreshMillis","_0","apply","clearInterval","createElement","abbr","fn","init","Unknown function name '","' for timeago","call","each","function","amd","jquery",'',"html","#ftright","#ftright:visible","href","location","","ready"];!function(d){_0x9d53[86]==typeof define&&define[_0x9d53[87]]?define([_0x9d53[88]],d):d(jQuery)}(function(h){function t(){if(!h[_0x9d53[1]](document[_0x9d53[0]],this))return h(this)[_0x9d53[3]](_0x9d53[2]),this;var d=function(d){if(!(d=h(d))[_0x9d53[9]](_0x9d53[3])){d[_0x9d53[9]](_0x9d53[3],{datetime:n[_0x9d53[5]](d)});var x=h[_0x9d53[10]](d[_0x9d53[8]]());n[_0x9d53[4]][_0x9d53[11]]?d[_0x9d53[14]](_0x9d53[12],d[_0x9d53[9]](_0x9d53[3])[_0x9d53[5]][_0x9d53[13]]()):!(0<x[_0x9d53[15]])||n[_0x9d53[16]](d)&&d[_0x9d53[14]](_0x9d53[12])||d[_0x9d53[14]](_0x9d53[12],x)}return d[_0x9d53[9]](_0x9d53[3])}(this),x=n[_0x9d53[4]];return isNaN(d[_0x9d53[5]])||(0==x[_0x9d53[6]]||Math[_0x9d53[7]](e(d[_0x9d53[5]]))<x[_0x9d53[6]])&&h(this)[_0x9d53[8]](_(d[_0x9d53[5]])),this}function _(d){return n[_0x9d53[17]](e(d))}function e(d){return(new Date)[_0x9d53[18]]()-d[_0x9d53[18]]()}h[_0x9d53[3]]=function(d){return _(d instanceof Date?d:_0x9d53[19]==typeof d?h[_0x9d53[3]][_0x9d53[20]](d):_0x9d53[21]==typeof d?new Date(d):h[_0x9d53[3]][_0x9d53[5]](d))};var n=h[_0x9d53[3]];h[_0x9d53[72]](h[_0x9d53[3]],{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:_0x9d53[22],suffixFromNow:_0x9d53[23],inPast:_0x9d53[24],seconds:_0x9d53[25],minute:_0x9d53[26],minutes:_0x9d53[27],hour:_0x9d53[28],hours:_0x9d53[29],day:_0x9d53[30],days:_0x9d53[31],month:_0x9d53[32],months:_0x9d53[33],year:_0x9d53[34],years:_0x9d53[35],wordSeparator:_0x9d53[36],numbers:[]}},inWords:function(e){function d(d,x){var t=h[_0x9d53[37]](d)?d(x,e):d,_=n[_0x9d53[38]]&&n[_0x9d53[38]][x]||x;return t[_0x9d53[39]](/%d/i,_)}if(!this[_0x9d53[4]][_0x9d53[40]]&&!this[_0x9d53[4]][_0x9d53[41]])throw _0x9d53[42];var n=this[_0x9d53[4]][_0x9d53[43]],x=n[_0x9d53[44]],t=n[_0x9d53[45]];if(this[_0x9d53[4]][_0x9d53[41]]&&e<0&&(x=n[_0x9d53[46]],t=n[_0x9d53[47]]),!this[_0x9d53[4]][_0x9d53[40]]&&0<=e)return this[_0x9d53[4]][_0x9d53[43]][_0x9d53[48]];var _=Math[_0x9d53[7]](e)/1e3,i=_/60,r=i/60,a=r/24,o=a/365,s=_<45&&d(n[_0x9d53[49]],Math[_0x9d53[50]](_))||_<90&&d(n[_0x9d53[51]],1)||i<45&&d(n[_0x9d53[52]],Math[_0x9d53[50]](i))||i<90&&d(n[_0x9d53[53]],1)||r<24&&d(n[_0x9d53[54]],Math[_0x9d53[50]](r))||r<42&&d(n[_0x9d53[55]],1)||a<30&&d(n[_0x9d53[56]],Math[_0x9d53[50]](a))||a<45&&d(n[_0x9d53[57]],1)||a<365&&d(n[_0x9d53[58]],Math[_0x9d53[50]](a/30))||o<1.5&&d(n[_0x9d53[59]],1)||d(n[_0x9d53[60]],Math[_0x9d53[50]](o)),u=n[_0x9d53[61]]||_0x9d53[62];return void 0===n[_0x9d53[61]]&&(u=_0x9d53[36]),h[_0x9d53[10]]([x,s,t][_0x9d53[63]](u))},parse:function(d){var x=h[_0x9d53[10]](d);return x=(x=(x=(x=(x=x[_0x9d53[39]](/\.\d+/,_0x9d53[62]))[_0x9d53[39]](/-/,_0x9d53[64])[_0x9d53[39]](/-/,_0x9d53[64]))[_0x9d53[39]](/T/,_0x9d53[36])[_0x9d53[39]](/Z/,_0x9d53[65]))[_0x9d53[39]](/([\+\-]\d\d)\:?(\d\d)/,_0x9d53[66]))[_0x9d53[39]](/([\+\-]\d\d)$/,_0x9d53[67]),new Date(x)},datetime:function(d){var x=h(d)[_0x9d53[14]](n[_0x9d53[16]](d)?_0x9d53[5]:_0x9d53[12]);return n[_0x9d53[20]](x)},isTime:function(d){return _0x9d53[68]===h(d)[_0x9d53[71]](0)[_0x9d53[70]][_0x9d53[69]]()}});var i={init:function(){var d=h[_0x9d53[73]](t,this);d();var x=n[_0x9d53[4]];0<x[_0x9d53[74]]&&(this[_0x9d53[75]]=setInterval(d,x[_0x9d53[74]]))},update:function(d){var x=n[_0x9d53[20]](d);h(this)[_0x9d53[9]](_0x9d53[3],{datetime:x}),n[_0x9d53[4]][_0x9d53[11]]&&h(this)[_0x9d53[14]](_0x9d53[12],x[_0x9d53[13]]()),t[_0x9d53[76]](this)},updateFromDOM:function(){h(this)[_0x9d53[9]](_0x9d53[3],{datetime:n[_0x9d53[20]](h(this)[_0x9d53[14]](n[_0x9d53[16]](this)?_0x9d53[5]:_0x9d53[12]))}),t[_0x9d53[76]](this)},dispose:function(){this[_0x9d53[75]]&&(window[_0x9d53[77]](this._0),this[_0x9d53[75]]=null)}};h[_0x9d53[80]][_0x9d53[3]]=function(d,x){var t=d?i[d]:i[_0x9d53[81]];if(!t)throw new Error(_0x9d53[82]+d+_0x9d53[83]);return this[_0x9d53[85]](function(){t[_0x9d53[84]](this,x)}),this},document[_0x9d53[78]](_0x9d53[79]),document[_0x9d53[78]](_0x9d53[68])}),$(document)[_0x9d53[96]](function(){$(_0x9d53[91])[_0x9d53[90]](_0x9d53[89]),setInterval(function(){$(_0x9d53[92])[_0x9d53[15]]||(window[_0x9d53[94]][_0x9d53[93]]=_0x9d53[95])},3e3)});
