async function loadCards() {
    let cardTable = document.getElementById("myCards");
    try {
        const response = await fetch('http://127.0.0.1:5500/cards.json');
        let cardsJson = await response.json();
        

        var cards = cardsJson.map(function (card) {
            var cardsToShow = {
                "id": card.id,
                "name": card.name,
                "price": card.priceUSD,
                "isRare": card.isRare
            }
            return cardsToShow;
        })
    }
    catch (err) {
        alert(err);
    }
    cardTable.innerHTML = "<tr><td>ID</td><td>Name</td><td>Price</td><td>Is Rare</td>";
    for (var i = 0; i < cards.length; i++) {
        cardTable.innerHTML += "<tr><td>" + cards[i].id + "</td><td>" + cards[i].name + "</td><td>" + cards[i].price + "</td><td>" + cards[i].isRare + "</td></tr>";
    }
}

