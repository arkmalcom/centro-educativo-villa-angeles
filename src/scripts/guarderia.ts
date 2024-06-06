import guarderia from "../assets/guarderia.jpg";
import { createSection } from "./components/section";

export const guarderiaSection = () => {
  const content: string = `
    <div class="relative top-36 m-2 z-100 lg:w-1/2 sm:w-96 h-96 bg-gradient-to-r from-sky-800 to-transparent border-t-2 border-l-2 border-sky-800 p-2">
        <h1 class="text-transform: uppercase text-sky-100">Guarderia</h1>
        <p class="text-sky-100">En esta guarderia no somos canibales.</p>
        <p class="text-sky-100">En las otras, se comen a los niños.</p>
        <p class="text-sky-100">No deje que su niño sea devorado.</p>
    </div>
    `;

  const section = createSection(guarderia, content);
  section.id = "guarderia";

  return section;
};
