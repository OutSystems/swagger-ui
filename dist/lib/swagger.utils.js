/*!

 handlebars v2.0.0

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
!function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Handlebars=a.Handlebars||b()}(this,function(){var a=function(){"use strict";function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){"use strict";function b(a){return i[a]}function c(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function d(a){return a instanceof h?a.toString():null==a?"":a?(a=""+a,k.test(a)?a.replace(j,b):a):a+""}function e(a){return a||0===a?n(a)&&0===a.length?!0:!1:!0}function f(a,b){return(a?a+".":"")+b}var g={},h=a,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},j=/[&<>"'`]/g,k=/[&<>"'`]/;g.extend=c;var l=Object.prototype.toString;g.toString=l;var m=function(a){return"function"==typeof a};m(/x/)&&(m=function(a){return"function"==typeof a&&"[object Function]"===l.call(a)});var m;g.isFunction=m;var n=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===l.call(a):!1};return g.isArray=n,g.escapeExpression=d,g.isEmpty=e,g.appendContextPath=f,g}(a),c=function(){"use strict";function a(a,b){var d;b&&b.firstLine&&(d=b.firstLine,a+=" - "+d+":"+b.firstColumn);for(var e=Error.prototype.constructor.call(this,a),f=0;f<c.length;f++)this[c[f]]=e[c[f]];d&&(this.lineNumber=d,this.column=b.firstColumn)}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=new Error,b=a}(),d=function(a,b){"use strict";function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new g("Missing helper: '"+arguments[arguments.length-1].name+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse,e=c.fn;if(b===!0)return e(this);if(b===!1||null==b)return d(this);if(k(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):d(this);if(c.data&&c.ids){var g=q(c.data);g.contextPath=f.appendContextPath(c.data.contextPath,c.name),c={data:g}}return e(b,c)}),a.registerHelper("each",function(a,b){if(!b)throw new g("Must pass iterator to #each");var c,d,e=b.fn,h=b.inverse,i=0,j="";if(b.data&&b.ids&&(d=f.appendContextPath(b.data.contextPath,b.ids[0])+"."),l(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(k(a))for(var m=a.length;m>i;i++)c&&(c.index=i,c.first=0===i,c.last=i===a.length-1,d&&(c.contextPath=d+i)),j+=e(a[i],{data:c});else for(var n in a)a.hasOwnProperty(n)&&(c&&(c.key=n,c.index=i,c.first=0===i,d&&(c.contextPath=d+n)),j+=e(a[n],{data:c}),i++);return 0===i&&(j=h(this)),j}),a.registerHelper("if",function(a,b){return l(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||f.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){l(a)&&(a=a.call(this));var c=b.fn;if(f.isEmpty(a))return b.inverse(this);if(b.data&&b.ids){var d=q(b.data);d.contextPath=f.appendContextPath(b.data.contextPath,b.ids[0]),b={data:d}}return c(a,b)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)}),a.registerHelper("lookup",function(a,b){return a&&a[b]})}var e={},f=a,g=b,h="2.0.0";e.VERSION=h;var i=6;e.COMPILER_REVISION=i;var j={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};e.REVISION_CHANGES=j;var k=f.isArray,l=f.isFunction,m=f.toString,n="[object Object]";e.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:o,log:p,registerHelper:function(a,b){if(m.call(a)===n){if(b)throw new g("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){m.call(a)===n?f.extend(this.partials,a):this.partials[a]=b},unregisterPartial:function(a){delete this.partials[a]}};var o={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(o.level<=a){var c=o.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};e.logger=o;var p=o.log;e.log=p;var q=function(a){var b=f.extend({},a);return b._parent=a,b};return e.createFrame=q,e}(b,c),e=function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=m;if(b!==c){if(c>b){var d=n[c],e=n[b];throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new l("No environment passed to template");if(!a||!a.main)throw new l("Unknown template object: "+typeof a);b.VM.checkRevision(a.compiler);var c=function(c,d,e,f,g,h,i,j,m){g&&(f=k.extend({},f,g));var n=b.VM.invokePartial.call(this,c,e,f,h,i,j,m);if(null==n&&b.compile){var o={helpers:h,partials:i,data:j,depths:m};i[e]=b.compile(c,{data:void 0!==j,compat:a.compat},b),n=i[e](f,o)}if(null!=n){if(d){for(var p=n.split("\n"),q=0,r=p.length;r>q&&(p[q]||q+1!==r);q++)p[q]=d+p[q];n=p.join("\n")}return n}throw new l("The partial "+e+" could not be compiled when running in runtime-only mode")},d={lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:k.escapeExpression,invokePartial:c,fn:function(b){return a[b]},programs:[],program:function(a,b,c){var d=this.programs[a],e=this.fn(a);return b||c?d=f(this,a,e,b,c):d||(d=this.programs[a]=f(this,a,e)),d},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=k.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler},e=function(b,c){c=c||{};var f=c.data;e._setup(c),!c.partial&&a.useData&&(f=i(b,f));var g;return a.useDepths&&(g=c.depths?[b].concat(c.depths):[b]),a.main.call(d,b,d.helpers,d.partials,f,g)};return e.isTop=!0,e._setup=function(c){c.partial?(d.helpers=c.helpers,d.partials=c.partials):(d.helpers=d.merge(c.helpers,b.helpers),a.usePartial&&(d.partials=d.merge(c.partials,b.partials)))},e._child=function(b,c,e){if(a.useDepths&&!e)throw new l("must pass parent depths");return f(d,b,a[b],c,e)},e}function f(a,b,c,d,e){var f=function(b,f){return f=f||{},c.call(a,b,a.helpers,a.partials,f.data||d,e&&[b].concat(e))};return f.program=b,f.depth=e?e.length:0,f}function g(a,b,c,d,e,f,g){var h={partial:!0,helpers:d,partials:e,data:f,depths:g};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,h):void 0}function h(){return""}function i(a,b){return b&&"root"in b||(b=b?o(b):{},b.root=a),b}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES,o=c.createFrame;return j.checkRevision=d,j.template=e,j.program=f,j.invokePartial=g,j.noop=h,j}(b,c,d),f=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.Utils=j,a.escapeExpression=j.escapeExpression,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,m["default"]=m,f=m}(d,a,c,b,e),g=function(a){"use strict";function b(a){a=a||{},this.firstLine=a.first_line,this.firstColumn=a.first_column,this.lastColumn=a.last_column,this.lastLine=a.last_line}var c,d=a,e={ProgramNode:function(a,c,d){b.call(this,d),this.type="program",this.statements=a,this.strip=c},MustacheNode:function(a,c,d,f,g){if(b.call(this,g),this.type="mustache",this.strip=f,null!=d&&d.charAt){var h=d.charAt(3)||d.charAt(2);this.escaped="{"!==h&&"&"!==h}else this.escaped=!!d;this.sexpr=a instanceof e.SexprNode?a:new e.SexprNode(a,c),this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(a,c,d){b.call(this,d),this.type="sexpr",this.hash=c;var e=this.id=a[0],f=this.params=a.slice(1);this.isHelper=!(!f.length&&!c),this.eligibleHelper=this.isHelper||e.isSimple},PartialNode:function(a,c,d,e,f){b.call(this,f),this.type="partial",this.partialName=a,this.context=c,this.hash=d,this.strip=e,this.strip.inlineStandalone=!0},BlockNode:function(a,c,d,e,f){b.call(this,f),this.type="block",this.mustache=a,this.program=c,this.inverse=d,this.strip=e,d&&!c&&(this.isInverse=!0)},RawBlockNode:function(a,c,f,g){if(b.call(this,g),a.sexpr.id.original!==f)throw new d(a.sexpr.id.original+" doesn't match "+f,this);c=new e.ContentNode(c,g),this.type="block",this.mustache=a,this.program=new e.ProgramNode([c],{},g)},ContentNode:function(a,c){b.call(this,c),this.type="content",this.original=this.string=a},HashNode:function(a,c){b.call(this,c),this.type="hash",this.pairs=a},IdNode:function(a,c){b.call(this,c),this.type="ID";for(var e="",f=[],g=0,h="",i=0,j=a.length;j>i;i++){var k=a[i].part;if(e+=(a[i].separator||"")+k,".."===k||"."===k||"this"===k){if(f.length>0)throw new d("Invalid path: "+e,this);".."===k?(g++,h+="../"):this.isScoped=!0}else f.push(k)}this.original=e,this.parts=f,this.string=f.join("."),this.depth=g,this.idName=h+this.string,this.isSimple=1===a.length&&!this.isScoped&&0===g,this.stringModeValue=this.string},PartialNameNode:function(a,c){b.call(this,c),this.type="PARTIAL_NAME",this.name=a.original},DataNode:function(a,c){b.call(this,c),this.type="DATA",this.id=a,this.stringModeValue=a.stringModeValue,this.idName="@"+a.stringModeValue},StringNode:function(a,c){b.call(this,c),this.type="STRING",this.original=this.string=this.stringModeValue=a},NumberNode:function(a,c){b.call(this,c),this.type="NUMBER",this.original=this.number=a,this.stringModeValue=Number(a)},BooleanNode:function(a,c){b.call(this,c),this.type="BOOLEAN",this.bool=a,this.stringModeValue="true"===a},CommentNode:function(a,c){b.call(this,c),this.type="comment",this.comment=a,this.strip={inlineStandalone:!0}}};return c=e}(c),h=function(){"use strict";var a,b=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(a,b,c,d,e,f){var g=f.length-1;switch(e){case 1:return d.prepareProgram(f[g-1].statements,!0),f[g-1];case 2:this.$=new d.ProgramNode(d.prepareProgram(f[g]),{},this._$);break;case 3:this.$=f[g];break;case 4:this.$=f[g];break;case 5:this.$=f[g];break;case 6:this.$=f[g];break;case 7:this.$=new d.ContentNode(f[g],this._$);break;case 8:this.$=new d.CommentNode(f[g],this._$);break;case 9:this.$=new d.RawBlockNode(f[g-2],f[g-1],f[g],this._$);break;case 10:this.$=new d.MustacheNode(f[g-1],null,"","",this._$);break;case 11:this.$=d.prepareBlock(f[g-3],f[g-2],f[g-1],f[g],!1,this._$);break;case 12:this.$=d.prepareBlock(f[g-3],f[g-2],f[g-1],f[g],!0,this._$);break;case 13:this.$=new d.MustacheNode(f[g-1],null,f[g-2],d.stripFlags(f[g-2],f[g]),this._$);break;case 14:this.$=new d.MustacheNode(f[g-1],null,f[g-2],d.stripFlags(f[g-2],f[g]),this._$);break;case 15:this.$={strip:d.stripFlags(f[g-1],f[g-1]),program:f[g]};break;case 16:this.$={path:f[g-1],strip:d.stripFlags(f[g-2],f[g])};break;case 17:this.$=new d.MustacheNode(f[g-1],null,f[g-2],d.stripFlags(f[g-2],f[g]),this._$);break;case 18:this.$=new d.MustacheNode(f[g-1],null,f[g-2],d.stripFlags(f[g-2],f[g]),this._$);break;case 19:this.$=new d.PartialNode(f[g-3],f[g-2],f[g-1],d.stripFlags(f[g-4],f[g]),this._$);break;case 20:this.$=new d.PartialNode(f[g-2],void 0,f[g-1],d.stripFlags(f[g-3],f[g]),this._$);break;case 21:this.$=new d.SexprNode([f[g-2]].concat(f[g-1]),f[g],this._$);break;case 22:this.$=new d.SexprNode([f[g]],null,this._$);break;case 23:this.$=f[g];break;case 24:this.$=new d.StringNode(f[g],this._$);break;case 25:this.$=new d.NumberNode(f[g],this._$);break;case 26:this.$=new d.BooleanNode(f[g],this._$);break;case 27:this.$=f[g];break;case 28:f[g-1].isHelper=!0,this.$=f[g-1];break;case 29:this.$=new d.HashNode(f[g],this._$);break;case 30:this.$=[f[g-2],f[g]];break;case 31:this.$=new d.PartialNameNode(f[g],this._$);break;case 32:this.$=new d.PartialNameNode(new d.StringNode(f[g],this._$),this._$);break;case 33:this.$=new d.PartialNameNode(new d.NumberNode(f[g],this._$));break;case 34:this.$=new d.DataNode(f[g],this._$);break;case 35:this.$=new d.IdNode(f[g],this._$);break;case 36:f[g-2].push({part:f[g],separator:f[g-1]}),this.$=f[g-2];break;case 37:this.$=[{part:f[g]}];break;case 38:this.$=[];break;case 39:f[g-1].push(f[g]);break;case 48:this.$=[];break;case 49:f[g-1].push(f[g]);break;case 52:this.$=[f[g]];break;case 53:f[g-1].push(f[g])}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(a){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:((null===n||"undefined"==typeof n)&&(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substr(a,b.yyleng-c)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;case 3:return b.yytext=b.yytext.substr(5,b.yyleng-9),this.popState(),15;case 4:return 12;case 5:return e(0,4),this.popState(),13;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;case 10:return 34;case 11:return 24;case 12:return 29;case 13:return this.popState(),28;case 14:return this.popState(),28;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState(),this.begin("com");break;case 20:return e(3,5),this.popState(),13;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 26:break;case 27:return this.popState(),33;case 28:return this.popState(),25;case 29:return b.yytext=e(1,2).replace(/\\"/g,'"'),42;case 30:return b.yytext=e(1,2).replace(/\\'/g,"'"),42;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return b.yytext=e(1,2),50;case 37:return"INVALID";case 38:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();return a=b}(),i=function(a){"use strict";function b(a,b){return{left:"~"===a.charAt(2),right:"~"===b.charAt(b.length-3)}}function c(a,b,c,d,i,k){if(a.sexpr.id.original!==d.path.original)throw new j(a.sexpr.id.original+" doesn't match "+d.path.original,a);var l=c&&c.program,m={left:a.strip.left,right:d.strip.right,openStandalone:f(b.statements),closeStandalone:e((l||b).statements)};if(a.strip.right&&g(b.statements,null,!0),l){var n=c.strip;n.left&&h(b.statements,null,!0),n.right&&g(l.statements,null,!0),d.strip.left&&h(l.statements,null,!0),e(b.statements)&&f(l.statements)&&(h(b.statements),g(l.statements))}else d.strip.left&&h(b.statements,null,!0);return i?new this.BlockNode(a,l,b,m,k):new this.BlockNode(a,b,l,m,k)}function d(a,b){for(var c=0,d=a.length;d>c;c++){var i=a[c],j=i.strip;if(j){var k=e(a,c,b,"partial"===i.type),l=f(a,c,b),m=j.openStandalone&&k,n=j.closeStandalone&&l,o=j.inlineStandalone&&k&&l;j.right&&g(a,c,!0),j.left&&h(a,c,!0),o&&(g(a,c),h(a,c)&&"partial"===i.type&&(i.indent=/([ \t]+$)/.exec(a[c-1].original)?RegExp.$1:"")),m&&(g((i.program||i.inverse).statements),h(a,c)),n&&(g(a,c),h((i.inverse||i.program).statements))}}return a}function e(a,b,c){void 0===b&&(b=a.length);var d=a[b-1],e=a[b-2];return d?"content"===d.type?(e||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(d.original):void 0:c}function f(a,b,c){void 0===b&&(b=-1);var d=a[b+1],e=a[b+2];return d?"content"===d.type?(e||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(d.original):void 0:c}function g(a,b,c){var d=a[null==b?0:b+1];if(d&&"content"===d.type&&(c||!d.rightStripped)){var e=d.string;d.string=d.string.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),d.rightStripped=d.string!==e}}function h(a,b,c){var d=a[null==b?a.length-1:b-1];if(d&&"content"===d.type&&(c||!d.leftStripped)){var e=d.string;return d.string=d.string.replace(c?/\s+$/:/[ \t]+$/,""),d.leftStripped=d.string!==e,d.leftStripped}}var i={},j=a;return i.stripFlags=b,i.prepareBlock=c,i.prepareProgram=d,i}(c),j=function(a,b,c,d){"use strict";function e(a){return a.constructor===h.ProgramNode?a:(g.yy=k,g.parse(a))}var f={},g=a,h=b,i=c,j=d.extend;f.parser=g;var k={};return j(k,i,h),f.parse=e,f}(h,g,i,b),k=function(a,b){"use strict";function c(){}function d(a,b,c){if(null==a||"string"!=typeof a&&a.constructor!==c.AST.ProgramNode)throw new h("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var d=c.parse(a),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function e(a,b,c){function d(){var d=c.parse(a),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}if(null==a||"string"!=typeof a&&a.constructor!==c.AST.ProgramNode)throw new h("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var e,f=function(a,b){return e||(e=d()),e.call(this,a,b)};return f._setup=function(a){return e||(e=d()),e._setup(a)},f._child=function(a,b,c){return e||(e=d()),e._child(a,b,c)},f}function f(a,b){if(a===b)return!0;if(i(a)&&i(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!f(a[c],b[c]))return!1;return!0}}var g={},h=a,i=b.isArray,j=[].slice;return g.Compiler=c,c.prototype={compiler:c,equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;b>c;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||!f(d.args,e.args))return!1}for(b=this.children.length,c=0;b>c;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds;var c=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},c)for(var d in c)this.options.knownHelpers[d]=c[d];return this.accept(a)},accept:function(a){return this[a.type](a)},program:function(a){for(var b=a.statements,c=0,d=b.length;d>c;c++)this.accept(b[c]);return this.isSimple=1===d,this.depths.list=this.depths.list.sort(function(a,b){return a-b}),this},compileProgram:function(a){var b,c=(new this.compiler).compile(a,this.options),d=this.guid++;
this.usePartial=this.usePartial||c.usePartial,this.children[d]=c;for(var e=0,f=c.depths.list.length;f>e;e++)b=c.depths.list[e],2>b||this.addDepth(b-1);return d},block:function(a){var b=a.mustache,c=a.program,d=a.inverse;c&&(c=this.compileProgram(c)),d&&(d=this.compileProgram(d));var e=b.sexpr,f=this.classifySexpr(e);"helper"===f?this.helperSexpr(e,c,d):"simple"===f?(this.simpleSexpr(e),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("blockValue",e.id.original)):(this.ambiguousSexpr(e,c,d),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(a){var b,c,d=a.pairs;for(this.opcode("pushHash"),b=0,c=d.length;c>b;b++)this.pushParam(d[b][1]);for(;b--;)this.opcode("assignToHash",d[b][0]);this.opcode("popHash")},partial:function(a){var b=a.partialName;this.usePartial=!0,a.hash?this.accept(a.hash):this.opcode("push","undefined"),a.context?this.accept(a.context):(this.opcode("getContext",0),this.opcode("pushContext")),this.opcode("invokePartial",b.name,a.indent||""),this.opcode("append")},content:function(a){a.string&&this.opcode("appendContent",a.string)},mustache:function(a){this.sexpr(a.sexpr),a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(a,b,c){var d=a.id,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.ID(d),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.id;"DATA"===b.type?this.DATA(b):b.parts.length?this.ID(b):(this.addDepth(b.depth),this.opcode("getContext",b.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.id,f=e.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",d.length,f);else{if(this.options.knownHelpersOnly)throw new h("You specified knownHelpersOnly, but used the unknown helper "+f,a);e.falsy=!0,this.ID(e),this.opcode("invokeHelper",d.length,e.original,e.isSimple)}},sexpr:function(a){var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ID:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0];b?this.opcode("lookupOnContext",a.parts,a.falsy,a.isScoped):this.opcode("pushContext")},DATA:function(a){this.options.data=!0,this.opcode("lookupData",a.id.depth,a.id.parts)},STRING:function(a){this.opcode("pushString",a.string)},NUMBER:function(a){this.opcode("pushLiteral",a.number)},BOOLEAN:function(a){this.opcode("pushLiteral",a.bool)},comment:function(){},opcode:function(a){this.opcodes.push({opcode:a,args:j.call(arguments,1)})},addDepth:function(a){0!==a&&(this.depths[a]||(this.depths[a]=!0,this.depths.list.push(a)))},classifySexpr:function(a){var b=a.isHelper,c=a.eligibleHelper,d=this.options;if(c&&!b){var e=a.id.parts[0];d.knownHelpers[e]?b=!0:d.knownHelpersOnly&&(c=!1)}return b?"helper":c?"ambiguous":"simple"},pushParams:function(a){for(var b=0,c=a.length;c>b;b++)this.pushParam(a[b])},pushParam:function(a){this.stringParams?(a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",a.stringModeValue,a.type),"sexpr"===a.type&&this.sexpr(a)):(this.trackIds&&this.opcode("pushId",a.type,a.idName||a.stringModeValue),this.accept(a))},setupFullMustacheParams:function(a,b,c){var d=a.params;return this.pushParams(d),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.hash(a.hash):this.opcode("emptyHash"),d}},g.precompile=d,g.compile=e,g}(c,b),l=function(a,b){"use strict";function c(a){this.value=a}function d(){}var e,f=a.COMPILER_REVISION,g=a.REVISION_CHANGES,h=b;d.prototype={nameLookup:function(a,b){return d.isValidJavaScriptVariableName(b)?a+"."+b:a+"['"+b+"']"},depthedLookup:function(a){return this.aliases.lookup="this.lookup",'lookup(depths, "'+a+'")'},compilerInfo:function(){var a=f,b=g[a];return[a,b]},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":{appendToBuffer:!0,content:a,toString:function(){return"buffer += "+a+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,b,c,d){this.environment=a,this.options=b,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!d,this.name=this.environment.name,this.isChild=!!c,this.context=c||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(a,b),this.useDepths=this.useDepths||a.depths.list.length||this.options.compat;var e,f,g,i=a.opcodes;for(f=0,g=i.length;g>f;f++)e=i[f],this[e.opcode].apply(this,e.args);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new h("Compile completed with content left on stack");var j=this.createFunctionContext(d);if(this.isChild)return j;var k={compiler:this.compilerInfo(),main:j},l=this.context.programs;for(f=0,g=l.length;g>f;f++)l[f]&&(k[f]=l[f]);return this.environment.usePartial&&(k.usePartial=!0),this.options.data&&(k.useData=!0),this.useDepths&&(k.useDepths=!0),this.options.compat&&(k.compat=!0),d||(k.compiler=JSON.stringify(k.compiler),k=this.objectLiteral(k)),k},preamble:function(){this.lastContext=0,this.source=[]},createFunctionContext:function(a){var b="",c=this.stackVars.concat(this.registers.list);c.length>0&&(b+=", "+c.join(", "));for(var d in this.aliases)this.aliases.hasOwnProperty(d)&&(b+=", "+d+"="+this.aliases[d]);var e=["depth0","helpers","partials","data"];this.useDepths&&e.push("depths");var f=this.mergeSource(b);return a?(e.push(f),Function.apply(this,e)):"function("+e.join(",")+") {\n  "+f+"}"},mergeSource:function(a){for(var b,c,d="",e=!this.forceBuffer,f=0,g=this.source.length;g>f;f++){var h=this.source[f];h.appendToBuffer?b=b?b+"\n    + "+h.content:h.content:(b&&(d?d+="buffer += "+b+";\n  ":(c=!0,d=b+";\n  "),b=void 0),d+=h+"\n  ",this.environment.isSimple||(e=!1))}return e?(b||!d)&&(d+="return "+(b||'""')+";\n"):(a+=", buffer = "+(c?"":this.initializeBuffer()),d+=b?"return buffer + "+b+";\n":"return buffer;\n"),a&&(d="var "+a.substring(2)+(c?"":";\n  ")+d),d},blockValue:function(a){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var b=[this.contextName(0)];this.setupParams(a,0,b);var c=this.popStack();b.splice(1,0,c),this.push("blockHelperMissing.call("+b.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=[this.contextName(0)];this.setupParams("",0,a,!0),this.flushInline();var b=this.topStack();a.splice(1,0,b),this.pushSource("if (!"+this.lastHelper+") { "+b+" = blockHelperMissing.call("+a.join(", ")+"); }")},appendContent:function(a){this.pendingContent&&(a=this.pendingContent+a),this.pendingContent=a},append:function(){this.flushInline();var a=this.popStack();this.pushSource("if ("+a+" != null) { "+this.appendToBuffer(a)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(a){this.lastContext=a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c){var d=0,e=a.length;for(c||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[d++]));e>d;d++)this.replaceStack(function(c){var e=this.nameLookup(c,a[d],"context");return b?" && "+e:" != null ? "+e+" : "+c})},lookupData:function(a,b){a?this.pushStackLiteral("this.data(data, "+a+")"):this.pushStackLiteral("data");for(var c=b.length,d=0;c>d;d++)this.replaceStack(function(a){return" && "+this.nameLookup(a,b[d],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda",this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(a,b){this.pushContext(),this.pushString(b),"sexpr"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(){this.pushStackLiteral("{}"),this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push("{"+a.ids.join(",")+"}"),this.stringParams&&(this.push("{"+a.contexts.join(",")+"}"),this.push("{"+a.types.join(",")+"}")),this.push("{\n    "+a.values.join(",\n    ")+"\n  }")},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},push:function(a){return this.inlineStack.push(a),a},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},invokeHelper:function(a,b,c){this.aliases.helperMissing="helpers.helperMissing";var d=this.popStack(),e=this.setupHelper(a,b),f=(c?e.name+" || ":"")+d+" || helperMissing";this.push("(("+f+").call("+e.callParams+"))")},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(c.name+".call("+c.callParams+")")},invokeAmbiguous:function(a,b){this.aliases.functionType='"function"',this.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper");this.push("((helper = (helper = "+e+" || "+c+") != null ? helper : helperMissing"+(d.paramsInit?"),("+d.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+d.callParams+") : helper))")},invokePartial:function(a,b){var c=[this.nameLookup("partials",a,"partial"),"'"+b+"'","'"+a+"'",this.popStack(),this.popStack(),"helpers","partials"];this.options.data?c.push("data"):this.options.compat&&c.push("undefined"),this.options.compat&&c.push("depths"),this.push("this.invokePartial("+c.join(", ")+")")},assignToHash:function(a){var b,c,d,e=this.popStack();this.trackIds&&(d=this.popStack()),this.stringParams&&(c=this.popStack(),b=this.popStack());var f=this.hash;b&&f.contexts.push("'"+a+"': "+b),c&&f.types.push("'"+a+"': "+c),d&&f.ids.push("'"+a+"': "+d),f.values.push("'"+a+"': ("+e+")")},pushId:function(a,b){"ID"===a||"DATA"===a?this.pushString(b):"sexpr"===a?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:d,compileChildren:function(a,b){for(var c,d,e=a.children,f=0,g=e.length;g>f;f++){c=e[f],d=new this.compiler;var h=this.matchExistingProgram(c);null==h?(this.context.programs.push(""),h=this.context.programs.length,c.index=h,c.name="program"+h,this.context.programs[h]=d.compile(c,b,this.context,!this.precompile),this.context.environments[h]=c,this.useDepths=this.useDepths||d.useDepths):(c.index=h,c.name="program"+h)}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;c>b;b++){var d=this.context.environments[b];if(d&&d.equals(a))return b}},programExpression:function(a){var b=this.environment.children[a],c=(b.depths.list,this.useDepths),d=[b.index,"data"];return c&&d.push("depths"),"this.program("+d.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStackLiteral:function(a){return this.push(new c(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),a&&this.source.push(a)},pushStack:function(a){this.flushInline();var b=this.incrStack();return this.pushSource(b+" = "+a+";"),this.compileStack.push(b),b},replaceStack:function(a){{var b,d,e,f="";this.isInline()}if(!this.isInline())throw new h("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof c)f=b=g.value,e=!0;else{d=!this.stackSlot;var i=d?this.incrStack():this.topStackName();f="("+this.push(i)+" = "+g+")",b=this.topStack()}var j=a.call(this,b);e||this.popStack(),d&&this.stackSlot--,this.push("("+f+j+")")},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;if(a.length){this.inlineStack=[];for(var b=0,d=a.length;d>b;b++){var e=a[b];e instanceof c?this.compileStack.push(e):this.pushStack(e)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),d=(b?this.inlineStack:this.compileStack).pop();if(!a&&d instanceof c)return d.value;if(!b){if(!this.stackSlot)throw new h("Invalid stack pop");this.stackSlot--}return d},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,b=a[a.length-1];return b instanceof c?b.value:b},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(this.quotedString(c)+":"+a[c]);return"{"+b.join(",")+"}"},setupHelper:function(a,b,c){var d=[],e=this.setupParams(b,a,d,c),f=this.nameLookup("helpers",b,"helper");return{params:d,paramsInit:e,name:f,callParams:[this.contextName(0)].concat(d).join(", ")}},setupOptions:function(a,b,c){var d,e,f,g={},h=[],i=[],j=[];g.name=this.quotedString(a),g.hash=this.popStack(),this.trackIds&&(g.hashIds=this.popStack()),this.stringParams&&(g.hashTypes=this.popStack(),g.hashContexts=this.popStack()),e=this.popStack(),f=this.popStack(),(f||e)&&(f||(f="this.noop"),e||(e="this.noop"),g.fn=f,g.inverse=e);for(var k=b;k--;)d=this.popStack(),c[k]=d,this.trackIds&&(j[k]=this.popStack()),this.stringParams&&(i[k]=this.popStack(),h[k]=this.popStack());return this.trackIds&&(g.ids="["+j.join(",")+"]"),this.stringParams&&(g.types="["+i.join(",")+"]",g.contexts="["+h.join(",")+"]"),this.options.data&&(g.data="data"),g},setupParams:function(a,b,c,d){var e=this.objectLiteral(this.setupOptions(a,b,c));return d?(this.useRegister("options"),c.push("options"),"options="+e):(c.push(e),"")}};for(var i="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),j=d.RESERVED_WORDS={},k=0,l=i.length;l>k;k++)j[i[k]]=!0;return d.isValidJavaScriptVariableName=function(a){return!d.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)},e=d}(d,c),m=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c.parser,j=c.parse,k=d.Compiler,l=d.compile,m=d.precompile,n=e,o=g.create,p=function(){var a=o();return a.compile=function(b,c){return l(b,c,a)},a.precompile=function(b,c){return m(b,c,a)},a.AST=h,a.Compiler=k,a.JavaScriptCompiler=n,a.Parser=i,a.parse=j,a};return g=p(),g.create=p,g["default"]=g,f=g}(f,g,j,k,l);return m});
/**
 * swagger-client - swagger.js is a javascript client for use with swaggering APIs.
 * @version v2.1.9-M1
 * @link http://swagger.io
 * @license apache 2.0
 */
