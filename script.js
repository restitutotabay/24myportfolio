// -----NAVIGATION BAR FUNCTION-----
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }
    else {
        menuBtn.className = "nav-menu"
    }
}

function hideMenu() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className.includes("responsive")) {
        menuBtn.className = "nav-menu";
    }
}

// Add event listeners to each nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', hideMenu);
});


// -----ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING-----
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0,0.1)";
        navHeader.style.height = "70px";
        navHeader.lineHeight = "70px";
    }
    else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// -----TYPING EFFECT-----
var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Developer","Sales Consultant","Bartender"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 900
})

// -----SCROLL REVEAL ANIMATION-----
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// HOME
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 300})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.featured-image',{delay: 400})

// HEADINGS
sr.reveal('.top-header',{})

// PROJECT BOX
sr.reveal('.project-box',{interval: 300})

// SCROLL REVEAL LEFT-RIGHT ANIMATION
// SCROLL LEFT
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

// SCROLL RIGHT
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

// SCROLL BOTTOM
const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})
srBottom.reveal('',{delay: 100})


// -----CHANGE ACTIVE LINK-----
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);

    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        document.body.classList.toggle('dark')
    })

// -----DARK MODE-----
    // const body = document.querySelector("body"),
    // toggleSwitch = document.getElementById("toggle-switch");

    // toggleSwitch.addEventListener('click', () => {
    //     body.classList.toggle("dark");
    // })

    //Contact Message
    const form = document.querySelector('form');
    const fullName = document.getElementById("names");
    const email =  document.getElementById("email");
    const mess =  document.getElementById("message");

    function sendEmail() {
        const bodyMessage = `Full Name: ${fullName.value}<br> 
                             Email: ${email.value}<br> 
                             Message: ${mess.value}`;

        Email.send({
            SecureToken : "09952ba3-be41-4b4e-982c-92d3873a2b72",
            To : "librewebsite22@gmail.com",
            From : "librewebsite22@gmail.com",
            Subject : fullName.value,
            Body : bodyMessage
        }).then(
            message => {
                if (message == "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                }
            }
        );
    }

    function checkInputs() {
        const items = document.querySelectorAll(".item");

        for (const item of items) {
            if (item.value == "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
            if (items[1].value != "") {
                checkEmail();
            }

            items[1].addEventListener("keyup", () => {
                checkEmail();
            });

            item.addEventListener("keyup", () => {
                if (item.value != "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                }
                else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            });
        }
    }

    function checkEmail() {
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

        const errorTxtEmail = document.querySelector(".error-txt.email");

        if (!email.value.match(emailRegex)) {
            email.classList.add("error");
            email.parentElement.classList.add("error");

            if (email.value != "") {
                errorTxtEmail.innerText = "Enter a valid email address";
            }
            else {
                errorTxtEmail.innerText = "Email Address can't be blank";
            }
        }
        else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error"); 
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();

        if (!fullName.classList.contains("error") 
        && !email.classList.contains("error") 
        && !mess.classList.contains("error")) {
            sendEmail();

            form.reset();
            return false;
        }
    });
