"use strict";(self.webpackChunk_11_game_shop=self.webpackChunk_11_game_shop||[]).push([[75],{8729:function(e,s,t){t.d(s,{Z:function(){return c}});var n=t(3504),a="BreadCrumps_list__nMwI0",i="BreadCrumps_link__yZk7l",r=t(184),c=function(e){var s=e.links;return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{className:a,children:s.map((function(e){return(0,r.jsxs)("li",{className:i,children:[(0,r.jsx)(n.OL,{to:e.path,children:e.name}),(0,r.jsx)("span",{children:">"})]},e.path)}))})})}},6075:function(e,s,t){t.r(s),t.d(s,{default:function(){return q}});var n=t(1573),a=t(8729),i=t(3504),r="CartAside_wrapper__bvbr8",c="CartAside_top__TVVuc",l="CartAside_top_bottom__3AEhw",d="CartAside_labelPrice__Az2+i",_="CartAside_price__E09fg",m="CartAside_price_old__ONdmY",o="CartAside_label__WPp2t",u="CartAside_form__z+4Dc",p="CartAside_input__WinRb",h="CartAside_promoBtn__SKNe6",x="CartAside_btnTop__lmG6J",j=t(1934),N=t(184),C=function(){var e=(0,n.Z)((function(e){return e.cartPage.price})),s=e.withDiscount,t=e.withoutDiscount;return(0,N.jsxs)("section",{className:r,children:[(0,N.jsxs)("div",{className:c,children:[(0,N.jsx)("span",{className:d,children:"\u0421\u0443\u043c\u043c\u0430:"}),(0,N.jsxs)("span",{className:"".concat(_," ").concat(m),children:[t,"$"]})]}),(0,N.jsxs)("div",{className:c+" "+l,children:[(0,N.jsx)("span",{className:d,children:"\u0421\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439:"}),(0,N.jsxs)("span",{className:_,children:[s,"$"]})]}),(0,N.jsx)("div",{className:o,children:"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434:"}),(0,N.jsxs)("div",{className:u,children:[(0,N.jsx)("input",{type:"text",className:p}),(0,N.jsx)("button",{className:h,children:(0,N.jsx)(j.Z,{id:"check"})})]}),(0,N.jsx)(i.rU,{to:"/order",className:x,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})]})},f=t(885),v=t(2791),b=t(1694),g=t.n(b),w=t(7750),P=t(4141),k=t(9911),A={item:"CartItem_item__v4WFA",img:"CartItem_img__eslI5",name:"CartItem_name__Kvxdx",params:"CartItem_params__NC3tg",price:"CartItem_price__j9z1U",oldPrice:"CartItem_oldPrice__+IiVd",quantity:"CartItem_quantity__+KXRY",btnDelete:"CartItem_btnDelete__S9Gl3"},I=t(206),y=function(e){var s=e.id,t=(0,k.Z)(),a=(0,v.useState)(),r=(0,f.Z)(a,2),c=r[0],l=r[1],d=(0,v.useState)(1),_=(0,f.Z)(d,2),m=_[0],o=_[1],u=(0,n.Z)((function(e){return e.cartPage.addedItems}));return(0,v.useEffect)((function(){(0,w.wv)(s).then((function(e){return l(e)}))}),[]),(0,v.useEffect)((function(){var e=u.find((function(e){return e[s]}));e&&o(e[s])}),[u]),c?(0,N.jsxs)("section",{className:A.item,children:[(0,N.jsx)(i.rU,{to:"/product/".concat(c.id),className:A.img,children:(0,N.jsx)("img",{src:c.img.compressed,alt:c.img.compressed})}),(0,N.jsx)(i.rU,{to:"/product/".concat(c.id),className:A.name,children:c.name}),(0,N.jsxs)("div",{className:A.params,children:[(0,N.jsxs)("div",{className:A.price,children:[c.price.old&&(0,N.jsxs)("span",{className:A.oldPrice,children:[c.price.old*m,"$"]}),(0,N.jsxs)("span",{className:A.newPrice,children:[c.price.new*m,"$"]})]}),(0,N.jsxs)("div",{className:A.quantity,children:[(0,N.jsx)("button",{type:"button",onClick:function(){m>1&&c&&t((0,P.qG)({id:s,newPrice:c.price.new,oldPrice:c.price.old||c.price.new}))},className:g()(A.btnQuantity,A.minus),children:"-"}),(0,N.jsxs)("span",{children:[m," \u0448\u0442"]}),(0,N.jsx)("button",{type:"button",onClick:function(){c&&t((0,P._7)({id:s,newPrice:c.price.new,oldPrice:c.price.old||c.price.new}))},className:g()(A.btnQuantity,A.plus),children:"+"})]}),(0,N.jsx)("button",{className:A.btnDelete,onClick:function(){c&&t((0,P.B8)({id:s,newPrice:c.price.new*m,oldPrice:(c.price.old||c.price.new)*m,itemQuantity:m}))},children:(0,N.jsx)(j.Z,{id:"trash"})})]})]}):(0,N.jsx)(I.Z,{})},Z="CartPage_wrapper__64Cgv",z="CartPage_flex__Lezi9",D="CartPage_list__Paz0p",S="CartPage_aside__-tLzT",q=function(){var e=(0,n.Z)((function(e){return e.cartPage.addedItems}));return 0===e.length?(0,N.jsx)("div",{className:"container",children:(0,N.jsx)("div",{className:"title",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})}):(0,N.jsxs)("section",{className:"container "+Z,children:[(0,N.jsx)(a.Z,{links:[{path:"/",name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},{path:"/cart",name:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}]}),(0,N.jsx)("h3",{className:"title",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),(0,N.jsxs)("div",{className:z,children:[(0,N.jsx)("div",{className:D,children:e.map((function(e){return(0,N.jsx)(y,{id:Object.keys(e).toString()},Object.keys(e).toString())}))}),(0,N.jsx)("aside",{className:S,children:(0,N.jsx)(C,{})})]})]})}}}]);
//# sourceMappingURL=75.5081461d.chunk.js.map