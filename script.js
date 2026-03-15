const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});
const darkToggle = document.querySelector(".dark-mode-toggle");
const icon = darkToggle.querySelector("i");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});
const projectImage = document.querySelector(".project-image");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

projectImage.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = projectImage.src;
    document.body.style.overflow = "hidden";
});

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});