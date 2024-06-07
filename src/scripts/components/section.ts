export const createSection = (
  backgroundImage: string,
  content: string,
  title: string = "",
  landing: boolean = false,
) => {
  const section = document.createElement("section");
  section.className = "section h-screen w-screen bg-cover bg-center bg-fixed";
  section.style.backgroundImage = `url(${backgroundImage})`;
  if (landing) {
    section.classList.add("active-section");
    section.innerHTML = content;
    return section;
  }

  section.innerHTML = `
    <div class="relative top-1/4 md:left-1/4 left-16 md:w-1/2 w-2/3 h-auto bg-gradient-to-b from-sky-800 to-sky-600 border-t-2 border-l-2 border-r-2 border-sky-800 p-2">
        <h1 class="text-transform: uppercase text-sky-100">${title}</h1>
        ${content}
    </div>
  `;

  return section;
};