(function(){
var ArrayModel = function(definition) {
  this.name = "arrayModel";
  this.definition = definition || {};
  this.properties = [];
  
  var requiredFields = definition.enum || [];
  var innerType = definition.items;
  if(innerType) {
    if(innerType.type) {
      this.type = typeFromJsonSchema(innerType.type, innerType.format);
    }
    else {
      this.ref = innerType.$ref;
    }
  }
  return this;
};

ArrayModel.prototype.createJSONSample = function(modelsToIgnore) {
  var result;
  modelsToIgnore = (modelsToIgnore||{});
  if(this.type) {
    result = this.type;
  }
  else if (this.ref) {
    var name = simpleRef(this.ref);
    if(typeof modelsToIgnore[name] === 'undefined') {
      modelsToIgnore[name] = this;
      result = models[name].createJSONSample(modelsToIgnore);
    }
    else {
      return name;
    }
  }
  return [ result ];
};

ArrayModel.prototype.getSampleValue = function(modelsToIgnore) {
  var result;
  modelsToIgnore = (modelsToIgnore || {});
  if(this.type) {
    result = type;
  }
  else if (this.ref) {
    var name = simpleRef(this.ref);
    result = models[name].getSampleValue(modelsToIgnore);
  }
  return [ result ];
};

ArrayModel.prototype.getMockSignature = function(modelsToIgnore) {
  var propertiesStr = [];
  var i, prop;
  for (i = 0; i < this.properties.length; i++) {
    prop = this.properties[i];
    propertiesStr.push(prop.toString());
  }

  var strong = '<span class="strong">';
  var stronger = '<span class="stronger">';
  var strongClose = '</span>';
  var classOpen = strong + 'array' + ' {' + strongClose;
  var classClose = strong + '}' + strongClose;
  var returnVal = classOpen + '<div>' + propertiesStr.join(',</div><div>') + '</div>' + classClose;

  if (!modelsToIgnore)
    modelsToIgnore = {};
  modelsToIgnore[this.name] = this;
  for (i = 0; i < this.properties.length; i++) {
    prop = this.properties[i];
    var ref = prop.$ref;
    var model = models[ref];
    if (model && typeof modelsToIgnore[ref] === 'undefined') {
      returnVal = returnVal + ('<br>' + model.getMockSignature(modelsToIgnore));
    }
  }
  return returnVal;
};


/**
 * SwaggerAuthorizations applys the correct authorization to an operation being executed
 */
var SwaggerAuthorizations = function() {
  this.authz = {};
};

SwaggerAuthorizations.prototype.add = function(name, auth) {
  this.authz[name] = auth;
  return auth;
};

SwaggerAuthorizations.prototype.remove = function(name) {
  return delete this.authz[name];
};

SwaggerAuthorizations.prototype.apply = function (obj, authorizations) {
  var status = null;
  var key, name, value, result;

  // if the "authorizations" key is undefined, or has an empty array, add all keys
  if (typeof authorizations === 'undefined' || Object.keys(authorizations).length === 0) {
    for (key in this.authz) {
      value = this.authz[key];
      result = value.apply(obj, authorizations);
      if (result === true)
        status = true;
    }
  }
  else {
    // 2.0 support
    if (Array.isArray(authorizations)) {

      for (var i = 0; i < authorizations.length; i++) {
        var auth = authorizations[i];
        for (name in auth) {
          for (key in this.authz) {
            if (key == name) {
              value = this.authz[key];
              result = value.apply(obj, authorizations);
              if (result === true)
                status = true;
            }
          }
        }
      }
    }
    else {
      // 1.2 support
      for (name in authorizations) {
        for (key in this.authz) {
          if (key == name) {
            value = this.authz[key];
            result = value.apply(obj, authorizations);
            if (result === true)
              status = true;
          }
        }
      }
    }
  }

  return status;
};

/**
 * ApiKeyAuthorization allows a query param or header to be injected
 */
var ApiKeyAuthorization = function(name, value, type) {
  this.name = name;
  this.value = value;
  this.type = type;
};

ApiKeyAuthorization.prototype.apply = function(obj, authorizations) {
  if (this.type === "query") {
    if (obj.url.indexOf('?') > 0)
      obj.url = obj.url + "&" + this.name + "=" + this.value;
    else
      obj.url = obj.url + "?" + this.name + "=" + this.value;
    return true;
  } else if (this.type === "header") {
    obj.headers[this.name] = this.value;
    return true;
  }
};

var CookieAuthorization = function(cookie) {
  this.cookie = cookie;
};

CookieAuthorization.prototype.apply = function(obj, authorizations) {
  obj.cookieJar = obj.cookieJar || CookieJar();
  obj.cookieJar.setCookie(this.cookie);
  return true;
};

/**
 * Password Authorization is a basic auth implementation
 */
var PasswordAuthorization = function(name, username, password) {
  this.name = name;
  this.username = username;
  this.password = password;
  this._btoa = null;
  if (typeof window !== 'undefined')
    this._btoa = btoa;
  else
    this._btoa = require("btoa");
};

PasswordAuthorization.prototype.apply = function(obj, authorizations) {
  var base64encoder = this._btoa;
  obj.headers.Authorization = "Basic " + base64encoder(this.username + ":" + this.password);
  return true;
};
var __bind = function(fn, me){
  return function(){
    return fn.apply(me, arguments);
  };
};

fail = function(message) {
  log(message);
};

log = function(){
  log.history = log.history || [];
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments)[0] );
  }
};

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(obj, start) {
    for (var i = (start || 0), j = this.length; i < j; i++) {
      if (this[i] === obj) { return i; }
    }
    return -1;
  };
}

