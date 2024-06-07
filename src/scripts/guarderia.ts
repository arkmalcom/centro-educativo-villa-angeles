import guarderia from "../assets/guarderia.jpg";
import { createSection } from "./components/section";

export const guarderiaSection = () => {
  const content: string = `
    <p class="text-sky-100">En esta guarderia no somos canibales.</p>
    <p class="text-sky-100">En las otras, se comen a los niños.</p>
    <p class="text-sky-100">No deje que su niño sea devorado.</p>
  `;

  const section = createSection(guarderia, content, "Guarderia");
  section.id = "guarderia";

  return section;
};
