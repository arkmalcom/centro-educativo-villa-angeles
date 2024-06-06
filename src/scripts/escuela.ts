import escuela from "../assets/escuela.jpg";
import { createSection } from "./components/section";

export const escuelaSection = () => {
  const content: string = `
    <div class="relative top-36 left-1/4 m-2 z-100 lg:w-1/2 sm:w-96 h-96 bg-gradient-to-b from-sky-800 to-transparent border-t-2 border-l-2 border-r-2 border-sky-800 p-2">
        <h1 class="text-transform: uppercase text-sky-100">Escuela</h1>
        <p class="text-sky-100">Aqui solo se preparan niños para Harvard.</p>
    </div>
    `;

  const section = createSection(escuela, content);
  section.id = "escuela";

  return section;
};
