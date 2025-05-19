const act_cont = document.getElementById("act_cont");

fetch('./json/services.json')
.then(response => response.json())
.then(data => {
    data = Object.values(data);
    activités = Object.values(data[0]);
    services = Object.values(data[1]);
    display_articles(activités);
})
.catch(error => {
    console.error('Erreur lors du fetch :', error)
});

function create_article(obj) {
    let art = document.createElement("article");
    art.innerHTML = `
        <section>
            <img src=${obj.img} alt=${obj.shortName}>
            <h2>${obj.title}</h2>
        </section>
        <p>${obj.desc}</p>
    `;
    return art;
}

function display_articles(l) {
    l.forEach(art => {act_cont.appendChild(create_article(art));});
}