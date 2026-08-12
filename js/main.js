/*==========================================
VEEMAX SOLUTIONS
Main JavaScript
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*======================================
      LOADER
    ======================================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 600);

    });

    /*======================================
      MOBILE MENU
    ======================================*/

    const menuToggle = document.querySelector(".menu-toggle");

    const navLinks = document.querySelector(".nav-links");

    if(menuToggle){

        menuToggle.addEventListener("click",()=>{

            navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

        });

    });

    /*======================================
      STICKY HEADER
    ======================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            header.classList.add("sticky");

        }

        else{

            header.classList.remove("sticky");

        }

    });

    /*======================================
      BACK TO TOP
    ======================================*/

    const backTop = document.querySelector(".back-top");

    if(backTop){

        window.addEventListener("scroll",()=>{

            if(window.scrollY > 500){

                backTop.classList.add("active");

            }

            else{

                backTop.classList.remove("active");

            }

        });

        backTop.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /*======================================
      ACTIVE NAVIGATION
    ======================================*/

    const current = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link=>{

        if(link.getAttribute("href")===current){

            link.classList.add("active");

        }

    });

});
/*==========================================
INTERSECTION OBSERVER
==========================================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

".fade-up,.fade-left,.fade-right"

).forEach(el=>{

    observer.observe(el);

});
/*==========================================
COUNTER ANIMATION
==========================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});
/*==========================================
BUTTON RIPPLE
==========================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});
/*==========================================
SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/*==========================================
PRODUCT CARD EFFECT
==========================================*/

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});
/*==========================================
LAZY IMAGE REVEAL
==========================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

imageObserver.unobserve(entry.target);

}

});

});

images.forEach(img=>{

imageObserver.observe(img);

});