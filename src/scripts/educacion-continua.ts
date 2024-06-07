import educacionContinua from "../assets/educacion-continua.jpg";
import { createSection } from "./components/section";

export const educacionContinuaSection = () => {
  const content: string = `
    <p class="text-sky-100">No necesitaran salir a atracar cuando completen nuestros cursos.</p>
  `;

  const section = createSection(
    educacionContinua,
    content,
    "Educacion Continua",
  );
  section.id = "educacion-continua";

  return section;
};
