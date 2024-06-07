import "../styles/style.css";
import cevdalogo from "/cevdalogo.svg";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { landingSection } from "./landing.ts";
import { serviciosSection } from "./servicios.ts";
import { escuelaSection } from "./escuela.ts";
import { guarderiaSection } from "./guarderia.ts";
import { educacionContinuaSection } from "./educacion-continua.ts";
import { nosotrosSection } from "./nosotros.ts";
import { contactoSection } from "./contacto.ts";
import { footerComponent } from "./components/footer.ts";

library.add(faInstagram, faFacebook, faTwitter, faBars);
dom.watch();

const app = document.querySelector<HTMLDivElement>("#app")!;

const menuButton = document.createElement("div");
menuButton.className = "menu-button";
menuButton.innerHTML = `
  <button id="menu-button" class="md:hidden h-12 w-12 fixed top-0 z-20 ">
    <i class="fas fa-bars w-8 h-8 text-sky-800 active:text-sky-600"></i>
  </button>
`;


const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
  <div id="menu" class="slide-in-left md:slide-out-left md:block bg-sky-800 h-50 justify-between md:w-96 w-28 md:rounded-r-full md:shadow-md fixed md:top-0 top-10 z-10">
    <div class="flex space-x-4 p-2">
      <ul class="flex md:flex-row flex-col md:space-x-4">
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
  <div class="bg-teal-500 h-15 w-32 rounded-r-full shadow-md fixed md:top-10 max-md:bottom-10 z-10">
    <div class="flex space-x-6 p-2">
      <a href="#" class="text-sky-50 hover:text-sky-200"><i class="fab fa-instagram"></i></a>
      <a href="#" class="text-sky-50 hover:text-sky-200"><i class="fab fa-facebook"></i></a>
      <a href="#" class="text-sky-50 hover:text-sky-200"><i class="fab fa-twitter"></i></a>
    </div>
  </div>
`;

const logo = document.createElement("img");
logo.src = cevdalogo;
logo.alt = "Centro Educativo Villa de Angeles Logo";
logo.className =
  "logo bg-white fixed md:right-1 right-4 md:h-24 md:w-24 lg:h-28 lg:w-28 w-20 h-20 flex items-center z-10 rounded-b-full border-sky-800 border-b-2 border-l-2 border-r-2 pb-1";

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

app.appendChild(menuButton);
app.appendChild(navbar);
app.appendChild(socialsBar);
app.appendChild(logo);
app.appendChild(footer);
app.appendChild(container);

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {

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

window.addEventListener("wheel", debounce((event: WheelEvent) => {
  event.preventDefault();
  handleScroll(event.deltaY);
}, 100));

let startY: number;
let isScrolling: boolean = false;

document.addEventListener("touchstart", (event: TouchEvent) => {
  startY = event.touches[0].clientY;
});

document.addEventListener("touchmove", (event: TouchEvent) => {
  if (isScrolling) return;

  const touchY: number = event.touches[0].clientY;
  const deltaY: number = startY - touchY;

  if (Math.abs(deltaY) > 30) {
    isScrolling = true;
    handleScroll(deltaY);
    setTimeout(() => {
      isScrolling = false;
    }, 800);
  }
});

function handleScroll(deltaY: number) {
  const currentSection: HTMLElement | null = document.querySelector(".active-section");
  let nextSection: HTMLElement | null;

  if (deltaY > 0) {
    nextSection = currentSection?.nextElementSibling as HTMLElement | null;
  } else {
    nextSection = currentSection?.previousElementSibling as HTMLElement | null;
  }

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
    currentSection?.classList.remove("active-section");
    nextSection.classList.add("active-section");
  }
}

document.documentElement.style.scrollBehavior = "auto";

function debounce(func: (this: any, ...args: any[]) => void, wait: number): (...args: any[]) => void {
  let timeout: number | undefined;
  return function(this: any, ...args: any[]): void {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}



document.getElementById("menu-button")?.addEventListener("click", () => {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("slide-in-left");
    menu.classList.toggle("slide-out-left");
  }
});