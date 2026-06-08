/* =========================
   GLOBAL
========================= */

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
scroll-behavior:smooth;
}

:root{
--primary:#00e5ff;
--secondary:#8b5cf6;
--dark:#070b17;
--glass:rgba(255,255,255,.08);
--border:rgba(255,255,255,.15);
--white:#ffffff;
}

body{
background:linear-gradient(
135deg,
#050816,
#0d1020,
#10172d,
#0a0f1f
);
background-size:400% 400%;
animation:gradientMove 15s ease infinite;
color:white;
overflow-x:hidden;
min-height:100vh;
}

@keyframes gradientMove{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

/* =========================
   LOADER
========================= */

#loader{
position:fixed;
inset:0;
background:#050816;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:99999;
}

.loader-circle{
width:80px;
height:80px;
border:5px solid rgba(255,255,255,.15);
border-top:5px solid var(--primary);
border-radius:50%;
animation:spin 1s linear infinite;
}

@keyframes spin{
100%{
transform:rotate(360deg);
}
}

#loader h2{
margin-top:20px;
font-size:18px;
font-weight:500;
}

/* =========================
   CUSTOM CURSOR
========================= */

.cursor{
width:25px;
height:25px;
border:2px solid var(--primary);
border-radius:50%;
position:fixed;
pointer-events:none;
z-index:9999;
backdrop-filter:blur(5px);
transform:translate(-50%,-50%);
transition:.1s;
}

/* =========================
   FLOATING BLOBS
========================= */

.bg-animation{
position:fixed;
inset:0;
overflow:hidden;
z-index:-1;
}

.bg-animation span{
position:absolute;
display:block;
border-radius:50%;
filter:blur(60px);
animation:floatBlob linear infinite;
}

.bg-animation span:nth-child(1){
width:250px;
height:250px;
background:#00e5ff33;
left:5%;
top:10%;
animation-duration:18s;
}

.bg-animation span:nth-child(2){
width:300px;
height:300px;
background:#8b5cf633;
right:10%;
top:20%;
animation-duration:22s;
}

.bg-animation span:nth-child(3){
width:250px;
height:250px;
background:#00ff8830;
left:30%;
bottom:10%;
animation-duration:20s;
}

.bg-animation span:nth-child(4){
width:220px;
height:220px;
background:#ff00aa22;
right:20%;
bottom:15%;
animation-duration:17s;
}

.bg-animation span:nth-child(5){
width:180px;
height:180px;
background:#ffffff18;
left:60%;
top:5%;
animation-duration:16s;
}

.bg-animation span:nth-child(6){
width:350px;
height:350px;
background:#00e5ff15;
left:45%;
top:45%;
animation-duration:25s;
}

@keyframes floatBlob{
0%{
transform:translateY(0px) translateX(0px);
}
50%{
transform:translateY(-60px) translateX(40px);
}
100%{
transform:translateY(0px) translateX(0px);
}
}

/* =========================
   GLASS EFFECT
========================= */

.glass{
background:var(--glass);
backdrop-filter:blur(18px);
-webkit-backdrop-filter:blur(18px);
border:1px solid var(--border);
box-shadow:
0 8px 32px rgba(0,0,0,.35);
}

/* =========================
   NAVBAR
========================= */

.navbar{
width:90%;
margin:auto;
padding:25px 0;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
z-index:100;
}

.logo{
font-size:32px;
font-weight:700;
}

.logo span{
color:var(--primary);
}

.nav-links{
display:flex;
gap:30px;
list-style:none;
}

.nav-links a{
color:white;
text-decoration:none;
font-weight:500;
transition:.3s;
}

.nav-links a:hover{
color:var(--primary);
}

.menu-btn{
display:none;
font-size:28px;
cursor:pointer;
}

/* =========================
   HERO
========================= */

.hero{
width:90%;
margin:auto;
min-height:100vh;
display:flex;
align-items:center;
justify-content:space-between;
gap:50px;
}

.hero-content{
flex:1;
}

.hero-content h3{
font-size:24px;
opacity:.8;
}

.hero-content h1{
font-size:70px;
margin:10px 0;
line-height:1;
}

