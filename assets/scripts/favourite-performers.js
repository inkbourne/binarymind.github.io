const actorsElement = document.getElementById('actors')

let actors = [
    'Kevin Costner',
    'Seann William Scott',
    'Jason Biggs',
    'Paul Rudd',
    'Jesse Eisenberg',
    'Joaquin Phoenix',
    'Topher Grace',
    'Ashton Kutcher',
    'Matthew McConaughey',
    'Michael Cera',
    'James Franco',
    'Seth Rogen',
    'Jason Segel',
    'Channing Tatum',
    'Morgan Freeman',
    'Martin Starr',
    'Johnny Depp',
    'Leonardo DiCaprio',
    'Will Smith',
    'Chris Farley',
    'Matt Damon',
    'Keanu Reeves',
    'Robin Williams',
    'Freddie Highmore',
    'Bradley Cooper',
    'Jim Carrey',
    'Jake Gyllenhaal',
    'Orlando Bloom',
    'Heath Ledger'
]

actors.forEach((actor) => {
    let actorNameSplit = actor.split(' ')
    let actorNameJoin = actorNameSplit.join('-').toLowerCase()

    let containerElement = document.createElement('li')

    let actorImageElement = document.createElement('img')
    actorImageElement.src = `../assets/images/performers/${actorNameJoin}.jpg`

    let actorNameElement = document.createElement('span')
    actorNameElement.textContent = actor

    containerElement.appendChild(actorImageElement)
    containerElement.appendChild(actorNameElement)

    actorsElement.appendChild(containerElement)
})