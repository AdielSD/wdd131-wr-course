const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
currentyear.textContent = today.getFullYear();


lastModified.innerHTML = `Last Modified: <span class="highlight">
  ${document.lastModified}
</span>`;




const menuButton = document.querySelector('#menuButton');
const mainnav = document.querySelector('.navbar ul');

menuButton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  menuButton.classList.toggle('show');
});
