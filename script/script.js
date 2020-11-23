let showResult = (queryResponse) => {
    let filterSale = queryResponse.filter(element => element.isOnSale == "1");
    var item1 = filterSale[Math.floor(Math.random() * filterSale.length)];
    var item2 = filterSale[Math.floor(Math.random() * filterSale.length)];
    var item3 = filterSale[Math.floor(Math.random() * filterSale.length)];
    var item4 = filterSale[Math.floor(Math.random() * filterSale.length)];
    var item5 = filterSale[Math.floor(Math.random() * filterSale.length)];
    var item6 = filterSale[Math.floor(Math.random() * filterSale.length)];
    console.log(item1)
    console.log(item2)

    cheapGame1(item1);
    cheapGame2(item2);
    cheapGame2(item3);
    cheapGame2(item4);
    cheapGame2(item5);
    cheapGame2(item6);

    // for (const obj of queryResponse) {
    //     console.log(obj)
    // }
    //console.log(queryResponse[0].title, queryResponse[0].normalPrice, queryResponse[0].salePrice, queryResponse[0].steamRatingPercent, queryResponse[0].thumb);
};

let showResultMixed = (queryResponse) => {
    let filter = queryResponse.filter(element => element.steamRatingText == "Mixed");
    var item1 = filter[Math.floor(Math.random() * filter.length)];
    var item2 = filter[Math.floor(Math.random() * filter.length)];
    var item3 = filter[Math.floor(Math.random() * filter.length)];
    var item4 = filter[Math.floor(Math.random() * filter.length)];
    var item5 = filter[Math.floor(Math.random() * filter.length)];
    var item6 = filter[Math.floor(Math.random() * filter.length)];
    console.log(item1)
    console.log(item2)

    cheapGame1(item1);
    cheapGame2(item2);
    cheapGame3(item3);
    cheapGame4(item4);
    cheapGame5(item5);
    cheapGame6(item6);
};

let showResultMostlyPositive = (queryResponse) => {
    let filter = queryResponse.filter(element => element.steamRatingText == "Mostly Positive");

    var item1 = filter[Math.floor(Math.random() * filter.length)];
    var item2 = filter[Math.floor(Math.random() * filter.length)];
    var item3 = filter[Math.floor(Math.random() * filter.length)];
    var item4 = filter[Math.floor(Math.random() * filter.length)];
    var item5 = filter[Math.floor(Math.random() * filter.length)];
    var item6 = filter[Math.floor(Math.random() * filter.length)];
    console.log(item1)
    console.log(item2)

    cheapGame1(item1);
    cheapGame2(item2);
    cheapGame3(item3);
    cheapGame4(item4);
    cheapGame5(item5);
    cheapGame6(item6);
};

let showResultVeryPositive = (queryResponse) => {
    let filter = queryResponse.filter(element => element.steamRatingText == "Very Positive");

    var item1 = filter[Math.floor(Math.random() * filter.length)];
    var item2 = filter[Math.floor(Math.random() * filter.length)];
    var item3 = filter[Math.floor(Math.random() * filter.length)];
    var item4 = filter[Math.floor(Math.random() * filter.length)];
    var item5 = filter[Math.floor(Math.random() * filter.length)];
    var item6 = filter[Math.floor(Math.random() * filter.length)];
    console.log(item1)
    console.log(item2)

    cheapGame1(item1);
    cheapGame2(item2);
    cheapGame3(item3);
    cheapGame4(item4);
    cheapGame5(item5);
    cheapGame6(item6);
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

const cheapGame3 = function(item) {

    const gameTitle = document.querySelector(".js-title3");
    gameTitle.innerHTML = `${item.title}`;

    const gameDiscount = document.querySelector(".js-discount3");
    gameDiscount.innerHTML = `€ ${item.salePrice}`;

    const gamaNormalprice = document.querySelector(".js-normalprice3");
    gamaNormalprice.innerHTML = `€ ${item.normalPrice}`;

    const gameThumb = document.querySelector(".js-thumb3");
    gameThumb.innerHTML = `<img class="c-thumbnail" src="${item.thumb}" alt="">`;
    
    const gameRating = document.querySelector(".js-rating3");
    gameRating.innerHTML = `${item.steamRatingPercent}/100`;
};

const cheapGame4 = function(item) {

    const gameTitle = document.querySelector(".js-title4");
    gameTitle.innerHTML = `${item.title}`;

    const gameDiscount = document.querySelector(".js-discount4");
    gameDiscount.innerHTML = `€ ${item.salePrice}`;

    const gamaNormalprice = document.querySelector(".js-normalprice4");
    gamaNormalprice.innerHTML = `€ ${item.normalPrice}`;

    const gameThumb = document.querySelector(".js-thumb4");
    gameThumb.innerHTML = `<img class="c-thumbnail" src="${item.thumb}" alt="">`;
    
    const gameRating = document.querySelector(".js-rating4");
    gameRating.innerHTML = `${item.steamRatingPercent}/100`;
};

const cheapGame5 = function(item) {

    const gameTitle = document.querySelector(".js-title5");
    gameTitle.innerHTML = `${item.title}`;

    const gameDiscount = document.querySelector(".js-discount5");
    gameDiscount.innerHTML = `€ ${item.salePrice}`;

    const gamaNormalprice = document.querySelector(".js-normalprice5");
    gamaNormalprice.innerHTML = `€ ${item.normalPrice}`;

    const gameThumb = document.querySelector(".js-thumb5");
    gameThumb.innerHTML = `<img class="c-thumbnail" src="${item.thumb}" alt="">`;
    
    const gameRating = document.querySelector(".js-rating5");
    gameRating.innerHTML = `${item.steamRatingPercent}/100`;
};

const cheapGame6 = function(item) {

    const gameTitle = document.querySelector(".js-title6");
    gameTitle.innerHTML = `${item.title}`;

    const gameDiscount = document.querySelector(".js-discount6");
    gameDiscount.innerHTML = `€ ${item.salePrice}`;

    const gamaNormalprice = document.querySelector(".js-normalprice6");
    gamaNormalprice.innerHTML = `€ ${item.normalPrice}`;

    const gameThumb = document.querySelector(".js-thumb6");
    gameThumb.innerHTML = `<img class="c-thumbnail" src="${item.thumb}" alt="">`;
    
    const gameRating = document.querySelector(".js-rating6");
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
    getAPI();

    const btn_zeerpositief = document.querySelector(".js-zeerpositief");
    btn_zeerpositief.addEventListener('click', event => {
        getAPIVeryPositive();
    });

    const btn_positief = document.querySelector(".js-positief");
    btn_positief.addEventListener('click', event => {
        getAPIMostlyPositive();
    });

    const btn_gemiddeld = document.querySelector(".js-gemiddeld");
    btn_gemiddeld.addEventListener('click', event => {
        getAPIMixed();
    });
});