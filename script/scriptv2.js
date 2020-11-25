let showResult = (queryResponse) => {
    let filterMixed = queryResponse.filter(element => element.steamRatingText == "Very Positive");
    var item1 = filterMixed[Math.floor(Math.random() * filterMixed.length)];
    while (item1.title == "Fire") {
        var item1 = filterMostlyPositive[Math.floor(Math.random() * filterMostlyPositive.length)];
    }
    var item2 = filterMixed[Math.floor(Math.random() * filterMixed.length)];
    while (item2.title == "Fire") {
        var item2 = filterMostlyPositive[Math.floor(Math.random() * filterMostlyPositive.length)];
    }

    while (item1 == item2) {
        var item1 = filterMixed[Math.floor(Math.random() * filterMixed.length)];
        var item2 = filterMixed[Math.floor(Math.random() * filterMixed.length)];
    }

    // de game Anno 1800 geeft een ander formaat terug dat ik niet kan gebruiken
    let filterMostlyPositive = queryResponse.filter(element => element.steamRatingText == "Mostly Positive");
    var item3 = filterMostlyPositive[Math.floor(Math.random() * filterMostlyPositive.length)];
    while (item3.title == "Anno 1800" || item3.title == "Fire") {
        var item3 = filterMostlyPositive[Math.floor(Math.random() * filterMostlyPositive.length)];
    }
    var item4 = filterMostlyPositive[Math.floor(Math.random() * filterMostlyPositive.length)];
    while (item4.title == "Anno 1800"|| item4.title == "Fire") {
        var item4 = filterMostlyPositive[Math.floor(Math.random() * filterMostlyPositive.length)];
    }

    while (item3 == item4) {
        var item3 = filterMixed[Math.floor(Math.random() * filterMixed.length)];
        var item4 = filterMixed[Math.floor(Math.random() * filterMixed.length)];
    }

    let filterPositive = queryResponse.filter(element => element.steamRatingText == "Mixed");
    var item5 = filterPositive[Math.floor(Math.random() * filterPositive.length)];
    var item6 = filterPositive[Math.floor(Math.random() * filterPositive.length)];

    while (item5 == item6) {
        var item5 = filterMixed[Math.floor(Math.random() * filterMixed.length)];
        var item6 = filterMixed[Math.floor(Math.random() * filterMixed.length)];
    }

    cheapGame1(item1);
    cheapGame2(item2);
    cheapGame3(item3);
    cheapGame4(item4);
    cheapGame5(item5);
    cheapGame6(item6);

    // for (const obj of queryResponse) {
    //     console.log(obj)
    // }
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

const getAPIparam = async (lowerprice, upperprice) => {
    const data = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=2&lowerPrice=${lowerprice}&upperPrice=${upperprice}&onSale=1`)
        .then((r) => r.json())
        .catch((err) => console.error('An error occured', err));
        showResult(data);
};

document.addEventListener('DOMContentLoaded', function() {
    getAPI();

    const btn_zeerpositief = document.querySelector(".js-zeerpositief");
    btn_zeerpositief.addEventListener('click', event => {
        getAPIparam(0, 10);
    });

    const btn_positief = document.querySelector(".js-positief");
    btn_positief.addEventListener('click', event => {
        getAPIparam(10, 15);
    });

    const btn_gemiddeld = document.querySelector(".js-gemiddeld");
    btn_gemiddeld.addEventListener('click', event => {
        getAPIparam(15, 100);
    });
});