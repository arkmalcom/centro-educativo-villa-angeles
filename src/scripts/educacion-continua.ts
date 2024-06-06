import educacionContinua from "../assets/educacion-continua.jpg";
import { createSection } from "./components/section";

export const educacionContinuaSection = () => {
  const content: string = `
    <div class="relative top-36 left-1/4 m-2 z-100 lg:w-1/2 sm:w-96 h-96 bg-gradient-to-b from-sky-800 to-transparent border-t-2 border-l-2 border-r-2 border-sky-800 p-2">
        <h1 class="text-transform: uppercase text-sky-100">Educacion Continua</h1>
        <p class="text-sky-100">No necesitaran salir a atracar cuando completen nuestros cursos.</p>
    </div>
    `;

  const section = createSection(educacionContinua, content);
  section.id = "educacion-continua";

  return section;
};
