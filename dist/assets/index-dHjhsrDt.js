var B=s=>{throw TypeError(s)};var C=(s,e,r)=>e.has(s)||B("Cannot "+r);var l=(s,e,r)=>(C(s,e,"read from private field"),r?r.call(s):e.get(s)),a=(s,e,r)=>e.has(s)?B("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,r),d=(s,e,r,h)=>(C(s,e,"write to private field"),h?h.call(s,r):e.set(s,r),r),i=(s,e,r)=>(C(s,e,"access private method"),r);var E=(s,e,r,h)=>({set _(n){d(s,e,n,r)},get _(){return l(s,e,h)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))h(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const k of o.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&h(k)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();var g,T,q,w;class D{constructor(){a(this,g);a(this,w,()=>{window.scrollBy({top:window.innerHeight*.8,behavior:"smooth"})});this.element=i(this,g,T).call(this),i(this,g,q).call(this)}}g=new WeakSet,T=function(){const e=document.createElement("section");return e.className="hero",e.classList.add("flex-center"),e.innerHTML=`
            <div class = "hero__content text-center flex-center">
                <h1 class="ubuntu-medium">Клуб активного <br> туризма <br> Селигер</h1>
                <p class="hero__subtitle">Присоединяйтесь, мы вам рады!</p>
            </div>
        
            <button class="hero__scroll-down" aria-label="Прокрутить вниз">
                <a href="#about" aria-label="Пролистать на вкладку 'О нас'">
                    <svg class="hero__arrow" width="38" height="19" viewBox="0 0 38.417 18.592" fill="#ffffff">
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                    </svg>
                </a>
            </button>
        `,e},q=function(){this.element.querySelector(".hero__scroll-down").addEventListener("click",l(this,w))},w=new WeakMap;var y,A;class K{constructor(){a(this,y);this.element=i(this,y,A).call(this)}}y=new WeakSet,A=function(){const e=document.createElement("section");return e.className="about",e.classList.add("flex-center"),e.innerHTML=`
            <h2 class="about__title flex-center ubuntu-medium">О нас</h2>
            <div class="about__cards flex-center ubuntu-light">
                <div class="about__card flex-center text-center">Клуб Активного Туризма "Селигер" (КАТ "Селигер") - для тех, кто любит активный отдых, весёлую компанию, путешествия, приключения и озеро Селигер.</div>
                <div class="about__card flex-center text-center">Мы занимаемся разработкой и популяризацией активных маршрутов. <br> Наши Походы можно забронировать у наших партнеров в Москве и Санкт-Петербурге.</div>
                <div class="about__card flex-center text-center">В городе Осташков мы приглашаем детей и подростков в <br> "Туристический кружок".</div>
            </div>
        `,e};var c,v,m,f,u,t,S,I,N,O,P,H,M,z,p,F;class U{constructor(){a(this,t);a(this,c,1);a(this,v,25);a(this,m,null);a(this,f,!1);a(this,u,null);this.element=i(this,t,S).call(this),d(this,m,this.element.querySelector("#gallery__image")),i(this,t,F).call(this),i(this,t,M).call(this)}}c=new WeakMap,v=new WeakMap,m=new WeakMap,f=new WeakMap,u=new WeakMap,t=new WeakSet,S=function(){const e=document.createElement("section");return e.className="gallery",e.innerHTML=`
            <h2>А это мы!</h2>
            <div class="imageWrapper flex-center">
                <button class="gallery__button left-button" id="left-button" aria-label="Переключить изображение назад">
                    <svg width="38" height="19" viewBox="0 0 38.417 18.592" fill="#ffffff">
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                    </svg>
                </button>
                <div class="gallery__photo flex-center">
                    <img id="gallery__image" src="/assets/galleryImages/photo1.webp" alt="Изображение 1" loading="lazy">
                </div>
                <button class="gallery__button right-button" id="right-button" aria-label="Переключить изображение вперёд">
                    <svg width="38" height="19" viewBox="0 0 38.417 18.592" fill="#ffffff">
                        <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"/>
                    </svg>
                </button>
            </div>
        `,e},I=function(){l(this,m).src=`/assets/galleryImages/photo${l(this,c)}.webp`,l(this,m).alt=`Изображение ${l(this,c)}`},N=function(){E(this,c)._++,l(this,c)>l(this,v)&&d(this,c,1),i(this,t,I).call(this)},O=function(){E(this,c)._--,l(this,c)<1&&d(this,c,l(this,v)),i(this,t,I).call(this)},P=function(){l(this,u)&&clearInterval(l(this,u)),d(this,f,!1),i(this,t,M).call(this)},H=function(){l(this,u)&&(clearInterval(l(this,u)),d(this,u,null))},M=function(){d(this,u,setInterval(()=>{if(l(this,f)){i(this,t,H).call(this);return}i(this,t,N).call(this)},2e3))},z=function(e){e(),d(this,f,!0),i(this,t,H).call(this),setTimeout(()=>i(this,t,P).call(this),5e3)},p=function(e){e==="prev"&&i(this,t,z).call(this,i(this,t,O).bind(this)),e==="next"&&i(this,t,z).call(this,i(this,t,N).bind(this))},F=function(){const e=this.element.querySelector("#left-button"),r=this.element.querySelector("#right-button");e.addEventListener("click",()=>i(this,t,p).call(this,"prev")),r.addEventListener("click",()=>i(this,t,p).call(this,"next")),document.addEventListener("keydown",h=>{h.key==="ArrowLeft"&&i(this,t,p).call(this,"prev"),h.key==="ArrowRight"&&i(this,t,p).call(this,"next")})};var _,R;class W{constructor(){a(this,_);this.element=i(this,_,R).call(this)}}_=new WeakSet,R=function(){const e=document.createElement("section");return e.className="reviews",e.innerHTML=`
            <h2 class="ubuntu-medium" aria-label="Отзывы">Отзывы</h2>
            <div class="review_cards">
                <div class="review">
                    <h3>Роман</h3>
                    <p>Прекрасный вело-поход по "Жемчужине Селигера" в 2012 во главе с Андреем оставил на долгие года хорошие воспоминания. Теперь так и бродим по этой местности, то на лыжах, то на байдарках, то пешком. Душой прикипели! Осторожно, туризм затягивает ;)</p>
                </div>
                <div class="review">
                    <h3>Надежда</h3>
                    <p>Спасибо Андрею и Алексею - нашим инструкторам за незабываемый лыжный поход на праздничные выходные 6-8 марта! Удивительные места зимнего Селигера, песни под гитару, баня и душевная атмосфера - все это на высшем уровне!! От всей души благодарю!</p>
                </div>
            </div>
        `,e};var L,G;class X{constructor(){a(this,L);this.element=i(this,L,G).call(this)}}L=new WeakSet,G=function(){const e=document.createElement("section");return e.className="comm",e.innerHTML=`
            <div class="containerComm text-center flex-center">
                <h2 class="ubuntu-medium">Оставить заявку</h2>
                <p class="ubuntu-light">Позвоните нам по номеру или напишите: <br> +7 (993) 550-69-33 <br> kat-seliger@ya.ru</p>
            </div>
        `,e};var x,$;class j{constructor(){a(this,x);this.element=i(this,x,$).call(this)}}x=new WeakSet,$=function(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
            <div id="blockFooter1">
                <p>E-mail: kat-seliger@ya.ru</p>
                <p>Telegam: <a href="https://t.me/katseliger" target="_blank">t.me/katseliger</a></p>
                <p>Телефон: 8-993-550-69-33</p>
            </div>
            <div id="blockFooter2">
                <h6>Мы в соцсетях</h6>
                <nav>
                    <ul class="list">
                        <li>
                            <a href="https://vk.com/clubkatseliger" target="_blank" aria-label="Вконтакте">
                                <img src="./../../assets/footerImages/vk.webp" alt="Вконтакте" loading="lazy">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/katseliger" target="_blank" aria-label="Фейсбук">
                                <img src="./../../assets/footerImages/fb.webp" alt="Фейсбук" loading="lazy">
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/kat_seliger" target="_blank" aria-label="Инстаграм">
                                <img src="./../../assets/footerImages/insta.webp" alt="Инстаграм" loading="lazy">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCgSB69I0k9aXuqyiDiqFbNA" target="_blank" aria-label="Ютуб">
                                <img src="./../../assets/footerImages/yt.webp" alt="Ютуб" loading="lazy">
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        `,e};const J=new D,Q=new K,V=new U,Y=new W,Z=new X,ee=new j,b=document.getElementById("app");b.appendChild(J.element);b.appendChild(Q.element);b.appendChild(V.element);b.appendChild(Y.element);b.appendChild(Z.element);b.appendChild(ee.element);
