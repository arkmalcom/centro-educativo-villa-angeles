import contacto from "../assets/contacto.jpg";
import { createSection } from "./components/section";

export const contactoSection = () => {
  const content: string = `
    <div class="relative top-36 left-1/4 m-2 z-100 lg:w-1/2 sm:w-96 h-96 bg-gradient-to-r from-sky-800 to-transparent border-t-2 border-l-2 border-sky-800 p-2">
        <h1 class="text-transform: uppercase text-sky-100">Contacto</h1>
        <p class="text-sky-100">Por favor no nos contacten para entablar demandas.</p>
    </div>
    `;

  const section = createSection(contacto, content);
  section.id = "contacto";

  return section;
};
