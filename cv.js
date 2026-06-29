const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// ================= MENU =================

toggle.onclick = () => {

nav.classList.toggle("active");

if (nav.classList.contains("active")) {
toggle.innerHTML = "✕";
} else {
toggle.innerHTML = "☰";
}

};

// Navbar link bosilganda menu yopiladi

const links = document.querySelectorAll(".nav a");

links.forEach(link => {

link.onclick = () => {

nav.classList.remove("active");
toggle.innerHTML = "☰";

};

});

// ================= SEARCH =================

const search = document.querySelector("#search");
const cards = document.querySelectorAll(".clip-card");
const empty = document.querySelector("#empty");

search.addEventListener("input", () => {

const text = search.value.toLowerCase();
let found = false;

cards.forEach(card => {

const title = card.querySelector("h3")
  .textContent
  .toLowerCase();

const tags = card.querySelector(".tags")
  .textContent
  .toLowerCase();

if (
  text === "" ||
  title.includes(text) ||
  tags.includes(text)
) {

  card.style.display = "block";
  found = true;

} else {

  card.style.display = "none";

}

});

empty.style.display = found ? "none" : "block";

});

// ================= DOWNLOAD + TOAST =================

const buttons = document.querySelectorAll(".download-btn");
const toast = document.querySelector(".toast");

buttons.forEach(btn => {

btn.onclick = () => {

btn.textContent = "Downloading...";

setTimeout(() => {

  btn.textContent = "Downloaded ✓";

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");
    btn.textContent = "Download";

  }, 2000);

}, 1000);

};

});

// ================= LIKE SYSTEM =================

const likes = document.querySelectorAll(".like-btn");

likes.forEach((like, index) => {

if (localStorage.getItem("like" + index) === "true") {

  like.innerHTML =
    '<i class="fa-solid fa-heart"></i>';

  like.classList.add("active");

}

like.onclick = () => {

like.classList.toggle("active");

const active =
  like.classList.contains("active");

like.innerHTML =
  active
    ? '<i class="fa-solid fa-heart"></i>'
    : '<i class="fa-regular fa-heart"></i>';

localStorage.setItem(
  "like" + index,
  active
);

};

});

// ================= FILTERS =================

const filterBtns =
document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {

btn.onclick = () => {

filterBtns.forEach(b =>
  b.classList.remove("active")
);

btn.classList.add("active");

const filter =
  btn.dataset.filter.toLowerCase();

let found = false;

cards.forEach(card => {

  const tags =
    card.querySelector(".tags")
    .textContent
    .toLowerCase();

  if (
    filter === "all" ||
    tags.includes(filter)
  ) {

    card.style.display = "block";
    found = true;

  } else {

    card.style.display = "none";

  }

});

empty.style.display =
  found ? "none" : "block";

};

});

// ================= FULLSCREEN VIDEO PLAYER =================

const modal = document.querySelector(".modal");
const modalVideo = document.querySelector(".modal-video");
const closeModal = document.querySelector(".close-modal");

const previews =
document.querySelectorAll(".preview-video");

// Card bosilganda fullscreen player

previews.forEach(video => {

video.parentElement.onclick = () => {

modal.classList.add("show");

modalVideo.src =
  video.dataset.video;

modalVideo.play();

};

});

// X tugmasi

closeModal.onclick = () => {

modal.classList.remove("show");

modalVideo.pause();
modalVideo.currentTime = 0;

};

// Tashqariga bosilsa yopiladi

modal.onclick = (e) => {

if (e.target === modal) {

modal.classList.remove("show");

modalVideo.pause();
modalVideo.currentTime = 0;

}

};

// ================= VIDEO PREVIEW =================

previews.forEach(video => {

video.parentElement.addEventListener(
"mouseenter",
() => {

  video.play();

}

);

video.parentElement.addEventListener(
"mouseleave",
() => {

  video.pause();
  video.currentTime = 0;

}

);

});

// ================= BACK TO TOP =================

const topBtn =
document.querySelector("#topBtn");

window.addEventListener("scroll", () => {

if (window.scrollY > 300) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

});

topBtn.onclick = () => {

window.scrollTo({
top: 0,
behavior: "smooth"
});

};
// ================= LOADER =================

window.addEventListener("load", () => {

  const loader =
    document.querySelector("#loader");

  setTimeout(() => {

    loader.classList.add("hide");

  }, 1200);

});