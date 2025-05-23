/* ------ Variables ------ */
const pt_dej = document.querySelector("#pt_dej");
const dej = document.querySelector("#dej");
const diner = document.querySelector("#diner");


/* ------ Json Fetch ------ */
fetch("json/catering.json")
.then(reponse => reponse.json())
.then(data => {
    console.log(data);
    data = Object.values(data);
    display_menus(data[0]);
    display_menus(data[1]);
    display_menus(data[2]);
})
.catch(error => {
    console.error("Erreur lors de la récupération des données :", error);
});


/* ------ Main ------ */
function create_pt_dej(menu) {
    menu = Object.values(menu);
    let art = document.createElement("article");
    art.classList.add('hidden');
    art.innerHTML = `
        <h2>${menu[0]}</h2>
        <section>
            <p>Boisson fraîche : ${menu[1]}</p>
            <p>Collation 1 : ${menu[2]}</p>
            <p>Collation 2 : ${menu[3]}</p>
            <p>Boisson chaude : ${menu[4]}</p>
        </section>
    `;
    observer.observe(art);
    return art;
}

function create_dej_din(menu) {
    menu = Object.values(menu);
    let art = document.createElement("article");
    art.classList.add('hidden');
    art.innerHTML = `
        <h2>${menu[0]}</h2>
        <section>
            <p>Entrée : ${menu[1]}</p>
            <p>Plat : ${menu[2]}</p>
            <p>Dessert : ${menu[3]}</p>
            <p>Boisson : ${menu[4]}</p>
        </section>
    `;
    observer.observe(art);
    return art;
}

function display_menus(obj) {
    obj = Object.values(obj);
    if (obj[0].title === "Matin Logan") {
        obj.forEach (menu => {
            pt_dej.appendChild(create_pt_dej(menu));
        })
    } else if (obj[1].title === "Saveur du Pacifique") {
        obj.forEach (menu => {
            dej.appendChild(create_dej_din(menu));
        })
    } else {
        obj.forEach (menu => {
            diner.appendChild(create_dej_din(menu));
        })
    }
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