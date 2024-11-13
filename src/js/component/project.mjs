export default function createProject(info) {

    // Project data 
    const projectName = info.name;
    const projectDescription = info.description;
    const projectTech = info.technologies;
    const projectMedia = info.media;

    // Project container
    const project = document.createElement('div');
    project.classList.add('project');

    // Project hero link
    const hero = document.createElement('a');
    hero.target = '_blank';
    hero.href =projectMedia.live.url;

    const heroImg = document.createElement('img');
    heroImg.classList.add('project-img');
    heroImg.src = projectMedia.image.url;
    heroImg.alt = `${projectName} project image`;

    if (projectName === 'BIDR' || projectName === 'WEBvest') {
        // Change heriImg position
        heroImg.style.objectPosition = 'center';
    }

    // Project info
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('project-text');

    const link = document.createElement('a');
    link.href = projectMedia.live.url;
    link.target = '_blank';

    const title = document.createElement('h2');
    title.innerHTML = projectName.toUpperCase();

    const description = document.createElement('p');
    description.classList.add('light');
    description.innerHTML = projectDescription;

    const tech = document.createElement('ul');
    tech.classList.add('technologies');

    projectTech.forEach(technology => {
        const techItem = document.createElement('li');
        if (technology === 'Figma' && projectMedia.figma.url !== '') {
            techItem.classList.add('underline');
            const link = document.createElement('a');
            link.innerHTML = technology;
            link.href = projectMedia.figma.url;
            link.target = '_blank';
            techItem.appendChild(link);
            
        } else {
            techItem.innerHTML = technology;
        }
        tech.appendChild(techItem);
    });

    const links = document.createElement('div');
    links.classList.add('project-links');

    const github = document.createElement('a');
    github.href = projectMedia.github.url;
    github.target = '_blank';

    const githubIcon = document.createElement('img');
    githubIcon.src = '/icons/github.png';
    githubIcon.alt = 'Github icon';

    github.appendChild(githubIcon);

    const website = document.createElement('a');
    website.href = projectMedia.live.url;
    website.target = '_blank';

    const websiteIcon = document.createElement('img');
    websiteIcon.src = '/icons/internet.png';
    websiteIcon.alt = 'Website icon';

    website.appendChild(websiteIcon);

    links.append(github, website);

    link.appendChild(title);

    infoContainer.append(link, description, tech, links);



    hero.appendChild(heroImg);

    project.append(hero, infoContainer);

    return project;
    

};