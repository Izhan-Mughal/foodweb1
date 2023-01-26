"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2162],{7457:function(e,s,a){var i=a(5893),n=a(1163),r=a(7294),l=a(2664),c=a(7330),t=a(3141),d=(a(939),{updateProductFilters:c.lG});s.Z=(0,l.$j)((function(e){return{products:e.products.items}}),d)((function(e){var s=e.updateProductFilters,a=(0,n.useRouter)().query.search,l=(0,r.useState)({value:{min:0,max:500}}),c=l[0],d=l[1];(0,r.useEffect)((function(){var e={price:c.value};s(e)}),[c,a]);var o=(0,r.useState)(1);o[0],o[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{range:!0,allowCross:!1,defaultValue:[0,100],min:0,max:500,onChange:function(e){return d({value:{min:e[0],max:e[1]}})}}),(0,i.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,i.jsx)("span",{children:c.value.min}),(0,i.jsx)("span",{children:c.value.max})]})]})}))},1578:function(e,s,a){var i=a(5893);s.Z=function(e){var s=e.selectChange,a=e.showLimit;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"sort-by-product-wrap",children:[(0,i.jsx)("div",{className:"sort-by",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{className:"fi-rs-apps"}),"Show:"]})}),(0,i.jsx)("div",{className:"sort-by-dropdown-wrap custom-select",children:(0,i.jsxs)("select",{onChange:s,children:[(0,i.jsx)("option",{value:a,children:a}),(0,i.jsx)("option",{value:5,children:"5"}),(0,i.jsx)("option",{value:10,children:"10"})]})})]})})}},769:function(e,s,a){var i=a(5893),n=a(1163),r=a(7294),l=a(2664),c={updateProductFilters:a(7330).lG};s.Z=(0,l.$j)((function(e){return{products:e.products.items}}),c)((function(e){var s=e.updateProductFilters,a=(0,n.useRouter)().query.search,l=(0,r.useState)(""),c=l[0],t=l[1];(0,r.useEffect)((function(){s({featured:c})}),[a,c]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"sort-by-product-wrap",children:[(0,i.jsx)("div",{className:"sort-by",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{className:"fi-rs-apps-sort"}),"Sort by:"]})}),(0,i.jsx)("div",{className:"sort-by-dropdown-wrap custom-select",children:(0,i.jsxs)("select",{onChange:function(e){return function(e){t(e.target.value)}(e)},children:[(0,i.jsx)("option",{value:"",children:"Defaults"}),(0,i.jsx)("option",{value:"featured",children:"Featured"}),(0,i.jsx)("option",{value:"trending",children:"Trending"}),(0,i.jsx)("option",{value:"lowToHigh",children:"Low To High"}),(0,i.jsx)("option",{value:"highToLow",children:"High To Low"})]})})]})})}))},6371:function(e,s,a){var i=a(5893),n=a(1163),r=a(7294),l=a(2664),c={updateProductFilters:a(7330).lG};s.Z=(0,l.$j)(null,c)((function(e){var s=e.updateProductFilters,a=((0,n.useRouter)(),(0,r.useState)([])),l=a[0],c=a[1],t=(0,r.useState)(0),d=t[0],o=t[1];(0,r.useEffect)((function(){s({tags:l})}),[l]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:"tags-list",children:[{value:""},{value:"snack"},{value:"milk"},{value:"fruit"},{value:"broccoli"},{value:"salad"},{value:"appetizer"}].map((function(e,s){return(0,i.jsx)("li",{className:"hover-up",onClick:function(){return function(e,s){c(s),o(d==e?0:e)}(s,e.value)},children:(0,i.jsxs)("a",{className:d==s?"cat-item text-brand-2":"cat-item text-brand",children:[(0,i.jsx)("i",{className:"fi-rs-cross mr-10"}),0==s?"All":"".concat(e.value)]})},s)}))})})}))},8722:function(e,s,a){var i=a(5893);a(7294);s.Z=function(e){var s=e.prev,a=e.currentPage,n=e.getPaginationGroup,r=e.next,l=e.pages,c=e.handleActive;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ul",{className:"pagination justify-content-start",children:[n.length<=0?null:(0,i.jsx)("li",{onClick:s,className:"page-item",children:1===a?null:(0,i.jsx)("a",{className:"page-link",children:(0,i.jsx)("i",{className:"fi-rs-angle-double-small-left"})})}),n.map((function(e,s){return(0,i.jsx)("li",{onClick:function(){return c(e)},className:a===e?"page-item active":"page-item",children:(0,i.jsx)("a",{className:"page-link",children:e})},s)})),n.length<=0?null:(0,i.jsx)("li",{onClick:r,className:"page-item",children:a>=l?null:(0,i.jsx)("a",{className:"page-link",children:(0,i.jsx)("i",{className:"fi-rs-angle-double-small-right"})})})]}),n.length<=0?null:(0,i.jsxs)("p",{children:["show ",a," of ",l]})]})}},5303:function(e,s,a){var i=a(5893),n=(a(7294),a(2664)),r=a(1190),l=a(3181),c=a(7730);s.Z=(0,n.$j)((function(e){return{quickView:e.quickView}}),{closeQuickView:l.z})((function(e){var s=e.quickView,a=e.closeQuickView;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.u,{open:!!s,onClose:a,children:s&&(0,i.jsx)("div",{className:"quick-view",children:(0,i.jsx)(c.Z,{product:s,quickView:s})})})})}))},4042:function(e,s,a){var i=a(5893),n=a(1664),r=a.n(n),l=(a(7294),a(2664)),c=a(2920),t=a(8866),d=a(9216),o=a(3181),u=a(5644),h={addToCart:t.Xq,addToCompare:d.a$,addToWishlist:u.Mp,openQuickView:o.$};s.Z=(0,l.$j)(null,h)((function(e){var s=e.product,a=e.addToCart,n=e.addToCompare,l=e.addToWishlist,t=e.openQuickView,d=function(e){n(e),(0,c.Am)("Added to Compare list !")};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"product-list mb-30",children:(0,i.jsxs)("div",{className:"product-cart-wrap",children:[(0,i.jsxs)("div",{className:"product-img-action-wrap",children:[(0,i.jsx)("div",{className:"product-img product-img-zoom",children:(0,i.jsx)("div",{className:"product-img-inner",children:(0,i.jsx)(r(),{href:"/[id]",as:"/".concat(s.id),children:(0,i.jsxs)("a",{children:[(0,i.jsx)("img",{className:"default-img",src:s.images[0].img,alt:""}),(0,i.jsx)("img",{className:"hover-img",src:s.images[1].img,alt:""})]})})})}),(0,i.jsxs)("div",{className:"product-action-1",children:[(0,i.jsx)("a",{"aria-label":"Quick view",className:"action-btn hover-up","data-bs-toggle":"modal",onClick:function(e){return t(s)},children:(0,i.jsx)("i",{className:"fi-rs-eye"})}),(0,i.jsx)("a",{"aria-label":"Add To Wishlist",className:"action-btn hover-up",onClick:function(e){return l(s),void(0,c.Am)("Added to Wishlist !")},children:(0,i.jsx)("i",{className:"fi-rs-heart"})}),(0,i.jsx)("a",{"aria-label":"Compare",className:"action-btn hover-up",onClick:function(e){return d(s)},children:(0,i.jsx)("i",{className:"fi-rs-shuffle"})})]}),(0,i.jsxs)("div",{className:"product-badges product-badges-position product-badges-mrg",children:[s.trending&&(0,i.jsx)("span",{className:"hot",children:"Hot"}),s.created&&(0,i.jsx)("span",{className:"new",children:"New"}),s.totalSell>100&&(0,i.jsx)("span",{className:"best",children:"Best Sell"}),s.discount.isActive&&(0,i.jsx)("span",{className:"sale",children:"Sale"}),s.discount.percentage>=5&&(0,i.jsxs)("span",{className:"hot",children:[s.discount.percentage,"%"]})]})]}),(0,i.jsxs)("div",{className:"product-content-wrap",children:[(0,i.jsx)("div",{className:"product-category",children:(0,i.jsx)(r(),{href:"/products",children:(0,i.jsx)("a",{children:s.brand})})}),(0,i.jsx)("h2",{children:(0,i.jsx)(r(),{href:"/[id]",as:"/".concat(s.id),children:(0,i.jsx)("a",{children:s.title})})}),(0,i.jsxs)("div",{className:"product-rate-cover",children:[(0,i.jsx)("div",{className:"product-rate d-inline-block",children:(0,i.jsx)("div",{className:"product-rating",style:{width:"90%"}})}),(0,i.jsxs)("span",{className:"font-small ml-5 text-muted",children:[" ","(4.0)"]}),(0,i.jsx)("span",{className:"ml-30",children:"500g"})]}),(0,i.jsx)("p",{className:"mt-15 mb-15",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam beatae consectetur, atque inventore aliquam adipisci perspiciatis nostrum qui consequatur praesentium?"}),(0,i.jsxs)("div",{className:"product-price",children:[(0,i.jsxs)("span",{children:["$",s.price," "]}),(0,i.jsx)("span",{className:"old-price",children:s.oldPrice&&"$ ".concat(s.oldPrice)})]}),(0,i.jsx)("p",{className:"mt-15",children:s.desc}),(0,i.jsxs)("div",{className:"mt-30 d-flex align-items-center",children:[(0,i.jsxs)("a",{"aria-label":"Add To Cart",className:"btn",onClick:function(e){return a(s),void(0,c.Am)("Product added to Cart !")},children:[(0,i.jsx)("i",{className:"fi-rs-shopping-bag-add"}),"Add to Cart"]}),(0,i.jsxs)("a",{onClick:function(e){return d(s)},className:"add-wishlish ml-30 text-body font-sm font-heading font-weight-bold",children:[(0,i.jsx)("i",{className:"fi-rs-shuffle mr-5"}),"Add Compare"]})]})]})]})})})}))},3094:function(e,s,a){var i=a(5893),n=a(2664),r=a(1190),l=a(8866),c=a(2920),t=a(5644),d={closeWishlistModal:t.j2,deleteFromWishlist:t.ib,clearWishlist:t.y6,addToCart:l.Xq};s.Z=(0,n.$j)((function(e){return{wishlist:e.wishlist}}),d)((function(e){var s=e.wishlist,a=e.clearWishlist,n=e.closeWishlistModal,l=e.deleteFromWishlist,t=e.addToCart;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.u,{open:!!s.modal,onClose:n,center:!0,classNames:{modal:"full-modal"},children:s.items.length>0?(0,i.jsxs)("div",{className:"table-responsive",children:[(0,i.jsx)("table",{className:"table",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Product Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Price"})}),(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Quantity"})}),(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Action"})})]}),s.items.map((function(e){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("img",{src:e.image,alt:"",className:"img-fluid",width:"70"})}),(0,i.jsxs)("td",{children:["$",e.price]}),(0,i.jsx)("td",{style:{width:"200px"},children:(0,i.jsx)("span",{onClick:function(s){return function(e){t(e),(0,c.Am)("Product added to Cart !")}(e)},children:"Add To Cart"})}),(0,i.jsx)("td",{style:{width:"50px"},className:"text-center",children:(0,i.jsx)("span",{onClick:function(s){return l(e.id)},children:(0,i.jsx)("button",{children:"Delete"})})})]})}))]})}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)("span",{className:"clear-btn",onClick:a,children:"Clear All"})})]}):(0,i.jsx)("h4",{className:"mb-0",children:"No Products"})})})}))},6782:function(e,s,a){var i=a(5893),n=(a(7294),a(1163)),r=a(1664),l=a.n(r),c=a(6371);s.Z=function(e){e.parent,e.sub,e.subChild,e.noBreadcrumb;var s=(0,n.useRouter)().query.cat;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"page-header mt-30 mb-50",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"archive-header",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsxs)("div",{className:"col-xl-3",children:[(0,i.jsx)("h1",{className:"mb-15 text-capitalize",children:s||"Category"}),(0,i.jsxs)("div",{className:"breadcrumb",children:[(0,i.jsx)(l(),{href:"/",children:(0,i.jsxs)("a",{rel:"nofollow",children:[(0,i.jsx)("i",{className:"fi-rs-home mr-5"}),"Home"]})}),(0,i.jsx)("span",{})," Shop ",(0,i.jsx)("span",{})," ",s]})]}),(0,i.jsx)("div",{className:"col-xl-9 text-end d-none d-xl-block",children:(0,i.jsx)(c.Z,{})})]})})})})})}}}]);