/* ------ Variables ------ */

const anectdotes = [
  "Ce visiteur a vécu une soirée inoubliable sur la plage, allongé sur le sable à contempler les étoiles, fasciné par la pureté du ciel et les légendes transmises autour du feu.",
  "Touché par la beauté des lieux, cet hôte a passé des heures à dessiner et écrire sur la terrasse de son bungalow, inspiré par la lumière, les sons et les parfums du jardin tropical.",
  "Curieux de découvrir les traditions locales, cet hôte a spontanément participé à une balade en pirogue avec un habitant de l’île, échangeant sur la culture polynésienne avec beaucoup d’intérêt.",
  "L’un de nos hôtes a passé plusieurs journées dans un bungalow sur pilotis, profitant du calme absolu pour se recentrer et admirer le lever du soleil sur le lagon.",
  "Ce visiteur a choisi de prendre tous ses petits-déjeuners en terrasse, en silence, simplement bercé par les chants des oiseaux et la lumière dorée du matin.",
  "Cet hôte a découvert un sentier derrière le jardin de l’hôtel et a passé l’après-midi à explorer la végétation luxuriante, revenant avec un sourire et des photos pleines de poésie.",
  "Cet hôte a demandé à ne pas être dérangé pendant son séjour, souhaitant s’immerger pleinement dans le rythme lent de l’île, loin de toute agitation.",
  "Ce visiteur a passé plusieurs heures allongé sur une natte à écouter le vent dans les palmiers, les yeux fermés, simplement heureux d’avoir le temps de ne rien faire.",
  "Ce visiteur descendait chaque soir jusqu’au bord du lagon pour tremper les pieds dans l’eau tiède au coucher du soleil, sans jamais manquer ce moment qu’il qualifiait de « rituel apaisant ».",
  "Cet hôte a décidé de dormir une nuit sur sa terrasse à la belle étoile, enveloppé dans un plaid, juste pour entendre les sons de la nuit et admirer la lune au-dessus du lagon."
]


/* ------ API Fetch ------ */

async function getData() {
  const url = "https://api.api-ninjas.com/v1/celebrity?min_net_worth=10000000000";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-Api-Key': 'jIVQG2bA4HzZ+5TvtybUxg==hV8aVcU0IQzBVAUW'
    },
  });
  return response.json();
}
getData().then(data => {
  celebs = Object.values(data);
})
getData().catch(error => {
    console.error('Erreur lors du fetch :', error)
});


/* ------ Main ------ */

function random_nbrs(len, max) {
  let res = [];
  for (let i=0; i<len; i++) {
    let rndm = Math.floor(Math.random() * max);
    (!(res.includes(rndm))) ? res.push(rndm) : i--;
  }
  return res;
}

const tab = random_nbrs(6,30);
console.log(tab);

function test() {
  random_nbrs(6,30).forEach (i => {
    console.log(celebs[i]);
    console.log(uppercased(celebs[i].name));
  });
}

function uppercased(fullname) {
  let tab = [];
  fullname.split(" ").forEach (n => {
    tab.push(n.split("")[0].toUpperCase());
    n.split("").slice(1).forEach (letter => {
      tab.push(letter);
    });
    tab.push(" ");
  })
  return tab.join("");
}