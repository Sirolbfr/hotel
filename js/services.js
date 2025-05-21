/* ------ Variables ------ */
const ser_cont = document.getElementById("ser_cont");
const act_cont = document.getElementById("act_cont");


/* ------ JSON Fetch ------ */
fetch('./json/services.json')
.then(response => response.json())
.then(data => {
    data = Object.values(data);
    activités = Object.values(data[0]);
    services = Object.values(data[1]);
    display_articles(services, ser_cont);
    display_articles(activités, act_cont);
})
.catch(error => {
    console.error('Erreur lors du fetch :', error)
});


/* ------ Main ------ */
function create_article(obj) {
    let art = document.createElement("article");
    art.classList.add('hidden');
    art.innerHTML = `
        <section>
            <img src=${obj.img} alt=${obj.name}>
            <h2>${obj.title}</h2>
        </section>
        <p>${obj.desc}</p>
    `;
    observer.observe(art);
    return art;
}

function display_articles(l, cont) {
    l.forEach(art => {cont.appendChild(create_article(art));});
}


/* ------ Animations ------ */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {entry.target.classList.remove('show');}
    });
});

const hiddenElts = document.querySelectorAll('.hidden');
hiddenElts.forEach((elt) => observer.observe(elt));