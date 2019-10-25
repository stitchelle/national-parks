// string that enters search form into HTML
const buildAndAppendPark = (parksObject) => {
    return `
        <article>
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