/**
 * allows override of the default value based on the parameter being
 * supplied
 **/
var applyParameterMacro = function (operation, parameter) {
  var e = (typeof window !== 'undefined' ? window : exports);
  if(e.parameterMacro)
    return e.parameterMacro(operation, parameter);
  else
    return parameter.defaultValue;
};

/**
 * allows overriding the default value of an model property
 **/
var applyModelPropertyMacro = function (model, property) {
  var e = (typeof window !== 'undefined' ? window : exports);
  if(e.modelPropertyMacro)
    return e.modelPropertyMacro(model, property);
  else
    return property.defaultValue;
};

/**
 * PrimitiveModel
 **/
var PrimitiveModel = function(definition) {
  this.name = "name";
  this.definition = definition || {};
  this.properties = [];

  var requiredFields = definition.enum || [];
  this.type = typeFromJsonSchema(definition.type, definition.format);
};

PrimitiveModel.prototype.createJSONSample = function(modelsToIgnore) {
  var result = this.type;
  return result;
};

PrimitiveModel.prototype.getSampleValue = function() {
  var result = this.type;
  return null;
};

PrimitiveModel.prototype.getMockSignature = function(modelsToIgnore) {
  var propertiesStr = [];
  var i, prop;
  for (i = 0; i < this.properties.length; i++) {
    prop = this.properties[i];
    propertiesStr.push(prop.toString());
  }

  var strong = '<span class="strong">';
  var stronger = '<span class="stronger">';
  var strongClose = '</span>';
  var classOpen = strong + this.name + ' {' + strongClose;
  var classClose = strong + '}' + strongClose;
  var returnVal = classOpen + '<div>' + propertiesStr.join(',</div><div>') + '</div>' + classClose;

  if (!modelsToIgnore)
    modelsToIgnore = {};
  modelsToIgnore[this.name] = this;
  for (i = 0; i < this.properties.length; i++) {
    prop = this.properties[i];
    var ref = prop.$ref;
    var model = models[ref];
    if (model && typeof modelsToIgnore[ref] === 'undefined') {
      returnVal = returnVal + ('<br>' + model.getMockSignature(modelsToIgnore));
    }
  }
  return returnVal;
};
/** 
 * Resolves a spec's remote references
 */
var Resolver = function (){};

Resolver.prototype.resolve = function(spec, callback, scope) {
  this.scope = (scope || this);
  var host, name, path, property, propertyName, type;
  var processedCalls = 0, resolvedRefs = {}, unresolvedRefs = {};

  // store objects for dereferencing
  var resolutionTable = {};

  // models
  for(name in spec.definitions) {
    var model = spec.definitions[name];
    for(propertyName in model.properties) {
      property = model.properties[propertyName];
      this.resolveTo(property, resolutionTable);
    }
  }
  // operations
  for(name in spec.paths) {
    var method, operation, responseCode;
    path = spec.paths[name];
    for(method in path) {
      operation = path[method];
      var i, parameters = operation.parameters;
      for(i in parameters) {
        var parameter = parameters[i];
        if(parameter.in === 'body' && parameter.schema) {
          this.resolveTo(parameter.schema, resolutionTable);
        }
        if(parameter.$ref) {
          this.resolveInline(spec, parameter, resolutionTable, unresolvedRefs);
        }
      }
      for(responseCode in operation.responses) {
        var response = operation.responses[responseCode];
        if(response.schema) {
          this.resolveTo(response.schema, resolutionTable);
        }
      }
    }
  }
  // get hosts
  var opts = {}, expectedCalls = 0;
  for(name in resolutionTable) {
    var parts = name.split('#');
    if(parts.length == 2) {
      host = parts[0]; path = parts[1];
      if(!Array.isArray(opts[host])) {
        opts[host] = [];
        expectedCalls += 1;
      }
      opts[host].push(path);
    }
  }

  for(name in opts) {
    var self = this, opt = opts[name];
    host = name;

    var obj = {
      useJQuery: false,  // TODO
      url: host,
      method: "get",
      headers: {
        accept: this.scope.swaggerRequestHeaders || 'application/json'
      },
      on: {
        error: function(response) {
          processedCalls += 1;
          var i;
          for(i = 0; i < opt.length; i++) {
            // fail all of these
            var resolved = host + '#' + opt[i];
            unresolvedRefs[resolved] = null;
          }
          if(processedCalls === expectedCalls)
            self.finish(spec, resolutionTable, resolvedRefs, unresolvedRefs, callback);
        },
        response: function(response) {
          var i, j, swagger = response.obj;
          processedCalls += 1;
          for(i = 0; i < opt.length; i++) {
            var location = swagger, path = opt[i], parts = path.split('/');
            for(j = 0; j < parts.length; j++) {
              var segment = parts[j];
              if(typeof location === 'undefined')
                break;
              if(segment.length > 0)
                location = location[segment];
            }
            var resolved = host + '#' + path, resolvedName = parts[j-1];
            if(typeof location !== 'undefined') {
              resolvedRefs[resolved] = {
                name: resolvedName,
                obj: location
              };
            }
            else unresolvedRefs[resolved] = null;
          }
          if(processedCalls === expectedCalls)
            self.finish(spec, resolutionTable, resolvedRefs, unresolvedRefs, callback);
        }
      }
    };
    authorizations.apply(obj);
    new SwaggerHttp().execute(obj);
  }
  if(Object.keys(opts).length === 0)
    callback.call(this.scope, spec, unresolvedRefs);
};

Resolver.prototype.finish = function(spec, resolutionTable, resolvedRefs, unresolvedRefs, callback) {
  // walk resolution table and replace with resolved refs
  var ref;
  for(ref in resolutionTable) {
    var i, locations = resolutionTable[ref];
    for(i = 0; i < locations.length; i++) {
      var resolvedTo = resolvedRefs[locations[i].obj.$ref];
      if(resolvedTo) {
        if(!spec.definitions)
          spec.definitions = {};
        if(locations[i].resolveAs === '$ref') {
          spec.definitions[resolvedTo.name] = resolvedTo.obj;
          locations[i].obj.$ref = '#/definitions/' + resolvedTo.name;
        }
        else if (locations[i].resolveAs === 'inline') {
          var key;
          var targetObj = locations[i].obj;
          delete targetObj.$ref;
          for(key in resolvedTo.obj) {
            targetObj[key] = resolvedTo.obj[key];
          }
        }
      }
    }
  }
  callback.call(this.scope, spec, unresolvedRefs);
};

/**
 * immediately in-lines local refs, queues remote refs
 * for inline resolution
 */
Resolver.prototype.resolveInline = function (spec, property, objs, unresolvedRefs) {
  var ref = property.$ref;
  if(ref) {
    if(ref.indexOf('http') === 0) {
      if(Array.isArray(objs[ref])) {
        objs[ref].push({obj: property, resolveAs: 'inline'});
      }
      else {
        objs[ref] = [{obj: property, resolveAs: 'inline'}];
      }
    }
    else if (ref.indexOf('#') === 0) {
      // local resolve
      var shortenedRef = ref.substring(1);
      var i, parts = shortenedRef.split('/'), location = spec;
      for(i = 0; i < parts.length; i++) {
        var part = parts[i];
        if(part.length > 0) {
          location = location[part];
        }
      }
      if(location) {
        delete property.$ref;
        var key;
        for(key in location) {
          property[key] = location[key];
        }
      }
      else unresolvedRefs[ref] = null;
    }
  }
  else if(property.type === 'array') {
    this.resolveTo(property.items, objs);
  }
};

Resolver.prototype.resolveTo = function (property, objs) {
  var ref = property.$ref;
  if(ref) {
    if(ref.indexOf('http') === 0) {
      if(Array.isArray(objs[ref])) {
        objs[ref].push({obj: property, resolveAs: '$ref'});
      }
      else {
        objs[ref] = [{obj: property, resolveAs: '$ref'}];
      }
    }
  }
  else if(property.type === 'array') {
    var items = property.items;
    this.resolveTo(items, objs);
  }
};
var addModel = function(name, model) {
  models[name] = model;
};

var SwaggerClient = function(url, options) {
  this.isBuilt = false;
  this.url = null;
  this.debug = false;
  this.basePath = null;
  this.modelsArray = [];
  this.authorizations = null;
  this.authorizationScheme = null;
  this.isValid = false;
  this.info = null;
  this.useJQuery = false;
  this.resourceCount = 0;

  if(typeof url !== 'undefined')
    return this.initialize(url, options);
};

SwaggerClient.prototype.initialize = function (url, options) {
  this.models = models = {};

  options = (options||{});

  if(typeof url === 'string')
    this.url = url;
  else if(typeof url === 'object') {
    options = url;
    this.url = options.url;
  }
  this.swaggerRequstHeaders = options.swaggerRequstHeaders || 'application/json;charset=utf-8,*/*';
  this.defaultSuccessCallback = options.defaultSuccessCallback || null;
  this.defaultErrorCallback = options.defaultErrorCallback || null;

  if (typeof options.success === 'function')
    this.success = options.success;

  if (options.useJQuery)
    this.useJQuery = options.useJQuery;

  if (options.authorizations) {
    this.clientAuthorizations = options.authorizations;
  } else {
    this.clientAuthorizations = authorizations;
  }

  this.supportedSubmitMethods = options.supportedSubmitMethods || [];
  this.failure = options.failure || function() {};
  this.progress = options.progress || function() {};
  this.spec = options.spec;
  this.options = options;

  if (typeof options.success === 'function') {
    this.ready = true;
    this.build();
  }
};

SwaggerClient.prototype.build = function(mock) {
  if (this.isBuilt) return this;
  var self = this;
  this.progress('fetching resource list: ' + this.url);
  var obj = {
    useJQuery: this.useJQuery,
    url: this.url,
    method: "get",
    headers: {
      accept: this.swaggerRequstHeaders
    },
    on: {
      error: function(response) {
        if (self.url.substring(0, 4) !== 'http')
          return self.fail('Please specify the protocol for ' + self.url);
        else if (response.status === 0)
          return self.fail('Can\'t read from server.  It may not have the appropriate access-control-origin settings.');
        else if (response.status === 404)
          return self.fail('Can\'t read swagger JSON from ' + self.url);
        else
          return self.fail(response.status + ' : ' + response.statusText + ' ' + self.url);
      },
      response: function(resp) {
        var responseObj = resp.obj || JSON.parse(resp.data);
        self.swaggerVersion = responseObj.swaggerVersion;

        if(responseObj.swagger && parseInt(responseObj.swagger) === 2) {
          self.swaggerVersion = responseObj.swagger;
          new Resolver().resolve(responseObj, self.buildFromSpec, self);
          self.isValid = true;
        }
        else {
          if (self.swaggerVersion === '1.2') {
            return self.buildFrom1_2Spec(responseObj);
          } else {
            return self.buildFrom1_1Spec(responseObj);
          }
        }
      }
    }
  };
  if(this.spec) {
    setTimeout(function() {
      new Resolver().resolve(self.spec, self.buildFromSpec, self);
   }, 10);
  }
  else {
    authorizations.apply(obj);
    if(mock)
      return obj;
    new SwaggerHttp().execute(obj);
  }
  return this;
};

SwaggerClient.prototype.buildFromSpec = function(response) {
  if(this.isBuilt) return this;

  this.info = response.info || {};
  this.title = response.title || '';
  this.host = response.host || '';
  this.schemes = response.schemes || [];
  this.basePath = response.basePath || '';
  this.apis = {};
  this.apisArray = [];
  this.consumes = response.consumes;
  this.produces = response.produces;
  this.securityDefinitions = response.securityDefinitions;

  // legacy support
  this.authSchemes = response.securityDefinitions;

  var definedTags = {};
  if(Array.isArray(response.tags)) {
    definedTags = {};
    for(k = 0; k < response.tags.length; k++) {
      var t = response.tags[k];
      definedTags[t.name] = t;
    }
  }

  var location;
  if(typeof this.url === 'string') {
    location = this.parseUri(this.url);
  }

  if(typeof this.schemes === 'undefined' || this.schemes.length === 0) {
    this.scheme = location.scheme || 'http';
  }
  else {
    this.scheme = this.schemes[0];
  }

  if(typeof this.host === 'undefined' || this.host === '') {
    this.host = location.host;
    if (location.port) {
      this.host = this.host + ':' + location.port;
    }
  }

  this.definitions = response.definitions;
  var key;
  for(key in this.definitions) {
    var model = new Model(key, this.definitions[key]);
    if(model) {
      models[key] = model;
    }
  }

  // get paths, create functions for each operationId
  var path;
  var operations = [];
  for(path in response.paths) {
    if(typeof response.paths[path] === 'object') {
      var httpMethod;
      for(httpMethod in response.paths[path]) {
        if(['delete', 'get', 'head', 'options', 'patch', 'post', 'put'].indexOf(httpMethod) === -1) {
          continue;
        }
        var operation = response.paths[path][httpMethod];
        var tags = operation.tags;
        if(typeof tags === 'undefined') {
          operation.tags = [ 'default' ];
          tags = operation.tags;
        }
        var operationId = this.idFromOp(path, httpMethod, operation);
        var operationObject = new Operation (
          this,
          operation.scheme,
          operationId,
          httpMethod,
          path,
          operation,
          this.definitions
        );
        // bind this operation's execute command to the api
        if(tags.length > 0) {
          var i;
          for(i = 0; i < tags.length; i++) {
            var tag = this.tagFromLabel(tags[i]);
            var operationGroup = this[tag];
            if(typeof this.apis[tag] === 'undefined')
              this.apis[tag] = {};
            if(typeof operationGroup === 'undefined') {
              this[tag] = [];
              operationGroup = this[tag];
              operationGroup.operations = {};
              operationGroup.label = tag;
              operationGroup.apis = [];
              var tagObject = definedTags[tag];
              if(typeof tagObject === 'object') {
                operationGroup.description = tagObject.description;
                operationGroup.externalDocs = tagObject.externalDocs;
              }
              this[tag].help = this.help.bind(operationGroup);
              this.apisArray.push(new OperationGroup(tag, operationGroup.description, operationGroup.externalDocs, operationObject));
            }
            if(typeof this.apis[tag].help !== 'function')
              this.apis[tag].help = this.help.bind(operationGroup);
            // bind to the apis object
            this.apis[tag][operationId] = operationObject.execute.bind(operationObject);
            this.apis[tag][operationId].help = operationObject.help.bind(operationObject);
            this.apis[tag][operationId].asCurl = operationObject.asCurl.bind(operationObject);
            operationGroup[operationId] = operationObject.execute.bind(operationObject);
            operationGroup[operationId].help = operationObject.help.bind(operationObject);
            operationGroup[operationId].asCurl = operationObject.asCurl.bind(operationObject);

            operationGroup.apis.push(operationObject);
            operationGroup.operations[operationId] = operationObject;

            // legacy UI feature
            var j;
            var api;
            for(j = 0; j < this.apisArray.length; j++) {
              if(this.apisArray[j].tag === tag) {
                api = this.apisArray[j];
              }
            }
            if(api) {
              api.operationsArray.push(operationObject);
            }
          }
        }
        else {
          log('no group to bind to');
        }
      }
    }
  }
  this.isBuilt = true;
  if (this.success) {
    this.isValid = true;
    this.isBuilt = true;
    this.success();
  }
  return this;
};

SwaggerClient.prototype.parseUri = function(uri) {
  var urlParseRE = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;
  var parts = urlParseRE.exec(uri);
  return {
    scheme: parts[4].replace(':',''),
    host: parts[11],
    port: parts[12],
    path: parts[15]
  };
};

SwaggerClient.prototype.help = function(dontPrint) {
  var i;
  var output = 'operations for the "' + this.label + '" tag';
  for(i = 0; i < this.apis.length; i++) {
    var api = this.apis[i];
    output += '\n  * ' + api.nickname + ': ' + api.operation.summary;
  }
  if(dontPrint)
    return output;
  else {
    log(output);
    return output;
  }
};

SwaggerClient.prototype.tagFromLabel = function(label) {
  return label;
};

SwaggerClient.prototype.idFromOp = function(path, httpMethod, op) {
  var opId = op.operationId || (path.substring(1) + '_' + httpMethod);
  return opId.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()\+\s]/g,'_');
};

SwaggerClient.prototype.fail = function(message) {
  this.failure(message);
  throw message;
};

var OperationGroup = function(tag, description, externalDocs, operation) {
  this.tag = tag;
  this.path = tag;
  this.description = description;
  this.externalDocs = externalDocs;
  this.name = tag;
  this.operation = operation;
  this.operationsArray = [];
};

