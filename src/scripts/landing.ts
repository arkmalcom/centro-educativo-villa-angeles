import landing from "../assets/landing.jpg";
import servicioEscuela from "../assets/servicio-escuela.jpg";
import servicioGuarderia from "../assets/servicio-guarderia.jpg";
import servicioEducacionContinua from "../assets/servicio-educacion-continua.jpg";
import { createSection } from "./components/section";

export const landingSection = () => {
  const content: string = `
    <div class="relative md:top-1/3 lg:top-2/3 md:left-52 lg:left-1/2 left-2 border-b-4 border-l-4 border-sky-600 lg:w-2/6 md:w-3/4 w-40 top-1/3">
      <h1 class="bg-sky-600 text-sky-100 w-36 pb-1 rounded-r-full font-semibold">Nuestros servicios</h1>
      <ul class="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 p-1">
          <li>
              <a href="#escuela">
                  <div class="md:w-48 md:h-52 w-36 h-36 border-2 border-sky-800 overflow-hidden bg-black">
                      <img src="${servicioEscuela}" alt="Servicio de escuela" class="w-full h-full object-cover transition-all duration-500 hover:scale-110 transition-opacity hover:opacity-60" />
                      <div class="bg-amber-900 w-full h-10 relative bottom-10 p-1">
                          <p class="text-sky-100 uppercase text-center text-lg font-bold">Escuela</p>
                      </div>
                  </div>
              </a>
          </li>
          <li>
              <a href="#guarderia">
                  <div class="md:w-48 md:h-52 w-36 h-36 border-2 border-sky-800 overflow-hidden bg-black">
                      <img src="${servicioGuarderia}" alt="Servicio de guarderia" class="w-full h-full object-cover transition-all duration-500 hover:scale-110 transition-opacity hover:opacity-60" />
                      <div class="bg-amber-900 w-full h-10 relative bottom-10 p-1">
                          <p class="text-sky-100 uppercase text-center text-lg font-bold">Guarderia</p>
                      </div>
                  </div>
              </a>
          </li>
          <li>
              <a href="#educacion-continua">
                  <div class="md:w-48 md:h-52 w-36 h-36 border-2 border-sky-800 overflow-hidden bg-black">
                      <img src="${servicioEducacionContinua}" alt="Servicio de educacion continua" class="w-full h-full object-cover transition-all duration-500 hover:scale-110 transition-opacity hover:opacity-60" />
                      <div class="bg-amber-900 w-full h-10 relative bottom-10 p-1">
                          <p class="text-sky-100 uppercase text-center text-sm font-bold py-1">Educacion Continua</p>
                      </div>
                  </div>
              </a>
          </li>
      </ul>
    </div>
    `;

  const section = createSection(landing, content, "", true);
  section.id = "landing";

  return section;
};
