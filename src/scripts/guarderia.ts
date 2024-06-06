import guarderia from '../assets/guarderia.jpg';
import { createSection } from './components/section';

export const guarderiaSection = () => {
    const content: string = `
    <h1 class="text-white-500 z-100">Guardería</h1>
    `

    const section = createSection(guarderia, content);
    section.id = 'guarderia';

    return section;
}