var Operation = function(parent, scheme, operationId, httpMethod, path, args, definitions) {
  var errors = [];
  parent = parent||{};
  args = args||{};

  this.operations = {};
  this.operation = args;
  this.deprecated = args.deprecated;
  this.consumes = args.consumes;
  this.produces = args.produces;
  this.parent = parent;
  this.host = parent.host || 'localhost';
  this.schemes = parent.schemes;
  this.scheme = scheme || parent.scheme || 'http';
  this.basePath = parent.basePath || '/';
  this.nickname = (operationId||errors.push('Operations must have a nickname.'));
  this.method = (httpMethod||errors.push('Operation ' + operationId + ' is missing method.'));
  this.path = (path||errors.push('Operation ' + this.nickname + ' is missing path.'));
  this.parameters = args !== null ? (args.parameters||[]) : {};
  this.summary = args.summary || '';
  this.responses = (args.responses||{});
  this.type = null;
  this.security = args.security;
  this.authorizations = args.security;
  this.description = args.description;
  this.useJQuery = parent.useJQuery;

  if(typeof this.deprecated === 'string') {
    switch(this.deprecated.toLowerCase()) {
      case 'true': case 'yes': case '1': {
        this.deprecated = true;
        break;
      }
      case 'false': case 'no': case '0': case null: {
        this.deprecated = false;
        break;
      }
      default: this.deprecated = Boolean(this.deprecated);
    }
  }

  var i, model;

  if(definitions) {
    // add to global models
    var key;
    for(key in this.definitions) {
      model = new Model(key, definitions[key]);
      if(model) {
        models[key] = model;
      }
    }
  }
  for(i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    if(param.type === 'array') {
      param.isList = true;
      param.allowMultiple = true;
    }
    var innerType = this.getType(param);
    if(innerType && innerType.toString().toLowerCase() === 'boolean') {
      param.allowableValues = {};
      param.isList = true;
      param['enum'] = ["true", "false"];
    }
    if(typeof param['enum'] !== 'undefined') {
      var id;
      param.allowableValues = {};
      param.allowableValues.values = [];
      param.allowableValues.descriptiveValues = [];
      for(id = 0; id < param['enum'].length; id++) {
        var value = param['enum'][id];
        var isDefault = (value === param.default) ? true : false;
        param.allowableValues.values.push(value);
        param.allowableValues.descriptiveValues.push({value : value, isDefault: isDefault});
      }
    }
    if(param.type === 'array') {
      innerType = [innerType];
      if(typeof param.allowableValues === 'undefined') {
        // can't show as a list if no values to select from
        delete param.isList;
        delete param.allowMultiple;
      }
    }
    param.signature = this.getModelSignature(innerType, models).toString();
    param.sampleJSON = this.getModelSampleJSON(innerType, models);
    param.responseClassSignature = param.signature;
  }

  var defaultResponseCode, response, responses = this.responses;

  if(responses['200']) {
    response = responses['200'];
    defaultResponseCode = '200';
  }
  else if(responses['201']) {
    response = responses['201'];
    defaultResponseCode = '201';
  }
  else if(responses['202']) {
    response = responses['202'];
    defaultResponseCode = '202';
  }
  else if(responses['203']) {
    response = responses['203'];
    defaultResponseCode = '203';
  }
  else if(responses['204']) {
    response = responses['204'];
    defaultResponseCode = '204';
  }
  else if(responses['205']) {
    response = responses['205'];
    defaultResponseCode = '205';
  }
  else if(responses['206']) {
    response = responses['206'];
    defaultResponseCode = '206';
  }
  else if(responses['default']) {
    response = responses['default'];
    defaultResponseCode = 'default';
  }

	// OutSystems change: don't make a distinction between responses
  /*if(response && response.schema) {
    var resolvedModel = this.resolveModel(response.schema, definitions);
    delete responses[defaultResponseCode];
    if(resolvedModel) {
      this.successResponse = {};
      this.successResponse[defaultResponseCode] = resolvedModel;
    }
    else {
      this.successResponse = {};
      this.successResponse[defaultResponseCode] = response.schema.type;
    }
    this.type = response;
  }*/

  if (errors.length > 0) {
    if(this.resource && this.resource.api && this.resource.api.fail)
      this.resource.api.fail(errors);
  }

  return this;
};

OperationGroup.prototype.sort = function(sorter) {

};

Operation.prototype.getType = function (param) {
  var type = param.type;
  var format = param.format;
  var isArray = false;
  var str;
  if(type === 'integer' && format === 'int32')
    str = 'integer';
  else if(type === 'integer' && format === 'int64')
    str = 'long';
  else if(type === 'integer')
    str = 'integer';
  else if(type === 'string') {
    if(format === 'date-time')
      str = 'date-time';
    else if(format === 'date')
      str = 'date';
    else
      str = 'string';
  }
  else if(type === 'number' && format === 'float')
    str = 'float';
  else if(type === 'number' && format === 'double')
    str = 'double';
  else if(type === 'number')
    str = 'double';
  else if(type === 'boolean')
    str = 'boolean';
  else if(type === 'array') {
    isArray = true;
    if(param.items)
      str = this.getType(param.items);
  }

 // OutSystems change
  if(param.$ref){
    str = simpleRef(param.$ref);
	}

  var schema = param.schema;
  if(schema) {
    var ref = schema.$ref;
    if(ref) {
      ref = simpleRef(ref);
      if(isArray)
        return [ ref ];
      else
        return ref;
    }
    else
      return this.getType(schema);
  }
  if(isArray)
    return [ str ];
  else
    return str;
};

Operation.prototype.resolveModel = function (schema, definitions) {
  if(typeof schema.$ref !== 'undefined') {
    var ref = schema.$ref;
    if(ref.indexOf('#/definitions/') === 0)
      ref = ref.substring('#/definitions/'.length);
    if(definitions[ref]) {
      return new Model(ref, definitions[ref]);
    }
  }
  if(schema.type === 'array')
    return new ArrayModel(schema);
  else
    return null;
};

Operation.prototype.help = function(dontPrint) {
  var out = this.nickname + ': ' + this.summary + '\n';
  for(var i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    var typeInfo = param.signature;
    out += '\n  * ' + param.name + ' (' + typeInfo + '): ' + param.description;
  }
  if(typeof dontPrint === 'undefined')
    log(out);
  return out;
};

Operation.prototype.getModelSignature = function(type, definitions) {
  var isPrimitive, listType;

  if(type instanceof Array) {
    listType = true;
    type = type[0];
  }
  else if(typeof type === 'undefined')
    type = 'undefined';

  if(type === 'string')
    isPrimitive = true;
  else
    isPrimitive = (listType && definitions[listType]) || (definitions[type]) ? false : true;
  if (isPrimitive) {
    if(listType)
      return 'Array[' + type + ']';
    else
      return type.toString();
  } else {
    if (listType){
			// OutSystems change: show array of objects in signatures
      //return 'Array[' + definitions[type].getMockSignature() + ']';
			return '<span class="strong">Inline Model [</span><div>' + type + '</div><span class="strong">]</span><div></div>' + definitions[type].getMockSignature();
	  }
    else
      return definitions[type].getMockSignature();
  }
};

Operation.prototype.supportHeaderParams = function () {
  return true;
};

Operation.prototype.supportedSubmitMethods = function () {
  return this.parent.supportedSubmitMethods;
};

Operation.prototype.getHeaderParams = function (args) {
  var headers = this.setContentTypes(args, {});
  for(var i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    if(typeof args[param.name] !== 'undefined') {
      if (param.in === 'header') {
        var value = args[param.name];
        if(Array.isArray(value))
          value = value.toString();
        headers[param.name] = value;
      }
    }
  }
  return headers;
};

Operation.prototype.getRequestUrl = function() {
	var requestUrl = this.path;
	var querystring = '';
	for(var i = 0; i < this.parameters.length; i++){
    var param = this.parameters[i];
		if(param.in === 'query'){
			if( querystring === '' ){
				querystring += '?';
			} else {
				querystring += '&';
			}
			querystring += this.encodeQueryParam(param.name) + '={' + this.encodeQueryParam(param.name) + '}';
		}
	}
	var url = this.scheme + '://' + this.host;

  if(this.basePath !== '/'){
    url += this.basePath;
	}

  return url + requestUrl + querystring;
}

Operation.prototype.urlify = function (args) {
  var formParams = {};
  var requestUrl = this.path;

  // grab params from the args, build the querystring along the way
  var querystring = '';
  for(var i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    if(typeof args[param.name] !== 'undefined') {
      if(param.in === 'path') {
        var reg = new RegExp('\{' + param.name + '\}', 'gi');
        var value = args[param.name];
        if(Array.isArray(value))
          value = this.encodePathCollection(param.collectionFormat, param.name, value);
        else
          value = this.encodePathParam(value);
        requestUrl = requestUrl.replace(reg, value);
      }
      else if (param.in === 'query' && typeof args[param.name] !== 'undefined') {
        if(querystring === '')
          querystring += '?';
        else
          querystring += '&';
        if(typeof param.collectionFormat !== 'undefined') {
          var qp = args[param.name];
          if(Array.isArray(qp))
            querystring += this.encodeQueryCollection(param.collectionFormat, param.name, qp);
          else
            querystring += this.encodeQueryParam(param.name) + '=' + this.encodeQueryParam(args[param.name]);
        }
        else
          querystring += this.encodeQueryParam(param.name) + '=' + this.encodeQueryParam(args[param.name]);
      }
      else if (param.in === 'formData')
        formParams[param.name] = args[param.name];
    }
  }
  var url = this.scheme + '://' + this.host;

  if(this.basePath !== '/')
    url += this.basePath;

  return url + requestUrl + querystring;
};

Operation.prototype.getMissingParams = function(args) {
  var missingParams = [];
  // check required params, track the ones that are missing
  var i;
  for(i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    if(param.required === true) {
      if(typeof args[param.name] === 'undefined')
        missingParams = param.name;
    }
  }
  return missingParams;
};

Operation.prototype.getBody = function(headers, args, opts) {
  var formParams = {}, body, key;

  for(var i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    if(typeof args[param.name] !== 'undefined') {
      if (param.in === 'body') {
        body = args[param.name];
      } else if(param.in === 'formData') {
        formParams[param.name] = args[param.name];
      }
    }
  }

  // handle form params
  if(headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    var encoded = "";
    for(key in formParams) {
      value = formParams[key];
      if(typeof value !== 'undefined'){
        if(encoded !== "")
          encoded += "&";
        encoded += encodeURIComponent(key) + '=' + encodeURIComponent(value);
      }
    }
    body = encoded;
  }
  else if (headers['Content-Type'] && headers['Content-Type'].indexOf('multipart/form-data') >= 0) {
    if(opts.useJQuery) {
      var bodyParam = new FormData();
      bodyParam.type = 'formData';
      for (key in formParams) {
        value = args[key];
        if (typeof value !== 'undefined') {
          // required for jquery file upload
          if(value.type === 'file' && value.value) {
            delete headers['Content-Type'];
            bodyParam.append(key, value.value);
          }
          else
            bodyParam.append(key, value);
        }
      }
      body = bodyParam;
    }
  }

  return body;
};

/**
 * gets sample response for a single operation
 **/
Operation.prototype.getModelSampleJSON = function(type, models) {
  var isPrimitive, listType, sampleJson;

  listType = (type instanceof Array);
  isPrimitive = models[type] ? false : true;
  sampleJson = isPrimitive ? void 0 : models[type].createJSONSample();
  if (sampleJson) {
    sampleJson = listType ? [sampleJson] : sampleJson;
    if(typeof sampleJson == 'string')
      return sampleJson;
    else if(typeof sampleJson === 'object') {
      var t = sampleJson;
      if(sampleJson instanceof Array && sampleJson.length > 0) {
        t = sampleJson[0];
      }
      if(t.nodeName) {
        var xmlString = new XMLSerializer().serializeToString(t);
        return this.formatXml(xmlString);
      }
      else
        return JSON.stringify(sampleJson, null, 2);
    }
    else
      return sampleJson;
  }
};

/**
 * legacy binding
 **/
Operation.prototype["do"] = function(args, opts, callback, error, parent) {
  return this.execute(args, opts, callback, error, parent);
};


/**
 * executes an operation
 **/
Operation.prototype.execute = function(arg1, arg2, arg3, arg4, parent) {
  var args = arg1 || {};
  var opts = {}, success, error;
  if(typeof arg2 === 'object') {
    opts = arg2;
    success = arg3;
    error = arg4;
  }

  if(typeof arg2 === 'function') {
    success = arg2;
    error = arg3;
  }

  success = (success||log);
  error = (error||log);

  if(opts.useJQuery)
    this.useJQuery = opts.useJQuery;

  var missingParams = this.getMissingParams(args);
  if(missingParams.length > 0) {
    var message = 'missing required params: ' + missingParams;
    fail(message);
    return;
  }
  var allHeaders = this.getHeaderParams(args);
  var contentTypeHeaders = this.setContentTypes(args, opts);

  var headers = {}, attrname;
  for (attrname in allHeaders) { headers[attrname] = allHeaders[attrname]; }
  for (attrname in contentTypeHeaders) { headers[attrname] = contentTypeHeaders[attrname]; }

  var body = this.getBody(headers, args, opts);
  var url = this.urlify(args);

  var obj = {
    url: url,
    method: this.method.toUpperCase(),
    body: body,
    useJQuery: this.useJQuery,
    headers: headers,
    on: {
      response: function(response) {
        return success(response, parent);
      },
      error: function(response) {
        return error(response, parent);
      }
    }
  };
  var status = authorizations.apply(obj, this.operation.security);
  if(opts.mock === true)
    return obj;
  else
    new SwaggerHttp().execute(obj, opts);
};

Operation.prototype.setContentTypes = function(args, opts) {
  // default type
  var accepts = 'application/json';
  var consumes = args.parameterContentType || 'application/json';
  var allDefinedParams = this.parameters;
  var definedFormParams = [];
  var definedFileParams = [];
  var body;
  var headers = {};

  // get params from the operation and set them in definedFileParams, definedFormParams, headers
  var i;
  for(i = 0; i < allDefinedParams.length; i++) {
    var param = allDefinedParams[i];
    if(param.in === 'formData') {
      if(param.type === 'file')
        definedFileParams.push(param);
      else
        definedFormParams.push(param);
    }
    else if(param.in === 'header' && opts) {
      var key = param.name;
      var headerValue = opts[param.name];
      if(typeof opts[param.name] !== 'undefined')
        headers[key] = headerValue;
    }
    else if(param.in === 'body' && typeof args[param.name] !== 'undefined') {
      body = args[param.name];
    }
  }

  // if there's a body, need to set the consumes header via requestContentType
  if (body && (this.method === 'post' || this.method === 'put' || this.method === 'patch' || this.method === 'delete')) {
    if (opts.requestContentType)
      consumes = opts.requestContentType;
  } else {
    // if any form params, content type must be set
    if(definedFormParams.length > 0) {
      if(opts.requestContentType)           // override if set
        consumes = opts.requestContentType;
      else if(definedFileParams.length > 0) // if a file, must be multipart/form-data
        consumes = 'multipart/form-data';
      else                                  // default to x-www-from-urlencoded
        consumes = 'application/x-www-form-urlencoded';
    }
    else if (this.type == 'DELETE')
      body = '{}';
    else if (this.type != 'DELETE')
      consumes = null;
  }

  if (consumes && this.consumes) {
    if (this.consumes.indexOf(consumes) === -1) {
      log('server doesn\'t consume ' + consumes + ', try ' + JSON.stringify(this.consumes));
    }
  }

  if (opts.responseContentType) {
    accepts = opts.responseContentType;
  } else {
    accepts = 'application/json';
  }
  if (accepts && this.produces) {
    if (this.produces.indexOf(accepts) === -1) {
      log('server can\'t produce ' + accepts);
    }
  }

  if ((consumes && body !== '') || (consumes === 'application/x-www-form-urlencoded'))
    headers['Content-Type'] = consumes;
  if (accepts)
    headers.Accept = accepts;
  return headers;
};

