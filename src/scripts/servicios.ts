import servicios from "../assets/servicios.jpg";
import { createSection } from "./components/section";

export const serviciosSection = () => {
  const content: string = `
    <div class="relative top-36 left-1/4 m-2 z-100 lg:w-1/2 sm:w-96 h-96 bg-gradient-to-r from-sky-800 to-transparent border-t-2 border-l-2 border-sky-800 p-2">
        <h1 class="text-transform: uppercase text-sky-100">Servicios</h1>
        <p class="text-sky-100">Se ofrecen muchos servicios y tambien se ofrece espagueti.</p>
    </div>
    `;

  const section = createSection(servicios, content);
  section.id = "servicios";

  return section;
};
