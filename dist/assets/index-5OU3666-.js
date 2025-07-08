var C=Object.defineProperty;var L=t=>{throw TypeError(t)};var B=(t,e,r)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var w=(t,e,r)=>B(t,typeof e!="symbol"?e+"":e,r),b=(t,e,r)=>e.has(t)||L("Cannot "+r);var c=(t,e,r)=>(b(t,e,"read from private field"),r?r.call(t):e.get(t)),u=(t,e,r)=>e.has(t)?L("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),h=(t,e,r,l)=>(b(t,e,"write to private field"),l?l.call(t,r):e.set(t,r),r),a=(t,e,r)=>(b(t,e,"access private method"),r);var g=(t,e,r,l)=>({set _(s){h(t,e,s,r)},get _(){return c(t,e,l)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();class M{constructor(){w(this,"handleScrollClick",()=>{window.scrollBy({top:window.innerHeight*.8,behavior:"smooth"})});this.element=this.render()}render(){const e=document.createElement("section");return e.className="hero",e.innerHTML=`
            <div class = "hero__content text-center">
                <h1 class="ubuntu-medium">Клуб активного туризма <br> Селигер</h1>
                <p class="hero__subtitle ubuntu-medium">Присоединяйтесь, мы вам рады!</p>
            </div>
        
            <button class="hero__scroll-down" aria-label="Прокрутить вниз">
                <a href="#about">
                    <svg class="hero__arrow" width="38" height="19" viewBox="0 0 38.417 18.592" fill="#ffffff">
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                    </svg>
                </a>
            </button>
        `,e}addEventListeners(){document.querySelector(".hero__scroll-down").addEventListener("click",this.handleScrollClick)}}class N{constructor(){this.element=this.render()}render(){const e=document.createElement("section");return e.className="about",e.innerHTML=`
            <h2 class="about__title ubuntu-medium">О нас</h2>
            <div class="about__cards flex-center ubuntu-medium">
                <div class="about__card flex-center text-center">Клуб Активного Туризма "Селигер" (КАТ "Селигер") - для тех, кто любит активный отдых, весёлую компанию, путешествия, приключения и озеро Селигер.</div>
                <div class="about__card flex-center text-center">Мы занимаемся разработкой и популяризацией активных маршрутов. <br> Наши Походы можно забронировать у наших партнеров в Москве и Санкт-Петербурге.</div>
                <div class="about__card flex-center text-center">В городе Осташков мы приглашаем детей и подростков в <br> "Туристический кружок".</div>
            </div>
        `,e}}var o,f,d,i,x,p,v,y,E;class S{constructor(){u(this,i);u(this,o,1);u(this,f,25);u(this,d,null);this.element=a(this,i,x).call(this),h(this,d,this.element.querySelector("#gallery__image")),a(this,i,E).call(this)}}o=new WeakMap,f=new WeakMap,d=new WeakMap,i=new WeakSet,x=function(){const e=document.createElement("section");return e.className="gallery",e.innerHTML=`
            <h2>А это мы!</h2>
            <div class="imageWrapper">
                <button class="gallery__button left-button" id="left-button" aria-label="Изображение назад">
                    <svg width="38" height="19" viewBox="0 0 38.417 18.592" fill="#ffffff">
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                    </svg>
                </button>
                <div class="gallery__photo flex-center">
                    <img id="gallery__image" src="./../../assets/galleryImages/photo1.webp" alt="Описание" loading="lazy">
                </div>
                <button class="gallery__button right-button" id="right-button" aria-label="Изображение вперёд">
                    <svg width="38" height="19" viewBox="0 0 38.417 18.592" fill="#ffffff">
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                    </svg>
                </button>
            </div>
        `,e},p=function(){c(this,d).src=`./../../assets/galleryImages/photo${c(this,o)}.webp`,c(this,d).alt=`Изображение ${c(this,o)}`},v=function(){g(this,o)._++,c(this,o)>c(this,f)&&h(this,o,1),a(this,i,p).call(this)},y=function(){g(this,o)._--,c(this,o)<1&&h(this,o,c(this,f)),a(this,i,p).call(this)},E=function(){const e=this.element.querySelector("#left-button"),r=this.element.querySelector("#right-button");e.addEventListener("click",a(this,i,y).bind(this)),r.addEventListener("click",a(this,i,v).bind(this)),document.addEventListener("keydown",l=>{l.key==="ArrowLeft"&&a(this,i,y).call(this),l.key==="ArrowRight"&&a(this,i,v).call(this)})};const H=new M,O=new N,k=new S,_=document.getElementById("app");_.appendChild(H.element);_.appendChild(O.element);_.appendChild(k.element);
