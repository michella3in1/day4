let projects = []

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById("input-project-title").value
    let content = document.getElementById("input-project-content").value
    let image = document.getElementById("input-project-image")

    image = URL.createObjectURL(image.files[0])

    let project = {
        title,
        content,
        image,
        postAt: "10 August 2023",
        author: "Banana Musang King",
    };

    projects.push(project);
    console.log(project);
    renderProjects();
}

function renderProjects() {
    console.log(projects);

    let containerProject = document.getElementById("contents")

    containerProject.innerHTML = ""

    for (let i = 0; i < projects.length; i++) {
        containerProject.innerHTML += `
        <div class="project-list-item">
            <div class="project-image">
                <img src="${projects[i].image}" alt="" />
            </div>
            <div class="project-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">${projects[i].title}</a>
                </h1>
                <div class="detail-project-content">
                    10 AUG 2022 | Banana Musang King
                    ${projects[i].postAt} | ${projects[i].author}
                </div>
                <p>
                    ${projects[i].content}
                </p>
            </div>
        </div>
        `;
    }
}