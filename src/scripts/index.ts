import "../styles/style.css";
import cevdalogo from "/cevdalogo.svg";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { landingSection } from "./landing.ts";
import { serviciosSection } from "./servicios.ts";
import { escuelaSection } from "./escuela.ts";
import { guarderiaSection } from "./guarderia.ts";
import { educacionContinuaSection } from "./educacion-continua.ts";
import { nosotrosSection } from "./nosotros.ts";
import { contactoSection } from "./contacto.ts";
import { footerComponent } from "./components/footer.ts";

library.add(faInstagram, faFacebook, faTwitter);
dom.watch();

const app = document.querySelector<HTMLDivElement>("#app")!;

const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
  <div class="bg-sky-800 h-50 justify-between w-96 rounded-r-full shadow-md fixed top-0 z-10">
    <div class="flex space-x-4 p-2">
      <ul class="flex space-x-4">
        <li><a href="#landing" class="text-sky-50 text-transform: uppercase font-bold hover:text-sky-200">Inicio</a></li>
        <li><a href="#servicios" class="text-sky-50 text-transform: uppercase font-bold hover:text-sky-200">Servicios</a></li>
        <li><a href="#nosotros" class="text-sky-50 text-transform: uppercase font-bold hover:text-sky-200">Nosotros</a></li>
        <li><a href="#contacto" class="text-sky-50 text-transform: uppercase font-bold hover:text-sky-200">Contacto</a></li>
      </ul>
    </div>
  </div>
`;

const socialsBar = document.createElement("div");
socialsBar.className = "socials-bar";
socialsBar.innerHTML = `
  <div class="bg-teal-500 h-15 w-32 rounded-r-full shadow-md fixed top-10 z-10">
    <div class="flex space-x-4 p-2">
      <a href="#" class="text-sky-50"><i class="fab fa-instagram"></i></a>
      <a href="#" class="text-sky-50"><i class="fab fa-facebook"></i></a>
      <a href="#" class="text-sky-50"><i class="fab fa-twitter"></i></a>
    </div>
  </div>
`;

const logo = document.createElement("img");
logo.src = cevdalogo;
logo.alt = "Centro Educativo Villa de Angeles Logo";
logo.className =
  "logo bg-white fixed right-1 h-28 w-28 flex items-center z-10 rounded-b-full border-sky-800 border-b-2 border-l-2 border-r-2 pb-1";

const container = document.createElement("div");
container.className = "container";

const landing = landingSection();
const servicios = serviciosSection();
const escuela = escuelaSection();
const guarderia = guarderiaSection();
const educacionContinua = educacionContinuaSection();
const nosotros = nosotrosSection();
const contacto = contactoSection();

container.appendChild(landing);
container.appendChild(servicios);
container.appendChild(escuela);
container.appendChild(guarderia);
container.appendChild(educacionContinua);
container.appendChild(nosotros);
container.appendChild(contacto);

const footer = footerComponent();

app.appendChild(navbar);
app.appendChild(socialsBar);
app.appendChild(logo);
app.appendChild(footer);
app.appendChild(container);

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      let targetId = link.getAttribute("href")?.substring(1);
      if (!targetId) targetId = "landing";
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });

        const currentSection = document.querySelector(".active-section");
        if (currentSection) {
          currentSection.classList.remove("active-section");
        }

        targetSection.classList.add("active-section");
      }
    });
  });
});

window.addEventListener("wheel", (event) => {
  event.preventDefault();

  const deltaY = event.deltaY;

  const currentSection = document.querySelector(".active-section");
  let nextSection;

  if (deltaY > 0) {
    nextSection = currentSection?.nextElementSibling;
  } else {
    nextSection = currentSection?.previousElementSibling;
  }

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });

    currentSection?.classList.remove("active-section");
    nextSection.classList.add("active-section");
  }
});

document.documentElement.style.scrollBehavior = "auto";
