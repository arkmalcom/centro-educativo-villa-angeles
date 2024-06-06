
export const createSection = (backgroundImage: string, content: string, landing: boolean = false) => {
    const section = document.createElement('section');
    section.className = 'section h-screen w-screen bg-cover bg-center bg-fixed';
    if (landing) {
        section.classList.add('active-section');
    }
    section.style.backgroundImage = `url(${backgroundImage})`;
    section.innerHTML = content;

    return section;
}