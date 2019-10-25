// string that enters search form into HTML
const buildAndAppendPark = () => {
    const parkForm = `
        <article>
            <h3>Park Name</h3>
            <p>State the park in located in</p>
        </article>

    `
    //make sure to put class on input tags so event can find the correct input
    console.log(parkForm)

    // inserts string into search-container div
    const searchContainerDiv = document.querySelector("#national-parks-container")
    searchContainerDiv.innerHTML = parkForm
  }