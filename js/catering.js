/* ------ Variables ------ */
const pt_dej = document.querySelector("#pt_dej");
const dej = document.querySelector("#dej");
const diner = document.querySelector("#diner");
const bar = document.querySelector("#bar");


/* ------ Json Fetch ------ */
fetch("json/catering.json")
.then(reponse => reponse.json())
.then(data => {
    console.log(data);
    data = Object.values(data);
    display_menus(data[0], pt_dej);
    display_menus(data[1], dej);
    display_menus(data[2], diner);
})
.catch(error => {
    console.error("Erreur lors de la récupération des données :", error);
});


/* ------ Main ------ */
function create_article(obj) {
    let art = document.createElement("article");
    art.classList.add('hidden');
    art.innerHTML = `
        <h1>${a}</h1>
        <section>
            <img src=${obj.img} alt=img_test>
            <h2>Test H2</h2>
        </section>
        <p>Test P</p>
    `;
    observer.observe(art);
    return art;
}

function display_menus(obj, cont) {
    obj.forEach (menu => {
        cont.appendChild(create_article(menu));
    })
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