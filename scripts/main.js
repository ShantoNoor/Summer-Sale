function setPrices() {
    const totalPriceEl = document.querySelector('#totalPrice')
    const discountEl = document.querySelector('#discount')
    const totalEl = document.querySelector('#total')

    const purchaseBtn = document.querySelector('#purchase-btn')
    if(totalPrice > 0) {
        purchaseBtn.removeAttribute('disabled')
    } else {
        purchaseBtn.setAttribute('disabled', true)
    }

    const couponBtn = document.querySelector('#coupon-btn')
    if(totalPrice >= 200) {
        couponBtn.removeAttribute('disabled')
    } else {
        couponBtn.setAttribute('disabled', true)
    }

    if(isCouponApplied) {
        disount = totalPrice * 0.2
    }
    total = totalPrice - disount

    totalPriceEl.innerText = totalPrice.toFixed(2) + ' TK'
    discountEl.innerText = disount.toFixed(2) + ' TK'
    totalEl.innerText = total.toFixed(2) + ' TK'
}

function handleClick(data) {
    const name = data.childNodes[2].innerText
    const price = parseFloat(data.childNodes[3].innerText.split(' ')[0])

    const liEl = createElementWithClassNames('li', 'py-1 font-medium')
    liEl.appendChild(document.createTextNode(name))

    const olEl = document.querySelector('#cart')
    olEl.appendChild(liEl)

    totalPrice += price
    setPrices()
}

function handleCoupon() {
    const couponText = document.querySelector('#coupon-text').value

    document.querySelector('#coupon-text').value = ''
    
    if(couponText === 'SELL200') {
        if(isCouponApplied) {
            alert('Coupon Code Already Applied')
            return
        }

        isCouponApplied = true
        setPrices()
    } else if(couponText === '') {
        alert('No Coupon Code Found. Please, Try again whit a valid Coupon Code.')
    } else {
        alert('Invalid Coupon Code. Please, Try again whit a valid Coupon Code.')
    }
}

function resetValues() {
    totalPrice = 0;
    disount = 0;
    price = 0;
    isCouponApplied = false

    setPrices()
    document.getElementById('cart').innerHTML = ''
    document.querySelector('#coupon-text').value = ''


}

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
    const cardBody = createElementWithClassNames('div', 'rounded-lg p-5 text-center bg-white cursor-pointer hover:-translate-y-2 duration-300 hover:shadow-xl active:shadow-lg active:-translate-y-1')
    cardBody.id = cardData.id
    cardBody.setAttribute('onclick', 'handleClick(this)')

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

setPrices()

for(const category of porducts_data) {
    createAndAddTitle(category.title, 'card-container')
    createAndAddCardContainer(category.id, 'card-container')

    for(const item of category.items) {
        createAndAddCard(item, category.id)
    }
}
