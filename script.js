/* =========================
   ANIMASI KETIK
========================= */

const text =
    "Terima kasih sudah menjadi bagian dari cerita hidup Intan... ❤️";

let index = 0;

function typingEffect() {

    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect, 55);
    }
}

typingEffect();


/* =========================
   LOVE MELAYANG
========================= */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 600);


/* =========================
   BUKA PESAN
========================= */

function openMessage() {

    const message = document.getElementById("message");
    const card = document.querySelector(".card");

    message.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        card.classList.add("show");
    }, 500);
}


/* =========================
   JAWABAN
========================= */

function answerYes() {

    const answer = document.getElementById("answer");

    answer.innerHTML =
        "🥹❤️ Kalau begitu, jangan lupa... Intan sayang banget sama kamu. Terima kasih sudah tetap di sini.";

    // Buat love lebih banyak
    for (let i = 0; i < 20; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);

    }
}


/* =========================
   SCROLL ANIMATION
========================= */

window.addEventListener("scroll", () => {

    const card = document.querySelector(".card");

    const position =
        card.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight * 0.85;

    if (position < screenPosition) {
        card.classList.add("show");
    }
});
