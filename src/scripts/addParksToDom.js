// string that enters search form into HTML
const buildAndAppendPark = (parksObject) => {
    const parkForm = `
        <article>
            <h3>${parksObject.name}</h3>
            <p>${parksObject.state}</p>
        </article>
    `
    console.log(parkForm)

    // inserts string into div
    const parkContainerDiv = document.querySelector(".national-parks-container")
    parkContainerDiv.innerHTML = parkForm
    
  }

  buildAndAppendPark()

  const addParksToDOM = (html) => {
    const parksContainer = document.querySelector(".national-parks-container");
    parksContainer.innerHTML += html;
  }