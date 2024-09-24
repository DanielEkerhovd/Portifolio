export default function createProject(info) {

    const projectName = info.name;
    const projectDescription = info.description;
    const projectTech = info.technologies;
    const projectMedia = info.media;


    const project = document.createElement('div');
    project.classList.add('project');

    const hero = document.createElement('a');
    hero.target = '_blank';

    const heroImg = document.createElement('img');
    heroImg.classList.add('project-img');
    heroImg.src = projectMedia.image.url;
    heroImg.alt = `${projectName} project image`;

    hero.appendChild(heroImg);


    project.appendChild(hero);

    return project;
    

};