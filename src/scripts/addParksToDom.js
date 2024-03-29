// string that enters search form into HTML
let visitedPark = "";
const buildAndAppendPark = (parksObject) => {
    if (parksObject.visited) {
      visitedPark = true
    } else {
      visitedPark = false
    }
  return `
        <article class = "${visitedPark}">
            <h3>${parksObject.name}</h3>
            <p>${parksObject.state}</p>
        </article>
    `
  }

  // buildAndAppendPark()

  const addParksToDom = (html) => {
    const parksContainer = document.querySelector(".national-parks-container");
    parksContainer.innerHTML += html;
  }