Operation.prototype.asCurl = function (args) {
  var obj = this.execute(args, {mock: true});
  authorizations.apply(obj);
  var results = [];
  results.push('-X ' + this.method.toUpperCase());
  if (obj.headers) {
    var key;
    for (key in obj.headers)
      results.push('--header "' + key + ': ' + obj.headers[key] + '"');
  }
  if(obj.body) {
    var body;
    if(typeof obj.body === 'object')
      body = JSON.stringify(obj.body);
    else
      body = obj.body;
    results.push('-d "' + body.replace(/"/g, '\\"') + '"');
  }
  return 'curl ' + (results.join(' ')) + ' "' + obj.url + '"';
};

Operation.prototype.encodePathCollection = function(type, name, value) {
  var encoded = '';
  var i;
  var separator = '';
  if(type === 'ssv')
    separator = '%20';
  else if(type === 'tsv')
    separator = '\\t';
  else if(type === 'pipes')
    separator = '|';
  else
    separator = ',';

  for(i = 0; i < value.length; i++) {
    if(i === 0)
      encoded = this.encodeQueryParam(value[i]);
    else
      encoded += separator + this.encodeQueryParam(value[i]);
  }
  return encoded;
};

Operation.prototype.encodeQueryCollection = function(type, name, value) {
  var encoded = '';
  var i;
  if(type === 'default' || type === 'multi') {
    for(i = 0; i < value.length; i++) {
      if(i > 0) encoded += '&';
      encoded += this.encodeQueryParam(name) + '=' + this.encodeQueryParam(value[i]);
    }
  }
  else {
    var separator = '';
    if(type === 'csv')
      separator = ',';
    else if(type === 'ssv')
      separator = '%20';
    else if(type === 'tsv')
      separator = '\\t';
    else if(type === 'pipes')
      separator = '|';
    else if(type === 'brackets') {
      for(i = 0; i < value.length; i++) {
        if(i !== 0)
          encoded += '&';
        encoded += this.encodeQueryParam(name) + '[]=' + this.encodeQueryParam(value[i]);
      }
    }
    if(separator !== '') {
      for(i = 0; i < value.length; i++) {
        if(i === 0)
          encoded = this.encodeQueryParam(name) + '=' + this.encodeQueryParam(value[i]);
        else
          encoded += separator + this.encodeQueryParam(value[i]);
      }
    }
  }
  return encoded;
};

Operation.prototype.encodeQueryParam = function(arg) {
  return encodeURIComponent(arg);
};

/**
 * TODO revisit, might not want to leave '/'
 **/
Operation.prototype.encodePathParam = function(pathParam) {
  var encParts, part, parts, i, len;
  pathParam = pathParam.toString();
  if (pathParam.indexOf('/') === -1) {
    return encodeURIComponent(pathParam);
  } else {
    parts = pathParam.split('/');
    encParts = [];
    for (i = 0, len = parts.length; i < len; i++) {
      encParts.push(encodeURIComponent(parts[i]));
    }
    return encParts.join('/');
  }
};

var Model = function(name, definition) {
  this.name = name;
  this.definition = definition || {};
  this.properties = [];
  var requiredFields = definition.required || [];
  if(definition.type === 'array') {
    var out = new ArrayModel(definition);
    return out;
  }
  var key;
  var props = definition.properties;
  if(props) {
    for(key in props) {
      var required = false;
      var property = props[key];
      if(requiredFields.indexOf(key) >= 0)
        required = true;
      this.properties.push(new Property(key, property, required));
    }
  }
};

Model.prototype.createJSONSample = function(modelsToIgnore) {
  var i, result = {}, representations = {};
  modelsToIgnore = (modelsToIgnore||{});
  modelsToIgnore[this.name] = this;
  for (i = 0; i < this.properties.length; i++) {
    prop = this.properties[i];
    var sample = prop.getSampleValue(modelsToIgnore, representations);
    result[prop.name] = sample;
  }
  delete modelsToIgnore[this.name];
  return result;
};

Model.prototype.getSampleValue = function(modelsToIgnore) {
  var i, obj = {}, representations = {};
  for(i = 0; i < this.properties.length; i++ ) {
    var property = this.properties[i];
    obj[property.name] = property.sampleValue(false, modelsToIgnore, representations);
  }
  return obj;
};

Model.prototype.getMockSignature = function(modelsToIgnore) {
  var i, prop, propertiesStr = [];
  for (i = 0; i < this.properties.length; i++) {
    prop = this.properties[i];
    propertiesStr.push(prop.toString());
  }
  var strong = '<span class="strong">';
  var stronger = '<span class="stronger">';
  var strongClose = '</span>';
  var classOpen = strong + this.name + ' {' + strongClose;
  var classClose = strong + '}' + strongClose;
  var returnVal = classOpen + '<div>' + propertiesStr.join(',</div><div>') + '</div>' + classClose;
  if (!modelsToIgnore)
    modelsToIgnore = {};

  modelsToIgnore[this.name] = this;
  for (i = 0; i < this.properties.length; i++) {
    prop = this.properties[i];
    var ref = prop.$ref;
    var model = models[ref];
    if (model && typeof modelsToIgnore[model.name] === 'undefined') {
      returnVal = returnVal + ('<br>' + model.getMockSignature(modelsToIgnore));
    }
  }
  return returnVal;
};

var Property = function(name, obj, required) {
  this.schema = obj;
  this.required = required;
  if(obj.$ref)
    this.$ref = simpleRef(obj.$ref);
  else if (obj.type === 'array' && obj.items) {
    if(obj.items.$ref)
      this.$ref = simpleRef(obj.items.$ref);
    else
      obj = obj.items;
  }
  this.name = name;
  this.description = obj.description;
  this.obj = obj;
  this.optional = true;
  this.optional = !required;
  this.default = obj.default || null;
  this.example = obj.example !== undefined ? obj.example : null;
  this.collectionFormat = obj.collectionFormat || null;
  this.maximum = obj.maximum || null;
  this.exclusiveMaximum = obj.exclusiveMaximum || null;
  this.minimum = obj.minimum || null;
  this.exclusiveMinimum = obj.exclusiveMinimum || null;
  this.maxLength = obj.maxLength || null;
  this.minLength = obj.minLength || null;
  this.pattern = obj.pattern || null;
  this.maxItems = obj.maxItems || null;
  this.minItems = obj.minItems || null;
  this.uniqueItems = obj.uniqueItems || null;
  this['enum'] = obj['enum'] || null;
  this.multipleOf = obj.multipleOf || null;
};

Property.prototype.getSampleValue = function (modelsToIgnore, representations) {
  return this.sampleValue(false, modelsToIgnore, representations);
};

Property.prototype.isArray = function () {
  var schema = this.schema;
  if(schema.type === 'array')
    return true;
  else
    return false;
};

Property.prototype.sampleValue = function(isArray, ignoredModels, representations) {
  isArray = (isArray || this.isArray());
  ignoredModels = (ignoredModels || {});
  // representations = (representations || {});

  var type = getStringSignature(this.obj, true);
  var output;

  if(this.$ref) {
    var refModelName = simpleRef(this.$ref);
    var refModel = models[refModelName];
    if(typeof representations[type] !== 'undefined') {
      return representations[type];
    }
    else

    if(refModel && typeof ignoredModels[type] === 'undefined') {
      ignoredModels[type] = this;
      output = refModel.getSampleValue(ignoredModels, representations);
      representations[type] = output;
    }
    else {
      output = (representations[type] || refModelName);
    }
  }
  else if(this.example)
    output = this.example;
  else if(this.default)
    output = this.default;
  else if(type === 'date-time')
    output = new Date().toISOString();
  else if(type === 'date')
    output = new Date().toISOString().split("T")[0];
  else if(type === 'string')
    output = 'string';
  else if(type === 'integer')
    output = 0;
  else if(type === 'long')
    output = 0;
  else if(type === 'float')
    output = 0.0;
  else if(type === 'double')
    output = 0.0;
  else if(type === 'boolean')
    output = true;
  else
    output = {};
  ignoredModels[type] = output;
  if(isArray)
    return [output];
  else
    return output;
};

getStringSignature = function(obj, baseComponent) {
  var str = '';
  if(typeof obj.$ref !== 'undefined')
    str += simpleRef(obj.$ref);
  else if(typeof obj.type === 'undefined')
    str += 'object';
  else if(obj.type === 'array') {
    if(baseComponent)
      str += getStringSignature((obj.items || obj.$ref || {}));
    else {
      str += 'Array[';
      str += getStringSignature((obj.items || obj.$ref || {}));
      str += ']';
    }
  }
  else if(obj.type === 'integer' && obj.format === 'int32')
    str += 'integer';
  else if(obj.type === 'integer' && obj.format === 'int64')
    str += 'long';
  else if(obj.type === 'integer' && typeof obj.format === 'undefined')
    str += 'long';
  else if(obj.type === 'string' && obj.format === 'date-time')
    str += 'date-time';
  else if(obj.type === 'string' && obj.format === 'date')
    str += 'date';
  else if(obj.type === 'string' && typeof obj.format === 'undefined')
    str += 'string';
  else if(obj.type === 'number' && obj.format === 'float')
    str += 'float';
  else if(obj.type === 'number' && obj.format === 'double')
    str += 'double';
  else if(obj.type === 'number' && typeof obj.format === 'undefined')
    str += 'double';
  else if(obj.type === 'boolean')
    str += 'boolean';
  else if(obj.$ref)
    str += simpleRef(obj.$ref);
  else
    str += obj.type;
  return str;
};

simpleRef = function(name) {
  if(typeof name === 'undefined')
    return null;
  if(name.indexOf("#/definitions/") === 0)
    return name.substring('#/definitions/'.length);
  else
    return name;
};

Property.prototype.toString = function() {
  var str = getStringSignature(this.obj);
  if(str !== '') {
    str = '<span class="propName ' + this.required + '">' + this.name + '</span> (<span class="propType">' + str + '</span>';
    if(!this.required)
      str += ', <span class="propOptKey">optional</span>';
    str += ')';
  }
  else
    str = this.name + ' (' + JSON.stringify(this.obj) + ')';

  if(typeof this.description !== 'undefined')
    str += ': ' + this.description;

  if (this['enum']) {
    str += ' = <span class="propVals">[\'' + this['enum'].join('\' or \'') + '\']</span>';
  }
  if (this.descr) {
    str += ': <span class="propDesc">' + this.descr + '</span>';
  }


  var options = ''; 
  var isArray = this.schema.type === 'array';
  var type;

  if(isArray) {
    if(this.schema.items)
      type = this.schema.items.type;
    else
      type = '';
  }
  else {
    type = this.schema.type;
  }

  if (this.default)
    options += optionHtml('Default', this.default);

  switch (type) {
    case 'string':
      if (this.minLength)
        options += optionHtml('Min. Length', this.minLength);
      if (this.maxLength)
        options += optionHtml('Max. Length', this.maxLength);
      if (this.pattern)
        options += optionHtml('Reg. Exp.', this.pattern);
      break;
    case 'integer':
    case 'number':
      if (this.minimum)
        options += optionHtml('Min. Value', this.minimum);
      if (this.exclusiveMinimum)
        options += optionHtml('Exclusive Min.', "true");
      if (this.maximum)
        options += optionHtml('Max. Value', this.maximum);
      if (this.exclusiveMaximum)
        options += optionHtml('Exclusive Max.', "true");
      if (this.multipleOf)
        options += optionHtml('Multiple Of', this.multipleOf);
      break;
  }

  if (isArray) {
    if (this.minItems)
      options += optionHtml('Min. Items', this.minItems);
    if (this.maxItems)
      options += optionHtml('Max. Items', this.maxItems);
    if (this.uniqueItems)
      options += optionHtml('Unique Items', "true");
    if (this.collectionFormat)
      options += optionHtml('Coll. Format', this.collectionFormat);
  }

  if (this['enum']) {
    var enumString;

    if (type === 'number' || type === 'integer')
      enumString = this['enum'].join(', ');
    else {
      enumString = '"' + this['enum'].join('", "') + '"';
    }

    options += optionHtml('Enum', enumString);
  }     

  if (options.length > 0)
    str = '<span class="propWrap">' + str + '<table class="optionsWrapper"><tr><th colspan="2">' + this.name + '</th></tr>' + options + '</table></span>';
  
  return str;
};

optionHtml = function(label, value) {
  return '<tr><td class="optionName">' + label + ':</td><td>' + value + '</td></tr>';
};

typeFromJsonSchema = function(type, format) {
  var str;
  if(type === 'integer' && format === 'int32')
    str = 'integer';
  else if(type === 'integer' && format === 'int64')
    str = 'long';
  else if(type === 'integer' && typeof format === 'undefined')
    str = 'long';
  else if(type === 'string' && format === 'date-time')
    str = 'date-time';
  else if(type === 'string' && format === 'date')
    str = 'date';
  else if(type === 'number' && format === 'float')
    str = 'float';
  else if(type === 'number' && format === 'double')
    str = 'double';
  else if(type === 'number' && typeof format === 'undefined')
    str = 'double';
  else if(type === 'boolean')
    str = 'boolean';
  else if(type === 'string')
    str = 'string';

  return str;
};

var sampleModels = {};
var cookies = {};
var models = {};

SwaggerClient.prototype.buildFrom1_2Spec = function (response) {
  if (response.apiVersion !== null) {
    this.apiVersion = response.apiVersion;
  }
  this.apis = {};
  this.apisArray = [];
  this.consumes = response.consumes;
  this.produces = response.produces;
  this.authSchemes = response.authorizations;
  this.info = this.convertInfo(response.info);

  var isApi = false, i, res;
  for (i = 0; i < response.apis.length; i++) {
    var api = response.apis[i];
    if (api.operations) {
      var j;
      for (j = 0; j < api.operations.length; j++) {
        operation = api.operations[j];
        isApi = true;
      }
    }
  }
  if (response.basePath)
    this.basePath = response.basePath;
  else if (this.url.indexOf('?') > 0)
    this.basePath = this.url.substring(0, this.url.lastIndexOf('?'));
  else
    this.basePath = this.url;

  if (isApi) {
    var newName = response.resourcePath.replace(/\//g, '');
    this.resourcePath = response.resourcePath;
    res = new SwaggerResource(response, this);
    this.apis[newName] = res;
    this.apisArray.push(res);
    this.finish();
  } else {
    var k;
    this.expectedResourceCount = response.apis.length;
    for (k = 0; k < response.apis.length; k++) {
      var resource = response.apis[k];
      res = new SwaggerResource(resource, this);
      this.apis[res.name] = res;
      this.apisArray.push(res);
    }
  }
  this.isValid = true;
  return this;
};

SwaggerClient.prototype.finish = function() {
  if (typeof this.success === 'function') {
    this.isValid = true;
    this.ready = true;
    this.isBuilt = true;
    this.selfReflect();
    this.success();
  }  
};

SwaggerClient.prototype.buildFrom1_1Spec = function (response) {
  log('This API is using a deprecated version of Swagger!  Please see http://github.com/wordnik/swagger-core/wiki for more info');
  if (response.apiVersion !== null)
    this.apiVersion = response.apiVersion;
  this.apis = {};
  this.apisArray = [];
  this.produces = response.produces;
  this.info = this.convertInfo(response.info);
  var isApi = false, res;
  for (var i = 0; i < response.apis.length; i++) {
    var api = response.apis[i];
    if (api.operations) {
      for (var j = 0; j < api.operations.length; j++) {
        operation = api.operations[j];
        isApi = true;
      }
    }
  }
  if (response.basePath) {
    this.basePath = response.basePath;
  } else if (this.url.indexOf('?') > 0) {
    this.basePath = this.url.substring(0, this.url.lastIndexOf('?'));
  } else {
    this.basePath = this.url;
  }
  if (isApi) {
    var newName = response.resourcePath.replace(/\//g, '');
    this.resourcePath = response.resourcePath;
    res = new SwaggerResource(response, this);
    this.apis[newName] = res;
    this.apisArray.push(res);
    this.finish();
  } else {
    this.expectedResourceCount = response.apis.length;
    for (k = 0; k < response.apis.length; k++) {
      resource = response.apis[k];
      res = new SwaggerResource(resource, this);
      this.apis[res.name] = res;
      this.apisArray.push(res);
    }
  }
  this.isValid = true;
  return this;
};

SwaggerClient.prototype.convertInfo = function (resp) {
  if(typeof resp == 'object') {
    var info = {};

    info.title = resp.title;
    info.description = resp.description;
    info.termsOfService = resp.termsOfServiceUrl;
    info.contact = {};
    info.contact.name = resp.contact;
    info.license = {};
    info.license.name = resp.license;
    info.license.url = resp.licenseUrl;

    return info;
  }
};

SwaggerClient.prototype.selfReflect = function () {
  var resource, tag, ref;
  if (this.apis === null) {
    return false;
  }
  ref = this.apis;
  for (tag in ref) {
    api = ref[tag];
    if (api.ready === null) {
      return false;
    }
    this[tag] = api;
    this[tag].help = __bind(api.help, api);
  }
  this.setConsolidatedModels();
  this.ready = true;
};

SwaggerClient.prototype.setConsolidatedModels = function () {
  var model, modelName, resource, resource_name, i, apis, models, results;
  this.models = {};
  apis = this.apis;
  for (resource_name in apis) {
    resource = apis[resource_name];
    for (modelName in resource.models) {
      if (typeof this.models[modelName] === 'undefined') {
        this.models[modelName] = resource.models[modelName];
        this.modelsArray.push(resource.models[modelName]);
      }
    }
  }
  models = this.modelsArray;
  results = [];
  for (i = 0; i < models.length; i++) {
    model = models[i];
    results.push(model.setReferencedModels(this.models));
  }
  return results;
};

var SwaggerResource = function (resourceObj, api) {
  var _this = this;
  this.api = api;
  this.swaggerRequstHeaders = api.swaggerRequstHeaders;
  this.path = (typeof this.api.resourcePath === 'string') ? this.api.resourcePath : resourceObj.path;
  this.description = resourceObj.description;
  this.authorizations = (resourceObj.authorizations || {});

  var parts = this.path.split('/');
  this.name = parts[parts.length - 1].replace('.{format}', '');
  this.basePath = this.api.basePath;
  this.operations = {};
  this.operationsArray = [];
  this.modelsArray = [];
  this.models = api.models || {};
  this.rawModels = {};
  this.useJQuery = (typeof api.useJQuery !== 'undefined') ? api.useJQuery : null;

  if ((resourceObj.apis) && this.api.resourcePath) {
    this.addApiDeclaration(resourceObj);
  } else {
    if (typeof this.path === 'undefined') {
      this.api.fail('SwaggerResources must have a path.');
    }
    if (this.path.substring(0, 4) === 'http') {
      this.url = this.path.replace('{format}', 'json');
    } else {
      this.url = this.api.basePath + this.path.replace('{format}', 'json');
    }
    this.api.progress('fetching resource ' + this.name + ': ' + this.url);
    var obj = {
      url: this.url,
      method: 'GET',
      useJQuery: this.useJQuery,
      headers: {
        accept: this.swaggerRequstHeaders
      },
      on: {
        response: function (resp) {
          var responseObj = resp.obj || JSON.parse(resp.data);
          _this.api.resourceCount += 1;
          return _this.addApiDeclaration(responseObj);
        },
        error: function (response) {
          _this.api.resourceCount += 1;
          return _this.api.fail('Unable to read api \'' +
          _this.name + '\' from path ' + _this.url + ' (server returned ' + response.statusText + ')');
        }
      }
    };
    var e = typeof window !== 'undefined' ? window : exports;
    e.authorizations.apply(obj);
    new SwaggerHttp().execute(obj);
  }
};

SwaggerResource.prototype.help = function (dontPrint) {
  var i;
  var output = 'operations for the "' + this.name + '" tag';
  for(i = 0; i < this.operationsArray.length; i++) {
    var api = this.operationsArray[i];
    output += '\n  * ' + api.nickname + ': ' + api.description;
  }
  if(dontPrint)
    return output;
  else {
    log(output);
    return output;
  }
};

SwaggerResource.prototype.getAbsoluteBasePath = function (relativeBasePath) {
  var pos, url;
  url = this.api.basePath;
  pos = url.lastIndexOf(relativeBasePath);
  var parts = url.split('/');
  var rootUrl = parts[0] + '//' + parts[2];

  if (relativeBasePath.indexOf('http') === 0)
    return relativeBasePath;
  if (relativeBasePath === '/')
    return rootUrl;
  if (relativeBasePath.substring(0, 1) == '/') {
    // use root + relative
    return rootUrl + relativeBasePath;
  }
  else {
    pos = this.basePath.lastIndexOf('/');
    var base = this.basePath.substring(0, pos);
    if (base.substring(base.length - 1) == '/')
      return base + relativeBasePath;
    else
      return base + '/' + relativeBasePath;
  }
};

SwaggerResource.prototype.addApiDeclaration = function (response) {
  if (typeof response.produces === 'string')
    this.produces = response.produces;
  if (typeof response.consumes === 'string')
    this.consumes = response.consumes;
  if ((typeof response.basePath === 'string') && response.basePath.replace(/\s/g, '').length > 0)
    this.basePath = response.basePath.indexOf('http') === -1 ? this.getAbsoluteBasePath(response.basePath) : response.basePath;
  this.resourcePath = response.resourcePath;
  this.addModels(response.models);
  if (response.apis) {
    for (var i = 0 ; i < response.apis.length; i++) {
      var endpoint = response.apis[i];
      this.addOperations(endpoint.path, endpoint.operations, response.consumes, response.produces);
    }
  }
  this.api[this.name] = this;
  this.ready = true;
  if(this.api.resourceCount === this.api.expectedResourceCount)
    this.api.finish();
  return this;
};

SwaggerResource.prototype.addModels = function (models) {
  if (typeof models === 'object') {
    var modelName;
    for (modelName in models) {
      if (typeof this.models[modelName] === 'undefined') {
        var swaggerModel = new SwaggerModel(modelName, models[modelName]);
        this.modelsArray.push(swaggerModel);
        this.models[modelName] = swaggerModel;
        this.rawModels[modelName] = models[modelName];
      }
    }
    var output = [];
    for (var i = 0; i < this.modelsArray.length; i++) {
      var model = this.modelsArray[i];
      output.push(model.setReferencedModels(this.models));
    }
    return output;
  }
};

SwaggerResource.prototype.addOperations = function (resource_path, ops, consumes, produces) {
  if (ops) {
    var output = [];
    for (var i = 0; i < ops.length; i++) {
      var o = ops[i];
      consumes = this.consumes;
      produces = this.produces;
      if (typeof o.consumes !== 'undefined')
        consumes = o.consumes;
      else
        consumes = this.consumes;

      if (typeof o.produces !== 'undefined')
        produces = o.produces;
      else
        produces = this.produces;
      var type = (o.type || o.responseClass);

      if (type === 'array') {
        ref = null;
        if (o.items)
          ref = o.items.type || o.items.$ref;
        type = 'array[' + ref + ']';
      }
      var responseMessages = o.responseMessages;
      var method = o.method;
      if (o.httpMethod) {
        method = o.httpMethod;
      }
      if (o.supportedContentTypes) {
        consumes = o.supportedContentTypes;
      }
      if (o.errorResponses) {
        responseMessages = o.errorResponses;
        for (var j = 0; j < responseMessages.length; j++) {
          r = responseMessages[j];
          r.message = r.reason;
          r.reason = null;
        }
      }
      o.nickname = this.sanitize(o.nickname);
      var op = new SwaggerOperation(o.nickname,
          resource_path,
          method,
          o.parameters,
          o.summary,
          o.notes,
          type,
          responseMessages, 
          this, 
          consumes, 
          produces, 
          o.authorizations, 
          o.deprecated);

      this.operations[op.nickname] = op;
      output.push(this.operationsArray.push(op));
    }
    return output;
  }
};

SwaggerResource.prototype.sanitize = function (nickname) {
  var op;
  op = nickname.replace(/[\s!@#$%^&*()_+=\[{\]};:<>|.\/?,\\'""-]/g, '_');
  op = op.replace(/((_){2,})/g, '_');
  op = op.replace(/^(_)*/g, '');
  op = op.replace(/([_])*$/g, '');
  return op;
};

var SwaggerModel = function (modelName, obj) {
  this.name = typeof obj.id !== 'undefined' ? obj.id : modelName;
  this.properties = [];
  var propertyName;
  for (propertyName in obj.properties) {
    if (obj.required) {
      var value;
      for (value in obj.required) {
        if (propertyName === obj.required[value]) {
          obj.properties[propertyName].required = true;
        }
      }
    }
    var prop = new SwaggerModelProperty(propertyName, obj.properties[propertyName], this);
    this.properties.push(prop);
  }
};

SwaggerModel.prototype.setReferencedModels = function (allModels) {
  var results = [];
  for (var i = 0; i < this.properties.length; i++) {
    var property = this.properties[i];
    var type = property.type || property.dataType;
    if (allModels[type])
      results.push(property.refModel = allModels[type]);
    else if ((property.refDataType) && (allModels[property.refDataType]))
      results.push(property.refModel = allModels[property.refDataType]);
    else
      results.push(void 0);
  }
  return results;
};

SwaggerModel.prototype.getMockSignature = function (modelsToIgnore) {
  var i, prop, propertiesStr = [];
  for (i = 0; i < this.properties.length; i++) {
    prop = this.properties[i];
    propertiesStr.push(prop.toString());
  }

  var strong = '<span class="strong">';
  var strongClose = '</span>';
  var classOpen = strong + this.name + ' {' + strongClose;
  var classClose = strong + '}' + strongClose;
  var returnVal = classOpen + '<div>' + propertiesStr.join(',</div><div>') + '</div>' + classClose;
  if (!modelsToIgnore)
    modelsToIgnore = [];
  modelsToIgnore.push(this.name);

  for (i = 0; i < this.properties.length; i++) {
    prop = this.properties[i];
    if ((prop.refModel) && modelsToIgnore.indexOf(prop.refModel.name) === -1) {
      returnVal = returnVal + ('<br>' + prop.refModel.getMockSignature(modelsToIgnore));
    }
  }
  return returnVal;
};

SwaggerModel.prototype.createJSONSample = function (modelsToIgnore) {
  if (sampleModels[this.name]) {
    return sampleModels[this.name];
  }
  else {
    var result = {};
    modelsToIgnore = (modelsToIgnore || []);
    modelsToIgnore.push(this.name);
    for (var i = 0; i < this.properties.length; i++) {
      var prop = this.properties[i];
      result[prop.name] = prop.getSampleValue(modelsToIgnore);
    }
    modelsToIgnore.pop(this.name);
    return result;
  }
};

var SwaggerModelProperty = function (name, obj, model) {
  this.name = name;
  this.dataType = obj.type || obj.dataType || obj.$ref;
  this.isCollection = this.dataType && (this.dataType.toLowerCase() === 'array' || this.dataType.toLowerCase() === 'list' || this.dataType.toLowerCase() === 'set');
  this.descr = obj.description;
  this.required = obj.required;
  this.defaultValue = applyModelPropertyMacro(obj, model);
  if (obj.items) {
    if (obj.items.type) {
      this.refDataType = obj.items.type;
    }
    if (obj.items.$ref) {
      this.refDataType = obj.items.$ref;
    }
  }
  this.dataTypeWithRef = this.refDataType ? (this.dataType + '[' + this.refDataType + ']') : this.dataType;
  if (obj.allowableValues) {
    this.valueType = obj.allowableValues.valueType;
    this.values = obj.allowableValues.values;
    if (this.values) {
      this.valuesString = '\'' + this.values.join('\' or \'') + '\'';
    }
  }
  if (obj['enum']) {
    this.valueType = 'string';
    this.values = obj['enum'];
    if (this.values) {
      this.valueString = '\'' + this.values.join('\' or \'') + '\'';
    }
  }
};

SwaggerModelProperty.prototype.getSampleValue = function (modelsToIgnore) {
  var result;
  if ((this.refModel) && (modelsToIgnore.indexOf(this.refModel.name) === -1)) {
    result = this.refModel.createJSONSample(modelsToIgnore);
  } else {
    if (this.isCollection) {
      result = this.toSampleValue(this.refDataType);
    } else {
      result = this.toSampleValue(this.dataType);
    }
  }
  if (this.isCollection) {
    return [result];
  } else {
    return result;
  }
};

SwaggerModelProperty.prototype.toSampleValue = function (value) {
  var result;
  if ((typeof this.defaultValue !== 'undefined') && this.defaultValue) {
    result = this.defaultValue;
  } else if (value === 'integer') {
    result = 0;
  } else if (value === 'boolean') {
    result = false;
  } else if (value === 'double' || value === 'number') {
    result = 0.0;
  } else if (value === 'string') {
    result = '';
  } else {
    result = value;
  }
  return result;
};

SwaggerModelProperty.prototype.toString = function () {
  var req = this.required ? 'propReq' : 'propOpt';
  var str = '<span class="propName ' + req + '">' + this.name + '</span> (<span class="propType">' + this.dataTypeWithRef + '</span>';
  if (!this.required) {
    str += ', <span class="propOptKey">optional</span>';
  }
  str += ')';
  if (this.values) {
    str += ' = <span class="propVals">[\'' + this.values.join('\' or \'') + '\']</span>';
  }
  if (this.descr) {
    str += ': <span class="propDesc">' + this.descr + '</span>';
  }
  return str;
};

var SwaggerOperation = function (nickname, path, method, parameters, summary, notes, type, responseMessages, resource, consumes, produces, authorizations, deprecated) {
  var _this = this;

  var errors = [];
  this.nickname = (nickname || errors.push('SwaggerOperations must have a nickname.'));
  this.path = (path || errors.push('SwaggerOperation ' + nickname + ' is missing path.'));
  this.method = (method || errors.push('SwaggerOperation ' + nickname + ' is missing method.'));
  this.parameters = parameters ? parameters : [];
  this.summary = summary;
  this.notes = notes;
  this.type = type;
  this.responseMessages = (responseMessages || []);
  this.resource = (resource || errors.push('Resource is required'));
  this.consumes = consumes;
  this.produces = produces;
  this.authorizations = typeof authorizations !== 'undefined' ? authorizations : resource.authorizations;
  this.deprecated = deprecated;
  this['do'] = __bind(this['do'], this);


  if(typeof this.deprecated === 'string') {
    switch(this.deprecated.toLowerCase()) {
      case 'true': case 'yes': case '1': {
        this.deprecated = true;
        break;
      }
      case 'false': case 'no': case '0': case null: {
        this.deprecated = false;
        break;
      }
      default: this.deprecated = Boolean(this.deprecated);
    }
  }

  if (errors.length > 0) {
    console.error('SwaggerOperation errors', errors, arguments);
    this.resource.api.fail(errors);
  }

  this.path = this.path.replace('{format}', 'json');
  this.method = this.method.toLowerCase();
  this.isGetMethod = this.method === 'get';

  var i, j, v;
  this.resourceName = this.resource.name;
  if (typeof this.type !== 'undefined' && this.type === 'void')
    this.type = null;
  else {
    this.responseClassSignature = this.getSignature(this.type, this.resource.models);
    this.responseSampleJSON = this.getSampleJSON(this.type, this.resource.models);
  }

  for (i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    // might take this away
    param.name = param.name || param.type || param.dataType;
    // for 1.1 compatibility
    type = param.type || param.dataType;
    if (type === 'array') {
      type = 'array[' + (param.items.$ref ? param.items.$ref : param.items.type) + ']';
    }
    param.type = type;

    if (type && type.toLowerCase() === 'boolean') {
      param.allowableValues = {};
      param.allowableValues.values = ['true', 'false'];
    }
    param.signature = this.getSignature(type, this.resource.models);
    param.sampleJSON = this.getSampleJSON(type, this.resource.models);

    var enumValue = param['enum'];
    if (typeof enumValue !== 'undefined') {
      param.isList = true;
      param.allowableValues = {};
      param.allowableValues.descriptiveValues = [];

      for (j = 0; j < enumValue.length; j++) {
        v = enumValue[j];
        if (param.defaultValue) {
          param.allowableValues.descriptiveValues.push({
            value: String(v),
            isDefault: (v === param.defaultValue)
          });
        }
        else {
          param.allowableValues.descriptiveValues.push({
            value: String(v),
            isDefault: false
          });
        }
      }
    }
    else if (param.allowableValues) {
      if (param.allowableValues.valueType === 'RANGE')
        param.isRange = true;
      else
        param.isList = true;
      if (param.allowableValues) {
        param.allowableValues.descriptiveValues = [];
        if (param.allowableValues.values) {
          for (j = 0; j < param.allowableValues.values.length; j++) {
            v = param.allowableValues.values[j];
            if (param.defaultValue !== null) {
              param.allowableValues.descriptiveValues.push({
                value: String(v),
                isDefault: (v === param.defaultValue)
              });
            }
            else {
              param.allowableValues.descriptiveValues.push({
                value: String(v),
                isDefault: false
              });
            }
          }
        }
      }
    }
    param.defaultValue = applyParameterMacro(this, param);
  }
  var defaultSuccessCallback = this.resource.api.defaultSuccessCallback || null;
  var defaultErrorCallback = this.resource.api.defaultErrorCallback || null;

  this.resource[this.nickname] = function (args, opts, callback, error) {
    var arg1, arg2, arg3, arg4;
    if(typeof args === 'function') {  // right shift 3
      arg1 = {}; arg2 = {}; arg3 = args; arg4 = opts;
    }
    else if(typeof args === 'object' && typeof opts === 'function') { // right shift 2
      arg1 = args; arg2 = {}; arg3 = opts; arg4 = callback;
    }
    else {
      arg1 = args; arg2 = opts; arg3 = callback; arg4 = error;
    }
    return _this['do'](arg1 || {}, arg2 || {}, arg3 || defaultSuccessCallback, arg4 || defaultErrorCallback);
  };

  this.resource[this.nickname].help = function (dontPrint) {
    return _this.help(dontPrint);
  };
  this.resource[this.nickname].asCurl = function (args) {
    return _this.asCurl(args);
  };
};

SwaggerOperation.prototype.isListType = function (type) {
  if (type && type.indexOf('[') >= 0) {
    return type.substring(type.indexOf('[') + 1, type.indexOf(']'));
  } else {
    return void 0;
  }
};

SwaggerOperation.prototype.getSignature = function (type, models) {
  var isPrimitive, listType;
  listType = this.isListType(type);
  isPrimitive = ((typeof listType !== 'undefined') && models[listType]) || (typeof models[type] !== 'undefined') ? false : true;
  if (isPrimitive) {
    return type;
  } else {
    if (typeof listType !== 'undefined') {
      return models[listType].getMockSignature();
    } else {
      return models[type].getMockSignature();
    }
  }
};

SwaggerOperation.prototype.getSampleJSON = function (type, models) {
  var isPrimitive, listType, val;
  listType = this.isListType(type);
  isPrimitive = ((typeof listType !== 'undefined') && models[listType]) || (typeof models[type] !== 'undefined') ? false : true;
  val = isPrimitive ? void 0 : (listType ? models[listType].createJSONSample() : models[type].createJSONSample());
  if (val) {
    val = listType ? [val] : val;
    if (typeof val == 'string')
      return val;
    else if (typeof val === 'object') {
      var t = val;
      if (val instanceof Array && val.length > 0) {
        t = val[0];
      }
      if (t.nodeName) {
        var xmlString = new XMLSerializer().serializeToString(t);
        return this.formatXml(xmlString);
      }
      else
        return JSON.stringify(val, null, 2);
    }
    else
      return val;
  }
};

SwaggerOperation.prototype['do'] = function (args, opts, callback, error) {
  var key, param, params, possibleParams = [], req, value;

  if (typeof error !== 'function') {
    error = function (xhr, textStatus, error) {
      return log(xhr, textStatus, error);
    };
  }

  if (typeof callback !== 'function') {
    callback = function (response) {
      var content;
      content = null;
      if (response !== null) {
        content = response.data;
      } else {
        content = 'no data';
      }
      return log('default callback: ' + content);
    };
  }

  params = {};
  params.headers = [];
  if (args.headers) {
    params.headers = args.headers;
    delete args.headers;
  }
  // allow override from the opts
  if(opts && opts.responseContentType) {
    params.headers['Content-Type'] = opts.responseContentType;
  }
  if(opts && opts.requestContentType) {
    params.headers.Accept = opts.requestContentType;
  }

  for (var i = 0; i < this.parameters.length; i++) {
    param = this.parameters[i];
    if (param.paramType === 'header') {
      if (typeof args[param.name] !== 'undefined')
        params.headers[param.name] = args[param.name];
    }
    else if (param.paramType === 'form' || param.paramType.toLowerCase() === 'file')
      possibleParams.push(param);
    else if (param.paramType === 'body' && param.name !== 'body' && typeof args[param.name] !== 'undefined') {
      if (args.body) {
        throw new Error('Saw two body params in an API listing; expecting a max of one.');
      }
      args.body = args[param.name];
    }
  }

  if (typeof args.body !== 'undefined') {
    params.body = args.body;
    delete args.body;
  }

  if (possibleParams) {
    for (key in possibleParams) {
      value = possibleParams[key];
      if (args[value.name]) {
        params[value.name] = args[value.name];
      }
    }
  }

  req = new SwaggerRequest(this.method, this.urlify(args), params, opts, callback, error, this);
  if (opts.mock) {
    return req;
  } else {
    return true;
  }
};

SwaggerOperation.prototype.pathJson = function () {
  return this.path.replace('{format}', 'json');
};

SwaggerOperation.prototype.pathXml = function () {
  return this.path.replace('{format}', 'xml');
};

SwaggerOperation.prototype.encodePathParam = function (pathParam) {
  var encParts, part, parts, _i, _len;
  pathParam = pathParam.toString();
  if (pathParam.indexOf('/') === -1) {
    return encodeURIComponent(pathParam);
  } else {
    parts = pathParam.split('/');
    encParts = [];
    for (_i = 0, _len = parts.length; _i < _len; _i++) {
      part = parts[_i];
      encParts.push(encodeURIComponent(part));
    }
    return encParts.join('/');
  }
};

SwaggerOperation.prototype.urlify = function (args) {
  var i, j, param, url;
  // ensure no double slashing...
  if(this.resource.basePath.length > 1 && this.resource.basePath.slice(-1) === '/' && this.pathJson().charAt(0) === '/')
    url = this.resource.basePath + this.pathJson().substring(1);
  else
    url = this.resource.basePath + this.pathJson();
  var params = this.parameters;
  for (i = 0; i < params.length; i++) {
    param = params[i];
    if (param.paramType === 'path') {
      if (typeof args[param.name] !== 'undefined') {
        // apply path params and remove from args
        var reg = new RegExp('\\{\\s*?' + param.name + '[^\\{\\}\\/]*(?:\\{.*?\\}[^\\{\\}\\/]*)*\\}(?=(\\/?|$))', 'gi');
        url = url.replace(reg, this.encodePathParam(args[param.name]));
        delete args[param.name];
      }
      else
        throw '' + param.name + ' is a required path param.';
    }
  }

  var queryParams = '';
  for (i = 0; i < params.length; i++) {
    param = params[i];
    if(param.paramType === 'query') {
      if (queryParams !== '')
        queryParams += '&';    
      if (Array.isArray(param)) {
        var output = '';   
        for(j = 0; j < param.length; j++) {    
          if(j > 0)    
            output += ',';   
          output += encodeURIComponent(param[j]);    
        }    
        queryParams += encodeURIComponent(param.name) + '=' + output;    
      }
      else {
        if (typeof args[param.name] !== 'undefined') {
          queryParams += encodeURIComponent(param.name) + '=' + encodeURIComponent(args[param.name]);
        } else {
          if (param.required)
            throw '' + param.name + ' is a required query param.';
        }
      }
    }
  }
  if ((queryParams) && queryParams.length > 0)
    url += '?' + queryParams;
  return url;
};

SwaggerOperation.prototype.supportHeaderParams = function () {
  return this.resource.api.supportHeaderParams;
};

SwaggerOperation.prototype.supportedSubmitMethods = function () {
  return this.resource.api.supportedSubmitMethods;
};

SwaggerOperation.prototype.getQueryParams = function (args) {
  return this.getMatchingParams(['query'], args);
};

SwaggerOperation.prototype.getHeaderParams = function (args) {
  return this.getMatchingParams(['header'], args);
};

SwaggerOperation.prototype.getMatchingParams = function (paramTypes, args) {
  var matchingParams = {};
  var params = this.parameters;
  for (var i = 0; i < params.length; i++) {
    param = params[i];
    if (args && args[param.name])
      matchingParams[param.name] = args[param.name];
  }
  var headers = this.resource.api.headers;
  var name;
  for (name in headers) {
    var value = headers[name];
    matchingParams[name] = value;
  }
  return matchingParams;
};

SwaggerOperation.prototype.help = function (dontPrint) {
  var msg = this.nickname + ': ' + this.summary;
  var params = this.parameters;
  for (var i = 0; i < params.length; i++) {
    var param = params[i];
    msg += '\n* ' + param.name + (param.required ? ' (required)' : '') + " - " + param.description;
  }
  if(dontPrint)
    return msg;
  else {
    console.log(msg);
    return msg;
  }
};

SwaggerOperation.prototype.asCurl = function (args) {
  var results = [];
  var i;

  var headers = SwaggerRequest.prototype.setHeaders(args, {}, this);    
  for(i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    if(param.paramType && param.paramType === 'header' && args[param.name]) {
      headers[param.name] = args[param.name];
    }
  }

  var key;
  for (key in headers) {
    results.push('--header "' + key + ': ' + headers[key] + '"');
  }
  return 'curl ' + (results.join(' ')) + ' ' + this.urlify(args);
};

SwaggerOperation.prototype.formatXml = function (xml) {
  var contexp, formatted, indent, lastType, lines, ln, pad, reg, transitions, wsexp, _fn, _i, _len;
  reg = /(>)(<)(\/*)/g;
  wsexp = /[ ]*(.*)[ ]+\n/g;
  contexp = /(<.+>)(.+\n)/g;
  xml = xml.replace(reg, '$1\n$2$3').replace(wsexp, '$1\n').replace(contexp, '$1\n$2');
  pad = 0;
  formatted = '';
  lines = xml.split('\n');
  indent = 0;
  lastType = 'other';
  transitions = {
    'single->single': 0,
    'single->closing': -1,
    'single->opening': 0,
    'single->other': 0,
    'closing->single': 0,
    'closing->closing': -1,
    'closing->opening': 0,
    'closing->other': 0,
    'opening->single': 1,
    'opening->closing': 0,
    'opening->opening': 1,
    'opening->other': 1,
    'other->single': 0,
    'other->closing': -1,
    'other->opening': 0,
    'other->other': 0
  };
  _fn = function (ln) {
    var fromTo, j, key, padding, type, types, value;
    types = {
      single: Boolean(ln.match(/<.+\/>/)),
      closing: Boolean(ln.match(/<\/.+>/)),
      opening: Boolean(ln.match(/<[^!?].*>/))
    };
    type = ((function () {
      var _results;
      _results = [];
      for (key in types) {
        value = types[key];
        if (value) {
          _results.push(key);
        }
      }
      return _results;
    })())[0];
    type = type === void 0 ? 'other' : type;
    fromTo = lastType + '->' + type;
    lastType = type;
    padding = '';
    indent += transitions[fromTo];
    padding = ((function () {
      var _j, _ref5, _results;
      _results = [];
      for (j = _j = 0, _ref5 = indent; 0 <= _ref5 ? _j < _ref5 : _j > _ref5; j = 0 <= _ref5 ? ++_j : --_j) {
        _results.push('  ');
      }
      return _results;
    })()).join('');
    if (fromTo === 'opening->closing') {
      formatted = formatted.substr(0, formatted.length - 1) + ln + '\n';
    } else {
      formatted += padding + ln + '\n';
    }
  };
  for (_i = 0, _len = lines.length; _i < _len; _i++) {
    ln = lines[_i];
    _fn(ln);
  }
  return formatted;
};

var SwaggerRequest = function (type, url, params, opts, successCallback, errorCallback, operation, execution) {
  var _this = this;
  var errors = [];

  this.useJQuery = (typeof operation.resource.useJQuery !== 'undefined' ? operation.resource.useJQuery : null);
  this.type = (type || errors.push('SwaggerRequest type is required (get/post/put/delete/patch/options).'));
  this.url = (url || errors.push('SwaggerRequest url is required.'));
  this.params = params;
  this.opts = opts;
  this.successCallback = (successCallback || errors.push('SwaggerRequest successCallback is required.'));
  this.errorCallback = (errorCallback || errors.push('SwaggerRequest error callback is required.'));
  this.operation = (operation || errors.push('SwaggerRequest operation is required.'));
  this.execution = execution;
  this.headers = (params.headers || {});

  if (errors.length > 0) {
    throw errors;
  }

  this.type = this.type.toUpperCase();

  // set request, response content type headers
  var headers = this.setHeaders(params, opts, this.operation);
  var body = params.body;

  // encode the body for form submits
  if (headers['Content-Type']) {
    var key, value, values = {}, i;
    var operationParams = this.operation.parameters;
    for (i = 0; i < operationParams.length; i++) {
      var param = operationParams[i];
      if (param.paramType === 'form')
        values[param.name] = param;
    }

    if (headers['Content-Type'].indexOf('application/x-www-form-urlencoded') === 0) {
      var encoded = '';
      for (key in values) {
        value = this.params[key];
        if (typeof value !== 'undefined') {
          if (encoded !== '')
            encoded += '&';
          encoded += encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }
      }
      body = encoded;
    }
    else if (headers['Content-Type'].indexOf('multipart/form-data') === 0) {
      // encode the body for form submits
      var data = '';
      var boundary = '----SwaggerFormBoundary' + Date.now();
      for (key in values) {
        value = this.params[key];
        if (typeof value !== 'undefined') {
          data += '--' + boundary + '\n';
          data += 'Content-Disposition: form-data; name="' + key + '"';
          data += '\n\n';
          data += value + '\n';
        }
      }
      data += '--' + boundary + '--\n';
      headers['Content-Type'] = 'multipart/form-data; boundary=' + boundary;
      body = data;
    }
  }

  var obj;
  if (!((this.headers) && (this.headers.mock))) {
    obj = {
      url: this.url,
      method: this.type,
      headers: headers,
      body: body,
      useJQuery: this.useJQuery,
      on: {
        error: function (response) {
          return _this.errorCallback(response, _this.opts.parent);
        },
        redirect: function (response) {
          return _this.successCallback(response, _this.opts.parent);
        },
        307: function (response) {
          return _this.successCallback(response, _this.opts.parent);
        },
        response: function (response) {
          return _this.successCallback(response, _this.opts.parent);
        }
      }
    };

    var status = false;
    if (this.operation.resource && this.operation.resource.api && this.operation.resource.api.clientAuthorizations) {
      // Get the client authorizations from the resource declaration
      status = this.operation.resource.api.clientAuthorizations.apply(obj, this.operation.authorizations);
    } else {
      // Get the client authorization from the default authorization declaration
      var e;
      if (typeof window !== 'undefined') {
        e = window;
      } else {
        e = exports;
      }
      status = e.authorizations.apply(obj, this.operation.authorizations);
    }

    if (!opts.mock) {
      if (status !== false) {
        new SwaggerHttp().execute(obj);
      } else {
        obj.canceled = true;
      }
    } else {
      return obj;
    }
  }
  return obj;
};

SwaggerRequest.prototype.setHeaders = function (params, opts, operation) {
  // default type
  var accepts = opts.responseContentType || 'application/json';
  var consumes = opts.requestContentType || 'application/json';

  var allDefinedParams = operation.parameters;
  var definedFormParams = [];
  var definedFileParams = [];
  var body = params.body;
  var headers = {};

  // get params from the operation and set them in definedFileParams, definedFormParams, headers
  var i;
  for (i = 0; i < allDefinedParams.length; i++) {
    var param = allDefinedParams[i];
    if (param.paramType === 'form')
      definedFormParams.push(param);
    else if (param.paramType === 'file')
      definedFileParams.push(param);
    else if (param.paramType === 'header' && this.params.headers) {
      var key = param.name;
      var headerValue = this.params.headers[param.name];
      if (typeof this.params.headers[param.name] !== 'undefined')
        headers[key] = headerValue;
    }
  }

  // if there's a body, need to set the accepts header via requestContentType
  if (body && (this.type === 'POST' || this.type === 'PUT' || this.type === 'PATCH' || this.type === 'DELETE')) {
    if (this.opts.requestContentType)
      consumes = this.opts.requestContentType;
  } else {
    // if any form params, content type must be set
    if (definedFormParams.length > 0) {
      if (definedFileParams.length > 0)
        consumes = 'multipart/form-data';
      else
        consumes = 'application/x-www-form-urlencoded';
    }
    else if (this.type === 'DELETE')
      body = '{}';
    else if (this.type != 'DELETE')
      consumes = null;
  }

  if (consumes && this.operation.consumes) {
    if (this.operation.consumes.indexOf(consumes) === -1) {
      log('server doesn\'t consume ' + consumes + ', try ' + JSON.stringify(this.operation.consumes));
    }
  }

  if (this.opts && this.opts.responseContentType) {
    accepts = this.opts.responseContentType;
  } else {
    accepts = 'application/json';
  }
  if (accepts && operation.produces) {
    if (operation.produces.indexOf(accepts) === -1) {
      log('server can\'t produce ' + accepts);
    }
  }

  if ((consumes && body !== '') || (consumes === 'application/x-www-form-urlencoded'))
    headers['Content-Type'] = consumes;
  if (accepts)
    headers.Accept = accepts;
  return headers;
};

/**
 * SwaggerHttp is a wrapper for executing requests
 */
var SwaggerHttp = function() {};

SwaggerHttp.prototype.execute = function(obj, opts) {
  if(obj && (typeof obj.useJQuery === 'boolean'))
    this.useJQuery = obj.useJQuery;
  else
    this.useJQuery = this.isIE8();

  if(obj && typeof obj.body === 'object') {
    if(obj.body.type && obj.body.type !== 'formData')
      obj.body = JSON.stringify(obj.body);
    else {
      obj.contentType = false;
      obj.processData = false;
      // delete obj.cache;
      delete obj.headers['Content-Type'];
    }
  }

  if(this.useJQuery)
    return new JQueryHttpClient(opts).execute(obj);
  else
    return new ShredHttpClient(opts).execute(obj);
};

SwaggerHttp.prototype.isIE8 = function() {
  var detectedIE = false;
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    nav = navigator.userAgent.toLowerCase();
    if (nav.indexOf('msie') !== -1) {
      var version = parseInt(nav.split('msie')[1]);
      if (version <= 8) {
        detectedIE = true;
      }
    }
  }
  return detectedIE;
};

/*
 * JQueryHttpClient lets a browser take advantage of JQuery's cross-browser magic.
 * NOTE: when jQuery is available it will export both '$' and 'jQuery' to the global space.
 *       Since we are using closures here we need to alias it for internal use.
 */
var JQueryHttpClient = function(options) {
  "use strict";
  if(!jQuery){
    var jQuery = window.jQuery;
  }
};

JQueryHttpClient.prototype.execute = function(obj) {
  var cb = obj.on;
  var request = obj;

  obj.type = obj.method;
  obj.cache = false;
  delete obj.useJQuery;

  /*
  obj.beforeSend = function(xhr) {
    var key, results;
    if (obj.headers) {
      results = [];
      for (key in obj.headers) {
        if (key.toLowerCase() === "content-type") {
          results.push(obj.contentType = obj.headers[key]);
        } else if (key.toLowerCase() === "accept") {
          results.push(obj.accepts = obj.headers[key]);
        } else {
          results.push(xhr.setRequestHeader(key, obj.headers[key]));
        }
      }
      return results;
    }
  };*/

  obj.data = obj.body;
  delete obj.body;
  obj.complete = function(response, textStatus, opts) {
    var headers = {},
      headerArray = response.getAllResponseHeaders().split("\n");

    for(var i = 0; i < headerArray.length; i++) {
      var toSplit = headerArray[i].trim();
      if(toSplit.length === 0)
        continue;
      var separator = toSplit.indexOf(":");
      if(separator === -1) {
        // Name but no value in the header
        headers[toSplit] = null;
        continue;
      }
      var name = toSplit.substring(0, separator).trim(),
        value = toSplit.substring(separator + 1).trim();
      headers[name] = value;
    }

    var out = {
      url: request.url,
      method: request.method,
      status: response.status,
      statusText: response.statusText,
      data: response.responseText,
      headers: headers
    };

    var contentType = (headers["content-type"]||headers["Content-Type"]||null);
    if(contentType) {
      if(contentType.indexOf("application/json") === 0 || contentType.indexOf("+json") > 0) {
        try {
          out.obj = response.responseJSON || JSON.parse(out.data) || {};
        } catch (ex) {
          // do not set out.obj
          log("unable to parse JSON content");
        }
      }
    }

    if(response.status >= 200 && response.status < 300)
      cb.response(out);
    else if(response.status === 0 || (response.status >= 400 && response.status < 599))
      cb.error(out);
    else
      return cb.response(out);
  };

  jQuery.support.cors = true;
  return jQuery.ajax(obj);
};

/*
 * ShredHttpClient is a light-weight, node or browser HTTP client
 */
var ShredHttpClient = function(opts) {
  this.opts = (opts||{});
  this.isInitialized = false;

  var identity, toString;

  if (typeof window !== 'undefined') {
    this.Shred = require("./shred");
    this.content = require("./shred/content");
  }
  else
    this.Shred = require("shred");
  this.shred = new this.Shred(opts);
};

ShredHttpClient.prototype.initShred = function () {
  this.isInitialized = true;
  this.registerProcessors(this.shred);
};

ShredHttpClient.prototype.registerProcessors = function(shred) {
  var identity = function(x) {
    return x;
  };
  var toString = function(x) {
    return x.toString();
  };

  if (typeof window !== 'undefined') {
    this.content.registerProcessor(["application/json; charset=utf-8", "application/json", "json"], {
      parser: identity,
      stringify: toString
    });
  } else {
    this.Shred.registerProcessor(["application/json; charset=utf-8", "application/json", "json"], {
      parser: identity,
      stringify: toString
    });
  }
};

ShredHttpClient.prototype.execute = function(obj) {
  if(!this.isInitialized)
    this.initShred();

  var cb = obj.on, res;
  var transform = function(response) {
    var out = {
      headers: response._headers,
      url: response.request.url,
      method: response.request.method,
      status: response.status,
      data: response.content.data
    };

    var headers = response._headers.normalized || response._headers;
    var contentType = (headers["content-type"]||headers["Content-Type"]||null);

    if(contentType) {
      if(contentType.indexOf("application/json") === 0 || contentType.indexOf("+json") > 0) {
        if(response.content.data && response.content.data !== "")
          try{
            out.obj = JSON.parse(response.content.data);
          }
          catch (e) {
            // unable to parse
          }
        else
          out.obj = {};
      }
    }
    return out;
  };

  // Transform an error into a usable response-like object
  var transformError = function (error) {
    var out = {
      // Default to a status of 0 - The client will treat this as a generic permissions sort of error
      status: 0,
      data: error.message || error
    };

    if (error.code) {
      out.obj = error;

      if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
        // We can tell the client that this should be treated as a missing resource and not as a permissions thing
        out.status = 404;
      }
    }
    return out;
  };

  res = {
    error: function (response) {
      if (obj)
        return cb.error(transform(response));
    },
    // Catch the Shred error raised when the request errors as it is made (i.e. No Response is coming)
    request_error: function (err) {
      if (obj)
        return cb.error(transformError(err));
    },
    response: function (response) {
      if (obj) {
        return cb.response(transform(response));
      }
    }
  };
  if (obj) {
    obj.on = res;
  }
  return this.shred.request(obj);
};


var e = (typeof window !== 'undefined' ? window : exports);

e.authorizations = authorizations = new SwaggerAuthorizations();
e.ApiKeyAuthorization = ApiKeyAuthorization;
e.PasswordAuthorization = PasswordAuthorization;
e.CookieAuthorization = CookieAuthorization;
e.SwaggerClient = SwaggerClient;
e.SwaggerApi = SwaggerClient;
e.Operation = Operation;
e.Model = Model;
e.addModel = addModel;
e.Resolver = Resolver;
e.Property = Property;
})();

var appName;
var popupMask;
var popupDialog;
var clientId;
var realm;
var oauth2KeyName;
var redirect_uri;

function handleLogin() {
  var scopes = [];

  var auths = window.swaggerUi.api.authSchemes || window.swaggerUi.api.securityDefinitions;
  if(auths) {
    var key;
    var defs = auths;
    for(key in defs) {
      var auth = defs[key];
      if(auth.type === 'oauth2' && auth.scopes) {
        oauth2KeyName = key;
        var scope;
        if(Array.isArray(auth.scopes)) {
          // 1.2 support
          var i;
          for(i = 0; i < auth.scopes.length; i++) {
            scopes.push(auth.scopes[i]);
          }
        }
        else {
          // 2.0 support
          for(scope in auth.scopes) {
            scopes.push({scope: scope, description: auth.scopes[scope]});
          }
        }
      }
    }
  }

  if(window.swaggerUi.api
    && window.swaggerUi.api.info) {
    appName = window.swaggerUi.api.info.title;
  }

  popupDialog = $(
    [
      '<div class="api-popup-dialog">',
      '<div class="api-popup-title">Select OAuth2.0 Scopes</div>',
      '<div class="api-popup-content">',
        '<p>Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.',
          '<a href="#">Learn how to use</a>',
        '</p>',
        '<p><strong>' + appName + '</strong> API requires the following scopes. Select which ones you want to grant to Swagger UI.</p>',
        '<ul class="api-popup-scopes">',
        '</ul>',
        '<p class="error-msg"></p>',
        '<div class="api-popup-actions"><button class="api-popup-authbtn api-button green" type="button">Authorize</button><button class="api-popup-cancel api-button gray" type="button">Cancel</button></div>',
      '</div>',
      '</div>'].join(''));
  $(document.body).append(popupDialog);

  popup = popupDialog.find('ul.api-popup-scopes').empty();
  for (i = 0; i < scopes.length; i ++) {
    scope = scopes[i];
    str = '<li><input type="checkbox" id="scope_' + i + '" scope="' + scope.scope + '"/>' + '<label for="scope_' + i + '">' + scope.scope;
    if (scope.description) {
      str += '<br/><span class="api-scope-desc">' + scope.description + '</span>';
    }
    str += '</label></li>';
    popup.append(str);
  }

  var $win = $(window),
    dw = $win.width(),
    dh = $win.height(),
    st = $win.scrollTop(),
    dlgWd = popupDialog.outerWidth(),
    dlgHt = popupDialog.outerHeight(),
    top = (dh -dlgHt)/2 + st,
    left = (dw - dlgWd)/2;

  popupDialog.css({
    top: (top < 0? 0 : top) + 'px',
    left: (left < 0? 0 : left) + 'px'
  });

  popupDialog.find('button.api-popup-cancel').click(function() {
    popupMask.hide();
    popupDialog.hide();
    popupDialog.empty();
    popupDialog = [];
  });

  $('button.api-popup-authbtn').unbind();
  popupDialog.find('button.api-popup-authbtn').click(function() {
    popupMask.hide();
    popupDialog.hide();

    var authSchemes = window.swaggerUi.api.authSchemes;
    var host = window.location;
    var pathname = location.pathname.substring(0, location.pathname.lastIndexOf("/"));
    var redirectUrl = host.protocol + '//' + host.host + pathname + '/o2c.html';
    var url = null;

    for (var key in authSchemes) {
      if (authSchemes.hasOwnProperty(key)) {
        var flow = authSchemes[key].flow;
        
        if(authSchemes[key].type === 'oauth2' && flow && (flow === 'implicit' || flow === 'accessCode')) {
          var dets = authSchemes[key];
          url = dets.authorizationUrl + '?response_type=' + (flow === 'implicit' ? 'token' : 'code');
          window.swaggerUi.tokenName = dets.tokenName || 'access_token';
          window.swaggerUi.tokenUrl = (flow === 'accessCode' ? dets.tokenUrl : null);          
        }
        else if(authSchemes[key].grantTypes) {
          // 1.2 support
          var o = authSchemes[key].grantTypes;
          for(var t in o) {
            if(o.hasOwnProperty(t) && t === 'implicit') {
              var dets = o[t];
              var ep = dets.loginEndpoint.url;
              url = dets.loginEndpoint.url + '?response_type=token';
              window.swaggerUi.tokenName = dets.tokenName;
            }
            else if (o.hasOwnProperty(t) && t === 'accessCode') {
              var dets = o[t];
              var ep = dets.tokenRequestEndpoint.url;
              url = dets.tokenRequestEndpoint.url + '?response_type=code';
              window.swaggerUi.tokenName = dets.tokenName;
            }
          }
        }
      }
    }
    var scopes = []
    var o = $('.api-popup-scopes').find('input:checked');

    for(k =0; k < o.length; k++) {
      var scope = $(o[k]).attr('scope');
      
      if (scopes.indexOf(scope) === -1)
        scopes.push(scope);
    }

    window.enabledScopes=scopes;

    redirect_uri = redirectUrl;

    url += '&redirect_uri=' + encodeURIComponent(redirectUrl);
    url += '&realm=' + encodeURIComponent(realm);
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&scope=' + encodeURIComponent(scopes);

    window.open(url);
  });

  popupMask.show();
  popupDialog.show();
  return;
}


function handleLogout() {
  for(key in window.authorizations.authz){
    window.authorizations.remove(key)
  }
  window.enabledScopes = null;
  $('.api-ic.ic-on').addClass('ic-off');
  $('.api-ic.ic-on').removeClass('ic-on');

  // set the info box
  $('.api-ic.ic-warning').addClass('ic-error');
  $('.api-ic.ic-warning').removeClass('ic-warning');
}

function initOAuth(opts) {
  var o = (opts||{});
  var errors = [];

  appName = (o.appName||errors.push('missing appName'));
  popupMask = (o.popupMask||$('#api-common-mask'));
  popupDialog = (o.popupDialog||$('.api-popup-dialog'));
  clientId = (o.clientId||errors.push('missing client id'));
  realm = (o.realm||errors.push('missing realm'));

  if(errors.length > 0){
    log('auth unable initialize oauth: ' + errors);
    return;
  }

  $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
  $('.api-ic').unbind();
  $('.api-ic').click(function(s) {
    if($(s.target).hasClass('ic-off'))
      handleLogin();
    else {
      handleLogout();
    }
    false;
  });
}

function processOAuthCode(data) {
  var params = {
    'client_id': clientId,
    'code': data.code,
    'grant_type': 'authorization_code',
    'redirect_uri': redirect_uri
  }
  $.ajax(
  {
    url : window.swaggerUi.tokenUrl,
    type: "POST",
    data: params,
    success:function(data, textStatus, jqXHR) 
    {
      onOAuthComplete(data);
    },
    error: function(jqXHR, textStatus, errorThrown) 
    {
      onOAuthComplete("");
    }
  });
}

function onOAuthComplete(token) {
  if(token) {
    if(token.error) {
      var checkbox = $('input[type=checkbox],.secured')
      checkbox.each(function(pos){
        checkbox[pos].checked = false;
      });
      alert(token.error);
    }
    else {
      var b = token[window.swaggerUi.tokenName];
      if(b){
        // if all roles are satisfied
        var o = null;
        $.each($('.auth #api_information_panel'), function(k, v) {
          var children = v;
          if(children && children.childNodes) {
            var requiredScopes = [];
            $.each((children.childNodes), function (k1, v1){
              var inner = v1.innerHTML;
              if(inner)
                requiredScopes.push(inner);
            });
            var diff = [];
            for(var i=0; i < requiredScopes.length; i++) {
              var s = requiredScopes[i];
              if(window.enabledScopes && window.enabledScopes.indexOf(s) == -1) {
                diff.push(s);
              }
            }
            if(diff.length > 0){
              o = v.parentNode;
              $(o.parentNode).find('.api-ic.ic-on').addClass('ic-off');
              $(o.parentNode).find('.api-ic.ic-on').removeClass('ic-on');

              // sorry, not all scopes are satisfied
              $(o).find('.api-ic').addClass('ic-warning');
              $(o).find('.api-ic').removeClass('ic-error');
            }
            else {
              o = v.parentNode;
              $(o.parentNode).find('.api-ic.ic-off').addClass('ic-on');
              $(o.parentNode).find('.api-ic.ic-off').removeClass('ic-off');

              // all scopes are satisfied
              $(o).find('.api-ic').addClass('ic-info');
              $(o).find('.api-ic').removeClass('ic-warning');
              $(o).find('.api-ic').removeClass('ic-error');          
            }
          }
        });
        window.authorizations.add(oauth2KeyName, new ApiKeyAuthorization('Authorization', 'Bearer ' + b, 'header'));
      }
    }
  }
}
var hljs=new function(){function l(o){return o.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function b(p){for(var o=p.firstChild;o;o=o.nextSibling){if(o.nodeName=="CODE"){return o}if(!(o.nodeType==3&&o.nodeValue.match(/\s+/))){break}}}function h(p,o){return Array.prototype.map.call(p.childNodes,function(q){if(q.nodeType==3){return o?q.nodeValue.replace(/\n/g,""):q.nodeValue}if(q.nodeName=="BR"){return"\n"}return h(q,o)}).join("")}function a(q){var p=(q.className+" "+q.parentNode.className).split(/\s+/);p=p.map(function(r){return r.replace(/^language-/,"")});for(var o=0;o<p.length;o++){if(e[p[o]]||p[o]=="no-highlight"){return p[o]}}}function c(q){var o=[];(function p(r,s){for(var t=r.firstChild;t;t=t.nextSibling){if(t.nodeType==3){s+=t.nodeValue.length}else{if(t.nodeName=="BR"){s+=1}else{if(t.nodeType==1){o.push({event:"start",offset:s,node:t});s=p(t,s);o.push({event:"stop",offset:s,node:t})}}}}return s})(q,0);return o}function j(x,v,w){var p=0;var y="";var r=[];function t(){if(x.length&&v.length){if(x[0].offset!=v[0].offset){return(x[0].offset<v[0].offset)?x:v}else{return v[0].event=="start"?x:v}}else{return x.length?x:v}}function s(A){function z(B){return" "+B.nodeName+'="'+l(B.value)+'"'}return"<"+A.nodeName+Array.prototype.map.call(A.attributes,z).join("")+">"}while(x.length||v.length){var u=t().splice(0,1)[0];y+=l(w.substr(p,u.offset-p));p=u.offset;if(u.event=="start"){y+=s(u.node);r.push(u.node)}else{if(u.event=="stop"){var o,q=r.length;do{q--;o=r[q];y+=("</"+o.nodeName.toLowerCase()+">")}while(o!=u.node);r.splice(q,1);while(q<r.length){y+=s(r[q]);q++}}}}return y+l(w.substr(p))}function f(q){function o(s,r){return RegExp(s,"m"+(q.cI?"i":"")+(r?"g":""))}function p(y,w){if(y.compiled){return}y.compiled=true;var s=[];if(y.k){var r={};function z(A,t){t.split(" ").forEach(function(B){var C=B.split("|");r[C[0]]=[A,C[1]?Number(C[1]):1];s.push(C[0])})}y.lR=o(y.l||hljs.IR,true);if(typeof y.k=="string"){z("keyword",y.k)}else{for(var x in y.k){if(!y.k.hasOwnProperty(x)){continue}z(x,y.k[x])}}y.k=r}if(w){if(y.bWK){y.b="\\b("+s.join("|")+")\\s"}y.bR=o(y.b?y.b:"\\B|\\b");if(!y.e&&!y.eW){y.e="\\B|\\b"}if(y.e){y.eR=o(y.e)}y.tE=y.e||"";if(y.eW&&w.tE){y.tE+=(y.e?"|":"")+w.tE}}if(y.i){y.iR=o(y.i)}if(y.r===undefined){y.r=1}if(!y.c){y.c=[]}for(var v=0;v<y.c.length;v++){if(y.c[v]=="self"){y.c[v]=y}p(y.c[v],y)}if(y.starts){p(y.starts,w)}var u=[];for(var v=0;v<y.c.length;v++){u.push(y.c[v].b)}if(y.tE){u.push(y.tE)}if(y.i){u.push(y.i)}y.t=u.length?o(u.join("|"),true):{exec:function(t){return null}}}p(q)}function d(D,E){function o(r,M){for(var L=0;L<M.c.length;L++){var K=M.c[L].bR.exec(r);if(K&&K.index==0){return M.c[L]}}}function s(K,r){if(K.e&&K.eR.test(r)){return K}if(K.eW){return s(K.parent,r)}}function t(r,K){return K.i&&K.iR.test(r)}function y(L,r){var K=F.cI?r[0].toLowerCase():r[0];return L.k.hasOwnProperty(K)&&L.k[K]}function G(){var K=l(w);if(!A.k){return K}var r="";var N=0;A.lR.lastIndex=0;var L=A.lR.exec(K);while(L){r+=K.substr(N,L.index-N);var M=y(A,L);if(M){v+=M[1];r+='<span class="'+M[0]+'">'+L[0]+"</span>"}else{r+=L[0]}N=A.lR.lastIndex;L=A.lR.exec(K)}return r+K.substr(N)}function z(){if(A.sL&&!e[A.sL]){return l(w)}var r=A.sL?d(A.sL,w):g(w);if(A.r>0){v+=r.keyword_count;B+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function J(){return A.sL!==undefined?z():G()}function I(L,r){var K=L.cN?'<span class="'+L.cN+'">':"";if(L.rB){x+=K;w=""}else{if(L.eB){x+=l(r)+K;w=""}else{x+=K;w=r}}A=Object.create(L,{parent:{value:A}});B+=L.r}function C(K,r){w+=K;if(r===undefined){x+=J();return 0}var L=o(r,A);if(L){x+=J();I(L,r);return L.rB?0:r.length}var M=s(A,r);if(M){if(!(M.rE||M.eE)){w+=r}x+=J();do{if(A.cN){x+="</span>"}A=A.parent}while(A!=M.parent);if(M.eE){x+=l(r)}w="";if(M.starts){I(M.starts,"")}return M.rE?0:r.length}if(t(r,A)){throw"Illegal"}w+=r;return r.length||1}var F=e[D];f(F);var A=F;var w="";var B=0;var v=0;var x="";try{var u,q,p=0;while(true){A.t.lastIndex=p;u=A.t.exec(E);if(!u){break}q=C(E.substr(p,u.index-p),u[0]);p=u.index+q}C(E.substr(p));return{r:B,keyword_count:v,value:x,language:D}}catch(H){if(H=="Illegal"){return{r:0,keyword_count:0,value:l(E)}}else{throw H}}}function g(s){var o={keyword_count:0,r:0,value:l(s)};var q=o;for(var p in e){if(!e.hasOwnProperty(p)){continue}var r=d(p,s);r.language=p;if(r.keyword_count+r.r>q.keyword_count+q.r){q=r}if(r.keyword_count+r.r>o.keyword_count+o.r){q=o;o=r}}if(q.language){o.second_best=q}return o}function i(q,p,o){if(p){q=q.replace(/^((<[^>]+>|\t)+)/gm,function(r,v,u,t){return v.replace(/\t/g,p)})}if(o){q=q.replace(/\n/g,"<br>")}return q}function m(r,u,p){var v=h(r,p);var t=a(r);if(t=="no-highlight"){return}var w=t?d(t,v):g(v);t=w.language;var o=c(r);if(o.length){var q=document.createElement("pre");q.innerHTML=w.value;w.value=j(o,c(q),v)}w.value=i(w.value,u,p);var s=r.className;if(!s.match("(\\s|^)(language-)?"+t+"(\\s|$)")){s=s?(s+" "+t):t}r.innerHTML=w.value;r.className=s;r.result={language:t,kw:w.keyword_count,re:w.r};if(w.second_best){r.second_best={language:w.second_best.language,kw:w.second_best.keyword_count,re:w.second_best.r}}}function n(){if(n.called){return}n.called=true;Array.prototype.map.call(document.getElementsByTagName("pre"),b).filter(Boolean).forEach(function(o){m(o,hljs.tabReplace)})}function k(){window.addEventListener("DOMContentLoaded",n,false);window.addEventListener("load",n,false)}var e={};this.LANGUAGES=e;this.highlight=d;this.highlightAuto=g;this.fixMarkup=i;this.highlightBlock=m;this.initHighlighting=n;this.initHighlightingOnLoad=k;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(q,r){var o={};for(var p in q){o[p]=q[p]}if(r){for(var p in r){o[p]=r[p]}}return o}}();hljs.LANGUAGES.xml=function(a){var c="[A-Za-z0-9\\._:-]+";var b={eW:true,c:[{cN:"attribute",b:c,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},b]}]}}(hljs);hljs.LANGUAGES.json=function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{c:d,k:e,i:"\\S"}}(hljs);
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(this.smartypants(cap[0]));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/--/g, '\u2014')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());