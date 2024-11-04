// Lista de imagens para navegar
const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
let currentImageIndex = 0;

// Função para alterar a imagem principal ao clicar na miniatura
function changeImage(index) {
  currentImageIndex = index;
  const mainImage = document.querySelector(".main-product-image");
  if (mainImage) {
    // Verifica se o elemento existe
    mainImage.src = images[currentImageIndex];
    updateThumbnailClasses();
    updateMainImage();
  } else {
    console.error("Elemento .main-product-image não encontrado.");
  }
}

function openImageModal(index = 0) {
  currentImageIndex = index;
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentImageIndex];
  modal.style.display = "flex";
  updateThumbnailClasses();
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("modalImage").src = images[currentImageIndex];
  updateThumbnailClasses();
  updateMainImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById("modalImage").src = images[currentImageIndex];
  updateThumbnailClasses();
  updateMainImage();
}

function updateThumbnailClasses() {
  const thumbnails = document.querySelectorAll("#imageModal .flex > div");
  thumbnails.forEach((thumbnailContainer, index) => {
    const thumbnailImage = thumbnailContainer.querySelector("img");
    if (index === currentImageIndex) {
      thumbnailContainer.classList.add("image_border");
      thumbnailImage.classList.add("image_selected");
    } else {
      thumbnailContainer.classList.remove("image_border");
      thumbnailImage.classList.remove("image_selected");
    }
  });
}

window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Mobile
function updateMainImage() {
  const mainImage = document.querySelector(".main-product-image");
  const mobileMainImage = document.getElementById("mobileMainImage");

  if (mainImage) {
    mainImage.src = images[currentImageIndex];
  }

  if (mobileMainImage) {
    mobileMainImage.src = images[currentImageIndex];
  }

  updateThumbnailClasses();
}
