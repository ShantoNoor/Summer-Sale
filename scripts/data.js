let totalPrice = 0
let disount = 0
let total = 0
let isCouponApplied = false

const porducts_data = [
    {
        id: 'category1',
        title: 'Kitchenware',
        items: [
            {
                id: 'product11',
                name: 'K. Accessories',
                rating: 3,
                price: 39.00,
                image: './images/prod1.png'
            },
            {
                id: 'product12',
                name: 'K. Accessories',
                rating: 0,
                price: 25.00,
                image: './images/prod2.png'
            },
            {
                id: 'product13',
                name: 'Home Cooker',
                rating: 4,
                price: 49.00,
                image: './images/prod3.png'
            }
        ]
    },
    {
        id: 'category2',
        title: 'Sportswear',
        items: [
            {
                id: 'product21',
                name: 'Sports Back Cap',
                rating: 2,
                price: 49.00,
                image: './images/prod4.png'
            },
            {
                id: 'product22',
                name: 'Full Jersey Set',
                rating: 4,
                price: 69.00,
                image: './images/prod5.png'
            },
            {
                id: 'product23',
                name: 'Sports cates',
                rating: 3,
                price: 159.00,
                image: './images/prod6.png'
            }
        ]
    },
    {
        id: 'category3',
        title: 'Furniture',
        items: [
            {
                id: 'product31',
                name: 'Single Relax Chair',
                rating: 4,
                price: 185.00,
                image: './images/prod7.png'
            },
            {
                id: 'product32',
                name: 'Children play',
                rating: 5,
                price: 299.00,
                image: './images/prod8.png'
            },
            {
                id: 'product33',
                name: 'Flexible Sofa',
                rating: 5,
                price: 339.00,
                image: './images/prod9.png'
            }
        ]
    }
]