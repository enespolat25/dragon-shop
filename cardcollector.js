async function loadCards() {
    let cardTable = document.getElementById("myCards");
    let inEuro = document.getElementById("currency");
    const EURO_CONVERSION = 0.87;
    let priceMultiplier;

    if(inEuro.checked){
        priceMultiplier = EURO_CONVERSION;
        currencySymbol = "&euro;";
    } else{
        priceMultiplier = 1;
        currencySymbol = "&dollar;";
    }

    try {
        const response = await fetch('http://127.0.0.1:5500/cards.json');
        let cardsJson = await response.json();


        var cards = cardsJson.map(function (card) {
            var cardsToShow = {
                "id": card.id,
                "name": card.name,
                "priceUSD": card.priceUSD,
                "isRare": card.isRare
            }
            return cardsToShow;
        })
    }
    catch (err) {
        alert(err);
    }
    cardTable.innerHTML = "<tr><td>ID</td><td>Name</td><td>Price</td><td>Is Rare</td>";
    let rareCards = cards.filter(obj => obj.isRare == true).map(obj => ({ "id": obj.id, "name": obj.name, "priceUSD": obj.priceUSD, "isRare": obj.isRare }));


    let onlyRares = document.getElementById("raresOnly");

    if (onlyRares.checked) {
        for (var i = 0; i < rareCards.length; i++) {
            cardTable.innerHTML += "<tr><td>" + rareCards[i].id + "</td><td>" + rareCards[i].name + "</td><td>" + currencySymbol +  Math.round(rareCards[i].priceUSD * priceMultiplier) + "</td><td>" + rareCards[i].isRare + "</td></tr>";
        }
    } else {
        for (var i = 0; i < cards.length; i++) {
            cardTable.innerHTML += "<tr><td>" + cards[i].id + "</td><td>" + cards[i].name + "</td><td>" + currencySymbol +  Math.round(cards[i].priceUSD * priceMultiplier) + "</td><td>" + cards[i].isRare + "</td></tr>";
        }
    }
}

