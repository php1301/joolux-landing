"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{4594:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(5893),s=r(2809),o=r(7294),a=r(3977),i=r(3205),c=r(1175),l=r(2283),u=r(7816),p=r(7014),m=r(809),d=r.n(m),h=r(266),f=r(3833),x=r(7235),b=r(1163),g=r(9249),y=r(6808),j=r.n(y),v=r(8767),w=r(8592);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){return N.apply(this,arguments)}function N(){return(N=(0,h.Z)(d().mark((function e(t){var r,n,s,o;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.post("https://api.joolux-client.ml".concat(f.P.SIGNUP),k(k({},t),{},{code:t.otp}));case 2:return r=e.sent,n=r.data,s=n.accessToken,o=n.refreshToken,e.abrupt("return",{accessToken:s,refreshToken:o});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){var e=(0,p.l8)(),t=e.authorize,r=e.closeModal,n=e.favoriteData,s=e.setFavoriteData,o=(0,w.w)().mutate,a=(0,v.useQueryClient)();return(0,v.useMutation)(function(){var e=(0,h.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(){var e=(0,h.Z)(d().mark((function e(i){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,g.Am)("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n h\u01b0\u1edbng",{type:"dark",progressClassName:"fancy-progress-bar",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),localStorage.removeItem("session_otp"),j().set("access_token",i.accessToken),j().set("refresh_token",i.refreshToken),b.default.push("/my-account"),e.next=7,a.resetQueries({active:!0});case 7:t(),r(),n&&(o({product:n}),s(""));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onError:function(e){console.log(e.response,"Sign Up error"),localStorage.removeItem("session_otp"),"Email"===e.response.data.message.split(" ")[0]?(0,g.Am)("Email n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u0103ng k\xfd",{type:"dark",progressClassName:"fancy-progress-bar",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}):"Please"===e.response.data.message.split(" ")[0]?(0,g.Am)("Vui l\xf2ng nh\u1eadp m\xe3 OTP h\u1ee3p l\u1ec7",{type:"dark",progressClassName:"fancy-progress-bar",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}):(0,g.Am)("C\xf3 l\u1ed7i \u0111\u0103ng k\xfd",{type:"dark",progressClassName:"fancy-progress-bar",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0})}})},Z=r(3407),S=r(4184),T=r.n(S),E=r(155),D=r(9524),I=r(5413),M=r(8290),_=r(1640);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=function(){var e,t,r,s=(0,I.$G)().t,m=C(),d=m.mutate,h=m.isLoading,f=(0,p.l8)(),x=f.setModalView,b=f.openModal,g=f.closeModal,y=(0,l.cI)({mode:"all"}),j=y.register,v=y.handleSubmit,w=y.formState.errors,O=y.watch,k=(0,o.useRef)({});function P(){return x("LOGIN_VIEW"),b()}return k.current=O("password",""),(0,n.jsxs)("div",{className:"overflow-hidden pt-5 px-5 sm:px-8 bg-white mx-auto w-full sm:w-96 md:w-450px border border-gray-300 relative",children:[(0,n.jsx)("button",{onClick:g,"aria-label":"Close panel",className:T()("fixed z-50 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md","top-4 end-4"),children:(0,n.jsx)(E.bjh,{className:"text-xl"})}),(0,n.jsxs)("div",{className:"text-center mb-6 pt-2.5",children:[(0,n.jsx)("div",{onClick:g,children:(0,n.jsx)(u.T,{})}),(0,n.jsx)("div",{className:"p-2 mb-[10px] text-xs text-black bg-[#f5f5f5] -mx-5 sm:-mx-8",children:"Authenticated Luxury Consignment"}),(0,n.jsxs)("p",{className:"text-lg md:text-base text-black font-bold uppercase mt-2 mb-8 sm:mb-10",children:[s("common:registration-helper")," "]})]}),(0,n.jsx)("form",{onSubmit:v((function(e){var t=e.name,r=e.email,n=e.password,s=e.confirmPassword,o=e.phone,a=e.otp,i=e.captcha;d({name:t,email:r,password:n,confirmPassword:s,phone:o,otp:a,captcha:i,sessionInfo:localStorage.getItem("session_otp")})})),className:"flex flex-col justify-center",noValidate:!0,children:(0,n.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,n.jsx)(a.I,K(K({placeholderKey:"forms:label-email",type:"email",variant:"jl"},j("email",{required:"".concat(s("Th\xf4ng tin b\u1eaft bu\u1ed9c")),pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:s("forms:email-error")}})),{},{errorKey:null===(e=w.email)||void 0===e?void 0:e.message})),(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(i.Z,K({placeholderKey:"M\u1eadt kh\u1ea9u",variant:"jl",errorKey:null===(t=w.password)||void 0===t?void 0:t.message},j("password",{required:"".concat(s("Th\xf4ng tin b\u1eaft bu\u1ed9c")),minLength:{value:8,message:"M\u1eadt kh\u1ea9u ph\u1ea3i c\xf3 \xedt nh\u1ea5t 8 k\xed t\u1ef1"}}))),(0,n.jsx)(i.Z,K({placeholderKey:"X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u",variant:"jl",errorKey:null===(r=w.confirmPassword)||void 0===r?void 0:r.message},j("confirmPassword",{required:"".concat(s("Th\xf4ng tin b\u1eaft bu\u1ed9c")),validate:function(e){return e===k.current||"M\u1eadt kh\u1ea9u x\xe1c nh\u1eadn ch\u01b0a gi\u1ed1ng"}})))]}),(0,n.jsx)(c.z,{type:"submit",loading:h,variant:"jl",disabled:h,className:"h-11 md:h-12 w-full mt-1.5",children:s("common:text-register")})]})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5",children:[(0,n.jsx)("hr",{className:"w-full border-gray-300"}),(0,n.jsx)("span",{className:"absolute -top-2.5 px-2 bg-white",children:s("common:text-or")})]}),(0,n.jsx)(M.Z,{}),(0,n.jsx)(_.Z,{})]}),(0,n.jsxs)("p",{className:"text-[9.8px] md:text-[9px] text-body mt-2 mb-8 sm:mb-10 text-center",children:["By joining into Joolux, you agree to the"," ",(0,n.jsx)(Z.Z,{href:D.Z.TERMS,className:"text-heading underline hover:no-underline focus:outline-none",children:s("common:text-terms")})," ","&"," ",(0,n.jsx)(Z.Z,{href:D.Z.POLICY,className:"text-heading underline hover:no-underline focus:outline-none",children:s("common:text-policy")})," ","and to receive promotional emails."]}),(0,n.jsxs)("div",{className:"bg-[#eee] mt-2 -mx-5 sm:-mx-8",children:[(0,n.jsx)("div",{className:"inline-block text-xs text-body text-center my-2 w-1/2 border-solid border-r-[1px] border-[#333]",children:(0,n.jsx)("button",{type:"button",className:"text-xs text-heading underline font-extralight hover:no-underline focus:outline-none",onClick:P,children:"Member sign in"})}),(0,n.jsx)("div",{className:"inline-block text-xs text-body text-center my-2 w-1/2",children:(0,n.jsx)("button",{type:"button",className:"text-xs text-heading underline font-extralight hover:no-underline focus:outline-none",onClick:P,children:"Sell with us"})})]})," "]})}}}]);