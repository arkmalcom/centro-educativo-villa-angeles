import landing from "../assets/landing.jpg";
import servicioEscuela from "../assets/servicio-escuela.jpg";
import servicioGuarderia from "../assets/servicio-guarderia.jpg";
import servicioEducacionContinua from "../assets/servicio-educacion-continua.jpg";
import { createSection } from "./components/section";

export const landingSection = () => {
  const content: string = `
    <div class="relative md:top-1/4 lg:top-1/2 md:left-20 max-md:left-1/2 md:border-l-4 max-md:border-r-4 border-sky-600 w-40 top-24">
      <h1 class="bg-sky-600 text-sky-100 md:text-left text-right md:w-36 w-40 pb-1 md:pr-0 pr-2 md:rounded-r-full max-md:rounded-l-full font-semibold">Nuestros servicios</h1>
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
                          <p class="text-sky-100 uppercase text-center md:text-sm text-xs font-bold md:py-1">Educacion Continua</p>
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
