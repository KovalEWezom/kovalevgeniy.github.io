(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(8),i=a.n(r);a(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?e.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2}):1*e.toFixed(2)}var l=a(2),o=a(1),u=a(3),m=function(e){return function(e){localStorage.setItem("cart",JSON.stringify(e.length>0?e:[]))}(e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.C*t.quantity}),0).toFixed(2)}},d=function(e,t){switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(o.a)(Object(o.a)({},t.payload),{},{quantity:1})),Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});case"REMOVE_ITEM":return Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems.filter((function(e){return e.id!==t.payload.id})))),{},{cartItems:Object(u.a)(e.cartItems.filter((function(e){return e.id!==t.payload.id})))});case"INCREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity++,Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});case"DECREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity--,Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});case"UPDATE_ITEM":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity=t.quantity,Object(o.a)(Object(o.a)(Object(o.a)({},e),m(e.cartItems)),{},{cartItems:Object(u.a)(e.cartItems)});default:return e}},v=Object(c.createContext)([]),E=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],p=Object(o.a)({cartItems:E},m(E)),f=function(e){var t=e.children,a=Object(c.useReducer)(d,p),r=Object(l.a)(a,2),i=r[0],s=r[1],u=Object(o.a)({removeProduct:function(e){s({type:"REMOVE_ITEM",payload:e})},addProduct:function(e){s({type:"ADD_ITEM",payload:e})},increase:function(e){s({type:"INCREASE",payload:e})},decrease:function(e){s({type:"DECREASE",payload:e})},updateProductQuantity:function(e,t){s({type:"UPDATE_ITEM",payload:e,quantity:t})}},i);return n.a.createElement(v.Provider,{value:u},t)},b=function(e,t){switch(t.type){case"PRODUCTS_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,products:t.payload.products,rate:t.payload.rate,priceStatus:t.payload.priceStatus});case"PRODUCTS_FAILURE":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,errorMessage:t.error});default:return e}},O=Object(c.createContext)({}),j={get value(){return Math.floor(60*Math.random()+20)}},y={loading:!1,products:[],rate:-1,priceStatus:"",errorMessage:null},N=function(e){var t=e.children,a=Object(c.useReducer)(b,y),r=Object(l.a)(a,2),i=r[0],s=r[1],o=i.loading,u=i.products,m=i.rate,d=i.priceStatus,v=i.errorMessage;function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;fetch("/api/data.json").then((function(e){return e.json()})).then((function(t){if(!Object.keys(u).length&&e&&(u=e),t.Success){Object.keys(u).forEach((function(e){Object.keys(u[e].B).forEach((function(a){u[e].B[a].id=a;var c=t.hasOwnProperty("Value")&&t.Value.hasOwnProperty("Goods")&&t.Value.Goods.find((function(t){return+t.T===+a&&+t.G===+e}));c&&(c.P&&(u[e].B[a].P=c.P),c.C?u[e].B[a].C=c.C:delete u[e].B[a].C)}))}));var a=j.value;s({type:"PRODUCTS_SUCCESS",payload:{products:u,rate:j.value,priceStatus:-1!==m&&m<a?"less":-1!==m&&m>a?"large":""}})}t.Error&&s({type:"PRODUCTS_FAILURE",errorMessage:t.Error})}))}return Object(c.useEffect)((function(){fetch("/api/names.json").then((function(e){return e.json()})).then((function(e){return E(e)}))}),[]),Object(c.useEffect)((function(){var e=setInterval((function(){E()}),15e3);return function(){return clearInterval(e)}})),n.a.createElement(O.Provider,{value:{loading:o,products:u,rate:m,priceStatus:d,errorMessage:v}},t)},_=(a(19),function(e){var t=e.products,a=e.group,r=Object(c.useContext)(v),i=r.addProduct,l=r.cartItems,o=r.increase,u=Object(c.useContext)(O),m=u.rate,d=u.priceStatus,E=function(e){return!!l.find((function(t){return t.id===e.id}))},p=(t=Object.entries(t).sort((function(e,t){return("P"in t[1])-("P"in e[1])}))).map((function(e){var t=e[1],c=!!t.P;return n.a.createElement("div",{key:e[0],className:"product"+(c?"":" product--empty")},n.a.createElement("div",{className:"product__col"},n.a.createElement("div",{className:"product__info"},n.a.createElement("div",{className:"product__title"},t.N," (",c?t.P:"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438",")"),E(t)&&t.P&&function(e,t){var a=l.find((function(t){return t.id===e.id}));return!!a&&a.quantity<t}(t,t.P)&&n.a.createElement("button",{onClick:function(){return o(t)},className:"btn"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435"),!E(t)&&t.P&&n.a.createElement("button",{onClick:function(){return i((t.N=a+". "+t.N,t))},className:"btn"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))),n.a.createElement("div",{className:"product__col"},t.C?n.a.createElement("div",{className:"product__price"},n.a.createElement("div",{className:"price "+d},s(t.C*m)," ","\u0440\u0443\u0431."," / ","\u0448\u0442."),n.a.createElement("div",{className:"price price--small"},"$"+t.C)):null))}));return n.a.createElement("div",null,p)}),h=a(9),g=a(10),I=a(6),C=a(12),S=a(11),P=(a(20),function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).state={isActive:!0},c.activateTab=c.activateTab.bind(Object(I.a)(c)),c}return Object(g.a)(a,[{key:"activateTab",value:function(){var e=this.state.isActive;this.setState({isActive:!e})}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,c=this.state.isActive;return n.a.createElement("div",{className:"accordion"},n.a.createElement("div",{onClick:this.activateTab,className:"accordion__title"+(c?" is-toggle":"")},t),n.a.createElement("div",{className:"accordion__content"+(c?" is-toggle":"")},a))}}]),a}(c.Component)),k=(a(21),function(e){var t=e.product,a=Object(c.useContext)(v),r=a.updateProductQuantity,i=a.removeProduct,o=a.decrease,u=a.increase,m=Object(c.useContext)(O),d=m.rate,E=m.priceStatus,p=Object(c.useRef)(null),f=Object(c.useState)(t.quantity<=1),b=Object(l.a)(f,2),j=b[0],y=b[1],N=Object(c.useState)(t.P<=t.quantity),_=Object(l.a)(N,2),h=_[0],g=_[1];function I(e,t){var a=p.current,c=a.value,n=a.min,r=a.max;switch(t){case"decrease":+c===+n?y(!0):+c-1===+n?(o(e),y(!0)):(o(e),g(!1),y(!1));break;case"increase":+c===+r?g(!0):+c+1===+r?(u(e),g(!0)):(u(e),g(!1),y(!1))}}return Object(c.useEffect)((function(){if(p.current){var e=p.current,t=e.value,a=e.min,c=e.max;g(!1),y(!1),+t<=+a&&y(!0),+t>=+c&&g(!0)}})),n.a.createElement("div",{className:"cart",key:t.id},n.a.createElement("div",{className:"cart-details"},n.a.createElement("div",{className:"cart-cross"},n.a.createElement("button",{onClick:function(){return i(t)},className:"btn-icon"},"\xd7")),n.a.createElement("div",{className:"cart-title"},t.N)),n.a.createElement("div",{className:"cart-quantity"},n.a.createElement("div",{className:"cart-quantity__top"},n.a.createElement("div",{className:"quantities"},n.a.createElement("div",{onClick:I.bind(void 0,t,"decrease"),className:"quantities__ctrl decrease"+(j?" disabled":"")},n.a.createElement("span",null,"\u2212")),n.a.createElement("div",{className:"quantities__input"},n.a.createElement("input",{ref:p,type:"number",value:t.quantity,min:"1",max:t.P,onChange:function(e,t){var a=t.target,c=a.value,n=a.min,i=a.max;c=Math.max(Number(n),Math.min(Number(i),Number(c))),g(!1),y(!1),+c<=+n&&y(!0),+c>=+i&&g(!0),r(e,c)}.bind(void 0,t)})),n.a.createElement("div",{onClick:I.bind(void 0,t,"increase"),className:"quantities__ctrl increase"+(h?" disabled":"")},n.a.createElement("span",null,"+"))),n.a.createElement("span",{className:"amount"}," ","\u0448\u0442.")),n.a.createElement("div",{className:"cart-quantity__bottom"},t.quantity===t.P?n.a.createElement("span",{className:"noty-msg"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e"):null)),t.C?n.a.createElement("div",{className:"cart-price"},n.a.createElement("div",{className:"price "+E},s(t.C*d)," ","\u0440\u0443\u0431."," / ","\u0448\u0442."),n.a.createElement("div",{className:"price price--small"},"$"+t.C)):null,n.a.createElement("div",{className:"cart-removal"},n.a.createElement("button",{onClick:function(){return i(t)},className:"btn-link"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}),q=(a(22),function(){var e=Object(c.useContext)(v),t=e.cartItems,a=e.total,r=e.itemCount,i=Object(c.useContext)(O).rate;return n.a.createElement("div",null,Object.keys(t).length?n.a.createElement("div",{className:"shopping-cart"},n.a.createElement("div",{className:"shopping-cart__title"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),n.a.createElement("div",{className:"shopping-cart__head"},n.a.createElement("div",{className:"cart-details"},"\u041d\u0430\u0439\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),n.a.createElement("div",{className:"cart-quantity"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),n.a.createElement("div",{className:"cart-price"},"\u0426\u0435\u043d\u0430"),n.a.createElement("div",{className:"cart-removal"},"\xa0")),n.a.createElement("div",{className:"shopping-cart__list"},Object.keys(t).map((function(e){return n.a.createElement(k,{key:e,product:t[e]})}))),n.a.createElement("div",{className:"totals"},n.a.createElement("div",{className:"totals__item"},n.a.createElement("div",{className:"totals__title"},"\u0412\u0441\u0435\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432:"),n.a.createElement("div",{className:"totals__value"},r," ","\u0448\u0442.")),n.a.createElement("div",{className:"totals__item totals__item--bold"},n.a.createElement("div",{className:"totals__title"},"\u0412\u0441\u0435\u0433\u043e \u043a \u043e\u043f\u043b\u0430\u0442\u0435:"),n.a.createElement("div",{className:"totals__value totals__value--orange"},s(a*i)," ","\u0440\u0443\u0431.")))):null)}),x=function(){var e=Object(c.useContext)(O),t=e.loading,a=e.products,r=e.errorMessage,i=e.rate;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("section",{className:"container"},n.a.createElement("h2",null,"\u041a\u0443\u0440\u0441: $1 = ",i," ","\u0440\u0443\u0431."),n.a.createElement(q,null),n.a.createElement("h2",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"),n.a.createElement("div",{className:"product-list"},t&&!r?n.a.createElement("span",null,"loading... "):r?n.a.createElement("div",{className:"errorMessage"},r):Object.keys(a).map((function(e){return n.a.createElement(P,{key:e,title:a[e].G},Object.keys(a[e].B).length?n.a.createElement(_,{products:a[e].B,group:a[e].G}):null)}))))))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null,n.a.createElement(f,null,n.a.createElement(x,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.8a30459a.chunk.js.map