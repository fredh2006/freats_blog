import{a as T}from"./axios-21b846bc.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{r as N,o as k,c as B,b as t,a,w as d,d as S,e as c}from"./index-4b3175ae.js";const $={data(){return{posts:[],current_page:1,records_per_page:2,cards:[],date:"",slashDate1:"",slashDate2:""}},methods:{click(){console.log("hello"),this.$router.push("/posts/6531d94d0fa3f3d231200d37")},fetchPosts(){T.get("https://freats-api-59bw.onrender.com/api/posts").then(l=>{this.posts=l.data,console.log(this.posts),console.log(this.posts[0].date);for(let s=0;s<this.posts.length;s++){this.date=this.posts[s].date.substring(0,10),this.slashDate1=this.date.replace("-","/"),this.slashDate2=this.slashDate1.replace("-","/");const b=document.getElementById("c1"),g=document.getElementById("c2"),n=document.createElement("div");n.classList.add("new-post"),n.classList.add("card");const i=document.createElement("div");i.classList.add("new-img"),i.classList.add("card-image");let e=new Image;e.src=this.posts[s].prevImage,e.classList.add("preview-image");let r=document.createElement("a");r.appendChild(e),r.classList.add("card-image"),r.href=`/posts/${this.posts[s]._id}`,i.appendChild(r);const o=document.createElement("div");o.classList.add("card-content");const v=document.createElement("div");v.classList.add("preview-title");const f=document.createTextNode(this.posts[s].title);v.appendChild(f);const h=document.createElement("div");h.classList.add("minuteread"),h.classList.add("metadata-text");const C=document.createTextNode(`${this.posts[s].time} Minute Read`);h.appendChild(C);const p=document.createElement("div");p.classList.add("namedate");const m=document.createElement("div");m.classList.add("metadata"),m.classList.add("metadata-text");const E=document.createTextNode(this.posts[s].author);m.appendChild(E);const _=document.createElement("div");_.classList.add("metadata"),_.classList.add("metadata-text");const x=document.createTextNode(this.slashDate2);_.appendChild(x),p.appendChild(m),p.appendChild(_);const u=document.createElement("div");u.classList.add("preview-content");const L=document.createTextNode(this.posts[s].firstPara);u.appendChild(L),n.appendChild(i),o.appendChild(v),o.appendChild(h),o.appendChild(p),o.appendChild(u),n.appendChild(o),s%2==0?b.appendChild(n):g.appendChild(n)}}).catch(l=>{console.log(l)})}},beforeMount(){this.fetchPosts()}},D={class:"home-container"},O={class:"navbar navbar-1"},P={class:"navbar-brand"},I=t("h2",{class:"navbar-logo"},"FREATS",-1),V={class:"navbar-end"},A={class:"navbar-item right-item"},M={class:"navbar-item right-item"},y={class:"navbar-item right-item"},R={class:"navbar navbar-2"},F={class:"nav-container"},H={class:"navbar-brand"},U=t("h2",{class:"navbar-logo"},"FREATS",-1),j=S('<input class="checkbox" type="checkbox"><div class="hamburger-lines"><span class="line line1"></span><span class="line line2"></span><span class="line line3"></span></div>',2),q={class:"navbar-end menu-items"},z={class:"navbar-item right-item"},G={class:"navbar-item right-item"},J={class:"navbar-item right-item"},K=t("div",{class:"main-container columns",id:"posts-container"},[t("div",{class:"column",id:"c1"}),t("div",{class:"column",id:"c2"})],-1);function Q(l,s,b,g,n,i){const e=N("router-link");return k(),B("div",D,[t("nav",O,[t("div",P,[a(e,{class:"navbar-item",to:"/"},{default:d(()=>[I]),_:1})]),t("div",V,[t("div",A,[a(e,{class:"navbar-right",to:"/about"},{default:d(()=>[c("ABOUT")]),_:1})]),t("div",M,[a(e,{class:"navbar-right",to:"/posts"},{default:d(()=>[c("POSTS")]),_:1})]),t("div",y,[a(e,{class:"navbar-right",to:"/home"},{default:d(()=>[c("HOME")]),_:1})])])]),t("nav",R,[t("div",F,[t("div",H,[a(e,{class:"navbar-item",to:"/"},{default:d(()=>[U]),_:1})]),j,t("div",q,[t("div",z,[a(e,{class:"navbar-right",to:"/about"},{default:d(()=>[c("ABOUT")]),_:1})]),t("div",G,[a(e,{class:"navbar-right",to:"/posts"},{default:d(()=>[c("POSTS")]),_:1})]),t("div",J,[a(e,{class:"navbar-right",to:"/home"},{default:d(()=>[c("HOME")]),_:1})])])])]),K])}const Z=w($,[["render",Q]]);export{Z as default};
