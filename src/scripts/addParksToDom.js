// string that enters search form into HTML
const buildAndAppendPark = () => {
    const parkForm = `
        <article>
            <h3>Park Name</h3>
            <p>State the park in located in</p>
        </article>
    `
    console.log(parkForm)

    // inserts string into div
    const parkContainerDiv = document.querySelector("#national-parks-container")
    parkContainerDiv.innerHTML = parkForm
  }

  buildAndAppendPark()