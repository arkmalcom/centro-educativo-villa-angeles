import nosotros from "../assets/nosotros.jpg";
import { createSection } from "./components/section";

export const nosotrosSection = () => {
  const content: string = `
    <div class="relative top-1/4 z-100 lg:w-1/2 sm:w-96 h-96 bg-gradient-to-r from-sky-800 to-transparent border-t-2 border-l-2 border-sky-800 p-2">
        <h1 class="text-transform: uppercase text-sky-100">Nosotros</h1>
        <p class="text-sky-100">Esta foto no es nuestra pero estamos buenos igual.</p>
    </div>
    `;

  const section = createSection(nosotros, content);
  section.id = "nosotros";

  return section;
};
