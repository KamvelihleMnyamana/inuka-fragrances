// Smooth Scroll
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Interactive Gallery
const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    const modalImage = document.createElement("img");
    modalImage.src = image.src;
    modalImage.style.maxWidth = "80%";
    modalImage.style.maxHeight = "80%";
    modalImage.style.borderRadius = "10px";

    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    modal.addEventListener("click", () => {
      modal.remove();
    });
  });
});

// Back to Top Button
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.backgroundColor = "#ff6699";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "50%";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
backToTopButton.style.display = "none"; // Hidden initially
backToTopButton.style.fontSize = "1.5rem";

document.body.appendChild(backToTopButton);

// Show/Hide Back to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to Top
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Nav Links
document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html") // Fetch the navigation file
        .then(response => response.text()) // Convert response to text
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data; // Insert nav into placeholder
        })
        .catch(error => console.error("Error loading navigation:", error));
});
