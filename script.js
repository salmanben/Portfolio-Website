
var ul = document.querySelector("#navbar ul")
var h1 = document.querySelector("h1")
var socialIcons = document.querySelectorAll(" #welcome-section .social-icons i")
var downloadCvBtn = document.querySelector("#download-cv-btn")
var statistics = document.querySelector("#statistics")
var aboutText = document.querySelector("#about-section .text")
var aboutImg = document.querySelector("#about-section .img-div")
var cardsServices = document.querySelectorAll("#services-section .cards .card >*");


var cardsprojects = document.querySelectorAll(" #projects-section .cards .card")
var contactForm = document.querySelector("form")
var slides = document.querySelector(".mySwiper")
var sr = ScrollReveal({
    duration: 1000,
    mobile:true,
    reset:true,
    distance:"300px",
    useDelay:"once",
    scale: "0.5"

})
   sr.reveal(ul,{
        origin:"top",
        delay:50,
        reset:false,
    })
    sr.reveal(downloadCvBtn,{
        origin:"top",
        delay:500
    })
    sr.reveal(h1,{
        origin:"top",
    })
    sr.reveal(statistics,{
        origin:"bottom",
        delay:1000
    })
    
    sr.reveal(socialIcons,{
        origin:"bottom",
        interval:100,
        delay:300
    })


    sr.reveal(aboutImg,{
        origin:"left",
    })


    sr.reveal(aboutText,{
        origin:"right",
    })

    sr.reveal(cardsServices,{
        origin:"left",
        interval:80,
   }) 

    sr.reveal(cardsprojects,{
        origin:"left",
        interval:100
    })
    sr.reveal(slides,{
        origin:"top",
        
    })
    sr.reveal(contactForm,{
        origin:"bottom",
    })

    var bars = document.querySelector(".fa-bars")
    var x = document.querySelector(".fa-xmark")
    var li = ul.querySelectorAll("li")
    
    bars.onclick = ()=>{
        ul.classList.add("active");
        li.forEach((e,id)=>{
            e.classList.add("active")
            e.style.transition = (id + 4) / 10 + "s"
        })
        bars.style.transform = "scale(0)"
        x.style.transform = "scale(1)"
    }
    x.onclick = ()=>{
        ul.classList.remove("active");
        setTimeout(()=>li.forEach((e,id)=>e.classList.remove("active")),300)
        bars.style.transform = "scale(1)"
        x.style.transform = "scale(0)"
    }
var swiper = new Swiper(".mySwiper",{
    navigation:{
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
    },
    pagination:{
        el:".swiper-pagination",
        clickable: true
    },
    grabCursor:true,
    spaceBetween : 30,
    slidesPerView:"1",
    keyboar:true,
    breakpoints:{
        600:{
            slidesPerView:"2",
        },
       950:{
        slidesPerView:"3",
       }
    }
})
