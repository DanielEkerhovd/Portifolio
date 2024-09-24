import importJSON from "/src/js/importJSON.mjs";
import createProject from "/src/js/component/project.mjs";

const response = await importJSON("/src/json/projects.json");
const data = response.projects;

const container = document.getElementById('projects');

data.forEach(element => {
    const project = createProject(element);
    container.appendChild(project);
});