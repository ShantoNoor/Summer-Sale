
function createElementWithClassNames(elementTagName, classNames) {
    const cel = document.createElement(elementTagName)
    cel.className = classNames
    return cel
}

function createAndAddTitle(title, id) {
    const cel = createElementWithClassNames('h4', 'font-semibold text-4xl mb-8 mt-14')
    cel.appendChild(document.createTextNode(title))
    document.querySelector('#' + id).appendChild(cel)
}

function createAndAddCardContainer(containerId, id) {
    const cel = createElementWithClassNames('div', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6')
    cel.id = containerId
    document.querySelector('#' + id).appendChild(cel)
}

function createRating(name, rating) {
    const ratingBody = createElementWithClassNames('div', 'rating rating-md w-full justify-center mt-5')
    
    const noStar = createElementWithClassNames('input', 'rating-hidden')
    noStar.setAttribute('name', name)
    noStar.setAttribute('type', 'radio')

    if(rating === 0) {
        noStar.setAttribute('checked', true)
    }

    ratingBody.appendChild(noStar)

    for(let i = 1; i <= 5; ++i) {
        const star = createElementWithClassNames('input', 'mask mask-star-2 bg-[#FFC107]')
        star.setAttribute('name', name)
        star.setAttribute('type', 'radio')

        if(i === rating) {
            star.setAttribute('checked', true)
        }

        ratingBody.appendChild(star)
    }

    return ratingBody
}

function createAndAddCard(cardData, id) {
    const cardBody = createElementWithClassNames('div', 'rounded-lg p-5 text-center bg-white')
    cardBody.id = cardData.id

    const imageContainer = createElementWithClassNames('div', 'bg-[#11111122] rounded-lg h-[200px] flex justify-center items-center')

    const image = document.createElement('img')
    image.setAttribute('src', cardData.image)
    image.setAttribute('alt', cardData.id)

    imageContainer.appendChild(image)

    const name = createElementWithClassNames('h5', 'my-2 color-[#111px] text-xl')
    name.appendChild(document.createTextNode(cardData.name))

    const price = createElementWithClassNames('p', 'text-[#11111188]')
    price.appendChild(document.createTextNode(cardData.price.toFixed(2) + ' TK'))

    cardBody.appendChild(imageContainer)
    cardBody.appendChild(createRating(cardData.id, cardData.rating))
    cardBody.appendChild(name)
    cardBody.appendChild(price)

    document.querySelector('#' + id).appendChild(cardBody)
}


// createAndAddCard(porducts_data[0].items[0], porducts_data[0].id)