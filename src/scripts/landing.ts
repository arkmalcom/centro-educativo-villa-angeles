import escuela from '../assets/escuela.jpg';
import { createSection } from './components/section';

export const landingSection = () => {
    const content: string = `
    <div class="absolute bottom-1/4 right-1/4 border-b-4 border-l-4 border-sky-800 w-1/4">
        <h1 class="bg-sky-800 text-sky-100 w-36 p-1 rounded-r-full font-semibold">Nuestros servicios</h1>
        <ul class="flex space-x-4">
            <li><h1 class="text-sky-500 z-100">Escuela</h1></li>
            <li><h1>Centro Educativo Villa de Angeles</h1></li>
            <li><h1>Desde 1999</h1></li>
        </ul>
    </div>
    `

    const section = createSection(escuela, content, true);
    section.id = 'landing';

    return section;
}