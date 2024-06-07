import servicios from "../assets/servicios.jpg";
import { createSection } from "./components/section";

export const serviciosSection = () => {
  const content: string = `
        <p class="text-sky-100">Se ofrecen muchos servicios y tambien se ofrece espagueti.</p>
    `;

  const section = createSection(servicios, content, "Servicios");
  section.id = "servicios";

  return section;
};
