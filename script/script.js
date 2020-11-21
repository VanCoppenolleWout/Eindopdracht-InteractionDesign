const serverEndPoint = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15';

let customHeaders = new Headers();

customHeaders.append('Accept', 'application/json');


// #1 Classic recipe
const classicFetch = function (endpoint) {
    fetch(endpoint, {
        headers: customHeaders,
    })
    .then(function (response){
        return response.json();
    }) 
    .then(function (json) {
        console.log(json);
    }) 
    .catch(function (error) {
        console.error("An error occured, we handled it.", error);
    });
}

// #2 Intermediate
const intermediate = async function(endpoint) {
    try {
        const response = await fetch(endpoint, {headers: customHeaders});
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("An error occured, we handled it.", error);
    }
}

// #3 Expert
const getData = function(endpoint) {
    return fetch(endpoint, {headers: customHeaders})
    .then((r) => r.json())
    .catch((error) => {
        return {error: error};
    });
}


// #0 excecute
classicFetch(serverEndPoint);