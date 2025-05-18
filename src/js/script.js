import { customLoad } from "./loading.js";
import { toggleHambuguer } from "./hamburguer.js"

const btnDireciona = document.getElementById('btnDireciona');

btnDireciona.addEventListener('click', () => {
  location.href = "https://www.google.com/maps?q=Avenida+Europa,+595,+São+Paulo";
})

toggleHambuguer();
customLoad();

