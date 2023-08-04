async function loadCards(){
    try{
        const response = await fetch('http://127.0.0.1:5500/cards.json');
        let cardsJson = await response.json();
        console.log(cardsJson);
    }
    catch(err){
        alert(err);
    }
}