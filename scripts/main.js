for(const category of porducts_data) {
    createAndAddTitle(category.title, 'card-container')
    createAndAddCardContainer(category.id, 'card-container')

    for(const item of category.items) {
        createAndAddCard(item, category.id)
    }
}