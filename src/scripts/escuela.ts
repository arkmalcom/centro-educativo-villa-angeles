import escuela from "../assets/escuela.jpg";
import { createSection } from "./components/section";

export const escuelaSection = () => {
  const content: string = `
    <p class="text-sky-100">Aqui solo se preparan niños para Harvard.</p>
  `;

  const section = createSection(escuela, content, "Escuela");
  section.id = "escuela";

  return section;
};
