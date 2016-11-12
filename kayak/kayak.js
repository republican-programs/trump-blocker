function isTrumpProperty(index, elem) {
  var propertyName = $(elem).text(); 
  return /^Trump/.test(propertyName);
}

function getSearchResult(index, elem) {
  return $(elem).closest(".resultsContainer");
}

var hotelTitles      = $(".titleContainer"),
    trumpProperties = hotelTitles.filter(isTrumpProperty),
    searchResults   = trumpProperties.map(getSearchResult);

console.log("hotel titles", hotelTitles);
console.log("trump properties", trumpProperties);
console.log("search results", searchResults);

searchResults.addClass("trump-property");