.hero-content h2{
font-size:32px;
color:var(--primary);
margin-bottom:20px;
}

.hero-content p{
max-width:600px;
line-height:1.8;
opacity:.9;
}

.hero-buttons{
margin-top:30px;
display:flex;
gap:20px;
}

.btn{
padding:14px 32px;
background:var(--primary);
color:black;
font-weight:600;
border-radius:50px;
text-decoration:none;
transition:.4s;
}

.btn:hover{
transform:translateY(-5px);
}

.btn-outline{
background:transparent;
border:2px solid var(--primary);
color:white;
}

/* =========================
   PROFILE
========================= */

.hero-image{
width:380px;
padding:25px;
border-radius:30px;
text-align:center;
transition:.4s;
}

.hero-image:hover{
transform:rotateY(8deg)
rotateX(8deg);
}

.hero-image img{
width:100%;
border-radius:20px;
}

.upload-area{
margin-top:20px;
}

.upload-area input{
display:none;
}

.upload-area label{
padding:12px 24px;
background:var(--primary);
color:black;
border-radius:40px;
cursor:pointer;
font-weight:600;
display:inline-block;
}

/* =========================
   SECTIONS
========================= */

section{
padding:100px 5%;
}

.section-title{
text-align:center;
font-size:48px;
margin-bottom:60px;
}

.section-card{
padding:40px;
border-radius:25px;
max-width:1000px;
margin:auto;
}

.section-card p{
line-height:1.9;
}

/* =========================
   SKILLS
========================= */

.skills-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.skill-card{
padding:30px;
border-radius:25px;
text-align:center;
transition:.4s;
}

.skill-card:hover{
transform:translateY(-10px);
}

.skill-card i{
font-size:50px;
color:var(--primary);
margin-bottom:20px;
}

.progress{
width:100%;
height:10px;
background:rgba(255,255,255,.08);
border-radius:30px;
margin-top:15px;
overflow:hidden;
}

.progress span{
display:block;
height:100%;
background:linear-gradient(
90deg,
var(--primary),
var(--secondary)
);
border-radius:30px;
animation:fillBar 3s ease;
}

@keyframes fillBar{
from{
width:0;
}
}

/* =========================
   PROJECTS
========================= */

.project-grid{
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(320px,1fr));
gap:30px;
}

.project-card{
padding:30px;
border-radius:25px;
transition:.4s;
}

.project-card:hover{
transform:translateY(-12px);
}

.project-image{
font-size:60px;
color:var(--primary);
margin-bottom:20px;
}

.project-btn{
display:inline-block;
margin-top:20px;
text-decoration:none;
color:white;
border:1px solid var(--primary);
padding:10px 20px;
border-radius:30px;
}

/* =========================
   CONTACT
========================= */

.contact-card{
max-width:700px;
margin:auto;
padding:40px;
border-radius:25px;
}

.contact-card form{
display:flex;
flex-direction:column;
gap:20px;
}

.contact-card input,
.contact-card textarea{
padding:15px;
background:rgba(255,255,255,.05);
border:1px solid rgba(255,255,255,.1);
color:white;
border-radius:15px;
outline:none;
}

.contact-card button{
padding:15px;
border:none;
background:var(--primary);
border-radius:15px;
font-weight:600;
cursor:pointer;
}

/* =========================
   FOOTER
========================= */

footer{
padding:40px;
text-align:center;
}

.socials{
display:flex;
justify-content:center;
gap:20px;
margin-bottom:20px;
}

.socials a{
width:50px;
height:50px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
background:rgba(255,255,255,.08);
color:white;
font-size:20px;
text-decoration:none;
}

/* =========================
   REVEAL ANIMATION
========================= */

.reveal{
opacity:0;
transform:translateY(80px);
transition:all 1s ease;
}

.reveal.active{
opacity:1;
transform:translateY(0);
}

/* =========================
   SCROLL TOP
========================= */

#scrollTop{
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:var(--primary);
cursor:pointer;
display:none;
}

/* =========================
   MOBILE
========================= */

