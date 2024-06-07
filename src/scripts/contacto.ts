import contacto from "../assets/contacto.jpg";
import { createSection } from "./components/section";

export const contactoSection = () => {
  const content: string = `
    <p class="text-sky-100">Por favor no nos contacten para entablar demandas.</p>
  `;

  const section = createSection(contacto, content, "Contacto");
  section.id = "contacto";

  return section;
};
