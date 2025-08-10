
//**** */sidenavbar
let mobileBottomBar = document.querySelector(".mobileBottomBar");
let menuToggle = document.querySelector(".menuToggle");

function activeMobileMenu() {
    if (!mobileMenu.classList.contains("openSideNav")) {
        mobileMenu.classList.add("openSideNav");
    } else {
        mobileMenu.classList.remove("openSideNav");
    }
}

menuToggle.addEventListener("click", activeMobileMenu);

//*****/loader

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

//**** */ change bg

let hero = document.querySelector(".hero")
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    hero.style.backgroundImage = 'url("./img/' + imgsArray[randomNumber] + '")';
}, 2000);

//***** */hide extra cards

let showBtn = document.querySelector("#showBtn");
let extraCards = document.querySelectorAll(".extra-cards");

showBtn.addEventListener("click", function () {
    extraCards.forEach(card => {
        card.classList.toggle("d-none");
    });

    if (this.innerText === "Show More") {
        this.innerText = "Show Less";
        this.style.backgroundColor = "red";
    } else {
        this.innerText = "Show More";
        this.style.backgroundColor = "green";
    }
});

//**** */show video

let isVideoVisible = false;

let btn = document.getElementById("watch");
let content = document.querySelector(".content");
let videoContent = document.getElementById("videoContent");
let video = videoContent.querySelector("video");

btn.addEventListener("click", function () {
    if (!isVideoVisible) {
        content.style.display = "none";
        videoContent.style.display = "block";
        video.currentTime = 0;
        video.play();
        btn.innerText = "Read Me";
        isVideoVisible = true;
    } else {
        content.style.display = "block";
        videoContent.style.display = "none";
        btn.innerText = "Watch Me";
        video.pause();
        video.currentTime = 0;
        isVideoVisible = false;
    }
});


//**** */accordion control

let AccordionBtn = document.querySelectorAll(".AccordionBtn");
let Accordion_text = document.querySelectorAll(".Accordion_text");
let Icons = document.querySelectorAll(".AccordionBtn i");

AccordionBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        for (let x = 0; x < AccordionBtn.length; x++) {
            if (index != x) {
                Accordion_text[x].style.height = null;
                Icons[x].style.transform = "rotate(0deg)";

            }
        }
        if (Accordion_text[index].style.height == 0) {
            Accordion_text[index].style.height = Accordion_text[index].scrollHeight + "px";
            Icons[index].style.transform = "rotate(180deg)";
        } else {
            Accordion_text[index].style.height = null;
            Icons[index].style.transform = "rotate(0deg)";

        }

    });

});



