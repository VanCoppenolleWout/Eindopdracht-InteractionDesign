let showResult = (queryResponse) => {
    var item1 = queryResponse[Math.floor(Math.random() * queryResponse.length)];
    var item2 = queryResponse[Math.floor(Math.random() * queryResponse.length)];
    console.log(item1)
    console.log(item2)

    cheapGame1(item1);
    cheapGame2(item2);

    // for (const obj of queryResponse) {
    //     console.log(obj)
    // }
    //console.log(queryResponse[0].title, queryResponse[0].normalPrice, queryResponse[0].salePrice, queryResponse[0].steamRatingPercent, queryResponse[0].thumb);
};

let showResultMixed = (queryResponse) => {
    let filter = queryResponse.filter(element => element.steamRatingText == "Mixed");

    var item1 = filter[Math.floor(Math.random() * filter.length)];
    var item2 = filter[Math.floor(Math.random() * filter.length)];
    console.log(item1)
    console.log(item2)

    cheapGame1(item1);
    cheapGame2(item2);
};

let showResultMostlyPositive = (queryResponse) => {
    let filter = queryResponse.filter(element => element.steamRatingText == "Mostly Positive");

    var item1 = filter[Math.floor(Math.random() * filter.length)];
    var item2 = filter[Math.floor(Math.random() * filter.length)];
    console.log(item1)
    console.log(item2)

    cheapGame1(item1);
    cheapGame2(item2);
};

let showResultVeryPositive = (queryResponse) => {
    let filter = queryResponse.filter(element => element.steamRatingText == "Very Positive");

    var item1 = filter[Math.floor(Math.random() * filter.length)];
    var item2 = filter[Math.floor(Math.random() * filter.length)];
    console.log(item1)
    console.log(item2)

    cheapGame1(item1);
    cheapGame2(item2);
};

const cheapGame1 = function(item) {

    const gameTitle = document.querySelector(".js-title");
    gameTitle.innerHTML = `${item.title}`;

    const gameDiscount = document.querySelector(".js-discount");
    gameDiscount.innerHTML = `€ ${item.salePrice}`;

    const gamaNormalprice = document.querySelector(".js-normalprice");
    gamaNormalprice.innerHTML = `€ ${item.normalPrice}`;

    const gameThumb = document.querySelector(".js-thumb");
    gameThumb.innerHTML = `<img class="c-thumbnail" src="${item.thumb}" alt="">`;
    
    const gameRating = document.querySelector(".js-rating");
    gameRating.innerHTML = `${item.steamRatingPercent}/100`;
};

const cheapGame2 = function(item) {

    const gameTitle = document.querySelector(".js-title2");
    gameTitle.innerHTML = `${item.title}`;

    const gameDiscount = document.querySelector(".js-discount2");
    gameDiscount.innerHTML = `€ ${item.salePrice}`;

    const gamaNormalprice = document.querySelector(".js-normalprice2");
    gamaNormalprice.innerHTML = `€ ${item.normalPrice}`;

    const gameThumb = document.querySelector(".js-thumb2");
    gameThumb.innerHTML = `<img class="c-thumbnail" src="${item.thumb}" alt="">`;
    
    const gameRating = document.querySelector(".js-rating2");
    gameRating.innerHTML = `${item.steamRatingPercent}/100`;
};

const getAPI = async () => {
    const data = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1`)
        .then((r) => r.json())
        .catch((err) => console.error('An error occured', err));
    showResult(data);
    //console.log(data);
};

const getAPIMixed = async () => {
    const data = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1`)
        .then((r) => r.json())
        .catch((err) => console.error('An error occured', err));
    showResultMixed(data);
    //console.log(data);
};

const getAPIMostlyPositive = async () => {
    const data = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1`)
        .then((r) => r.json())
        .catch((err) => console.error('An error occured', err));
    showResultMostlyPositive(data);
    //console.log(data);
};

const getAPIVeryPositive = async () => {
    const data = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1`)
        .then((r) => r.json())
        .catch((err) => console.error('An error occured', err));
    showResultVeryPositive(data);
    //console.log(data);
};

document.addEventListener('DOMContentLoaded', function() {
    getAPI()

    

    //getAPIMixed();
    //getAPIMostlyPositive();
    //getAPIVeryPositive();
});