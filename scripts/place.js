const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
currentyear.textContent = today.getFullYear();


lastModified.innerHTML = `Last Modified: <span class="highlight">
  ${document.lastModified}
</span>`;
