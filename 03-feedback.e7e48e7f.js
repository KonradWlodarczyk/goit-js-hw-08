function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,u=setTimeout(w,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function w(){var e=g();if(j(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?d(n,r-(e-l)):n}(e))}function S(e){return u=void 0,v&&i?b(e):(i=o=void 0,a)}function x(){var e=g(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},x.flush=function(){return void 0===u?a:S(g())},x}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form");b.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.target;if(""===t.value||""===n.value)return console.log("Please fill in all the fields!");console.log(`submited email: "${t.value}", message: "${n.value}"`),localStorage.removeItem(h),e.target.reset()}));const h="feedback-form-state",j=localStorage.getItem(h);let w=JSON.parse(j);var S;function x(e,t){w[e]=t,localStorage.setItem(h,JSON.stringify(w))}null===w&&(w={email:"",message:""}),S=w,document.querySelector("input[name=email]").value=S.email,document.querySelector("textarea[name=message]").textContent=S.message,b.addEventListener("input",e(t)((function(e){const t=e.target.name,n=e.target.value;switch(t){case"email":case"message":x(t,n)}}),500));
//# sourceMappingURL=03-feedback.e7e48e7f.js.map
