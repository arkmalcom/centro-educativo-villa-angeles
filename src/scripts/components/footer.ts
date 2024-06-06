export const footerComponent = () => {
    const footer = document.createElement('footer');
    footer.className = 'footer fixed bottom-0 h-4 bg-sky-800 w-screen flex items-center justify-between p-2';
    footer.innerHTML = `
    <p class="text-xs text-sky-100 font-thin">&copy; 2024 - Todos los derechos reservados</p>
    <p class="text-xs text-sky-100 font-thin">Desarrollado por Malcom Calivar</p>
    `;

    return footer;
};