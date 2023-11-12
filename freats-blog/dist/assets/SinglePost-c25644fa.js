import{a as f}from"./axios-21b846bc.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{r as E,o as C,c as I,b as t,a as c,w as d,t as m,d as O,e as l}from"./index-11ca45a1.js";const B={data(){return{post:[],placeholder:"",slashDate:"",date:"",content:"",images:[]}},methods:{fetchPost(){f.get(`https://freats-api-59bw.onrender.com/api/posts/${this.$route.params.id}`).then(s=>{this.post=s.data,this.arrayImages(this.post.images),this.placeholder=this.post.date.substring(0,10),this.slashDate=this.placeholder.replace("-","/"),this.date=this.slashDate.replace("-","/"),this.addLineBreak(this.post.content)})},arrayImages(s){const r=document.getElementById("single-image");r.src=this.post.prevImage;let e=s.indexOf(","),a,n=0;for(;e>=0;){n==0&&(a=0);let o="";n==0?o=s.substring(a,e):o=s.substring(a+2,e),a=e,e=s.indexOf(",",e+1),this.images.push(o),n++}},addLineBreak(s){console.log(this.images);const r=document.getElementById("blog-container"),e=document.createElement("div");e.classList.add("single-content");let a=s.indexOf("2006"),n,o=0,i=0;for(;a>=0;){o==0&&(n=0),console.log(n);let _="";o==0?_=s.substring(n,a)+`\r
`:_=s.substring(n+4,a)+`\r
`,n=a,a=s.indexOf("2006",a+1);const v=document.createElement("p"),b=document.createTextNode(_),u=document.createElement("br");if(v.appendChild(b),e.appendChild(v),e.appendChild(u),!(i>=this.images.length)&&this.images.length>=1){const p=document.createElement("div");p.classList.add("singlepost-image-container");const h=document.createElement("div");if(h.classList.add("card-image"),h.classList.add("singlepost-image"),this.images[o]=="none")console.log("hello");else{let g=new Image;g.src=this.images[o],g.classList.add("preview-image"),h.appendChild(g),p.appendChild(h),e.appendChild(p)}i++}o++}r.appendChild(e)}},beforeMount(){this.fetchPost()}},S={class:"home-container"},k={class:"navbar navbar-1"},w={class:"navbar-brand"},T=t("h2",{class:"navbar-logo"},"FREATS",-1),L={class:"navbar-end"},y={class:"navbar-item right-item"},$={class:"navbar-item right-item"},N={class:"navbar-item right-item"},P={class:"navbar navbar-2"},A={class:"nav-container"},D={class:"navbar-brand"},M=t("h2",{class:"navbar-logo"},"FREATS",-1),V=O('<input class="checkbox" type="checkbox"><div class="hamburger-lines"><span class="line line1"></span><span class="line line2"></span><span class="line line3"></span></div>',2),R={class:"navbar-end menu-items"},F={class:"navbar-item right-item"},H={class:"navbar-item right-item"},U={class:"navbar-item right-item"},j={class:"test-container"},q={class:"main-container"},z={class:"container single-container"},G=t("div",{class:"image-container"},[t("img",{id:"single-image",class:"single-image",src:"",alt:""})],-1),J={id:"blog-container"},K={class:"single-title"},Q={class:"single-author"},W={class:"single-time"};function X(s,r,e,a,n,o){const i=E("router-link");return C(),I("div",S,[t("nav",k,[t("div",w,[c(i,{class:"navbar-item",to:"/"},{default:d(()=>[T]),_:1})]),t("div",L,[t("div",y,[c(i,{class:"navbar-right",to:"/about"},{default:d(()=>[l("ABOUT")]),_:1})]),t("div",$,[c(i,{class:"navbar-right",to:"/posts"},{default:d(()=>[l("POSTS")]),_:1})]),t("div",N,[c(i,{class:"navbar-right",to:"/home"},{default:d(()=>[l("HOME")]),_:1})])])]),t("nav",P,[t("div",A,[t("div",D,[c(i,{class:"navbar-item",to:"/"},{default:d(()=>[M]),_:1})]),V,t("div",R,[t("div",F,[c(i,{class:"navbar-right",to:"/about"},{default:d(()=>[l("ABOUT")]),_:1})]),t("div",H,[c(i,{class:"navbar-right",to:"/posts"},{default:d(()=>[l("POSTS")]),_:1})]),t("div",U,[c(i,{class:"navbar-right",to:"/home"},{default:d(()=>[l("HOME")]),_:1})])])])]),t("div",j,[t("div",q,[t("div",z,[G,t("div",J,[t("h1",K,m(this.post.title),1),t("div",Q,m(this.post.author)+"   "+m(this.date),1),t("div",W,m(this.post.time)+" Minute Read",1)])])])])])}const et=x(B,[["render",X]]);export{et as default};
