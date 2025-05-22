/* ------ Variables ------ */

const anectdotes = [
  "Ce visiteur a vécu une soirée inoubliable sur la plage, allongé sur le sable à contempler les étoiles, fasciné par la pureté du ciel et les légendes transmises autour du feu.",
  "Touché par la beauté des lieux, cet hôte a passé des heures à dessiner et écrire sur la terrasse de son bungalow, inspiré par la lumière, les sons et les parfums du jardin tropical.",
  "Curieux de découvrir les traditions locales, cet hôte a spontanément participé à une balade en pirogue avec un habitant de l’île, échangeant sur la culture polynésienne avec beaucoup d’intérêt.",
  "Ce visiteur a passé plusieurs journées dans un bungalow sur pilotis, profitant du calme absolu pour se recentrer et admirer le lever du soleil sur le lagon.",
  "Ce visiteur a choisi de prendre tous ses petits-déjeuners en terrasse, en silence, simplement bercé par les chants des oiseaux et la lumière dorée du matin.",
  "Cet hôte a découvert un sentier derrière le jardin de l’hôtel et a passé l’après-midi à explorer la végétation luxuriante, revenant avec un sourire et des photos pleines de poésie.",
  "Cet hôte a demandé à ne pas être dérangé pendant son séjour, souhaitant s’immerger pleinement dans le rythme lent de l’île, loin de toute agitation.",
  "Ce visiteur a passé plusieurs heures allongé sur une natte à écouter le vent dans les palmiers, les yeux fermés, simplement heureux d’avoir le temps de ne rien faire.",
  "Ce visiteur descendait chaque soir jusqu’au bord du lagon pour tremper les pieds dans l’eau tiède au coucher du soleil, sans jamais manquer ce moment qu’il qualifiait de « rituel apaisant ».",
  "Cet hôte a décidé de dormir une nuit sur sa terrasse à la belle étoile, enveloppé dans un plaid, juste pour entendre les sons de la nuit et admirer la lune au-dessus du lagon.",
];
const avis = [
  "Sublime, à refaire",
  "Inoubliable",
  "Un moment magique",
  "Tout simplement parfait",
  "Exceptionnel du début à la fin",
  "Expérience incroyable",
  "Je recommande vivement",
  "Un souvenir impérissable",
  "À couper le souffle",
  "Un vrai chef-d'œuvre",
];
const img = [
  "./img/campfire.jpg",
  "./img/otemanu.jpg",
  "./img/pirogue.jpg",
  "./img/snorkeling.jpg",
  "./img/stargazing.jpg",
  "./img/header.jpg",
  "./img/pic1.jpg",
  "./img/pic4.jpg"
]

const main = document.querySelector("main");

/* ------ API Fetch ------ */

async function getData() {
  const url =
    "https://api.api-ninjas.com/v1/celebrity?min_net_worth=10000000000";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "jIVQG2bA4HzZ+5TvtybUxg==hV8aVcU0IQzBVAUW",
    },
  });
  return response.json();
}
getData().then((data) => {
  celebs = Object.values(data);
  display_celebs();
});
getData().catch((error) => {
  console.error("Erreur lors du fetch :", error);
});

/* ------ Main ------ */

function random_nbrs(len, max) {
  let res = [];
  for (let i = 0; i < len; i++) {
    let rndm = Math.floor(Math.random() * max);
    !res.includes(rndm) ? res.push(rndm) : i--;
  }
  return res;
}

const tab = random_nbrs(6, 30);
const i_anectdotes = random_nbrs(6, 10);
const i_avis = random_nbrs(6, 10);
const i_img = random_nbrs(6, 8);

function uppercased(fullname) {
  let tab = [];
  fullname.split(" ").forEach((n) => {
    tab.push(n.split("")[0].toUpperCase());
    n.split("")
      .slice(1)
      .forEach((letter) => {
        tab.push(letter);
      });
    tab.push(" ");
  });
  return tab.join("");
}

function create_celeb(celeb) {
  const art = document.createElement("article");
  art.classList.add('hidden');
  const rating = Math.floor(Math.random() * 10) / 10 + 4; // Min : 4, Max : 5
  art.innerHTML = `
  <section style="transform: rotateZ(${Math.floor(Math.random() * 70)/10 - 3.5}deg);">
    <figure>
      <img src="${img[i_img[0]]}" alt="postcard">
      <img src="./img/postcard${Math.floor(Math.random() * 2) + 1}.png" alt="postcard-border">
    </figure>
    <section class="celeb-info">
      <section class="name_rating">
        <h2>${uppercased(celeb.name)}</h2>
        <star-rating rating="${rating}"></star-rating>
      </section>
      <p>${avis[i_avis[0]]}</p>
    </section>
  </section>
  <p>${anectdotes[i_anectdotes[0]]}</p>
  `;
  i_anectdotes.shift();
  i_avis.shift();
  i_img.shift();
  observer.observe(art);
  return art;
}

function display_celebs() {
  let rndm_celebs = [];
  tab.forEach((i) => {
    rndm_celebs.push(celebs[i]);
  });
  rndm_celebs.forEach((celeb) => {
    celebs_cont.appendChild(create_celeb(celeb));
  });
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