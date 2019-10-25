/*
fetch("http://localhost:8088/parks")
    .then(parks => parks.json())
    .then(parsedParks => {
        console.table(parsedParks)
    })
*/

    fetch("http://localhost:8088/parks")
    .then(parks => parks.json())
    .then(parsedParks => {
        console.log(parsedParks)
        parsedParks.forEach(parks => {
            const ParksAsHTML = buildAndAppendPark(parks)
            addParksToDom(ParksAsHTML)
        })
    })