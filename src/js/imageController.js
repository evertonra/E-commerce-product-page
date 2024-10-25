// Lista de imagens para navegar
const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
let currentImageIndex = 0;

// Função para abrir o modal
function openImageModal(index = 0) {
  currentImageIndex = index;
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentImageIndex];
  modal.style.display = "flex";
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Função para avançar para a próxima imagem
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("modalImage").src = images[currentImageIndex];
}

// Função para voltar para a imagem anterior
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById("modalImage").src = images[currentImageIndex];
}

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closeModal();
  }
};