@media(max-width:900px){

.hero{
flex-direction:column;
text-align:center;
padding-top:120px;
}

.hero-content h1{
font-size:50px;
}

.hero-image{
width:100%;
max-width:350px;
}

.nav-links{
display:none;
}

.menu-btn{
display:block;
}

.section-title{
font-size:36px;
}
}
/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1500);
});

/* =========================
   TYPING EFFECT
========================= */

const words = [
  "AI/ML Engineer",
  "Machine Learning Enthusiast",
  "Web Developer",
  "Problem Solver",
  "Tech Innovator"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {

    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(
    typeEffect,
    isDeleting ? 60 : 120
  );
}

typeEffect();

/* =========================
   PROFILE IMAGE EDIT
========================= */

const profileUpload =
  document.getElementById("profileUpload");

const profilePreview =
  document.getElementById("profilePreview");

if (profileUpload) {

  profileUpload.addEventListener(
    "change",
    function () {

      const file = this.files[0];

      if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {
          profilePreview.src = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    }
  );
}

/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
  document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

/* =========================
   SCROLL REVEAL
========================= */

const reveals =
  document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach(section => {

    const top =
      section.getBoundingClientRect().top;

    const trigger =
      window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

/* =========================
   SCROLL TOP BUTTON
========================= */

const scrollBtn =
  document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    scrollBtn.style.display = "block";

  } else {

    scrollBtn.style.display = "none";
  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
      sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {
      link.classList.add("active");
    }
  });
});

/* =========================
   MOBILE MENU
========================= */

const menuBtn =
  document.querySelector(".menu-btn");

const navMenu =
  document.querySelector(".nav-links");

if (menuBtn) {

  menuBtn.addEventListener(
    "click",
    () => {

      if (
        navMenu.style.display === "flex"
      ) {

        navMenu.style.display = "none";

      } else {

        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
      }
    }
  );
}

/* =========================
   PARALLAX EFFECT
========================= */

document.addEventListener(
  "mousemove",
  e => {

    const blobs =
      document.querySelectorAll(
        ".bg-animation span"
      );

    const x =
      (window.innerWidth / 2 -
        e.clientX) / 60;

    const y =
      (window.innerHeight / 2 -
        e.clientY) / 60;

    blobs.forEach(blob => {

      blob.style.transform =
        `translate(${x}px, ${y}px)`;

    });

  }
);

/* =========================
   3D CARD TILT
========================= */

const cards =
  document.querySelectorAll(
    ".skill-card, .project-card, .hero-image"
  );

cards.forEach(card => {

  card.addEventListener(
    "mousemove",
    e => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const rotateY =
        (x / rect.width - 0.5) * 20;

      const rotateX =
        (0.5 - y / rect.height) * 20;

      card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;
    }
  );

  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  );
});

/* =========================
   CONTACT FORM
========================= */

const form =
  document.querySelector("form");

if (form) {

  form.addEventListener(
    "submit",
    e => {

      e.preventDefault();

      alert(
        "Thank you! Your message has been received."
      );

      form.reset();
    }
  );
}

/* =========================
   FLOATING ICONS
========================= */

function createParticle() {

  const particle =
    document.createElement("div");

  particle.className = "particle";

  particle.style.left =
    Math.random() * window.innerWidth +
    "px";

  particle.style.animationDuration =
    5 + Math.random() * 5 + "s";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

setInterval(createParticle, 400);

/* =========================
   COUNTER ANIMATION
========================= */

function animateValue(
  element,
  start,
  end,
  duration
) {

  let startTime = null;

  function animation(
    currentTime
  ) {

    if (!startTime)
      startTime = currentTime;

    const progress =
      Math.min(
        (currentTime - startTime) /
        duration,
        1
      );

    element.textContent =
      Math.floor(
        progress * (end - start) + start
      );

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

/* =========================
   SECTION FADE IN
========================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          entry.target.style.opacity = "1";
          entry.target.style.transform =
            "translateY(0)";
        }
      });

    },
    {
      threshold: 0.15
    }
  );

document
  .querySelectorAll(
    ".skill-card,.project-card,.section-card"
  )
  .forEach(el => {

    el.style.opacity = "0";
    el.style.transform =
      "translateY(40px)";
    el.style.transition =
      "all 0.8s ease";

    observer.observe(el);
  });
