// src = "https://stackoverflow.com/a/70144758/30053550"

customElements.define("star-rating", class extends HTMLElement {
  set rating(rate) {
    if (!String(rate).includes("%")) {
      rate = Number(rate) / this.stars * 100 + "%";
    }
    this.querySelector(":nth-child(2)").setAttribute("width", rate);
  }

  connectedCallback() {
    const repeat = (count, func) => Array(count).fill().map(func);
    this.stars = 5;
    const nocolor = "grey";
    const color = "gold";
    const rating = this.getAttribute("rating");

    this.innerHTML =
      `<svg viewBox="0 0 ${this.stars * 100} 100">` +
        `<rect height="100" fill="${nocolor}" width="100%" />` +
        `<rect height="100" fill="${color}" />` +
        repeat(this.stars, (_, n) =>
          `<path fill="#FCF4E4" d="m${n * 100} 0h102v100h-102v-100m91 42a6 6 90 00-4-10l-22-1a1 1 90 01-1 0l-8-21a6 6 90 00-11 0l-8 21a1 1 90 01-1 1l-22 1a6 6 90 00-4 10l18 14a1 1 90 010 1l-6 22a6 6 90 008 6l19-13a1 1 90 011 0l19 13a6 6 90 006 0a6 6 90 002-6l-6-22a1 1 90 010-1z"/>`
        ).join("") +
      `</svg>`;

    this.rating = rating;
  }
});