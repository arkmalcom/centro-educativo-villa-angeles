import nosotros from "../assets/nosotros.jpg";
import { createSection } from "./components/section";

export const nosotrosSection = () => {
  const content: string = `
    <p class="text-sky-100">Esta foto no es nuestra pero estamos buenos igual.</p>
  `;

  const section = createSection(nosotros, content, "Nosotros");
  section.id = "nosotros";

  return section;
};
