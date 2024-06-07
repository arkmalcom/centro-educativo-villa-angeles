import guarderia from "../assets/guarderia.jpg";
import { createSection } from "./components/section";

export const guarderiaSection = () => {
  const content: string = `
    <p class="text-sky-100">Incluimos servicio full de catering para los niños</p>
  `;

  const section = createSection(guarderia, content, "Guarderia");
  section.id = "guarderia";

  return section;
};
