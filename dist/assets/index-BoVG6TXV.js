var u=Object.defineProperty;var d=(o,e,n)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var i=(o,e,n)=>d(o,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();class a{constructor(){i(this,"handleScrollClick",()=>{window.scrollBy({top:window.innerHeight*.8,behavior:"smooth"})});this.element=this.render()}render(){const e=document.createElement("section");return e.className="hero",e.innerHTML=`
            <div class = "hero__content">
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
        `,e}addEventListeners(){document.querySelector(".hero__scroll-down").addEventListener("click",this.handleScrollClick)}}class f{constructor(){this.element=this.render()}render(){const e=document.createElement("section");return e.className="about",e.id="about",e.innerHTML=`
            <h2 class="about__title ubuntu-medium">О нас</h2>
            <div class="about__cards flex-center ubuntu-medium">
                <div class="about__card flex-center">Клуб Активного Туризма "Селигер" (КАТ "Селигер") - для тех, кто любит активный отдых, весёлую компанию, путешествия, приключения и озеро Селигер.</div>
                <div class="about__card flex-center">Мы занимаемся разработкой и популяризацией активных маршрутов. <br> Наши Походы можно забронировать у наших партнеров в Москве и Санкт-Петербурге.</div>
                <div class="about__card flex-center">В городе Осташков мы приглашаем детей и подростков в <br> "Туристический кружок".</div>
            </div>
        `,e}}const h=new a,m=new f,l=document.getElementById("app");l.appendChild(h.element);l.appendChild(m.element);
