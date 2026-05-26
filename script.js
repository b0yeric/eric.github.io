const projects = [
    {
        title: "Project One",
        image: "https://picsum.photos/900/600?1",
        description: "A short description of the artwork."
    },
    {
        title: "Project Two",
        image: "https://picsum.photos/900/600?2",
        description: "Another project with different work."
    },
    {
        title: "Project Three",
        image: "https://picsum.photos/900/600?3",
        description: "More art and notes."
    }
];

const list = document.getElementById("projectList");
const content = document.getElementById("content");

projects.forEach(project => {
    const item = document.createElement("li");
    item.textContent = project.title;

    item.addEventListener("click", () => {
        content.innerHTML = `
            <h2>${project.title}</h2>
            <img src="${project.image}" alt="${project.title}">
            <p class="description">${project.description}</p>
        `;
    });

    list.appendChild(item);
});

document.getElementById("menuButton").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
});
