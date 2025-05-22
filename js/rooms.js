const main = document.querySelector("main");

async function showcarte() {
    const url = "../json/rooms.json";
    const reponse = await fetch(url, {
        method: "GET",
        headers: {
            "content-type":"application/json",
        },
    });
     return reponse.json();
};
    
showcarte().then((data) => {
    data = Object.values(data);
    data.forEach(rooms => {
        main.appendChild(create_section(rooms)) 
    });
})

let i=0;
function create_section(rooms) {
    const section = document.createElement("article");
    section.className= `rooms${i} rooms ${i%2 !== 0 ? "reverse" : ""}`;
    section.innerHTML = `
    <div class="room-pic">
        <img src=${rooms.img}> 
    </div>
    <div class="room-text">
        <h2>${rooms.h2}</h2>
        <h3>${rooms.h3}</h3>
        <p>${rooms.p}</p>
    </div>  
    `;
    i++;
    return section;
}