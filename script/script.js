let showResult = (queryResponse) => {
	// We gaan eerst een paar onderdelen opvullen
    // Zorg dat de juiste locatie weergegeven wordt, volgens wat je uit de API terug krijgt.
    console.log(queryResponse[0].title, queryResponse[0].normalPrice, queryResponse[0].salePrice, queryResponse[0].steamRatingPercent, queryResponse[0].thumb);
};

const getAPI = async () => {
    // Eerst bouwen we onze url op
    // Met de fetch API proberen we de data op te halen.
    // Als dat gelukt is, gaan we naar onze showResult functie.

    const data = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1`)
        .then((r) => r.json())
        .catch((err) => console.error('An error occured', err));
    showResult(data);
    console.log(data);
};

document.addEventListener('DOMContentLoaded', function() {
	// 1 We will query the API with longitude and latitude.
	getAPI();
});