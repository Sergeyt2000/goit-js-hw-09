import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t={email:"",message:""},s=document.querySelector(".feedback-form"),m="feedback-form-state";i();s.addEventListener("submit",o);s.addEventListener("input",r);function o(e){e.preventDefault();const a=e.currentTarget,{email:l,message:n}=a.elements;l.value===""||n.value===""?alert("Fill please all fields"):(console.log(t),t.email="",t.message="",localStorage.removeItem(m),a.reset())}function r(e){const{name:a,value:l}=e.target;a in t&&(t[a]=l,localStorage.setItem(m,JSON.stringify(t)))}function i(){const e=JSON.parse(localStorage.getItem(m));e&&(t.email=e.email,t.message=e.message,s.elements.email.value=e.email,s.elements.message.value=e.message)}
//# sourceMappingURL=2-form.js.map
