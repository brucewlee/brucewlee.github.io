import{b as f}from"/myst_assets_folder/_shared/chunk-2NH4LW52.js";function r(n){for(var e={},i=n.split(" "),l=0;l<i.length;++l)e[i[l]]=!0;return e}function d(n,e){return n.skipToEnd(),e.tokenize=null,"comment"}function h(n,e){for(var i=!1,l;l=n.next();){if(i&&l=="/"){e.tokenize=null;break}i=l=="*"}return"comment"}function b(n,e){for(var i=!1,l;(l=n.next())!=null;){if(l=='"'&&!i){e.tokenize=null,e.sol=!1;break}i=!i&&l=="\\"}return"string"}function v(n,e){for(n.eatWhile(o);n.eat(o)||n.eat(c););var i=n.current();return e.sol&&(i=="package"||i=="model"||i=="when"||i=="connector")?e.level++:e.sol&&i=="end"&&e.level>0&&e.level--,e.tokenize=null,e.sol=!1,t.propertyIsEnumerable(i)?"keyword":a.propertyIsEnumerable(i)?"builtin":u.propertyIsEnumerable(i)?"atom":"variable"}function g(n,e){for(;n.eat(/[^']/););return e.tokenize=null,e.sol=!1,n.eat("'")?"variable":"error"}function z(n,e){return n.eatWhile(o),n.eat(".")&&n.eatWhile(o),(n.eat("e")||n.eat("E"))&&(n.eat("-")||n.eat("+"),n.eatWhile(o)),e.tokenize=null,e.sol=!1,"number"}var t,a,u,k,s,p,o,c,w,m=f(()=>{t=r("algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within"),a=r("abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh"),u=r("Real Boolean Integer String"),k=[].concat(Object.keys(t),Object.keys(a),Object.keys(u)),s=/[;=\(:\),{}.*<>+\-\/^\[\]]/,p=/(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/,o=/[0-9]/,c=/[_a-zA-Z]/;w={name:"modelica",startState:function(){return{tokenize:null,level:0,sol:!0}},token:function(n,e){if(e.tokenize!=null)return e.tokenize(n,e);if(n.sol()&&(e.sol=!0),n.eatSpace())return e.tokenize=null,null;var i=n.next();if(i=="/"&&n.eat("/"))e.tokenize=d;else if(i=="/"&&n.eat("*"))e.tokenize=h;else{if(p.test(i+n.peek()))return n.next(),e.tokenize=null,"operator";if(s.test(i))return e.tokenize=null,"operator";if(c.test(i))e.tokenize=v;else if(i=="'"&&n.peek()&&n.peek()!="'")e.tokenize=g;else if(i=='"')e.tokenize=b;else if(o.test(i))e.tokenize=z;else return e.tokenize=null,"error"}return e.tokenize(n,e)},indent:function(n,e,i){if(n.tokenize!=null)return null;var l=n.level;return/(algorithm)/.test(e)&&l--,/(equation)/.test(e)&&l--,/(initial algorithm)/.test(e)&&l--,/(initial equation)/.test(e)&&l--,/(end)/.test(e)&&l--,l>0?i.unit*l:0},languageData:{commentTokens:{line:"//",block:{open:"/*",close:"*/"}},autocomplete:k}}});m();export{w as modelica};
